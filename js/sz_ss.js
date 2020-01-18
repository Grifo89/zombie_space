// We need a one stop fuction that will allow us to process sprite sheets
function setup_SpriteSheet(div_name, image_name, no_of_frames, widthx, heightx) {

  // need the ratio of the container's width/height
  var imageOrgRatio = $(div_name).height()/$(div_name).width();

  // need to ensure no trailing decimals
  var ratio2 = Math.round(ratio * 10) / 10;

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

// Setup he gun
function setup_gun_SS() {
  // first lest's setup our gun SS
  setup_SpriteSheet('#SZ0_1','Images/SZ_gun_SS.png', 28,150,150);

  // need to access a special function in our js/ss.js file
  $("#SZ0_1").animateSprite({
        fps: 10,
        animations: {
            static: [0],
            reload: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            fire: [24,25,26,27,28],
        },
        duration: 50,
        loop: false,
        complete: function () {
            // use complete only when you set animations with 'loop: false'
            //alert("animation End");
        }
    });
}
