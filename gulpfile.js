var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(function(mix) {
    mix.sass('main.scss');
    mix.browserify('main.js');
    mix.browserify('admin.js');

    mix.browserSync({
		proxy: 'prime-town.dev',
		//host: '192.168.1.9',
        files: [
            "*.php",
            "inc/*.php",
            "partials/*.php",
            "dist/css/*.css",
        	"dist/js/*.js"
        ]
    });
});
