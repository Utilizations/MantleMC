const { Schema, model } = require('mongoose');

module.exports = model("ClaimDB", new Schema({
    GuildID: String,
    UserID: String,
    Content: Array

}))