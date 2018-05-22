const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("-");

bot.on('ready', () => {
    console.log("Prêt à travailler chef ");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }
    
    if(message.content === prefix + "help"){
    var embednom = new Discord.RichEmbed()
                    .setTitle("**HELP**")
                    .setDescription("Voilà les commandes : -help , -Google , -infobot , -clear")
                    .setColor("0x009FEF")
                    .setFooter("StaffMe - Tous droits réservés")
                message.channel.sendEmbed(embednom)
                }
    
    if (message.content === prefix + "Google"){
        message.channel.sendMessage("C'est un navigateur le plus utilisé en France");
        console.log("Commande en cours ");
    }

    if (message.content === prefix + "infobot"){
        message.channel.sendMessage("Il a été crée et développer par thom avec ses plus grands soins !");
        console.log("Commande Validé");
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
})
