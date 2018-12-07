/*Global Vars*/

var i = 1;


/*Functions*/
function animation() {
  var title1 = new TimelineMax();
  title1.to(".fancyButton", 0, {
    visibility: 'hidden',
    opacity: 0
  })
  title1.staggerFromTo(".fancyTitle span", 0.5, {
    ease: Back.easeOut.config(1.7),
    opacity: 0,
    bottom: -80
  }, {
    ease: Back.easeOut.config(1.7),
    opacity: 1,
    bottom: 0
  }, 0.05);
  title1.to(".fancyButton", 0.2, {
    visibility: 'visible',
    opacity: 1
  })
}


function myLoop() {
  setTimeout(function () {
    animation();
    $('#fancyText').hover(function(){
      animation()},1000);

    if (i < Number.POSITIVE_INFINITY) {
      i++;
      myLoop();
    }
  },250)
}

/*Calling the functions from the CDN LIB and the functions above */ 
$(document).ready(function () {
  $(".fancyTitle").lettering();
});


$(document).ready(function () {
  myLoop();
}, 1000);

