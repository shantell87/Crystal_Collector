//crystal variables
var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    pink: {
        name: "Pink",
        value: 0
    },
    purple: {
        name: "Purple",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    },
};

//score variables
var currentScore = 0;
var targetScore = 0;

//count wins and losses
var winCount = 0;
var lossCount = 0;


//user choice key press//functions
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//starts and restarts the game
var startGame = function () {
    //reset the current score//set a new target score when game restarts
    currentScore = 0;
    targetScore = getRandom(20, 100);

    //crystal values
    crystal.blue.value = getRandom(1, 25);
    crystal.pink.value = getRandom(1, 25);
    crystal.purple.value = getRandom(1, 25);
    crystal.yellow.value = getRandom(1, 25);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
}

//button click events for each crystal//random value for each crystal
var addValues = function (crystal) {
    currentScore = currentScore + crystal.value;
    $("#yourScore").html(currentScore);
    checkWin();
}

//check to see if user won the game
var checkWin = function () {
    //Check if user when/losses, reset the game.
    
     //If userscore is greater than target score, 
    //then alert, add to wincount, reset game.
    if (currentScore === targetScore) {
        alert("Yay! You won!");
        winCount++;
        $("winCount").html(winCount);
        startGame();
    }
    //If userscore is greater than target score, 
    //then alert, add to losscount, reset game.
    else if (currentScore > targetScore) {
        alert("You Lost! Game Over");
        lossCount++;
        $("lossCount").html(lossCount);
        startGame();
    }

}

startGame();

$('#blue').click(function () {
    addValues(crystal.blue);
    // alert("test");
});
$('#pink').click(function () {
    addValues(crystal.pink);
    // alert("test");
});
$('#purple').click(function () {
    addValues(crystal.purple);
    // alert("test");
});
$('#yellow').click(function () {
    addValues(crystal.yellow);
    // alert("test");
});

