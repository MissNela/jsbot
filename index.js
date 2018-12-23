const commando = require('discord.js-commando');
const discord = require('discord.js')
const bot = new commando.Client();

bot.registry.registerGroup('info', 'info');
bot.registry.registerGroup('fun', 'fun');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname  + "/commands");

bot.on('ready', () => {
    console.log("Turning On Bot")
    bot.user.setActivity("prefix !", {type: 1});
});

bot.login('NTI1MDg4NjAzOTc0NjY0MTky.Dvxieg.3W8n4GZ64hc-oGE_0cfLvTVvnOU');