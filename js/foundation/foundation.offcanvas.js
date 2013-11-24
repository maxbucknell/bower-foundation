(function () {
  var m = function ($, Foundation, undefined) {
    'use strict';

    Foundation.libs.offcanvas = {
      name : 'offcanvas',

      version : '5.0.0',

      settings : {},

      init : function (scope, method, options) {
        this.events();
      },

      events : function () {
        $(this.scope).off('.offcanvas')
          .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
            e.preventDefault();
            $(this).closest('.off-canvas-wrap').toggleClass('move-right');
          })
          .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
            e.preventDefault();
            $(".off-canvas-wrap").removeClass("move-right");
          })
          .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
            e.preventDefault();
            $(this).closest(".off-canvas-wrap").toggleClass("move-left");
          })
          .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
            e.preventDefault();
            $(".off-canvas-wrap").removeClass("move-left");
          });
      },

      reflow : function () {}
    };
  };

  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'foundation'], m);
  } else if (typeof Foundation !== 'undefined' && typeof jQuery !== 'undefined') {
    m(jQuery, Foundation);
  }
}());
