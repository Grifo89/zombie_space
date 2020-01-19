// this function is called to reload our gun

// We need a flag to keep track to avoid repetition of animations the first has finished
var canIclick = 0;
function reloadGun(e) {
  // This function is called to reload our gun function releadGun(e) {
    //Let's check if we can allow this to occur
  if (canIclick == 0) {
    //looks like we can so we better set our flag
    canIclick = 1;
      // play the reload animation of our SS
    $('#SZ0_1').animateSprite("play", "reload");
  }
}

// this function is called to fire our gun function
function fireGun(e) {

  // Let's check if we can allow this to occur
  if (canIclick == 0) {
    //looks like we can so we better set our flag
    canIclick = 1;
    $('#SZ0_1').animateSprite("play", "fire");
  }
}
