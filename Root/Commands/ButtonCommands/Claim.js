const config = require("../../../Config");
const Discord = require("discord.js")
const db = require("../../Structures/Models/ClaimDB");

module.exports = {
    name : 'claim',
    run : async(client, interaction, container) => {
        const { guild, member} = interaction;
        interaction.channel.send({embeds: [new Discord.MessageEmbed().setDescription(`${interaction.member} has claimed this ticket.`)]})
        interaction.channel.permissionOverwrites.edit(config.staffRole , { VIEW_CHANNEL: false, SEND_MESSAGES: false});
        interaction.channel.permissionOverwrites.edit(interaction.member.id , { VIEW_CHANNEL: true, SEND_MESSAGES: true});


        db.findOne({ GuildID: interaction.guild.id, UserID: interaction.member.id }, async (err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    GuildID: interaction.guild.id,
                    UserID: interaction.member.id,
                    Content: [
                        {
                            ExecuterID: interaction.member.id,
                            ExecuterTag: interaction.member.tag,
                            Channel: interaction.channel.name
                        }
                    ],
                })
            } else {
                const obj = {
                    ExecuterID: interaction.member.id,
                    ExecuterTag: interaction.member.tag,
                    Channel: interaction.channel.name
                }
                data.Content.push(obj)
            }
            data.save()
        });
    }
}