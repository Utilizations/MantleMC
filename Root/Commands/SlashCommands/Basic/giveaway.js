const { CommandInteraction, MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "giveaway",
    description: "A complete giveaway system.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "start",
            description: "Start a giveaway.",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "duration",
                    description: "Provide a duration for the giveaway.",
                    type: "STRING",
                    required: true
                },
                {
                    name: "winners",
                    description: "Select the amount of winners",
                    type: "INTEGER",
                    required: true
                },
                {
                    name: "prize",
                    description: "Provide a prize.",
                    type: "STRING",
                    required: true
                },
                {
                    name: "channel",
                    description: "Select a channel to send the giveaway to.",
                    type: "CHANNEL",
                    channelType: ["GUILD_TEXT"],
                }
            ]
        },
        {
            name: "actions",
            description: "Actions for the giveaways.",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "options",
                    description: "Select an option.",
                    type: "STRING",
                    required: true,
                    choices: [
                        {
                            name: "end",
                            value: "end"
                        },
                        {
                            name: "pause",
                            value: "pause"
                        },
                        {
                            name: "unpause",
                            value: "unpause"
                        },
                        {
                            name: "reroll",
                            value: "reroll"
                        },
                        {
                            name: "delete",
                            value: "delete"
                        },
                    ]
                },
                {
                    name: "message_id",
                    description: "Provde the message if of the giveaway.",
                    type: "STRING",
                    required: true
                }
            ]

        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
     run: async(interaction, client) => {

        const Sub = interaction.options.getSubcommand();

        const errorEmbed = new MessageEmbed()
        .setColor("RED")

        const successEmbed = new MessageEmbed()
        .setColor("GREEN")

        switch(Sub) {
            case "start" : {

                const gchannel = options.getChannel("channel") || interaction.channel;
                const duration = options.getString("duration");
                const winnerCount = options.getInteger("winners");
                const prize = options.getString("prize");

                client.giveawaysManager.start(gchannel, {
                    duration: ms(duration),
                    winnerCount,
                    prize,
                    messages : {
                        giveaway: "🎉 | **Giveaway Started** | 🎉",
                        giveawayEnded: "🔐 | **Giveaway Ended** | 🔐",
                        winMessage: `🎉 | Congratulations, {winners} You have won the giveaway for **{this.prize}**!\nMake a ticket to claim!`,
                    }
                }).then (async () => {
                    successEmbed.setDescription ("Giveaway has successfully started.")
                    return interaction.reply({embeds: [successEmbed], ephemeral: true});
                }).catch((err) => {
                    successEmbed.setDescription (`There was an error!\n ${err}`)
                    return interaction.reply({embeds: [errorEmbed], ephemeral: true});
                })


            }
            break;

            case "actions" : {
                const choice = options.getString("options");

                const messageId = options.getString("message_id");

                const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageId);

                    if (!giveaway) {
                        errorEmbed.setDescription(`Unable to find the giveaway with message ID ${messageId} to this guild.`);
                        return interaction.reply({embeds: [errorEmbed], ephemeral: true});
                    }



                switch(choice) {
                    case "end" : {

                        client.giveawaysManager.end(messageId).then(() => {
                        successEmbed.setDescription("Giveaway has successfully ended.");
                        return interaction.reply({embeds: [successEmbed], ephemeral: true})
                    }).catch((err) => {
                        errorEmbed.setDescription("Giveaway has failed to end.");
                        return interaction.reply({embeds: [errorEmbed], ephemeral: true})
                    });

                    }
                    break;

                    case "pause" : {

                        client.giveawaysManager.pause(messageId).then(() => {
                            successEmbed.setDescription("Giveaway has successfully paused.");
                            return interaction.reply({embeds: [successEmbed], ephemeral: true})
                     }).catch((err) => {
                        errorEmbed.setDescription("Giveaway has failed to pause.");
                        return interaction.reply({embeds: [errorEmbed], ephemeral: true})
                    });

                    }
                    break;

                    case "unpause" : {

                        client.giveawaysManager.unpause(messageId).then(() => {
                            successEmbed.setDescription("Giveaway has successfully unpaused.");
                            return interaction.reply({embeds: [successEmbed], ephemeral: true})
                     }).catch((err) => {
                        errorEmbed.setDescription("Giveaway has failed to unpause.");
                        return interaction.reply({embeds: [errorEmbed], ephemeral: true})
                    });

                    }
                    break;

                    case "reroll" : {

                        client.giveawaysManager.reroll(messageId).then(() => {
                            successEmbed.setDescription("Giveaway has successfully reroll.");
                            return interaction.reply({embeds: [successEmbed], ephemeral: true})
                     }).catch((err) => {
                        errorEmbed.setDescription("Giveaway has failed to reroll.");
                        return interaction.reply({embeds: [errorEmbed], ephemeral: true})
                    });

                    }
                    break;
                    case "delete" : {

                        client.giveawaysManager.delete(messageId).then(() => {
                            successEmbed.setDescription("Giveaway has successfully deleted.");
                            return interaction.reply({embeds: [successEmbed], ephemeral: true})
                     }).catch((err) => {
                        errorEmbed.setDescription("Giveaway has failed to delete.");
                        return interaction.reply({embeds: [errorEmbed], ephemeral: true})
                    });

                    }
                    break;
                }
            }
            break;

            default : {
                console.log("Error in giveaway command")
            }
        }
    }, catch (e) {
        const errorEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription(`⛔ Alert: ${e}`)
        return interaction.reply({embeds: [errorEmbed]});
    }
}