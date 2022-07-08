const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/WarningDB");

module.exports = {
    name: "lockdown",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        const channel = message.channel

        channel.permissionOverwrites.edit("988989137539461220", { SEND_MESSAGES: false });

        const embed =  new Discord.MessageEmbed()
        .setDescription(`${channel} has been locked. No one may type in here.`)
        .setFooter(`Locked by ${message.author.tag}`)
        .setColor(config.serverColor)

        channel.send({embeds: [embed]})
        log = message.guild.channels.cache.get(config.tTranscripts)
        log.send({embeds: [embed]})


    }
}