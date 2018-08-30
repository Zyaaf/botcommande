const discord = require("discord.js");

const clientDiscord = new discord.Client();
const PREFIX = "-";

clientDiscord.on("ready", () => {
  console.log("Prêt Chef");
  clientDiscord.channels.get("484802599808401468").send("Prêt");
});

//Connexion
clientDiscord.login(process.env.TOKEN);

clientDiscord.on("message", message => {
  if(message.content === PREFIX + "idchannel"){
     if(message.channel.send(message.channel.id));
     clientDiscord.channels.get("484802599808401468").send("ID channel utilisé !");
     }
  
  if(message.content === PREFIX + "contact"){
    message.author.createDM("Adresse Mail : thomlorbrok@gmaiL.com /n Pseudo Discord : Thom.Lorbrok#8058");
    clientDiscord.channels.get("484802599808401468").send("Contact");
  }
     
});
