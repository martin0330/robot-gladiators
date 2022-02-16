// Game states
// "WIN" - player has defeated all robots
// *Fight all enemy robots

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble" ];
var enemyHealth = 50;
var enemyAttack = 12;

//console.log (enemyNames.length);
// for loop
//for(var i = 0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
    
//for (var i = 0; i < enemyNames.length; i++) {
    //debugger;
    // call fight function with enemy-robot
    //fight(enemyNames[i]);
  //}
//}

// create function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while(playerHealth > 0 && enemyHealth > 0) {
      // place fight function code block here . . .
 //fight function statements
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
// if player chooses to fight
    if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subract money for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}
    // if no, ask question to fight again
    //else {
        //fight();
    

    // if (promptFight === "fight" || promptFight === "FIGHT") //{
        enemyHealth = enemyHealth - playerAttack;

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
    playerHealth = playerHealth - enemyAttack
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
        // if no, ask question to fight again
        //else {
            //fight();
        
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
    enemyHealth = 50;
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);}

    else {
        window.alert("You have lost your robot in battle! Game Over!");
    } 
    // after loop ends, player is either out of health or enemies to fight, so run endgame function
    endGame ();
} 
   // play again
   startGame();
}

var endGame = function () {
   // if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert ("Great job, you've survived the game! You now have a score of" + playerMoney + " . ");
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
}
startGame();