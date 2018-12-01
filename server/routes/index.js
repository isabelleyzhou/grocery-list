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
        // In the query, create month and day keys that are extracted from the date object
        const query = await db.query(
            `SELECT
                id,
                trip_date;`
            //     EXTRACT(DAY from trip_date) AS day,
            //     EXTRACT(MONTH from trip_date)
            // AS month FROM trips ORDER BY id;`
        );
        res.send(query.rows);
    } catch (error) {
        console.log(error.stack);
    }
});

/**
 * Returns the grocery list of items for a given trip
 * e.g. GET /api/items/1 -> ["Pizza", "Oreos", "Cinnamon Toast Crunch"]
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
router.post('/items', async (req, res) => {
    try {
        const { itemName, tripID } = req.body;
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
 * Haven't tested yet - requires form data
 */
router.post('/addtrip', async (req, res) => {
    try {
        const { date } = req.body;
        db.query(
            'INSERT INTO trips(trip_date) VALUES ($1);',
            [date]
        );
    } catch (error) {
        console.log(error.stack);
    }
    res.send('Update successful');
});

/** Don't forget to export */
module.exports = router;