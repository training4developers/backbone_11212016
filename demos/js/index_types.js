var t = 2;

console.log(typeof t);

t = 'Canada Rocks!';

console.log(typeof t);

t = false;

console.log(typeof t);

t = Symbol('my symbol');

console.log(typeof t);

t = {
	id: 1, firstName: 'Tim', lastName: 'Jones'
};

console.log(typeof t);

function doIt() {
	console.log('did it!');
}

doIt.myCoolFunction = true;

console.log(typeof t);
console.dir(doIt);

t = [1,2,3,4];

console.log(typeof t);

t = undefined;

console.log(typeof t);

t = null;

console.log(typeof t);
