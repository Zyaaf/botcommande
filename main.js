const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    console.log("Prêt à travailler chef ");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "valider"){
        message.channel.sendMessage("Votre commande à été validé avec succés");
        console.log("Commande Validé");
    }

    if (message.content === prefix + "encours"){
        message.channel.sendMessage("La commandes de Mike qui a été validé est en cours de livraison");
        console.log("Commande en cours ");
    }

    if (message.content === prefix + "livrer"){
        message.channel.sendMessage("La commandes a bien été livré accès envoyer en pv");
        console.log("Commande Validé");
    }

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} vien de quitter`)
})

   if(message.content === prefix + "clear"){
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Erreur")})}
    }
    })
});
