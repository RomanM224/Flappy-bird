var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//var name = $('#name').html();


var bird = new Image();
var backGround = new Image();
var foreGround = new Image();
var upperPipe = new Image();
var bottomPipe = new Image();


bird.src = "img/flappy_bird_bird.png";
backGround.src = "img/flappy_bird_bg.png";
foreGround.src = "img/flappy_bird_fg.png";
upperPipe.src = "img/flappy_bird_pipeUp.png";
bottomPipe.src = "img/flappy_bird_pipeBottom.png";

//Sound Files
var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

var gap = 110;
var score = 0;

//On click on any button
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 35;
    fly.play();
}

//Make blocks
var pipe = [];

pipe[0] = {
    x: canvas.width,    //Bird appears on end of canvas
    y: 0
}

//Bird position
var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw() {
    context.drawImage(backGround, 0, 0);

    for (var i = 0; i < pipe.length; i++) {
        context.drawImage(upperPipe, pipe[i].x, pipe[i].y);
        context.drawImage(bottomPipe, pipe[i].x, pipe[i].y + upperPipe.height + gap);

        pipe[i].x--;

        if (pipe[i].x == 100) {
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * upperPipe.height) - upperPipe.height
            });
        }

        //Track a touch
        if (xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + upperPipe.width
            && (yPos <= pipe[i].y + upperPipe.height
                || yPos + bird.height >= pipe[i].y + upperPipe.height + gap)
            || yPos + bird.height >= canvas.height - foreGround.height) {

            //location.reload(); // reload page
            //  $(document).
             finishGame(score);
             window.location.href = "/flabybird/FinishGame.jsp";


        }
        if (pipe[i].x == 5) {
            score++;
            score_audio.play();
        }
    }

    // context.drawImage(upperPipe, 100, 0);
    // context.drawImage(bottomPipe, 100, 0 + upperPipe.height + gap);

    context.drawImage(foreGround, 0, canvas.height - foreGround.height);
    context.drawImage(bird, xPos, yPos);

    yPos += grav;

    context.fillStyle = "#000";
    context.font = "24px Verdana";
    context.fillText("Score: " + score + "    " + document.getElementById("name").innerText, 10, canvas.height - 20);
    requestAnimationFrame(draw);
}
bottomPipe.onload = draw;

//function finishGame(str1) {
//    $.post(
//        "FinishGame",
//        { str:"" + str1 },
//    );
//};