const discord = require("discord.js");

const clientDiscord = new discord.Client();
const PREFIX = "-";

//Connexion
clientDiscord.login(process.env.TOKEN);
