(function () {
  var m = function ($, Foundation, undefined) {
    'use strict';

    Foundation.libs.tab = {
      name : 'tab',

      version : '5.0.1',

      settings : {
        active_class: 'active'
      },

      init : function (scope, method, options) {
        this.bindings(method, options);
      },

      events : function () {
        $(this.scope).off('.tab').on('click.fndtn.tab', '[data-tab] > dd > a', function (e) {
          e.preventDefault();

          var tab = $(this).parent(),
              target = $('#' + this.href.split('#')[1]),
              siblings = tab.siblings(),
              settings = tab.closest('[data-tab]').data('tab-init');

          tab.addClass(settings.active_class);
          siblings.removeClass(settings.active_class);
          target.siblings().removeClass(settings.active_class).end().addClass(settings.active_class);
        });
      },

      off : function () {},

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
