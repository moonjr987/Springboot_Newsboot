// Smooth scrolling effect
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Calculate target offset considering navbar height
        var navbarHeight = $('.navbar').height();
        var targetOffset = $(hash).offset().top;
  
        // Check if navbar is fixed at the top
        if ($('.navbar').hasClass('fixed-top')) {
          // Subtract navbar height only if it is fixed
          targetOffset -= navbarHeight;
        }
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: targetOffset
        }, 800, function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });