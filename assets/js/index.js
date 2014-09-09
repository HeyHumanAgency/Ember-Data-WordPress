$(function() {

	var App = Ember.Application.create();

	// Services
	App.ApplicationAdapter = require('./services/adapter');
	App.ApplicationSerializer = require('./services/serializer');

	// Routes
	App.Router.map( require('./routes/router') );
	App.IndexRoute = require('./routes/index');
	App.PostRoute = require('./routes/post').extend();
	App.PageRoute = require('./routes/post').extend();
	App.UserRoute = require('./routes/user');
	App.TagRoute = require('./routes/term').extend();
	App.CategoryRoute = require('./routes/term').extend();

	// Models
	App.Post = require('./models/post').extend();
	App.Page = require('./models/post').extend();
	App.User = require('./models/user');
	App.Tag = require('./models/term').extend();
	App.Category = require('./models/term').extend();

	// Components
	App.SinglePostComponent = require('./components/single-post');

});
