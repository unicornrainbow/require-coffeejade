# require-coffeejade

**Not Stable:** This project is not yet fully developed. In particular, it only
works in development mode and does not yet work when compiled with r.js (at
least in node)

A [CoffeeJade](https://github.com/fusesource/coffeejade) loader plugin for
[RequireJS](http://requirejs.org/).

## Usage

Reference CoffeeJade files via the coffeejade! plugin name:

    require(['coffeejade!userview'], function (userView) {
      $('.user').html(userView(locals));
    });

They will be returned as a Jade template function that accepts locals as the first arg.

## Optimizing

**Not Yet Working**

When you are ready to deploy your application and want to compile your JS into a
single file you can make use of the requireJS optimizer. CoffeeJade.js includes
optimizer instructions that will precompile the templates and remove the
CoffeeJade compiler from the compiled source. Only do this if you are not going
to be dynamically including more Jade templates.

To use the activate the instructions just include:

    pragmasOnSave: {
      excludeCoffeeJade : true
    }

## License

Available via the MIT or new BSD license.

This source contains portions from the following projects of which is
governed by their licenses.

- [Coffeescript](https://github.com/jashkenas/coffee-script)
- [Jade](https://github.com/visionmedia/jade)
- [Coffeejade](https://github.com/fusesource/coffeejade)
- [require-jade](https://github.com/rocketlabsdev/require-jade)
