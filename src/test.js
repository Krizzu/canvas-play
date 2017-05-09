const canvas = document.querySelector('#canvas');
// getting the context
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 150;

let ballX = 2;
let ballY = -2;
const ballRadius = 25;

const paddleWidth = 120;
const paddleHeight = 5;
let paddleX = (canvas.width / 2) - (paddleWidth / 2);

let leftPressed = false;
let rightPressed = false;

function pressDownHandle(e) {
  const { key } = e;

  if (key === 'ArrowLeft') {
    leftPressed = true;
  }
  if (key === 'ArrowRight') {
    rightPressed = true;
  }
}

function pressUpHandle(e) {
  const { key } = e;

  if (key === 'ArrowLeft') {
    leftPressed = false;
  }
  if (key === 'ArrowRight') {
    rightPressed = false;
  }
}

document.addEventListener('keydown', pressDownHandle);
document.addEventListener('keyup', pressUpHandle);

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#f3d2ca';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - 30, paddleWidth, paddleHeight);
  ctx.fillStyle = '#ff3212';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (x + ballX > canvas.width - ballRadius || x + ballX < ballRadius) {
    ballX = -ballX;
  }
  if (y + ballY < ballRadius) {
    ballY = -ballY;
  }
  if (y + ballY > canvas.height - ballRadius - 30) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      ballY = -ballY;
    } else {
      console.log('GAME OVER');
    }
  }

  if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  }

  drawBall();
  drawPaddle();
  x += ballX;
  y += ballY;
}

setInterval(draw, 10);
