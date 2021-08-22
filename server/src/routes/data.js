import express from 'express';
import db from '../config/db';
const routerData = express.Router();

routerData.get('/', function (req, res) {
    let sql = `SELECT * FROM photos`
    db.query(sql, (err, data) => {
        if (err) res.send('something wrong!')
        res.json(data)
    })
})

module.exports = routerData