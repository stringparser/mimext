'use strict';

var fs = require('fs');
var mimes = require('mime-db');
var extnames = {};

Object.keys(mimes).forEach(function(type){
  if(mimes[type].extensions){
    mimes[type].extensions.forEach(function(ext){
      extnames[ext] = type;
    });
  }
});

fs.createWriteStream('extnames.json')
  .write(JSON.stringify(extnames, null, '  '));
