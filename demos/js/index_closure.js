'use strict';

	function inner() {
		console.log(t);
	}

function outer() {

	var t = 10;



	t = 5;

	setTimeout(function() {
		t = 23
	},2000);

	return inner;
}

var fn = outer();
fn();

setTimeout(function() {
	fn();
},3000)