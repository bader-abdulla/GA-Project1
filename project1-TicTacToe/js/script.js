
//// Diclarations



let players_inited = false;   // initiated - if choosed a mode or not


let shapex = $("#xbutton");
let shapeo = $("#obutton");

let choices = [ shapex , shapeo ];

let randomshape = Math.floor(Math.random() * choices.length);

// console.log (randomshape);









//// Toggle between the buttons of  "Player vs AI"  and  "Player1 vs Player2"


let typehuman = 10;
let typeai = 20;

let player2type = null;


$("#p-ai-name").hide();

$("#player-ai").click(function() {
    $("#player-player").css({"background-color": "red"})
    $("#player-ai").css({"background-color": "green"})
    $("#p1-p2-name").hide();
    $("#p-ai-name").toggle();
    player2type = typeai;
})



$("#p1-p2-name").hide();

$("#player-player").click(function() {
    $("#player-ai").css({"background-color": "blue"})
    $("#player-player").css({"background-color": "green"})
    $("#p-ai-name").hide();
    $("#p1-p2-name").toggle();
    player2type = typehuman;
})










//// Show player's names after clicking the "done" button



let player1Name = null
let player2Name = null


$('#done0').click(function() {
    player1Name = $('#playerinput').val();
    $("#playername").text("Player: " +  $('#playerinput').val());
})


$('#done1').click(function() {
    player1Name = $('#player1input').val();
    $("#player1name").text("Player1: " +  $('#player1input').val() );
})


$('#done2').click(function() {
    player2Name = $('#player2input').val();
    $("#player2name").text("Player2: " +  $('#player2input').val());
})










//// Choosing shape for (Player vs AI) - random



let player1choice = null;
let aichoice = null;


const player1 = {
    "name"  : "player1",
    "img" : "",
    "id" : 1
};

const ai = {
    "name"  : "ai",
    "img" : "",
    "id" : 2
}


$("#player-ai").click(function() {
    if ( randomshape === 0 ) {
        player1choice = "images/x.png";
        aichoice = "images/o.png";
        $("#xbutton").css({"background-color": "green"});
        $("#shape").append("<p id='playerchosex'> Player chose shape X </p>");
        $("#obutton").css({"background-color": "yellow"});
        $("#shape").append("<p id='aichoseo'> AI chose shape O </p>");
        $("#playerchosex").show();
        $("#aichoseo").show();
    }
    else {
        player1choice = "images/o.png";
        aichoice = "images/x.png";
        $("#obutton").css({"background-color": "green"});
        $("#shape").append("<p id='playerchoseo'> Player chose shape O </p>");
        $("#xbutton").css({"background-color": "yellow"});
        $("#shape").append("<p id='aichosex'> AI chose shape X </p>");
        $("#playerchoseo").show();
        $("#aichosex").show();
    }
    console.log(player1choice)
    console.log(aichoice)
    players_inited = true;
})










//// Choosing shape for (Player1 vs Player2) - random



let player2choice = null;


const player2 = {
    "name"  : "player2",
    "img" : "",
    "id" : 2
}


$("#player-player").click(function() {
    if ( randomshape === 0 ) {
        player1choice = "images/x.png";
        player2choice = "images/o.png";
        $("#xbutton").css({"background-color": "green"});
        $("#shape").append("<p id='player1chosex'> Player1 chose shape X </p>");
        $("#obutton").css({"background-color": "yellow"});
        $("#shape").append("<p id='player2choseo'> Player2 chose shape O </p>");
        $("#player1chosex").show();
        $("#player2choseo").show();
    }
    else {
        player1choice = "images/o.png";
        player2choice = "images/x.png";
        $("#obutton").css({"background-color": "green"});
        $("#shape").append("<p id='player1choseo'> Player1 chose shape O </p>");
        $("#xbutton").css({"background-color": "yellow"});
        $("#shape").append("<p id='player2chosex'> Player2 chose shape X </p>");
        $("#player1choseo").show();
        $("#player2chosex").show();
    }
    console.log(player1choice)
    console.log(player2choice)
    players_inited = true;
})










//// GAME identifiers - logic



let box1 = $(".box1 img");
let box2 = $(".box2 img");
let box3 = $(".box3 img");
let box4 = $(".box4 img");
let box5 = $(".box5 img");
let box6 = $(".box6 img");
let box7 = $(".box7 img");
let box8 = $(".box8 img");
let box9 = $(".box9 img");

let boxes = [ box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9];

function generateRandomNum() {
    return Math.floor(Math.random() * boxes.length);
}

