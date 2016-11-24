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

var ColorFormView = Backbone.View.extend({
	tagName: 'form',
	events: {
		'click button': 'addColorHandler'
	},

	addColorHandler: function() {

		this.trigger('new_color',{
			color: this.$el.find('input').val()
		});
	},

	render: function() {

		var templateFn = _.template(`
			<label>New Color</label>
			<input type="text" name="new-color" id="new-color" value="">
			<button type="button">Add Color</button>
		`);

		var html = templateFn();
		this.$el.append(html);

	}
})

var AppView = Backbone.View.extend({
	id: 'app-view',

	render: function() {

		var view = this;

		this.$el.empty();

		this.$el.append('<h1>List of Colors</h1>');

		var listView = new ListView({
			collection: this.collection
		});
		listView.render();
		this.$el.append(listView.el);

		var colorFormView = new ColorFormView();
		colorFormView.render();
		this.$el.append(colorFormView.el);

		colorFormView.on('new_color', function(data) {
			console.log(data);
			view.trigger('new_color', data);
		});

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

	var controller = this;

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

	appView.on('new_color', function(data) {

		colors.add(new ColorModel({ name: data.color }));
		
		appView.remove();
		
		appView.render();
		controller.$rootElement.append(appView.$el);
	});

};


// application starting point
$(function() {

	var appController = new AppController($('main'));
	appController.start();


});

