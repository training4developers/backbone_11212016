'use strict';


var person = {

	_firstName: '',

	setFirstName: function(value) {
		this._firstName = value;
		this.trigger('change_first_name', {
			newFirstName: this._firstName
		});
	},

	getFirstName: function() {
		return this._firstName;
	}

};

_.extend(person, Backbone.Events);

function changeFirstNameHandler(data) {
	console.dir(data);
}

person.on('change_first_name', changeFirstNameHandler);

person.setFirstName('Bob');
person.setFirstName('Jenny');

person.off('change_first_name', changeFirstNameHandler);

person.setFirstName('Ronald');
person.setFirstName('Bob');
//console.log(person.getFirstName());