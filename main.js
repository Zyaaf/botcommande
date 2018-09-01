const discord = require("discord.js");

const clientDiscord = new discord.Client();
const PREFIX = "-";


clientDiscord.on("ready", () => {
  clientDiscord.user.setGame(' -help | StaffMe ' + clientDiscord.guilds.size + ' serveurs ' + clientDiscord.users.size + ' users ', "https://www.twitch.tv/thomlorbrock");
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
    message.author.createDM().then(channel => {
      channel.send("Adresse Mail : thomlorbrok@gmaiL.com /n Pseudo Discord : Thom.Lorbrok#8058")
    });
    clientDiscord.channels.get("484802599808401468").send("Contact");
  }

});

clientDiscord.on("message", message => {
     if (prefix + "ban") { 
   if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Désolé, tu n'a pas la permission !");
   var banmember = message.mentions.members.first(); 
   if (!banmember) return message.reply("Veuillez mentionner une personne valide.") 
   if (!banmember.bannable) return message.reply("Je ne peux pas ban cette personne !") 

   if (!banreason) return message.reply("Veuillez indiquer la raison du ban !") 
   var banreason = args.slice(1).join(" ");
   try {
   banmember.ban(banreason)
   message.reply(`${banmember.user.username} a été ban par ${message.author.username} pour: ${banreason}`);
   } catch (error) {
   message.reply(`Désolé @${message.author}. Je ne peux pas le ban car ${error}`)
   }
});
 
clientDiscord.on("message", message => {
  if(message.content === PREFIX + "secret"){
    let role = message.guild.roles.find('name', 'Role Secret')
    
    if(message.member.roles.find('name', 'Role Secret')){
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
