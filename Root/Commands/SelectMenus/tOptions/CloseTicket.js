const Discord = require("discord.js");
const config = require("../../../../Config");
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name: "close",
    run: async(client, interaction, container) => {
        const { channel } = interaction;
        const attachment = await createTranscript(channel, {
            limit: -1,
            returnBuffer: false,
            fileName: `${channel.name}.html`,
        });
        const embed = new Discord.MessageEmbed()
        .setThumbnail(config.serverIcon)
        .setAuthor({name: "Close Ticket", iconURL: config.serverIcon})
        .setDescription("Ticket will close shortly.")
        .setColor(config.serverColor)

        channel.send({embeds: [embed]})

        const member = interaction.member
        const closed = new Discord.MessageEmbed()
        .setThumbnail(config.serverIcon)
        .setAuthor({name: "Close Ticket", iconURL: config.serverIcon})
        .setDescription(`
        Ticket has been closed.`)
        .addField("Ticket ID:", `${channel.name}`, true)
        .addField("Closed By:", `${member}`, true)
        .setColor(config.serverColor)
        const Message = await client.channels.cache.get(config.tTranscripts).send({
            embeds: [closed],
            files: [attachment],
        });

        setTimeout(() => {
            channel.delete();
        }, 10 * 70);


    }
}