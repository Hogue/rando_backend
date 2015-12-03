var mongoose = require('mongoose');

// Create the MovieSchema.
var PlayerSchema = new mongoose.Schema({
  position: String,
  name: String,
  salary: Number,
});

// Export the model schema.
module.exports = PlayerSchema;
