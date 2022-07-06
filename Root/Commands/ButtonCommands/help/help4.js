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
            .addField("Kick", "Kicks a player.")
            .addField("Ban", "Bans a player.")
            .addField("checkHist", "Checks a players punishments.")
            .addField("removePunishment", "Removes a players punishment.")
            .addField("clearHist", "Clears all of a players punishments.")
            .addField("checkClaims", "Cecks a staff members ticket claims.")
            .addField("Purge", "Purge a certain number of messages from a channel.")
            .addField("Admin Commands", "-----------------------------------------------------------")
            .addField("Hire", "Hire a member as staff.")
            .addField("Demote", "Demote a member of staff.")
            .addField("Promote", "Promote a member of staff.")
            .addField("Resign", "Resign a member of staff.")
            .addField("setStatus", "Set the bot status.")
            .addField("Announce", "Make an announcement to either news or updates.")
            .addField("/createEmbed", "Create a custom embed.")
            .addField("Poll", "Create a poll.")
            .addField("RegisterIs", "Register an island and its leader.")
            .addField("IsPlaying", "Force the islands playing list to display.")
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