const config = require("../../../../Config");
const Discord = require("discord.js")
const db = require("../../../Structures/Models/SuggestDB");
const { database } = require("../../../../Config");

module.exports = {
    name : 'downvote',
    run : async(client, interaction, container) => {


        const suggestdata = db.findOne({ SuggestionID: interaction.message.id }, async (err, data) => {
            if (err) throw err

            if(data.Status === '"Closed"') {
                interaction.reply({content: 'You may not vote on a closed suggestion', ephemeral: true})
            }else {
                if (data.Voters.find(a => a.VoterID === interaction.member.id)) {
                    interaction.reply({content: 'You may not vote more than once.', ephemeral: true})
                }else {
                    const obj = {
                        VoterID: interaction.member.id,
                    }
                    data.Voters.push(obj)
                    data.save()
                    data.updateOne({Downvotes: data.Downvotes + 1}, async (err) => {
                        const suggestionembed = new Discord.MessageEmbed()
                        .setAuthor({name: `${config.serverName} Suggestion`, iconURL: config.serverIcon})
                        .setDescription(`
                        💡**Suggestion:**
                        > ${data.SuggestionTitle}
                
                        📍**Information**
                        > **Status**: Pending 🟠
                        > **Upvotes**: ${data.Upvotes}
                        > **Downvotes**: ${data.Downvotes + 1}
                        `)
                        const row1 = new Discord.MessageActionRow().addComponents(
                            new Discord.MessageButton()
                                .setCustomId('upvote')
                                .setEmoji('🔼')
                                .setLabel('Upvote')
                                .setStyle('SUCCESS'),
                                new Discord.MessageButton()
                                .setCustomId('downvote')
                                .setEmoji('🔽')
                                .setLabel('Downvote')
                                .setStyle('DANGER'),
                            )
                        const row2 = new Discord.MessageActionRow().addComponents(
                            new Discord.MessageButton()
                                .setCustomId('acceptsug')
                                .setEmoji('✅')
                                .setLabel('Accept')
                                .setStyle('SUCCESS'),
                                new Discord.MessageButton()
                                .setCustomId('denysug')
                                .setEmoji('❎')
                                .setLabel('Deny')
                                .setStyle('DANGER'),
                            )
                    interaction.message.edit({embeds: [suggestionembed], components: [row1, row2]})
                    interaction.reply({content: 'You have downvoted the suggestion', ephemeral: true})
                })
                }
            }

        })
 


    }
}