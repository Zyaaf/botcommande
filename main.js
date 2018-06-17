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

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('index', 'discussion');
 if (!channel) return;
  channel.send(`Nous te souhaitons la bienvenue, ${member}`);
})

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }
    
    if(message.content === prefix + "help"){
        var embednom = new Discord.RichEmbed()
         .setTitle("Help page")
         .setDescription("Les commandes sont dessous :p ")
         .addField("-help","Pour avoir les commandes")
         .addField("-Google","Pour savoir c'est quoi google")
         .addField("-infobot","Pour avoir les informations du bot")
         .addField("-clear","Pour supprimé les message")
         .addField("-nouveautés","Pour savoir quel sont les nouveautés")
         .addField("-botcréator","Pour savoir quesque represente botcréator")
         .addField("-support", "Si besoin d'aide prononcer cette commande")
         .addField("-monavatar", "Pour voir votre avatar en url c'est ici !")
         .addField("-version", "Pour voir ma dernière version :p")
         .addField("-infodiscord", "Informations sur le discord ton serveur discord !")     
         .addField("-don", "Un petit don paypal ne fait pas de mal :p ")
         .setColor(0xFF0000);
                message.channel.sendEmbed(embednom)
                }

    // Nouveautés //
    if (message.content === prefix + "nouveautés") {
        message.reply('Mon développeur ajoute des nouveautés presque tout les jours.')
    }
    
    ///Commande -alerteadm
      if (message.content.startsWith(prefix + "alerteadm")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .alerteadm)");
        if(message.content === '.alerteadm') return message.channel.sendMessage(":x: Erreur ! Merci d'ajouter un message.").then(msg => msg.delete(7000))
        message.channel.sendMessage("@everyone :loudspeaker: INFORMATION POUR LES MEMBRES")
            var alerteadmembed = new Discord.Embed()
                  .setTitle(":warning: messg:")
                  .setColor("#FF4000")
                  message.channel.sendMessage(alerteadmembed)

      }

    if(message.content === prefix + "Google"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**GOOGLE**")
                    .setDescription("C'est le navigateur de mon créateur")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }

      if (message.content === prefix + "monavatar") {
    message.reply(message.author.avatarURL);
      }

    if(message.content === prefix + "support") {
       message.channel.guild.createChannel("support");
       message.channel.send('Vous devez allez dans #support on vous aidera !');
    }
    
    if(message.content === prefix + "don"){
         var embednom = new Discord.RichEmbed()
                    .setTitle(":gift_heart: Don pour StaffMe")
                    .setDescription("Si tu souhaites me faire un don (même des petits), clique ici: https://www.paypal.me/ThomLorbrok ! En me fesant un don, tu as directement le rang: Staff Donateur, stylé non ?")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }

    if(message.content === prefix + "delete support") {
       if(message.channel.name === "support"){
message.channel.delete();
       }
    }

    if(message.content === prefix + "infobot"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**INFO SUR LE BOT**")
                    .setDescription("Il a été développer par le meilleur et unique thom")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }
        
    if(message.content === prefix + "botcréator"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**BOT CREATOR**")
                    .setDescription("C'est la plateform de mon créateur")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }
    
    if(message.content === prefix + "version"){
        message.channel.send("Ma version est la 1.5 :gear: ");
        
    }

    if(message.content === prefix + "infodiscord")
         var embed = new Discord.RichEmbed()
                .setDescription("Informations à propos du discord")
                .addField("Nom du discord", message.guild.name)
                .addField("Nombre d'utilisateurs sur ce discord", message.guild.memberCount)
                .setColor("0x0000FF")
                    message.channel.sendEmbed(embed)

   if(message.content === prefix + "clear"){
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Erreur")})
            message.channel.send('Vous avez réussie à vider le salon.')}
                    console.log("La commande clear viens d'être effectué par un membre de l'équipe.")
    }
})
