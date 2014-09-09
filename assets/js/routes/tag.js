module.exports = Ember.Route.extend({

	model: function(params) {
		return this.store.find('post', {
			filter: {
				tag: params.tag
			}
		});
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		var slug = model.query.filter.tag;

		var tag = this.store.all('tag').filter(function(tag){
			return tag.get('slug') === slug;
		});

		this.controllerFor('tag').set('tag', tag.objectAt(0));
	}

});
