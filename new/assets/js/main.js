
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

function redirectSlider(){
// simulate a "window.location.search" string.
    var testurl = "?slick1=4";

$(".slider")
    .slick()
    .each(function(){
        
        //if( window.location.search ) {
        if( testurl ) {
            
            var $slider = $(this),
                sliderid = $slider.slick("getSlick").instanceUid,
                //queries = window.location.search.slice(1).split("&"),
                queries = testurl.slice(1).split("&"),
                checkQuery;
                
                console.log(sliderid);
            
            for( query in queries ) {
                checkQuery = queries[query].split("=");
                console.log(checkQuery)
                if( checkQuery[0] === "slick" + ( sliderid + 1 ) ) {
                    $slider.slick( "slickGoTo", parseInt( checkQuery[1], 10 ) - 1, true );
                }
            }
        }

    });
}


// init carousel
$(document).on('ready', function() {
  sleek();
  // redirectSlider();
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



