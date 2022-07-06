const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/IslandsDB");

module.exports = {
    name: "isPlaying",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        message.delete()
        Target = message.mentions.members.size === 1 ? message.mentions.members.first() : message.guild.members.cache.get(args[0])
        const Reason = args.slice(1).join(" ");
        const WarnDate = new Date(message.createdTimestamp).toLocaleDateString();

        db.findOne({ GuildID: message.guild.id }, async (err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send({embeds: [new Discord.MessageEmbed()
                .setColor(config.serverColor)
                .setAuthor({name: "TangoMC Islands", iconURL: config.serverIcon})
                .setThumbnail(config.serverIcon)
                .setDescription(`${data.Content.map(
                    (w, i) => `**No.**: ${i + 1}\n **Island Name**: ${w.IslandName}\n **Island Leader**: <@${w.IslandLeader}>
                    \n`
                ).join(" ")}`)]})
            }else {
                message.channel.send({embeds: [new Discord.MessageEmbed()
                .setColor(config.serverColor)
                .setAuthor({name: "TangoMC Islands", iconURL: config.serverIcon})
                .setThumbnail(config.serverIcon)
                .setDescription(`There are no islands registered.`)]});
            }
        })

    }
}