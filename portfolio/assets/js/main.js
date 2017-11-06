$(function() {
    "use strict";
    var options = {
            debug: true,
            prefetch: false,
            cacheLength: 0,
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
                    //destroy scroll
                    // $.scrollify.destroy();
                    // alert('destroied');
                }
            },
            onAfter: function() {
              //reinit
              lazyLoad();
              // slide();
              // alert('reinit');
            }
        },
        smoothState = $("#main").smoothState(options).data("smoothState");
});

function lazyLoad(){
  $("img").unveil(200, function() {
    $(this).css('opacity', '1');
  }); 
};

function slide() {
  $.scrollify({
      section : ".section-scroll",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      scrollbars: false,
      // standardScrollElements: "",
      // setHeights: true,
      // overflowScroll: true,
      updateHash: true,
      touchScroll:true,
  });
};

// init
$(document).ready(function(){
  lazyLoad();
  // slide();
});





