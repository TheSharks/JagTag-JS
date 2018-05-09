title: Performance
description: Performance considerations for JagTag-JS
path: tree/master/docs/developers
source: performance.md

# Perfomance considerations

JagTag-JS is built to work as efficiently as possible while maintaining minimal dependency size. As such, JagTag-JS does not incoporate performance optimising modules or replacements for native methods that are allegedly more performant.

Naturally, performance has been considered during development. However, due to developer convenience and language limitations, some concepts sacrifice performance for understandability. This document outlines what you can do, in case you wish to improve the performance of the module.

An asynchronous API for JagTag-JS is not beyond consideration, but we have decided to not implement one for the initial release as the module's performance is quite adequate even with a synchronous API.

## Tag quantities

!!! note
    This is only a concern in the current iteration of JagTag-JS. It will disappear if and when an asynchronous API is implemented.

As the API of JagTag-JS is synchronous, each tag is parsed before proceeding to the next. The performance hit this incurs is not major when dealing with low amounts of tags in a single string (Excluding nested tags, which are covered below).

However, as the tag count rises, stacking particularly complex tags like Discord-related random selectors or Discord-related search functions has a risk of hampering module performance. This may indirectly lead to thread blocking issues.

While JagTag-JS can theoretically support infinite amounts of tags, parsing speed is adversely proportional to the amount of tags. As such it may be a wise idea to limit the number of tags that can be parsed at once to a sensible number. For instance [Spectra](https://github.com/jagrosh/Spectra) caps out at 200 tags.

This module uses the [matchRecursive](http://xregexp.com/api/#matchRecursive) plugin from [XRegExp](http://xregexp.com) for properly detecting tag boundaries even when they are nested. It's recommended to use it to gather data on how many tags are in a single string and throttling the amounts appropriately.

## Nested tags

In order to support nested tags, JagTag-JS draws inspiration from the [PEMDAS](http://www.purplemath.com/modules/orderops.htm) principle in arithmetics. In practice, this means that tags are parsed from the deepest level upwards.

Consider for instance the **{upper:{lower:{upper:test}}}** tag. The result of the first tag will depend on the next, the result of which will depend on the one after that. This pattern can theoretically[^1] continue ad infinitum.

Due to this, upon parsing a tag, JagTag-JS will look for nested tags and recursively run the parser until it finds a point where there are no further tags. It will leave previous parse operations waiting until the scan is complete and the deepest level has been found.

At this point, the parser will proceed to parsing the tags one by one from the deepest level and going up from there until it reaches the root tag. Now the parsed tag can be returned and the parser can proceed to the next tag.

This section largely follows along the lines of the previous one in the sense that as tag amounts rise, performance is impacted. Again, it's up to you to decide how to limit the performance impact, but bear in mind that nesting tags can get performance intensive in the long run.

[^1]: See [Tag quantities](#tag-quantities).
