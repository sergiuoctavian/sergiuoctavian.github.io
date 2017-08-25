

function sleek(){
  //slick carousel settings
  $(".slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    vertical: true
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

function lazyLoad(){
  // $(document).ready(function() {
      $("img").unveil(200, function() {
          $(this).css('opacity', '1');
      });
  // });  
}

// init carousel
$(document).on('ready', function() {
  lazyLoad();
  // sleek();
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
              lazyLoad();
              // sleek();
              
              // redirectSlider();
            }
        },
        smoothState = $("#main").smoothState(options).data("smoothState");
});

// detext bottom of page

// function getDocHeight() {
//   var D = document;
//   return Math.max(
//     D.body.scrollHeight, D.documentElement.scrollHeight,
//     D.body.offsetHeight, D.documentElement.offsetHeight,
//     D.body.clientHeight, D.documentElement.clientHeight
//   );
// }


 (function () {
    var $w = $(window);
    var $circ = $('.animated-circle');
    var $progCount = $('.progress-count');
    var $prog2 = $('.progress-indicator-2');
    var wh = $w.height();
    var h = $('html').height();
    var sHeight = h - wh;
    $w.on('scroll', function () {
        var perc = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
        updateProgress(perc);
    });

    function updateProgress(perc) {
        var circle_offset = 126 * perc;
        $circ.css({
            "stroke-dashoffset": 126 - circle_offset
        });
        $progCount.html(Math.round(perc * 100) + "%");

        $prog2.css({
            width: perc * 100 + '%'
        });
    }

}());


