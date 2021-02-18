// Fancy Logo

console.log(" ");
console.log(" ");
console.log("                ██████╗ ██╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗             ██████╗  ██████╗ ████████╗ ");
console.log("                ██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗            ██╔══██╗██╔═══██╗╚══██╔══╝ ");
console.log("                ██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║            ██████╔╝██║   ██║   ██║  ");
console.log("                ██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║            ██╔══██╗██║   ██║   ██║");
console.log("                ██║  ██║██║╚════██║██║     ██║   ██║██╔══██╗██║  ██║            ██████╔╝╚██████╔╝   ██║");
console.log("                ██████╔╝██║███████║╚██████╗╚██████╔╝██║  ██║██████╔╝            ╚═════╝  ╚═════╝    ╚═╝");
console.log(" ");
console.log(" ");
console.log("                 ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ███████╗");
console.log("                ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██╔════╝");
console.log("                ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ███████╗");
console.log("                ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ╚════██║");
console.log("                ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████║");
console.log("                 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝");
console.log(" ");
console.log(" ");


const fs = require("fs");
FFMPEG = require('ffmpeg');
const ms = require("ms");
const weather = require('weather-js')
const Discord = require("discord.js");
const client = new Discord.Client();
const active = new Map();
const ytdl = require('ytdl-core');
const search = require('yt-search');
const configs = require("./configs.json");
const timestamp = require("console-timestamp");
var botConfigs = {
    token: "NzUwMDE4NDIwODIwNjcyNjQz.X00bFg.b91W9ROFc71A6CnmiGXAvb_QGFA",
    prefix: "+",
    gameStatus: "With Tridents | Prefix: +",
    statusType: "Playing",
    commands: [
    {
        "id": 1,
        "command": "version",
        "message": "",
        "embed": true,
        "embedFields": [
            {
                "title": "Bot Version;",
                "text": "1.0.4.5"
            },
            {
                "title": "Made by A Games",
                "text": "(The best user around)"
            }
        ]
    },
	// {
	// "id": 2,
	// "command": "employees1",
	// "message": "",
	// "embed": true,
	// "embedFields": [
	// {
	// "title": "CEO -",
	// "text": "Patty_Mayo//A Games & GoldenRocks//Jayden04026"
	// },
	// {
	// "title": "Co Founder -",
	// "text": "ImSimmm"
	// },
	// {
	// "title": "Vice President -",
	// "text": "Pinkat23"
	// },
	// {
	// "title": "Senior Financial Manager - ",
	// "text": "N/A"
	// },
	// {
	// "title": "Financial Manager -",
	// "text": "N/A"
	// },
	// ]
	// },
	// {
	// "id": 3,
	// "command": "employees2",
	// "message": "",
	// "embed": true,
	// "embedFields": [
	// {
	// "title": "Senior Realtor",
	// "text": "N/A"
	// },
	// {
	// "title": "Realtors -",
	// "text": "N/A"
	// },
	// {
	// "title": "Junior Realtors -",
	// "text": "N/A"
	// },
	// {
	// "title": "Office Staff -",
	// "text": "SweetKeat"
	// }
	// ]
	// }
],
    plugins: [
    {
        "id": 1,
        "name": "Welcome message - Auto Message sent in the join message channel",
        "activated": true,
        "config": "welcomemessage",
        "info": {
            "example": "",
            "note": "",
            "requirements": "Create a channel"
        }
    },
    {
        "id": 4,
        "name": "Report user: +report (@user) (reason) - EX: +report @mee6 spammed in #channelname - (STAFF ONLY)",
        "activated": true,
        "config": "",
        "info": {
            "example": "!report @user spam",
            "note": "",
            "requirements": "Create a bot-logging channel"
        }
    },
    {
        "id": 6,
        "name": "Server info: +serverinfo - displays some info about this discord server",
        "activated": true,
        "config": "",
        "info": {
            "example": "!serverinfo",
            "note": "",
            "requirements": ""
        }
    },
    {
        "id": 7,
        "name": "Weather info - DISABLED",
        "activated": false,
        "config": "weather",
        "info": {
            "example": "!weather Copenhagen",
            "note": "",
            "requirements": ""
        }
    },
    {
        "id": 8,
        "name": "Music - Export only",
        "activated": true,
        "config": "",
        "info": {
            "example": "!play {YouTube URL}, !leave, !pause, !resume, !queue, !skip",
            "note": "Export only",
            "requirements": ""
        }
    },
    {
        "id": 10,
        "name": "skip: +skip - Skip to the next song that is in the music queue",
        "activated": true,
        "config": "",
        "info": {
            "example": "+skip",
            "note": "",
            "requirements": ""
        }
    },
    {
        "id": 12,
        "name": "Ticket system - +ticket reason for opening ticket",
        "activated": true,
        "config": "ticketSystem",
        "info": {
            "example": "!ticket I cant find Bob",
            "note": "",
            "requirements": "You need a channel to create tickets called: create-ticket, support or something like that."
        }
    },
    {
        "id": 14,
        "name": "Dice: +dice - it will reply with a number from 1 to 6",
        "activated": true,
        "config": "",
        "info": {
            "example": "!dice",
            "note": "Will return a random number between 1 and 6",
            "requirements": ""
        }
    },
    {
        "id": 16,
        "name": "Help: +help ",
        "activated": true,
        "config": "",
        "info": {
            "example": "!help",
            "note": "",
            "requirements": ""
        }
    },
    {
        "id": 17,
        "name": "Coin Flip: +flip - Flip a coin, it will either land on: Heads, Tails, or No Way! It landed on the side",
        "activated": true,
        "config": "",
        "info": {
            "example": "!flip",
            "note": "",
            "requirements": ""
        }
    },
    {
        "id": 20,
        "name": "big: +big - Same thing as +dice, but rolls a number that is a lot larger",
        "activated": true,
        "config": "",
        "info": {
            "example": "+big",
            "note": "Rolls a number, then replies with a large number that is randomly chosen.",
            "requirements": ""
        }
    },
    {
        "id": 21,
        "name": "play: +play {Music Link from YouTube} - You must be connected to the music voice chat to play songs.",
        "activated": true,
        "config": "",
        "info": {
            "example": "+play {Song URL from YouTube}",
            "note": "Play the song that you requested.",
            "requirements": ""
        }
    },
    {
        "id": 22,
        "name": "pause: +pause - pause the current song that is playing",
        "activated": true,
        "config": "",
        "info": {
            "example": "+pause",
            "note": "Pause the current song that is playing.",
            "requirements": ""
        }
    },
    {
        "id": 23,
        "name": "Create a ticket: +ticket (reason for ticket) - Must be in the Support channel to run this command",
        "activated": true,
        "config": "",
        "info": {
            "example": "+pause",
            "note": "Pause the current song that is playing.",
            "requirements": ""
        }
    },
    {
        "id": 24,
        "name": "Close a ticket: +close ticket - closes the support ticket that the staff member runs the command in. (STAFF ONLY)",
        "activated": true,
        "config": "",
        "info": {
            "example": "+pause",
            "note": "Pause the current song that is playing.",
            "requirements": ""
        }
    },
    {
        "id": 25,
        "name": "lottery: +lottery - responds with a fake winning lottery ticket number",
        "activated": true,
        "config": "",
        "info": {
            "example": "+lottery",
            "note": "Fake Lottery Ticket winning number thing.",
            "requirements": ""
        }
    },
    {
        "id": 26,
        "name": "low: +low - get a low number",
        "activated": true,
        "config": "",
        "info": {
            "example": "+lottery",
            "note": "Fake Lottery Ticket winning number thing.",
            "requirements": ""
        }
    },
    {
        "id": 27,
        "name": "small: +small - get a small number that is a little bigger than you would get for +low",
        "activated": true,
        "config": "",
        "info": {
            "example": "small: +small - get a small number that is a little bigger than you would get for +low",
            "note": "Fake Lottery Ticket winning number thing.",
            "requirements": ""
        }
    },
    {
        "id": 28,
        "name": "medium: +medium - get a medium sized number that is bigger than +low and +small and +dice, but smaller than +lottery and +big",
        "activated": true,
        "config": "",
        "info": {
            "example": "small: +small - get a small number that is a little bigger than you would get for +low",
            "note": "Fake Lottery Ticket winning number thing.",
            "requirements": ""
        }
    },
    {
        "id": 30,
        "name": "shoot: +shoot - spams the channel you are in, DISABLED TIL FURTHER NOTICE",
        "activated": false,
        "config": "",
        "info": {
            "example": "small: +small - get a small number that is a little bigger than you would get for +low",
            "note": "Fake Lottery Ticket winning number thing.",
            "requirements": ""
        }
    },
    {
        "id": 31,
        "name": "stopshooting: +stopshooting - stop spamming the channel you sent +shoot in - DISABLED TIL FURTHER NOTICE",
        "activated": false,
        "config": "",
        "info": {
            "example": "small: +small - get a small number that is a little bigger than you would get for +low",
            "note": "Fake Lottery Ticket winning number thing.",
            "requirements": ""
        }
    },
    {
        "id": 32,
        "name": "+hitler - Get Images of Hitler",
        "activated": true,
        "config": "",
        "info": {
            "example": "small: +small - get a small number that is a little bigger than you would get for +low",
            "note": "Fake Lottery Ticket winning number thing.",
            "requirements": ""
        }
    },      
],
    welcomemessage: {
    "channelid": "731119132111667260",
    "text": "Welcome to Fleetari Doug's Discord Server! Please make sure to read the rules before getting started!"
},
    weather: {
    "degree": "F"
},
    autorole: {
    "guildID": "",
    "autoroleID": ""
},
    ticketsystem: {
    "ticketCategoryID": "753344607487525016",
    "createTicketChannelID": "753344716610863215"
},
    gif: "BOT_GIF"
};

