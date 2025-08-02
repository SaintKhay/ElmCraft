const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const hero = document.querySelector(".hero-section");

hero.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-show")) {
    navLinks.classList.toggle("show");
  } else {
    navLinks.classList.remove("show");
  }
});

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;

    // Close all others
    accordionBtns.forEach((otherBtn) => {
      if (otherBtn !== this) {
        otherBtn.classList.remove("active");
        otherBtn.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle current
    this.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Page Navigation
document.querySelectorAll(".nav__link").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
