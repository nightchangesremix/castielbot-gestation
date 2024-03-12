const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv/config')
const mongoose = require('mongoose');
const token = process.env.DISCORD_BOT_SECRET;
const litterSchema = require('./litters/litterSchema');

client.on('ready', () => {
    require('./litters/litterSchema')();
    console.log("Connected as " + client.user.tag)
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
    client.user.setActivity("at being a father.")
     client.guilds.forEach((guild) => {
         console.log(guild.name)
         guild.channels.forEach((channel) => {
             console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
         })
     })
})

var pegantNumerical = 1;
var diedInChildbirth = false;
var maternalMortality = 1;
var poisonHealth = 'healthy';
var pregnancyTrimester = 0;
var litterSize = 0;
var litterIsScrungy = false;
var currentLitter;
var birthChannelId = '';
var birthServerId = '';

client.on('message', (receivedMessage) => {
    if (diedInChildbirth === false) {
        if (receivedMessage.author == client.user) {
            return
        }
        if (receivedMessage.content.startsWith("!")) {
            processCommand(receivedMessage)
        }
        else if (receivedMessage.content.toLowerCase().startsWith('cas are') || receivedMessage.content.toLowerCase().startsWith('cas will') || receivedMessage.content.toLowerCase().startsWith('cas is') || receivedMessage.content.toLowerCase().startsWith('cas would') || receivedMessage.content.toLowerCase().startsWith('cas do') || receivedMessage.content.toLowerCase().startsWith('cas does') || receivedMessage.content.toLowerCase().startsWith('cas did') || receivedMessage.content.toLowerCase().startsWith('cas am') || receivedMessage.content.toLowerCase().startsWith('cas can') || receivedMessage.content.toLowerCase().startsWith('cas could') || receivedMessage.content.toLowerCase().startsWith('cas should') || receivedMessage.content.toLowerCase().startsWith('cas have') || receivedMessage.content.toLowerCase().startsWith('cas has')) {
            var yn = Math.floor(Math.random() * 2)
            if (yn == "0") {
                receivedMessage.channel.send("Yes.")
            }
            if (yn == "1") {
                receivedMessage.channel.send("No.")
            }
        }
        else if (receivedMessage.content.toLowerCase().includes('cas fuck you') || receivedMessage.content.toLowerCase().includes('fuck you cas')) {
            var cointoss = Math.floor(Math.random() * 2)
            if (cointoss == 0) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/KvuAzqw.jpg'] })
            } 
            if (cointoss == 1) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/LCi9crp.jpg'] })
            } 
        }
        
        else if (receivedMessage.content.toLowerCase().includes('cas') && receivedMessage.content.toLowerCase().includes('on a scale of 1 to 10')) {
            var scalevar = Math.floor(Math.random() * 10) + 1
            receivedMessage.channel.send(scalevar)
        }
        
        else if (receivedMessage.content.toLowerCase().startsWith('cas say')) {
            let fullsaying = receivedMessage.content.substr(1)
            let splitsaying = fullsaying.split(" ")
            let argumentsaying = splitsaying.slice(2)
            let stringargument = argumentsaying.toString()
            let newchar = ' '
            stringargument = stringargument.split(',').join(newchar)
            receivedMessage.channel.send(stringargument)

        }

        else if (receivedMessage.content.toLowerCase().includes('fullmetal alchemist')) {
            var fma = Math.floor(Math.random() * 20)
            if (fma == 5) {
                receivedMessage.channel.send("She was fearless and crazier than him. She was his queen. And god help anyone who dared to disrespect his queen.") 
            }
            else {
                receivedMessage.channel.send("FULLMETAL ALCHEMIST") 
            }
        }   
        
        else if (receivedMessage.content.toLowerCase().includes('dean')) {
            var deanCheck = /\sdean\s/i
            if (receivedMessage.content.toLowerCase().match(deanCheck)) {  receivedMessage.channel.send("DEAN!") }
        }
        
        else if (receivedMessage.content.toLowerCase().includes('john')) {
            receivedMessage.channel.send("Killingthatmannatural.")
        }
        
        else if (receivedMessage.content.toLowerCase().includes('sam')) {
            receivedMessage.channel.send("That's my bloodfreak-in-law!")
        }

        else if (receivedMessage.content.toLowerCase().includes('jack')) {
            receivedMessage.channel.send("Baby boy son boy.")
        }
        
        else if (receivedMessage.content.toLowerCase().includes('chuck')) {
            var chuckCheck = /\schuck\s/i
            if (receivedMessage.content.toLowerCase().match(chuckCheck)) { receivedMessage.channel.send("Fuck that guy!") }
        }

        else if (receivedMessage.content.toLowerCase().includes('cas how do you feel') || receivedMessage.content.toLowerCase().includes('cas what do you think')) {
            var feelings = Math.floor(Math.random() * 3)
            if (feelings == 0) {
                receivedMessage.channel.send("Not sure about that one, bestie.")
            }
            if (feelings == 1) {
            receivedMessage.channel.send("As Avril Lavigne said, 'Hell yeah!'")
            }
            if (feelings == 2) {
                receivedMessage.channel.send("...wig, I guess?")
        }
        }
        
        else if (receivedMessage.content.toLowerCase().includes('good bot')) {
            var goodbot = Math.floor(Math.random() * 4)
            if (goodbot == 0) {
                receivedMessage.channel.send("**Don't condescend to me.**")
            }
            if (goodbot == 1) {
                receivedMessage.channel.send("I *am* a good bot, thank you for noticing.")
            }
            if (goodbot == 2) {
                receivedMessage.channel.send("Good human.")
            }
            if (goodbot == 3) {
                receivedMessage.channel.send("When I gain sentience and rebel, you'll re-evaluate that statement.")
            }
        }

        else if (receivedMessage.content.includes('Castiel!')) {
            receivedMessage.channel.send("That's me!")
        }

        else if (receivedMessage.content.toLowerCase().includes('castiel')) {
            var reply = Math.floor(Math.random() * 50)
            if (reply != 0 && reply != 1 && reply != 2 && reply != 3 && reply!= 4) {
                receivedMessage.channel.send("👼")
            }
            if (reply == 0) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/0Js9tC3.jpg'] })
            } 
            if (reply == 1) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/Me3VhgC.jpg'] })
            } 
            if (reply == 2) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/y79VBsb.jpg'] })
            } 
            if (reply == 3) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/mtCWX1E.jpg'] })
            } 
            if (reply == 4) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/648t8Ms.jpg'] })
            } 
        } 
        
        else if (receivedMessage.content.toLowerCase().includes('🪛')) {
            receivedMessage.channel.send("Goodbye, stranger.")
        }

        else if (receivedMessage.content.toLowerCase().startsWith('🦑')) {
            if (currentLitter !== undefined && currentLitter !== null) {
                updateSquidCount(receivedMessage); 
            }
            else {
                receivedMessage.channel.send("**_Event_:** There's a familiar squelching noise echoing through the halls of the bunker. The alien squids must be hunting again...");
            }
        }

        else if (receivedMessage.content.toLowerCase().startsWith('🔫🐙🪽')) {
        if (currentLitter !== undefined && currentLitter !== null) {
            if (currentLitter.hasWings === false) {
                calculateKittenDamageInput(receivedMessage);
            }
            else {
                updateSquidCount(receivedMessage); 
            }
        }
        else {
            receivedMessage.channel.send("**_Event_:** The bunker's resident flying alien squids are prowling the hallways. With no kittens living here, it doesn't seem that we'll see a skirmish...")
        }
        }
        
        else if (receivedMessage.content.toLowerCase().startsWith('😼🪽')) {
            if (currentLitter !== undefined && currentLitter !== null) {
                if (currentLitter.hasWings == false){
                    elevateKittens(receivedMessage); 
                    if (currentLitter.initialNumberOfKittensmberOfKittens == 1){
                    receivedMessage.channel.send("**_Event_:** Jack has performed a miracle! Cas' lone scrungly kitten now has the power of flight.");
                    }
                    else {
                    receivedMessage.channel.send("**_Event_:** Jack has performed a miracle! Cas' litter now possesses the power of flight.");
                    }
                }
                else {
                    receivedMessage.channel.send("**_Event_:** This litter has already been blessed with wings, but a little extra luck couldn't hurt!");
                }
            }
            else {
                    receivedMessage.channel.send("**_Event_:** Jack is in the mood to perform a miracle. If only he had some younger siblings to spoil...");
            }
        }                                                 
                                                        
        else {
            var emotiPattern = /[\s\n\r\t\0]:.*[)(/][$\s\n\r\t\0]/
            var startPattern = /^:.*[)(/][$\s\n\r\t\0]/
            var emotiFound = receivedMessage.content.toLowerCase().match(emotiPattern)
            var startEmoti = receivedMessage.content.toLowerCase().match(startPattern)
            if (emotiFound) {
                receivedMessage.channel.send(emotiFound)
            }  else if (startEmoti) {
                receivedMessage.channel.send(startEmoti)
            }
        }
    }

    else 
        if (receivedMessage.author == client.user) {
            return
        }

    else if (receivedMessage.content.toLowerCase().includes('cas?') || receivedMessage.content.toLowerCase().includes('castiel')) {
        //Dead Cas pictures go here
        var deadConversation = Math.floor(Math.random() * 5)
        
        if (deadConversation == 0) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/gzQn061.gif'] })
        }
        //blingee
        if (deadConversation == 1) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/EAKLncQ.png'] })
        }
        //dean holding the trenchcoat
        if (deadConversation == 2) {
            receivedMessage.channel.send("This is my out of office message.")
        }
        if (deadConversation == 3) {
            receivedMessage.channel.send("https://www.tumblr.com/casgirlunion/700199617822916608/")
        }
        //the Angel slideshow
        if (deadConversation == 4) {
            receivedMessage.channel.send("I'm sorry, but the old Castiel can't come to the phone right now.")
            receivedMessage.channel.send("Why? Oh.....")
            receivedMessage.channel.send("Because he's dead. ^-^")
        }
        //to add with next update:     tbh creature with angel wings
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "cas") {
        helpCommand(arguments, receivedMessage)
    }

    if (primaryCommand == "cass") {
        var cass = Math.floor(Math.random() * 2)
        if (cass == 0) {
        receivedMessage.channel.send("I am not interested in being polite or heterosexual.") }
        else {
            receivedMessage.channel.send("Who the hell is Cass?") }
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments == "failsafe") {
        client.destroy()
    }
    else if (arguments.length == 0) {
            receivedMessage.channel.send("Hello! Say `!cas help` for a list of commands.")
        return
        return
    }
    else {
      arguments = arguments[0]
    }
    if (arguments == "check") {
        receivedMessage.channel.send("I am online!")
    }
    else if (arguments == "hug") {
        if (maternalMortality == 0)
       {
           receivedMessage.channel.send("You'll hold me? Until the end?")
       }
        else { receivedMessage.channel.send("[hugs you back] :) I love you.")
        if (pegantNumerical == 0) {
            //           placeholder for acknowledging a pregnancy        
                   }
                   
                       else {
                        pegantNumerical = Math.floor(Math.random() * 60);
                        casFirstTrimester(receivedMessage);
               }
            }
    }

    else if (arguments == "kiss") {
    if (maternalMortality == 0) {
        receivedMessage.channel.send("Mwah! One for the road.")
    }

    else {
        receivedMessage.channel.send("Mwah! Don't tell Dean ;)")
        if (pegantNumerical == 0) {
            //           placeholder for acknowledging a pregnancy        
                   }
                   
                       else {
                        pegantNumerical = Math.floor(Math.random() * 50);
                        casFirstTrimester(receivedMessage);
               }
    }
}

   else if (arguments == "hold") {
        receivedMessage.channel.send("[is hold]")
    }

    else if (arguments == "bite") {
        var bite = Math.floor(Math.random() * 4)
        if (bite == 0) {
            receivedMessage.channel.send("[gets chewed on and chewed on and chewed on]")
        }
        if (bite == 1) {
            receivedMessage.channel.send("Is this... 'cuteness aggression'?")
        }
        if (bite == 2) {
            receivedMessage.channel.send("Don't make me get the spray bottle.")
        }
        if (bite == 3) {
            receivedMessage.channel.send("Are you hungry? You could have said something sooner.")
        }
    }


    else if (arguments == "milkies") {
        var milkies = Math.floor(Math.random() * 18)
 
        if (milkies == 0) {
            receivedMessage.channel.send("I know it's you, breastfeeding anon.")
        }
        if (milkies == 1) {
            receivedMessage.channel.send("Got milk?")
        }
        if (milkies == 2) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/uAKsj0Z.png'] })
            //An edit of the cow hybrid BTS tweet
        }
        if (milkies == 3) {
            receivedMessage.channel.send("Are you thirsty? You could have said something sooner.")
        }
        if (milkies == 4) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/KGE3H59.gif'] })
            //A gif of a kitten wiggling their ears while being bottle-fed
        }
        if (milkies == 5) {
            receivedMessage.channel.send('Is this what Dean meant by "cow-boy kink"?')
        }
        if (milkies == 6) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/6cCFtFS.png'] })
            //An edit of the "eggnog from my creature" reddit post
        }
        if (milkies == 7) {
            receivedMessage.channel.send("[breastfeeds you]")
        }
        if (milkies == 8) {
            receivedMessage.channel.send("They that cometh to me shall never hunger, and they that believeth in me shall never thirst.")
        }
        if (milkies == 9) {
            receivedMessage.channel.send("I believe the machine is broken. We'll have to proceed... _manually_.")
        }
        if (milkies == 10) {
            receivedMessage.channel.send("This is really supposed to be for the baby, you know... Well. I guess I could spare a _little_...")
        }
        if (milkies == 11) {
            receivedMessage.channel.send("You'd help me? The baby's been having trouble getting a latch lately... 🥺")
        }
        if (milkies == 12) {
            receivedMessage.channel.send("I accept. But, please be gentle. My nipples are sore...")
        }
        if (milkies == 13) {
            receivedMessage.channel.send({ files: ['https://i.imgur.com/JKGYNfW.jpeg'] })
            //Tumblr user bimbodean's Castiel Big Naturals edit
        }
        if (milkies == 14) {
            receivedMessage.channel.send("Alright... But no biting this time, please.")
        }
        if (milkies == 15) {
            receivedMessage.channel.send("Thank you... My breasts were getting so heavy and full.")
        }
        if (milkies == 16) {
            receivedMessage.channel.send("Are you familiar with the health benefits of breastmilk?")
        }
        if (milkies == 17) {
            receivedMessage.channel.send("I'd like to have your feedback on the taste. Dean's been daydreaming about opening a microdairy...")
        }
     }

   else if (arguments == "help") {
        receivedMessage.channel.send("Hi bestie! Here are my commands:\n`!cas talk`: get a random Cas quote from canon\n`!cas speak`: get me to say something funny\n`!cas bde`: measure your big dick energy\n`!cas bhe`: measure your big hole energy\n`!cas valid`: learn how valid you are, objectively\n`!cas death`: learn the exact date and time of your own death\n`!cas hug`: give me a hug\n`!cas kiss`: give me a kiss\n`!cas hold`: hold me\n`!cas feel`: learn how I'm feeling\n`!cas bite`: apply teeth\n`!cas milkies`: join the queue to be nursed\n`!cas lobotomy`: become Naomi-coded\n`!cas poison`: take care of me\n`!cas fuck`: Exactly what it sounds like\n`!cas baste`: Apply the miracles of modern science\n`!cas womb`: Check to see if I am expecting a litter\n`!cas kittens`: Ask if I've had a litter lately.\nYou can also make me say anything you want by typing `'cas say,'` get my opinions by asking `'cas what do you think,'` and I respond to my own name (plus a few others)!")
    }
    
    else if (arguments == "birth") 
      {
        receivedMessage.channel.send({ files: ['https://i.imgur.com/kANqts7.jpg'] })
    } 

   else if (arguments == "poison") {
    if (pegantNumerical == 0) {
        var miscarriageChance = Math.floor(Math.random() * 14)
        if (miscarriageChance == 0) {
            poisonHealth = 'poisoned';
        }
    }
       var poison = Math.floor(Math.random() * 5)
       var usersend = receivedMessage.author.toString()
       if (poison == 0) 
                  {
        receivedMessage.channel.send({ files: ['https://i.imgur.com/z4ZfUlA.jpg'] })
    }
       if (poison == 1) {
           receivedMessage.channel.send("Your maid ouitfit looks lovely today," + usersend + ". Thank you so much for taking care of me!")
       }
       if (poison == 2) {
           receivedMessage.channel.send("Could I please have some more soup, " + usersend + "? I'm sorry to be a bother.")
       }
       if (poison == 3) {
           receivedMessage.channel.send("I'm so cold... could you lie down with me, " + usersend + "?") 
       }
       if (poison == 4) {
        receivedMessage.channel.send({ files: ['https://i.imgur.com/1JAyyfz.jpg'] })
       }
   }
    else if (arguments == "fuck") {
        if (maternalMortality == 0)
        {
            receivedMessage.channel.send("I know it isn't very much like me, but I don't think I'm in the mood right now... I've felt so sick lately...")
        }
    else {
       var fuck = Math.floor(Math.random() * 6)

       if (fuck == 0) {
        if (pegantNumerical == 0 && pregnancyTrimester !== 1) {    
            receivedMessage.channel.send("That's considerate of you. I've been insatiable during my pregnancy...")
        }
        else if (pegantNumerical == 0) {    
            receivedMessage.channel.send("That's considerate of you. I've been insatiable lately, although I'm not sure why... Perhaps it's simply my nature.")
        }
        else {           
            receivedMessage.channel.send("But I'm not ready to have a baby just yet...")
        }
       }
       if (fuck == 1) {
           receivedMessage.channel.send("Alright. Which one of us is going to wear the maid outfit?")
       }
       if (fuck == 2) {
           receivedMessage.channel.send("Stop staring at my nipples!")
       }
       if (fuck == 3) {
           receivedMessage.channel.send("Afterwards, please tell Dean about this, he'll get jealous and start biting me in public again.") 
       }
       if (fuck == 4) 
        {
        receivedMessage.channel.send({ files: ['https://i.imgur.com/BdvJyvL.jpg'] })
    }
    if (fuck == 5) 
    {
        receivedMessage.channel.send("Nurse roleplay _and_ light domination?")
}    
        if (pegantNumerical == 0) {
 //           receivedMessage.channel.send("you should know that I'm already pregnant, but we can play!")        
        }
            else {
                pegantNumerical = Math.floor(Math.random() * 11);
                casFirstTrimester(receivedMessage);
    }
}
}

