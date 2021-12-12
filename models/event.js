const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  scrapeDate: { type: Date, required: true },
  source: { type: String, required: true },
  url: { type: String, required: true },
  artist: { type: [String], required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: false },
  sponsor: { type: String, required: false },
  venue: { type: String, required: false },
  stage: { type: String, required: false },
  review: { type: Boolean, required: true },
});

module.exports = mongoose.model("Event", eventSchema);