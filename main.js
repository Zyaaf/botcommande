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
         .addField("-bot","info sur le bot")
         .addField("-don", "Un petit don paypal ne fait pas de mal :p ")
         .addField("-histoires", "Savoir les histoires disponible")
         .setColor(0xFF0000);
                message.channel.sendEmbed(embednom)
                }
    
    if(message.content === prefix + "histoires"){
        var embednom = new Discord.RichEmbed()
         .setTitle("Histoire disponible")
         .setDescription("")
         .addField("-Pierre et le loup","Histoire pour les enfants")
         .addField("-Eh bien mon cochon","Histoire 10-20 ans")
         .setColor(0x01B2FE);
                message.channel.sendEmbed(embednom)
    }
    
    if(message.content === prefix + "helpadm"){
        var embednom = new Discord.RichEmbed()
         .setTitle("Help Admin")
         .setDescription("Commande administration")
         .addField("-adm","message support")
         .addField("-bot","Info sur le bot")
         .addField("-version","Ma version est ...")
         .addField("-maj","Les mises à jour")
         .setColor(0x01B2FE);
                message.channel.sendEmbed(embednom)
                }
    
        if(message.content === prefix + "maintenance"){
        var embednom = new Discord.RichEmbed()
         .setTitle("MAINTENANCE DU BOT")
         .setDescription("")
         .addField("Maintenance","Le bot reviendra avec du nouveau !")
         .setColor(0x01FE01);
                message.channel.sendEmbed(embednom)
                }
        if(message.content === prefix + "Eh bien mon cochon"){
            message.channel.send("Bernard est un homme heureux. Avec ses cent cinquante cochons, il travaille dur. C’est un sacré labeur que d’élever un tel troupeau ! Il travaille tous les jours, dix heures par jour.
Bernard habite un petit village de Bretagne et possède une ferme ancienne. Derrière celle-ci, un long hangar abrite les animaux. Et comme il est homme à prendre soin de ses cochons, un grand champ est à leur disposition, au fond duquel on aperçoit une petite forêt. 
Bernard aime bien bichonner ses bêtes et en particulier les mères et leurs bébés qui tètent. Il aime également brosser les animaux pour qu’ils soient moins sales. Il en prend soin comme personne et en est fier. Souvent, il donne des noms aux petits porcelets qui viennent au monde. Les derniers ont été baptisés Constantine, Mirandole, Lustucru, Terminator, Cheyenne et Louisiane. Tout ce qui lui passe par la tête est possible et cette liberté l’amuse. Et il a de quoi en inventer, puisqu’il assiste à des naissances tous les mois.
Ce qu’il déteste, c’est compter son troupeau. Cent cinquante têtes, c’est un peu compliqué. Entre ceux qui se déplacent, ceux qui lui tournent autour, ceux qui sortent et ceux qui rentrent du hangar, ceux qui sont au fond du grand champ et ceux qui n’y sont plus, ceux qui partent pour l’abattoir et les petits qui grandissent, c’est un véritable casse-tête !
Bernard ne le sait pas encore, mais cette journée ne va pas être une journée comme les autres…

Il commence à être sur les nerfs. À cinq cents mètres de chez lui s’est installé un festival de musique électro. Ce grand rassemblement de jeunes consiste à écouter de la musique assourdissante vingt-quatre heures sur vingt-quatre et ce pendant trois jours ! Ce boum-boum incessant lui est vite devenu insupportable. Il n’a quasiment pas fermé l’œil de la nuit. Il est fatigué et irritable. 
Et puis, il a vu quelques-uns de ses porcelets dodeliner de la tête au rythme du boum-boum. Et ça, ça ne lui plaît pas ! 
Il a hâte que ces jeunes venus de nulle part avec leur musique ahurissante partent au plus vite et que le calme revienne dans sa campagne paisible.

Tout à coup, une angoisse monte en lui.

Il connaît tellement son troupeau par cœur qu’il sent, sans même les avoir comptées, qu’il manque des bêtes. 
Un coup de chaud lui monte à la tête.
Immédiatement, il entreprend l’exercice qu’il déteste faire.
1, 2, 3…76, 77, 78… 104, 105, 106… 132, 133, 134… 140 !
— Bon sang ! Cette fois c’est sûr ! Il en manque dix ! Je devrais en avoir cent cinquante tout rond !

D’abord, comme bien d’autres le feraient, il accuse sans raison cette troupe de jeunes qui a débarqué depuis peu sur le territoire de la commune. C’est un peu facile et déraisonnable, mais en quelques secondes il s’est persuadé qu’il n’y a pas de doute possible. Et quand Bernard s’est mis une idée dans le crâne, il n’aime pas en démordre et… il sait très bien faire sa tête de cochon  !
Il fonce dans sa maison et saisit son téléphone pour appeler la gendarmerie. C’est ce gros bêta de Paterne qui décroche. 
Bernard l’appelle ainsi depuis leur plus tendre enfance. Ils ont grandi dans le même village et se connaissent depuis toujours. Plus précisément depuis les bancs de l’école maternelle. À l’époque, on peut même dire qu’ils étaient « copains comme cochons ». 
— Qu’est-ce qu’il se passe, Bernard ?
— On m’a volé dix bêtes !
— C’est pas vrai ?
— Mais si !
— Qui t’a fait ça ?
— Mais gros bêta, si j’appelle la gendarmerie, c’est pour que tu mènes l’enquête !
— Ah oui ! J’arrive !

Paterne se lève promptement de sa chaise et interpelle sa collègue 
Myrtille : 
— Viens ! On a une enquête à mener ! 
— Chez qui ? 
— Chez ce gros bêta de Bernard, répond Paterne en ricanant, parce que ça l’amuse toujours d’appeler son vieil ami ainsi.
Comme il s’agit d’une affaire de la plus haute importance, le gendarme Paterne n’hésite pas à mettre le gyrophare et à faire crisser les pneus dans les virages. 
En moins de cinq minutes, les deux gendarmes sont sur place.

Bernard les accueille. Très vite, Myrtille est indisposée par l’odeur saisissante des cochons. 
— Il faut affronter la réalité du terrain ! assène Paterne à sa collègue.
L’œil contrarié, Bernard les emmène au hangar qui abrite son troupeau de 140 têtes… et 560 pieds. 
Lorsqu’il voit la quantité de bêtes, Paterne est épaté par la réussite de son ami et ne peut s’empêcher de dire : 
— Eh bien mon cochon !
Tel un fin limier très expérimenté (ce qu’il n’est pas…), le gendarme Paterne commence son enquête de terrain, tandis que les boums-boums continuent au loin et que la gendarmette pose mille questions à celui que son chef appelle « ce gros bêta de Bernard ». 
Guidé par un flair un peu hésitant, l’officier s’avance seul en direction du champ, au milieu duquel errent quelques dizaines de cochons, le groin au sol, à la recherche de quelque chose à avaler.
Le grand champ se finit dans un sous-bois et très vite, Paterne découvre un élément qui pourrait bien faire avancer significativement son enquête !
Le vieil enclos a été poussé et a cédé : il y a un trou par laquelle un cochon pourrait facilement passer.
Très concentré, il prend son talkie-walkie et prévient sa partenaire de l’avancée de l’enquête, alors qu’elle était en train de regarder avec un grand étonnement des porcelets qui dodelinaient de la tête au rythme du boum-boum lointain.
Paterne regarde ses bottes en cuir réglementaires, qu’il a cirées avec application le matin même. Dès les premiers mètres parcourus sur le chemin qui commence au fond du champ, elles se retrouvent couvertes de boue. Il a beaucoup plu la veille et chaque pas fait des vrouic-vrouic évoquant le bruit d’une ventouse. 
Il progresse néanmoins peu à peu sur ce passage bucolique, sous une voûte arborée, qui mène au champ occupé par le festival électro. Le cœur de Paterne bat bien fort. Il sait qu’il est sur la bonne piste parce qu’au sol il y a des traces de pattes de cochons. Il va bientôt tomber sur les kidnappeurs !
Un grouïck ! venant de la forêt le fait sursauter. Il vacille un peu sur ses jambes et tourne la tête vers la droite. Il aperçoit alors un sanglier qui s’enfuit. Ce n’est pas le type de cochon qu’il recherche. Mais quel suspense ! 
Il avance et avance encore jusqu’au hangar au bout du chemin. Le boum-boum assourdissant le dérange. Il est aux aguets et prudent, pose la main sur son arme de service encore dans son fourreau. 
Il croit défaillir lorsque le boum-boum s’arrête une poignée de secondes. Quelqu’un prend la parole au micro. S’ensuivent des cris qui pourraient bien être ceux de cochons qu’on effraie ! 
Il continue doucement pour ne pas se faire repérer, mais ses souliers font toujours vrouic-vrouic à cause de cette boue collante.
Alors qu’il arrive tout près du hangar, son petit cœur de gendarme bat bien fort dans sa cage thoracique. Va-t-il tomber sur des tueurs de cochons qui se seraient servis dans l’exploitation de son ami ?
Avec précaution, il entrouvre la porte arrière du hangar et là, il a une sacrée surprise ! 
C’est l’endroit que les jeunes danseurs ont choisi pour regrouper les ordures. Trois cochons sont en train d’éventrer et de dévorer goulûment le contenu des poubelles ! 
Le gendarme demande à un garçon appuyé à l’encadrement de la porte principale ce que ces bêtes font là… Apparemment épuisé d’avoir trop dansé et trop peu dormi, ce dernier lui répond mollement « qu’ils devaient tout simplement avoir envie d’un peu de liberté » ! Et que « la vie devrait être plus cool pour ces pauvres bêtes » ! 
Sur le seuil de la grange, le jeune homme continue à fixer avec nonchalance le champ d’où vient tout le raffut. 
Intrigué, et toujours pas satisfait du dénouement de son enquête puisqu’il n’a retrouvé que trois cochons sur dix, Paterne rejoint le gaillard un peu déjanté. De nouveau, il croit défaillir. 
Sept cochons, à qui on a mis des casques de musique, se balancent au rythme du boum-boum émis par les gigantesques enceintes ! Les danseurs démarrent une sorte de « chenille » géante en se tenant tous par la taille. Et les cochons, de manière inattendue, se positionnent l’un derrière l’autre, les pattes avant sur le dos de celui qui les précède. Le gendarme n’en croit pas ses yeux ! En équilibre instable, ils se dandinent et remuent la tête au rythme du boum-boum…
Est-il devenu fou ? Ce qu’il voit est-il une hallucination ? Ces cochons sont-ils des mutants ? 
Paterne, sur le point de tomber dans les pommes, réalise néanmoins que son enquête est bouclée ! Il saisit son talkie-walkie et raconte le surprenant spectacle à sa collègue. Myrtille lui demande ce que les membres disparus du troupeau font sur la piste de danse. Il lui répond le ton las et avec des yeux fatigués qu’ils « devaient tout simplement avoir envie d’un peu de liberté ! » Et que « la vie devrait être plus cool pour ces bêtes ! » 
La gendarmette n’en croit pas ses oreilles ! Elle cherche à comprendre ce que ses propos signifient, mais son collègue ne répond plus. Il s’est évanoui. C’était trop d’émotions pour lui.
Elle avertit Bernard qui, rassuré qu’on ait retrouvé ses bêtes, pousse un ouf de soulagement ! Puis il décide qu’il faut aller les chercher et qu’ils ne seront pas trop de trois pour les ramener à bon port. Il indique à Myrtille le chemin boueux. Cela réjouit peu la gendarmette… elle a ciré ses bottes le matin même ! 
Mais il lui faut impérativement rejoindre son collègue qui ne répond plus au talkie-walkie. Alors elle avance avec l’agriculteur, très déterminée à retrouver ses cochons fugueurs.
Le temps d’arriver, la musique s’est arrêtée. 
Bernard et Myrtille voient venir à leur rencontre les dix cochons sur le chemin du retour, le gendarme Paterne, à moitié inconscient, à plat ventre sur le dos de l’un d’eux. Les cochons « électro », pour leur part, semblent heureux de retrouver leur enclos, après avoir passé un très bon moment de transe musicale...")
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
})
