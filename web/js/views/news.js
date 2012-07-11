window.NewsView = Backbone.View.extend({

	initialize:function () {
		console.log('Initializing News View');
		this.template = _.template(tpl.get('news'));
	},

	events:{
		
	},

	render:function (eventName) {
		$(this.el).html(this.template());
		return this;
	},

	
});