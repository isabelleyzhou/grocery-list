const Router = require('express-promise-router');

const db = require('../db/index');

const router = new Router();

/**
 * For testing - feel free to remove
 */
router.get('/', (req, res) => res.send('Hello World!'));

/**
 * Returns the grocery list of items for a given trip
 */
router.get('/items/:tripID', async (req, res) => {
    try {
        const { tripID } = req.params;
        const query = await db.query(
            'SELECT item_name FROM items WHERE trip_id=$1 ORDER BY id;',
            [tripID]
        );
        res.send(query.rows);
        // res.send(`/api/items/${tripID}`);
    } catch (error) {
        console.log(error.stack);
    }
});

/**
 * Adds an item to the grocery list of items for a given trip
 */
router.post('/items/:tripID', (req, res) => {
    const { tripID } = req.params;
    const { itemName } = req.body;
});


module.exports = router;