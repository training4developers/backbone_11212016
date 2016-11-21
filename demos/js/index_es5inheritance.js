'use strict';

function Person(firstName, lastName) {

	this.firstName = firstName;
	this.lastName = lastName;

}

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
};

function Student(studentId, firstName, lastName) {
	this._super.call(this, firstName, lastName);
	this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getRecordInfo = function() {
	return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
};

var p = new Student(1, 'Bob','Martin');
console.log(p.getFullName());
console.log(p.getRecordInfo());
console.dir(p);

// console.log(Object.getPrototypeOf(Person) ===
// 	Person.prototype);
// console.log(Object.getPrototypeOf(Person) ===
// 	Person.__proto__);

// 	console.log(Object.getPrototypeOf(p) ===
// 		Person.prototype);
