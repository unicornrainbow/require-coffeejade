require({
  paths: {
    jade: '../../coffeejade'
  }
}, ['coffeejade!views/welcome'], function(welcomeView){
  var match,
      main = document.getElementById('main'),
      locals = {};

  // Get name form URL.
  match = /[\\?&]name=([^&#]*)/.exec(window.location.href);
  if (match)
    locals.name = match[1];

  main.innerHTML = welcomeView(locals);
});
