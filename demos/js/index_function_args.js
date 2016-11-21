'use strict';

// function doIt(a,b,c) {
// 	console.log(a,b,c);
// 	console.log(arguments);
// }

// doIt(1,2,3,4,5,6,7,8,9);

const doIt = (a,b,c,...d) => {
	console.log(a,b,c);
	console.log(d);
};

doIt(1,2,3,4,5,6,7,8,9);