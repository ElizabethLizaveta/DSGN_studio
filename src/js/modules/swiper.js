const Swiper = require('swiper');

const swiperSlide = {
  function() {
    const project1 = $('.project-1');
    const viewLink = project1.find('.project-link');
    function swiperInit() {
      const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        slidesPerView: 2,
        loop: true,
        freeMode: true,
        loopedSlides: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      const galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
    }

    function sliderInit() {
      viewLink.click(() => {
        swiperInit();
      });
    }

    return {
      publicMethod: sliderInit(),
    };
  },
};

export default swiperSlide;
