const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
  name: "about",
  category: "Information",
  aliases: ["botinfo"],
  description: "See description about this project",
  args: false,
  usage: "",
  userPrams: [],
  botPrams: ["EMBED_LINKS"],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite")
        .setStyle("LINK")
        .setURL(client.config.links.invite),
      new MessageButton()
        .setLabel("GitHub")
        .setStyle("LINK")
        .setURL("https://github.com/Saunakghosh10"),
      new MessageButton()
        .setLabel("Support")
        .setStyle("LINK")
        .setURL(client.config.links.support)
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: "Rem",
        iconURL:
          "https://cdn.discordapp.com/attachments/818058062064648225/981668486650691634/d9506eb47e4c20ab5d0bb5c9d71070d0.jpg",
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/818058062064648225/981668486650691634/d9506eb47e4c20ab5d0bb5c9d71070d0.jpg"
      )
      .setColor("#303236")
      .addField("Creator", "[Saunak](https://github.com/Saunakghosh10)", true)
      .addField(
        "Organization",
        "[Saunak](https://github.com/Saunakghosh10)",
        true
      )
      .addField(
        "Repository",
        "[Here](https://github.com/Saunakghosh10/Rem)",
        true
      )
      .addField(
        "\u200b",
        `[Rem](https://github.com/Saunakghosh10) is [Saunak](https://github.com/Saunakghosh10 )'s is created by me.I really want to make his first open source project ever. Because I wants more for coding experience. In this project, i was challenged to make project with less bugs. Hope you enjoy using Rem!`
      );
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};
