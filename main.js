const discord = require("discord.js");

const bot = new discord.Client();
const PREFIX = "-";


bot.on("ready", () => {
  bot.user.setGame(' -help | StaffMe ' + bot.guilds.size + ' serveurs ' + bot.users.size + ' users ', "https://www.twitch.tv/thomlorbrock");
  console.log("Prêt Chef");
  bot.channels.get("484802599808401468").send("Prêt");
});

//Connexion
bot.login(process.env.TOKEN);

bot.on('message', message => {
       
    if (message.content.startsWith(PREFIX + "sondage")) {
   if (message.member.hasPermission("ADMINISTRATOR")){
       message.delete()
       let args = message.content.split(" ").slice(1);
       let thingToEcho = args.join(" ")
       var embed = new Discord.RichEmbed()
           .setDescription("Sondage")
           .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
           .setColor(0xB40404)
           .setTimestamp()
       message.guild.channels.find('name', 'sondage').sendEmbed(embed)
       .then(function (message) {
           message.react("✅")
           message.react("❌")
       }).catch(function() {
       });
       }else{
           return message.reply("Tu n'as pas la permission.")
            }

        }
});
bot.on("message", message => {
  
      if(message.content === PREFIX + "help"){
       message.delete()
        var embednom = new Discord.RichEmbed()
         .setTitle("Help page")
         .setDescription("Les commandes sont dessous :p ")
         .addField("-sondage [administrateur]", "Permet de faire des sondages")
         .addField("-idchannel", "Avoir l'id d'un channel")
         .addField("-infodiscord", "Les infos sur le discord")
         .addField("-clear", "Supprimé des messages")
         .setColor(0xFF0000);
                message.channel.sendEmbed(embednom)
                }
  
  if(message.content === PREFIX + "idchannel"){
     if(message.channel.send(message.channel.id));
     bot.channels.get("484802599808401468").send("ID channel utilisé !");
     }
  
  

      if(message.content === PREFIX + "infodiscord") {
       message.delete()
         var embed = new Discord.RichEmbed()
                .setDescription("Informations à propos du discord")
                .addField("Nom du discord", message.guild.name)
                .addField("Nombre d'utilisateurs sur ce discord", message.guild.memberCount)
                .setColor("0x09FE01")
                    message.channel.sendEmbed(embed)
          }

});

bot.on('message', message => {
   if(message.content === PREFIX + "clear"){
      message.delete()
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Erreur")})
            
                                                }else{
                                                    return message.reply("Tu n'as pas la permission")
                                                }
       if(message.content === PREFIX + "clear"){
          message.delete()
           var embed = new Discord.RichEmbed()
                 .setTitle("")
                 .setDescription("")
                 .addField("Salon vidé","Salon vidé avec succes par un membre de l'équipe")
                 .setColor("Ox09FE01")
                        message.channel.sendEmbed(embed)
       }
                    console.log("La commande clear viens d'être effectué par un membre de l'équipe.")
    }
});

bot.on('message', message => {
    let args = message.content.split(" ").slice(1);

    if(message.content.startsWith(PREFIX+ "interserveur"))  {
           message.delete()
           const embed = new Discord.RichEmbed()
           .setTitle("Chat en serveur")
           .addField("Serveur", message.guild.name)
           .addField("Utilisateur qui à écrit le message : ", message.author.name)
           .addField("Message de l'utilisateur : ", args.join(" "))
           .setColor(0xFB0000)
           bot.channels.get("485827848473673738").send(embed);

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
