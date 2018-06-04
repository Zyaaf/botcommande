const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("-");

bot.on('ready', () => {
    console.log("Prêt à travailler chef ");
});

bot.login(process.env.TOKEN);

bot.on('ready', () => {
bot.user.setActivity("StaffMe | -help")
});

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }
    if(message.content === prefix + "help"){
       var embed = new Discord.RichEmbed();
embed.setTitle("Help page");
embed.setDescription("Les commandes sont dessous :p ");
embed.addField("-help","Pour avoir les commandes");
embed.addField("-Google","Pour savoir c'est quoi google");
embed.addField("-infobot","Pour avoir les informations du bot");
embed.addField("-clear","Pour supprimé les message");
embed.addField("-nouveautés","Pour savoir quel sont les nouveautés");
embed.addField("-botcréator","Pour savoir quesque represente botcréator");
embed.addField("-support", "Si besoin d'aide prononcer cette commande");
embed.addField("-monavatar", "Pour voir votre avatar en url c'est ici !");
embed.addField("-version", "Pour voir ma dernière version :p");
embed.setColor(0xFF0000);
message.author.sendMessage({embed});
    }
    
    // Nouveautés //
    if (message.content === prefix + "nouveautés") {
        message.reply('Mon développeur ajoute des nouveautés presque tout les jours.')
    }
    
    if(message.content === prefix + "Google"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**GOOGLE**")
                    .setDescription("C'est le navigateur de mon créateur")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }
    
     if(message.content === prefix + "version"){
         message.channel.send("Ma version est en 1.5 :gear:");
         message.reply("Si tu veux le bot demande à Thom.Lorbrok#8058");
    
      if (message.content === prefix + "monavatar") {
    message.reply(message.author.avatarURL);
      }
    
    if(message.content === prefix + "support") {
       message.channel.guild.createChannel("support");
       message.channel.send('Vous devez allez dans #support on vous aidera !');
    }
    
    if(message.content === prefix + "delete support") {
       if(message.channel.name === "support"){
message.channel.delete();
       }
    }
    
    if(message.content === prefix + "botcréator"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**BOTCREATOR**")
                    .setDescription("C'es la plateform de mon créateur...")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }


    if(message.content === prefix + "infobot"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**INFO SUR LE BOT**")
                    .setDescription("Il a été développer par le meilleur et unique thom")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }
    
   if(message.content === prefix + "clear"){
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Erreur")})
            message.channel.send('Vous avez réussie à vider le salon.')}
                    console.log("La commande clear viens d'être effectué par un membre de l'équipe.")
   }
