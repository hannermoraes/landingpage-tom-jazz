document.addEventListener("DOMContentLoaded", function () {
  // Cards
  const cards = document.querySelectorAll(".card");

  const cardOptions = {
    threshold: 0.5,
  };

  const cardObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, cardOptions);

  cards.forEach((card) => {
    cardObserver.observe(card);
  });

  // Imagens
  const images = document.querySelectorAll(".slide-in-left, .slide-in-right");

  const imageOptions = {
    threshold: 0.3,
  };

  const imageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, imageOptions);

  images.forEach((image) => {
    imageObserver.observe(image);
  });
});
