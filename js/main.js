function main() {

  (function () {
    'use strict';
    var toggleon = true;

    if (toggleon == true) {
      $('.navbar-toggle').on('click', function(event) {
        event.preventDefault();
        $('.navbar-default').toggleClass('on');
      });
    }
      $(window).bind('scroll', function() {
          var navHeight = 100;

          if ($(window).scrollTop() == 0) {
            toggleon = true;
            $('.phone-moda').html('toggle '+ toggleon);
          } 
          if ($(window).scrollTop() != 0) {
            toggleon = false;
            $('.phone-moda').html('toggle '+ toggleon);
          }

          if ($(window).scrollTop() > navHeight) {
              $('.navbar-default').addClass('on');
              toggleon = false;
              $('#scroll').css( "background", "#071232" );
              $('#scroll').css( "animation-play-state", "paused" );
          } else {
              $('.navbar-default').removeClass('on');
              $('#scroll').css( "background", "none" );
              $('#scroll').css( "animation-play-state", "running" );
          }
          if ( ( $(document).height() - $(window).scrollTop() ) < 900) {
            $('#scroll').addClass('rotate');
          } else {
            $('#scroll').removeClass('rotate');
          }

          if ($(window).scrollTop() == 0) {
            $('#scroll').removeClass('hov');
          }
      });

      $('body').scrollspy({ 
          target: '.navbar-default',
          offset: 80
      });

      $('#clients').owlCarousel({
      
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        autoHeight : true,
        itemsCustom : [
              [0, 1],
              [450, 1],
              [1600, 2]
            ],
      });
  
  }());

}
main();