//Introduction
const Discord = require("discord.js"); // Discord
const client = new Discord.Client(); // Makes an object for the client


// Response to ready client
client.on("ready", () => {
  console.log(`I am ready as ${client.user.tag}!`);
});

// Variables
var roleEval; // Role to Evaluate
var roleCheck; // Role to Check Against
var roleList; // List of Assigned Roles
var removeTheRole; // Boolean-ish for if role needs to be removed
var ConnNow; // connection value

// Bot related hmm
const prefix = '!';

// Emojis
const reactEmoji = "423264671030837303";
const owner = "215225483942428672";
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
const otterChat = "433272196593614868";
const otherChat = "447774279480639498";

// Command lists
// Game list
const gamesListCap = [
  "ARK",        // 0
  "BF",         // 1
  "ESO",        // 2
  "Haven",      // 3
  "LOL",        // 4
  "Minecraft",  // 5
  "PUBG",       // 6
  "Terraria"   // 7
];

// Game Labels
const gameLabel = [
  "Ark: Survival Evolved", // 0
  "Battlefield",           // 1
  "Elder Scrolls Online",  // 2
  "Haven & Hearth",        // 3
  "Leauge of Legends",     // 4
  "Minecraft",             // 5
  "PLAYERUNKOWN's Battlegrounds", // 6
  "Terraria"               // 7
];

// Basic Info List
const basicInfo = [
  "Help",       // 0
  "Ajuda",      // 1
  "List",       // 2
  "Lista",      // 3 // In list and lista command, I stop i here
  "Emoji",      // 4
  "RoleID",     // 5
];

// Special Command list
const specialCommand = [
  "Ping",       // 0
  "Gamesoffered",// 1
  "Fucksgiven", // 2
  "8Ball",      // 3
  "Otter",      // 4
  "Other"       // 5
];


// When guild members are added
client.on("guildMemberAdd", (addedMember) =>{
  var userTag = addedMember.user;
  var displayedName = addedMember.displayName;
  var guildAdded = addedMember.guild.id;

  //process.env.
  if (guildAdded == process.env.dracGuild){ // This is an intro for Draconian Argentum
    var msg = ":flag_gb: Welcome to **Draconian Argentum**! I am Whelp and I help you get around on the server. ";
    client.channels.cache.get(welcomeChat).send("Hello "+displayedName+"! "+msg+
      "I've left you a message in the #bot channel."+
      "\n\n :flag_br: Olá! Seja bem vindo a **Draconian Argentum**! Eu sou Whelp e vou te ajudar a se acertar no servidor. "+
      "Te deixei uma mensagem no canal #bot.");
    client.channels.cache.get(botReport).send(userTag+":flag_gb: You can send me commands in this channel. For more information, send '!help'.\n\n"+
      ":flag_br: Você pode me enviar comandos neste canal. Para mais informações, digite '!ajuda'.");
  }else{

  }
});

// When the connection fails
client.on("error", (errorC) => {
  console.log("Connection timed out.");
  client.login(config.token).catch((err)=>{
    console.log("Attempted log on.");
  });

});

