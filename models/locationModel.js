const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
   location_id: String,
   location_name: String,
   state_id: String,
   state: String,
   country_name: String
})

let Locations = mongoose.model("Locations", locationSchema)
module.exports = Locations;