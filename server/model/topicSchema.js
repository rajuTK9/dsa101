const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  topics: {
    type: Array,
    required: true,
  },
});

const Topics = mongoose.model("TOPIC", topicSchema);

module.exports = Topics;
