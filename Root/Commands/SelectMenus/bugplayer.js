const Config = require("../../../Config");
const Discord = require("discord.js");

module.exports = {
    name: "bugplayer",
    run: async(client, interaction, container) => {
        const { guild, member} = interaction;
        interaction.channel.bulkDelete(2)


        interaction.channel.setName(`report-${member.displayName}`)
        interaction.channel.permissionOverwrites.edit(interaction.member.id, { SEND_MESSAGES: true, ADD_REACTIONS: false });

        const modal = new Discord.Modal()
        .setCustomId('bugplayer')
        .setTitle('Bug/Player report')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign')
        .setLabel('What is your IGN? (In-game name)')
        .setStyle('SHORT')
        const REALM = new Discord.TextInputComponent()
        .setCustomId('realm')
        .setLabel('What realm/gamemode is this related to?')
        .setStyle('SHORT')
        const REPORTER = new Discord.TextInputComponent()
        .setCustomId('reporter')
        .setLabel('Who is it youre reporting?')
        .setStyle('SHORT')
        const PROBLEM = new Discord.TextInputComponent()
        .setCustomId('problem')
        .setLabel('Please explain the situation')
        .setStyle('LONG')

        const firstActionRow = new MessageActionRow().addComponents(IGN);
		const secondActionRow = new MessageActionRow().addComponents(REALM);
        const thirdActionRow = new MessageActionRow().addComponents(REPORTER);
        const forthActionRow = new MessageActionRow().addComponents(PROBLEM);
		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, forthActionRow);
		await interaction.showModal(modal);

        if(!interaction.isModalSubmit()) return
        const reporter = interaction.fields.getTextInputValue('ign')
        const server = interaction.fields.getTextInputValue('realm')
        const player = interaction.fields.getTextInputValue('reporter')
        const description = interaction.fields.getTextInputValue('problem')

        interaction.channel.send(`${reporter} // ${server} // ${player} // ${description}`)
    }
}