const discord = require("discord.js");

const clientDiscord = new discord.Client();
const PREFIX = "-";

//Connexion
ClientDiscord.login(process.env.TOKEN);
