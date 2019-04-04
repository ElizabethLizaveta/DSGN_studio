const navbarMenu = {
  function() {
    const toggleBtn = $('.hamburger');
    const navbarNav = $('.navigation');

    function toggleAnimate() {
      toggleBtn.toggleClass('is-active');
    }

    function navbarShow() {
      if (window.matchMedia('(min-width: 768px)').matches) {
        navbarNav.toggleClass('navigation-visible');
      } else {
        navbarNav.slideToggle();
      }
    }

    function navbarMain() {
      toggleBtn.click(() => {
        toggleAnimate();
        navbarShow();
      });
    }

    return {
      publicMethod: navbarMain(),
    };
  },
};

export default navbarMenu;
