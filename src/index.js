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


ctx.fillRect(15, 15, 30, 30);

ctx.strokeRect(30, 30, 30, 30);

ctx.clearRect(30, 30, 30, 30);

