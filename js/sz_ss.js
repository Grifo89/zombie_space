// We need a one stop fuction that will allow us to process sprite sheets
function setup_SpriteSheet(div_name, image_name, no_of_frames, widthx, heightx) {

  // need the ratio of the container's width/height
  var imageOrgRatio = $(div_name).height()/$(div_name).width();

  // need to ensure no trailing decimals
  var ratio2 Math.round(ratio * 10) / 10;

  // check that the width is completety divisible by the No of frames
  var newDivisible = Math.round((widthx * ratio2) / no_of_frames);

  // the new width will be the number of frames multiplied by our new divisible
  var newWidthx = newDivisible * no_of_frames;

  // also the new height will be our ratio times the height of the div containing our image
  var newHeightx = heightx * ratio2;

  // apply our new width to our CSS
  $(div_name).css('width',(newWidthx));

  // apply our new height to our CSS
  $(div_name).css('height', newHeightx);

  // take the image name and apply as a background image to our div
  $(div_name).css('background-image', 'url('+image_name +')');

  // finally we need to apply a background size remembering we need to multiplied width by the number of frames
  $(div_name).css('background-size', newWidthx * no_of_frames + 'px ' + newHeightx + 'px');
}