let win = [
    [box1 , box2 , box3] ,
    [box4 , box5 , box6] ,
    [box7 , box8 , box9]
];

// let randomai = Math.floor(Math.random() * boxes.length)
// let aiplay = randomai;

let resultsAlert = 0;




let winSound = new Audio ("win.wav");


// console.log(box1.attr('src'))









//// GAME Functions



function emptyCells ( empty1 , empty2 ) {
    if ( empty1.attr('src') == "images/empty.png"  ||   
    empty2.attr('src') == "images/empty.png") {
        return true;
    }
    return false;
}



function checkWin () {
    for (let i=0  ;  i<3  ;  i++) {
        if ( (win[i][0].attr('src') == win[i][1].attr('src')  && !emptyCells(win[i][0],win[i][1])) &&   
             (win[i][1].attr('src') == win[i][2].attr('src')  && !emptyCells(win[i][1],win[i][2])) ) {
                if ( i === 0 ) {
                    $(".box1").css({"background-color": "lightgrey"});
                    $(".box2").css({"background-color": "lightgrey"});
                    $(".box3").css({"background-color": "lightgrey"});
                }
                if ( i === 1 ) {
                    $(".box4").css({"background-color": "lightgrey"});
                    $(".box5").css({"background-color": "lightgrey"});
                    $(".box6").css({"background-color": "lightgrey"});
                }
                if ( i === 2 ) {
                    $(".box7").css({"background-color": "lightgrey"});
                    $(".box8").css({"background-color": "lightgrey"});
                    $(".box9").css({"background-color": "lightgrey"});
                }
            return true;     // rows
        }
        
        if ( (win[0][i].attr('src') == win[1][i].attr('src')  && !emptyCells(win[0][i],win[1][i])) &&
             (win[1][i].attr('src') == win[2][i].attr('src')  && !emptyCells(win[1][i],win[2][i]))) {
                if ( i === 0 ) {
                    $(".box1").css({"background-color": "lightgrey"});
                    $(".box4").css({"background-color": "lightgrey"});
                    $(".box7").css({"background-color": "lightgrey"});
                }
                if ( i === 1 ) {
                    $(".box2").css({"background-color": "lightgrey"});
                    $(".box5").css({"background-color": "lightgrey"});
                    $(".box8").css({"background-color": "lightgrey"});
                }
                if ( i === 2 ) {
                    $(".box3").css({"background-color": "lightgrey"});
                    $(".box6").css({"background-color": "lightgrey"});
                    $(".box9").css({"background-color": "lightgrey"});
                }
                return true;     // columns
        }
    }
    if ( (win[0][0].attr('src') == win[1][1].attr('src') && !emptyCells(win[0][0],win[1][1]))  &&   
         (win[1][1].attr('src') == win[2][2].attr('src') && !emptyCells(win[1][1],win[2][2])) ) {
                $(".box1").css({"background-color": "lightgrey"});
                $(".box5").css({"background-color": "lightgrey"});
                $(".box9").css({"background-color": "lightgrey"});
            return true;     // diagonal1
    }
    
    if ( (win[0][2].attr('src') == win[1][1].attr('src') && !emptyCells(win[0][2],win[1][1]))  &&   
         (win[1][1].attr('src') == win[2][0].attr('src') && !emptyCells(win[1][1],win[2][0])) ) {
                $(".box3").css({"background-color": "lightgrey"});
                $(".box5").css({"background-color": "lightgrey"});
                $(".box7").css({"background-color": "lightgrey"});
            return true;     // diagonal2
    }

    return false;
}



function allCellsNotEmpty () {
    for (let i=0  ;  i<9  ;  i++) {
        if ( boxes[i].attr('src') === "images/empty.png" ) {
            return true;
        }
    }
    return false;
}



function checkDraw() {
    if (allCellsNotEmpty() === false  &&  checkWin() === false) {
        return true;
    }
}



function winSoundPlay () {
    return winSound.play();
}








//// GAME Commands



let player1Turn = 1;
let player2Turn = 2;


let currentPlayers = player1Turn;


function changeTurn (imgJQueryKey){
    
    if (currentPlayers == player1Turn) {
        $(imgJQueryKey).attr('src', player1choice);

        let tries = 0;
        let done = false;

        if ( player2type == typeai ) {
            while (done == false) {
                let randomBoxId = generateRandomNum();
                console.log(randomBoxId);
                // console.log (id)
                let jQueryKey = '.' + "box" + randomBoxId;
                // console.log(jQueryKey)
                let aiImgJQueryKey = jQueryKey + ' ' + "img";
                
                if ( $(aiImgJQueryKey).attr('src') === "images/empty.png" ) {
                    $(aiImgJQueryKey).attr('src', aichoice);
                    done = true;
                    continue;
                }

                tries++;
                if ( tries >= 50 ) {
                    console.log ("System reached maximum tries.");
                    break;
                }
            }
        }
    }
    else {
        $(imgJQueryKey).attr('src', player2choice);
    }

    if (player2type != typeai)
        currentPlayers = ( currentPlayers === player1Turn? player2Turn : player1Turn )
        // if ( player2type == typehuman )
}



