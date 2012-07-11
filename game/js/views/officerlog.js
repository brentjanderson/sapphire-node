window.OfficerLogView = Backbone.View.extend({

	initialize:function () {
		console.log('Initializing Officer Log View');
		this.template = _.template(tpl.get('officerlog'));
	},

	render:function (eventName) {
		$(this.el).html(this.template());
		return this;
	}

});