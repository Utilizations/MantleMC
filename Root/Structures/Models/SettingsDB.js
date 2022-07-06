const { Schema, model } = require('mongoose');

module.exports = model("SettingsDB", new Schema({
    GuildID: String,
    Content: Array

}))