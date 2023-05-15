import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersect } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js";


const gameBoard = document.getElementById("game-board")

let lastRenderTime = 0;
let gameOver = false

function main(currentTime){
    if(gameOver){
        if(confirm("You lost Game Press OK to restart")){
            window.location = "/"
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return
    
    console.log("currentTime");
    lastRenderTime = currentTime;
    update();
    draw();
}
    
    
window.requestAnimationFrame(main);

function update(){
    updateSnake()
    updateFood()
    checkDeath();
};

function draw(){
    gameBoard.innerHTML ="";
    drawSnake(gameBoard);
    drawFood(gameBoard);

};

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect()
}