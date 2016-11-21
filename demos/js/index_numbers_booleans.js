console.log(parseInt('Coding is cool.'));
console.log(isNaN(parseInt('Coding is cool.')));

// falsy
// 0
// false
// ''
// NaN
// undefined
// null

var t = NaN || 'Hello World!';

function doIt(p) {

	p = p || 'default value';

}

doIt();

console.log(t);
