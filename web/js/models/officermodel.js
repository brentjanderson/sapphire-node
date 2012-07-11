var Officer = Backbone.Model.extend({

	urlRoot:"/api/officers",

	initialize:function () {
	}
});

window.Officer = new Officer;

window.OfficerCollection = Backbone.Collection.extend({

	model:Officer,

	url:"/api/officers",

});