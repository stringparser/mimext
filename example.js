'use strict';
var mimext = require('./.');

console.log('%s %s\n',
  mimext('.json'), mimext('js'),
  mimext(mimext('text/coffeescript'))
);

console.log('%s %s\n',
  mimext('.md'), mimext('markdown'),
  mimext(mimext('md'))
);
