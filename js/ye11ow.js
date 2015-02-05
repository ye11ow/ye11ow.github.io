$(document).ready( function(){

  $( "<style type=\"text/css\">.page { min-height: " + $(window).height() + "px }</style>")
    .appendTo( "head" );

  window.sr = new scrollReveal({
    wait: "0.3s",
    move: "50px",
    enter: "left"
  });

  var links = new Walkway({
    selector: ".links > svg",
    duration: 1000
  });

  $(window).on("scroll", function(){
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

  $(".links").on("click", "svg", function(event) {
    var $target = $(event.currentTarget),
        link = $target.attr("data-target");

    window.open(link, "_blank");
  });

  $(".links").on("mouseover", "svg", function(event) {
    var $target = $(event.currentTarget);

    $target.find("path").css("stroke", "red");
    $target.find("text").css("fill", "red");
  });

  $(".links").on("mouseout", "svg", function(event) {
    var $target = $(event.currentTarget);

    $target.find("path").css("stroke", "#2780e3");
    $target.find("text").css("fill", "#2780e3");
  });


});

var myName = "章旻";