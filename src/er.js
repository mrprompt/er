'use strict';

let er = (regexp='', text='') => {
  if (!regexp || !text) {
    return false;
  }

  let result = (new RegExp(regexp, 'g')).exec(text);
  
  return result ? result.shift() : false;
};

module.exports = er;
