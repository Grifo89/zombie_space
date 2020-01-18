function rotateGun(e) {
  // using the e value we can deduce the X cordinates
  var xPos = e.clientX;

  // We need to work out where the mouse cursor is as a percentage of the width of the screen

  // We will work this out by dividing the current X position by the overall screen width which if you remember we put in newWidth
  var currentXpositionPercentage = xPos/newWidth;

  // We now want to apply this to the maximum amount of rotation which is 50 however the starting rotation is -15 not 0
  var amountToRotate = -15 + (currentXpositionPercentage * 50)

  // Let's rotate the gun
  $("#SZ0_1").css('transform', 'rotate('+amountToRotate+'deg)');

}
