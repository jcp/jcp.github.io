import React from 'react';
import { Particles as ParticlesJS } from 'react-particles-js';

const Particles = () => {
  const params = {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 700
        }
      },
      color: {
        value: '#35404A'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#35404A'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.9,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 7,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 50,
        color: '#35404A',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse'
        },
        onclick: {
          enable: false,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  return <ParticlesJS className="particles" params={params} />;
};

export default Particles;
