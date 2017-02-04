//
// Copyright (c) 2017 DrSmugleaf
//

"use strict"
const commando = require("discord.js-commando")
const constants = require("../../util/constants")
const CustomCommand = require("./base/command")

module.exports = class CustomCommandAdmin extends commando.Command {
  constructor(client) {
    super(client, {
      name: "custom-command-manager",
      aliases: [
        "custom-command-manager", "customcommandmanager", "custom-cmd-manager", "customcmdmanager",
        "custom-command-admin", "customcommandadmin", "custom-cmd-admin", "customcmdadmin"
      ],
      group: "customcommand",
      memberName: "custom-command-manager",
      description: "Manage custom commands.",
      examples: ["custom-command-manager"],
      guildOnly: true,
      throttling: {
        usages: 2,
        duration: 3
      },
      args: [
        {
          key: "action",
          prompt: "What do you want to do? (remove)",
          type: "string"
        },
        {
          key: "command",
          prompt: "Which custom command do you want to act upon?",
          type: "string"
        }
      ]
    })

    this.client.once("dbReady", () => {
      this.client.guilds.forEach((guild) => {
        const commands = guild.settings.get("custom-commands", {})
        for(const customCommand in commands) {
          if(!commands.hasOwnProperty(customCommand)) return
          commands[customCommand].guild = guild
          const command = CustomCommand(customCommand, commands[customCommand])
          this.client.registry.registerCommand(command)
        }
      })
    })
  }

  hasPermission(msg) {
    return msg.member.hasPermission("ADMINISTRATOR")
  }

  async run(msg, args) {
    const action = args.action
    const commandName = args.command
    const command = this.client.registry.commands.get(commandName)
    if(!command) return msg.reply(constants.responses.CUSTOM_COMMAND.DOESNT_EXIST[msg.language](commandName))
    const commands = msg.guild.settings.get("custom-commands")

    switch (action) {
    case "remove":
      this.client.registry.unregisterCommand(command)
      delete commands[commandName]
      msg.guild.settings.set(commands)

      return msg.reply(constants.responses.CUSTOM_COMMAND.UNREGISTERED[msg.language](commandName))
    }
  }
}
