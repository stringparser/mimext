'use strict';

var path = require('path');

exports = module.exports = mimext;

mimext.mimes = require('mime-db');
mimext.extnames = require('./extnames.json');

function mimext(obj){
  if(!obj){ return ; }

  if(/\//.test(obj)){
    return exports.mimes[obj];
  } if(/\./.test(obj)){
    return exports.extnames[path.extname(obj).slice(1) || obj.slice(1)];
  } else if(obj && obj.extensions){
    return exports.extnames[obj.extensions[0]];
  }

  return exports.extnames[obj];
}
