const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).json('Trust Issue');
    const token = req.headers.authorization
    jwt.verify(token, 'eyJ1c2VybmFtZSI6ImFkbWluIn0', (err, user) => {
        if (err) {
            return res.status(401).json('Trust Issue');
        }
        next();
    });
};