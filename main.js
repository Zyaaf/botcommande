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

//say 
bot.on('message', message => {
    let args = message.content.split(" ").slice(1);
   
    if(message.content.startsWith(prefix + "say"))  {
           message.delete()
           const embed = new Discord.RichEmbed()
           .setTitle(message.author.username + " a dit")
           .setDescription(args.join(" "))
           .setColor(0xff0000)
            message.channel.sendEmbed(embed);
   
       }
   
});

bot.on('message', message => {
    let args = message.content.split(" ").slice(1);

    if(message.content.startsWith(prefix + "alerteadm"))  {
    if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Vous n'avez pas la permission d'executer cette commande !`);
           message.delete()
           const embed = new Discord.RichEmbed()
           .setTitle(" :warning: Information des administrateurs :warning: :")
           .setDescription(args.join(" "))
           .setColor(0xFE0000)
            message.channel.sendEmbed(embed);

       }

});

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
         .addField("-bot","info sur le bot")
         .addField("-don", "Un petit don paypal ne fait pas de mal :p ")
         .addField("-histoires", "Savoir les histoires disponible")
         .addField("-say [Text]", "Le bot répète le text")
         .setColor(0xFF0000);
                message.channel.sendEmbed(embednom)
                }
    
    if(message.content === prefix + "monid"){
        message.channel.send(message.author.id)
    }
    
if (message.content === '-online'){
message.delete();
const sicon = bot.user.displayAvatarURL

          var help_embed = new Discord.RichEmbed()
          
              .setTitle("Voici depuis quand StaffMe est en ligne :")
              .addField("En ligne depuis:" , (Math.round(bot.uptime / (1000 * 60 * 60))) + 'h  ' + (Math.round(bot.uptime / (1000 * 60)) % 60) + 'min ' + (Math.round(bot.uptime / 1000) % 60) + 's')
              .setColor("#389aea")
              .setFooter("Notre site: http://thombbo.tk/")
              message.channel.send(help_embed).catch(async(err) => {console.log(err)});
      }
    
    if(message.content === prefix + "channelid"){
        message.channel.send(message.channel.id)
    }
    
    if(message.content === prefix + "histoires"){
        var embednom = new Discord.RichEmbed()
         .setTitle("Histoire disponible")
         .setDescription("")
         .addField("-La montre de Lou","Histoire pour les enfants")
         .addField("-Eh bien mon cochon","Histoire 10-20 ans")
         .setColor(0x01B2FE);
                message.channel.sendEmbed(embednom)
    }
    
bot.on('message', message => {
    if(message.content === prefix + "helpadm"){ 
        if (message.author.id === '371914890903945216') { 
        
        var embednom = new Discord.RichEmbed()
         .setTitle("Help Admin")
         .setDescription("Commande administration")
         .addField("-ownerclear","Commande que pour le créateur")
         .addField("-adm","message support")
         .addField("-bot","Info sur le bot")
         .addField("-version","Ma version est ...")
         .addField("-maj","Les mises à jour")
         .setColor(0x01B2FE);
                message.author.sendEmbed(embednom);
    }
        else message.channel.send("Seul le créateur peut faire cela !")
    }
    
});  

    
        if(message.content === prefix + "maintenance"){
        var embednom = new Discord.RichEmbed()
         .setTitle("MAINTENANCE DU BOT")
         .setDescription("")
         .addField("Maintenance","Le bot reviendra avec du nouveau !")
         .setColor(0x01FE01);
                message.channel.sendEmbed(embednom)
                }
        if(message.content === prefix + "Eh bien mon cochon"){
            message.channel.send("https://jeunesse.short-edition.com/oeuvre/10-20/eh-bien-mon-cochon")
        }
    
        if(message.content === prefix + "maintenance2"){
        var embednom = new Discord.RichEmbed()
         .setTitle("MAINTENANCE FINI")
         .setDescription("")
         .addField("Maintenance Fini","Le bot a du nouveau dite .maj pour savoir !")
         .setColor(0xFE0000);
                message.channel.sendEmbed(embednom)
                }
    
    if(message.content === prefix + "maj"){
        var embednom = new Discord.RichEmbed()
         .setTitle("Les mises à jour de StaffMe")
         .setDescription("Voici les MAJ effectuées jusqu'à maintenant:")
         .addField("MAJ 20.06.18","Crée de la commande -equipe et -maj")
         .addField("MAJ 13.06.18", "Retire de la commande -helpthom")
         .addField("MAJ 12.06.18", "Ajout de la commande -bot") 
         .addField("MAJ 11.06.18", "Ajout de la commande -version")
         .addField("MAJ 10.06.18", "Changement dans la commande -help")
         .setColor(0xD2CAC3);
                message.channel.sendEmbed(embednom)
                }
    
    if(message.content === prefix + "equipe"){
        var embednom = new Discord.RichEmbed()
         .setTitle(":necktie: Équipe de StaffMe")
         .setDescription("")
         .addField("Thom.Lorbrok (Thom.Lorbrok#8058)", "Créateur , Fondateur , Développeur de StaffMe")
         .setColor(0x2B01FE);
                message.channel.sendEmbed(embednom)
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
    
    if(message.content === prefix + "bot"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**Bot**")
                    .setDescription("Les infos sur le bot")
                    .addField("Nom","Je m'appel StaffMe")
                    .addField("Version","Je suis en 2.0 :gear:")
                    .addField("Mon site","http://www.thombbo.jeux.tk/")
                    .addField("Maitenance","Non")
                    .setColor("OxEA6E02")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }

      if (message.content === prefix + "monavatar") {
    message.reply(message.author.avatarURL);
      }
    
    if(message.content === prefix + "adm"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**BIENVENUE DANS LE SUPPORT**")
                    .setDescription("On va venir t'aider et explique ton problème au passage hein")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }

    if(message.content === prefix + "support") {
       message.channel.guild.createChannel("support");
       message.channel.send('Vous devez allez dans #support on vous aidera !');
    }
    
    if(message.content === prefix + "La montre de Lou"){
        message.channel.send("https://jeunesse.short-edition.com/oeuvre/10-20/la-montre-de-lou-1")
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
        message.channel.send("Ma version est la 2.0 :gear: ");
        
    }
    
    if(message.content === prefix + "infodiscord") {
         var embed = new Discord.RichEmbed()
                .setDescription("Informations à propos du discord")
                .addField("Nom du discord", message.guild.name)
                .addField("Nombre d'utilisateurs sur ce discord", message.guild.memberCount)
                .setColor("0x09FE01")
                    message.channel.sendEmbed(embed)
          }
});

 bot.on('message', message => {
if(message.content === prefix + "ownerclear"){
    if (message.author.id === '371914890903945216') {
        message.channel.fetchMessages()
            .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("Erreur")})
                                        }
    else message.channel.send("Seul le créateur peut faire cela !")
                                    }
                                });

 bot.on('message', message => {
if(message.content === prefix + "antiraidsun"){
    if (message.author.id === '326039158860808192') {
        message.channel.fetchMessages()
            .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("Erreur")})
                                        }
    else message.channel.send("Seul le créateur de habbo sun peut faire cela !")
                                    }
                                });

 bot.on('message', message => {
if(message.content === prefix + "antiraidsun2"){
    if (message.author.id === '338773266594267157') {
        message.channel.fetchMessages()
            .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("Erreur")})
                                        }
    else message.channel.send("Seul le créateur de habbo sun peut faire cela !")
                                    }
                                });

 bot.on('message', message => {
   if(message.content === prefix + "clear"){
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Erreur")})
                                                }
       if(message.content === prefix + "clear"){
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

