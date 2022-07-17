const Config = require("../../../Config");
const Discord = require("discord.js");

module.exports = {
    name: "buycraft",
    run: async(client, interaction, container) => {
        const { guild, member} = interaction;


        interaction.channel.setName(`buycraft-${member.displayName}`)
        interaction.channel.permissionOverwrites.edit(interaction.member.id, { SEND_MESSAGES: true, ADD_REACTIONS: false });

        const modal = new Discord.Modal()
        .setCustomId('buycraft')
        .setTitle('Buycraft Support')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign')
        .setLabel('What is your IGN? (In-game name)')
        .setStyle('SHORT')
        const REALM = new Discord.TextInputComponent()
        .setCustomId('realm')
        .setLabel('Please probvide you Transaction ID.')
        .setStyle('SHORT')
        const PROBLEM = new Discord.TextInputComponent()
        .setCustomId('problem')
        .setLabel('Please explain the situation')
        .setStyle('PARAGRAPH')

        const firstActionRow = new Discord.MessageActionRow().addComponents(IGN);
		const secondActionRow = new Discord.MessageActionRow().addComponents(REALM);
        const forthActionRow = new Discord.MessageActionRow().addComponents(PROBLEM);
		modal.addComponents(firstActionRow, secondActionRow, forthActionRow);
		await interaction.showModal(modal);
    }
}