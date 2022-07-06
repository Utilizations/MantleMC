const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/ClaimDB");

module.exports = {
    name: "setStatus",
    userPermissions: ["ADMINISTRATOR"],
    run: async(client, message, args, container) => {
        message.delete()
        client.user.setActivity(args.slice(0).join(" "))

        message.channel.send({embeds: [new Discord.MessageEmbed().setDescription(`Bot Status has been changed to ${args.slice(0).join(" ")}!`)]})

    }
}