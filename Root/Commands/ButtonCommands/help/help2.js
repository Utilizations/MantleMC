const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "help2",
    run: async(client, interaction, container) => {
        const tPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Help`, iconURL: config.serverIcon})
            .setDescription(`
            Here are all the Fun Commands.
            `)
            .addField("command1", "desc1")
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)

            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('helpback')
					.setLabel('Go back to Main Menu.')
					.setStyle('SECONDARY'),
                )
                await interaction.message.edit({
                            embeds: [tPanel],
                            components: [row],
                            allowedMentions: {
                                repliedUser: false
                            }
                        })
    }
}