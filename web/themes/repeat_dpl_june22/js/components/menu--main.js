(function ($) {
  'use strict';

  $(document).ready(function () {
    initialize_menuMain();
  });

  function initialize_menuMain() {
    var $body = $('body');
    var $html = $('html');
    var $header = $('.l-header');

    // handle submenu toggling
    var $submenuToggles = $('.menu__submenu-toggle', $header);

    $submenuToggles.click(function (evt) {
      evt.preventDefault();
      evt.stopPropagation();

      // clear all other submenu toggles first
      $submenuToggles
        .not(this)
        .parent()
        .removeClass('submenu--revealed')
        .find('.submenu-toggle__label')
        .attr('aria-expanded', false);

      var $containerItem = $(this).parent();
      var $toggleLabel  = $(this).find('.submenu-toggle__label');

      if ( $containerItem.hasClass('submenu--revealed') ) {
        $(this).attr('aria-expanded', false);
        $toggleLabel.html('Open submenu');
        $containerItem.removeClass('submenu--revealed');

      } else {
        $(this).attr('aria-expanded', true);
        $toggleLabel.html('Close submenu');
        $containerItem.addClass('submenu--revealed');
      }
    });

    // handle "mobile" main menu toggle
    var $menuMainToggle = $('.menu-main-toggle', $header);

    $menuMainToggle.click(function (evt) {
      evt.preventDefault();
      evt.stopPropagation();

      if ($body.hasClass('main-menu--expanded')) {
        $body.removeClass('main-menu--expanded');

        $html.css('max-height', 'inherit').css('overflow-y', 'inherit');
      } else {
        $body.addClass('main-menu--expanded');

        $html.css('max-height', '100vh').css('overflow-y', 'hidden');
      }
    });
  }
})(jQuery);