console.log("|  Loading Scripts ");

var ops = {
    active: active
}

client.on("ready", async function() {
    if (botConfigs.statusType === "PLAYING" || botConfigs.statusType === "WATCHING" || botConfigs.statusType === "LISTENING") {
        client.user.setActivity(botConfigs.gameStatus, { type: botConfigs.statusType });
    } else {
        client.user.setActivity(botConfigs.gameStatus, { type: "PLAYING" });
    }
});

client.on('guildMemberAdd', member => {
   member.send("Welcome to Fleetari Doug's Discord Server! If you want to add this bot to your server, Feel Free to ask questions in the General Chat channel for help!");
});

client.on("guildCreate", async function() {
    if (botConfigs.statusType === "PLAYING" || botConfigs.statusType === "WATCHING" || botConfigs.statusType === "LISTENING") {
        client.user.setActivity(botConfigs.gameStatus, { type: botConfigs.statusType });
    } else {
        client.user.setActivity(botConfigs.gameStatus, { type: "PLAYING" });
    }
});

client.on("guildDelete", async function(guild) {
    if (botConfigs.statusType === "PLAYING" || botConfigs.statusType === "WATCHING" || botConfigs.statusType === "LISTENING") {
        client.user.setActivity(botConfigs.gameStatus, { type: botConfigs.statusType });
    } else {
        client.user.setActivity(botConfigs.gameStatus, { type: "PLAYING" });
    }
});

client.on("guildMemberAdd", async function(member) {
    if (botConfigs.plugins[1].activated == true) {
        member.guild.channels
            .get(botConfigs.welcomemessage.channelid)
            .send(`${member}, ${botConfigs.welcomemessage.text}`);
    }
});

