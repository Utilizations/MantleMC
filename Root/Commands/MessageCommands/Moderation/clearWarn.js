const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/WarningDB");

module.exports = {
    name: "clearWarn",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        Target = message.mentions.members.size === 1 ? message.mentions.members.first() : message.guild.members.cache.get(args[0])
        const Reason = args.slice(1).join(" ");
        const WarnDate = new Date(message.createdTimestamp).toLocaleDateString();
        message.delete()
        if (!Target) {
            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription("This command has been entered incorrectly. Please use **clearWarn [@user]**")]})
        }else {
            db.findOne({ GuildID: message.guild.id, UserID: Target.id, UserTag: Target.user.tag }, async (err, data) => {
                if(err) throw err;
                if(data) {
                    await db.findOneAndDelete({ GuildID: message.guild.id, UserID: Target.id, UserTag: Target.user.tag });
                    message.channel.send({embeds: [new Discord.MessageEmbed()
                    .setColor(config.serverColor)
                    .setAuthor({name: `${config.serverName} Warnings`, iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setDescription(`${Target.user.tag}'s have been cleared. ' | ||${Target.id}||`)]});
                    log1 = message.guild.channels.cache.get(config.tTranscripts)
                    const log = new  Discord.MessageEmbed()
                    .setAuthor({name: "Member Warn Cleared", iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setColor(config.serverColor)
                    .setDescription(`
                    ${message.author} Has cleared ${Target} warnings`)
                    log1.send({embeds: [log]})
                } else {
                    message.channel.send({embeds: [new Discord.MessageEmbed()
                    .setColor(config.serverColor)
                    .setAuthor({name: `${config.serverName} Warnings`, iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setDescription(`${Target.user.tag} | ||${Target.id}|| has no warnings.`)]});
                }
            })
        }

    }
}