const projectFull = (($) => {
  const project1 = $('.project-1');
  const popup1 = $('.project-1-popup');
  const viewLink = project1.find('.project-link');
  const closeBtn = popup1.find('.close-button');

  function popupShow(popup) {
    popup.toggle();
  }

  function popupHide(popup) {
    popup.toggle();
  }

  function projectToggle() {
    viewLink.click((e) => {
      e.preventDefault();
      popupShow(popup1);
      $('html, body').css({
        overflow: 'hidden',
        height: '100%',
      });
    });
    closeBtn.click(() => {
      popupHide(popup1);
      $('html, body').css({
        overflow: 'scroll',
      });
    });
  }

  const init = () => {
    projectToggle();
  };
  return { init };
})(jQuery);

export default projectFull;
