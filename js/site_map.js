

jQuery(document).ready(function () {
  
  // Hides the classes with the following name.
  $('.contentBox').hide();
  
  // Adds a click effect to the h2 elements
  $('h2').click(function(){
    
    // Determines on how quick the content will slide up: set for 1 second.
    $('.contentBox').slideUp(1000); 

    // Adds a toggle effect for the classes so that it can turn on and off. Set for 1 second.
    $(this).next('.contentBox').slideToggle(1000);

  });
  
  // Hover effect for the p element that calls to the function so that it changes color when hovered over and out.
  $('p').hover(
    function(){$('p').css({'color':'yellow', 'background':'#000' } );},
    function(){$('p').css( {'color':'#fff', 'background':'#000'} );}
  );
  
  
  
});