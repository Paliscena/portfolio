const nav = document.getElementById("nav");

for (const link of nav.getElementsByTagName("a")) {
  link.onmousemove = (e) => {
    const rect = link.getBoundingClientRect();
    const img = link.querySelector("img");

    // You can uncomment and customize this if you want hover image movement
    // img.style.left = `${e.clientX - rect.left}px`;
    // img.style.top = `${e.clientY - rect.top}px`;
  };
}

// Removed window.onmousemove that caused nav to slide left/right
