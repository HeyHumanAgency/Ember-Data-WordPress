module.exports = DS.RESTAdapter.extend({
	host: process.env.WPAPI_HOST || location.host,
	namespace: process.env.WPAPI_NAMESPACE || 'wp-json',
});
