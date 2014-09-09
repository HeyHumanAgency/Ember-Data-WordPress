# Ember Data - WordPress Adapter

This project is intended as a basis for combining Ember as a frontend for a WordPress backend. You can use it as the starting point for a WordPress theme, or a completely standalone app that just retrieves data from WordPress.

## Background

This project utilises two key developments from Ember and WordPress. Firstly the ability to write a custom adapter for Ember Data, in this case it is possible to use the `DS.RESTAdapter` as-is and simply extend `DS.RESTSerializer`.

Secondly the [WP REST API](https://github.com/WP-API/WP-API) which is currently being developed as a plugin with a view to be be merged to core in the next major release (4.1).

Currently this requires the Canary build of Ember Data and the latest WP-API, whilst this does not preclude production usage, you should be aware that both are undergoing active development and the API may change quickly.

## Routes

Currently the following routes are supported:

```
/post/:post_slug
/page/:page_slug
/user/:user_slug
/tag/:tag_slug
/category/:category_slug
```

## Installation & Setup

You will need Node.js installed to run the build script and a WordPress installation with the [WP API plugin](https://wordpress.org/plugins/json-rest-api/) activated.

1. Clone the repo  
`$ git clone git@github.com:HeyHumanoid/Ember-Data-WordPress.git`
- Install Bower and Gulp globally if you do not have them already  
`$ npm install -g bower gulp`
- Enter the cloned directory and run the build script  
`$ cd Ember-Data-WordPress && npm install`
- Modify the environment variables to point to your WordPress installation  
`$ cp .env.sample .env`
- Once you have updated these you will need to re-compile the changes  
`$ gulp build`

## License & Copyright

Copyright © 2014 HeyHuman

This program is free software: you can redistribute it and/or modify it under the terms of the [GNU General Public License](license.md) as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
