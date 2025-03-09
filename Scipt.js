document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#carouselExample");
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, 
        ride: "carousel"
    });

    const nextButton = document.querySelector(".carousel-control-next");
    const prevButton = document.querySelector(".carousel-control-prev");

    const indicators = document.querySelectorAll(".carousel-indicators button");

    nextButton.addEventListener("click", function () {
        carousel.next();
    });


    prevButton.addEventListener("click", function () {
        carousel.prev();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            carousel.to(index); 
        });
    });

    const exploreBtn = document.getElementById("exploreBtn");
    const extraCategories = document.querySelector(".extra-categories");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            extraCategories.classList.toggle("d-none");
            exploreBtn.textContent = extraCategories.classList.contains("d-none") ? "Explore" : "Show Less";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChangeTransitionEnd: function () {
                document.querySelectorAll(".swiper-slide").forEach(slide => {
                    slide.classList.remove("swiper-slide-active");
                });
                document.querySelector(".swiper-slide-next").classList.add("swiper-slide-active");
            }
        }
    });

    document.querySelector(".more-btn").addEventListener("click", function () {
        alert("Load more content!");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,  
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: none,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChangeTransitionEnd: function () {
                document.querySelectorAll(".swiper-slide").forEach(slide => {
                    slide.classList.remove("swiper-slide-active", "swiper-slide-prev", "swiper-slide-next");
                });

                let activeSlide = document.querySelector(".swiper-slide-active");
                if (activeSlide) {
                    activeSlide.classList.add("swiper-slide-active");
                    if (activeSlide.previousElementSibling) {
                        activeSlide.previousElementSibling.classList.add("swiper-slide-prev");
                    }
                    if (activeSlide.nextElementSibling) {
                        activeSlide.nextElementSibling.classList.add("swiper-slide-next");
                    }
                }
            }
        }
    });

    document.querySelector(".more-btn").addEventListener("click", function () {
        alert("Load more content!");
    });
});

