const heightCalc = {
  function() {
    const newsContent = $('.news-content');
    const newsHeader = newsContent.find('.col .header-wrap');
    const textWrap = newsContent.find('.col .text-wrap');


    function findMaxHeight(elem) {
      let maxHeight = 0;

      elem.each(function () {
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });

      elem.height(maxHeight);
    }

    function setHeight() {
      findMaxHeight(newsHeader);
      findMaxHeight(textWrap);
    }

    return {
      publicMethod: setHeight(),
    };
  },
};

export default heightCalc;
