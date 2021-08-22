module.exports = (req, res, next) => {
	if (1) {
		return next();
	}
	return res.status(401).json('Trust Issue');
};