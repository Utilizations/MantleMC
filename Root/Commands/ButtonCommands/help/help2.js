const Discord = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "help2",
    run: async(client, interaction, container) => {
        const tPanel = new Discord.MessageEmbed()
        .setColor(config.serverColor)
            .setAuthor({name: `${config.serverName} Help`, iconURL: config.serverIcon})
            .setDescription(`
            Here are all the Fun Commands.\n`+ "`" + "8ball" + "` "+ "`" + "catsay" + "` "+ "`" + "cowsay" + "` "+ "`" + "emojify" + "` "+ "`" + "fact" + "` "+ "`" + "fliptext" + "` "+ "`" + "gif" + "` "+ "`" + "hack" + "` "+ "`" + "hug" + "` "+ "`" + "joke" + "` "+ "`" + "kill" + "` "+ "`" + "meme" + "` "+ "`" + "nitro" + "` "+ "`" + "respect" + "` "+ "`" + "roast" + "` "+ "`" + "slap" + "` "+ "`" + "trivia" + "` "+ "`" + "vaportext" + "` "+ "`" + "yomama" + "`\n\n" + "Games\n"+ "`" + "chaoswords" + "` "+ "`" + "connect4" + "` "+ "`" + "fight" + "` "+ "`" + "football" + "` "+ "`" + "lieswatter" + "` "+ "`" + "neverhaveiever" + "` "+ "`" + "quickclick" + "` "+ "`" + "shuffleguess" + "` "+ "`" + "snake" + "` "+ "`" + "trivia" + "` "+ "`" + "ttt" + "` ")
            .setThumbnail(config.serverIcon)
            .setImage(config.serverBanner)

            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId('helpback')
					.setLabel('Go back to Main Menu.')
					.setStyle('SECONDARY'),
                )
                await interaction.message.edit({
                            embeds: [tPanel],
                            components: [row],
                            allowedMentions: {
                                repliedUser: false
                            }
                        })
    }
}