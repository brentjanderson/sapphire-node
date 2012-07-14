window.HeaderView = Backbone.View.extend({

	initialize:function () {
		this.template = _.template(tpl.get('header'));
	},

	render:function (eventName) {
		$(this.el).html(this.template({simulatorName:'USS Voyager'}));
		return this;
	},

	events:{
	    "click ul.nav a": "updateMenu"
	},
	
	updateMenu: function(event) {
	    var items = $(event.target).parent().siblings();
	    items.removeClass('active');
	    $(event.target).parent().addClass('active');
	}

});