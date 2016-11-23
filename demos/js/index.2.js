'use strict';

var youngMan = {

	propose: function() {
		this.trigger('propose');
	}
};

var youngLady = { };

_.extend(youngMan, Backbone.Events);
_.extend(youngLady, Backbone.Events);

// Object.assign(youngMan, Backbone.Events);

youngLady.listenTo(youngMan, 'propose', function() {

	console.log('should I say yet or no?');

});

youngMan.propose();