const discord = require("discord.js");

const bot = new discord.Client();
const PREFIX = "-";


bot.on("ready", () => {
  bot.user.setActivity(numbserv + ' SERVS • ' + user + ' USERS :maple_leaf:', "https://www.twitch.tv/nekooo ")
  console.log("Prêt Chef");
  bot.channels.get("484802599808401468").send("Prêt");
});

//Connexion
bot.login(process.env.TOKEN);

bot.on("message", message => {
  
  if(message.content === PREFIX + "idchannel"){
     if(message.channel.send(message.channel.id));
     bot.channels.get("484802599808401468").send("ID channel utilisé !");
     }
  
  if(message.content === PREFIX + "contact"){
    message.author.createDM().then(channel => {
      channel.send("Adresse Mail : thomlorbrok@gmaiL.com /n Pseudo Discord : Thom.Lorbrok#8058")
    });
    bot.channels.get("484802599808401468").send("Contact");
  }

});
 
bot.on("message", message => {
  if(message.content === PREFIX + "secret"){
    let role = message.guild.roles.find('name', 'Role Secret')
    
    if(message.member.roles.find('name', 'Role Secret')){
      message.member.removeRole(role)
      message.reply("Tu n'as plus le role !");
      bot.channels.get("484802599808401468").send("Role enlevé !");
    }
    else {
      message.member.addRole(role)
      message.reply("Voilà le role !");
      bot.channels.get("484802599808401468").send("Role atribué");
    }
  }
});
