$(function () {

  /**
   * Particles JS
   */

  particlesJS('particles', {
    particles: {
      color: '#555',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: $(window).width() <= 600 ? 100 : 200,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: '#454545',
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: true,
          rotateX: 6500,
          rotateY: 6500
        }
      },
      anim: {
        enable: true,
        speed: 1
      }
    },
    retina_detect: true
  });

});
