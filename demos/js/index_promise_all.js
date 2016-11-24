'use strict';

const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 4000));
const p3 = new Promise((resolve, reject) =>
	setTimeout(() => reject('c'), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 8000));

p1.then(function(results) {
	console.log(results);
});

p2.then(function(results) {
	console.log(results);
});

p3.then(function(results) {
	console.log(results);
}).catch(function(results) {
	console.log(results + ' rejected');
});

p4.then(function(results) {
	console.log(results);
});

const p5 = Promise.all([p1,p2]);

p5.then(function(results) {
	
});

Promise.all([p5,p3,p4])
	.then(results => {
		console.log(results); console.log('all done'); })
	.catch(results => {
		console.log(results); console.log('one rejected') });