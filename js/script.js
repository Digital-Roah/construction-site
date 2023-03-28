// Animate pie chart on scroll
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.pie').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

        $('.pie').addClass('animate');

        } else {
            $('.pie').removeClass('animate');
        }

    }); 

});


 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 
 $(function () {
     $(document).scroll(function () {
       var $nav = $(".navbar");
       $nav.toggleClass('static', $(this).scrollTop() > $nav.height());
     });
 });
 