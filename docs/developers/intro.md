# Developer documentation

## Introduction

Welcome to the developer part of the documentation! The guides in this section are targeted towards those who are integrating the JagTag-JS library into their applications. Here you will find guides, tips and gotchas for implementing the library in a safe and functioning manner.

## Installation and usage

JagTag-JS is available on [NPM](https://npmjs.com/package/jagtag-js). Simply install it with `npm i jagtag-js`.

Integrating JagTag-JS into your code is also very straight-forward. Require the module, pass a string through it, and witness the magic happen.

```js
const JagTagParser = require('jagtag-js')

JagTagParser('change {upper:this} to uppercase') // Returns 'change THIS to uppercase'
```

Note that this barebones example does not include the often times necessary arguments passed to the parser. Those are detailed on the [API page](/developers/api).
