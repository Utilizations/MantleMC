const Discord = require("discord.js")
const config = require("../../Config");

module.exports = {
    name: "interactionCreate",
    run: async(interaction, client) => {
        const loadCommandOptions = require("../Structures/CommandOptions/loadCommandOptions")
        if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttonCommands.get(interaction.customId), true, "Button")
        else if (interaction.isSelectMenu()) loadCommandOptions(client, interaction, client.commands.selectMenus.get(interaction.values[0] ?? interaction.customId), true, "SelectMenus")
        else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slashCommands.get(interaction.commandName), true, "SlashCommand")
        else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.contextMenus.get(interaction.commandName), true, "ContextMenus")

        if (!interaction.isModalSubmit()) return;
        interaction.channel.bulkDelete(2)
        
        if (interaction.customId === 'bugplayer') {
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
    }
}