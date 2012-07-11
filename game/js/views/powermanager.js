window.PowerManagerView = Backbone.View.extend({

	initialize:function () {
		console.log('Initializing Power Manager View');
		this.template = _.template(tpl.get('powermanager'));
	},

	render:function (eventName) {
		$(this.el).html(this.template());
		return this;
	}

});