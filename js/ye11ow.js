(function() {

document.addEventListener("DOMContentLoaded", function(event) {

  var winHeight = window.innerHeight,
      css = ".page { min-height: " + winHeight + "px; }",
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style"),
      findme = document.querySelector(".findme"),
      links = document.querySelector(".links");

  // set min height
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  window.sr = new scrollReveal({
    wait: "0.3s",
    move: "50px",
    enter: "left"
  });

  var linksWalkway = new Walkway({
    selector: ".links > svg",
    duration: 1000
  });

  window.onscroll = function() {
    if (findme.offsetTop <= window.pageYOffset - winHeight * 0.2) {
      linksWalkway.draw();
    }
  };

  links.addEventListener("click", function(e) {
    var svg = null;

    if (e.target.dataset.target) {
      svg = e.target;
    } else {
      svg = e.target.parentNode;
    }

    if (svg.tagName === "svg") {
      window.open(svg.dataset.target, "_blank");
    }
  });

  links.addEventListener("mouseover", function(e) {
    var svg = null;


    if (e.target.dataset.target) {
      svg = e.target;
    } else {
      svg = e.target.parentNode;
    }

    if (svg.tagName === "svg") {
      svg.querySelector("path").style.stroke = "red";
      svg.querySelector("text").style.fill = "red";
    }
  });

  links.addEventListener("mouseout", function(e) {
    var svg = null;


    if (e.target.dataset.target) {
      svg = e.target;
    } else {
      svg = e.target.parentNode;
    }

    if (svg.tagName === "svg") {
      svg.querySelector("path").style.stroke = "#2780e3";
      svg.querySelector("text").style.fill = "#2780e3";
    }
  });
});


function animate(elem, style, unit, from, to, time) {
    if(!elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}

myName = "章旻";

}());