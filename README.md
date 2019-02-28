# get-paths

Get specify property paths from object.

[![Inline docs](http://inch-ci.org/github/Envisio/get-paths.svg?branch=master&style=shields)](http://inch-ci.org/github/Envisio/get-paths) [![Build Status](https://travis-ci.org/Envisio/get-paths.svg?branch=master)](https://travis-ci.org/Envisio/get-paths) [![Coverage Status](https://coveralls.io/repos/github/Envisio/get-paths/badge.svg?branch=master)](https://coveralls.io/github/Envisio/get-paths?branch=master)

## Examples

### Basic Useage

```js
import getPaths from 'get-paths';

const obj={
  a: {
    b: {
      c: 1,
    },
  },
  d: [{ c: 2 }],
};

getPaths(obj);
```
```
[
  'a.b.c',
  'd.0.c',
]
```