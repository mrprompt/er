'use strict';

var er = (regexp, text) => {
  if (!regexp || !text) {
    return new Error('ER ou texto inválidos.');
  }

  var result = (new RegExp(regexp, 'g')).exec(text);
  
  return result ? result.shift() : false;
};

module.exports = er;
