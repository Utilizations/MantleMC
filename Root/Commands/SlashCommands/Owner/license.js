const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/licenseDB")

module.exports = {
    name: "license",
    description: "register a License",
    options: [
        {
            name: "guildid",
            description: "Guild ID",
            type: "STRING",
            required: true,
        },
        {
            name: "licensekey",
            description: "License key",
            type: "NUMBER",
            required: true,
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        const guild = interaction.options.getString("guildid");
        const license = interaction.options.getNumber("licensekey");

        data = new db({
            GuildID: guild,
            LicenseKey: license
        })
        data.save()

        interaction.reply({embeds: [new MessageEmbed().setDescription(`License has been added for ${guild}`)], ephemeral: true})
    }
}