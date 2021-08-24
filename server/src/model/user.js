import db from '../config/db';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signIn = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE username = ?`, [data.username], (err, res) => {
            if (err || res.length != 1) {
                reject ('username/passwor failed')
            } else {
                bcrypt.compare(data.password, res[0].password, function (err, res) {
                    if (!res) reject('username/passwor failed')
                    const token = jwt.sign(JSON.stringify({ username: data.username}), 'eyJ1c2VybmFtZSI6ImFkbWluIn0')
                    resolve(token)
                })
            }
        })
    })
}

export {signIn}