const discord = require("discord.js");

const clientDiscord = new discord.Client();
const PREFIX = "-";

//Connexion
clientDiscord.login(process.env.TOKEN);

clientDiscord.on("message", message => {
  if(message.content === PREFIX + "id"){
     if(message.channel.send(message.channel.id);
     }
});
