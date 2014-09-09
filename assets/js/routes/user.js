module.exports = Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', {
			filter: {
				author_name: params.user
			}
		});
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		var slug = model.query.filter.author_name;

		var user = this.store.all('user').filter(function(user){
			return user.get('slug') === slug;
		});

		this.controllerFor('user').set('author', user.objectAt(0));
	}
});
