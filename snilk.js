const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    var searchMe = message.content;
    var channelType = message.channel.type;
    var notAccepted = "dm";
    if (message.author.bot || channelType == notAccepted){
      return;
    }
    if (searchMe.includes('snilk') || searchMe.includes('snitties') || searchMe.includes('snipple') || searchMe.includes('sniddies')) {
       message.react(process.env.SNTOP);
       var thisTime = message.createdAt;
       thisTime = thisTime - 0;
       //console.log(thisTime);
       //message.channel.send("<:Sntop:615186732341788672> " + thisTime);
       var lastTime;
       var lastCont;
       var lastMessage = client.guilds.get(process.env.MONITOR_GUILD).channels.get(process.env.MONITOR_CHANNEL).fetchMessages({limit: 1}).then(messages =>{
         lastTime = messages.array();
         let extraStep = lastTime[0];
         lastCont = extraStep.content;

         //console.log(lastDate);
         client.guilds.get(process.env.MONITOR_GUILD).channels.get(process.env.MONITOR_CHANNEL).send(" "+thisTime);
         var timeDiff = thisTime - lastCont;
         //console.log(timeDiff);
         var msec = Number(timeDiff);
         var days = Math.floor(msec / 1000 / 60 / 60 / 24);
         msec -= days * 1000 * 60 * 60 * 24;
         var hours = Math.floor(msec / 1000 / 60 / 60);
         msec -= hours * 1000 * 60 * 60;
         //console.log(hours);
         var min = Math.floor(msec / 1000 / 60);
         msec -= min * 1000 * 60;
         var sec = Math.floor(msec / 1000);
         msec -= sec * 1000;
         if (days > 0){
           message.channel.send("It has been "+days+" days, "+hours+" hours, "+min+" minutes, and "+sec+" seconds since the last mention of anything related to snilk.");
         } else {
           message.channel.send("It has been "+hours+" hours, "+min+" minutes, and "+sec+" seconds since the last mention of anything related to snilk.");
         }

       }).catch(console.error);

       }

});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
