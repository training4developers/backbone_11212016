'use strict';

const ColorListApp = Backbone.View.extend({

	tagName: 'section',
	id: 'color-list-app',
	className: 'canada-loves-hockey us-loves-hockey',

	events: {
		'click [click-me-button]': 'clickMeButtonHandler'
	},

	clickMeButtonHandler: function() {
		console.log('I was clicked!');
	},

	render: function() {


		// creates an actual DOM element
		//const button = document.createElement('button');

		// take a DOM element, and make it jQuery wrapped
		//$(button).text()
		
		// creates a jQuery wrapped DOM element
		const button = $('<button>');
		button.attr("id", "click-me");
		button.attr("click-me-button", '');

		// will only work on an actual DOM element, not a jQuery wrapped
		// DOM element
		// button.innerText = 'Click Me!';
		
		// will only work on a jQuery wrapped DOM element, not an actual
		// DOM element
		button.text('Click Me!');

		this.$el.text('Here is my first view!');
		this.$el.append(button);
	}

});

const colorListApp = new ColorListApp({
	tagName: 'article'
});

colorListApp.render();

// $(document).ready(function() {
// 	$('body').append(colorListApp.$el);
// });

$(function() {
	$('body').append(colorListApp.$el);

	colorListApp.remove();

	//colorListApp.undelegateEvents();
	//colorListApp.delegateEvents();

});



console.dir(colorListApp);
