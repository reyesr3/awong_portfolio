
function collapseNavbar() {
    $(".navbar-nav li a" ).on( "click", function() {
        if(!$(".navbar-default").hasClass("top-nav-collapse")) {
          $(".navbar-default").addClass("top-nav-collapse");
        };
    });
}

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

  // Navbar Functions
    $("#portfolio-nav").click(function(e){
      var script = document.createElement('script');

      e.preventDefault();
      $.ajax({url: "/views/portfolio.html", success: function(result){
        $(".main-content").addClass('move-down');
        $(".main-content").html(result);
      }});

      script.src = "assets/js/app.js";
      script.id = "app";

      $('body').append(script);
    });

  // Portfolio Functions

  // Animation Intro 
    var port_left = $('.portfolio-left'),
        port_right = $('.portfolio-right')
      
    port_left.each(function (index, element) {
        TweenMax.from(element, .9, {x:-200, autoAlpha:0, ease:Power1.easeInOut});
    });

    port_right.each(function (index, element) {
        TweenMax.from(element, .9, {x:200, autoAlpha:0, ease:Power1.easeInOut});
    });

  // Hover Animation 
  $(document.body).on('mouseover', '#portfolio-content li', function () {
    var random = $("#random-div"), 
        ports  = $(this),
        tl     = new TimelineLite();

    ports.each(function (index, element) {
      TweenMax.to(element, 1, {x: -50, y:-50, ease:Power1.easeInOut});
    });
  
  });


// $(document.body).on('click', '.portfolio-item', function () {
//       $(this).addClass("hover");
//       var test = $('#misc-2'),
//         test2 = $('#tv-spots'),
//         tl   = new TimelineLite();
      
//     TweenMax.from(test, 1, {z: -20}, {x: -20}, {y: -20});
// });
 



  // $("#offline").hover(function(){
  //   var element = $('#offline');

  //     $(this).addClass('hover');
  //     TweenLite.from(element, 1, {x: -200}, {y: -100});
  // });
  
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