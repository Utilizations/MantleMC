const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "removeuser",
    run: async(client, interaction, container) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Remove a User", iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.serverColor)
        .setDescription(`
        Please enter the id of the user you would like to remove.

        *Note: Type cancel to quit.*`)
        const msg = await interaction.channel.send({embeds: [embed]})
        const channel = interaction
        const member = interaction.member.id

        const filter = m => m.author.id === interaction.member.id
        interaction.channel.awaitMessages({filter, max: 1, time: 10000
        }).then(async(collected) => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.reply(":sob: The command has been cancelled.")
            } 
            const adduser = collected.first().content
            interaction.channel.permissionOverwrites.edit(adduser, { VIEW_CHANNEL: false });
            const completed = new Discord.MessageEmbed()
            .setAuthor({name: "Removed User", iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            Removed <@${adduser}>`)
            msg.edit({embeds: [completed]})
            log1 = interaction.guild.channels.cache.get(config.tTranscripts)
            const log = new Discord.MessageEmbed()
            .setAuthor({name: "Removed user from ticket", iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            ${interaction.member} Has removed ${adduser} from ticket ${interaction.channel}`)
            log1.send({embeds: [log]})


        })
    }
}