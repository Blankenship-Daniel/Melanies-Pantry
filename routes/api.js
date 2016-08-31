var express = require('express');
var router = express.Router();

var db = require('../storage/db_connection');

function getAllFoodsPromise(firebaseRef) {
    return firebaseRef.once('value').then(function(snapshot) {
        return snapshot.val();
    });
}

// create
router.route('/c').post(function(req, res, next) {
    var errors = [];
    if (!req.body.hasOwnProperty('foodName')) errors.push('foodName');
    if (!req.body.hasOwnProperty('foodType')) errors.push('foodType');
    if (errors.length > 0) {
        res.status(500).send('Missing required fields [' +
            errors.toString() + ']');
    }

    var ref = db.child(req.body.foodType);
    ref.push().set({
        name: req.body.foodName,
        date_added: Date.now(),
        last_updated_date: Date.now()
    });

    res.send('Added data');
});

// retrieve
router.route('/r/all').get(function(req, res, next) {
    getAllFoodsPromise(db).then(function(json) {
        res.json(json);
    });
});

// update
router.route('/u').put(function(req, res) {
    console.log('update');
});

// delete
router.route('/d').delete(function(req, res) {
    console.log('delete');
});

module.exports = router;
