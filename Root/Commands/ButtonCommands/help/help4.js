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
            Here are all the Staff Commands.
            `)
            .addField("Warn", "Warns a player.")
            .addField("checkWarn", "Checks a players warns.")
            .addField("removeWarn", "Removes a players warns.")
            .addField("clearWarn", "Clears all of a players warns.")
            .addField("checkClaims", "Cecks a staff members ticket claims.")
            .addField("Purge", "Purge a certain number of messages from a channel.")
            .addField("Admin Commands", "-----------------------------------------------------------")
            .addField("Hire", "Hire a member as staff.")
            .addField("Demote", "Demote a member of staff.")
            .addField("Promote", "Promote a member of staff.")
            .addField("Resign", "Resign a member of staff.")
            .addField("setStatus", "Set the bot status.")
            .addField("Announce", "Make an announcement to either news or updates.")
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