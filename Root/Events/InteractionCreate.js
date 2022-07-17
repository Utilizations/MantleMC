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
            const reporter = interaction.fields.getTextInputValue('ign')
            const server = interaction.fields.getTextInputValue('realm')
            const player = interaction.fields.getTextInputValue('reporter')
            const description = interaction.fields.getTextInputValue('problem')

            interaction.channel.send(`${reporter} // ${server} // ${player} // ${description}`)
        }
    }
}