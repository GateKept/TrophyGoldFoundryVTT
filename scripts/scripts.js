//Tell Foundry to run this script when a new chatMessage is created by a user
Hooks.on("chatMessage", (html, content, msg) => { 
    
    //Break the message content down into an array, dividing on " "
    let command = content.split(" ").map(function(item) {
      return item.trim();
    })
    
    // Designate what the first "word" of the message needs to be to trigger the command
    if (command[0] == "/risk")
    {
        
        //identify the variables of the command
        let lightDice = command[1];
        let darkDice = command[2];
        
        
        //construct the rolls, including any text you want displayed with the results
        let lightRoll = new Roll("Light " + lightDice + "d6");
        let darkRoll = new Roll("Dark " + darkDice + "d6");
        
        //execute the rolls
        lightRoll.roll();
        darkRoll.roll();
        
        //display the rolls as new messages
        lightRoll.toMessage();
        darkRoll.toMessage();
        
        //tell Foundry not to display the initial message, just the result.
        return false;
    }
    
    else if (command[0] == "/combat")
    {
        
        //identify the variables of the command
        let darkDice = command[1];
        
        
        //construct the rolls, including any text you want displayed with the results
        let combatRoll = new Roll("Combat " + darkDice + "d6kh2");
        
        //execute the rolls
        combatRoll.roll();
        
        //display the rolls as new messages
        combatRoll.toMessage();
        
        //tell Foundry not to display the initial message, just the result.
        return false;
    }
    
    else if (command[0] == "/loot")
    {
        
        //identify the variables of the command
        let lightDice = command[1];
        
        
        //construct the rolls, including any text you want displayed with the results
        let lootRoll = new Roll("Loot " + lightDice + "d6");
        
        //execute the rolls
        lootRoll.roll();
        
        //display the rolls as new messages
        lootRoll.toMessage();
        
        //tell Foundry not to display the initial message, just the result.
        return false;
    }
    
    //let foundry continue as normal if the chatMessage didn't contain any listed commands
    else
        {
            return;
        }
       })