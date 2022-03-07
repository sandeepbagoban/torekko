/* SMOOTH SCROLL */
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
/* FIREFLIES */
var WIDTH, HEIGHT, canvas, con, g;
var pxs = [];
var rint = 50;
$(document).ready(function() {
    var windowSize = function() {
        WIDTH = $('.galaxy-wrapper').innerWidth();
        HEIGHT = $('.galaxy-wrapper').innerHeight();
        canvas = $('#galaxy');
        canvas.attr('width', WIDTH).attr('height', HEIGHT);
    };
  
    windowSize();
  
    $(window).resize(function() {
        windowSize();
    });

    con = canvas[0].getContext('2d');
    for (var i = 0; i < 100; i++) {
        pxs[i] = new Circle();
        pxs[i].reset();
    }
    requestAnimationFrame(draw);
});

function draw() {
    con.clearRect(0, 0, WIDTH, HEIGHT);
    con.globalCompositeOperation = "lighter";
    for (var i = 0; i < pxs.length; i++) {
        pxs[i].fade();
        pxs[i].move();
        pxs[i].draw();
    }
    requestAnimationFrame(draw);
}

function Circle() {
    this.s = {
        ttl: 15000,
        xmax: 5,
        ymax: 2,
        rmax: 7,
        rt: 1,
        xdef: 960,
        ydef: 540,
        xdrift: 4,
        ydrift: 4,
        random: true,
        blink: true
    };
    this.reset = function() {
        this.x = (this.s.random ? WIDTH * Math.random() : this.s.xdef);
        this.y = (this.s.random ? HEIGHT * Math.random() : this.s.ydef);
        this.r = ((this.s.rmax - 1) * Math.random()) + 1;
        this.dx = (Math.random() * this.s.xmax) * (Math.random() < 0.5 ? -1 : 1);
        this.dy = (Math.random() * this.s.ymax) * (Math.random() < 0.5 ? -1 : 1);
        this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
        this.rt = Math.random() * this.hl;
        this.s.rt = Math.random() + 1;
        this.stop = Math.random() * 0.2 + 0.4;
        this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
        this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    };
    this.fade = function() {
        this.rt += this.s.rt;
    };
    this.draw = function() {
        if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
        else if (this.rt >= this.hl) this.reset();
        var newo = 1 - (this.rt / this.hl);
        con.beginPath();
        con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        con.closePath();
        var cr = this.r * newo;
        g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        g.addColorStop(0.0, 'rgba(193,254,254,' + newo + ')');
        g.addColorStop(this.stop, 'rgba(193,254,254,' + (newo * 0.2) + ')');
        g.addColorStop(1.0, 'rgba(193,254,254,0)');
        con.fillStyle = g;
        con.fill();
    };
    this.move = function() {
        this.x += (this.rt / this.hl) * this.dx;
        this.y += (this.rt / this.hl) * this.dy;
        if (this.x > WIDTH || this.x < 0) this.dx *= -1;
        if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
    };
    this.getX = function() {
        return this.x;
    };
    this.getY = function() {
        return this.y;
    };
};

// MENU
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
    })
})(jQuery);


$('.menu.social ul.nav-menu li a').click(function(){
            $(".menu.social").toggleClass('active');
});
$('.menu.social ul.nav-menu li a').click(function(){
            $("body").toggleClass('active');
});
$('.menu.social ul.nav-menu li a').click(function(){
            $(".nav-toggle").toggleClass('active');
});
$('.menu.social ul.nav-menu li a').click(function(){
            $(".menu.social ul.nav-menu").toggleClass('active');
});

/* AUTO SCROLL HEIGHT */


/* BACK TO TOP */

$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('#scroll').fadeIn('slow');
    if (scrolled < 200) $('#scroll').fadeOut('slow');
  });
  
  //Click event
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});


/* YOUTUBE VIDEO */
/*$("video").prop('muted', true);

$("#playvideo").click(function () {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $(this).addClass('unmute-video');

    } else {
        $("video").prop('muted', true);
        $(this).removeClass('unmute-video');
    }
    console.log($("video").prop('muted'))
});


var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          var player;

          function onYouTubeIframeAPIReady() {
            player = new YT.Player('video1', {
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }

          function onPlayerReady() {
            console.log("hey Im ready");
            //do whatever you want here. Like, player.playVideo();
          }

          function onPlayerStateChange() {
            console.log("my state changed");
          }

          document.getElementById("playvideo").addEventListener('click', function(event) {
            console.log(player);

            if (player.isMuted()) {
              player.unMute();
            } else {
              player.mute();
            }
          });*/
          
$(document).ready(function(){
   if ($('#load').is(':visible')){
         $('body').addClass("overflow");
    }
 });


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $("#timeline-box").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fadeIn"); 
    } else {
      el.removeClass("fadeIn");
    }
  });
  
});
