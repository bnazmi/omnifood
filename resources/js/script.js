$(document).ready(function() {
    
    $('.js--features-section').waypoint(function(direction) { 
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
            
        }
     }, {
        offset: '60px'
      })

   
})