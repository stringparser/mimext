'use strict';

var path = require('path');

exports = module.exports = mimext;

mimext.mimes = require('mime-db');
mimext.extnames = require('./extnames.json');

function mimext(obj){
  if(!obj){ return ; }

  if(/\//.test(obj)){
    return mimext.mimes[obj];
  } if(/\./.test(obj)){
    return mimext.extnames[path.extname(obj).slice(1) || obj.slice(1)];
  } else if(obj && obj.extensions){
    return mimext.extnames[obj.extensions[0]];
  }

  return mimext.extnames[obj];
}
