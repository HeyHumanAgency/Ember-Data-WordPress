module.exports = Ember.Route.extend({

	filter: function(type) {

		var filter = '';

		if ( type === 'tag' ) {
			filter = 'tag';
		}
		else if ( type === 'category' ) {
			filter = 'category_name';
		}

		return filter;
	},

	model: function(params) {

		var type = this.routeName,
			filter = this.filter(type),
			query = {
				filter: {}
			};

		query.filter[filter] = params.term;

		return this.store.find('post', query);
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		var type = this.routeName,
			filter = this.filter(type),
			slug = model.query.filter[filter];

		var term = this.store.all(type).filter(function(term){
			return term.get('slug') === slug;
		});

		this.controllerFor(type).set('term', term.objectAt(0));
	}

});
