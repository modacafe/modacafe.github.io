


  
function main() {


  (function () {
    'use strict';
      $(window).bind('scroll', function() {
          var navHeight = 100;
          var toggleon = false;

          if ($(window).scrollTop() == 0) {
            $('.phone-moda').html('toggle '+ toggleon);
            toggleon = true;
          } 
          if ($(window).scrollTop() > 0) {
            $('.phone-moda').html('toggle '+ toggleon);
            toggleon = false;
          }

          if ($(window).scrollTop() > navHeight) {
              $('.navbar-default').addClass('on');
              $('#scroll').css( "background", "#071232" );
              $('#scroll').css( "animation-play-state", "paused" );
          } else {
              $('.navbar-default').removeClass('on');
              $('#scroll').css( "background", "none" );
              $('#scroll').css( "animation-play-state", "running" );
          }
          if (toggleon == true) {
            $('.navbar-toggle').on('click', function() {
              $('.navbar-default').toggleClass('on');
              console.log(' 1 ...');
            });
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