const Discord = require("discord.js")
const config = require("../../Config");
const db = require("../Structures/Models/SuggestDB");

module.exports = {
    name: "interactionCreate",
    run: async(interaction, client) => {
        const loadCommandOptions = require("../Structures/CommandOptions/loadCommandOptions")
        if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttonCommands.get(interaction.customId), true, "Button")
        else if (interaction.isSelectMenu()) loadCommandOptions(client, interaction, client.commands.selectMenus.get(interaction.values[0] ?? interaction.customId), true, "SelectMenus")
        else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slashCommands.get(interaction.commandName), true, "SlashCommand")
        else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.contextMenus.get(interaction.commandName), true, "ContextMenus")

        if (!interaction.isModalSubmit()) return;

        if (interaction.customId === 'bugplayer') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const player = interaction.fields.getTextInputValue('reporter')
            const description = interaction.fields.getTextInputValue('problem')

            const embed1 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **Player/Bug Report**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Realm**: ${server}
            ➥ **Reporting**: ${player}
            ➥ **Summary**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
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
            interaction.reply({embeds: [embed1], components: [row1]})
        }
        if (interaction.customId === 'buycraft') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const description = interaction.fields.getTextInputValue('problem')

            const embed2 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **Buycraft Support**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Transaction ID**: ${server}
            ➥ **Breif Description**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
            const row2 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle('DANGER'),
                new Discord.MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),
                )
            interaction.reply({embeds: [embed2], components: [row2]})
        }
        if (interaction.customId === 'general') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const description = interaction.fields.getTextInputValue('problem')

            const embed3 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **General Support**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Realm**: ${server}
            ➥ **Breif Description**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
            const row3 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle('DANGER'),
                new Discord.MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),
                )
            interaction.reply({embeds: [embed3], components: [row3]})
        }
        if (interaction.customId === 'ingame') {
            interaction.channel.bulkDelete(2)
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const description = interaction.fields.getTextInputValue('problem')

            const embed4 = new Discord.MessageEmbed()
            .setAuthor({name: `New ticket created.`, iconURL: config.serverIcon})
            .setDescription(`
            :wave: Thank you ${interaction.member} for making a ticket.

            Category:
            ➥ **In-Game Support**

            Here are the responses;
            ➥ **IGN**: ${reporter}
            ➥ **Realm**: ${server}
            ➥ **Breif Description**: ${description}

            *A member of staff will review this ticket when they get the chance, please be patient.*
            `)
            const row4 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle('DANGER'),
                new Discord.MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),
                )
            interaction.reply({embeds: [embed4], components: [row4]})
        }
        if (interaction.customId === 'suggest') {
            const description = interaction.fields.getTextInputValue('problem')
            const suggestionembed = new Discord.MessageEmbed()
            .setAuthor({name: `${config.serverName} Suggestion`, iconURL: config.serverIcon})
            .setDescription(`
            💡**Suggestion:**
            > ${description}

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
            const msg = await interaction.reply({embeds: [suggestionembed], components: [row1]})

            data = new db({
                UserID: interaction.member,
                SuggestionID: msg.id,
                SuggestionTitle: description,
                Upvotes: 0,
                Downvotes: 0,
                Status: "Open",
                Voters: [{ VoterID: interaction.member }]
            })
            data.save()
        }
    }
}