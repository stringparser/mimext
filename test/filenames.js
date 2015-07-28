'use strict';

var mimext = require('../');

it('should map filename to mimeType', function(){
  mimext('doc.md').should.be.eql('text/x-markdown');
  mimext('index.coffee').should.be.eql('text/coffeescript');
});
