'use strict';

var person = {
	walk: function() {
		console.log(this.name + ' is walking');
	},
	name: 'Nameless Person'
}

var bob = Object.create(person);
bob.name = 'Bob';
bob.walk();

var jenny = Object.create(person);
jenny.name = 'Jenny';
jenny.walk();

console.dir(bob);
console.dir(jenny);

console.log(Object.getPrototypeOf(bob) ===
	Object.getPrototypeOf(jenny));
console.log(bob.walk === jenny.walk);




// var kent = {
// 	name: 'Kent',
// 	amt: 1000000,
// 	address: {
// 		city: 'Calgary',
// 		province: 'AB'
// 	}
// };

// var angela = Object.create(kent);
// angela.name = "Angela";

// // console.log(angela.amt);
// // kent.amt = 3000000;
// // console.log(angela.amt);
// // angela.amt = 100;
// // console.log(angela.amt);
// // delete angela.amt;
// // console.log(angela.amt);

// console.log(angela.address.city);

// angela.address.city = 'Paris';

// console.log(kent.address.city);

// console.dir(angela);