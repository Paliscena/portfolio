const navLinks = document.querySelectorAll("nav > a");
let currentIndex = 0;
let startX = 0;

// Only apply swipe behavior on mobile
const isTouchDevice = window.matchMedia("(max-width: 768px)").matches;

function activateLink(index) {
  navLinks.forEach((link, i) => {
    const wrapper = link.querySelector(".img-wrapper");
    if (wrapper) {
      if (i === index) {
        wrapper.classList.add("active");
      } else {
        wrapper.classList.remove("active");
      }
    }
  });
}

if (!isTouchDevice) {
  // Only use the old swipe logic for non-story mode (optional)
  activateLink(currentIndex);

  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX < 0 && currentIndex < navLinks.length - 1) {
        currentIndex++;
      } else if (diffX > 0 && currentIndex > 0) {
        currentIndex--;
      }
      activateLink(currentIndex);
    }
  });
}
