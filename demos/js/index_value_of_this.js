'use strict';

// function doIt(a,b) {
// 	console.dir(this);
// 	console.log(a,b);
// }

// doIt();

// window.doIt();

// var person = {
// 	id: 1,
// 	fn: 'Bob',
// 	ln: 'Martin',
// 	doIt: doIt
// };

// person.doIt();

// console.log(person.doIt === doIt);


// person.doIt.call({ id: 4, fn: 'Jill'}, 1, 2);
// person.doIt.apply({ id: 4, fn: 'Jill'}, [1, 2]);

// var fn = person.doIt.bind({ id:5, name: 'Timmy' });

// fn(1,2);


var p = { 
	fn: 'Bob',
	ln: 'Martin',
	getFullName: function() {
		console.log(this.fn + ' ' + this.ln);
	}
}

var p2 = {
	fn: 'Stacey',
	ln: 'Li',
	getFullName: p.getFullName
};

p2.getFullName();

// window.fn = 'Divya';
// window.ln = 'Parmesh';

// p.getFullName();

// var getFullName = p.getFullName.bind(p);

// setTimeout(getFullName, 3000);




