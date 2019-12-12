console.log("Hi! Nice to see you! Welcome to my portfolio!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += 'responsive';
  } else {
    x.className = 'navtoggle';
  }
}
