const { Client, CommandInteraction, MessageEmbed, Message } = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "createembed",
    description: "fetch's the id of target member.",
    options: [
        {
            name: "title",
            description: "Embed Title",
            type: "STRING",
            required: true,
        },
        {
            name: "description",
            description: "Embed Description just put ; to start a new line",
            type: "STRING",
            required: true,
        },
        {
            name: "logo",
            description: "Would you like the logo? (y/n)",
            type: "STRING",
            required: true,
        },
        {
            name: "banner",
            description: "Would you like the logo? (y/n)",
            type: "STRING",
            required: true,
        },
        {
            name: "footer",
            description: "Embed Footer",
            type: "STRING",
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        //const choices = interaction.options.getString("member");
        const Logo = interaction.options.getString("logo");
        const Title = interaction.options.getString("title");
        const Description = interaction.options.getString("description").replaceAll(";", "\n");
        const Footer = interaction.options.getString("footer") || "N/A";
        const Banner = interaction.options.getString("banner");

        if(Footer === "N/A") {
            if(Logo === "y"){
                if(Banner === "y") {
                    const embed1 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    .setThumbnail(config.serverIcon)
                    .setImage(config.serverBanner)
                    interaction.channel.send({embeds: [embed1]})
                } else {
                    const embed2 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    .setThumbnail(config.serverIcon)
                    interaction.channel.send({embeds: [embed2]})
                }
            } else {
                if(Banner === "y") {
                    const embed3 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    .setImage(config.serverBanner)
                    interaction.channel.send({embeds: [embed3]})
                }else {
                    const embed4 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    interaction.channel.send({embeds: [embed4]})
                }
            }
        }else {
            if(Logo === "y"){
                if(Banner === "y") {
                    const embed5 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    .setThumbnail(config.serverIcon)
                    .setImage(config.serverBanner)
                    .setFooter(Footer)
                    interaction.channel.send({embeds: [embed5]})
                } else {
                    const embed6 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    .setThumbnail(config.serverIcon)
                    .setFooter(Footer)
                    interaction.channel.send({embeds: [embed6]})
                }
            } else {
                if(Banner === "y") {
                    const embed7 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    .setImage(config.serverBanner)
                    .setFooter(Footer)
                    interaction.channel.send({embeds: [embed7]})
                }else {
                    const embed8 = new MessageEmbed()
                    .setTitle(Title)
                    .setDescription(Description)
                    .setFooter(Footer)
                    interaction.channel.send({embeds: [embed8]})
                }
            }
        }
    }
}