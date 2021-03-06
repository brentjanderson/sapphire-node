var transitionSpeed = 200;
var AppRouter = Backbone.Router.extend({

	routes : {
		"" : "home",
		"news" : "news",
		"contact" : "contact",
		"admin" : "admin"
	},

	initialize : function() {
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.render().el);
	},

	home : function() {
		if (!this.homeView) {
			this.homeView = new HomeView();
			this.homeView.render();
		}
		$('#content').html(this.homeView.el);
	},

	news : function() {
		if (!this.newsView) {
			this.newsView = new NewsView();
			this.newsView.render();
		}
		$('#content').html(this.newsView.el);
	},

	contact : function() {
		if (!this.contactView) {
			this.contactView = new ContactView();
			this.contactView.render();
		}
		$('#content').html(this.contactView.el);
	},

	admin : function() {
		if (!this.adminView) {
			this.adminView = new AdminView();
			this.adminView.render();
		}
		$('#content').html(this.adminView.el);
	}
});

Backbone.Model.prototype.idAttribute = '_id';
tpl.loadTemplates(['home', 'news', 'contact', 'header', 'admin'], function() {
	app = new AppRouter();
	Backbone.history.start();
});