client.on("message", (message) => {
  // Basic checks
  // starts with prefix, author is not a bot, channel is not a dm
  var channelType = message.channel.type;
  var notAccepted = "dm";
  if (!message.content.startsWith(prefix) || message.author.bot || channelType == notAccepted){
    return;
  }

  // Breaking down the message
  var contentsMess = message.content.split(' ');
  var theCommand = contentsMess[0].substring(1);

  // message properties
  var name = message.author.username; // used in the bot report
  var nickCheck = message.member.nickname;

  // author properties
  roleList = message.member.roles.cache;
  roleCheck = roleList.map(r => r.id);

  // trigger checks
  removeTheRole = 0;
  var commandTrigger = 0;

  // evaluating commands
  if (toAll(basicInfo[0],theCommand)){ // help
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
  }
  else if(toAll(basicInfo[1],theCommand)){ // ayuda
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
  }
  else if(toAll(basicInfo[2],theCommand)){ // list
    var newChan = message.author.createDM();
    var basicCommandList = prefix+"Help\n"+prefix+"List\n";
    var basicBRCommandList = prefix+"Ajuda\n"+prefix+"Lista\n";
    var gamesCommandList = "";
    for (var z = 0; z < gamesListCap.length; z++) {
      gamesCommandList += prefix+gamesListCap[z]+"    **("+gameLabel[z]+")**"+ "\n";
    }
    var specialCommandList = "";
    for (var g = 0; g < specialCommand.length; g++) {
      specialCommandList += prefix+specialCommand[g]+"\n";
    }
    var embed = new Discord.MessageEmbed()
        .setTitle("Whelp's Command List")
        .setColor(3447003)
        .setThumbnail("https://cdn.discordapp.com/attachments/409071061527691266/447517888589594634/dragonwhelp2.png")
        .addField(":flag_gb: Basic Commands",basicCommandList)
        .addField("________________________________________", "----------------------------------------")
        .addField(":flag_br: Comandos Básicos",basicBRCommandList)
        .addField("________________________________________", "----------------------------------------")
        .addField("Game Commands / Comandos Jogos",gamesCommandList)
        .addField("________________________________________", "----------------------------------------")
        .addField("Special Commands / Comandos Especiais",specialCommandList);
    message.author.send(embed)
  }
  else if(toAll(basicInfo[3],theCommand)){ // lista
      var newChan = message.author.createDM();
      var basicCommandList = prefix+"Help\n"+prefix+"List\n";
      var basicBRCommandList = prefix+"Ajuda\n"+prefix+"Lista\n";
      var gamesCommandList = "";
      for (var z = 0; z < gamesListCap.length; z++) {
        gamesCommandList += prefix+gamesListCap[z]+"    **("+gameLabel[z]+")**"+ "\n";
      }
      var specialCommandList = "";
      for (var g = 0; g < specialCommand.length; g++) {
        specialCommandList += prefix+specialCommand[g]+"\n";
      }
    var embed = new Discord.MessageEmbed()
        .setTitle("Whelp's Command List")
        .setColor(3447003)
        .setThumbnail("https://cdn.discordapp.com/attachments/409071061527691266/447517888589594634/dragonwhelp2.png")
        .addField("________________________________________", "----------------------------------------")
        .addField(":flag_br: Comandos Básicos",basicBRCommandList)
        .addField("________________________________________", "----------------------------------------")
        .addField("Comandos Jogos",gamesCommandList)
        .addField("________________________________________", "----------------------------------------")
        .addField("Comandos Especiais",specialCommandList);
    newChan.send(embed)
  }
  else if(toAll(basicInfo[4],theCommand)){ // emoji
    if (personID == owner){
      var emojis = message.guild.emojis;
      console.log(emojis);
    }
  }
  else if(toAll(basicInfo[5],theCommand)){ // roleID
    if (personID == owner){
      var absrolelist = message.guild.roles.cache;
      console.log(absrolelist);
    }
  }
  //------------------------------------------------------------------------------
  else if(toAll(specialCommand[0],theCommand)){ // Ping
    message.channel.send("ok, maybe a little pong.");
  }
  else if(toAll(specialCommand[1],theCommand)){ // gamesoffered
    message.channel.send("Game Categories Currently Offered:\n"+
    "Ark [!ARK]\nBattlefield [!BF]\nElder Scrolls Online [!ESO]"+
    "\nHaven & Hearth [!Haven]"+
    "\nLeague of Legends [!LOL]\nMinecraft [!Minecraft]"+
    "\nPLAYERUNKNOWN's Battlegrounds [!PUBG]\nTerraria [!Terraria]"
    );
  }
  else if(toAll(specialCommand[2],theCommand)){ // fucksgiven
    var numOfFucks = getRandomInt(20);
    if (numOfFucks == 0){
      message.channel.send("Damn! You give no fucks.");
    } else if(numOfFucks == 20) {
      message.channel.send("Woah! You give "+numOfFucks+"! Max fuckage!");
    } else if (numOfFucks == 1) {
      message.channel.send(":( Just a single fuck.");
    }else if(numOfFucks == 21){
      message.channel.send("Ayyyyyy 21 fucks!");
    }else {
      message.channel.send("You give "+numOfFucks+" fucks.");
    }
  }
  else if(toAll(specialCommand[3],theCommand)){ // 8ball
    let ballnum = getRandomInt(20);
    switch (ballnum){
      case 0:
        message.channel.send("Without a doubt.");
        break;
      case 1:
        message.channel.send("It is certain.");
        break;
      case 2:
        message.channel.send("Reply hazy, try again.");
        break;
      case 3:
        message.channel.send("Don't count on it.");
        break;
      case 4:
        message.channel.send("As I see it, yes.");
        break;
      case 5:
        message.channel.send("Ask again later.");
        break;
      case 6:
        message.channel.send("My reply is no.");
        break;
      case 7:
        message.channel.send("It is decidedly so.");
        break;
      case 8:
        message.channel.send("Most likely.");
        break;
      case 9:
        message.channel.send("Better not tell you now.");
        break;
      case 10:
        message.channel.send("My sources say no.");
        break;
      case 11:
        message.channel.send("Outlook good.");
        break;
      case 12:
        message.channel.send("Yes, definitely.");
        break;
      case 13:
        message.channel.send("Cannot predict now.");
        break;
      case 14:
        message.channel.send("Outlook not so good.");
        break;
      case 15:
        message.channel.send("Yes.");
        break;
      case 16:
        message.channel.send("You may rely on it.");
        break;
      case 17:
        message.channel.send("Concentrate and ask again.");
        break;
      case 18:
        message.channel.send("Very doubtful.");
        break;
      case 19:
        message.channel.send("Signs point to yes.");
        break;
      case 20:
        message.channel.send("Will consider.");
        break;
    }
  }
  else if(toAll(specialCommand[4],theCommand)){ // otter
    var otterChannel = client.channels.cache.get(otterChat);
    otterChannel.messages.fetch({limit: 100})
    .then(messagesO => {
      let otterMap = messagesO.array();
      let otterLength = otterMap.length;
      let otterRoll = getRandomInt(otterLength);
      if (otterRoll == otterLength){
        otterRoll = otterLength - 1;
      }
      let otterThis = otterMap[otterRoll];
      let otterPic = otterThis.content;
      message.channel.send(otterPic);
    });
  }
  else if(toAll(specialCommand[5],theCommand)){ // other
    var otherChannel = client.channels.cache.get(otherChat);
    otherChannel.messages.fetch({limit:100})
    .then(messagesO => {
      let otherMap = messagesO.array();
      let otherLength = otherMap.length;
      let otherRoll = getRandomInt(otherLength);
      if (otherRoll == otherLength){
        otherRoll = otherLength - 1;
      }
      let otherThis = otherMap[otherRoll];
      let otherPic = otherThis.content;
      message.channel.send(otherPic);
    });
  }
  //------------------------------------------------------------------------------
  else if(toAll(gamesListCap[0],theCommand)){ // ARK
    roleEval = roles.ARK;
    roleMod(roleEval,message);
  }
  else if(toAll(gamesListCap[1],theCommand)){ // BF
    roleEval = roles.BF;
    roleMod(roleEval,message);
  }
  else if(toAll(gamesListCap[2],theCommand)){ // ESO
    roleEval = roles.ESO;
    roleMod(roleEval,message);
  }
  else if(toAll(gamesListCap[3],theCommand)){ // Haven
    roleEval = roles.Haven;
    roleMod(roleEval,message);
  }
  else if(toAll(gamesListCap[4],theCommand)){ // LOL
    roleEval = roles.LOL;
    roleMod(roleEval,message);
  }
  else if(toAll(gamesListCap[5],theCommand)){ // Minecraft
    roleEval = roles.Minecraft;
    roleMod(roleEval,message);
  }
  else if(toAll(gamesListCap[6],theCommand)){ // PUBG
    roleEval = roles.PUBG;
    roleMod(roleEval,message);
  }
  else if(toAll(gamesListCap[7],theCommand)){ // Terraria
    roleEval = roles.Terraria;
    roleMod(roleEval,message);
  }
  //------------------------------------------------------------------------------

  else{
    commandTrigger = 1;
  }
  var goodReport = " asked me ";
  var badReport = " tried to use ";
  var finalReport;

  if (commandTrigger){
    finalReport = badReport;
  } else {
    finalReport = goodReport;
  }

  client.channels.cache.get(botReport2).send(name+"/"+nickCheck+finalReport+contentsMess[0]);

});

// to log in the bot
//process.env.
client.login(process.env.BOT_TOKEN);

// Functions

// takes a string and returns it original || capitalized || lowercase
function toAll(string,identif){
  let original = string;
  let stringCap = string.toUpperCase();
  let stringLower = string.toLowerCase();
  return identif == original || identif == stringCap || identif == stringLower
}

// roleChecker
function roleMod(roleAssign,messageR){
  for (i = 0; i<roleCheck.length;i++){
    var x = new Boolean(roleCheck[i]==roleAssign);
    // if this is true, you have the role

    if (x == true) {

      removeTheRole = 1;
      break; //remove the role and break out of the for loop
    }else{
      //do nothing and continue
    }
  } // out of the for loop

  if (removeTheRole){
    messageR.member.roles.remove(roleAssign);
    //messageR.channel.send("Role removed.");
    messageR.react(reactEmoji);
     //role removed
  }else if(removeTheRole ==0){
    messageR.member.roles.add(roleAssign);
    //messageR.channel.send("Role added.");
    messageR.react(reactEmoji);
    //role added
  }
  return
}

//random num gen
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max+1));
}
