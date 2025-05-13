const navLinks = document.querySelectorAll("nav > a");
let currentIndex = 0;
let startX = 0;

// Function to activate the current image on mobile
function activateLink(index) {
  navLinks.forEach((link, i) => {
    const wrapper = link.querySelector(".img-wrapper");
    const img = wrapper?.querySelector("img");

    if (wrapper && img) {
      if (i === index) {
        wrapper.classList.add("active");
        img.style.opacity = "1";
        img.style.transform = "none";
      } else {
        wrapper.classList.remove("active");
        img.style.opacity = "0";
      }
    }
  });
}

// Initial image activation
activateLink(currentIndex);

// Mobile swipe detection
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
