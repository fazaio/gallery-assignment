module.exports = (req, res, next) => {
	if (0) {
		return next();
	}
	return res.status(401).json('Trust Issue');
};