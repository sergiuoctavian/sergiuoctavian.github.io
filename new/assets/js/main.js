// $(function(){
//   'use strict';
//   var $page = $('#main'),
//       options = {
//         debug: true,
//         prefetch: true,
//         cacheLength: 2,
//         onStart: {
//           duration: 250, // Duration of our animation
//           render: function ($container) {
//             // Add your CSS animation reversing class
//             $container.addClass('is-exiting');
//             // Restart your animation
//             smoothState.restartCSSAnimations();
            
//           }

//         },
//         onReady: {
//           duration: 0,
//           render: function ($container, $newContent) {
//             // Remove your CSS animation reversing class
//             $container.removeClass('is-exiting');
//             // Inject the new content
//             $container.html($newContent);
//             slider();
//           }
//         }
//       },
//       smoothState = $page.smoothState(options).data('smoothState');
// });

$(document).ready(function() {
  slider();

    });

    function slider() {
      //carousel
      $(".slider").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "cubic-bezier(0,.53,.57,.96)",  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {$('.circle').removeClass('1selected'); $('.circle').addClass('1unselected'); },  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) { $('.circle').addClass('1selected'); $('.circle').removeClass('1unselected');},   // This option accepts a callback function. The function will be called after the page moves.
        loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
        direction: "horizontal"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
      });

      //pagination animation
      $('.onepage-pagination').addClass('start');
      $('.circle').addClass('start');

      //circle animations
      $('.p1 .v-project-link').hover(
          function(){ $('.circle').addClass('p1'); $('body').addClass('dark'); },
          function(){ $('.circle').removeClass('p1'); $('body').removeClass('dark'); }
      )
      $('.p2 .v-project-link').hover(
          function(){ $('.circle').addClass('p2'); $('body').addClass('dark'); },
          function(){ $('.circle').removeClass('p2'); $('body').removeClass('dark'); }
      )
      $('.p3 .v-project-link').hover(
          function(){ $('.circle').addClass('p3'); $('body').addClass('dark'); },
          function(){ $('.circle').removeClass('p3'); $('body').removeClass('dark'); }
      )
      $('.p4 .v-project-link').hover(
          function(){ $('.circle').addClass('p4'); $('body').addClass('dark'); },
          function(){ $('.circle').removeClass('p4'); $('body').removeClass('dark'); }
      )
      $('.p5 .v-project-link').hover(
          function(){ $('.circle').addClass('p5'); $('body').addClass('dark'); },
          function(){ $('.circle').removeClass('p5'); $('body').removeClass('dark'); }
      )
      $('.p6 .v-project-link').hover(
          function(){ $('.circle').addClass('p6'); $('body').addClass('dark'); },
          function(){ $('.circle').removeClass('p6'); $('body').removeClass('dark'); }
      )
    }

    // $(function() {
    //     "use strict";
    //     var options = {
    //             prefetch: true,
    //             pageCacheSize: 0,
    //             onStart: {
    //                 duration: 250, // Duration of our animation 
    //                 render: function($container) {
    //                     // Add your CSS animation reversing class 

    //                     $container.addClass("is-exiting");


    //                     // Restart your animation 
    //                     smoothState.restartCSSAnimations();
    //                 }
    //             },
    //             onReady: {
    //                 duration: 0,
    //                 render: function($container, $newContent) {
    //                     // Remove your CSS animation reversing class 
    //                     $container.removeClass("is-exiting");

    //                     // Inject the new content 
    //                     $container.html($newContent);


    //                 }

    //             },
    //             onAfter: function() {
    //                 slider();
    //             }
    //         },
    //         smoothState = $("#main").smoothState(options).data("smoothState");
    // });

// detext bottom of page

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}
