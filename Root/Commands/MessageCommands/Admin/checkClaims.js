const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/ClaimDB");

module.exports = {
    name: "checkClaims",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        Target = message.mentions.members.size === 1 ? message.mentions.members.first() : message.guild.members.cache.get(args[0])
        const Reason = args.slice(1).join(" ");
        const WarnDate = new Date(message.createdTimestamp).toLocaleDateString();
        message.delete()
        if (!Target) {
            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription("This command has been entered incorrectly. Please use **checkClaims [@user]**")]})
        }else {
            db.findOne({ GuildID: message.guild.id, UserID: Target.id }, async (err, data) => {
                if(err) throw err;
                if(data) {
                    message.channel.send({embeds: [new Discord.MessageEmbed()
                    .setColor(config.serverColor)
                    .setAuthor({name: `${config.serverName} Claims`, iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setDescription(`${data.Content.map(
                        (w, i) => `**Ammount**: ${i + 1}\n **Channel**: ${w.Channel}
                        \n`
                    ).join(" ")}`)]})
                }else {
                    message.channel.send({embeds: [new Discord.MessageEmbed()
                    .setColor(config.serverColor)
                    .setAuthor({name: `${config.serverName} Claims`, iconURL: config.serverIcon})
                    .setThumbnail(config.serverIcon)
                    .setDescription(`${Target.user.tag} | ||${Target.id}|| has no claims.`)]});
                }
            })
        }

    }
}