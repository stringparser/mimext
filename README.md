# mimext [![NPM version][badge-version]][x-npm] [![downloads][badge-downloads]][x-npm]

[documentation](#documentation) -
[install](#install) -
[test](#test)

[![build][badge-build]][x-travis]

## sample
```js
var mimext = require('mimext');

console.log('%s %s %s\n%j\n',
  mimext('js'),
  mimext('.json'),
  mimext('file.coffee'),
  mimext('text/coffeescript'),
  mimext(mimext('filename.mp3'))
);
// application/javascript application/json text/coffeescript
// {"extensions":["coffee","litcoffee"]}
//  { source: 'iana',
//   compressible: false,
//   extensions: [ 'mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a' ] }
```

## documentation

The `module.exports` a function

### mimext
```js
function mimext(string|object input)
```

_arguments_
 - `input`, type string or object to check

_when_
 - `input` is an object, it should have a property `extensions` with an array of the extensions for that mime type. Look at [mime-db](https://github.com/jshttp/mime-db) for more information.
 - `input` is a string, can have a dot. If has a slash it will be mapped to a mype type directly

_returns_
 - mime type of for the string|object given
 - extension for the mime type given

### mimext properties

- `mimext.mimes` all mime types given by [mime-db][x-mimeDB]
- `mimext.extnames` the inverse mapping from extension to mime type

## install

With [npm][x-npm]

    $ npm install mimext

## test

```sh
$ npm t

ext
  ✓ should map extension (no dot) to mimeType
  ✓ should map extension (with dot) to mimeType

filenames
  ✓ should map filename to mimeType

mime
  ✓ should map mimeType to its specs
  ✓ should map mimeType to extensions


5 passing (14ms)
```

### license

![LICENSE](http://img.shields.io/npm/l/mimext.svg?style=flat-square)

[x-npm]: https://npmjs.org/package/mimext
[x-mimeDB]: https://github.com/jshttp/mime-db
[x-travis]: https://travis-ci.org/stringparser/mimext/builds
[badge-build]: http://img.shields.io/travis/stringparser/mimext/master.svg?style=flat-square
[badge-version]: http://img.shields.io/npm/v/mimext.svg?style=flat-square
[badge-downloads]: http://img.shields.io/npm/dm/mimext.svg?style=flat-square
