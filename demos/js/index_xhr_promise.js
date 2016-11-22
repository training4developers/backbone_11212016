'use strict';


function ajax(options) {

	return new Promise(function(resolve, reject) {

		var xhr = new XMLHttpRequest();

		xhr.addEventListener('readystatechange', function() {
			console.log('readystatechange fired', xhr.readyState, xhr.status)
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}
		});

		xhr.open(options.method, options.url);
		xhr.send();

	});

}

ajax({
	method: 'GET',
	url: 'https://t4dclass.herokuapp.com/api/widgets'
}).then(function(results) {
	console.log('got results');
	console.log(results);
});