client.on('guildMemberAdd', async function (member) {
    if (botConfigs.plugins[19].activated == true) {
        
       if (member.guild.id == botConfigs.autorole.guildID) {
         member.addRole(botConfigs.autorole.autoroleID);
      }
    }
});


client.on("message", async function (message) {
    if (botConfigs.plugins[11].activated == true) {
        //if (botConfigs.bannedwords.channelid.length > 0) {
            configs.bannedWords.forEach(async function (element) {
                let msg = message.content.toLowerCase();
                if (msg.includes(element)) {
                    message.delete().catch(O_o => { });
                    let projectData = await botConfigs;
                    let Dmchannel = client.users.get(message.author.id);
                        if (!Dmchannel) {
                            return;
                        }
                    
                    Dmchannel.send(projectData.bannedwords.responseMessage);
                    let pjc = projectData.bannedwords.channelid;

                    if (pjc == "" || pjc == null || pjc == undefined) {
                        return;
                    }
                    if (botConfigs.bannedwords.channelid.length > 10) {
                   let CH = client.channels.get(pjc).catch(O => {})
                        let embed = new Discord.RichEmbed()
                        .setDescription("~Banned word~")
                        .setColor("#e56b00")
                        .addField("Message: ", `${msg}`)
                        .addField("Send By", `<@${message.author.id}> with ID ${message.author.id}`)
                        .addField("Sent In", message.channel)
                        .addField("Time", message.createdAt);
                         CH.send(embed);
                }
            }
        })
    }

    let prefix = botConfigs.prefix;

    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "purge" && botConfigs.plugins[0].activated == true) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission!");
        const deleteCount = parseInt(args[0], 10);

        let embed = new Discord.RichEmbed()
            .setDescription("~Purge~")
            .setColor("#e56b00")
            .addField("Messages: ", `${deleteCount}`)
            .addField("Purged By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Purged In", message.channel)
            .addField("Time", message.createdAt);

        //let channel = message.guild.channels.find(`name`, "logs");
        let channel = message.guild.channels.find(ch => ch.name === 'changes');
        if (!channel) {
            message.channel.send("Can't find a 'changes' channel.");
            return;
        }

        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            message.channel.send("Example: " + prefix + "purge 10");
            message.channel.send("Please enter a number between 2 and 100");
            return;
        }

        const fetched = await message.channel.fetchMessages({ limit: deleteCount });
        channel.send(embed);
        message.channel
            .bulkDelete(fetched)
            .catch(error => message.reply("Error. Contact an administrator."));
    }
