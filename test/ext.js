'use strict';

var mimext = require('../');

it('should map extension (no dot) to mimeType', function(){
  mimext('md').should.be.eql('text/x-markdown');
});

it('should map extension (with dot) to mimeType', function(){
  mimext('.md').should.be.eql('text/x-markdown');
});
