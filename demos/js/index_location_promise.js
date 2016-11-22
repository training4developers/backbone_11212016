'use strict';

function getLocation() {
	return new Promise(function(resolve, reject) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
					resolve(position);
				});
    } else {
			 reject("Geolocation is not supported by this browser.");
    }		
	});
}

getLocation()
	.then(position => ajax({ position: position }))
	.then(results => {
	});
