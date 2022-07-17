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
            Hello here at **MantleMC** we are always looking for suggestions to help improve your experience here. So if you have anything you would like to see on the server, or discord - please post a suggestion

            **How do I make a suggestion?**
            Simple - just click the button bellow and fill out the boxes.

            Our management tries their hardest to make the server a better place for you all, and we take your suggestions very seriously - So please if you have any idea post them now.
            
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