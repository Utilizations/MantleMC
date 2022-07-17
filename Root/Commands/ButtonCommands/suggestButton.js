const Config = require("../../../Config");
const Discord = require("discord.js");

module.exports = {
    name : 'suggest',
    run : async(client, interaction, container) => {
        const modal = new Discord.Modal()
        .setCustomId('suggest')
        .setTitle('Make a suggestion')

        const PROBLEM = new Discord.TextInputComponent()
        .setCustomId('problem')
        .setLabel('You suggestion.')
        .setStyle('PARAGRAPH')

        const forthActionRow = new Discord.MessageActionRow().addComponents(PROBLEM);
		modal.addComponents(forthActionRow);
		await interaction.showModal(modal);
    }
}