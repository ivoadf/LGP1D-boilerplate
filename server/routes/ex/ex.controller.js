var controller = {}
// Gets a list of Exs
controller.index = function(req, res) {
    res.json({ message: 'Welcome to the API' });
}

// Gets a single Ex from the DB
controller.show = function(req, res) {
}

// Creates a new Ex in the DB
controller.create = function (req, res) {

}

// Upserts the given Ex in the DB at the specified ID
controller.upsert = function(req, res) {

}

// Updates an existing Ex in the DB
controller.patch = function(req, res) {

}

// Deletes a Ex from the DB
controller.destroy = function(req, res) {

}

module.exports = controller;
