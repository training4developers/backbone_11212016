'use strict';

var Backbone = {
	Model: function() { }
}

var myModels = [];

// IIFE - immediately invoked function expression
(function() {

	var t = 10;

	var model = new Backbone.Model();

	myModels.push(model);

	console.log(t);

})();



