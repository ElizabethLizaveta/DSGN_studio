const dropMenu = (($) => {
  const projectArrow = $('.projects-arrow');
  const projectsField = $('.projects-field');
  const projectMenu = $('.projects-menu');
  const timeField = $('.time-field');
  const timelineArrow = $('.timeline-arrow');
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
    projectsField.click(() => {
      menuShow(projectMenu);
      arrowRotate(projectArrow);
    });
  }

  function timeMenuShow() {
    timeField.click(() => {
      menuShow(timeMenu);
      arrowRotate(timelineArrow);
    });
  }

  const init = () => {
    projectMenuShow();
    timeMenuShow();
  };
  return { init };
})(jQuery);

export default dropMenu;
