module.exports = {
    name: "messageCreate",
    run: async(message, client, container) => {
        const loadCommandOptions = require("../Structures/CommandOptions/loadCommandOptions")
        container.Config.prefix.forEach(prefix => {
            if (!message.content.toLowerCase().startsWith(prefix)) return;
            const cmdName = message.content.toString().toLowerCase().slice(prefix.length).trim().split(" ")[0]
            const command = client.commands.messageCommands.get(cmdName) ?? client.commands.messageCommands.get(client.commands.messageCommands.aliases.get(cmdName))
            if (!command) return;
            if (command.allowBots) loadCommandOptions(client, message, command, false)
            else if (message.author.bot) return;
            else if (command.guildOnly == false) loadCommandOptions(client, message, command, false)
            else if (!message.guild) return;
            else loadCommandOptions(client, message, command, false)
        })

        const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;

        if (!message.member.roles.cache.has('991875967146545223')) {  //replace the Xs with the admin role ID
            if (regex.exec(message.content)) {
            await message.channel.send(
                `${message.author} Do not send discord invites, next time will be a ban.`
            )
            }
        } 
    }
}