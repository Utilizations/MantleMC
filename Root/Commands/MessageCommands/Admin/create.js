const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/IslandsDB");

module.exports = {
    name: "create",

    run: async(client, message, args, container) => {
        message.delete()
        message.guild.channels.create("➤ Pending Response", {type: "GUILD_CATEGORY"})

    }
}