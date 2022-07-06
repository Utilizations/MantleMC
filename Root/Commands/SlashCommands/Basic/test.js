const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "test",
    description: "fetch's the id of target member.",
    options: [
        {
            name: "member",
            description: "Guild Member Events.",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "guildMemberAdd",
                    value: "guildMemberAdd"
                },
                {
                    name: "guildMemberRemove",
                    value: "guildMemberRemove"
                }
            ]
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        const choices = interaction.options.getString("member");

        switch(choices) {
            case "guildMemberAdd" : {
                client.emit("guildMemberAdd", interaction.member);
                interaction.reply({content: "Emitted the event.", ephemeral: true})
            }
            break;
            case "guildMemberAdd" : {
                client.emit("guildMemberAdd", interaction.member);
                interaction.reply({content: "Emitted the event.", ephemeral: true})
            }
            break;
            case "guildMemberRemove" : {
            client.emit("guildMemberRemove", interaction.member);
            interaction.reply({content: "wedawdawd the event.", ephemeral: true})
            }
            break;
        }
    }
}