const discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/WarningDB");

module.exports = {
    name: "kick",
    userPermissions: ["KICK_MEMBERS"],
    run: async(client, message, args, container) => {
        Target = message.mentions.members.size === 1 ? message.mentions.members.first() : message.guild.members.cache.get(args[0])
        const Reason = args.slice(1).join(" ");
        const WarnDate = new Date(message.createdTimestamp).toLocaleDateString();

        message.delete()
        if (!Target) {
            message.channel.send({embeds: [new discord.MessageEmbed().setDescription("This command has been entered incorrectly. Please use **kick [@user] [reason]**")]})
        }else {
            db.findOne({ GuildID: message.guild.id, UserID: Target.id, UserTag: Target.user.tag }, async (err, data) => {
                if(err) throw err;
                if(!data) {
                    data = new db({
                        GuildID: message.guild.id,
                        UserID: Target.id,
                        UserTag: Target.user.tag,
                        Content: [
                            {
                                ExecuterID: message.author.id,
                                ExecuterTag: message.author.tag,
                                Punishment: "Kick",
                                Reason: Reason,
                                Date: WarnDate
                            }
                        ],
                    })
                } else {
                    const obj = {
                        ExecuterID: message.author.id,
                        ExecuterTag: message.author.tag,
                        Punishment: "Kick",
                        Reason: Reason,
                        Date: WarnDate
                    }
                    data.Content.push(obj)
                }
                data.save()
            });
    
            message.channel.send({embeds: [new discord.MessageEmbed()
            .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Punishments`, iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setDescription(`Punishment Added: ${Target.user.tag} | ||${Target.id}}||\n**Reason**: ${Reason}`)]});
    
            log = message.guild.channels.cache.get(config.tTranscripts)
            const log1 = new discord.MessageEmbed()
            .setAuthor({name: "Member Kicked", iconURL: config.serverIcon})
            .setThumbnail(config.serverIcon)
            .setColor(config.serverColor)
            .setDescription(`
            ${message.author} Has kicked ${Target}`)
            .addField("Reason:", `${Reason}`, true)
            log.send({embeds: [log1]})
            Target.kick(Reason)
        }
        


    }
}