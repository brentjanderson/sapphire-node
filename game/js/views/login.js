window.LoginView = Backbone.View.extend({

	initialize:function () {
		console.log('Initializing Login View');
		this.template = _.template(tpl.get('login'));
		window.Officer.on("change:loggedIn", this.render, this);
	},

	events:{
		"click #loginbtn":"login",
		"click #logoutbtn":"logout"
	},

	render:function (eventName) {
		$(this.el).html(this.template({ officer:window.Officer }));
		return this;
	},

	login:function () {
	if ($('#loginname').val()=='') {
            alert("Please enter your name");
        } else {
            window.Officer.set("name", $('#loginname').val());
            window.Officer.set("loggedIn", true);
        }
	},
	
	logout:function () {
            window.Officer.set("loggedIn", false);
            window.Officer.set("name",'');
	}
});