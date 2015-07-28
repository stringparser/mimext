'use strict';

exports = module.exports = mimext;

mimext.mimes = require('mime-db');
mimext.extnames = require('./extnames.json');

function mimext(str){
  if(typeof str !== 'string'){
    throw new TypeError('1st argument should be a string');
  } else if(str[0] === '.'){
    return exports.extnames[str.slice(1)];
  }

  return exports.extnames[str] || exports.mimes[str] || null;
}
