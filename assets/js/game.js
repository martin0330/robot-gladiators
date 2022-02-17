// Game states
// "WIN" - player has defeated all robots
// *Fight all enemy robots
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble" ];
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while(playerHealth > 0 && enemyHealth > 0) {
      // place fight function code block here . . .

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
// if player chooses to fight
    if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subract money for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
    }
}

        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
        //award player for winning
        playerMoney = playerMoney + 20
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    
    playerHealth = Math.max(0,playerHealth - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left ")
    }
   }
    };


// exectute function
var startGame = function () {
    // reset players stats
    playerHealth = 100;
    playerMoney = 10;
    playerAttack = 10;
for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    // reset enemy health before starting to fight
    enemyHealth = randomNumber(40,60);
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    // if we're not at the last enemy in in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm (" The fight is over, visit the store before the next round? ")
        // if yes, take them to store function
        if (storeConfirm) {
            shop() ;
        }
    }
}
    else {
        window.alert("You have lost your robot in battle! Game Over!");
    } 
}
    // after loop ends, player is either out of health or enemies to fight, so run endgame function
    endGame (); 
}

var endGame = function () {
   // if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert ("Great job, you've survived the game! You now have a score of " + playerMoney + " . ");
    }
    else {
        window.alert ("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


var shop = function() {
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
    );

    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars. ")
            
            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert ("You don't have enough money!");
            }
            break;
        case "upgrade" :
        case "UPGRADE" :
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars. ")
            
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store. ");
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again. ");
            shop();
            break;
    }
};
startGame();