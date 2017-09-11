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
                    $.scrollify.destroy();
                }
            },
            onAfter: function() {
              //reinit
              lazyLoad();
              scrollIndicator();
              slide();
            }
        },
        smoothState = $("#main").smoothState(options).data("smoothState");
});

function lazyLoad(){
  $("img").unveil(200, function() {
    $(this).css('opacity', '1');
  }); 
}

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

function scrollIndicator(){
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

  idleTimer = null;
  idleState = false;
  idleWait = 1000;

  (function ($) {
      $(document).ready(function () {
          $('*').bind('mousemove keydown scroll', function () {
              clearTimeout(idleTimer);     
              if (idleState == true) {    
                  // Reactivated event
                  $("svg, .v-header").removeClass("on");           
              }
              idleState = false;
              idleTimer = setTimeout(function () {    
                  // Idle Event
                  $("svg, .v-header").addClass("on");
                  idleState = true; }, idleWait);
          });
          $("html").trigger("mousemove");
      });
  }) (jQuery)

}

// init
$(document).ready(function(){
  lazyLoad();
  scrollIndicator();
  slide();
});





