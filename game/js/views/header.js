window.HeaderView = Backbone.View.extend({

	initialize:function () {
		this.template = _.template(tpl.get('header'));
		window.Officer.on("change:loggedIn", this.render, this);
	},

	render:function (eventName) {
		$(this.el).html(this.template({ officer:window.Officer }));
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