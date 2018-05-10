title: Developer documentation
description: JagTag-JS developer documentation
path: tree/master/docs/developers
source: intro.md

# Developer documentation

## Introduction

Welcome to the developer section of the JagTag-JS documentation! The guides in this section are targeted towards those who are integrating the JagTag-JS library into their applications. Here you will find guides, tips and gotchas for implementing the library in a safe and well functioning manner.

## Installation and usage

JagTag-JS is available on NPM. Simply install it with `npm i @thesharks/jagtag-js`.

Integrating JagTag-JS into your code is also very straight-forward. Require the module, pass a string through it, and witness the magic happen.

```js
const JagTagParser = require('@thesharks/jagtag-js')

JagTagParser('change {upper:this} to uppercase') // Returns 'change THIS to uppercase'
```

Note that this barebones example does not include the often times necessary arguments passed to the parser. Those are detailed on the [API page](/developers/api).

## Discord library support

Currently, JagTag-JS only supports [Eris](https://abal.moe/Eris) in Discord-related tags. There are plans to perform compatibility checks and with other popular JavaScript libraries for Discord later down the line, but currently only Eris has verified support.

This section will be expanded when more information is available.

!!! warning
    You may attempt to use other Discord libraries such as discord.js or discordie with this library, but until a compatibility assessment is made, there are no guarantees about functionality.
