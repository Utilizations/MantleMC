const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, member) {
    return member.send({
      embeds: [new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle('❓ Hold Up Did You Just Remove a Reaction From A Giveaway?')
        .setColor("#2F3136")
        .setDescription(
          `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) was recorded but you un-reacted.\n<:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548>\n> **Giveaway for:** \`${giveaway.prize}\`\n<:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548><:5102blurpleline:959931086257942548>\n> **Giveaway winners:** \`${giveaway.winnerCount}\``
        )
        .setFooter("Think It was a mistake? Go react again | Powered by Azury.live")
      ]
    }).catch(e => {})

  }
}