// Animated scroll to top

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 25
        }, 500);
        return false;
      }
    }
  });
});

// Initialize carousels

$( document ).ready( function (){

  $('.carousel').slick({

    lazyLoad: 'progressive',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    dots: true,
    draggable: false

  });

  setSlideImageWidth();

  $( window ).resize( function() {

    setSlideImageWidth();

  });

});

// Make carousels responsive

function setSlideImageWidth () {
  $('.carousel img').width(
    $('.carousel').width()
  );

  $('.carousel iframe').width(
    $('.carousel').width()
  );

  $('.carousel iframe').height(
    $('.carousel').width()/1.5
  );
}

// Click behavior for slideshows

$('.carousel').click( function() {
  $(this).slick('slickNext');
})