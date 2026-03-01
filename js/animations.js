// animations.js – Intersection Observer for scroll animations (works for dynamically added elements)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // optionally unobserve after showing to save resources
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px",
  },
);

// Function to observe all elements with class 'animate-on-scroll' (existing and future)
function observeAnimatedElements() {
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

// Run once on page load for elements already present
document.addEventListener("DOMContentLoaded", observeAnimatedElements);

// Optional: observe new elements added later (e.g., via AJAX) – we'll call this manually after rendering
window.observeAnimatedElements = observeAnimatedElements;
