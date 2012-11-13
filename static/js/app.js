$(function () {
  'use strict';

  var app = {


    // -----------------------------------------------------------------------
    // MOON
    // Calculate and display lunar phases.
    // http://www.ben-daglish.net/moon.shtml
    // https://github.com/tingletech/moon-phase/blob/gh-pages/moon-phase.js
    // -----------------------------------------------------------------------
    moon: (function () {
      var now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth(),
        d = now.getDate(),
        pos = function (y, m, d) {
          var r = y % 100;
          r %= 19;
          if (r > 9) {
            r -= 19;
          }
          r = ((r * 11) % 30) + parseInt(m) + parseInt(d);
          if (m < 3) {
            r += 2;
          }
          r -= ((y < 2000) ? 4 : 8.3);
          r = Math.floor(r + 0.5) % 30;
          r = (r < 0) ? r + 30 : r;
          return r / 29.53059;
        },
        phase = function (pos) {
          var r;
          if (pos <= 0.0625 || pos > 0.9375) {
              r = "new moon";
          } else if (pos <= 0.1875) {
              r = "waxing crescent";
          } else if (pos <= 0.3125) {
              r = "first quarter";
          } else if (pos <= 0.4375) {
              r = "waxing gibbous";
          } else if (pos <= 0.5625) {
              r = "full moon";
          } else if (pos <= 0.6875) {
              r = "waning gibbous";
          } else if (pos <= 0.8125) {
              r = "last quarter";
          } else if (pos <= 0.9375) {
              r = "new moon";
          }
          return r;
        };

      console.log(phase(pos(y, m, d)));

    }())

  };
});

