const { Schema, model } = require('mongoose');

module.exports = model("licenseDB", new Schema({
    GuildID: String,
    LicenseKey: Number

}))