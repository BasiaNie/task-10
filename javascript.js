var a = 10;
var b = 5;
var c = 2;

// couldn't we just put it this way? more simple.
//
// var calc = (a + b) / c;

// console.log(calc);

function add(a, b) {
  return a + b;
}

function divide(a, b, c) {
  return a + b / c;
}

function doCalculation() {
  add();
  divide();
  var d = (a + b) / c;

  console.log(d);
}

doCalculation();
