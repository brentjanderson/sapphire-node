window.AdminView = Backbone.View.extend({

	initialize : function() {
		console.log('Initializing Admin View');
		this.template = _.template(tpl.get('admin'));
	},

	events : {
		"click #simulator-create" : "createSimulator",
		"click #station-create" : "createStation",
		"click #card-create" : "createCard"
	},

	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	},

	createSimulator : function() {
		var name = prompt('What is the name of this simulator?');
		var registry = prompt('What is the registry of this simulator?');
		
	},

	createStation : function() {

	},

	createCard : function() {

	},
});
