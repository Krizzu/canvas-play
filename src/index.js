// These are my notes from learning about canvas :)

/*
  This elements has a method that allows us to get a 'contex'.
  context is used to create and manipulate content shown in the canvas.
  to display something, a script first needs to access the rendering context and draw on it.
  '2d' and 'WebGL' are most used contexts.
*/

const canvas = document.querySelector('#canvas');


//getting the context
const ctx = canvas.getContext("2d");

/*
  The fallback content (content that is displayed when 'canvas' are not supported in a browser)
  You can check if canvas is not supported in two ways:
  1. Add elements (nodes) inside 'canvas' element - if the browser does not support canvas, it will
     display those elements. (i.e: <h1>Your browser do not support canvas</h1>)

  2. programmatically - check if .getContext method exists on a canvas:

  if(canvas.getContext) {
    ctx = canvas.getContext('2d');
  }
  else {
    // canvas not supported code here..
  }

*/


/*

    THE GRID


  Grid in canvas start in the top left corner (0,0).
  1 point in the grid - 1px in the canvas.
  You set grid size with canvas' attributes (width and height), BUT do not set it with css!
      when you set width/height with css, canvas element will be scaled, but not the grid
  

  axis X - gets bigget going right:     
  axis Y - gets bigget going down:

                                        0
                                        |
                                        |
                                        |
                          0 --------------------------> 150
                                        |
                                        |
                                        |
                                       \/
                                        150

*/


/*


  DRAWING rectangles []


  * canvas only supports one shape: rectangle. 
    Other shapes are created by combining one or more paths, lists of points, connected by lines.
  
  * There are three functions that draw rectangles on the canvas:

    - fillRect( x, y, width, height )
        Draws filled rectangle

    - strokeRect( x, y, width, height )
        Draws a rectangular outline

    - clearRect( x, y, width, height )
        Clears the specified rectangular area, making it fully transparent


      x, y - position on the canvas (relative to the origin), of the top-left corner of a rectangular
      width, height - rectangular's size


*/


/*
ctx.fillRect(15, 15, 30, 30);

ctx.strokeRect(30, 30, 30, 30);

ctx.clearRect(30, 30, 30, 30);
*/

const [h, w] = [canvas.height, canvas.width]; //saving canvas height and width
const rectSize = 20; //20x20;
let intervalLookup, timer = 500;
const whiteSquares = [];

const puzzle = document.querySelector('#number');
const score = document.querySelector('#score');
document.querySelector('#stopper').addEventListener('click', () => {
  clearInterval(intervalLookup);
  scoreContainer.classList.remove('hidden');
  score.innerText = `You guessed ${whiteSquares.length}` 
})

document.querySelector('#again').addEventListener('click', function() {
  playGame();
})

const scoreContainer = document.querySelector('#score-container');


// Function that draws a buildings.
function draw() {

  let numberOfRectPerLine = Math.ceil(w / rectSize);
  let numberOfLines = Math.ceil(h/rectSize);

  ctx.clearRect(0,0,w,h); //clear for future drawing

  
  for(let j = 0; j < numberOfLines; j++ ){
    for(let i = 0; i < numberOfRectPerLine; i++) {
      if(i !== 0) {
        if(i % 2 == 0 && j % 2 == 0 && j !== 0) {
          ctx.clearRect(rectSize*i-rectSize, rectSize*j, rectSize, rectSize)
          whiteSquares.push({x: rectSize*i-rectSize, y: rectSize*j})
        }
      }
      ctx.fillRect(rectSize*i, rectSize*j, rectSize, rectSize)
    }
  }


  intervalLookup = setInterval(function() {

    if(whiteSquares.length == 1 ) {
      clearInterval(intervalLookup);
    }
    const random = ~~(Math.random()*whiteSquares.length);
    let randomWindow = whiteSquares[random]
    whiteSquares.splice(random, 1);

    ctx.fillRect(randomWindow.x, randomWindow.y, rectSize, rectSize)

  }, timer)
}


// play actual game
function playGame() {
  scoreContainer.classList.add('hidden');
  clearInterval(intervalLookup);
  draw();

  const toGuess = ~~(Math.random()*whiteSquares.length);
  puzzle.innerHTML = toGuess;
}


playGame();
