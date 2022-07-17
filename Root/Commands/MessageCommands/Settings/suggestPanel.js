const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "sPanel",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        const tPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Suggestions`, iconURL: config.serverIcon})
            .setDescription(`
            Hello here at **MantleMC** we are always looking for suggestions to help improve your experience here. So if you have anything you would like to see on the server, or discord - please post a suggestion :)
            
            **How do I submit a suggestion?**\n`+"Simple do `;suggest [suggestion]\n`"+`Thank you all for your help and input - We hope we are doing a good job at making the server **AMAZING**!
            `)
            .setThumbnail(config.serverIcon)

            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('suggest')
					.setLabel('Make a suggestion')
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