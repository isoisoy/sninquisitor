const Discord = require('discord.js');

const client = new Discord.Client();
const record = "619336908387909690";
const rec2 = "619340762328596491";
const snilk = [
  "snilk",        //0
  "snitty",       //1
  "snittie",      //2
  "snipple",      //3
  "sniddie",      //4
  "snussy",       //5
  "snenis",       //6
  "snagina",      //7
  "snumshot",     //8
  "snemen",       //9
  "snum",         //10
  "snulva",       //11
  "snut"          //12
]

client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    var searchMe = message.content.toLowerCase();
    var channelType = message.channel.type;
    var notAccepted = "dm";
    if (message.author.bot || channelType == notAccepted){
      return;
    }

    if (searchMe.includes('?snilkrecord')){
      //message.channel.send("0");
      var setMessage;
      if (server = 1){
        setMessage = record;
      } else {
        setMessage = rec2;
      }
      client.guilds.get(process.env.MYGUILD).channels.get("619302938304839691").fetchMessage(setMessage).then( messageIN => {
        var timeSet = messageIN.content;

        var largeDiff = Number(timeSet);

        var timeArray = timeConvert(largeDiff);
        let days = timeArray[0];
        let hours = timeArray[1];
        let min = timeArray[2];
        let sec = timeArray[3];
        if (days > 0){
          message.channel.send("The current record is "+days+" days, "+hours+" hours, "+min+" minutes, and "+sec+" seconds.")
        } else {
          message.channel.send("The current record is "+hours+" hours, "+min+" minutes, and "+sec+" seconds.")
        }
      });

    }
    else if (containS(searchMe, snilk)) {
       message.react(process.env.SNTOP);
       var thisTime = message.createdAt;
       thisTime = thisTime - 0;

       var lastTime;
       var lastCont;
       if (message.guild.id == process.env.TGUILD || message.guild.id == process.env.MYGUILD){
         var lastMessage = client.guilds.get(process.env.GUILD).channels.get(process.env.CHANNEL).fetchMessages({limit: 1}).then(messages =>{
           lastTime = messages.array();
           let extraStep = lastTime[0];
           lastCont = extraStep.content;

           //console.log(lastDate);
           client.guilds.get(process.env.GUILD).channels.get(process.env.CHANNEL).send(" "+thisTime);
           var timeDiff = thisTime - lastCont;
           //console.log(timeDiff);
           var msec = Number(timeDiff);
           var timeArray = timeConvert(msec);
           let days = timeArray[0];
           let hours = timeArray[1];
           let min = timeArray[2];
           let sec = timeArray[3];

           if(checkRecord(msec,1)){
             message.channel.send("***New Record!***");
             client.guilds.get(process.env.MYGUILD).channels.get("619302938304839691").fetchMessage(record).then( messageIN => {

               messageIN.edit(timeDiff);

             });
           }

           if (days > 0){
             message.channel.send("It has been "+days+" days, "+hours+" hours, "+min+" minutes, and "+sec+" seconds since the last mention of anything related to snilk.");
           } else {
             message.channel.send("It has been "+hours+" hours, "+min+" minutes, and "+sec+" seconds since the last mention of anything related to snilk.");
           }

          }).catch(console.error);
       } else {
         var lastMessage = client.guilds.get(process.env.GUILD).channels.get(process.env.ECHANNEL).fetchMessages({limit: 1}).then(messages =>{
           lastTime = messages.array();
           let extraStep = lastTime[0];
           lastCont = extraStep.content;

           //console.log(lastDate);
           client.guilds.get(process.env.GUILD).channels.get(process.env.ECHANNEL).send(" "+thisTime);
           var timeDiff = thisTime - lastCont;
           //console.log(timeDiff);
           var msec = Number(timeDiff);
           var timeArray = timeConvert(msec);
           let days = timeArray[0];
           let hours = timeArray[1];
           let min = timeArray[2];
           let sec = timeArray[3];

           if(checkRecord(msec,0)){
             message.channel.send("***New Record!***");
             client.guilds.get(process.env.MYGUILD).channels.get("619302938304839691").fetchMessage(rec2).then( messageIN => {

               messageIN.edit(timeDiff);

             });
           }

           if (days > 0){
             message.channel.send("It has been "+days+" days, "+hours+" hours, "+min+" minutes, and "+sec+" seconds since the last mention of anything related to snilk.");
           } else {
             message.channel.send("It has been "+hours+" hours, "+min+" minutes, and "+sec+" seconds since the last mention of anything related to snilk.");
           }

          }).catch(console.error);
       }
      }

});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

function timeConvert(msec){

  var days = Math.floor(msec / 1000 / 60 / 60 / 24);
  msec -= days * 1000 * 60 * 60 * 24;
  var hours = Math.floor(msec / 1000 / 60 / 60);
  msec -= hours * 1000 * 60 * 60;
  //console.log(hours);
  var min = Math.floor(msec / 1000 / 60);
  msec -= min * 1000 * 60;
  var sec = Math.floor(msec / 1000);
  msec -= sec * 1000;

  return [days,hours,min,sec];
}

function containS(target, pattern){
    var value = 0;
    pattern.forEach(function(word){
      value = value + target.includes(word);
    });
    return (value === 1)
}

function checkRecord(newTimeDiff,server){
  var isLarger = 0;
  var setMessage;
  if (server = 1){
    setMessage = record;
  } else {
    setMessage = rec2;
  }
  return client.guilds.get('409071061527691264').channels.get("619302938304839691").fetchMessage(setMessage).then( messageIN => {

    var timeSet = messageIN.content;

    var largeDiff = Number(timeSet);
    if (newTimeDiff > largeDiff){
      isLarger = 1;
    }
    return isLarger;

  });

}
