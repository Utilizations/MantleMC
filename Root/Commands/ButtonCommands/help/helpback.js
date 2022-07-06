const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "helpback",
    run: async(client, interaction, container) => {
        const tPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Help`, iconURL: config.serverIcon})
            .setDescription(`
            Please select from one of the following categories;

            **→ General Commands - Displays all commands members can run.
            
            → Fun Commands - Displays all the fun discord commands, including games.
            
            → Ticket Commands - Displays all commands that can be ran inside of a ticket.
            
            → Staff Commands - Displays all commands for staff. **
            `)
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)

            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('help1')
					.setLabel('General Commands')
					.setStyle('SECONDARY'),
                new Discord.MessageButton()
                    .setCustomId('help2')
					.setLabel('Fun Commands')
					.setStyle('SECONDARY'),
                new Discord.MessageButton()
                    .setCustomId('help3')
					.setLabel('Ticket Commands')
					.setStyle('SECONDARY'),
                new Discord.MessageButton()
                    .setCustomId('help4')
					.setLabel('Staff Commands')
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