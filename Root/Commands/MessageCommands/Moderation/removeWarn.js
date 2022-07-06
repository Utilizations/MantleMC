const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/WarningDB");

module.exports = {
    name: "removePunishment",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        Target = message.mentions.members.size === 1 ? message.mentions.members.first() : message.guild.members.cache.get(args[0])
        const WarnID = args[1] - 1;
        const WarnDate = new Date(message.createdTimestamp).toLocaleDateString();
        message.delete()
        if (!Target) {
            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription("This command has been entered incorrectly. Please use **removePunishment [@user][ID]**")]})
        }else {
            db.findOne({ GuildID: message.guild.id, UserID: Target.id, UserTag: Target.user.tag }, async (err, data) => {
                if(err) throw err;
                if(data) {
                    data.Content.splice(WarnID, 1)
                    message.channel.send({embeds: [new Discord.MessageEmbed()
                        .setColor(config.serverColor)
                        .setAuthor({name: `${config.serverName} Punishment's`, iconURL: config.serverIcon})
                        .setThumbnail(config.serverIcon)
                        .setDescription(`${Target.user.tag}'s Punishment id: ${WarnID + 1} has been removed.`)]});
                        data.save()
                    log1 = message.guild.channels.cache.get(config.tTranscripts)
                    const log = new Discord.MessageEmbed()
                    .setAuthor({name: "Member Punishment Removed", iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setColor(config.serverColor)
                    .setDescription(`
                    ${message.author} Has removed ${Target} Punishment`)
                    log1.send({embeds: [log]})
                } else {
                    message.channel.send({embeds: [new Discord.MessageEmbed()
                    .setColor(config.serverColor)
                    .setAuthor({name: `${config.serverName} Punishments`, iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setDescription(`${Target.user.tag} | ||${Target.id}|| has no Punishments.`)]});
                }
            })
        }

    }
}