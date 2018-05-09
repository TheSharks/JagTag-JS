# JagTag-JS

A JavaScript port of the [JagTag text parsing language](https://github.com/jagrosh/JagTag), originally written in Java by [@jagrosh](https://github.com/jagrosh).


This document is a mere README; most of the relevant information can be found in the [documentation](https://thesharks.github.io/JagTag-JS).

## What is JagTag?

JagTag is, in the author's own words, a simple yet powerful and customisable interpreted text parsing language. In practice, JagTag notation is used to customise user input with tags which use the format **{name:arg1|arg2}**.

## How does this differ?

First of all, the implementation of JagTag has been ported to JavaScript. The key thing to note here is that the actual code has not been ported due to language limitations. Instead, this system is essentially JagTag notation implemented in JavaScript with a slightly different methodology.

Due to language-level limitations, some of the methods are also not fully compatible. This project has been developed with maximum compatibility in mind, but some minor changes have been made. More details can be found in the documentation.

It's worth noting that the Discord-related tag functions have been developed to suit [Eris](https://github.com/abalabahaha/eris) and have not been tested with other libraries. For now it's recommended to use Eris in conjunction with the Discord-related tags, if you wish to use those.

## Installation and usage

JagTag-JS is available on NPM and you can install it with `npm i jagtag-js` (Use the --production flag if you don't need the dev deps). Make sure you have Node.js >= 8.x.x installed.

Basic syntax:

```js
const JagTagParser = require('jagtag-js')

JagTagParser('string to parse', argsObject)
```

For more information about the args object, see the [API reference](https://thesharks.github.io/JagTag-JS/developers/api).

### Simple example

At its most basic level, JagTag-JS can be used to perform simple string-related operations without any complications.

```js
const JagTagParser = require('jagtag-js')

JagTagParser('change {upper:this} to uppercase')
// Returns 'change THIS to uppercase'
```

### Advanced example

More advanced operations may require you to pass arguments to the parser in order to function correctly. Please check the [developer documentation](https://thesharks.github.io/JagTag-JS/developers/intro) for information on what parser-level arguments need to be passed for which method.

```js
const JagTagParser = require('jagtag-js')

JagTagParser('{argslen} arguments were passed to this tag', { tagArgs: [ 'item1', 'item2', 'item3' ] })
// Returns '3 arguments were passed to this tag'
```

For more examples and help, check the [documentation](https://thesharks.github.io/JagTag-JS).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
