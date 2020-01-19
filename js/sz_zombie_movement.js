// Let's create a zombie
function SZ_createZombie(whichOne) {
  // Create a new div to hold the zombie ss
  var div = document.createElement('div');

  // We need to hard code the CSS styles we want
  div.setAttribute('style','position: fixed; top:0; left:0;')

  // We want to positon our zombiew exactly at the tip of the planet
  var top_position = $('#SZ0_0').height() * 0.435

  //Xpox can be anywhere on our x axis
  var left_position = Math.floor(Math.random() * ($('#SZ0_0').width()) - (ratio*50)) + (ratio*50)

  // Let's position our zombie
  div.style.left = left_position + 'px';
  div.style.top = top_position + 'px';

  //give it an id
  div.id = 'zombie' + whichOne;

  //finally let's add our zombie to the screen
  document.body.appendChild(div);

  //put this new zombie through our ss function
  setup_zombie_SS(whichOne)
}
