$(function () {
  'use strict';

  var app = {

    // -----------------------------------------------------------------------
    // UI
    // General UI enhancements
    // -----------------------------------------------------------------------
    ui: (function () {
      var icon = $('.icon'),
        transition = $('#moon, #phase');

      // Add CSS3 transition on resize
      // Avoids awkward reload transition
      $(window).bind('resize', function () {
        if (!transition.hasClass('transition')) {
          transition.addClass('transition');
        }
      });

      // Add tooltips to icons
      icon.tooltip({'placement': 'bottom'});
    }()),

    // -----------------------------------------------------------------------
    // LUNAR PHASE
    // Calculate and display lunar phases.
    // http://www.ben-daglish.net/moon.shtml
    // https://github.com/tingletech/moon-phase/blob/gh-pages/moon-phase.js
    // http://lunaf.com/english/moon-phases/
    // -----------------------------------------------------------------------
    moon: (function () {
      var moon = $('#moon'),
        cover = $('#phase'),
        both = $('#moon, #phase'),
        now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth(),
        d = now.getDate(),
        pos = function (y, m, d) {
          // Calculate position
          var r = y % 100;
          r %= 19;
          if (r > 9) {
            r -= 19;
          }
          r = ((r * 11) % 30) + parseInt(m, 10) + parseInt(d, 10);
          if (m < 3) {
            r += 2;
          }
          r -= ((y < 2000) ? 4 : 8.3);
          r = Math.floor(r + 0.5) % 30;
          r = (r < 0) ? r + 30 : r;
          return r / 29.53058867;
        },
        phase = function (pos) {
          // Return lunar phase class
          var r;
          if (pos >= 0.97 || pos <= 0.04) {
              r = ['new-moon', 'New Moon'];
          } else if (pos <= 0.23) {
              r = ['waxing-crescent', 'Waxing Crescent'];
          } else if (pos <= 0.29) {
              r = ['first-quarter', 'First Quarter'];
          } else if (pos <= 0.48) {
              r = ['waxing-gibbous', 'Waxing Gibbous'];
          } else if (pos <= 0.54) {
              r = ['full-moon', 'Full Moon'];
          } else if (pos <= 0.72) {
              r = ['waning-gibbous', 'Waning Gibbous'];
          } else if (pos <= 0.77) {
              r = ['last-quarter', 'Last Quarter'];
          } else if (pos <= 0.96) {
              r = ['waning-crescent', 'Waning Crescent'];
          }
          return r;
        },
        current = phase(pos(y, m, d));

      // Add lunar phase class
      both.addClass(current[0]);

      // Add tooltips to moon
      moon.tooltip({
        'html': true,
        'placement': 'bottom',
        'title': 'Current lunar phase: <strong>' + current[1] + '</strong>'
      });

      // Fade moon in if not 'new-moon'
      if (!moon.hasClass('new-moon')) {
        moon.animate({
          'opacity': 1
        }, 350);
      }

      // Hover effect for 'new-moon'
      moon.hover(function () {
        var $this = $(this);
        if ($this.hasClass('new-moon') && !$this.hasClass('active')) {
          $this.filter(':not(:animated)').animate({
            'opacity': 1
          }, 300).addClass('active');
        }
      }, function () {
        var $this = $(this);
        if ($this.hasClass('new-moon') && $this.hasClass('active')) {
          $this.filter(':not(:animated)').animate({
            'opacity': 0.1
          }, 300).removeClass('active');
        }
      });

    }())

  };
});

