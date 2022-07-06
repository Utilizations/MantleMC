const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/WarningDB");

module.exports = {
    name: "purge",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        const Ammount = args[0];

        if (!Ammount) {
            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription("This command has been entered incorrectly. Please use **purge [ammount]**")]})
        }else {
            message.channel.bulkDelete(Ammount, true);
            log = message.guild.channels.cache.get(config.tTranscripts)
            const log1 = new Discord.MessageEmbed()
            .setAuthor({name: "Messages Purged", iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            ${message.author} has purged ${Ammount} messages in ${message.channel}`)
            log.send({embeds: [log1]})
        }


    }
}