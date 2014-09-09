module.exports = function() {
	this.route('index', {path: '/'});
	this.route('post', {path: '/post/:post'});
	this.route('page', {path: '/page/:page'});
	this.route('user', {path: '/user/:user'});
	this.route('tag', {path: '/tag/:term'});
	this.route('category', {path: '/category/:term'});
};
