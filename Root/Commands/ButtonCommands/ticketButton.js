const Config = require("../../../Config");
const Discord = require("discord.js");

module.exports = {
    name : 'openticket',
    run : async(client, interaction, container) => {
        const { guild, member} = interaction;
        const ID = Math.floor(Math.random() * 90000) + 10000;

        const category = "994988311028441088"
        await guild.channels.create(`${member}`, {
            type: "GUILD_TEXT",
            parent: category,
            permissionOverwrites: [
                {
                    id: member.id,
                    allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
                },
                {
                    id: Config.staffRole,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
                },
                {
                    id: guild.roles.everyone,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
                },
            ],
        }).then(async(channel) => {
    
            const Embed = new Discord.MessageEmbed()
            .setColor(Config.serverColor)
            .setAuthor({name: `${Config.serverName} Tickets`, iconURL: Config.serverIcon})
            .setDescription(`
            Dear | ${member},
            Thank you for contacting the **Support Team** of **${Config.serverName}**!

            Please select what type of support you are requesting bellow.`)
            .addField("Created By:", `${member}`, true)
            .addField("Category:", "N/A", true)
            .setThumbnail(Config.serverIcon)

            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageSelectMenu()
                .setCustomId('ticket')
                .setPlaceholder('Please select a category')
                .addOptions([
                    {
                        label: 'General Support',
                        description: 'General Ticket',
                        value: 'general',
                    },
                    {
                        label: 'Bug/Player Report',
                        description: 'Bug/Player Report',
                        value: 'bugplayer',
                    },
                    {
                        label: 'In-Game Support',
                        description: 'In-Game Support',
                        value: 'ingame',
                    },
                    {
                        label: 'Buycraft Support',
                        description: 'Buycraft Support',
                        value: 'buycraft',
                    },
                ])
                )


            channel.send({
                embeds: [Embed], components: [row],
            });
            await channel
            .send({content: `> ${member} here is your ticket.`})
            .then ((m) => {
                setTimeout(() => {
                    m.delete().catch(() => {});
                }, 1 * 5000);
            });

            await interaction.channel
            .send({content: `> ${member} your ticket has been created: ${channel}`})
            .then ((m) => {
                setTimeout(() => {
                    m.delete().catch(() => {});
                }, 1 * 5000);
            });


        });
    }
}