window.IntroView = Backbone.View.extend({

	initialize : function() {
		console.log('Initializing Intro View');
		this.template = _.template(tpl.get('intro'));
	},

	events : {

	},

	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	},
});
