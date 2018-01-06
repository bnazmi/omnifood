$(document).ready(function() {
  
   checksticky();
    /* For sticky navigation */
    function checksticky(){
      $('.js--features-section').waypoint(function(direction) { 
        if(direction == "down" && !$('.js--mobile-icon').hasClass('ion-close-round')){
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
            
        }
     }, {
        offset: '60px'
      });
    }
    /* Mobile icon event */
    $('.mobile-icon').click(function(){
      var icon = $('.js--mobile-icon');
      if(icon.hasClass('ion-navicon-round')){
        $('nav').addClass('float-main-nav animated feedInLeft');
        icon.removeClass('ion-navicon-round');
        icon.addClass('ion-close-round');
        checksticky();
        
      }else {
        $('nav').removeClass('float-main-nav');
        icon.removeClass('ion-close-round');
        icon.addClass('ion-navicon-round');
        checksticky();
      }
    });

    /* Smooth Button scroll   */
    $('.js--scroll-to-plan').click(function () {
        $('html,body').animate({scrollTop : $('.js--plans-section').offset().top},1000)
    })

    $('.js--croll-to-features').click(function (){
        $('html , body').animate({scrollTop : $('.js--features-section').offset().top},1000)
    })

    /* Smooth navigation scroll 
     *  
     *   Reusable function https://css-tricks.com/snippets/jquery/smooth-scrolling/
   */
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

    /* Animation */

    $('.js--wp-1').waypoint(function (direction) {
      $('.js--wp-1').addClass('animated feedIn')
    }, {
      offset: '50%'
    })
     
    $('.js--wp-2').waypoint(function(direction){
      $('.js--wp-2').addClass('animated feedUp')
    },{
      offset: '50%'
    })

    $('.js--wp-3').waypoint(function (direction) {
      $('.js--wp-3').addClass('animated feedIn')
    }, {
      offset: '50%'
    })

    $('.js--wp-4').waypoint(function (direction) {
      $('.js--wp-4').addClass('animated pulse')
    }, {
      offset: '30%'
    })
})