const discord = require("discord.js");

const clientDiscord = new discord.Client();
const PREFIX = "-";

clientDiscord.on("ready", () => {
  clientDiscord.user.setGame('-help | StaffMe', 'https://www.twitch.tv/thomlorbrock');
  console.log("Prêt Chef");
  clientDiscord.channels.get("484802599808401468").send("Prêt");
});

//Connexion
clientDiscord.login(process.env.TOKEN);

clientDiscord.on("message", message => {
  
   if(message.content === PREFIX + "help"){
   var embed = new Discord.RichEmbed()
    .setDescription("Help Page")
    .addField("Nom du discord", message.guild.name)
    .addField("Utilisateur sur le discord", message.guildCount)
    .setColor("0x0000FF")
    message.channel.sendEmbed(embed);
   }
  
  if(message.content === PREFIX + "idchannel"){
     if(message.channel.send(message.channel.id));
     clientDiscord.channels.get("484802599808401468").send("ID channel utilisé !");
     }
  
  if(message.content === PREFIX + "contact"){
    message.author.createDM().then(channel => {
      channel.send("Adresse Mail : thomlorbrok@gmaiL.com /n Pseudo Discord : Thom.Lorbrok#8058")
    });
    clientDiscord.channels.get("484802599808401468").send("Contact");
  }
  
});

clientDiscord.on("message", message => {
  if(message.content === PREFIX + "role1"){
    let role = message.guild.roles.find('name', 'role1')
    
    if(message.member.roles.find('name', 'role1')){
      message.member.removeRole(role)
      message.reply("Tu n'as plus le role !");
      clientDiscord.channels.get("484802599808401468").send("Role enlevé !");
    }
    else {
      message.member.addRole(role)
      message.reply("Voilà le role !");
      clientDiscord.channels.get("484802599808401468").send("Role atribué");
    }
  }
});
