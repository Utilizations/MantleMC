const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/SuggestDB");

module.exports = {
    name: "suggest",
    run: async(client, message, args, container) => {
        message.delete()
        const suggestion = args.slice(0).join(" ");

        if (!suggestion) {
            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription("Please enter a suggestion.")]})
        }


        const suggestionembed = new Discord.MessageEmbed()
        .setAuthor({name: `${config.serverName} Suggestion`, iconURL: config.serverIcon})
        .setDescription(`
        💡**Suggestion:**
        > ${suggestion}

        📍**Information**
        > **Status**: Pending 🟠
        > **Upvotes**: 0
        > **Downvotes**: 0
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
        const msg = await message.channel.send({embeds: [suggestionembed], components: [row1]})

        data = new db({
            UserID: message.author.id,
            SuggestionID: msg.id,
            SuggestionTitle: suggestion,
            Upvotes: 0,
            Downvotes: 0,
            Status: "Open",
            Voters: [{ VoterID: message.author.id }]
        })
        data.save()
    }
}