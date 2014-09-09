module.exports = Ember.Route.extend({

	model: function(params) {

		var type = this.routeName;

		return this.store.find(type, {
			filter: {
				name: params[type]
			}
		});
	}

});
