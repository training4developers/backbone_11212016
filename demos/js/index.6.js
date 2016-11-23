'use strict';

const Person = Backbone.Model.extend({

	defaults: {
		firstName: '',
		lastName: ''
	},

	// runs before initialize
	constructor: function() {
		console.dir(arguments);
		arguments[0].firstName = 'Sophie'; // does work
		Backbone.Model.apply(this, $.makeArray(arguments));
	},

	// runs after constructor
	initialize: function(options) {
		console.dir(options);
		options.firstName = 'Sophie'; // does not work

		this.set('firstName', 'Sophie');
	},

	getFullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}

});

var person = new Person({
	firstName: 'Justin',
	lastName: 'Trudeau'
});

person.on('change:firstName', function() {
	console.log('firstName changed');
});

console.log(person.getFullName());
console.dir(person);

const Student = Person.extend({

	defaults: {
		studentId: 0
	},

	getRecordInfo: function() {
		return this.get('studentId') + ' ' +
			this.get('lastName') + ', ' + this.get('firstName');
	}

});

const student = new Student({
	studentId: 1, firstName: 'Timmy', lastName: 'Johnson'
});

console.log(student.getFullName());
console.log(student.getRecordInfo());

console.dir(student);


// class Person extends Backbone.Model {

// 	getFullName() {
// 		return this.firstName + ' ' + this.lastName;
// 	}

// }