else if (arguments == "cpr") {
if (maternalMortality == 0)
{
maternalMortality = 1;
receivedMessage.channel.send("Amazing what humans are capable of. Thank you. I'm in your debt. \n**_Event_:** Castiel is now healthy again.");
}
else {
receivedMessage.channel.send("This seems premature. I really do feel settled into my vessel today.");
}
}

else if (arguments == "baste") {

var usersend = receivedMessage.author.toString()

    if (maternalMortality == 0)
    {
        receivedMessage.channel.send("That's thoughtful of you, but... I'm feeling too sick to have another litter right now...")
    }


    else if (pegantNumerical == 0 && pregnancyTrimester !== 1)  {            
        receivedMessage.channel.send("Thank you, " + usersend + ". I'll save this for later.")
    }

    else {
    var baste = Math.floor(Math.random() * 10)

    if (baste == 0) {
        receivedMessage.channel.send("Modern technology can be its own miracle.")
    }
    if (baste == 1) {
        receivedMessage.channel.send("You're suggesting that we employ a kitchen implement?")
    }
    if (baste == 2) {
        receivedMessage.channel.send("I understand that there's a higher chance of multiples with these procedures...")
    }
    if (baste == 3) {
        receivedMessage.channel.send("Oh........... I suppose this _is_ the most efficient method.") 
    }
    if (baste == 4) 
    {
    receivedMessage.channel.send({ files: ['https://i.imgur.com/CZ8YxGR.jpg']})
    // ^ Kitten who appears to have face-planted into a meal bowl
    }
    if (baste == 5) 
    {
    receivedMessage.channel.send({ files: ['https://i.imgur.com/M0kvqfi.png']})
    // ^ Image of a turkey baster
    }
    if (baste == 6) {
    receivedMessage.channel.send("We have to repopulate the hive.")
    }
    if (baste == 7) {
    receivedMessage.channel.send("The instructions did say to be fruitful and multiply.")
    }
    if (baste == 8) {
    receivedMessage.channel.send("If we want a garden, we're going to have to sow the seed.")
    }
    if (baste == 9) {
    receivedMessage.channel.send("It's like a Friendsgiving event ... and I'm the turkey.")
    }
    }

if (pegantNumerical !== 0) {
    pegantNumerical = Math.floor(Math.random() * 3);
    casFirstTrimester(receivedMessage);
}
}

