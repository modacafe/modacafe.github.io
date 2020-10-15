function main() {

  (function () {
    'use strict';
    var toggleon = true;

      $('.navbar-toggle').on('click', function() {
        if (toggleon == true) { 
          $('#tf-menu').stop(true).toggleClass('shadow');
          $('.navbar-default').stop(true).toggleClass('on'); 
        } else {  
          $('#tf-menu').stop(true).toggleClass('shadow');
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
              $('#scroll').addClass('hov');
              $('#scroll').removeClass('icon-moda-Scroll-icon1');
              $('#scroll').addClass('icon-moda-Scroll-icon');
          } else {
              if ($('#bs-navbar-collapse-3').hasClass('in') != true) {
                $('.navbar-default').removeClass('on');
              }
              $('#scroll').removeClass('hov');
              $('#scroll').removeClass('icon-moda-Scroll-icon');
              $('#scroll').addClass('icon-moda-Scroll-icon1');
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