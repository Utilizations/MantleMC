const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "vPanel",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        const vPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Verify`, iconURL: config.serverIcon})
            .setDescription(config.vPanelDescription)
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)

            const row2 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('verify')
					.setLabel('Click Here to verify')
                    .setEmoji(' ')
					.setStyle('SECONDARY'),
                )
                        await message.channel
                        .send({
                            embeds: [vPanel],
                            components: [row2],
                            allowedMentions: {
                                repliedUser: false
                            }
                        })


    }
}