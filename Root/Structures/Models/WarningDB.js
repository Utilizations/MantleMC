const { Schema, model } = require('mongoose');

module.exports = model("WarningsDB", new Schema({
    GuildID: String,
    UserID: String,
    UserTag: String,
    Content: Array

}))