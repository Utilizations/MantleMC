const Discord = require("discord.js");
const { serverAnnounce } = require("../../../../Config");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/ClaimDB");

module.exports = {
    name: "announce",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        const ticket = new Discord.MessageEmbed()
            .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Announce`, iconURL: config.serverIcon})
            .setDescription(`
            Please select one of the options.
			
			**Announcement**
			Make an annoucement to ${config.serverAnnounce}

            **Change Log**
			Upload a change log to ${config.serverChangeLogs}.
			`)
            .setThumbnail(config.serverIcon)

            const row = new Discord.MessageActionRow().addComponents(
                        new Discord.MessageSelectMenu()
                        .setCustomId('options')
                        .setPlaceholder('Please select a category')
                        .addOptions([
                            {
                                label: 'Announcement',
                                description: 'Announcement',
                                value: 'announce',
                            },
                            {
                                label: 'Change Log',
                                description: 'Change Log',
                                value: 'changelog',
                            },
                        ])
                        )
                        message.channel.send({
                            embeds: [ticket],
                            components: [row],
                            ephemeral: true,
                            allowedMentions: {
                                repliedUser: false
                            }
                        })

    }
}