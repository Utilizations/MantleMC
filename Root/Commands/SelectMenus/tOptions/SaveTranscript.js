const Discord = require("discord.js");
const config = require("../../../../Config");
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name: "transcript",
    run: async(client, interaction, container) => {
        const { channel } = interaction;
        const attachment = await createTranscript(channel, {
            limit: -1,
            returnBuffer: false,
            fileName: `${channel.name}.html`,
        });

        const member = interaction.member
        const closed = new Discord.MessageEmbed()
        .setThumbnail(config.serverIcon)
        .setAuthor({name: "Ticket Info", iconURL: config.serverIcon})
        .setDescription(`
        Ticket Info`)
        .addField("Ticket ID:", `${channel.name}`, true)
        .setColor(config.serverColor)
        const Message = await interaction.member.send({
            embeds: [closed],
            files: [attachment],
        });


    }
}