if (command === "shoot" && botConfigs.plugins[30].activated == true) {
    for (var i = 0; i < 10; i++) {
        message.channel.send("Bullet");
    }
}
  if (command === "stopshooting" && botConfigs.plugins[30].activated == true){
    for (var i = 1; i <= 100; i++) {
      message.channel.send("stop shooting");
    }
    return;
  }


  
    if (command === "kick" && botConfigs.plugins[2].activated == true) {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!bUser) return message.channel.send("Can't find user!");
        let bReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permission!");
        if (bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked")


        let banEmbed = new Discord.RichEmbed()
            .setDescription("~Kick~")
            .setColor("#bc0000")
            .addField("Kicked User", `${bUser} with ID ${bUser.id}`)
            .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Kicked In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", bReason);

        //let incidentchannel = message.guild.channels.find(`name`, "bot-logging");
        let channel = message.guild.channels.find(ch => ch.name === 'changes');
        if (!channel) {
            message.channel.send("Can't find a 'changes' channel.");
            return;
        }

        message.guild.member(bUser).kick(bReason);
        channel.send(banEmbed);
    }
	
    if(command === 'temprole' && botConfigs.plugins[21].activated == true) {
    
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('You do not have required permission');
    
    if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_ROLES')) return message.reply("I don't have `MANAGE ROLES` Permission")
    
    if(!args[0]) return message.reply('You should spcefic [User] [Role] [Time]');
    
    let user = message.mentions.members.first() || message.guild.members.get(args[0]);
    
    if(!user) return  message.reply('You Should Mention User or User ID');
    
    let role = message.mentions.roles.first() || message.guild.roles.get(args[1]);
    
    if(!role) return message.reply('You Should Mention Role or Role ID');
    
    if(user.roles.has(role.id)) return message.reply(`This User ${user.user.tag} Already Have \`${role.name}\` Role`)
    
    let time = ms(args[2]);
    
    if(!time) return message.reply('Spcefic Time');
    
    let channel = message.guild.channels.find(ch => ch.name === 'changes');
    
    if(!channel) return message.reply("Can't find a **`changes`** channel.");
    
    try {
      await user.addRole(role.id);
      channel.send(
        new Discord.RichEmbed()
          .setTitle("~ Temporary Role Added ~")
          .setColor(0x00e676)
          .addField('Added By?', message.author.tag + `(${message.member})`)
          .addField('Role', role)
          .addField('Added To?', user.user.tag + (`${user.user}`))
          .addField('Duration', ms(time))
          .setThumbnail(user.user.displayAvatarURL)
      ).then(() => {
        message.reply(`Role **\`${role.name}\`** Added To ${user.user.tag}(${user.user}) For ${ms(time)}`).then(m => {
          m.delete(5000)
        })
      });
    } catch(e) {
      message.reply(`Unexpected Error: ${e.message}`);
    }
    
    setTimeout(async () => {
      if(!user.roles.has(role.id)) return;
        await user.removeRole(role.id);
        channel.send(
          new Discord.RichEmbed()
          .setTitle("~ Role Removed ~")
          .setColor(0xff5252)
          .addField('Removed By?', client.user + ' (Bot)')
          .addField('Role', role)
          .addField('Removed From?', user.user.tag + (`${user.user}`))
          .addField('Reason', "Time's up")
          .setThumbnail(user.user.displayAvatarURL)
        )
    }, time)
    
  }
	
    if (command === "tempban" && botConfigs.plugins[3].activated == true) {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!bUser) return message.channel.send("Can't find user!");
        let bReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission!");
        if (bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned")


        let banEmbed = new Discord.RichEmbed()
            .setDescription("~Ban~")
            .setColor("#bc0000")
            .addField("Banned User", `${bUser}`)
            .addField("Banned By", `<@${message.author.id}>`)
            .addField("Banned In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", bReason);

        //let incidentchannel = message.guild.channels.find(`name`, "bot-logging");
        let channel = message.guild.channels.find(ch => ch.name === 'changes');
        if (!channel) {
            message.channel.send("Can't find a 'changes' channel.");
            return;
        }

        message.guild.member(bUser).ban(bReason);
        channel.send(banEmbed);
    }

    if (command === "report" && botConfigs.plugins[4].activated == true) {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Couldn't find user.");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
            .setDescription("Reports")
            .setColor("#15f153")
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Channel", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", reason);

        let channel = message.guild.channels.find(ch => ch.name === 'changes');
        if (!channel) {
            message.channel.send("Can't find a 'changes' channel.");
            return;
        }

        message.delete().catch(O_o => {});
        channel.send(reportEmbed);
    }

    if (command === "tempmute" && botConfigs.plugins[5].activated == true) {
        let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!tomute) return message.reply("Could't find user.");
        if (tomute.hasPermission("ADMINISTRATOR")) return message.reply("He's an administrator. You can't do that!");
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You don't have permission");

        let muterole = message.guild.roles.find(`name`, "muted");
        let muteEmbed = new Discord.RichEmbed()
            .setDescription("~MUTED~")
            .setColor("#e56b00")
            .addField("Muted User", `${tomute}`)
            .addField("Muted By", `<@${message.author.id}>`)
            .addField("Muted In", message.channel)
            .addField("Time", message.createdAt)
            //.addField("Duration", message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)}`))

        let channel = message.guild.channels.find(ch => ch.name === 'changes');
        if (!channel) {
            message.channel.send("Can't find a 'changes' channel.");
            return;
        }
        channel.send(muteEmbed);
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: "#000000"
                })
                message.guild.channels.forEach(async(channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SPEAK: false
                    })
                })
            } catch (e) {
                console.log(e.stack);
            }
        }


        let mutetime = args[1];
        if (!mutetime) return message.reply("You didn't specify a time!");

        await (tomute.addRole(muterole.id));
        message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)}`)

        setTimeout(function() {
            tomute.removeRole(muterole.id);
            message.channel.send(`<@${tomute.id}> has been unmuted!`)

        }, ms(mutetime));

    }

    if (command === "serverinfo" && botConfigs.plugins[6].activated == true) {
        let sicon = message.guild.iconURL;
        let sererembed = new Discord.RichEmbed()
            .setDescription("Server Information")
            .setColor("#15f153")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created On", message.guild.createdAt)
            .addField("You Joined", message.member.joinedAt)
            .addField("Total Members", message.guild.memberCount);

        return message.channel.send(sererembed);
    }
  if (command === "no"){
message.channel.send("Fleetari you are are rule breaker")
}
  if (command === "banfleetari"){
message.channel.send("Fleetari you are banned from the Performium Network!")
}

    if (command === "weather" && botConfigs.plugins[7].activated == true) {
        weather.find({ search: args.join(" "), degreeType: botConfigs.weather.degree }, function(err, result) {
            if (err) message.channel.send(err);

            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**')
                return;
            }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', location.degreetype, true)
                .addField('Temperature', `${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds', current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send({ embed });
        });
    }

    if (command === "lockdown" && botConfigs.plugins[9].activated == true) {
        let time = args[0];

        if (!client.lockit) { client.lockit = []; }
        let validUnlocks = ["release", "unlock", "u"];
        if (!time) { return message.reply("I need a set time to lock the channel down for!"); }

        const Lockembed = new Discord.RichEmbed()
            .setColor(0xDD2E44)
            .setTimestamp()
            .setTitle("ðŸ”’ LOCKDOWN NOTICE ðŸ”’")
            .setDescription(`This channel has been lockdown by ${message.author.tag} for ${time}`);

        const Unlockembed = new Discord.RichEmbed()
            .setColor(0xDD2E44)
            .setTimestamp()
            .setTitle("ðŸ”“ LOCKDOWN NOTICE ðŸ”“")
            .setDescription("This channel is now unlocked.");

        if (message.channel.permissionsFor(message.author.id).has("MUTE_MEMBERS") === false) {
            const embed = new Discord.RichEmbed()
                .setColor(0xDD2E44)
                .setTimestamp()
                .setTitle("âŒ ERROR: MISSING PERMISSIONS! âŒ")
                .setDescription("You do not have the correct permissions for this command!");
            return message.channel.send({ embed });
        }

        if (validUnlocks.includes(time)) {
            message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null }).then(() => {
                message.channel.send({ embed: Unlockembed });
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            }).catch(error => { console.log(error); });
        } else {
            message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false }).then(() => {
                message.channel.send({ embed: Lockembed }).then(() => {
                    client.lockit[message.channel.id] = setTimeout(() => {
                        message.channel.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: null
                        }).then(message.channel.send({ embed: Unlockembed })).catch(console.error);
                        delete client.lockit[message.channel.id];
                    }, ms(time));
                }).catch(error => { console.log(error); });
            });
        }
    }

    if (command === "ping") {
        const msg = await message.channel.send("Pinging...");
        await msg.edit(`Pong! (Took: ${msg.createdTimestamp - message.createdTimestamp}ms.)`);
    }

    // if (command === "shutdown" && botConfigs.plugins[10].activated == false) {
    //     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission!");
    //     await message.channel.send(`Good night, ${message.author.tag}!`);
    //     await message.delete().catch();
    //     await process.exit().catch((e) => { console.error(e); });
    // }

    if (command === "ticket" && botConfigs.plugins[12].activated == true) {
        if (botConfigs.ticketsystem.createTicketChannelID == "" || botConfigs.ticketsystem.createTicketChannelID == null || botConfigs.ticketsystem.createTicketChannelID == undefined || botConfigs.ticketsystem.ticketCategoryID == "" || botConfigs.ticketsystem.ticketCategoryID == null || botConfigs.ticketsystem.ticketCategoryID == undefined) return message.channel.send("The ticket system is not working - Please run the config").catch(console.error);
        if (message.channel.id === botConfigs.ticketsystem.createTicketChannelID) {
            if (message.guild.channels.some(ch => ch.name === message.author.id)) {
                message.author.send("You already have a open ticket.\n\nIf you wanna close the ticket: \nGo to the ticket channel, and type: " + prefix + "close ticket \n\nBest regards\n" + message.guild.name);
                message.delete().catch(O_o => {});
                return;
            }

            if (!args[0]) return message.channel.send("Please enter a subject - Example: " + prefix + "ticket I need support").catch(console.error);

            let subject = message.content.split(' ').splice(1).join(' ');
            if (subject.length > 20) return message.channel.send("Subject max length: 20 characters").catch(console.error);
            message.guild.createChannel(message.author.id, 'text').then(async m => {
                await m.setParent(botConfigs.ticketsystem.ticketCategoryID);
                await m.overwritePermissions(message.guild.id, {
                    VIEW_CHANNEL: false
                });

                m.overwritePermissions(message.author.id, {
                    VIEW_CHANNEL: true
                });
                m.send("Subject: " + subject);
            });
            message.author.send("Ticket created! We appreciate you contacting us. One of our staff members will get back to you shortly. \n\nBest regards\n" + message.guild.name);
            message.delete().catch(O_o => {});
        } else {
            let channel = await client.channels.find(ch => ch.id === botConfigs.ticketsystem.createTicketChannelID);
            return message.channel.send("Please go to: <#" + channel.id + ">").catch(console.error);
        }
    }
    
        

      if (command === "dice" && botConfigs.plugins[14].activated == true) {
          message.channel.send(`<@${message.author.id}> The dice landed on **${Math.floor(Math.random() * 6) + 1}**`)
        }
      if (command === "small" && botConfigs.plugins[14].activated == true) {
          message.channel.send(`<@${message.author.id}> The small number is: **${Math.floor(Math.random() * 10) + 1}**`)
        }
      if (command === "low" && botConfigs.plugins[14].activated == true) {
          message.channel.send(`<@${message.author.id}> The low number is: **${Math.floor(Math.random() * 6) + 1}, and you just got pranked**`)
        }
      if (command === "medium" && botConfigs.plugins[14].activated == true) {
          message.channel.send(`<@${message.author.id}> The medium number is: **${Math.floor(Math.random() * 250000) + 1}**`)
        }
      if (command === "big" && botConfigs.plugins[14].activated == true) {
          message.channel.send(`<@${message.author.id}> The big number is: **${Math.floor(Math.random() * 5000000) + 1}**`)
        }
      if (command === "lottery" && botConfigs.plugins[14].activated == true) {
          message.channel.send(`<@${message.author.id}> The winning number is: **${Math.floor(Math.random() * 100000000000) + 1}**`)
        }
        //plugin 15: Warn warn plugin
        if (command === "warn" && botConfigs.plugins[15].activated == true) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission!");
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!rUser) return message.channel.send("Provide a valid Ping or user id");
            let repCH = message;
            let reason = args.join(" ").slice(22);
            
            let reportEmbed = new Discord.RichEmbed()
                .setTitle("Warnings")
                .setColor("#15f153")
                .addField("Warned User", `${rUser}`)
                .addField("Warned By", `${message.author}`)
                .addField("In channel", repCH.channel)
                .addField("Reason", reason)
    
            let channel = message.guild.channels.find(ch => ch.name === 'changes');

            if (!channel) {
                message.channel.send("Can't find a 'changes' channel.");
                return;
            }
        
    
            message.delete().catch(O_o => { });
            channel.send(reportEmbed);
        }
  if(command === "unmute") {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let logchannel = message.guild.channels.find('name', 'changes');
    let role = message.guild.roles.find('name', 'muted')
    //CHANGE THIS ^^
    
    if (!logchannel) return message.reply('I cannot find a changes channel');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('**Error:** You do not have the right permissions!');
                  if (reason.length < 0) return message.reply('You must supply a reason for the unmute.');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
    //if (!message.guild.member(user).roles.has(role)) return message.reply('I cannot unmute that member');
    message.guild.member(user).removeRole(role);
    const embed = new Discord.RichEmbed()
    .setColor("0xFF0000")
    .setTimestamp()
    .addField('Action:', 'Unmute')
    .addField('User:', `${user.tag})`)
    .addField('Moderator:', `${message.author.tag}`)
    .addField('Reason', reason);
    message.channel.send('**UNMUTED**! I have logged the unmute in the logs channel.')
    return logchannel.send(embed);
  };
  if (command === "help" && botConfigs.plugins[16].activated == true) {
    let helpACT = [];
    let helpNACT = [];            
    let Nplugin = "";
    let plugin = "";
    
    botConfigs.plugins.forEach(element => {
      if (element.activated == true) {
        helpACT.push("✅" + element.name)
        plugin = helpACT.join('\n').toString();
      } else if (element.activated == false) {
        helpNACT.push("❌" + element.name)
        Nplugin = helpNACT.join('\n').toString();
              } 
            });
             notActive(Nplugin);
            function notActive(Nplugin) {
                let NhelpEmbed = new Discord.RichEmbed()
                .setTitle("Help")
                .setColor("GRAY")
                .setDescription(Nplugin)
				if (!Nplugin) return;
                message.channel.send(NhelpEmbed)
            }
                Active(plugin)
                function Active(plugin) {
                    let helpEmbed = new Discord.RichEmbed()
                    .setTitle("Help")
                    .setColor("GRAY")
                    .setDescription(plugin)
                    message.channel.send(helpEmbed)
          }
    }
        if (command === "shelp" && botConfigs.plugins[16].activated == true) {
        //  message.channel.send('```List of Staff Commands: **Dyno Staff Commands**: ?warn [@user] [reason] ?mute [@user] [time] [reason] ?kick [@user] [reason] ?ban [@user] [limit] [reason] ?delwarn [@user] [warn ID] ?softban [@user] [reason]','?warnings [@user] ?modlogs [@user] ?purge [Number of Messages] [@user] ?reason [case number] [reason] ?duration [case number] [new duration] ?modstats [@Staff Name]``` ')
          message.channel.send('> **Dyno Staff Commands**: ')
         message.channel.send('?warn [@user] [reason] - Example: ?warn @mee6 broke rule 1')
         message.channel.send('?mute [@user] [time] [reason] - Example: ?mute @mee6 1d spam')
          message.channel.send('?kick [@user] [reason] - Example: ?kick @mee6 spam')
          message.channel.send('?ban [@user] [limit] [reason] - Example: ?ban @mee6 1d nsfw content, or ?ban @mee6 nsfw content (PROVIDE NO REASON FOR A PERM BAN!)')
          message.channel.send('?delwarn [@user] [warn ID] - Example: ?delwarn @mee6 5')
          message.channel.send('?softban [@user] [reason] - Example: ?softban @mee6 spam')
          message.channel.send('?warnings [@user] - Example: ?warnings @mee6')
          message.channel.send('?modlogs [@user] - Example: ?modlogs @mee6')
          message.channel.send('?purge [Number of Messages] [@user] - Example: ?purge 6 @mee6')
          message.channel.send('?reason [case number] [reason] - Example: ?reason 8 nsfw content')
          message.channel.send('?duration')
          message.channel.send('?modstats [@Staff Name] - Example: ?modstats @Dyno')
          message.channel.send('> **Wolfenstein Staff Commands**:')
          message.channel.send('+warn [@user] [reason] - Example: +warn @mee6 spam')
          message.channel.send('+tempmute [@user] [time limit] [reason] - Example: +tempmute @mee6 2h spam')
          message.channel.send('+ban [@user] [reason] - Example: +ban @mee6 broke too many rules')
          message.channel.send('+purge [amount of messages] - Example: +purge 50 - **current limit: 2 - 100, working on increasing the limit**')
          message.channel.send('+kick [@user] [reason] - Example: +kick @mee6 change your name')
          message.channel.send('+announce [#channel_name] [Color: 6-digit hex code] [title - 1 word title] [message] - Example: +announce #bots #088bf0 welcome welcome to the server')
          message.channel.send('+close ticket')
          message.channel.send('+lockdown [time] - Example: +lockdown 2h')
          message.channel.send('+unmute [@user] [reason] - **CURRENTLY BEING WORKED ON**')
          message.channel.send('> **Mee6 Staff Commands**:')
          message.channel.send('!kick [@user] [reason] - Example: !kick @mee6 spam')
          message.channel.send('')
          
//             let helpACT = [];
//             let helpNACT = [];            
//             let Nplugin = "";
//             let plugin = "";

//             botConfigs.plugins.forEach(element => {
//                 if (element.activated == true) {
//                     helpACT.push("✅" + element.name)
//                     plugin = helpACT.join('\n').toString();
//                 } else if (element.activated == false) {
//                     helpNACT.push("❌" + element.name)
//                     Nplugin = helpNACT.join('\n').toString();
//               } 
//             });
//              notActive(Nplugin);
//             function notActive(Nplugin) {
//                 let NhelpEmbed = new Discord.RichEmbed()
//                 .setTitle("Help")
//                 .setColor("GRAY")
//                 .setDescription(Nplugin)
// 				if (!Nplugin) return;
//                 message.channel.send(NhelpEmbed)
//             }
//                 Active(plugin)
//                 function Active(plugin) {
//                     let helpEmbed = new Discord.RichEmbed()
//                     .setTitle("Help")
//                     .setColor("GRAY")
//                     .setDescription(plugin)
//                     message.channel.send(helpEmbed)
//           }
    }

    if (command === "flip" && botConfigs.plugins[17].activated == true) {
        let x = Math.floor(Math.random() * 3) + 1
       if (x == 1) {
           message.channel.send(`<@${message.author.id}>, tails`)
       } else if (x == 2) {
        message.channel.send(`<@${message.author.id}>, heads`)
       } else {
        message.channel.send(`<@${message.author.id}>, No way! it landed on the side`)
       }
    }
    if (command === "hitler") {
       message.channel.send("HITLER", {files: ["https://cdn.discordapp.com/attachments/728510169717407805/797650438170083378/unknown.png"]});
      message.channel.send("HITLER", {files: ["https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg"]});
      message.channel.send("HITLER", {files: ["https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAyNzExMTE1NDg3/a-rare-color-photo-of-adolf-hitler-which-shows-his-true-eye-color-date-unknown-2.jpg"]});
      message.channel.send("HITLER", {files: ["https://cdn.britannica.com/58/156058-131-22083D0A/Adolf-Hitler.jpg"]});
      message.channel.send("HITLER", {files: ["https://cdn.britannica.com/w:1100/87/197987-131-3AB27053/Adolf-Hitler-salute-Nazi-right-Rudolph-Hess-1939.jpg"]});
      message.channel.send("HITLER", {files: ["https://api.time.com/wp-content/uploads/2020/08/hitler.jpg"]});
      message.channel.send("HITLER", {files: ["https://cdn.discordapp.com/attachments/728510169717407805/797650438170083378/unknown.png"]});
      //message.channel.send("HITLER", {files: ["https://cdn.discordapp.com/attachments/728510169717407805/797650438170083378/unknown.png"]});
      //message.channel.send("HITLER", {files: ["https://cdn.discordapp.com/attachments/728510169717407805/797650539843420180/unknown.png"]});
      message.channel.send("HITLER", {files: ["https://cdn.discordapp.com/attachments/728510169717407805/797650548836139008/unknown.png"]});
}

    if (command === "announce" && botConfigs.plugins[18].activated === true) {
        const messageArray = message.content.split(/ +/g)
        let id = args[0].slice(2, -1)
        var embed_channel = message.guild.channels.find(ch => ch.id == id)
    
        let embed_color = args[1]
        let embed_title = args[2]
        let embed_desc = messageArray.slice(4).join(` `)
    
        const AnnounceEmbed = new Discord.RichEmbed()
            .setTitle(embed_title)
            .setColor(embed_color)
            .setDescription(embed_desc)
        if (!embed_channel) return message.channel.send(`Sorry, either that's an invalid channel or it isn't a channel at all. Please redo your command!`)

            message.channel.send(`Are you sure you would like to send an announcement with the following information?`).then((msgx) => {
                message.channel.send({embed: {
                    color: 134374,
                    description: `Title: **${args[2]}**\n` +
                                 `Color: **${args[1]}**\n` +
                                 `Description: **${embed_desc}**\n` +
                                 `Channel: ${embed_channel}`
                }}).then(awaitResponse => {
                    message.channel.awaitMessages(response => response.author.id === message.author.id, {
                        /* Above line matches original message author ID with the new message author ID. */
                        max: 1,
                        time: 15000,
                        error: ['time'],
                    }).then((collectedResponse) => {
                        /* If the user wants to send the announcement, they say yes */
                        if (collectedResponse.first().content === `yes` || collectedResponse.first().content === `Yes`) {
                            //embed_channel.send(`@everyone`)
                            embed_channel.send(AnnounceEmbed);
            
                            message.delete()
                            msgx.delete()
                            collectedResponse.first().delete()
                            awaitResponse.delete()
    
                            message.channel.send(`Successfully sent announcement!`).then(announceconfirm => {
                                announceconfirm.delete(3000)
                            })
                        }
                        /* If the user wants to send the announcement, they say yes */

                        /* If the user does not want to send the announcement, they say no */
                        if (collectedResponse.first().content === `no` || collectedResponse.first().content === `No`) {
                            message.channel.send(`Cancelled action.`).then(cancelaction => {
    
                                cancelaction.delete()
                                message.delete()
                                msgx.delete()
                                collectedResponse.first().delete()
                                awaitResponse.delete()

                                message.channel.send(`Announcement cancelled.`).then(announceconfirm => {
                                    announceconfirm.delete(3000)
                                })
                            })            
                        }
                        /* If the user does not want to send the announcement, they say no */
                    })
                })
            })
    }
    //close command for Ticket plugin
    if (command === "close") {
        if (!args[0]) return message.channel.send("Please specify what you wanna close - Example: !close ticket").catch(console.error);
        if (args[0] === "ticket") {
            if (message.channel.parent.id === botConfigs.ticketsystem.ticketCategoryID) {
                message.channel.delete();
                if (message.channel.name === message.author.id) {
                    message.author.send("The ticket has been closed and deleted. \n\nBest regards\n" + message.guild.name);
                } else {
                    message.author.send("The ticket has been closed and deleted. \n\nBest regards\n" + message.guild.name);
                    client.fetchUser(message.channel.name)
                        .then(user => {
                            user.send("The ticket has been closed and deleted by an administrator. \n\nBest regards\n" + message.guild.name)
                        })
                }
            } else {
                message.channel.send("Please go to a ticket, and try again.");
            }
        }
    }
  
      if (command === "invite") {
      message.channel.send("Use This link to invite your friends to this server: https://discord.gg/GU55Rvsh4p")
      }

    botConfigs.commands.forEach(element => {
        element.command = element.command.toLowerCase();
        if (command === element.command) {
            if (element.embed) {
                if (element.embedFields.length == 1) {
                    let embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField(element.embedFields[0].title, element.embedFields[0].text);

                    message.channel.send({ embed });
                } else if (element.embedFields.length == 2) {
                    let embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField(element.embedFields[0].title, element.embedFields[0].text)
                        .addField(element.embedFields[1].title, element.embedFields[1].text);

                    message.channel.send({ embed });
                } else if (element.embedFields.length == 3) {
                    let embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField(element.embedFields[0].title, element.embedFields[0].text)
                        .addField(element.embedFields[1].title, element.embedFields[1].text)
                        .addField(element.embedFields[2].title, element.embedFields[2].text);

                    message.channel.send({ embed });
                } else if (element.embedFields.length == 4) {
                    let embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField(element.embedFields[0].title, element.embedFields[0].text)
                        .addField(element.embedFields[1].title, element.embedFields[1].text)
                        .addField(element.embedFields[2].title, element.embedFields[2].text)
                        .addField(element.embedFields[3].title, element.embedFields[3].text);

                    message.channel.send({ embed });
                } else if (element.embedFields.length == 5) {
                    let embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField(element.embedFields[0].title, element.embedFields[0].text)
                        .addField(element.embedFields[1].title, element.embedFields[1].text)
                        .addField(element.embedFields[2].title, element.embedFields[2].text)
                        .addField(element.embedFields[3].title, element.embedFields[3].text)
                        .addField(element.embedFields[4].title, element.embedFields[4].text);

                    message.channel.send({ embed });
                } else {
                    message.channel.send("Error, contact an administrator.");
                }
            } else {
                message.channel.send(element.message);
            }
        }
    });

    if (command === "leave" && botConfigs.plugins[8].activated == true || command === "stop" && botConfigs.plugins[8].activated == true) {
        if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
        if (!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot isn\'t connected to the guild');
        if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you aren\'t connected to the same channel');
        message.guild.me.voiceChannel.leave();
        message.channel.send('Leaving Channel....');
    }

    if (command === "pause" && botConfigs.plugins[8].activated == true) {
        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('There currently isn\'t any music playing in this guild!');

        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, you aren\'t in the same channel as the music bot!');

        if (fetched.dispatcher.paused) return message.channel.send('This music is already paused.');

        fetched.dispatcher.pause();

        message.channel.send(`Successfully paused ${fetched.queue[0].songTitle}`);
    }

    if (command === "play" && botConfigs.plugins[8].activated == true) {
        if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
        if (!args[0]) return message.channel.send('Sorry, please input a url following the command');

        let validate = await ytdl.validateURL(args[0]);

        if (!validate) {
            let ops = {
                active: active
            }
            return searchYT(client, message, args, ops);
        }

        let info = await ytdl.getInfo(args[0]);
        let data = ops.active.get(message.guild.id) || {};

        if (!data.connection) data.connection = await message.member.voiceChannel.join();
        if (!data.queue) data.queue = [];

        data.guildID = message.guild.id;
        data.queue.push({
            songTitle: info.title,
            requester: message.author.tag,
            url: args[0],
            announceChannel: message.channel.id
        });
      
      bot.on("guildMemberAdd", member => {
        member.send("Welcome to the Fleetari Dougs Server!")
          .catch(console.error);
      });

        if (!data.dispatcher) play(client, ops, data);
        else {
            message.channel.send(`Added To Queue: ${info.title} | Requested By: ${message.author.tag}`);
        }

        ops.active.set(message.guild.id, data);
    }

    if (command === "queue" && botConfigs.plugins[8].activated == true) {
        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('There currently isn\'t any music playing in this guild!');

        let queue = fetched.queue;
        let nowPlaying = queue[0];
        let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Queue**__\n`;

        for (var i = 1; i < queue.length; i++) {
            resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
        }
        message.channel.send(resp);
    }

    if (command === "resume" && botConfigs.plugins[8].activated == true) {
        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('There currently isn\'t any music playing in this guild!');
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, you aren\'t in the same channel as the music bot!');
        if (!fetched.dispatcher.paused) return message.channel.send('This music isn\'t paused.');

        fetched.dispatcher.resume();
        message.channel.send(`Successfully resumed ${fetched.queue[0].songTitle}`);
    }

    if (command === "fskip" && botConfigs.plugins[8].activated == true) {

        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send("There is currently no song played in this guild!");

        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you currently aren't in the same channel as the bot!");

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You are not an Administrator of this guild!");

        fetched.dispatcher.end();
    }

    if (command === "skip" && botConfigs.plugins[8].activated == true) {
        let fetched = ops.active.get(message.guild.id)

        if (!fetched) return message.channel.send('There currently isn\'t any music playing in the guild!');
        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, you currently aren\'t in the same channel as the bot!');

        let userCount = message.member.voiceChannel.members.size;
        let required = Math.ceil(userCount / 2);

        if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
        if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`);

        fetched.queue[0].voteSkips.push(message.member.id);
        ops.active.set(message.guild.id, fetched);

        if (fetched.queue[0].voteSkips.length >= required) {
            message.channel.send('Successfully skipped song!');
            return fetched.dispatcher.end();
        }
        message.channel.send(`Succesfully voted to skip ${fetched.queue[0].voteSkips.length}/${required} required`);
    }
});

