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

## Credit

This source contains portions from the following projects of which is
governed by their licenses.

- [Coffeescript](https://github.com/jashkenas/coffee-script)
- [Jade](https://github.com/visionmedia/jade)
- [Coffeejade](https://github.com/fusesource/coffeejade)
- [require-jade](https://github.com/rocketlabsdev/require-jade)
