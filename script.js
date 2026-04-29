const carousel = document.getElementById("servicesCarousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const backTop = document.getElementById("backTop");

if (carousel && prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: carousel.offsetWidth * 0.8,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -carousel.offsetWidth * 0.8,
      behavior: "smooth"
    });
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}