function handleButtonClick(id) {

    if ( resultsAlert === 1 ) {
        alert ("Game is won, please restart the game.");
        return;
    }
    
    if ( resultsAlert === 2 ) {
        alert ("Game ended in draw, please restart the game.");
        return;
    }

    if (players_inited === false )
    {
        alert ("You must select a game mode.");
        return;
    }

    // console.log (id)
    let jQueryKey = '.' + "box" + id;
    // console.log(jQueryKey)
    let imgJQueryKey = jQueryKey + ' ' + "img";
    // console.log($(imgJQueryKey).attr('src'))

    if ( $(imgJQueryKey).attr('src') === "images/empty.png" ) {

        changeTurn (imgJQueryKey);

        // we need to reverse the result declaration for Player1 & Player2
        // because in the logic we used, we are changing turns before checking for winning
        // for example - if player1 is winning, it will show that player 2 won, because we changed turns before announcing results
        if ( checkWin() === true ) {

            // win sound
            winSoundPlay(winSound);

            $("#game").append("<p id='winner'> Winner! </p>");
            $("#winner").show();


            // if ( currentPlayers === player1Turn ) {

            //     if (player1Name != null) {
            //         $("#game").append("<p id='player1win'> Player " + player1Name + " won the game. </p>");
            //         $("#player1win").show();
            //     }
            //     if (player1Name == null) {
            //         $("#game").append("<p id='player12nullwin'> Player " + currentPlayers + " won the game. </p>");
            //         $("#player12nullwin").show();
            //     }
            // }
            // if ( currentPlayers === player2Turn ) {
            //     if ( player2type === typehuman ) {
            //         if (player2Name != null) {
            //             $("#game").append("<p id='player2win'> Player " + player2Name + " won the game. </p>");
            //             $("#player2win").show();
            //         }
            //         if (player2Name == null) {
            //             $("#game").append("<p id='player12nullwin'> Player " + currentPlayers + " won the game. </p>");
            //             $("#player12nullwin").show();
            //         }
            //     }
            //     if ( player2type === typeai ) {
            //         $("#game").append("<p id='aiwin'> AI won the game. </p>");
            //         $("#aiwin").show();
            //     }
            // }





            // alert ("Player " + currentPlayers + " won the game");
            resultsAlert = 1;
        }

        if ( checkDraw() === true ) {
            // console.log($(boxes));
            $(".box1").css({"background-color": "lightgrey"});
            $(".box2").css({"background-color": "lightgrey"});
            $(".box3").css({"background-color": "lightgrey"});
            $(".box4").css({"background-color": "lightgrey"});
            $(".box5").css({"background-color": "lightgrey"});
            $(".box6").css({"background-color": "lightgrey"});
            $(".box7").css({"background-color": "lightgrey"});
            $(".box8").css({"background-color": "lightgrey"});
            $(".box9").css({"background-color": "lightgrey"});
            $("#game").append("<p id='drawgame2'> Game result is draw. </p>");
            $("#drawgame2").show();
            // alert ("Draw");
            resultsAlert = 2;
        }

    }
    else {
        alert("Try different box")
    }
}










//// Restart button



$("#restartgame").click(function(imgJQueryKey) {

    $(box1).attr('src',"images/empty.png");
    $(".box1").css({"background-color": "white"});
    // console.log(box1);

    $(box2).attr('src',"images/empty.png");
    $(".box2").css({"background-color": "white"});

    $(box3).attr('src',"images/empty.png");
    $(".box3").css({"background-color": "white"});
    
    $(box4).attr('src',"images/empty.png");
    $(".box4").css({"background-color": "white"});

    $(box5).attr('src',"images/empty.png");
    $(".box5").css({"background-color": "white"});

    $(box6).attr('src',"images/empty.png");
    $(".box6").css({"background-color": "white"});

    $(box7).attr('src',"images/empty.png");
    $(".box7").css({"background-color": "white"});

    $(box8).attr('src',"images/empty.png");
    $(".box8").css({"background-color": "white"});

    $(box9).attr('src',"images/empty.png");
    $(".box9").css({"background-color": "white"});

    resultsAlert = 0;
})