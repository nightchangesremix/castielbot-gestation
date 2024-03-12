const { Schema, model } = require('mongoose');

const litterSchema = new Schema ({
initialNumberOfKittens: Number,
numberOfKittens: Number,
hitPoints: Number,
squidsDefeated: Number,
hasWings: Boolean,
isRound: Boolean,
litterScrunge: Boolean,
birthServer: String,
birthChannel: String,
birthTime: Date,
});

module.exports = model("kitten", litterSchema);