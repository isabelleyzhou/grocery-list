const Router = require('express-promise-router');

const db = require('../db/index');

const router = new Router();

/**
 * For testing - feel free to remove
 */
router.get('/', (req, res) => res.send('API is functioning!'));

/**
 * Returns a list of trips stored in the database
 */
router.get('/trips', async (req, res) => {
    try {
        const query = await db.query(
            'SELECT * FROM trips ORDER BY id;'
        );
        res.send(query.rows);
    } catch (error) {
        console.log(error.stack);
    }
});

/**
 * Returns the grocery list of items for a given trip
 * e.g. GET localhost:8080/api/items/1 -> ["Pizza", "Oreos", "Cinnamon Toast Crunch"]
 */
router.get('/items/:tripID', async (req, res) => {
    try {
        const { tripID } = req.params;
        const items = [];
        const query = await db.query(
            'SELECT item_name FROM items WHERE trip_id=$1 ORDER BY id;',
            [tripID]
        );
        query.rows.forEach(e => {
            items.push(e.item_name);
        });
        res.send(items);
    } catch (error) {
        console.log(error.stack);
    }
});

/**
 * Adds an item to the grocery list of items for a given trip
 */
router.post('/items/:tripID', async (req, res) => {
    try {
        const { tripID } = req.params;
        const { itemName } = req.body;
        const query = await db.query(
            'INSERT INTO items (trip_id, item_name) VALUES ($1, $2) RETURNING id;',
            [tripID, itemName]
        );
        const itemID = query.rows[0].id;
        res.send({
            id: itemID,
            trip: tripID,
            name: itemName,
        });
    } catch (error) {
        console.log(error.stack);
    }
});

/**
 * Creates a new trip
 */
router.post('/addtrip', async (req, res) => {
    try {
        const { tripName } = req.body;
        const query = await db.query(
            'INSERT INTO trips (trip_name) VALUES ($1) RETURNING id;',
            [tripName]
        );
        const tripID = query.rows[0].id;
        res.send({
            id: tripID,
            name: tripName,
        });
    } catch (error) {
        console.log(error.stack);
    }
});

/** Don't forget to export */
module.exports = router;