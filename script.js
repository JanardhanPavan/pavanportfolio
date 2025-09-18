// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});

// Fade-in animation on scroll
const sections = document.querySelectorAll(".section, .card, .skill");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});


