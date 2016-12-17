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

  $("#portfolio-nav").click(function(e){
    e.preventDefault();
    $.ajax({url: "/views/portfolio.html", success: function(result){
      console.log(result);
        $(".main-content").addClass('move-down');
        $(".main-content").html(result);
    }});
  });

});

var $item = $('.carousel .item'); 
var $portfolio = $('#portfolio-content')
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