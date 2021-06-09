//constnats
var direction = { x: 0, y: 0 };
var foodSound = new Audio('./music/food.mp3');
var gameOverSound = new Audio('./music/gameover.mp3');
var moveSound = new Audio('./music/move.mp3');
var musicSound = new Audio('./music/music.mp3');
var speed = 2;
var lastPaintTime = 0;
var snakeArr = [
    { x: 15, y: 15 }
];
var board = document.getElementById('board');
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
function gameEngine() {
    //snake array and food
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
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
        //foood display
        var foodElement;
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = e.y.toString();
        foodElement.style.gridColumnStart = e.x.toString();
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    });
}
//main logic
window.requestAnimationFrame(main);
