const navLinks = document.querySelectorAll("nav > a");
let currentIndex = 0;
let startX = 0;

const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

function activateSlide(index) {
  navLinks.forEach((link, i) => {
    if (i === index && isTouch) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

if (isTouch) {
  activateSlide(currentIndex);

  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0 && currentIndex < navLinks.length - 1) {
        currentIndex++;
      } else if (deltaX > 0 && currentIndex > 0) {
        currentIndex--;
      }
      activateSlide(currentIndex);
    }
  });
}
