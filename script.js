// ✅ OPTIONAL CLEAN JS (not required for hover image behavior)

const nav = document.getElementById("nav");

for (const link of nav.getElementsByTagName("a")) {
  const img = link.querySelector("img");

  link.addEventListener("mouseleave", () => {
    // Reset image if needed
    img.style.left = "0";
    img.style.top = "0";
  });
}
