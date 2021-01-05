const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const reactEmoji = "423264671030837303";

const caseList = [
  "!help",                // 0
  "!ajuda",               // 1
  "!list",                // 2
  "!lista",               // 3
  "!emoji",               // 4
  "!roleID",              // 5
  "!gamesoffered",        // 6
  "!ping",                // 7
  "!me",                  // 8
  "!ARK",                 // 9
  "!BF",                  // 10
  "!ESO",                 // 11
  "!Haven&Hearth",        // 12
  "!LOL",                 // 13
  "!Minecraft",           // 14
  "!PUBG",                // 15
  "!Terraria",            // 16
  "!fucksgiven",          // 17
  "!havenserver"          // 18
];

//guilds
//drac
const welcomeChat = "418143808874610689";
const genChat = "227597884646752256";
const botReport = "425739686493945866";
var roles = {
  ARK: "418149671421214750",
  BF: "418160833076396032",
  ESO: "418149584876077097",
  Haven: "423185622325264384",
  LOL: "418529095589167114",
  Minecraft: "423185534668505108",
  PUBG: "418160734711578624",
  Terraria: "422873563091959809"
}
//bot
const genChat2 = "409071061527691266";
const botReport2 = "423253584990437376";



// When guild members are added
client.on("guildMemberAdd", (addedMember) =>{
  var userTag = addedMember.user;
  var displayedName = addedMember.displayName;
  var guildAdded = addedMember.guild.id;

  if (guildAdded == process.env.dracGuild){
    var msg = "Welcome to Draconian Argentum! I am Whelp and I help you get around on the server. ";
    client.channels.cache.get(welcomeChat).send("Hello "+displayedName+"! "+msg+
      "\nOlá! Seja bem vindo a Draconian Argentum! Eu sou Whelp e vou te ajudar a se acertar no servidor.");
    client.channels.cache.get(botReport).send(userTag+" You can send me commands in this channel. For more information, send '!help'.\n"+
      "Você pode me enviar comandos neste canal. Para mais informações, digite '!ajuda'.");
  }else{
    var lecache = client.channels;
    lecache.cache.get(genChat2).send("hello");
    lecache.cache.get(genChat2).send(userTag+" You can send me commands in this channel. For more information, send '!help'");
  }
});



