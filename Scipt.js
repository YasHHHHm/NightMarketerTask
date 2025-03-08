document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#carouselExample");
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,  // Auto-slide every 3 seconds
        ride: "carousel"
    });

    // Select Next and Previous Buttons
    const nextButton = document.querySelector(".carousel-control-next");
    const prevButton = document.querySelector(".carousel-control-prev");

    // Select Indicators
    const indicators = document.querySelectorAll(".carousel-indicators button");

    // Move to the next slide smoothly
    nextButton.addEventListener("click", function () {
        carousel.next();
    });

    // Move to the previous slide smoothly
    prevButton.addEventListener("click", function () {
        carousel.prev();
    });

    // Event listeners for indicator buttons
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            carousel.to(index); // Move to the selected slide smoothly
        });
    });

    // Explore Button Toggle
    const exploreBtn = document.getElementById("exploreBtn");
    const extraCategories = document.querySelector(".extra-categories");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            extraCategories.classList.toggle("d-none");
            exploreBtn.textContent = extraCategories.classList.contains("d-none") ? "Explore" : "Show Less";
        });
    }
});

