// Game states
// "WIN" - player has defeated all robots
// *Fight all enemy robots
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// create function
var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive 
    while(playerInfo.health > 0 && enemy.health > 0) {
      // place fight function code block here . . .

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
// if player chooses to fight
    if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subract money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
    }
}

        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health + " health remaining. "
    );

    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died! ");
        //award player for winning
        playerInfo.money = playerInfo.money + 20
        break;
    }
    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left");
    }
    // Subtract the value of `enemy.attack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    
    playerInfo.health = Math.max(0,playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health remaining. "
    );

    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left ")
    }
   }
    };


// exectute function
var startGame = function () {
    // reset players stats
    playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];
    // reset enemy health before starting to fight
    var pickedEnemyObj = randomNumber(40,60);
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);
    // if we're not at the last enemy in in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert ("Great job, you've survived the game! You now have a score of " + playerInfo.money + " . ");
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
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
  
    // use switch case to carry out action
    switch (shopOptionPrompt) {
      case 'REFILL':
      case 'refill':
        playerInfo.refillHealth();
        break;
      case 'UPGRADE':
      case 'upgrade':
        playerInfo.upgradeAttack();
        break;
      case 'LEAVE':
      case 'leave':
        window.alert('Leaving the store.');
  
        // do nothing, so function will end
        break;
      default:
        window.alert('You did not pick a valid option. Try again.');
  
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
  };

  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
    else {
        window.alert("You don't have enough money!");
    }
},
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert ("Upgrading player's attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert ("You don't have enough money!");
        }
    }
},

//console.log(playerName, playerAttack, playerHealth);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);


startGame();