client.on('message', (message) => {
    var channelType = message.channel.type;
    var acceptedType = "dm";
    if (!message.content.startsWith(prefix) || message.author.bot){
     return;
    }
    if (channelType == acceptedType) {
      return;
    }
    var contentsMess = message.content.split(' ');
    var cmd = contentsMess[0];
    var name = message.author;
    var nameCheck = message.member.nickname;
    var roleList = message.member.roles.cache;
    var roleCheck = roleList.map(r => r.id);
    var removeTheRole = 0;
    var triggers = 1;

    // if someone tries a command of their nickname
    var messageCheck = message.content.substring(1);
    if (messageCheck == nameCheck) {
      message.channel.send("All hail "+nameCheck+"!");
    }

    switch(cmd) {
      case caseList[0]: // !help
        message.channel.send(
          "Hello! I'm Whelp. I'm a bot created to help with " +
          "moderation within this chat. " +
          "You can send me commands to join the different "+
          "chats and channels according to the games you play. "+
          "My commands follow a format of !<game>. "+
          "A couple examples: \n"+
          "!ESO \n!ARK \n!LOL\n"+
          "For a list of game commands, type '!gamesoffered'. "+
          "To have a list of my commands sent to you, type '!list'."
        );
        break;

    case caseList[1]: // !ajuda
        message.channel.send(
          "Olá! Eu sou Whelp. Sou um bot criado para ajudar " +
          " com a moderação deste chat." +
          "Você pode me enviar comandos para se juntar aos diferentes " +
          "chats e canais de acordo com os jogos que você joga." +
          "Meus comandos seguem o seguinte formato: !<jogo>." +
          "Alguns exemplos: \n" +
          "!ESO \n!ARK \n !LOL\n" +
          "Para uma lista dos jogos disponíveis, digite '!gamesoffered'. "+
          "Para ver uma lista de todos os meus comandos, digite '!lista'."
        );
        break;

    case caseList[2]: // !list
      message.author.createDM();
      var commandList = "";
      for (var i = 0; i < caseList.length; i++) {
        if (i == 4 || i == 5) {
        }else {
          commandList += caseList[i] + "\n";
        }
      }
      message.author.send("This is the list of my commands. \n"+commandList);
      break;

    case caseList[3]: // !lista
      message.author.createDM();
      var commandList = "";
      for (var i = 0; i < caseList.length; i++) {
        if (i == 4 || i == 5) {
        }else {
          commandList += caseList[i] + "\n";
        }
      }
      message.author.send("Essa é a lista de meus comandos. \n"+commandList);
      break;

    case caseList[4]: // !emoji
      var owner = "215225483942428672";
      var name2 = message.author.id;
      if (name2 == owner){
        var emojis = message.guild.emojis;
        console.log(emojis);
      }
      break;

    case caseList[5]: // !roleID
      var owner = "215225483942428672";
      var name2 = message.author.id;
      if (name2 == owner){
          var idspls = roleList.map(r => r.id); // isolates the role ids
          var absrolelist = message.guild.roles;
          console.log(absrolelist);
      }
      break;

    case caseList[6]: // !gamesoffered
      message.channel.send("Game Categories Currently Offered:\n"+
      "Ark [!ARK]\nBattlefield [!BF]\nElder Scrolls Online [!ESO]"+
      "\nHaven & Hearth [!Haven&Hearth]"+
      "\nLeague of Legends [!LOL]\nMinecraft [!Minecraft]"+
      "\nPLAYERUNKNOWN's Battlegrounds [!PUBG]\nTerraria [!Terraria]"
      );
      break;

    case caseList[7]: // !ping
      message.channel.send("NO! NO PONG!");
      break;

    case caseList[8]: // !me
      // var owner = "215225483942428672";
      // var name2 = message.author.id;
      // if (name2 == owner){
      //   message.channel.send("You are "+name+", silly! You're a piece of shit!");
      // } else {
      //   message.channel.send("You are "+name+"!");
      // }
      break;

    case caseList[9]: // !ARK
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.ARK);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.ARK);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.ARK);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[10]: // !BF
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.BF);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.BF);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.BF);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[11]: // !ESO
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.ESO);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.ESO);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.ESO);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[12]: // !Haven&Hearth
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.Haven);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.Haven);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.Haven);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[13]: // !LOL
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.LOL);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.LOL);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.LOL);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[14]: // !Minecraft
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.Minecraft);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.Minecraft);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.Minecraft);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[15]: // !PUBG
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.PUBG);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.PUBG);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.PUBG);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[16]: // !Terraria
      for (i = 0; i<roleCheck.length;i++){
        var x = new Boolean(roleCheck[i]==roles.Terraria);
        // if this is true, you have the role

        if (x == true) {
          message.member.roles.remove(roles.Terraria);
          removeTheRole = 1;
          break; //remove the role and break out of the for loop
        }else{
          //do nothing and continue
        }
      } // out of the for loop

      if (removeTheRole){
        message.react(reactEmoji);
        break; //role removed, break out of the case
      }else if(removeTheRole ==0){
        message.member.roles.add(roles.Terraria);
        message.react(reactEmoji);
        break;//role added, break out of the case
      }

    case caseList[17]: // !fucksgiven
      var numOfFucks = getRandomInt(20);
      if (numOfFucks == 0){
        message.channel.send("Damn! You give no fucks.")
      } else if(numOfFucks == 20) {
        message.channel.send("Woah! You give "+numOfFucks+"! Max fuckage!")
      } else{
        message.channel.send("You give "+numOfFucks+" fucks.")
      }
      break;

    case caseList[18]: // !havenserver
      // exec('ping game.havenandhearth.com', (err,stdout,stderr) => {
      //   if (err){
      //     return;
      //   }
      //   //console.log('stdout: ${stdout}',stdout);
      //   // gotta parse through the message
      //   var pos = stdout.indexOf("Lost"); //number of index where Lost will start
      //   var importantPos = pos + 7;
      //   var numOfLosses = stdout.substr(importantPos,1);
      //
      //   if (numOfLosses == "0"){
      //     message.channel.send("The game server seems to be responding.");
      //   } else if (numOfLosses == "4"){
      //     message.channel.send("The game server appears to be down.");
      //   } else {
      //     message.channel.send("The game server may or may not be down.");
      //   }
      //   triggers = 1;
      // });
      //
      break;

    default:
      triggers = 0;
      break;
    } // ends switch

    var reporttxt = " asked me ";
    var tagName = name.username;
    var badReportTxt = " tried to use ";

    //cmd
    if (triggers){
      client.channels.cache.get(botReport2).send(tagName+"/"+nameCheck+reporttxt+cmd);
    }else{
      client.channels.cache.get(botReport2).send(tagName+"/"+nameCheck+badReportTxt+cmd);
    }

});

client.login(process.env.BOT_TOKEN);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
