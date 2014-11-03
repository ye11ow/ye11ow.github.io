$(document).ready( function(){

  window.sr = new scrollReveal({
    wait: '0.3s',
    move: '50px',
    enter: 'left'
  });

  var links = new Walkway({
    selector: '.links > svg',
    duration: 1000
  });

  var $timeline_block = $('.cd-timeline-block');

  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });

  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.5 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        console.log("show");
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });

    if ($(".findme").offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
      $(".findme").animate({
        opacity: 1
      }, "fast", function(){
        links.draw(function(){
          $(".links > svg text").animate({
            opacity: 1
          }, "slow");
        });
      });
    }

  });




});

var name = "章旻";