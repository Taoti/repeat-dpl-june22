(function ($) {
  'use strict';

  $(document).ready(function() {
    keyboard_accessibility();
  });

  // Keyboard accessibility
  function keyboard_accessibility() {
    $(document).keydown(function (e) {
      var code = e.keyCode ? e.keyCode : e.which;

      // ESC behaviors
      if (code == 27) {
      }

      // TAB behaviors
      if (!e.shiftKey && code == 9) {
        // collapses submenu when the last link loses focus
        $('.main-menu > .menu-item--expanded .submenu > .menu-item:last-child > a').on({
          'blur': function() {
            $(this)
              .parents('.menu-item--expanded').removeClass('submenu--revealed')
              .find('.menu__submenu-toggle').attr('aria-expanded', false);
          }
        });
      }

      // SHIFT + TAB behaviors
      if (e.shiftKey && code == 9) {
        // collapses submenu when the submenu toggle loses focus
        $('.main-menu > .menu-item--expanded .menu__submenu-toggle').on({
          'blur': function() {
            $(this)
              .attr('aria-expanded', false)
              .parents('.menu-item--expanded').removeClass('submenu--revealed');
          }
        });
      }

      // ENTER behaviors
      if (code == 13) {
        // selects the focused checkbox
        if ($('.form-checkbox').is(':focus')) {
          $('.form-checkbox:focus').trigger('click');
        }

        // selects the focused radio
        if ($('.form-radio').is(':focus')) {
          $('.form-radio:focus').trigger('click');
        }

        // selects the focused facets checkbox
        if ($('.facets-checkbox').is(':focus')) {
          $('.facets-checkbox:focus').trigger('click');
        }

        // selects the focused facets radio
        if ($('.facets-radio').is(':focus')) {
          $('.facets-radio:focus').trigger('click');
        }
      }
    });
  }
})(jQuery);
