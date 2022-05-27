import $ from 'jQuery';
import Drupal from 'Drupal';

Drupal.behaviors.global = {
  attach: (context) => {
    $(context.body).addClass('document-ready');
  },
};
