if(window.location.href.includes("?memories")){
    var newBody = " <iframe src='/old_ee/original/old.html' width='100%' height='100%' frameborder='0' style='position: absolute; left: 0; right: 0; bottom: 0; top: 0px; margin: 0 0 0 0; '>"
    document.body.innerHTML = newBody
}

// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        flippyBoi()
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });