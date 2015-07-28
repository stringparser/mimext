'use strict';
var mimext = require('./.');

console.log('%s %s %s\n%j\n',
  mimext('js'),
  mimext('.json'),
  mimext('file.coffee'),
  mimext('text/coffeescript'),
  mimext(mimext('filename.mp3'))
);