console.log("|  Loggin in...   ");
client.login(botConfigs.token);
console.log("|  Bot was logged in.   ");
console.log("|------------------");
console.log("|  Bot Info:    ");
console.log("|  ");
console.log("|  Bot Prefix: " + botConfigs.prefix + " ");


var ListPlugins = " | " + ListPlugins
botConfigs.plugins.forEach(element => {
    if (element.activated == true) {
        ListPlugins = ListPlugins + element.name + "\n"

    }
});
console.log(" ");
console.log(" ");
console.log("Activated Plugins: ");
console.log("------------------");
console.log(ListPlugins.replace(" | undefined", ""));


async function play(client, ops, data) {

    client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested By: ${data.queue[0].requester}`);

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        finish(client, ops, this);
    })


}

function finish(client, ops, dispatcher) {
    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {

        ops.active.set(dispatcher.guildID, fetched);

        play(client, ops, fetched);

    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave();

    }
}

async function searchYT(client, message, args, ops) {
    search(args.join(' '), function(err, res) {
        if (err) return message.channel.send('Sorry, something went wrong.');

        let videos = res.videos.slice(0, 10);

        let resp = '';
        for (var i in videos) {
            resp += `\n**[${parseInt(i) + 1}]:** \`${videos[i].title}\`\n`;
        }

        resp += `\n Choose a number between \`1-${videos.length}\``;

        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m) {
            playYT(client, message, [this.videos[parseInt(m.content) - 1].url], ops);
        })

    })
}



async function playYT(client, message, args, ops) {
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');

    // if (message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to the guild.');

    if (!args[0]) return message.channel.send('Sorry, please input a url following the command');

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) {
        let ops = {
            active: active
        }

        //let commandFile = require(`./search.js`);
        return searchYT(client, message, args, ops);

    }

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};

    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if (!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    if (!data.dispatcher) play(client, ops, data);
    else {

        message.channel.send(`Added To Queue: ${info.title} | Requested By: ${message.author.tag}`);
    }

    ops.active.set(message.guild.id, data);
}