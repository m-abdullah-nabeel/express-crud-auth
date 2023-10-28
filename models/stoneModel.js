const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const stoneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  description: String,
  finish: String,
  size: String,
  width: String,
  color_pattern: String,
  tones: [{ name: String, tone_value: String }],
  // date: { type: Date, default: Date.now },
});

const Stone = new model("Stones", stoneSchema);

module.exports = Stone;
