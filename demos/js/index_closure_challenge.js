'use strict';

var x=0,y=0,funcs=[];
//var t;

for (;x<5;x++) {
	//const t = x;

	(function() {

		var t = x;

		funcs.push(function() {
			console.log(t);
		});

	})();
}

for (;y<5;y++) {
	funcs[y]();   // 0, 1, 2, 3, 4
}
