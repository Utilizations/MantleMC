const { Schema, model } = require('mongoose');

module.exports = model("IslandsDB", new Schema({
    GuildID: String,
    Content: Array

}))