const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('user').find();
    result.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { getData };
