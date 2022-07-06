const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "demote",
    userPermissions: ["MANAGE_ROLES"],
    run: async(client, message, args, container) => {
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Select a User", iconURL: config.serverIcon})
        .setThumbnail(config.serverIcon)
        .setColor(config.serverColor)
        .setDescription(`
        Please enter the id of the user you would like to demote and the role.

        **E.G | 234273606043959296 Trainee**

        List of roles;
        *Note: Type cancel to quit.*`)
        const msg = await message.channel.send({embeds: [embed]})
        const channel = message.channel
        const member = message.member.id

        const filter = m => m.author.id === message.author.id
        message.channel.awaitMessages({filter, max: 1, time: 10000
        }).then(async(collected) => {
            const args = collected.first().content.slice(0).trim().split(/ +/g);
            const array = collected.first().content.split(" ");
            const target = array[0];
            const role = args.slice(1).join(" ");
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send(":sob: The command has been cancelled.")
            }else {
                const user = await message.guild.members.fetch(target)
                const staff = message.guild.roles.cache.get(config.staffRole)
                const roleid = message.guild.roles.cache.find(r => r.name === role);
                user.roles.set([])
                user.roles.add(config.memberRole)
                user.roles.add(roleid)
                user.roles.add(staff)
                log1 = message.guild.channels.cache.get(config.staffChanges)
                log1.send({embeds: [new Discord.MessageEmbed()
                .setColor(config.serverColor)
                .setAuthor({name: `${config.serverName} demote`, iconURL: config.serverIcon})
                .setDescription(`
                Demoted ${user} to **${role}**
                `)
                .setThumbnail(config.serverIcon)]})
            }
        })


    }
}