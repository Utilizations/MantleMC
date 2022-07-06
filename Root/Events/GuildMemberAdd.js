const discord = require("discord.js")
const config = require("../../Config")

module.exports = {
    name: "guildMemberAdd",
    run: async(guildMember) => {
        const welcomeembed = new discord.MessageEmbed()
        .setAuthor({name: `${config.serverName} Welcome!`, iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setImage(config.serverBanner)
        .setColor(config.setColor)
        .setDescription(`
        Welcome ${guildMember} to **TangoMC**
        `)
        log1 = guildMember.guild.channels.cache.get(config.welcomeChannel)
        log1.send({embeds: [welcomeembed]})
        guildMember.roles.add(config.memberRole)
    }
}