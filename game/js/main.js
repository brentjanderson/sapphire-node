var AppRouter = Backbone.Router.extend({

	routes : {
		"" : "intro",
		"login" : "login",
		"login" : "login",
		"officerlog" : "officerlog",
		"powermanager" : "powermanager"
	},

	initialize : function() {
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.render().el);
	},

	intro : function() {
		if (!this.introView) {
			this.introView = new IntroView();
			this.introView.render();
		}
		$('#content').html(this.introView.el);
	},

	login : function() {
		// Since the home view never changes, we instantiate it and render it only once
		if (!this.loginView) {
			this.loginView = new LoginView();
			this.loginView.render();
		}
		$('#content').html(this.loginView.el);
	},

	officerlog : function() {
		if (!this.officerLogView) {
			this.officerLogView = new OfficerLogView();
			this.officerLogView.render();
		}

		$('#content').html(this.officerLogView.el);
	},

	powermanager : function() {
		if (!this.powerManagerView) {
			this.powerManagerView = new PowerManagerView();
			this.powerManagerView.render();
		}
		$('#content').html(this.powerManagerView.el);
	},
});

Backbone.Model.prototype.idAttribute = '_id';
tpl.loadTemplates(['intro', 'login', 'officerlog', 'powermanager', 'header'], function() {
	app = new AppRouter();
	Backbone.history.start();
});
