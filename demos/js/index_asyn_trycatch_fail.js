'use strict';

try {

	var t = 10;

	setTimeout(function() {
		console.log(t);
		console.log('timeout expired');
		throw Error('something really went wrong...');
	}, 0);

	console.log('made it here...');

} catch(err) {
	console.log('caught the error!');
	console.log(err);
}
