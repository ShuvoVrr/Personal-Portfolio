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
