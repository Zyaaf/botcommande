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
  if(message.content === PREFIX + "id"){
     if(message.channel.send(message.channel.id));
     }
});
