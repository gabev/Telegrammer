'use strict';

/**
 * @alias mawkish
 * @member {Object} mawkish
 * @description Local hook with confirmation and custom keyboard
 * @memberOf hooks/examples
 */

const Promise = require('promise');

module.exports = {
  command: 'love',
  parse_response: function (message, response_message, api) {
    let response_text = response_message.text.toString().toLowerCase();
    if (response_text.indexOf('yes') === 0) {
      api.respond(response_message, 'Thank you. I love you too 😍.');
    } else {
      api.respond(response_message, 'Oh, I just killed a kitte 🐱for this.');
    }
    return Promise.resolve();
  },
  confirmation: 'Do you love me?',
  buttons: [
    ['Yes, a lot', 'Yes, really', 'Yes, actually'],
    ['Nope 👎']
  ],
  one_time_keyboard: true,
  description: 'A confirmation example',
  error: 'Oh, darn...'
};
