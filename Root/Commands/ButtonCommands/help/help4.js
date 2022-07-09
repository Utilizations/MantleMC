const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "help4",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, interaction, container) => {
        const tPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Help`, iconURL: config.serverIcon})
            .setDescription(`
            Here are all the Staff Commands.\n`+ "`" + "warn" + "` "+ "`" + "kick" + "` "+ "`" + "ban" + "` "+ "`" + "checkHist" + "` "+ "`" + "removePunishment" + "` "+ "`" + "clearHist" + "` "+ "`" + "checkClaims" + "` "+ "`" + "purge" + "`\n\n"+ "Admin Commands\n"+ "`" + "hire" + "` "+ "`" + "demote" + "` "+ "`" + "promote" + "` "+ "`" + "resign" + "` "+ "`" + "setStatus" + "` "+ "`" + "announce" + "` "+ "`" + "registerIs" + "` "+ "`" + "isPlaying" + "`\n\n"+ "Slash Commands\n"+"`" + "poll" + "` "+ "`" + "createembed" + "`")
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