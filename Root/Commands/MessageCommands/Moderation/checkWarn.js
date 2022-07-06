const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/WarningDB");

module.exports = {
    name: "checkHist",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        Target = message.mentions.members.size === 1 ? message.mentions.members.first() : message.guild.members.cache.get(args[0])
        const Reason = args.slice(1).join(" ");
        const WarnDate = new Date(message.createdTimestamp).toLocaleDateString();
        message.delete()
        if (!Target) {
            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription("This command has been entered incorrectly. Please use **checkWarn [@user]**")]})
        }else {
            db.findOne({ GuildID: message.guild.id, UserID: Target.id, UserTag: Target.user.tag }, async (err, data) => {
                if(err) throw err;
                if(data) {
                    message.channel.send({embeds: [new Discord.MessageEmbed()
                    .setColor(config.serverColor)
                    .setAuthor({name: `${config.serverName} Punishments`, iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setDescription(`${data.Content.map(
                        (w, i) => `**ID**: ${i + 1}\n **Type**: ${w.Punishment}\n **By**: ${w.ExecuterTag}\n**Date**: ${w.Date}\n**Reason**: ${w.Reason}
                        \n`
                    ).join(" ")}`)]})
                }else {
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