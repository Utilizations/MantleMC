const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "tPanel",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        const tPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Tickets`, iconURL: config.serverIcon})
            .setDescription(config.tPanelDescription)
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)

            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('openticket')
					.setLabel('Open a Ticket')
					.setStyle('SECONDARY'),
                )
                        await message.channel
                        .send({
                            embeds: [tPanel],
                            components: [row],
                            allowedMentions: {
                                repliedUser: false
                            }
                        })


    }
}