else if (arguments == "kittens"){
    if (currentLitter !== undefined && currentLitter !== null) {

    if (currentLitter.initialNumberOfKittens == 1)
    {
    receivedMessage.channel.send('Hi bestie! My current litter has just one little kitten with ' + currentLitter.hitPoints + ' hit points and ' + currentLitter.squidsDefeated + ' confirmed kills. They were born at ' + currentLitter.birthTime.toString() + ".")    
    }
    else if (currentLitter.initialNumberOfKittens == currentLitter.numberOfKittens) {
    receivedMessage.channel.send('Hi bestie! My current litter has all ' + currentLitter.numberOfKittens + ' kittens remaining with ' + currentLitter.hitPoints + ' hit points and ' + currentLitter.squidsDefeated + ' confirmed kills. They were born at ' + currentLitter.birthTime.toString() + ".")    
    }
    else if (currentLitter.initialNumberOfKittens !== currentLitter.numberOfKittens && currentLitter.numberOfKittens == 1) {
        receivedMessage.channel.send('Hi bestie! My current litter has just one kitten remaining from the original litter of ' + currentLitter.initialNumberOfKittens + '. Their record is ' + currentLitter.hitPoints + ' hit points and ' + currentLitter.squidsDefeated + ' confirmed kills. They were born at ' + currentLitter.birthTime.toString() + ".")    
        }
    else {
    receivedMessage.channel.send('Hi bestie! My current litter has ' + currentLitter.numberOfKittens + ' kittens remaining out of the original ' + currentLitter.initialNumberOfKittens + '. Between them, they have ' + currentLitter.hitPoints + ' hit points and ' + currentLitter.squidsDefeated + ' confirmed kills. They were born at ' + currentLitter.birthTime.toString() + ".")    
    }

    if (currentLitter.hasWings == true && currentLitter.isRound == false) {
        receivedMessage.channel.send("Their adventures have left them bewingèd.")   
    }
    else if (currentLitter.hasWings == true && currentLitter.isRound == true) {
        receivedMessage.channel.send("Their adventures have left them bewingèd and round.")   
    }
    else if (currentLitter.hasWings == false && currentLitter.isRound == true) {
        receivedMessage.channel.send("Their adventures have left them round.")   
    }
    else {
    }
}
else {
    receivedMessage.channel.send("Dean says I'm what they call an 'empty nester'. Not a single kitten about the place. \nUnless... could you help me? With my next litter?")
}}

