// *** Back to top button ****
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ***  PROGRESS BAR  ***
// *** Design  ***
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(designBar, {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "#FFEA82",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: "#999",
      position: "absolute",
      right: "0",
      top: "30px",
      padding: 0,
      margin: 0,
      transform: null,
    },
    autoStyleContainer: false,
  },
  from: { color: "#FFEA82" },
  to: { color: "#ED6A5A" },
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    bar.setText(Math.round(bar.value() * 100) + " %");
  },
});

bar.animate(0.9); // Number from 0.0 to 1.0

// *** HTML & CSS  ***
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(htmlBar, {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "#FFEA82",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: "#999",
      position: "absolute",
      right: "0",
      top: "30px",
      padding: 0,
      margin: 0,
      transform: null,
    },
    autoStyleContainer: false,
  },
  from: { color: "#FFEA82" },
  to: { color: "#ED6A5A" },
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    bar.setText(Math.round(bar.value() * 100) + " %");
  },
});

bar.animate(0.85); // Number from 0.0 to 1.0

// *** WORDPRESS  ***
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(wordpressBar, {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "#FFEA82",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: "#999",
      position: "absolute",
      right: "0",
      top: "30px",
      padding: 0,
      margin: 0,
      transform: null,
    },
    autoStyleContainer: false,
  },
  from: { color: "#FFEA82" },
  to: { color: "#ED6A5A" },
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    bar.setText(Math.round(bar.value() * 100) + " %");
  },
});

bar.animate(0.95); // Number from 0.0 to 1.0

/*************************/
// CIRCLE progress bar
/*************************/

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// WEB DESIGN
var bar = new ProgressBar.Circle(circle1, {
  color: "#aaa",
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: "#fff", width: 1 },
  to: { color: "#ffc576", width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100) + " %";
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "1rem";

bar.animate(0.8); // Number from 0.0 to 1.0

// WEB DEVELOPMENT
var bar = new ProgressBar.Circle(circle2, {
  color: "#aaa",
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: " #ffffff", width: 1 },
  to: { color: "#ffc576", width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100) + " %";
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "1rem";

bar.animate(0.9); // Number from 0.0 to 1.0

// GRAPHIC DESIGN
var bar = new ProgressBar.Circle(circle3, {
  color: "#aaa",
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: " #ffffff", width: 1 },
  to: { color: "#ffc576", width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100) + " %";
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "1rem";

bar.animate(0.7); // Number from 0.0 to 1.0

// AUTO CAD
var bar = new ProgressBar.Circle(circle4, {
  color: "#aaa",
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: " #ffffff", width: 1 },
  to: { color: "#ffc576", width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100) + " %";
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "1rem";

bar.animate(0.85); // Number from 0.0 to 1.0

// Owl carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

// Counter up js
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// ANIMATION AOS
AOS.init();
