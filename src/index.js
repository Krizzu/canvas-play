const canvas = document.querySelector('#canvas');
// getting the context
const ctx = canvas.getContext("2d");

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
  whiteSquares.length = 0;
  scoreContainer.classList.add('hidden');
  clearInterval(intervalLookup);
  draw();

  const toGuess = ~~(Math.random()*whiteSquares.length);
  puzzle.innerHTML = toGuess;
}


playGame();
