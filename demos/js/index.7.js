'use strict';

var people = new Backbone.Collection();

var person1 = new Backbone.Model({
	firstName: 'Bob',
	lastName: 'Smith'
});

var person2 = new Backbone.Model({
	firstName: 'Tim',
	lastName: 'Jones'
});

var person3 = new Backbone.Model({
	firstName: 'Alex',
	lastName: 'Johnson'
});

people.on('add', function(model, collection, options) {
	console.log(collection);
});


people.add(person1);
people.add(person2);
people.add(person3);

people.each(function() {
	console.dir(arguments);
});


console.log(people.pluck('firstName'));

//people.remove(person1);

console.dir(people);