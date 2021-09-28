jQuery(document).ready(function() { 
    $('.contentBox').hide();

    $('h3').click(function() {
        $(this).next('.contentBox').slideToggle(3000);
    });

    $('.contentBox').hover(
        function() {
            $('.contentBox').css('background', '#000');
            $('.contentBox').css('color', '#fff');
        },
        function(){
            $('.contentBox').css('background', '#fff');
            $('.contentBox').css('color', '#000'); 
        }
    );
});
