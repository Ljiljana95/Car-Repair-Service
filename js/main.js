
$(document).ready(function(){

$('.burger').on('click', function() {
  $('.nav').slideToggle();
}); 

$('[data-trigger="dropdown"]').on('mouseenter', function(){
  var submenu = $(this).parent().find('.nav');
  // submenu.slideToggle();
  $(this).on('mouseleave', function(){
  submenu.slideUp(300);
  });
});

var btn = $('.back');

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

(function() {
  // store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 400) ? 1 :
           (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 4;
  } 
  // $(function() {
  //   SyntaxHighlighter.all();
  // });
 
  $window.on('load',function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  $window.on('resize' ,function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());

/*
$('input[type="email"]').focusout(function(){
  if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1){
    $('.status').html("");
  }else{
    $('.status').html("The email address is invalid. Try again.");
  }

});
var target = $('input[type="name"]');

$('input[type="name"]').focusout(function(){
  if(target.length  > -1 ){
    $('.status').html("");
  }else{
    $('.status').html("The email address is invalid. Try again.");
  }
});*/

// $('.btn').on('click', function(event) {
// 	event.preventDefault();
// 	/* Act on the event */
// 	$('.modal').addClass('open');
// });
// $('.modal .close').on('click', function(event) {
// 	event.preventDefault();
// 	/* Act on the event */
// 	$('.modal').removeClass('open');
// });

$('.btn').on('click', function(event) {
 event.preventDefault();
 /* Act on the event */
 $('.modal').slideToggle();
});

$('.modal .close').on('click', function(event) {
 event.preventDefault();
 /* Act on the event */
 $('.modal').slideToggle();
});
var safari   = navigator.userAgent.indexOf("Safari") > -1;
var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
if ((chrome) && (safari)) {
safari = false;
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}

});