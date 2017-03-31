
// Navbar transitions to black background
function collapseNavbar() {
    $(".navbar-nav li a" ).on( "click", function() {
        if(!$(".navbar-default").hasClass("top-nav-collapse")) {
            $(".navbar-default").addClass("top-nav-collapse");
        };
    });
}

// Navbar tab is white when active
function currentTab() {
    $(".navbar-nav li" ).on( "click", function() {
        $(".navbar-nav li").removeClass("current-tab");
        $(".navbar-nav li a").removeClass("current-font");         
        $(this).addClass("current-tab");
        $(this).children().addClass("current-font");
    });
}

$(document).ready(function(){
    collapseNavbar();
    currentTab();

    // Navbar Functions // 

      // Dropdown Menu
      $(document.body).on('mouseenter', '.dropdown', function () {
          $('.dropdown-menu', this).not('.in .dropdown-menu').slideDown('fast');
          $(this).toggleClass('open');       
      });
      
      $(document.body).on('mouseleave', '.dropdown', function () {    
          $('.dropdown-menu', this).not('.in .dropdown-menu').slideUp('fast');
          $(this).toggleClass('open');       
      });

      // Loads Trailer Page
      $("#trailers-nav").click(function(e){
          var script = document.createElement('script');
          
          e.preventDefault();
          $.ajax({url: "/views/trailers.html", success: function(result){
              $(".main-content").addClass('move-down');
              $(".main-content").html(result);
          }});

          script.src = "assets/js/app.js";
          script.id = "app";

          $('body').append(script);
    });


  // Portfolio Functions //

    // Animation Intro 
      var port_left = $('.portfolio-left'),
          port_right = $('.portfolio-right')
        
      port_left.each(function (index, element) {
          TweenMax.from(element, 1.8, {x:20, autoAlpha:0, scale: .15, ease:Expo.easeInOut});
      });

      port_right.each(function (index, element) {
          TweenMax.from(element, 1.8, {x:-20, autoAlpha:0, scale: .15, ease:Expo.easeInOut});
      });

  // Hover Animation 
  // $(document.body).on('mouseover', '#portfolio-content li', function () {
  //   var column = $("#porfolio-column"), 
  //       items  = $(this);


  //   items.each(function (index, element) {
  //       // TweenMax.to(items,0, {className:'+=hover'}); 

  //       if($(element).hasClass('portfolio-left')) {
  //           if($(element).hasClass('center')) { 
  //               TweenMax.to(element, .8, {x: -10, y:-10, scale: 1.15, ease:Expo.easeInOut});
  //           } else { 
  //               TweenMax.to(element, .8, {x: -30, y:-10, scale: 1.15, ease:Expo.easeInOut});
  //           }
  //       } else {
  //           if($(element).hasClass('center')) { 
  //               TweenMax.to(element, .8, {x: 10, y:-10, scale: 1.15, ease:Expo.easeInOut});
  //           } else {
  //               TweenMax.to(element, .8, {x: 30, y: -10, scale: 1.15, ease:Expo.easeInOut}); 
  //           }
  //       }});
  
  //   });

  //   $(document.body).on('mouseleave', '#portfolio-content li', function () {
  //   var column = $("#portfolio-column"), 
  //       items  = $(this);

  //   items.each(function (index, element) {
  //     TweenMax.to(element, .5, {x: 0, y:0, scale: 1, ease:Power2.easeInOut}); 
  //   });
  
  // });


  // Portfolio Carousel
  $('.carousel[data-type="multi"] .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });

});



// Carousel Functions 

var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

// $('ul.nav li.dropdown').hover(function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
// }, function() {
//   $(this).find('.dropdown-menu').stop(true, true).fadeOut();
// });