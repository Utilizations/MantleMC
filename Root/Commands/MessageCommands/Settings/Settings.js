const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/SettingsDB")

module.exports = {
    name: "settings",
    run: async(client, message, args, container) => {
        message.delete()

        db.findOne({ GuildID: interaction.message.id }, async (err, data) => {
            const embed = new Discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Setting's`, iconURL: config.serverIcon})
            .setDescription(`
            **Tickets**
            Ticket Category: ``
            Ticket Open-Channel: ``
            Ticket Logs: ``

            **Suggestions**
            Suggestions Channel: ``

            **Misc**
            Logs Channel: ``
            Welcome Channel: ``
            Server Logo: ``
            Server Banner: ``
            `)
            .setImage
            .setThumbnail
            .setFooter

        })
    }
}