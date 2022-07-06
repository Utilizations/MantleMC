const Discord = require("discord.js");
const config = require("../../../../Config");
const db = require("../../../Structures/Models/ClaimDB");
const { poll } = require('discord.js-poll');

module.exports = {
    name: "poll",
    userPermissions: ["MANAGE_MESSAGES"],
    run: async(client, message, args, container) => {
        poll(message, args, '+', '#00D1CD');

    }
}