module.exports = DS.Model.extend({
	name: DS.attr(),
	slug: DS.attr(),
	description: DS.attr(),
	parent: DS.attr(),
	count: DS.attr('number'),
	link: DS.attr(),
	posts: DS.hasMany('post', {
		async: true
	})
});
