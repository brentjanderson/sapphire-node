window.models.Simulator = Backbone.Model.extend({

});

window.collections.Simulators = Backbone.Collections.extend({
	model : window.models.Simulator,
	url : '/api/'
})
