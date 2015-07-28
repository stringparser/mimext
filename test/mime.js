'use strict';

var mimext = require('../');

it('should map mimeType to its specs', function(){
  mimext('text/coffeescript').should.be.eql(
    mimext.mimes['text/coffeescript']
  );
});

it('should map mimeType to extensions', function(){
  mimext('application/javascript').should.be.eql(
    mimext.mimes['application/javascript']
  );
});
