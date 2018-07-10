function main() {

  (function () {
    'use strict';
    var toggleon = true;

      $('.navbar-toggle').on('click', function() {
        if (toggleon == true) {
          $('#bs-navbar-collapse-3').stop(true);
          $('.navbar-default').stop(true).toggleClass('on');
        } else {
          $('#bs-navbar-collapse-3').stop(true);
          $('.navbar-default').stop(true);
        }
      });

      $(window).bind('scroll', function() {
          var navHeight = 100;

          if ($(window).scrollTop() == 0) {
            toggleon = true;
          } 
          if ($(window).scrollTop() != 0) {
            toggleon = false;
          }

          if ($(window).scrollTop() > navHeight) {
              $('.navbar-default').addClass('on');
              $('#scroll').css( "background", "#071232" );
              $('#scroll').css( "animation-play-state", "paused" );
          } else {
              if ($('#bs-navbar-collapse-3').hasClass('in') != true) {
                $('.navbar-default').removeClass('on');
              }
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