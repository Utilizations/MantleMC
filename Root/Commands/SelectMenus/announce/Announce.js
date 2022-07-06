const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "announce",
    run: async(client, interaction, container) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Post an Announcement", iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.serverColor)
        .setDescription(`
        Please Enter the message you would like to send.`)
        const msg = await interaction.channel.send({embeds: [embed]})
        const channel = interaction
        const member = interaction.member.id

        const filter = m => m.author.id === interaction.member.id
        interaction.channel.awaitMessages({filter, max: 1, time: 999999
        }).then(async(collected) => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.reply(":sob: The command has been cancelled.")
            } 
            const content = collected.first().content
            const request = new Discord.MessageEmbed()
            .setAuthor({name: "Would you like to send this?", iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            ${content}`)
            const row1 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('announceyes')
					.setLabel('Yes')
					.setStyle('SUCCESS'),
                    new Discord.MessageButton()
                    .setCustomId('announceno')
					.setLabel('No')
					.setStyle('DANGER'),
                )
                const msg = await interaction.channel
                .send({
                    embeds: [request],
                    components: [row1],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
            const member = interaction.member.id
            const filter = i => i.member.id === interaction.member.id;

            const collector = interaction.channel.createMessageComponentCollector({ filter, time: 150000 });
            
            collector.on('collect', async i => {
                if (i.customId === 'announceyes') {
                    msg.edit({embeds: [new Discord.MessageEmbed().setAuthor({name: "Announcement Sent", iconURL: config.serverIcon}).setThumbnail(config.serverIcon).setColor(config.serverColor).setDescription("Post has been sent.")]})
                    const changelog = new Discord.MessageEmbed()
                    .setAuthor({name: `${config.serverName} Announcement`, iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setColor(config.serverColor)
                    .setDescription(`
                    ${content}`)
                    interaction.channel.bulkDelete(4, true)
                    await interaction.guild.channels.cache
                    .get(config.serverAnnounce)
                    .send({
                        embeds: [changelog],
                    })

                } else if (i.customId === 'announceno') {
                    await msg.edit({embeds: [new Discord.MessageEmbed().setAuthor({name: "Announcement Canceled", iconURL: config.serverIcon}).setThumbnail(config.serverIcon).setColor(config.serverColor).setDescription("Post has been canceled.")]})
                }
            });

        })
    }
}