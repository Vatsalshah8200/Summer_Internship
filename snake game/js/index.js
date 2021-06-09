var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//constnats
var inputDir = { x: 0, y: 0 };
var foodSound = new Audio('./music/food.mp3');
var gameOverSound = new Audio('./music/gameover.mp3');
var moveSound = new Audio('./music/move.mp3');
var musicSound = new Audio('./music/music.mp3');
var speed = 9;
var lastPaintTime = 0;
var score = 0;
var snakeArr = [
    { x: 15, y: 15 }
];
var food = { x: 2, y: 15 };
var board = document.getElementById('board');
var score2 = document.getElementById('score');
var highscore2 = document.getElementById('highscore');
var highscoreval;
//game function
var main = function (ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
};
function isCollide(snake) {
    // If you bump into yourself 
    for (var i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
    return false;
}
function gameEngine() {
    //snake array and food
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("game Over. press any key ");
        snakeArr = [{ x: 15, y: 15 }];
        musicSound.play();
        score = 0;
    }
    //random food increment score
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += 1;
        if (score > highscoreval) {
            highscoreval = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreval));
            highscore2.innerHTML = "HiScore :" + highscoreval;
        }
        score2.innerHTML = "Score: " + score;
        foodSound.play();
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        var a = 2, b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }
    //snake movement
    for (var i = snakeArr.length - 2; i >= 0; i--) {
        //const element = array[i];
        snakeArr[i + 1] = __assign({}, snakeArr[i]);
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
    // snake display
    board.innerHTML = "";
    snakeArr.forEach(function (e, index) {
        var snakeElement;
        snakeElement = document.createElement('div');
        //snakeElement.style.setProperty("gridRowStart",e.y);
        //snakeElement.setAttribute("style","gridRowStart:${e.y};");
        //snakeElement.setAttribute("style","gridColumnStart:e.x;")
        snakeElement.style.gridRowStart = e.y.toString();
        snakeElement.style.gridColumnStart = e.x.toString();
        if (index == 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
        //foood display
        var foodElement;
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y.toString();
        foodElement.style.gridColumnStart = food.x.toString();
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    });
}
//main logic
var highscore = localStorage.getItem("highScore");
if (highscore === null) {
    highscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval));
}
else {
    highscoreval = JSON.parse(highscore);
    highscore2.innerHTML = "HiScore :" + highscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', function (e) {
    inputDir = { x: 0, y: 1 };
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("Arrow up");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("Arrow Down");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("Arrow Left");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("Arrow Right");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});
