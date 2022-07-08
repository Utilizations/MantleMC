const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setTitle(`🎁 Let's goo! We Have A New Winner`)
          .setColor("#2F3136")
          .setDescription(`
          Hello you have won the giveaway for **${giveaway.prize}**!

          Please open a ticket in the **${guild.name}** discord to claim your prize.
          `)
          .setThumbnail(config.serverIcon)
          .setTimestamp()
          .setFooter(member.user.username, member.user.displayAvatarURL())
        ]
      }).catch(e => {})
    });
  }
}