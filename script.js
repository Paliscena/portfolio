const nav = document.getElementById("nav");

for (const link of nav.getElementsByTagName("a")) {
  const img = link.querySelector("img");

  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });

  link.addEventListener("mouseleave", () => {
    img.style.left = `0px`;
    img.style.top = `0px`;
  });
}
