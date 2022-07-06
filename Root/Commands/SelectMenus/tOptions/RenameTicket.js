const Discord = require("discord.js");
const config = require("../../../../Config");
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name: "rename",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, interaction, container) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Rename Ticket", iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.serverColor)
        .setDescription(`
        Please enter the name you would like to set the ticket*`)
        const msg = await interaction.channel.send({embeds: [embed]})
        const channel = interaction
        const member = interaction.member.id

        const filter = m => m.author.id === interaction.member.id
        interaction.channel.awaitMessages({filter, max: 1, time: 10000
        }).then(async(collected) => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.reply(":sob: The command has been cancelled.")
            }
            log1 = interaction.guild.channels.cache.get(config.tTranscripts)
            const adduser = collected.first().content
            const log = new Discord.MessageEmbed()
            .setAuthor({name: "Renamed Ticket", iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            ${interaction.member} Has renamed ticket ${interaction.channel} to ${adduser}`)
            log1.send({embeds: [log]})
            interaction.channel.setName(adduser)
            const completed = new Discord.MessageEmbed()
            .setAuthor({name: "Renamed Ticket", iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            Renamed Ticket to ${adduser}`)
            msg.edit({embeds: [completed]})


        })
        


    }
}