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

ctx.fillRect(15, 15, 30, 30);

ctx.strokeRect(30, 30, 30, 30);

ctx.clearRect(30, 30, 30, 30);

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJzcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlc2UgYXJlIG15IG5vdGVzIGZyb20gbGVhcm5pbmcgYWJvdXQgY2FudmFzIDopXG5cbi8qXG4gIFRoaXMgZWxlbWVudHMgaGFzIGEgbWV0aG9kIHRoYXQgYWxsb3dzIHVzIHRvIGdldCBhICdjb250ZXgnLlxuICBjb250ZXh0IGlzIHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIGNvbnRlbnQgc2hvd24gaW4gdGhlIGNhbnZhcy5cbiAgdG8gZGlzcGxheSBzb21ldGhpbmcsIGEgc2NyaXB0IGZpcnN0IG5lZWRzIHRvIGFjY2VzcyB0aGUgcmVuZGVyaW5nIGNvbnRleHQgYW5kIGRyYXcgb24gaXQuXG4gICcyZCcgYW5kICdXZWJHTCcgYXJlIG1vc3QgdXNlZCBjb250ZXh0cy5cbiovXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcblxuXG4vL2dldHRpbmcgdGhlIGNvbnRleHRcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbi8qXG4gIFRoZSBmYWxsYmFjayBjb250ZW50IChjb250ZW50IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gJ2NhbnZhcycgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gYSBicm93c2VyKVxuICBZb3UgY2FuIGNoZWNrIGlmIGNhbnZhcyBpcyBub3Qgc3VwcG9ydGVkIGluIHR3byB3YXlzOlxuICAxLiBBZGQgZWxlbWVudHMgKG5vZGVzKSBpbnNpZGUgJ2NhbnZhcycgZWxlbWVudCAtIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FudmFzLCBpdCB3aWxsXG4gICAgIGRpc3BsYXkgdGhvc2UgZWxlbWVudHMuIChpLmU6IDxoMT5Zb3VyIGJyb3dzZXIgZG8gbm90IHN1cHBvcnQgY2FudmFzPC9oMT4pXG5cbiAgMi4gcHJvZ3JhbW1hdGljYWxseSAtIGNoZWNrIGlmIC5nZXRDb250ZXh0IG1ldGhvZCBleGlzdHMgb24gYSBjYW52YXM6XG5cbiAgaWYoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBjYW52YXMgbm90IHN1cHBvcnRlZCBjb2RlIGhlcmUuLlxuICB9XG5cbiovXG5cblxuLypcblxuICAgIFRIRSBHUklEXG5cblxuICBHcmlkIGluIGNhbnZhcyBzdGFydCBpbiB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApLlxuICAxIHBvaW50IGluIHRoZSBncmlkIC0gMXB4IGluIHRoZSBjYW52YXMuXG4gIFlvdSBzZXQgZ3JpZCBzaXplIHdpdGggY2FudmFzJyBhdHRyaWJ1dGVzICh3aWR0aCBhbmQgaGVpZ2h0KSwgQlVUIGRvIG5vdCBzZXQgaXQgd2l0aCBjc3MhXG4gICAgICB3aGVuIHlvdSBzZXQgd2lkdGgvaGVpZ2h0IHdpdGggY3NzLCBjYW52YXMgZWxlbWVudCB3aWxsIGJlIHNjYWxlZCwgYnV0IG5vdCB0aGUgZ3JpZFxuICBcblxuICBheGlzIFggLSBnZXRzIGJpZ2dldCBnb2luZyByaWdodDogICAgIFxuICBheGlzIFkgLSBnZXRzIGJpZ2dldCBnb2luZyBkb3duOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAxNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MFxuXG4qL1xuXG5cbi8qXG5cblxuICBEUkFXSU5HIHJlY3RhbmdsZXMgW11cblxuXG4gICogY2FudmFzIG9ubHkgc3VwcG9ydHMgb25lIHNoYXBlOiByZWN0YW5nbGUuIFxuICAgIE90aGVyIHNoYXBlcyBhcmUgY3JlYXRlZCBieSBjb21iaW5pbmcgb25lIG9yIG1vcmUgcGF0aHMsIGxpc3RzIG9mIHBvaW50cywgY29ubmVjdGVkIGJ5IGxpbmVzLlxuICBcbiAgKiBUaGVyZSBhcmUgdGhyZWUgZnVuY3Rpb25zIHRoYXQgZHJhdyByZWN0YW5nbGVzIG9uIHRoZSBjYW52YXM6XG5cbiAgICAtIGZpbGxSZWN0KCB4LCB5LCB3aWR0aCwgaGVpZ2h0IClcbiAgICAgICAgRHJhd3MgZmlsbGVkIHJlY3RhbmdsZVxuXG4gICAgLSBzdHJva2VSZWN0KCB4LCB5LCB3aWR0aCwgaGVpZ2h0IClcbiAgICAgICAgRHJhd3MgYSByZWN0YW5ndWxhciBvdXRsaW5lXG5cbiAgICAtIGNsZWFyUmVjdCggeCwgeSwgd2lkdGgsIGhlaWdodCApXG4gICAgICAgIENsZWFycyB0aGUgc3BlY2lmaWVkIHJlY3Rhbmd1bGFyIGFyZWEsIG1ha2luZyBpdCBmdWxseSB0cmFuc3BhcmVudFxuXG5cbiAgICAgIHgsIHkgLSBwb3NpdGlvbiBvbiB0aGUgY2FudmFzIChyZWxhdGl2ZSB0byB0aGUgb3JpZ2luKSwgb2YgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiBhIHJlY3Rhbmd1bGFyXG4gICAgICB3aWR0aCwgaGVpZ2h0IC0gcmVjdGFuZ3VsYXIncyBzaXplXG5cblxuKi9cblxuXG5jdHguZmlsbFJlY3QoMTUsIDE1LCAzMCwgMzApO1xuXG5jdHguc3Ryb2tlUmVjdCgzMCwgMzAsIDMwLCAzMCk7XG5cbmN0eC5jbGVhclJlY3QoMzAsIDMwLCAzMCwgMzApO1xuXG4iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxSZWN0Iiwic3Ryb2tlUmVjdCIsImNsZWFyUmVjdCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7OztBQVNBLElBQU1BLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjs7O0FBSUEsSUFBTUMsTUFBTUgsT0FBT0ksVUFBUCxDQUFrQixJQUFsQixDQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEVBRCxJQUFJRSxRQUFKLENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6Qjs7QUFFQUYsSUFBSUcsVUFBSixDQUFlLEVBQWYsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0I7O0FBRUFILElBQUlJLFNBQUosQ0FBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCOzsifQ==
