const discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/IslandsDB");

module.exports = {
    name: "registerIs",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        Target = message.mentions.members.first()
        const Reason = args[1];
        const WarnDate = new Date(message.createdTimestamp).toLocaleDateString();
        db.findOne({ GuildID: message.guild.id }, async (err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    GuildID: message.guild.id,
                    Content: [
                        {
                            IslandName: Reason,
                            IslandLeader: Target.id,
                            Date: WarnDate
                        }
                    ],
                })
            } else {
                const obj = {
                    IslandName: Reason,
                    IslandLeader: Target.id,
                    Date: WarnDate
                }
                data.Content.push(obj)
                const log1 = message.guild.channels.cache.get(config.islandsPlaying)
                log1.send({embeds: [new discord.MessageEmbed()
                .setColor(config.serverColor)
                .setAuthor({name: "TangoMC Islands", iconURL: config.serverIcon})
                .setThumbnail(config.serverIcon)
                .setDescription(`${data.Content.map(
                    (w, i) => `**No.**: ${i + 1}\n **Island Name**: ${w.IslandName}\n **Island Leader**: <@${w.IslandLeader}>
                    \n`
                ).join(" ")}`)]})
            }
            data.save()
        });

        Target.roles.add("989319132505862164")

        message.channel.send({embeds: [new discord.MessageEmbed()
        .setColor(config.serverColor)
        .setAuthor({name: "TangoMC Islands", iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setDescription(`You have added ${Reason} to the islands playing.`)]});

        log = message.guild.channels.cache.get(config.tTranscripts)
        const log1 = new discord.MessageEmbed()
        .setAuthor({name: "Islands Playing Added", iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.serverColor)
        .setDescription(`
        ${message.author} Has added ${Reason} to the islands Playing.`)
        log.send({embeds: [log1]})


    }
}