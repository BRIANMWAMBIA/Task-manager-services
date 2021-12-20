const not_found = (req, res) => res.status(404).send("Route not found");
module.exports = not_found;
