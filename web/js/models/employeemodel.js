window.Employee = Backbone.Model.extend({

	urlRoot:"/api/employees",

	initialize:function () {
		this.reports = new EmployeeCollection();
		// Even though the actual attribute is _id, it is still accessed through id
		this.reports.url = '/api/employees/' + this.id + '/reports';
	}

});

window.EmployeeCollection = Backbone.Collection.extend({

	model:Employee,

	url:"/api/employees",

	findByName:function (key) {
		var url = (key == '') ? '/api/employees' : "/api/employees/search/" + key;
		console.log('findByName: ' + key);
		var self = this;
		$.ajax({
			url:url,
			dataType:"json",
			success:function (data) {
				console.log("search success: " + data.length);
				self.reset(data);
			}
		});
	}

});