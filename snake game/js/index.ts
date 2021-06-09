//constnats
let direction = {x:0,y:0};
const foodSound=new Audio('./music/food.mp3');
const gameOverSound=new Audio('./music/gameover.mp3');
const  moveSound = new Audio('./music/move.mp3');
const  musicSound = new Audio('./music/music.mp3');
let speed= 2;
let lastPaintTime=0;
let snakeArr=[
    {x:15,y:15}
]
let board = document.getElementById('board')!;


//game function
const main = (ctime) =>{
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();

}
function gameEngine(){
    //snake array and food

    // snake display
     board.innerHTML="";
     snakeArr.forEach((e,index)=>{
       let snakeElement:string|number|HTMLDivElement; 
        snakeElement = document.createElement('div');
        //snakeElement.style.setProperty("gridRowStart",e.y);
         //snakeElement.setAttribute("style","gridRowStart:${e.y};");
        //snakeElement.setAttribute("style","gridColumnStart:e.x;")
        snakeElement.style.gridRowStart = e.y.toString();
         snakeElement.style.gridColumnStart = e.x.toString();
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
        //foood display
        let foodElement:string|number|HTMLDivElement; 
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = e.y.toString();
        foodElement.style.gridColumnStart = e.x.toString();
        foodElement.classList.add('food');
        board.appendChild(foodElement);
     })
}



//main logic
window.requestAnimationFrame(main);