(function ($) {
  'use strict';

  $(window).on('load', function () {
    anchor_links_load();
  });

  $(document).ready(function () {
    anchor_links();
  });

  // if the header is sticky, take it in count for where the page lands after scrolling
  const headerHeight = $('.l-header').height();

  // On load, checks if url has hash
  function anchor_links_load() {
    if (window.location.hash) {
      var hash = window.location.hash;

      if ($(hash).length) {
        setTimeout(function () {
          $('body, html').animate(
            { scrollTop: $(hash).offset().top - 10 + 'px' },
            800,
          );
        }, 300);
      }
    }
  }

  // anchor links smooth scrolling
  function anchor_links() {
    $('a.anchor-link').click(function (evt) {
      evt.preventDefault();
      var target = $($(this).attr('href'));

      if (target.length) {
        var scrollTo = target.offset().top;

        // if the header is sticky, use this instead
        // $('body, html').animate({scrollTop: scrollTo - headerHeight + 'px'}, 800);
        $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);

        setTimeout(function () {
          target.focus();
        }, 250);
      }
    });
  }
})(jQuery);
