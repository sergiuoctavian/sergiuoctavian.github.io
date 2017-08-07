

function sleek(){
  //slick carousel settings
  $(".slider").slick({
    dots: true,
    infinite: true,
    arrows: false
  })
 //adding scroll behaviour
.mousewheel(function(e) {
     e.preventDefault();

    if (e.deltaY < 0) {
      $(this).slick('slickNext');
    }
    else {
      $(this).slick('slickPrev');
    }
  });

}

function muie(){
  // $(document).ready(function() {
      $("img").unveil(200, function() {
          $(this).css('opacity', '1');
      });
  // });  
}

// init carousel
$(document).on('ready', function() {
  muie();
  sleek();
});

$(function() {
    "use strict";
    var options = {
            debug: true,
            prefetch: false,
            cacheLength: 0,
            forms: '#gigi',
            allowFormCaching: false,
            blacklist: '.no-smoothState',
            onStart: {
                duration: 250, // Duration of our animation 
                render: function($container) {
                    // Add your CSS animation reversing class 

                    $container.addClass("is-exiting");
                    
                    // Restart your animation 
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function($container, $newContent) {
                    // Remove your CSS animation reversing class 
                    $container.removeClass("is-exiting");

                    // Inject the new content 
                    $container.html($newContent);
                }
            },
            onAfter: function($container, $newContent) {
              //reinit
              muie();
              sleek();
              
              // redirectSlider();
            }
        },
        smoothState = $("#main").smoothState(options).data("smoothState");
});

// detext bottom of page

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}



