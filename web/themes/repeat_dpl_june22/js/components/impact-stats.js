;(function ($) {
  'use strict';


  $(document).ready(function() {
    initialize_impactStats();
  });


  function initialize_impactStats() {
    const $impactStats = $('.impact-stats');
    const supportsIntersectionObserver = !!window.IntersectionObserver;

    if (supportsIntersectionObserver && $impactStats.length) {
      const elements = document.querySelectorAll('[data-animateCount]');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCountUpAnimation(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -100px 0px'
      });


      const startCountUpAnimation = function(countableEl) {
        const $countableEl = $(countableEl);
        let countTo = $countableEl.attr('data-countUpTo');
        let finalValue = countTo;
        const animationDurationS = 3;

        countTo = parseInt(countTo.replace(/,/g, ''));

        if (isNaN(countTo)) {
          countTo = 0;
          console.error('data-countUpTo is not parseable as an int on: ' + $countableEl);
        }

        animateCountUp($countableEl, countTo, animationDurationS, finalValue);
      };


      elements.forEach(observedEl => {
        observer.observe(observedEl);
      });
    }


    function animateCountUp(countingEl, countToNum, duration, endValue) {

      if (countToNum === 0) {
        return;
      }

      let increment = 1
      let current = 0;
      let convertedDuration = duration * 1000;
      let stepTimer = parseFloat(convertedDuration / countToNum);


      if (stepTimer <= 10) {
        let adjustedDuration = duration * 100;
        stepTimer = 10;
        increment = parseInt(countToNum / adjustedDuration) + 1;
      }


      console.log('countToNum: '+ countToNum +', increment: '+ increment +', stepTimer: '+ stepTimer);


      stepTimer = Math.floor(stepTimer);
      const $countingObj = $(countingEl);

      const timer = setInterval(function() {
        current += increment;

        $countingObj.html(Number(current).toLocaleString());

        if (current >= countToNum) {
          $countingObj.html(endValue);
          clearInterval(timer);
        }
      }, stepTimer);
    }
  }

})(jQuery);
