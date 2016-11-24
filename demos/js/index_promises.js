'use strict';

class Promise {

	

	resolveFn(results) {

		this.resolveFns.forEach(function(resolveFn) {
			resolveFn(results);
		});

	}

	rejectFn() {

	}

	constructor(fn) {

		this.resolveFns = [];
		this.rejectFns = [];

		fn(this.resolveFn, this.rejectFn);
	}

	then(thenFn) {
		this.resolveFns.push(thenFn);
	}

	catch(catchFn) {
		this.rejectFns.push(catchFn);
	}



}




function thirdPartyAPI() {

	var youngMan = new Promise(function youngLady(resolve, reject) {

		setTimeout(function() {

			resolve('she is madly in love with him...');

		}, 3000);

	});

	return youngMan;
}


thirdPartyAPI().then(function(results) {

	console.log(results);
	console.log('yay! she said yes!');

	// return new Promise(function(resolve, reject) {

	// 	setTimeout(function() {
	// 		resolve('found a location!');
	// 	}, 3000);

	// });

	//return 'found a location!';

	throw Error('the world is ending...');

	return Promise.resolve('the world is ending');

}).then(function(results) {

	console.log(results);

	return new Promise(function(resolve, reject) {

		setTimeout(function() {
			resolve('get some wedding clothes!');
		}, 3000);

	});	

}).then(function(results) {

	console.log(results);

}).catch(function(results) {
	console.log(results);
	console.log('she said no, need to join eHarmony...');
});

console.log('young man is waiting...');



