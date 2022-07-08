const Config = require("../../../Config");
const Discord = require("discord.js");

module.exports = {
    name: "general",
    run: async(client, interaction, container) => {
        const { guild, member} = interaction;
        interaction.channel.bulkDelete(2)


        interaction.channel.setName(`general-${member.displayName}`)
        interaction.channel.permissionOverwrites.edit(interaction.member.id, { SEND_MESSAGES: true, ADD_REACTIONS: false });

        const channel = interaction.channel
            let questions = {
                firstQuestion: "→ What is your IGN?",
                secondQuestion: "→ What can we help you with?",
            }
            const msg = interaction.message
            interaction.channel.send({embeds: [new Discord.MessageEmbed().setDescription("Please answer the questions so our team can help you quicker.").setColor(Config.serverColor)]})
            channel.send({embeds: [new Discord.MessageEmbed().setDescription(questions.firstQuestion).setColor(Config.serverColor)]}).then(msg => {
                const filter = m => m.author.id === interaction.member.id
               channel.awaitMessages({filter, max: 1, time: 1000000
                }).then(async(collected) => {
                    const msg1 = collected.first().content
                    if (msg1 == 'cancel') {
                        channel.send(":sob: The command has been cancelled.")
                    }
                    channel.send({embeds: [new Discord.MessageEmbed().setDescription(questions.secondQuestion).setColor(Config.serverColor)]})
                    const filter = m => m.author.id === interaction.member.id
                    channel.awaitMessages({filter, max: 1, time: 1000000
                    }).then(async(collected) => {
                        const msg2 = collected.first().content
                        if (msg2 == 'cancel') {
                            channel.send(":sob: The command has been cancelled.")
                        }
                            channel.bulkDelete(8, true)
                            const completed = new Discord.MessageEmbed()
                            .setColor(Config.serverColor)
                            .setAuthor({name: "Thank you for making a ticket.", iconURL: Config.serverIcon})
                            .setThumbnail(Config.serverIcon)
                            .setDescription(`Thank you for creating a ticket, a member of the support team will be with you shortly.
                            
                            **Category:** General Support

                             ${questions.firstQuestion}
                            → Answer: **${msg1}**
                             ${questions.secondQuestion}
                            → Answer: **${msg2}**`)
                            
                            const row1 = new Discord.MessageActionRow().addComponents(
                                new Discord.MessageButton()
                                    .setCustomId('close')
                                    .setLabel('Close')
                                    .setStyle('DANGER'),
                                new Discord.MessageButton()
                                    .setCustomId('claim')
                                    .setLabel('Claim')
                                    .setStyle('SUCCESS'),
                                )
                                
                                const msg = interaction.message
                                interaction.channel.send({embeds: [completed], components: [row1]})
                        })
                    })
                })
    }
}