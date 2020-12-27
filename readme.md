# find-with [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/find-with/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/find-with)

Find the item in an array with the highest computed value.

[![NPM Badge](https://nodei.co/npm/find-with.png)](https://npmjs.com/package/find-with)

## Install

```sh
npm install find-with
```

## Usage

```js
const findWith = require("find-with")

findWith(["a", "abc", "ab"], item => item.length)
//=> "abc"

findWith.multiple(["a", "abc", "abc", "ab"], item => item.length)
//=> ["abc", "abc"]
```

## API

### findWith(array, predicate)

Find the item in an array with the highest computed value.

### findWith.multiple(array, predicate)

Find the items in an array with the highest computed values.

#### array

Type: `array`

The array to find the items from.

#### predicate

Type: `(item, index, array) => number`

A predicate that is provided with each item in the array.

##### item

The item in the array.

##### index

The index of the item in the array.

##### array

The array.
