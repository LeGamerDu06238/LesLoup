const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("LesLoup, <help");
    console.log("Le bot a bien ete connecte");
    
bot.on("message"), function (message);
    if_(message.content === "<ping");
        message.channel.send("pong")
    }
})

bot.login("NDY4MDcxNjg4NjY4NDQ2NzQw.Diz1Qg.82Sw_tI05Y9ZeZmiLd-I29SamfQ");
