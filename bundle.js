(function () {
'use strict';

// These are my notes from learning about canvas :)

/*
  This elements has a method that allows us to get a 'contex'.
  context is used to create and manipulate content shown in the canvas.
  to display something, a script first needs to access the rendering context and draw on it.
  '2d' and 'WebGL' are most used contexts.
*/

var canvas = document.querySelector('#canvas');

//getting the context
var ctx = canvas.getContext("2d");

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

var _ref = [canvas.height, canvas.width];
var h = _ref[0];
var w = _ref[1]; //saving canvas height and width

var rectSize = 20; //20x20;
var intervalLookup = void 0;
var timer = 500;
var whiteSquares = [];

var puzzle = document.querySelector('#number');
var score = document.querySelector('#score');
document.querySelector('#stopper').addEventListener('click', function () {
  clearInterval(intervalLookup);
  scoreContainer.classList.remove('hidden');
  score.innerText = 'You guessed ' + whiteSquares.length;
});

document.querySelector('#again').addEventListener('click', function () {
  playGame();
});

var scoreContainer = document.querySelector('#score-container');

// Function that draws a buildings.
function draw() {

  var numberOfRectPerLine = Math.ceil(w / rectSize);
  var numberOfLines = Math.ceil(h / rectSize);

  ctx.clearRect(0, 0, w, h); //clear for future drawing


  for (var j = 0; j < numberOfLines; j++) {
    for (var i = 0; i < numberOfRectPerLine; i++) {
      if (i !== 0) {
        if (i % 2 == 0 && j % 2 == 0 && j !== 0) {
          ctx.clearRect(rectSize * i - rectSize, rectSize * j, rectSize, rectSize);
          whiteSquares.push({ x: rectSize * i - rectSize, y: rectSize * j });
        }
      }
      ctx.fillRect(rectSize * i, rectSize * j, rectSize, rectSize);
    }
  }

  intervalLookup = setInterval(function () {

    if (whiteSquares.length == 1) {
      clearInterval(intervalLookup);
    }
    var random = ~~(Math.random() * whiteSquares.length);
    var randomWindow = whiteSquares[random];
    whiteSquares.splice(random, 1);

    ctx.fillRect(randomWindow.x, randomWindow.y, rectSize, rectSize);
  }, timer);
}

// play actual game
function playGame() {
  whiteSquares.length = 0;
  scoreContainer.classList.add('hidden');
  clearInterval(intervalLookup);
  draw();

  var toGuess = ~~(Math.random() * whiteSquares.length);
  puzzle.innerHTML = toGuess;
}

playGame();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJzcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlc2UgYXJlIG15IG5vdGVzIGZyb20gbGVhcm5pbmcgYWJvdXQgY2FudmFzIDopXG5cbi8qXG4gIFRoaXMgZWxlbWVudHMgaGFzIGEgbWV0aG9kIHRoYXQgYWxsb3dzIHVzIHRvIGdldCBhICdjb250ZXgnLlxuICBjb250ZXh0IGlzIHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIGNvbnRlbnQgc2hvd24gaW4gdGhlIGNhbnZhcy5cbiAgdG8gZGlzcGxheSBzb21ldGhpbmcsIGEgc2NyaXB0IGZpcnN0IG5lZWRzIHRvIGFjY2VzcyB0aGUgcmVuZGVyaW5nIGNvbnRleHQgYW5kIGRyYXcgb24gaXQuXG4gICcyZCcgYW5kICdXZWJHTCcgYXJlIG1vc3QgdXNlZCBjb250ZXh0cy5cbiovXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcblxuXG4vL2dldHRpbmcgdGhlIGNvbnRleHRcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbi8qXG4gIFRoZSBmYWxsYmFjayBjb250ZW50IChjb250ZW50IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gJ2NhbnZhcycgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gYSBicm93c2VyKVxuICBZb3UgY2FuIGNoZWNrIGlmIGNhbnZhcyBpcyBub3Qgc3VwcG9ydGVkIGluIHR3byB3YXlzOlxuICAxLiBBZGQgZWxlbWVudHMgKG5vZGVzKSBpbnNpZGUgJ2NhbnZhcycgZWxlbWVudCAtIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FudmFzLCBpdCB3aWxsXG4gICAgIGRpc3BsYXkgdGhvc2UgZWxlbWVudHMuIChpLmU6IDxoMT5Zb3VyIGJyb3dzZXIgZG8gbm90IHN1cHBvcnQgY2FudmFzPC9oMT4pXG5cbiAgMi4gcHJvZ3JhbW1hdGljYWxseSAtIGNoZWNrIGlmIC5nZXRDb250ZXh0IG1ldGhvZCBleGlzdHMgb24gYSBjYW52YXM6XG5cbiAgaWYoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBjYW52YXMgbm90IHN1cHBvcnRlZCBjb2RlIGhlcmUuLlxuICB9XG5cbiovXG5cblxuLypcblxuICAgIFRIRSBHUklEXG5cblxuICBHcmlkIGluIGNhbnZhcyBzdGFydCBpbiB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApLlxuICAxIHBvaW50IGluIHRoZSBncmlkIC0gMXB4IGluIHRoZSBjYW52YXMuXG4gIFlvdSBzZXQgZ3JpZCBzaXplIHdpdGggY2FudmFzJyBhdHRyaWJ1dGVzICh3aWR0aCBhbmQgaGVpZ2h0KSwgQlVUIGRvIG5vdCBzZXQgaXQgd2l0aCBjc3MhXG4gICAgICB3aGVuIHlvdSBzZXQgd2lkdGgvaGVpZ2h0IHdpdGggY3NzLCBjYW52YXMgZWxlbWVudCB3aWxsIGJlIHNjYWxlZCwgYnV0IG5vdCB0aGUgZ3JpZFxuICBcblxuICBheGlzIFggLSBnZXRzIGJpZ2dldCBnb2luZyByaWdodDogICAgIFxuICBheGlzIFkgLSBnZXRzIGJpZ2dldCBnb2luZyBkb3duOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAxNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MFxuXG4qL1xuXG5cbi8qXG5cblxuICBEUkFXSU5HIHJlY3RhbmdsZXMgW11cblxuXG4gICogY2FudmFzIG9ubHkgc3VwcG9ydHMgb25lIHNoYXBlOiByZWN0YW5nbGUuIFxuICAgIE90aGVyIHNoYXBlcyBhcmUgY3JlYXRlZCBieSBjb21iaW5pbmcgb25lIG9yIG1vcmUgcGF0aHMsIGxpc3RzIG9mIHBvaW50cywgY29ubmVjdGVkIGJ5IGxpbmVzLlxuICBcbiAgKiBUaGVyZSBhcmUgdGhyZWUgZnVuY3Rpb25zIHRoYXQgZHJhdyByZWN0YW5nbGVzIG9uIHRoZSBjYW52YXM6XG5cbiAgICAtIGZpbGxSZWN0KCB4LCB5LCB3aWR0aCwgaGVpZ2h0IClcbiAgICAgICAgRHJhd3MgZmlsbGVkIHJlY3RhbmdsZVxuXG4gICAgLSBzdHJva2VSZWN0KCB4LCB5LCB3aWR0aCwgaGVpZ2h0IClcbiAgICAgICAgRHJhd3MgYSByZWN0YW5ndWxhciBvdXRsaW5lXG5cbiAgICAtIGNsZWFyUmVjdCggeCwgeSwgd2lkdGgsIGhlaWdodCApXG4gICAgICAgIENsZWFycyB0aGUgc3BlY2lmaWVkIHJlY3Rhbmd1bGFyIGFyZWEsIG1ha2luZyBpdCBmdWxseSB0cmFuc3BhcmVudFxuXG5cbiAgICAgIHgsIHkgLSBwb3NpdGlvbiBvbiB0aGUgY2FudmFzIChyZWxhdGl2ZSB0byB0aGUgb3JpZ2luKSwgb2YgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiBhIHJlY3Rhbmd1bGFyXG4gICAgICB3aWR0aCwgaGVpZ2h0IC0gcmVjdGFuZ3VsYXIncyBzaXplXG5cblxuKi9cblxuXG4vKlxuY3R4LmZpbGxSZWN0KDE1LCAxNSwgMzAsIDMwKTtcblxuY3R4LnN0cm9rZVJlY3QoMzAsIDMwLCAzMCwgMzApO1xuXG5jdHguY2xlYXJSZWN0KDMwLCAzMCwgMzAsIDMwKTtcbiovXG5cbmNvbnN0IFtoLCB3XSA9IFtjYW52YXMuaGVpZ2h0LCBjYW52YXMud2lkdGhdOyAvL3NhdmluZyBjYW52YXMgaGVpZ2h0IGFuZCB3aWR0aFxuY29uc3QgcmVjdFNpemUgPSAyMDsgLy8yMHgyMDtcbmxldCBpbnRlcnZhbExvb2t1cCwgdGltZXIgPSA1MDA7XG5jb25zdCB3aGl0ZVNxdWFyZXMgPSBbXTtcblxuY29uc3QgcHV6emxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bWJlcicpO1xuY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9wcGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxMb29rdXApO1xuICBzY29yZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgc2NvcmUuaW5uZXJUZXh0ID0gYFlvdSBndWVzc2VkICR7d2hpdGVTcXVhcmVzLmxlbmd0aH1gIFxufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FnYWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgcGxheUdhbWUoKTtcbn0pXG5cbmNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlLWNvbnRhaW5lcicpO1xuXG5cbi8vIEZ1bmN0aW9uIHRoYXQgZHJhd3MgYSBidWlsZGluZ3MuXG5mdW5jdGlvbiBkcmF3KCkge1xuXG4gIGxldCBudW1iZXJPZlJlY3RQZXJMaW5lID0gTWF0aC5jZWlsKHcgLyByZWN0U2l6ZSk7XG4gIGxldCBudW1iZXJPZkxpbmVzID0gTWF0aC5jZWlsKGgvcmVjdFNpemUpO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwwLHcsaCk7IC8vY2xlYXIgZm9yIGZ1dHVyZSBkcmF3aW5nXG5cbiAgXG4gIGZvcihsZXQgaiA9IDA7IGogPCBudW1iZXJPZkxpbmVzOyBqKysgKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZSZWN0UGVyTGluZTsgaSsrKSB7XG4gICAgICBpZihpICE9PSAwKSB7XG4gICAgICAgIGlmKGkgJSAyID09IDAgJiYgaiAlIDIgPT0gMCAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgY3R4LmNsZWFyUmVjdChyZWN0U2l6ZSppLXJlY3RTaXplLCByZWN0U2l6ZSpqLCByZWN0U2l6ZSwgcmVjdFNpemUpXG4gICAgICAgICAgd2hpdGVTcXVhcmVzLnB1c2goe3g6IHJlY3RTaXplKmktcmVjdFNpemUsIHk6IHJlY3RTaXplKmp9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdHguZmlsbFJlY3QocmVjdFNpemUqaSwgcmVjdFNpemUqaiwgcmVjdFNpemUsIHJlY3RTaXplKVxuICAgIH1cbiAgfVxuXG5cbiAgaW50ZXJ2YWxMb29rdXAgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblxuICAgIGlmKHdoaXRlU3F1YXJlcy5sZW5ndGggPT0gMSApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxMb29rdXApO1xuICAgIH1cbiAgICBjb25zdCByYW5kb20gPSB+fihNYXRoLnJhbmRvbSgpKndoaXRlU3F1YXJlcy5sZW5ndGgpO1xuICAgIGxldCByYW5kb21XaW5kb3cgPSB3aGl0ZVNxdWFyZXNbcmFuZG9tXVxuICAgIHdoaXRlU3F1YXJlcy5zcGxpY2UocmFuZG9tLCAxKTtcblxuICAgIGN0eC5maWxsUmVjdChyYW5kb21XaW5kb3cueCwgcmFuZG9tV2luZG93LnksIHJlY3RTaXplLCByZWN0U2l6ZSlcblxuICB9LCB0aW1lcilcbn1cblxuXG4vLyBwbGF5IGFjdHVhbCBnYW1lXG5mdW5jdGlvbiBwbGF5R2FtZSgpIHtcbiAgd2hpdGVTcXVhcmVzLmxlbmd0aCA9IDA7XG4gIHNjb3JlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBjbGVhckludGVydmFsKGludGVydmFsTG9va3VwKTtcbiAgZHJhdygpO1xuXG4gIGNvbnN0IHRvR3Vlc3MgPSB+fihNYXRoLnJhbmRvbSgpKndoaXRlU3F1YXJlcy5sZW5ndGgpO1xuICBwdXp6bGUuaW5uZXJIVE1MID0gdG9HdWVzcztcbn1cblxuXG5wbGF5R2FtZSgpO1xuIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImgiLCJ3IiwicmVjdFNpemUiLCJpbnRlcnZhbExvb2t1cCIsInRpbWVyIiwid2hpdGVTcXVhcmVzIiwicHV6emxlIiwic2NvcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5uZXJUZXh0IiwibGVuZ3RoIiwic2NvcmVDb250YWluZXIiLCJkcmF3IiwibnVtYmVyT2ZSZWN0UGVyTGluZSIsIk1hdGgiLCJjZWlsIiwibnVtYmVyT2ZMaW5lcyIsImNsZWFyUmVjdCIsImoiLCJpIiwicHVzaCIsIngiLCJ5IiwiZmlsbFJlY3QiLCJzZXRJbnRlcnZhbCIsInJhbmRvbSIsInJhbmRvbVdpbmRvdyIsInNwbGljZSIsInBsYXlHYW1lIiwiYWRkIiwidG9HdWVzcyIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7OztBQVNBLElBQU1BLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjs7O0FBSUEsSUFBTUMsTUFBTUgsT0FBT0ksVUFBUCxDQUFrQixJQUFsQixDQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FvRmUsQ0FBQ0osT0FBT0ssTUFBUixFQUFnQkwsT0FBT00sS0FBdkI7SUFBUkM7SUFBR0M7O0FBQ1YsSUFBTUMsV0FBVyxFQUFqQjtBQUNBLElBQUlDLHVCQUFKO0lBQW9CQyxRQUFR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
