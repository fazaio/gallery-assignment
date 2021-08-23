const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.headers.authorization.split(' ')[1];

	jwt.verify(token, 'eyJ1c2VybmFtZSI6ImFkbWluIn0', (err, user) => {
        if (err) {
            return res.status(401).json('Trust Issue');
        }
        next();
    });
};