module.exports = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

	primaryKey: 'ID',

	attrs: {
		author: {
			embedded: 'always'
		},
		tags: {
			embedded: 'always'
		},
		categories: {
			embedded: 'always'
		}
	},

	extractArray: function(store, type, payload) {

		var data = {},
			extracted = [],
			root = Ember.String.pluralize(type.typeKey);

		payload.forEach(function(e, i){

			if ( typeof e.terms.post_tag !== 'undefined' ) {
				e.tags = e.terms.post_tag;
			}

			if ( typeof e.terms.category !== 'undefined' ) {
				e.categories = e.terms.category;
			}

			delete e.terms;
			extracted.push(e);
		});

		data[root] = extracted;

		return this._super(store, type, data);
	},

});
