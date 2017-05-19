
$(document).ready(function() {
  var grid=16;
  myFunction(grid);
  makeSquare(grid);
});

// Create the divs
function myFunction(grid){
  for (var a=0; a<grid*grid; a++) {
    $('#container').append("<div class='box'></div>");
    }
};

//make the divs appear as a grid, and with hover effect so it changes the color of the square when your mouse passes over it
function makeSquare(grid){
 var  square=640/(grid*1.1);
  $('.box').css({
  "width":square+"px",
  "height":square+"px",
  "border-width":square*0.05+"px",
  })
  $('.box').on('mouseenter',function(){
    $(this).addClass('trail');
  });
};

//give function for the button;clear grid, and ask user to input an number, use this number for the grid.
function askGrid(){
   $('.box').remove();
  var grid=+prompt("Click OK to reset the grid", 16);
  myFunction(grid);
  makeSquare(grid);
};