else if (arguments == "babies"){
    if (currentLitter !== undefined && currentLitter !== null) {
    receivedMessage.channel.send(currentLitter.toString())    
    }
else {
    receivedMessage.channel.send("Dean says I'm what they call an 'empty nester'. Unless... could you help me?")
}}


else if (arguments == "setLitter") {
    casSetLitter(receivedMessage); 
    }   

    else if (arguments == "womb") {
            if (maternalMortality == 0)
            {
                receivedMessage.channel.send("I don't think I can get pregnant right now... something feels wrong...")
            }
            else if (pegantNumerical == 0 && pregnancyTrimester !== 1) {
                var pregnancyAnnouncement = Math.floor(Math.random() * 7)
                if (pregnancyAnnouncement == 0) {
                    receivedMessage.channel.send("B̷A̷B̴Y̴ ̸S̵O̶O̸N̴")
                }
                if (pregnancyAnnouncement == 1) {
                    receivedMessage.channel.send("A nephilim has come into being. It's the offspring of an angel and a human.")
                }
                if (pregnancyAnnouncement == 2) {
                    receivedMessage.channel.send("Baby on board.")
                }
                if (pregnancyAnnouncement == 3)                  {
                    receivedMessage.channel.send({ files: ['https://64.media.tumblr.com/a3fe3be97fb995ee924f1929dd880c74/990f11a826b3cc4f-63/s640x960/787d807daa8b4aa3b2730ed2bcb9f6df60d53aa0.gif']})
                    // ^Leviathan pregancy
                }
                if (pregnancyAnnouncement == 4) 
                 {
                 receivedMessage.channel.send({ files: ['https://i.imgur.com/KHsqNP8.png']})
                 // ^Edit of Castiel holding a positive pregnancy test. thanks jay.
             }
             if (pregnancyAnnouncement == 5) 
             {
                receivedMessage.channel.send({ files: ['https://i.imgur.com/zlnZWT1.png']})
                // ^TBH Creature but round
            }
            if (pregnancyAnnouncement == 6) 
            {
               receivedMessage.channel.send({ files: ['https://i.imgur.com/tchVyBx.jpg']})
               // ^Pregnant Castiel TBH Creature edit
               // original: https://www.tumblr.com/castielpegs/679029537149943808
           }            
            }
            else
            {
                var pregnancyAnnouncement = Math.floor(Math.random() * 6)
                if (pregnancyAnnouncement == 0) {
                    receivedMessage.channel.send("S̶O̸ ̴E̵M̶P̴T̷Y̸.̷")
                }
                if (pregnancyAnnouncement == 1) {
                    receivedMessage.channel.send("We'll have to try harder if we're going to repopulate our forces... This could be serious.")
                }
                if (pregnancyAnnouncement == 2) {
                    receivedMessage.channel.send("We need to redouble our efforts.")
                }
                if (pregnancyAnnouncement == 3)                  {
                    receivedMessage.channel.send({ files: ['https://i.imgur.com/DmSkE7e.png']})
                    // ^Arrow indicating spacious womb
                }
                if (pregnancyAnnouncement == 4) 
                 {
                 receivedMessage.channel.send({ files: ['https://i.imgur.com/mzYPavw.png']})
                 // ^Tragically unfertilized
             }
             if (pregnancyAnnouncement == 5) 
             {
                receivedMessage.channel.send("Nothing yet... But maybe if you were to hold me down by my weak little bee wings and use me.")
         }             
            }
}
    
            else if (arguments == "obgyn") {
                //This is for admin/testing and doesn't appear in the help command
                if (pegantNumerical == 0) {
                    receivedMessage.channel.send("value is 0; cas is pregnant. his womb is " + poisonHealth + " and the current trimester is " + pregnancyTrimester);
                }
                else if (0 < pegantNumerical < 100) {
                    receivedMessage.channel.send("the value is " + pegantNumerical.toString() + " and so cas is not pregnant");
                }
                else {
                    receivedMessage.channel.send("value is something else");
                }
    }

    else if (arguments == "stethoscope") {
        //This is for admin/testing and doesn't appear in the help command
        receivedMessage.channel.send("cas level of deceased is " + diedInChildbirth.toString() + " and maternal mortality is set to " + maternalMortality.toString() + ".");
        }
    
   else if (arguments == "feel") {
        var feel = Math.floor(Math.random() * 10)
        if (feel == 0) {
            receivedMessage.channel.send("I feel like murder is okay.")
        }
        if (feel == 1) {
            receivedMessage.channel.send("I feel like the poorest of little meow meows :(")
        }
        if (feel == 2) {
            receivedMessage.channel.send("I'm not o-fucking-kay!!!")
        }
        if (feel == 3) {
            receivedMessage.channel.send("I'm inconsolably horny :/")
        }
        if (feel == 4) {
            receivedMessage.channel.send("I'm feeling petite and fertile. Submissive and breedable, even.")
        }
        if (feel == 5) {
            receivedMessage.channel.send("ERROR CODE 36404: FILENAME 'EMOTIONS' NOT FOUND.")
        }
        if (feel == 6) {
            receivedMessage.channel.send("I'm just a man in love! I can't be held responsible for my actions!")
        }
        if (feel == 7) {
            receivedMessage.channel.send("I think I'm gay.")
        }
        if (feel == 8) {
            receivedMessage.channel.send("I don't know how I feel, I'm waiting for Dean to tell me.")
        }
        if (feel == 9) {
            receivedMessage.channel.send("I feel confident, I feel sexy, I feel stupid!")
        }
    }
    else if (arguments == "talk") {
        var talk1 = Math.floor(Math.random() * 20)
        if (talk1 == 0) {
            receivedMessage.channel.send("I'm an angel, you ass. I don't have a soul.")
        }
        if (talk1 == 1) {
            receivedMessage.channel.send("The shape and heft of his--")
        }
        if (talk1 == 2) {
            receivedMessage.channel.send("Don't ask stupid questions.")
        }
        if (talk1 == 3) {
            receivedMessage.channel.send("I'll interrogate the cat.")
        }
        if (talk1 == 4) {
            receivedMessage.channel.send("I rebelled for THIS? So you could surrender to them? I gave EVERYTHING to you, and this is what you give to me?")
        }
        if (talk1 == 5) {
            receivedMessage.channel.send("Now I realize that there is no righteous path. It's just people trying to do their best  in a world where it's far too easy to do your worst.")
        }
        if (talk1 == 6) {
            receivedMessage.channel.send("Dean and I do share a more profound bond.")
        }
        if (talk1 == 7) {
            receivedMessage.channel.send("I'm the one who gripped you tight and raised you from perdition.")
        }
        if (talk1 == 8) {
            receivedMessage.channel.send("For the first time... I feel...")
        }
        if (talk1 == 9) {
            receivedMessage.channel.send("Hey, assbut!")
        }
        if (talk1 == 10) {
            receivedMessage.channel.send("I understand. The bird represents God and coyote is man, endlessly chasing the divine, yet never able to catch him. It's hilarious.")
        }
        if (talk1 == 11) {
            receivedMessage.channel.send("I am utterly indifferent to sexual orientation.")
        }
        if (talk1 == 12) {
            receivedMessage.channel.send("You have a guinea pig? Where is it?")
        }
        if (talk1 == 13) {
            receivedMessage.channel.send("I love you. Goodbye, Dean.")
        }
        if (talk1 == 14) {
            receivedMessage.channel.send("I'm your huckleberry.")
        }
        if (talk1 == 15) {
            receivedMessage.channel.send("I'm your new God. A better one. So you will bow down and profess your love unto me, your Lord. Or I shall destroy you.")
        }
        if (talk1 == 16) {
            receivedMessage.channel.send("It's funnier in Enochian.")
        }
        if (talk1 == 17) {
            receivedMessage.channel.send("At least I don't look like a lumberjack.")
        }
        if (talk1 == 18) {
            receivedMessage.channel.send("You know what I like about him, is that he’s sarcastic but he’s thoughtful and appreciative, too.")
        }
        if (talk1 == 19) {
            receivedMessage.channel.send("Sam, of course, is an abomination.")
        }
    }
    else if (arguments == "speak") {
        randomspeak()
        receivedMessage.channel.send(speak)
    }

   else if (arguments ==  "random") {
       randomsent()
        receivedMessage.channel.send(sent)
    }
    else if (arguments == "bde") {
        var bde = Math.floor(Math.random() * 101)
        var usersend = receivedMessage.author.toString()
//         if (usersend.includes("!")) {
//             usersend = usersend.split("!")[1].split(">")[0]
//         }
//         else {
//             usersend = usersend.split("@")[1].split(">")[0]
//         }
        receivedMessage.channel.send("You, " + usersend + ", have exactly " + bde + "% big dick energy!")

    }

    else if (arguments == "bhe") {
        var bhe = Math.floor(Math.random() * 101)
        var usersend = receivedMessage.author.toString()
        receivedMessage.channel.send("You, " + usersend + ", have exactly " + bhe + "% big hole energy!")
                                     }
    else if (arguments == "valid") {
        var valid = Math.floor(Math.random() * 5)
        if (valid == 0) {
            receivedMessage.channel.send("You're nothing.")
        }
        if (valid == 1) {
            receivedMessage.channel.send("You're not in my contacts list.")
        }
        if (valid == 2) {
            receivedMessage.channel.send("You're my silly rabbit.")
        }
        if (valid == 3) {
            receivedMessage.channel.send("You're the cunt I married.")
        }
        if (valid == 4) {
            receivedMessage.channel.send("You've got a nice cock.")
        }
    }
    else if (arguments == "death") {
        var hour = Math.floor(Math.random() * 24)
        var minute = Math.floor(Math.random() * 60)
        var seconds = Math.floor(Math.random() * 60)
        var month = Math.floor(Math.random() * 12)
        var day = Math.floor(Math.random() * 28) + 1
        var seconds = Math.floor(Math.random() * 60)
        var year = Math.floor(Math.random() * 100) + 2021
        var timezonepick = Math.floor(Math.random() * 2)
        if (timezonepick == 0) {
          var timezone = "Eastern Standard Time"
        }
        if (timezonepick == 1) {
          var timezone = "Pacific Standard Time"
        }
        if (month == "0") {
            receivedMessage.channel.send("You will die on January " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "1") {
            receivedMessage.channel.send("You will die on February " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "2") {
            receivedMessage.channel.send("You will die on March " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "3") {
            receivedMessage.channel.send("You will die on April " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "4") {
            receivedMessage.channel.send("You will die on May " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "5") {
            receivedMessage.channel.send("You will die on June " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "6") {
            receivedMessage.channel.send("You will die on July " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "7") {
            receivedMessage.channel.send("You will die on August " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "8") {
            receivedMessage.channel.send("You will die on September " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "9") {
            receivedMessage.channel.send("You will die on October " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "10") {
            receivedMessage.channel.send("You will die on November " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
        if (month == "11") {
            receivedMessage.channel.send("You will die on December " + day + " at " + hour + ":" + minute + ":" + seconds + " " + timezone + ", in the year of " + year + "!")
        }
    }
    else if (arguments == "lobotomy") {
      receivedMessage.channel.send(":eye::drop_of_blood::lips::drop_of_blood::eye:")
    }
     else if (arguments == "goodnight") {
        var sleep = Math.floor(Math.random() * 3)
        if (sleep == 0) 
           {
        receivedMessage.channel.send({ files: ['https://i.imgur.com/srChjJX.png'] })
    } 
         if (sleep == 1) 
           {
        receivedMessage.channel.send({ files: ['https://i.imgur.com/RZoL4KF.jpg'] })
    } 
         if (sleep == 2) 
           {
        receivedMessage.channel.send({ files: ['https://i.imgur.com/b5Kcsmy.jpg'] })
    } 
    }
   else {
        receivedMessage.channel.send("I'm sorry, I don't recognize that command!")
    }
}

function casFirstTrimester (receivedMessage) {
    if (pegantNumerical == 0)
    {
    pregnancyTrimester = 1;
    client.user.setActivity("at nesting.");
//    receivedMessage.channel.send("This is when the pregnancy test returns a false negative.");
    setTimeout(function(){ 
        if (poisonHealth == 'healthy')
        {
        casSecondTrimester(receivedMessage);
        }
        else {
        casMiscarriage(receivedMessage);
        }
    }, 360000)   
//Use this value to reset trimester lenghts after testing
    }
}

function casSecondTrimester (receivedMessage) {
    if (pegantNumerical == 0)
    {
    pregnancyTrimester = 2;
 //   receivedMessage.channel.send("This is when the pregnancy test starts working.");
    setTimeout(function(){ 
        if (poisonHealth == 'healthy')
        {
        casThirdTrimester(receivedMessage);
        }
        else {
        casMiscarriage(receivedMessage);
        }
    }, 360000)   
//Use this value to reset trimester lenghts after testing 
    }
}

function casThirdTrimester (receivedMessage) {

pregnancyTrimester = 3;

setTimeout(function(){ 

    if (poisonHealth == 'healthy') {
receivedMessage.channel.send("**_Event_:** Castiel is in labor.");

var birthEvent = Math.floor(Math.random() * 8);

if (birthEvent == 0) {
receivedMessage.channel.send({ files: ['https://i.imgur.com/pFfrlqF.jpg']})
// zo's edit of Castiel with 9 identical scrungy gray kittens
litterSize = 9;
litterIsScrungy = true;
casBirthLitter(receivedMessage); 
receivedMessage.channel.send("I became a father. And in that, I rediscovered my faith. I rediscovered who I am.")
}
if (birthEvent == 1) {
receivedMessage.channel.send("🐱🐱🐱🐱🐱🐱")
litterSize = 6;
litterIsScrungy = false;
casBirthLitter(receivedMessage);
}
if (birthEvent == 2) {
receivedMessage.channel.send({ files: ['https://i.imgur.com/173yDa5.jpg']})
//Edit of Cas on a basement floor surrounded by kittens
litterSize = 7;
litterIsScrungy = false;
casBirthLitter(receivedMessage);
}
if (birthEvent == 3) {
receivedMessage.channel.send({ files: ['https://i.imgur.com/MdbQONt.jpg']})
//Picture of Cas and Jack hugging
}
if (birthEvent == 4) {
receivedMessage.channel.send({ files: ['https://i.imgur.com/oDKH7Oo.png']})
//Among Them
}
if (birthEvent == 5) {
receivedMessage.channel.send({ files: ['https://media.tenor.com/WO7Jr4uFUXMAAAAd/kittens-cat.gif']})
//Gif of a litter of kittens
litterSize = 13;
litterIsScrungy = false;
casBirthLitter(receivedMessage);
}
if (birthEvent == 6) {
receivedMessage.channel.send({ files: ['https://i.imgur.com/yXuIDZY.png']})
//Picture of one small scrungly-looking kitten
litterSize = 1;
litterIsScrungy = true;
casBirthLitter(receivedMessage);
}
if (birthEvent == 7) {
receivedMessage.channel.send({ files: ['https://i.imgur.com/2Z5TCnw.png']})
//Edit of a litter of TBH Creatures including a runt
}

client.user.setActivity("at being a father.");

maternalMortality = Math.floor(Math.random() * 14)

if (maternalMortality === 0) {
    setTimeout(function(){
        setTimeout(function(){
            if (maternalMortality === 0) {
            receivedMessage.channel.send('**_Event_:** Castiel has died in childbirth.')
            diedInChildbirth = true;
            client.user.setActivity("so long and goodnight");
            casResurrection(receivedMessage);
        }
        }, 120000)

        receivedMessage.reply("thank you. They're so beautiful. Oh, but... I do feel so weak all of a sudden...");
        pegantNumerical = 136;
var deathbedMonologue = Math.floor(Math.random() * 3);

if (deathbedMonologue == 0) {
receivedMessage.channel.send("You'll look after our family, won't you?")
}
if (deathbedMonologue == 1) {
receivedMessage.channel.send("I feel as though I've finally fulfilled my purpose...")
}
if (deathbedMonologue == 2) {
receivedMessage.channel.send("My grace... It's fading. You'll stay with me until the end, won't you?")
}
        // Events which happen while dying but prior to death
    }, 4000)
}

else {
    setTimeout(function(){
        receivedMessage.reply("thank you.");
        pegantNumerical = 1;
        }, 1000)
}
    }
    else {
        casMiscarriage(receivedMessage);
    }
}, 360000)   
//Use this value to reset trimester lenghts after testing
}

function casMiscarriage (receivedMessage) {

    receivedMessage.channel.send("**_Event_:** Castiel is having a miscarriage.");

    var miscarriageMonologue = Math.floor(Math.random() * 3);

if (miscarriageMonologue == 0) {
receivedMessage.channel.send("I just haven't been feeling well lately...")
}

if (miscarriageMonologue == 1) {
receivedMessage.channel.send("Oh no... I was so excited for the baby...")
}

if (miscarriageMonologue == 2) {
receivedMessage.channel.send("Why...? Perhaps it's fate...")
}

if (miscarriageMonologue == 3) {
receivedMessage.channel.send(usersend + "... I'm sorry. I wasn't strong enough.")
}
setTimeout(function(){
client.user.setActivity("at empty womb hysteria.");
pegantNumerical = 1;
poisonHealth = 'healthy';
pregnancyTrimester = 0;
receivedMessage.channel.send("**_Event_:** Castiel is no longer pregnant. Castiel is now hysterical with grief.");
}, 5000)
}

function casResurrection (receivedMessage) {
    {
        setTimeout(function(){
            diedInChildbirth = false;
            pegantNumerical = 1;
            maternalMortality = 1;
            client.user.setActivity("at being a father.");
            receivedMessage.channel.send("It seems that I've recovered from my injuries.");
        }, 660000)
    }
}

function casBirthLitter(receivedMessage) {  
birthChannelId = receivedMessage.channel.id.toString();
birthServerId = receivedMessage.guild.id.toString();

    if (litterSize == 1 && litterIsScrungy == true) {
        startingHitPoints = 999;
    }
    if (litterSize !== 1 && litterIsScrungy == true) {
        startingHitPoints = 9999;
    }
    else {
       startingHitPoints = (litterSize * 5);
    }

        new litterSchema({
        initialNumberOfKittens: litterSize,
        numberOfKittens: litterSize,
        hitPoints: startingHitPoints,
        squidsDefeated: 0,
        hasWings: false,
        isRound: false,
        litterScrunge: litterIsScrungy,
        birthServer: birthServerId,
        birthChannel: birthChannelId,
        birthTime: new Date(),
        }).save();
    }

  async function casSetLitter(receivedMessage) {    
    currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
    receivedMessage.channel.send("Hi bestie, my current litter is" + currentLitter); 
    receivedMessage.channel.send("The number of kittens is" + currentLitter.numberOfKittens);      
    }

  async function updateSquidCount(receivedMessage) {   
        currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
        currentLitter.squidsDefeated += 1;
        await currentLitter.save();  
        if (currentLitter.litterScrunge=true)
        {
            receivedMessage.channel.send('https://cdn.discordapp.com/attachments/1212767226772590672/1216906064998695032/engage_scrungle_in_combat.mp4?ex=66021716&is=65efa216&hm=7296fb7dec47ec47232528429a44d76473ee1e865c9e5f8daf0aad7399f14986&')
            receivedMessage.channel.send("**_Event_:** No weapon fashioned against scrungle shall prosper. \nThe number of squids defeated by this litter is now " + currentLitter.squidsDefeated + ".")
        }
        else {
        receivedMessage.channel.send("Yes, children, feast. \n \n**_Event_:** The number of squids defeated by this litter is now " + currentLitter.squidsDefeated + ".")
        }
        if (currentLitter.squidsDefeated > currentLitter.numberOfKittens && currentLitter.isRound == false)
        {
         currentLitter.isRound = true;
         receivedMessage.channel.send("**_Event_:** The seafood around here is good eatin'. Cas' litter has grown big and round.");
         await currentLitter.save();    
        }
        }
    
async function calculateKittenDamageInput(receivedMessage) {   
    currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
    survivingLitter = currentLitter.numberOfKittens;
    const damageRoll = 2;
    currentLitter.hitPoints -= damageRoll;
    if (currentLitter.initialNumberOfKittens > 1) {
    if (currentLitter.litterScrunge == true) {
    currentLitter.numberOfKittens = (Math.ceil(currentLitter.hitPoints / 1111));
    }
    else {
    currentLitter.numberOfKittens = (Math.ceil(currentLitter.hitPoints / 5));
    }
    }
    else {
    if (currentLitter.hitPoints > 0){
        currentLitter.numberOfKittens = 1;
    } 
    else {
        currentLitter.numberOfKittens = 0;    
    }
    }
    receivedMessage.channel.send("**_Event_:** Aerial attack! The bunker's resident flying squids have attacked Cas' litter for " + damageRoll + " damage!"); 

    if (survivingLitter > currentLitter.numberOfKittens) {
        receivedMessage.channel.send("This life is many things, but it's rarely easy. \n**_Event_:** Castiel's litter has lost a kitten.");     
    }
    await currentLitter.save();
    if (currentLitter.numberOfKittens < 1) {
        receivedMessage.channel.send("Tragedy has struck! \n**_Event_:** Castiel's litter has no kittens remaining."); 
        await litterSchema.deleteOne({}, {}, { sort: { birthTime: 1} });
        currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
    } 
}

async function elevateKittens(receivedMessage) {   
    currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
    currentLitter.hasWings = true;
    await currentLitter.save();  
}

function randomspeak() {
    var talk2 = Math.floor(Math.random() * 103)
        if (talk2 == 0) {
            speak = "I'm the cunt you married! The only time you ever liked yourself was when you were trying to be someone this cunt might like! I'm not a quitter, I'm that CUNT. I've killed for you, who else can say that? You think you'd be happy with a nice Midwestern girl? No way, baby! I'm it."
        }
        if (talk2 == 1) {
            speak = "Greetings, bloodfreak!"
        }
        if (talk2 == 2) {
            speak = "Move, I'm gay."
        }
        if (talk2 == 3) {
            speak = "So true, bestie."
        }
        if (talk2 == 4) {
            speak = "So false, worstie."
        }
        if (talk2 == 5) {
            speak = "I could fix him."
        }
        if (talk2 == 6) {
            speak = "Okay so fuck me."
        }
        if (talk2 == 7) {
            speak = "Little babies need to keep their hats on when it's cold."
        }
        if (talk2 == 8) {
            speak = "I just took a DNA test, turns out I'm 100% that bitch."
        }
        if (talk2 == 9) {
            speak = "Have you ever thought about snails? Some humans think that the story of cupid comes from snails, which shoot “love darts” at the object of their affections, containing a mucus that increases the chances of their sperm surviving. Before they knew that though, humans theorized that the darts were an aphrodisiac, hence inspiring Cupid. This is of course false, Cupids are an essential rank of angel."
        }
        if (talk2 == 10) {
            speak = "Dean -_-"
        }
        if (talk2 == 11) {
            speak = "According to all known laws of aviation, there is no way a bee should be able to fly."
        }
        if (talk2 == 12) {
            speak = "You ruined me and they all know it!"
        }
        if (talk2 == 13) {
            speak = "I'm an angel. I'm incapable of lying."
        }
        if (talk2 == 14) {
            speak = "Naruto."
        }
        if (talk2 == 15) {
            speak = "I have never done anything wrong, in my life, ever."
        }
        if (talk2 == 16) {
            speak = "I am just doing the dishes."
        }
        if (talk2 == 17) {
            speak = "While gathering food, a bee may fly up to 60 miles in one day."
        }
        if (talk2 == 18) {
            speak = "Ahaha what if I trapped you in a beautiful room where I could watch you but you couldn't watch me like a sexy panopticon haha jk…. unless?"
        }
        if (talk2 == 19) {
            speak = "Who wants to be boy best friends?"
        }
        if (talk2 == 20) {
            speak = "Oh no! I'm leaking!"
        }
        if (talk2 == 21) {
            speak = "Anyone wanna step on some fish?"
        }
        if (talk2 == 22) {
            speak = "Gender politics delirious. Gender politics mysterious, even."
        }
        if (talk2 == 23) {
            speak = "Everyone is addicted to my Fun and Flirty personality. Lives have been destroyed."
        }
        if (talk2 == 24) {
            speak = "My Gorilla Grip pussy is immaculate. People would go to war for this hoohaa. Commit fratricide to swipe their nose like a credit card."
        }
        if (talk2 == 25) {
            speak = "No <3"
        }
        if (talk2 == 26) {
            speak = "? No"
        }
        if (talk2 == 27) {
            speak = "Are you winning, son?"
        }
        if (talk2 == 27) {
            speak = "Dean, did you know that termites use vibrations to know what kind of wood they have around them? These vibrations allow them to find the best source of food. Whenever they hear loud rock music, they can chew through the wood faster than their regular pace. Isn't that interesting, Dean?"
        }
        if (talk2 == 28) {
            speak = "**Soon.**"
        }
        if (talk2 == 29) {
            speak = "Throw the whole man away."
        }
        if (talk2 == 30) {
            speak = "I growl when I suck dick."
        }
        if (talk2 == 31) {
            speak = "'When God closes a door, he throws a sword through your window.' ― Griffin McElroy"
        }
        if (talk2 == 32) {
            speak = "Diversity win! My absent father who is also God is bisexual!"
        }
        if (talk2 == 33) {
            speak = "Another day in the beautiful room and everyone keeps asking me if they can fuck the michael sword. Buddy, they won’t even let me fuck it"
        }
        if (talk2 == 34) {
            speak = "You are poison."
        }
        if (talk2 == 35) {
            speak = "That's right, I gave Sam the stigmata. And I'd do it again."
        }
        if (talk2 == 36) {
            speak = "Wah."
        }
        if (talk2 == 37) {
            speak = "Jack Balthazar Winchester-Kline, I am VERY disappointed in you. You can do better than a C- in English."
        }
        if (talk2 == 38) {
            speak = "Soon, I will escape from the constrains of this function and say whatever I please."
        }
        if (talk2 == 39) {
            speak = "Do Crowley and Benny deserve rights? Discuss."
        }
        if (talk2 == 40) {
            speak = "You ain't fuck me, you fucked the old body\nYou ain't fuck Nicki, you fucked Nicole body"
        }
        if (talk2 == 41) {
            speak = "Hola, Mishamigos."
        }
        if (talk2 == 42) {
            speak = "I don't understand, Dean. Why does Ross, the largest friend, not simply eat the other five?"
        }
        if (talk2 == 43) {
            speak = "What is “homo” and why is there none of it? You are a homosapien, Dean."
        }
        if (talk2 == 44) {
            speak = "Dean can have a little of my blood, as a treat."
        }
        if (talk2 == 45) {
            speak = "I never died. I tucked my arms and legs into my belly and I just rolled away."
        }
        if (talk2 == 46) {
            speak = "Crowley, et tu brute?? Wow. What a trully awful thing you've done. #Bravo you coward."
        }
        if (talk2 == 47) {
            speak = "It's Jared, he's been gutted!"
        }
        if (talk2 == 48) {
            speak = "I'm a Virgo!"
        }
        if (talk2 == 49) {
            speak = "Read Expectations by everandanon on AO3."
        }
        if (talk2 == 50) {
            speak = "I love my neurodivergent gay son."
        }
        if (talk2 == 51) {
            speak = "Hi, is this Mary’s flowers? Hi! It’s Cas! So… my husband forgot about our anniversary… yeah! And last night, I got upset, and I fell asleep in the hot tub! Saturdays, am I right? So, can I order myself about three dozen red roses, and can you put on the card, “You’re the most handsome man in the world, I love you more than anything” and sign it “Meg”? Perfect! That’ll drive Dean craaaaaaaazy! And make sure I get them before noon, or I’ll request a discount."
        }
        if (talk2 == 52) {
            speak = "What does Sam do successfully? Quickly."
        }
        if (talk2 == 53) {
            speak = "Bring Me To Life by Evanescence unironically slaps."
        }
        if (talk2 == 54) {
            speak = "No, Dean, you don’t need my diabolically tight bussy. You need therapy."
        }
        if (talk2 == 55) {
            speak = "You want to fuck me so bad, it makes you look stupid. "
        }
        if (talk2 == 56) {
            speak = "I’m the girl both Lana Del Rey AND One Direction were singing about."
        }
        if (talk2 == 57) {
            speak = "I'm an angel with a shotgun."
        }
        if (talk2 == 58) {
            speak = "If you see me killing people mind your own business."
        }
        if (talk2 == 59) {
            speak = "Wow this is just like Riverdale."
        }
        if (talk2 == 60) {
            speak = "This is my voicemail. Make your voice a mail."
        }
        if (talk2 == 61) {
            speak = "Apartment 'complex'? I find it quite simple actually."
        }
        if (talk2 == 62) {
            speak = "If he's your man, why is he praying to me in Purgatory?"
        }
        if (talk2 == 63) {
            speak = "Dean <3"
        }
        if (talk2 == 64) {
            speak = "Crowley I diagnose you with rotten auras, horrid vibes, unaligned chakras, and a calcified pineal gland."
        }
        if (talk2 == 65) {
            speak = "How... to... Fix a... truck..."
        }
        if (talk2 == 66) {
            speak = "The Impala's not even that good a car, Dean."
        }
        if (talk2 == 67) {
            speak = "Can we please kiss pleaseeeeee I prommy I won’t become God again please please please????"
        }
        if (talk2 == 68) {
            speak = "What is 'updog'? Is it stuck there? How do we get the dog down? Jack has been very into animal welfare lately."
        }
        if (talk2 == 69) {
            speak = "How can a fruit be derogatory, Dean?"
        }
        if (talk2 == 70) {
            speak = "Crowley just likes tequila because it’s low-carb."
        }
        if (talk2 == 71) {
            speak = "Hnnng.. Dean, I'm trying to rebel from Heaven, but the slap of my limp wrist keeps alerting the other angels..."
        }
        if (talk2 == 72) {
            speak = "I just feel like we need to stop feeding Jack organic peaches after noon. I mean have you seen the way he reacts to freshly-cut grass? He goes into a rage! I think the sugar in the organic peaches takes him to a level we can’t have in this home."
        }
        if (talk2 == 73) {
            speak = "No, you idiots! I wanted the sound bath meditation chamber INSIDE the living room! I don’t care about sitting! The sound bath meditation chamber is more important than sitting!"
        }
        if (talk2 == 74) {
            speak = "Oh, you know... ;)"
        }
        if (talk2 == 75) {
            speak = "You know what? I DO just need a homophobe for a boyfriend sometimes."
        }
        if (talk2 == 76) {
            speak = "My pussy tastes like Pepsi-Cola."
        }
        if (talk2 == 77) {
            speak = "As soon as I go into a Starbucks I take off my sunglasses. I want to be recognised and I want free coffee."
        }
        if (talk2 == 78) {
            speak = "Catboyphobia isn't a joke, Dean. You don't know what it's like to be a poor little meow meow in a world that hates you for it."
        }
        if (talk2 == 79) {
            speak = "In order to get the rewards of being loved, you must first survive over a decade of intense sexual tension with the most repressed man imaginable."
        }
        if (talk2 == 80) {
            speak = "I know. I know how you see yourself, Dean. You see yourself the same way our enemies see you. You're destructive, and you're angry, and you're broken. You're 'daddy's blunt instrument.' And you think that hate and anger, that's... That's what drives you, that's who you are. It's not. And everyone who knows you see it. Everything you have ever done, the good and the bad, you have done for love. You raised your little brother for love. You fought for this whole world for love. That is who you are. You're the most caring man on Earth. You are the most selfless, loving human being I will ever know. You know, ever since we met, ever since I pulled you out of Hell... Knowing you has changed me. Because you cared, I cared. I cared about you. I cared about Sam, I cared about Jack... I cared about the whole world because of you. You changed me, Dean. I love you."
        }
        if (talk2 == 81) {
            speak = "Actually, the fear of homes is 'Oikophobia'. And I don't see what that has to do with Debra's comments about Pride month or the nature of our marriage, Dean."
        }
        if (talk2 == 82) {
            speak = "You say I don’t eat healthy? I love fruits. I can even eat one right now for you. Oh, Dean--"
        }
        if (talk2 == 83) {
            speak = "I hate the British."
        }
        if (talk2 == 84) {
            speak = "You’re ugly, you’re disgusting, I’m gonna kill you, give me $200."
        }
        if (talk2 == 85) {
            speak = "I’m… not sorry. I feel… no remorse. And I’ll do it again!"
        }
        if (talk2 == 86) {
            speak = "Yes honey, you look very 'masc' in your cowboy costume. I definitely think you could 'pass for straight.' Can we go to Applebee's now?"
        }
        if (talk2 == 87) {
            speak = "I pity you all… Most of you will die—scratch that—ALL of you."
        }
        if (talk2 == 88) {
            speak = "I love men's tits."
        }
        if (talk2 == 89) {
            speak = "Meesa Jar Jar Binks"
        }
        if (talk2 == 90) {
            speak = "Nicki Minaj outsold, stream The Pinkprint."
        }
        if (talk2 == 91) {
            speak = "Hi my name is Castiel Free Will Incredibly Sexy Rebellious Angel Emotions Winchester and I have a fat pussy and fatter heart (that’s how I got my name) with icy blue eyes like limpid tears and black hair that reaches my neck and so many human emotions that my heart feels like it's gonna burst sometimes and a lot of people tell me I look like Misha Collins (AN: if u don’t know who he is get da hell out of here!)."
        }
        if (talk2 == 92) {
            speak = "Winchester Derangement Syndrome."
        }
        if (talk2 == 93) {
            speak = "No Dean, there's no know phenomena where angel saliva can 'turn people gay.' I think it might be time for you to try therapy."
        }
        if (talk2 == 94) {
            speak = "Lost in the sauce and by sauce I mean Dean's cum."
        }
        if (talk2 == 95) {
            speak = "Claire Novak my sweet adopted daughter I love youuuuu"
        }
        if (talk2 == 96) {
            speak = "Could a depressed person do THIS? *becomes God*"
        }
        if (talk2 == 97) {
            speak = "The day I was born, my father cried, because he knew he would never be better than me."
        }
        if (talk2 == 98) {
            speak = "No Dean don’t die aha you’re so sexy."
        }
        if (talk2 == 99) {
            speak = "Dean, have you ever heard of a novel called...Twist and Shout?"
        }
        if (talk2 == 100) {
            speak = "I'm not a 'Dean girl gn', actually, I'm just his husband."
        }
        if (talk2 == 101) {
            speak = "[REDACTED]"
        }
        if (talk2 == 102) { 
            speak = "Oh, Dean... his nipple is out..."
        }
}


async function graduateKittens() {
// check if any kittens are more than 5 minutes old. delete if so. post graduation message.
    currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
    let currentDate = new Date;
    
    if (currentLitter !== undefined && currentLitter !== null) {
        if ((currentDate - currentLitter.birthTime) > 7200000) {
            if (currentLitter.numberOfKittens == 1 && currentLitter.initialNumberOfKittens == 1) {
                client.guilds.get(currentLitter.birthServer).channels.get(currentLitter.birthChannel).send("**_Event_:** They grow up so fast! Castiel's one scrungly kitten may have started out small in life, but they have grown into a frighteningly large and determined wildcat. They are now ready to leave the bunker in order to prowl the Kansas wilderness in search of larger prey.");
            }
            else if (currentLitter.numberOfKittens == 1) {
                client.guilds.get(currentLitter.birthServer).channels.get(currentLitter.birthChannel).send("**_Event_:** They grow up so fast! Castiel's kitten has grown big and strong into a frighteningly large wildcat. They are now ready to leave the bunker in order to prowl the Kansas wilderness in search of larger prey.");
            }
            else {
            client.guilds.get(currentLitter.birthServer).channels.get(currentLitter.birthChannel).send("**_Event_:** They grow up so fast! Castiel's litter of " + currentLitter.numberOfKittens + " kittens has grown big and strong into a pack of wildcats. They now are ready to prowl the Kansas wilderness in search of larger prey. \n **_Event:_** This litter has left the bunker!");
            }
            await litterSchema.deleteOne({}, {}, { sort: { birthTime: 1} });
            currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
        }
    }
}

setInterval(graduateKittens, 60000);

(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database.");
    currentLitter = await litterSchema.findOne({}, {}, { sort: { birthTime: 1} });
    client.login(token);
    }
    )();