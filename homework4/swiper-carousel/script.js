new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    loop: true,

    slidesPerView: 3,

    spaceBetween: 30,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1, 
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});