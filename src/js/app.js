// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import navbarMenu from './modules/navbar';
import projectsMenu from './modules/projects-box';
import projectFull from './modules/project-full';
import swiperSlide from './modules/swiper';
import googleMap from './modules/google-map';

(($) => {
  // When DOM is ready
  $(() => {
    googleMap.function();
  });
  navbarMenu.function();
  projectsMenu.function();
  projectFull.function();
  swiperSlide.function();
})(jQuery);
