const config = require("../../../../Config");
const Discord = require("discord.js")
const db = require("../../../Structures/Models/SuggestDB");

module.exports = {
    name : 'acceptsug',
    userPermissions: ["ADMINISTRATOR"],
    run : async(client, interaction, container) => {

        const suggestdata = db.findOne({ SuggestionID: interaction.message.id }, async (err, data) => {
            if (err) throw err
            data.updateOne({Status: '"Closed"'}, async (err) => {
                
            })

            const suggestionembed = new Discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Suggestion`, iconURL: config.serverIcon})
            .setColor("GREEN")
            .setDescription(`
            💡**Suggestion:**
            > ${data.SuggestionTitle}
    
            📍**Information**
            > **Status**: Accepted 🟢
            > **Upvotes**: ${data.Upvotes}
            > **Downvotes**: ${data.Downvotes}
            `)
            .setFooter(`🟢 | This suggestion has been apporved`)
            interaction.message.edit({embeds: [suggestionembed]})
            interaction.reply({content: 'You have Approved the suggestion', ephemeral: true})

        })
 


    }
}