const TITLES = [
  "Web Developer",
  "Tailored to Your Needs",
  "love to Learn",
  "Hard Worker"
];

var title = document.getElementById("title");
var titleIndex = 0;
title.innerHTML = TITLES[titleIndex];
title.style.opacity = 0;
setTimeout(fadeIn, 2000);

function fadeIn() {
  title.style.opacity = 0;
  title.innerHTML = TITLES[titleIndex];
  titleIndex = titleIndex = (titleIndex + 1) % TITLES.length;

  (function fade() {
    var op = parseFloat(title.style.opacity);
    if (!((op += 0.01) > 1)) {
      title.style.opacity = op;
      requestAnimationFrame(fade);
    } else {
      setTimeout(fadeOut, 1000);
    }
  })();
}

function fadeOut() {
  title.style.opacity = 1;

  (function fade() {
    if ((title.style.opacity -= 0.01) < 0) {
      setTimeout(fadeIn, 1000);
    } else {
      requestAnimationFrame(fade);
    }
  })();
}
