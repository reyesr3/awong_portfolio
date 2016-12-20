
var $ = jQuery;
var ww = $(window).width();
var hh = $(window).height();
var lleft = ((ww / 100) * 13) + 8;
var lleft2 = ((ww / 100) * 26) + 16;
var lleft3 = ((ww / 100) * 39) + 24;
var lleft4 = ((ww / 100) * 52) + 32;
var lleft5 = ((ww / 100) * 65) + 40;
var wwidth = (((ww / 100) * 13) * 6) + 48;
var w13 = (ww / 100) * 13;
$(window).on('load', function(){
    $('body').imagesLoaded( function() {
        $(".glitch-image img").clone().appendTo(".glitch-image").addClass('left').removeClass('centrale').end().clone().appendTo(".glitch-image").addClass('right').removeClass('centrale left');
        TweenLite.to($(".glitch"), 1, {delay:1,opacity:0,autoAlpha:0, ease:Expo.easeInOut});
        TweenLite.to($(".glitch-image .left, .glitch-image .right"), 1, {delay:1,opacity:1,autoAlpha:1, ease:Expo.easeInOut});
        setTimeout(function(){
           $(".glitch-image").addClass("effetto1");
           aprisfondo();
        },1500);
        setTimeout(function(){
           $(".glitch-image").removeClass("effetto1");
           $(".glitch-image").addClass("effetto2");
        },2000);
        setTimeout(function(){
           $(".glitch-image").removeClass("effetto2");
           $(".glitch-image").addClass("effetto3");
        },3000);
        setTimeout(function(){
           $(".glitch-image").removeClass("effetto3");
           $(".glitch-image").addClass("effetto4");
           TweenLite.to($(".glitch-image .centrale"), .5, {opacity:1,autoAlpha:1, ease:Expo.easeInOut});
           TweenLite.to($("#colophon"), 1, {opacity:1,bottom:"0px", ease:Expo.easeInOut});
           TweenLite.to($(".barra-titolo"), 1, {opacity:1,top:"0px", ease:Expo.easeInOut});
           TweenLite.to($("#barra-left"), 1, {opacity:1,left:"0px", ease:Expo.easeInOut});
           TweenLite.to($("#barra-right"), 1, {opacity:1,right:"0px", ease:Expo.easeInOut});
           if($(".page").length){
               caricaquesto();
           }
           var OSName="Unknown OS";
            if (navigator.appVersion.indexOf("Win")!=-1){
                $("#layer").addClass("scrollable");
                OSName="Win";
            }
            else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
            else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
            else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";


            is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
            is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
            is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
            is_safari = navigator.userAgent.indexOf("Safari") > -1;
            is_opera = navigator.userAgent.indexOf("Presto") > -1;
            is_mac = (navigator.userAgent.indexOf('Mac OS') != -1);
            is_windows = !is_mac;

            if (is_chrome && is_safari){
                is_safari=false;
              }

              if (is_safari || is_windows){
                $('body').css('-webkit-text-stroke', '0.5px');
              }
              $("#layer .page-social .wall").css({"overflow-y":"auto","overflow-x":"hidden"});
              $("#layer").addClass("scrollable");
              
        },4000);
        
    });
});
$(document).ready(function(){
  var listItems=$('#layermenu ul li.noclick'),listItemsArray=listItems.toArray();
  listItemsArray.sort(function() {return 0.5-Math.random()});
  
  $(document).on({
    mouseenter: function () {
        TweenMax.to($(this),1,{z: "60px",zIndex:5, ease:Expo.easeInOut});
        var padre = $(this).closest("li");
    },
    mouseleave: function () {
        TweenMax.to($(this),1,{z: "0px",zIndex:1, ease:Expo.easeInOut});
        
    }
  }, "#layermenu ul li.ap");
  $(document).on('click','#layermenu ul li',function(){
      
      TweenMax.to($(this),0,{className:'-=noclick'});
      listItems=$('#layermenu ul li.noclick'),listItemsArray=listItems.toArray();
      TweenMax.staggerTo(listItemsArray, 1, {z: "-600px",opacity:0, ease:Expo.easeInOut},.1);
      TweenMax.to($(this).find("h3"),.5,{height:0,paddingTop:0,paddingBottom:0,autoAlpha:0, ease:Expo.easeOut});
      TweenMax.to($(this).find('.card'),1,{height:"100vh", ease:Expo.easeInOut});
      TweenMax.to($(this),1,{top:"0%",x:"0%",y:"0%",z:0, ease:Expo.easeInOut});
      TweenMax.to($(this),1,{height:"100%", ease:Expo.easeInOut});
      TweenMax.to($(this).closest("ul"),1,{top:0,y:"0%",height:"100%", ease:Expo.easeInOut});
      TweenMax.to($(this).closest("ul"),1,{delay:.5,x:"0%",left:0,width:"100%", ease:Expo.easeInOut});
      TweenMax.to($(this),1,{delay:.5,left:0,width:"100%", ease:Expo.easeInOut});
      
      var link = $(this).attr("rel");
      $(".hamburger").toggleClass("is-active");
      $(".hamburger").toggleClass("is-back");
      TweenMax.to($("#stato-menu p"),.5,{top:"-20px", ease:Expo.easeInOut});
      TweenMax.to($(this),0,{delay:1.5,className:'-=ap'});
      if($(this).attr("id") == "philosophy") TweenMax.to($("#titolo-pagina p"),1,{top:"-10px", ease:Expo.easeInOut});
      if($(this).attr("id") == "food") TweenMax.to($("#titolo-pagina p"),1,{top:"-20px", ease:Expo.easeInOut});
      if($(this).attr("id") == "drink") TweenMax.to($("#titolo-pagina p"),1,{top:"-30px", ease:Expo.easeInOut});
      if($(this).attr("id") == "music") TweenMax.to($("#titolo-pagina p"),1,{top:"-40px", ease:Expo.easeInOut});
      if($(this).attr("id") == "events") TweenMax.to($("#titolo-pagina p"),1,{top:"-50px", ease:Expo.easeInOut});
      if($(this).attr("id") == "contact") TweenMax.to($("#titolo-pagina p"),1,{top:"-60px", ease:Expo.easeInOut});
      caricapagina(link,$(this).attr("id"));
      
      
      
  });
  
  
  $(document).on('click','.hamburger',function(){
      listItems=$('#layermenu ul li.noclick'),listItemsArray=listItems.toArray();
      listItemsArray.sort(function() {return 0.5-Math.random()});
      
      if(!$(this).hasClass('is-active') && !$("#layer").hasClass('aperto')){
         $(this).toggleClass("is-active");
         TweenMax.to($("#stato-menu p"),.5,{top:"-10px", ease:Expo.easeInOut});
         TweenMax.to($(".glitch-image"), 1, {z: "-600px",opacity:0, ease:Expo.easeInOut});
         TweenMax.to($("#layermenu"), .1, {delay:1,autoAlpha:1, ease:Expo.easeOut});
         TweenMax.staggerTo(listItemsArray, 2, {z: "0px",opacity:1, ease:Expo.easeInOut},.1);
         TweenMax.to($('#layermenu ul li'),0,{delay:2,className:'+=ap'});
         
      }else if($(this).hasClass('is-back') && $("#layer").hasClass('aperto')){
          $(this).toggleClass("is-active");
          $(this).toggleClass("is-back");
          TweenMax.to($("#titolo-pagina p"),1,{delay:1,top:"0px", ease:Expo.easeInOut});
          TweenMax.to($("#stato-menu p"),.5,{top:"-10px", ease:Expo.easeInOut});
          TweenMax.to($(".animated-close div, .animated-close h2, .animated-close span, .animated-close p"),1,{opacity:0,top:"60%", ease:Expo.easeInOut});
          TweenMax.to($(".animated-close"),1,{delay:.5,width:"0vw", ease:Expo.easeInOut});
          
          TweenMax.to($(".animated-close-2 p"),1,{opacity:0,top:"60%", ease:Expo.easeInOut});
          TweenMax.to($(".animated-close-2"),1,{delay:.5,height:"0", ease:Expo.easeInOut});
          
          if($(".page-philosophy").length){
              //TweenLite.to($("#food .card"),1,{delay:1,width:"100%",height:"90%", ease:Expo.easeInOut});
              
              TweenMax.to($("#philosophy,#drink, #music, #events, #food, #contact"),.5,{delay:1.5,width:w13, ease:Expo.easeInOut});
              TweenMax.to($("#layer"),.5,{delay:1.5,autoAlpha:0, ease:Expo.easeOut});
              TweenMax.to($(".page-philosophy"),0,{delay:1.5,autoAlpha:0});
              $("#layer").removeClass("aperto");
              $("#layer").removeAttr("rel");
              TweenMax.to($("#philosophy .card"),1,{delay:1,width:"100%",height:"90%", ease:Expo.easeInOut});
              TweenMax.to($("#philosophy"),1,{delay:1,height:"60%",top:"50%",y:"-50%",z:0,left:0, ease:Expo.easeInOut});
              TweenMax.to($("#layermenu ul"),1,{delay:1,top:"50%",y:"-50%", ease:Expo.easeInOut});
              TweenMax.to($("#layermenu ul"),1,{delay:1,x:"-50%",left:"50%",width:wwidth, ease:Expo.easeInOut});
              listItems=$('#layermenu ul li.noclick'),listItemsArray=listItems.toArray();
              TweenMax.staggerTo(listItemsArray, 1, {delay:1.5,z: "0px",opacity:1, ease:Expo.easeInOut},.1);
              TweenMax.to($('#philosophy h3'),.5,{delay:1.5,height:"auto",autoAlpha:1, ease:Expo.easeOut});
              TweenMax.to($('#philosophy'),0,{delay:1.5,className:'+=noclick',zIndex: 1});
              TweenMax.to($('#philosophy, #drink, #music, #food, #events, #contact'),0,{delay:1,className:'+=ap',zIndex: 1});
              
              
              window.history.pushState("", "Malloni Trace", "http://www.mallonitrace.com/");
          }
          if($(".page-social").length){
              
              TweenMax.to($("#philosophy,#drink, #music, #events, #food, #contact"),.5,{delay:1.5,width:w13, ease:Expo.easeInOut});
              TweenMax.to($("#layer"),.5,{delay:1.5,autoAlpha:0, ease:Expo.easeOut});
              TweenMax.to($(".page-social"),0,{delay:1.5,autoAlpha:0});
              $("#layer").removeClass("aperto");
              $("#layer").removeAttr("rel");
              TweenMax.to($("#drink .card, #music .card, #events .card, #food .card, #contact .card"),1,{delay:1,width:"100%",height:"90%", ease:Expo.easeInOut});
              
              TweenMax.to($("#food"),1,{delay:1,height:"60%",top:"50%",y:"-50%",z:0,left:lleft, ease:Expo.easeInOut});
              TweenMax.to($("#drink"),1,{delay:1,height:"60%",top:"50%",y:"-50%",z:0,left:lleft2, ease:Expo.easeInOut});
              TweenMax.to($("#music"),1,{delay:1,height:"60%",top:"50%",y:"-50%",z:0,left:lleft3, ease:Expo.easeInOut});
              TweenMax.to($("#events"),1,{delay:1,height:"60%",top:"50%",y:"-50%",z:0,left:lleft4, ease:Expo.easeInOut});
              TweenMax.to($("#contact"),1,{delay:1,height:"60%",top:"50%",y:"-50%",z:0,left:lleft5, ease:Expo.easeInOut});
              
              TweenMax.to($("#layermenu ul"),1,{delay:1,top:"50%",y:"-50%", ease:Expo.easeInOut});
              TweenMax.to($("#layermenu ul"),1,{delay:1,x:"-50%",left:"50%",width:wwidth, ease:Expo.easeInOut});
              listItems=$('#layermenu ul li.noclick'),listItemsArray=listItems.toArray();
              TweenMax.staggerTo(listItemsArray, 1, {delay:1.5,z: "0px",opacity:1, ease:Expo.easeInOut},.1);
              TweenMax.to($('#drink h3, #music h3, #events h3, #food h3, #contact h3'),.5,{delay:1.5,height:"auto",autoAlpha:1, ease:Expo.easeOut});
              TweenMax.to($('#drink, #music, #food, #events, #contact'),0,{delay:1,className:'+=noclick',zIndex: 1});
              TweenMax.to($('#philosophy, #drink, #music, #food, #events, #contact'),0,{delay:1,className:'+=ap',zIndex: 1});
              
              window.history.pushState("", "Malloni Trace", "http://www.mallonitrace.com/");
          }
      }else{
         $(this).toggleClass("is-active");
         TweenMax.to($("#stato-menu p"),.5,{top:"0px", ease:Expo.easeInOut});
         TweenMax.to($("#titolo-pagina p"),1,{top:"0px", ease:Expo.easeInOut});
         TweenMax.to($(".glitch-image"), 1, {delay:1,z: "0px", opacity:1,ease:Expo.easeInOut});
         TweenMax.staggerTo(listItemsArray, 2, {z: "-600px",opacity:0, ease:Expo.easeInOut},.1);
         TweenMax.to($("#layermenu"), 1, {delay:2, autoAlpha:0, ease:Expo.easeOut});
         TweenMax.to($('#layermenu ul li'),0,{delay:1.5,className:'-=ap'});
      }
  });
 
});
$(window).resize(function(){
   ww = $(window).width();
   hh = $(window).height();
   
   lleft = ((ww / 100) * 13) + 8;
   lleft2 = ((ww / 100) * 26) + 16;
   lleft3 = ((ww / 100) * 39) + 24;
   lleft4 = ((ww / 100) * 52) + 32;
   lleft5 = ((ww / 100) * 65) + 40;
   wwidth = (((ww / 100) * 13) * 6) + 48;
   w13 = (ww / 100) * 13;
   
    if($("#layer.aperto").length){
       $("#layermenu ul li").width(ww);
       $("#layermenu ul").width(wwidth);
       TweenMax.to($("#layermenu ul li"),0,{top:'50%'});
    }else{
        $("#layermenu ul li").width(w13);
        TweenMax.to($("#philosophy"),0,{left:0, ease:Expo.easeInOut});
        TweenMax.to($("#food"),0,{left:lleft, ease:Expo.easeInOut});
        TweenMax.to($("#drink"),0,{left:lleft2, ease:Expo.easeInOut});
        TweenMax.to($("#music"),0,{left:lleft3, ease:Expo.easeInOut});
        TweenMax.to($("#events"),0,{left:lleft4, ease:Expo.easeInOut});
        TweenMax.to($("#contact"),0,{left:lleft5, ease:Expo.easeInOut});
        $("#layermenu ul").width(wwidth);
    }
   
   if($("#layermenu ul li.noclick").length){
       TweenMax.to($("#layermenu ul li"),0,{y:'-50%'});
   }
});
function aprisfondo(){
    setTimeout(function(){
        counter = 10;
        TweenLite.to($("#canvas"), 3, {opacity:1,autoAlpha:1, ease:Expo.easeInOut});
    },1000);
    setTimeout(function(){
        counter = 20;
    },1500);
    setTimeout(function(){
        counter = 30;
    },2000);
    setTimeout(function(){
        counter = 40;
    },2500);
    setTimeout(function(){
        counter = 50;
    },3000);
}

