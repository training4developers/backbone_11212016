'use strict';

var ColorModel = Backbone.Model.extend({
	defaults: {
		name: ''
	}
});

var ColorsCollection = Backbone.Collection.extend({
	model: ColorModel
});

var ListItemView = Backbone.View.extend({
	tagName: 'li',
	render: function() {
		this.$el.text(this.model.get('name'));
	}
});

var ListView = Backbone.View.extend({
	tagName: 'ul',
	render: function() {

		var view = this;

		this.collection.each(function(model, index, collection) {
			var listItem = new ListItemView({
				model: model
			});
			listItem.render();
			view.el.appendChild(listItem.el);
		});
	}
});

var AppView = Backbone.View.extend({
	id: 'app-view',

	render: function() {
		this.$el.append('<h1>List of Colors</h1>');

		var listView = new ListView({
			collection: this.collection
		});
		listView.render();
		this.$el.append(listView.el);


		// Template Based Approach
		// var templateFn = _.template(`
		// 	<ul>
		// 		<% colors.forEach(function(color) { %>
		// 		<li><%- color.name %></li>
		// 		<% }) %>
		// 	</ul>
		// `);
		// var html = templateFn({ colors: this.collection.toJSON() });
		// this.$el.append(html);

		// DOM Object Base Approach
		// var ul = document.createElement('ul');
		// this.collection.each(function(model, index, collection) {
		// 	var li = document.createElement('li');
		// 	li.innerText = model.get('name');
		// 	ul.appendChild(li);
		// });
		// this.$el.append(ul);
	}
});
// controller the flow of my application
function AppController(rootElement) {
	this.$rootElement = $(rootElement);
}
_.extend(AppController.prototype, Backbone.Events);
AppController.prototype.start = function() {
	// initialize data
	var colors = new ColorsCollection();
	colors.add(new ColorModel({ name: 'red' }));
	colors.add(new ColorModel({ name: 'white' }));
	colors.add(new ColorModel({ name: 'yellow' }));
	// load our initial view
	var appView = new AppView({
		collection: colors
	});
	appView.render();
	this.$rootElement.append(appView.$el);

};


// application starting point
$(function() {

	var appController = new AppController($('main'));
	appController.start();


});

