$(document).ready(function(){
    $(window).scroll(function(){
     var showAfter = 100;
     if ( $(this).scrollTop() > showAfter ) { 
      $('#back_to_top').fadeIn();
     } else { 
      $('#back_to_top').fadeOut();
     }
    });
    $('#back_to_top').click(function(){
     $('html, body').animate({scrollTop : 0},800);
     return false;
    });
    
   });