function caricapagina(link,pagina){
    $("#layer").addClass("aperto");
    $("#layer").attr("rel",pagina);
    
    $.ajax({
        type: "POST",
        url: link,
        data: {"test": "1"},
        beforeSend:function(){
                                
        },
        success: function(articolo)
        {
            setTimeout(function(){
                TweenLite.to($("#layer"),.5,{autoAlpha:1, ease:Expo.easeOut});
                $("#layer").html(articolo);
                if($(".page-philosophy").length){
                    philosophy();
                }
                $("#layer .page-social .wall").css({"overflow-y":"auto","overflow-x":"hidden"});
                $("#layer").addClass("scrollable");
                if($(".page-social").length){
                    $(".sc").bind('inview', function(event, visible) {
                        if (visible) {

                            TweenLite.to($(this).find(".contieni-immagine"), 1, {height:"100%", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".base2"), 1, {delay:.3,height:"0%",bottom:"0px", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".base1"), 1, {delay:.6,height:"0%",bottom:"0px", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".testo"), 1, {delay:.5,height:"100%", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".testo p"), 1, {delay:1, opacity:1, ease:Expo.easeInOut});
                        }
                    });
                }
                window.history.pushState("", "Malloni Trace", link);
            },1000);
            
            
        }
    });
}
function philosophy(){
    
    TweenLite.to($(".page-philosophy .testo-centrale"),1,{width:"40vw", ease:Expo.easeInOut});
                    TweenLite.to($(".page-philosophy .testo-centrale div"),1,{delay:.5,top:"50%",opacity:1, ease:Expo.easeInOut});

                    TweenLite.to($(".page-philosophy .testo-food"),1,{delay:.7,width:"40vw", ease:Expo.easeInOut});
                    TweenLite.to($(".page-philosophy .testo-food div"),1,{delay:1.2,top:"50%",opacity:1, ease:Expo.easeInOut});

                    TweenLite.to($(".page-philosophy .sotto-testo"),1,{delay:.8,width:"25vw", ease:Expo.easeInOut});
                    TweenLite.to($(".page-philosophy .sotto-testo div"),1,{delay:1.3,top:"50%",opacity:1, ease:Expo.easeInOut});

                    TweenLite.to($(".page-philosophy .scarica"),1,{delay:1,width:"25vw", ease:Expo.easeInOut});
                    TweenLite.to($(".page-philosophy .scarica div"),1,{delay:1.5,top:"50%",opacity:1, ease:Expo.easeInOut});
}
function social(){
    
    
                    $(".sc").bind('inview', function(event, visible) {
                        if (visible) {
                            TweenLite.to($(this).find(".contieni-immagine"), 1, {delay:.5,height:"100%", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".base2"), 1, {delay:.8,height:"0%",bottom:"0px", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".base1"), 1, {delay:1.1,height:"0%",bottom:"0px", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".testo"), 1, {delay:1,height:"100%", ease:Expo.easeInOut});
                            TweenLite.to($(this).find(".testo p"), 1, {delay:1.5, opacity:1, ease:Expo.easeInOut});
                        }
                    });
                
}
function caricaquesto(){
    if($(".page-id-5").length){
       var pagina = $("#philosophy");
       var attributo = "philosophy";
       $(".page-philosophy").detach().appendTo("#layer");
       TweenLite.to($("#layer"),.5,{autoAlpha:1, ease:Expo.easeOut});
       setTimeout(function(){
           philosophy();
       },2000);
       TweenMax.to($("#titolo-pagina p"),1,{top:"-10px", ease:Expo.easeInOut});
    }
    
    if($(".page-id-8").length){
       var pagina = $("#food");
       var attributo = "food";
       $(".page-social").detach().appendTo("#layer");
       TweenLite.to($("#layer"),.5,{autoAlpha:1, ease:Expo.easeOut});
       setTimeout(function(){
           social();
       },2000);
       TweenMax.to($("#titolo-pagina p"),1,{top:"-20px", ease:Expo.easeInOut});
    }
    
    if($(".page-id-11").length){
       var pagina = $("#drink");
       var attributo = "drink";
       $(".page-social").detach().appendTo("#layer");
       TweenLite.to($("#layer"),.5,{autoAlpha:1, ease:Expo.easeOut});
       setTimeout(function(){
           social();
       },2000);
       TweenMax.to($("#titolo-pagina p"),1,{top:"-30px", ease:Expo.easeInOut});
    }
    
    if($(".page-id-14").length){
       var pagina = $("#music");
       var attributo = "music";
       $(".page-social").detach().appendTo("#layer");
       TweenLite.to($("#layer"),.5,{autoAlpha:1, ease:Expo.easeOut});
       setTimeout(function(){
           social();
       },2000);
       TweenMax.to($("#titolo-pagina p"),1,{top:"-40px", ease:Expo.easeInOut});
    }
    
    if($(".page-id-17").length){
       var pagina = $("#events");
       var attributo = "events";
       $(".page-social").detach().appendTo("#layer");
       TweenLite.to($("#layer"),.5,{autoAlpha:1, ease:Expo.easeOut});
       setTimeout(function(){
           social();
       },2000);
       TweenMax.to($("#titolo-pagina p"),1,{top:"-50px", ease:Expo.easeInOut});
    }
    if($(".page-id-19").length){
       var pagina = $("#contact");
       var attributo = "contact";
       $(".page-social").detach().appendTo("#layer");
       TweenLite.to($("#layer"),.5,{autoAlpha:1, ease:Expo.easeOut});
       setTimeout(function(){
           social();
       },2000);
       TweenMax.to($("#titolo-pagina p"),1,{top:"-60px", ease:Expo.easeInOut});
    }
    
        TweenMax.to($("#stato-menu p"),.5,{top:"-10px", ease:Expo.easeInOut});
        TweenMax.to($(".glitch-image"), 1, {z: "-600px",opacity:0, ease:Expo.easeInOut});
        TweenMax.to($("#layermenu"), .1, {delay:1,autoAlpha:1, ease:Expo.easeOut});
        TweenMax.to(pagina, 2, {delay:.5,z: "0px",opacity:1, ease:Expo.easeInOut});
        
        TweenMax.to(pagina,0,{delay:1,className:'-=noclick'});
        
        TweenMax.to(pagina.find("h3"),.5,{delay:.5,height:0,paddingTop:0,paddingBottom:0,autoAlpha:0, ease:Expo.easeOut});
        TweenMax.to(pagina.find('.card'),1,{delay:.5,height:"100vh", ease:Expo.easeInOut});
        TweenMax.to(pagina,1,{delay:.5,height:"100%",top:0,x:"0%",y:"0%", ease:Expo.easeInOut});
        TweenMax.to(pagina.closest("ul"),1,{delay:.5,top:0,y:"0%",height:"100%", ease:Expo.easeInOut});
        TweenMax.to(pagina.closest("ul"),1,{delay:.5,x:"0%",left:0,width:"100%", ease:Expo.easeInOut});
        TweenMax.to(pagina,1,{delay:.5,left:0,width:"100%", ease:Expo.easeInOut});
        
        TweenMax.to($("#layer"),0,{delay:1,className:'+=aperto'});
        
        $(".hamburger").toggleClass("is-back");
        
        TweenMax.to($("#stato-menu p"),.5,{delay:.5,top:"-20px", ease:Expo.easeInOut});
        
   
    
    
}


