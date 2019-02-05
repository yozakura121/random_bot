require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('準備完了');
});

client.on('message', message => {
    if (message.author.bot) {
        return;
    }
    if (message.content === "サイコロ") {
        var min = 1;
        var max = 6;

        var a = Math.floor(Math.random() * (max + 1 - min)) + min;
        let channel = message.channel;
        let author = message.author.channel;
        let reply_text = a;

        message.reply(reply_text)
            .then(message => console.log(`ok:${reply_text}`))
            .catch(console.error);
        return;
    }
});

client.login(token);