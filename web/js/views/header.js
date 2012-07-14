window.HeaderView = Backbone.View.extend({

	initialize : function() {
		this.template = _.template(tpl.get('header'));
	},

	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	},

	events : {
		"click ul.nav a" : "updateMenu",
		"click #begin-game" : "startGame",
		"focus #new-game-code" : "clearErrors"
	},

	updateMenu : function(event) {
		var items = $(event.target).parent().siblings();
		items.removeClass('active');
		$(event.target).parent().addClass('active');
	},

	startGame : function(ev) {
		var code = $('#new-game-code').val();
		$.getJSON('/api/mission/verify/' + code, function(res) {
			if (res.response) {
				
			} else {
				
			}
		});
		/*if (!) {
		 $('#new-game-code').siblings('.help-inline').slideUp(0, function() {
		 $(this).text('Invalid code! Please try again.').slideDown(transitionSpeed);
		 });
		 $('#new-game-code').parents('fieldset.control-group').first().addClass('error');
		 } else {
		 this.clearErrors();
		 }*/
	},

	clearErrors : function(ev) {
		$('#new-game-code').siblings('.help-inline').slideUp(transitionSpeed);
		$('#new-game-code').parents('fieldset.control-group').first().removeClass('error');
	}
});
