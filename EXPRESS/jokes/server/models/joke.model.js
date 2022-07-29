const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    joke: String,
    punchline: String,
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
