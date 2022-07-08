const Discord = require("discord.js")
const config = require("../../../Config")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setTitle(`🎁 Let's gooo!`)
          .setColor("#2F3136")
          .setDescription(`
          Hello you have won the giveaway for **${giveaway.prize}**!

          Please open a ticket in the **MantleMC** discord to claim your prize.
          `)
          .setTimestamp()
          .setThumbnail(config.serverIcon)
          .setFooter(member.user.username, member.user.displayAvatarURL())
        ]
      }).catch(e => {})
    });

  }
}