'use strict';

class Person {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}

}

class Student extends Person {

	constructor(studentId, firstName, lastName) {
		super(firstName, lastName);
		this.studentId = studentId;
	}

	getRecordInfo() {
		return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
	}

}

var p = new Student(1, 'Bob','Martin');
console.log(p.getFullName());
console.log(p.getRecordInfo());
console.dir(p);
