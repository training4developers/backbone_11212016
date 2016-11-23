'use strict';

let counter = 0;

counter++;
setTimeout(function() {
		console.log('1');
		counter--;
		if (counter === 0) {
			doFinalCode();
		}
}, 3000);

counter++;
setTimeout(function() {
		console.log('2');
		counter--;
		if (counter === 0) {
			doFinalCode();
		}
}, 3000);

counter++;
setTimeout(function() {
		console.log('3');
		counter--;
		if (counter === 0) {
			doFinalCode();
		}
}, 3000);

counter++;
setTimeout(function() {
		console.log('4');
		counter--;
		if (counter === 0) {
			doFinalCode();
		}
}, 3000);

// setTimeout(function() {

// 		console.log('first one');

// 		setTimeout(function() {

// 					console.log('second one');

// 					setTimeout(function() {

// 							console.log('third one');

// 							setTimeout(function() {

// 									console.log('fourth one');

// 							}, 3000);

// 				}, 3000);

// 		}, 3000);

// }, 3000);