const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "adminonly",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, interaction, container) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Admin Only", iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.setColor)
        .setDescription(`
        An Admin has now set this ticket to **Admin Only**
        
        Meaning only members with **Adminsitrator** Can see this ticket.`)
        const msg = await interaction.channel.send({embeds: [embed]})
        interaction.channel.permissionOverwrites.edit(config.staffRole, { VIEW_CHANNEL: false });
        log1 = interaction.guild.channels.cache.get(config.tTranscripts)
            const log = new Discord.MessageEmbed()
            .setAuthor({name: "Enabled Admin Only", iconURL: config.thumbnail})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            ${interaction.member} Has enabled Admin Only in ${interaction.channel}`)
            log1.send({embeds: [log]})
    }
}