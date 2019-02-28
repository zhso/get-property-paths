# get-property-paths

Get specify property paths from object.

[![Inline docs](http://inch-ci.org/github/zhso/get-property-paths.svg?branch=master&style=shields)](http://inch-ci.org/github/zhso/get-property-paths) [![Build Status](https://travis-ci.org/zhso/get-property-paths.svg?branch=master)](https://travis-ci.org/zhso/get-property-paths) [![Coverage Status](https://coveralls.io/repos/github/zhso/get-property-paths/badge.svg?branch=master)](https://coveralls.io/github/zhso/get-property-paths?branch=master)

## Examples

### Basic Useage

```js
import getPaths from 'get-property-paths';

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