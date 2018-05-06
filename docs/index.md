# The JagTag-JS Docs

Welcome to the documentation for JagTag-JS! On this site you can find information about JagTag-JS, aimed to give both end users and developers comprehensive information about the language, the library and the implementation of JagTag.

If you wish to cut to the chase, here are the relevant documentation sections.

<div>
  <a>
    <a href="/developers"><img src="img/icons/build_large.png" style="padding-left: 15px"></a>
    <a href="/users"><img src="img/icons/assignment_large.png" style="padding-left: 42.5px"></a>
    <br/>
    <a href="/developers"><b>Developers</b></a>
    <a href="/users" style="padding-left: 28.5px"><b>Users</b></a>
  </a>
</div>

Otherwise, feel free to keep on reading!

## Introduction

JagTag (And by the same token JagTag-JS) can be used to provide a way for end users of your application to create content that can be changed at runtime with simple but powerful tags.

When the parser is installed server-side, users can include tags that follow the **{name:args}** format in their input. At runtime, when user input is passed through the parser, these tags get replaced with their computed values. This means that the input becomes far more dynamic and customisable.

![Demo](img/demo.gif)

### What is JagTag?

[JagTag](https://github.com/jagrosh/JagTag) is a text parsing language and specification, created and administered by John Grosh ([@jagrosh](https://github.com/jagrosh)). In his own words, JagTag is a "simple, yet powerful and customisable interpreted text parsing language". The notation was originally created for use in the Discord bot [Spectra](https://github.com/jagrosh/Spectra) by the same author.

### What is JagTag-JS?

JagTag-JS is a JavaScript implementation of the JagTag notation. On the surface, the interface works in broadly similar ways to that of the original and most of the syntax is one-to-one compatible.

However, under the hood, the two implementations work in distinctly different ways. This is mostly due to language-level limitations but also from a desire to create readable and reusable code. This does introduce some additional considerations for developers, which are explained in laborious detail in the [developer docs](/developers).

## Credits

**The JagTag notation and technology** (c) 2016-present [John Grosh](https://jagrosh.com).<br/>
**JagTag-JS** (c) 2018 TheSharks. Released under the GNU GPL license version 3.

JagTag-JS is a [TheSharks](https://github.com/TheSharks) project developed and maintained by individual organisation members.
