(function () {
  var m = function ($, Foundation, undefined) {
    'use strict';

    Foundation.libs.alert = {
      name : 'alert',

      version : '5.0.0',

      settings : {
        animation: 'fadeOut',
        speed: 300, // fade out speed
        callback: function (){}
      },

      init : function (scope, method, options) {
        this.bindings(method, options);
      },

      events : function () {
        $(this.scope).off('.alert').on('click.fndtn.alert', '[data-alert] a.close', function (e) {
            var alertBox = $(this).closest("[data-alert]"),
                settings = alertBox.data('alert-init');

          e.preventDefault();
          alertBox[settings.animation](settings.speed, function () {
            $(this).trigger('closed').remove();
            settings.callback();
          });
        });
      },

      reflow : function () {}
    };

    return Foundation;
  };

  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'foundation'], m);
  } else if (typeof Foundation !== 'undefined' && typeof jQuery !== 'undefined') {
    m(jQuery, Foundation);
  }
}());
