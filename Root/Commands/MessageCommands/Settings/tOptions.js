const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "tOptions",
    run: async(client, message, args, container) => {
        message.delete()
        const ticket = new Discord.MessageEmbed()
            .setColor(config.serverColor)
            .setAuthor({name: "Ticket Options", iconURL: config.serverIcon})
            .setDescription(`
            Please select one of the options.
			
			**Close Ticket**
			Closes the ticket

            **Rename Ticket**
			Rename the ticket.
			
			**Save transcript**
			DM's you the transcript
			
			**Add User**
			Add a user to the ticket
			
			**Remote User**
			Remve a user from the ticket
			
			**Admin Only**
			Closes the ticket to admin's only.`)
            .setThumbnail(config.serverIcon)

            const row = new Discord.MessageActionRow().addComponents(
                        new Discord.MessageSelectMenu()
                        .setCustomId('options')
                        .setPlaceholder('Please select a category')
                        .addOptions([
                            {
                                label: 'Close Ticket',
                                description: 'Close Ticket',
                                value: 'close',
                            },
                            {
                                label: 'Rename Ticket',
                                description: 'Rename the ticket',
                                value: 'rename',
                            },
                            {
                                label: 'Save Transcript',
                                description: 'Save Transcript',
                                value: 'transcript',
                            },
                            {
                                label: 'Add User',
                                description: 'Add User',
                                value: 'adduser',
                            },
							{
                                label: 'Remove User',
                                description: 'Remove User',
                                value: 'removeuser',
                            },
							{
                                label: 'Admin Only',
                                description: 'Admin Only',
                                value: 'adminonly',
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