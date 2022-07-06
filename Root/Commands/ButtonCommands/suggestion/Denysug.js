const config = require("../../../../Config");
const Discord = require("discord.js")
const db = require("../../../Structures/Models/SuggestDB");

module.exports = {
    name : 'denysug',
    userPermissions: ["ADMINISTRATOR"],
    run : async(client, interaction, container) => {

        const suggestdata = db.findOne({ SuggestionID: interaction.message.id }, async (err, data) => {
            if (err) throw err
            data.updateOne({Status: '"Closed"'}, async (err) => {

            })

            const suggestionembed = new Discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Suggestion`, iconURL: config.serverIcon})
            .setColor("RED")
            .setDescription(`
            💡**Suggestion:**
            > ${data.SuggestionTitle}
    
            📍**Information**
            > **Status**: Denied 🔴
            > **Upvotes**: ${data.Upvotes}
            > **Downvotes**: ${data.Downvotes}
            `)
            .setFooter(`🔴 | This suggestion has been Denied`)
            interaction.message.edit({embeds: [suggestionembed]})
            interaction.reply({content: 'You have Denied the suggestion', ephemeral: true})

        })
 


    }
}