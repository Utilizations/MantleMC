const Discord = require("discord.js")
const config = require("../../../Config")
module.exports = {
  async execute(giveaway, member) {
    return member.send({
      embeds: [new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle('❓ Hold Up Did You Just Remove a Reaction From A Giveaway?')
        .setColor("#2F3136")
        .setDescription(
          `Your entery into [This Giveaway](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) was recorded but you un-reacted.\n> **Giveaway for:** \`${giveaway.prize}\`\n> **Giveaway winners:** \`${giveaway.winnerCount}\``
        )
        .setThumbnail(config.serverIcon)
        .setFooter("Think It was a mistake? Go react again | Powered by MantleMC")
      ]
    }).catch(e => {})

  }
}