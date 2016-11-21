'use strict';

doIt();

// function declaration
function doIt(x) {
	console.log('did it');
}

// function expression
var f = function(x) {
	console.log('did it 2');
};

f();

// arrow function
const f2 = (x,y,z) => {
	console.log('did it 3');
};

f2();

