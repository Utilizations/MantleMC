const Config = require("../../../Config");
const Discord = require("discord.js");

module.exports = {
    name : 'verify',
    run : async(client, interaction, container) => {
        interaction.member.roles.add(Config.memberRole)
        interaction.member.send({embeds: [new Discord.MessageEmbed().setDescription(`You are now verified for ${Config.serverName}`).setColor(`${Config.serverColor}`).setThumbnail(`${Config.serverIcon}`)]})
        log = interaction.guild.channels.cache.get(Config.tTranscripts)
        log.send({embeds: [new Discord.MessageEmbed().setDescription(`${interaction.member} Has verified themselves.`).setColor(`${Config.serverColor}`).setThumbnail(`${Config.serverIcon}`)]})
    }
}