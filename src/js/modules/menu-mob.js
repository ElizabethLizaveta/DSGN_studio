const fullMenu = (($) => {
  const projectBtn = $('.projects-button');
  const projectMenu = $('.projects-menu');
  const timeBtn = $('.timeline-button');
  const timeMenu = $('.years-menu');

  function menuShow(menu) {
    menu.slideToggle();
  }

  function arrowRotate(toggleBtn) {
    if (toggleBtn.hasClass('rotate-down')) {
      toggleBtn.addClass('rotate-up');
      toggleBtn.removeClass('rotate-down');
    } else if (toggleBtn.hasClass('rotate-up')) {
      toggleBtn.addClass('rotate-down');
      toggleBtn.removeClass('rotate-up');
    } else {
      toggleBtn.addClass('rotate-up');
    }
  }

  function projectMenuShow() {
    projectBtn.click(() => {
      menuShow(projectMenu);
      arrowRotate(projectBtn);
    });
  }

  function timeMenuShow() {
    timeBtn.click(() => {
      menuShow(timeMenu);
      arrowRotate(timeBtn);
    });
  }

  const init = () => {
    projectMenuShow();
    timeMenuShow();
  };
  return { init };
})(jQuery);

export default fullMenu;
