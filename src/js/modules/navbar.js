const navbarMenu = {
  function() {
    const toggleBtn = $('.hamburger');
    const navbarNav = $('.navigation');

    function toggleAnimate() {
      toggleBtn.toggleClass('is-active');
    }

    function navbarShow() {
      navbarNav.toggleClass('navigation-visible');
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
