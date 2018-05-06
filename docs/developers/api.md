# API reference

This page contains the API reference for JagTag-JS.

<!-- Using HTML header because of auto-replacement -->
<h2>JagTagParser (string<<a href="{{string}}">String</a>>, args<<a href="{{object}}">Object</a>>)</h2>

Main parser function. Takes a string and an [args](#args) object, which will be parsed and the output will be returned.

???+ warning "Edge cases"
    - If no string is passed to the parser, `undefined` will be returned.
    - If there is an unclosed tag within a string, no tags will be parsed in the string until the issue is corrected (String is returned unchanged).
    - If there are no tags within a string, the string is returned unchanged.
    - The parser can theoretically handle infinite amounts of tags, but bear in mind that as the amount of tags (Nested tags in particular; see [Performance](/performance)) rises, the performance hit incurred will rise as well. It may be wise to limit the amount of tags a single string can contain at any one time.

!!! failure "A note about the callback parameter"
    Those who have browsed the source code may have noticed that the parser function also takes a callback parameter. **Do not define it unless you willingly want the parser to go haywire.** It is used internally to track tag nesting and parse them appropriately; it's not meant to be used by anyone else. Treat it as private.


## args

The `args` object is required to be passed along to most parsers. It's good practice to pass `args` object along with every parser call.

### Object property reference

| Property | Description | Type | Used by |
| -------- | ----------- | ---- | ------- |
| disabledParsers | Parser groups to disable from use. | <a href="{{array}}">Array</a><<a href="{{string}}">String</a>> |  |
| tagArgs | Additional arguments to pass to some tags. | <a href="{{array}}">Array</a><<a href="{{string}}">String</a>> | Args |
| author | Tag author object, Member object in Eris. | <a href="{{member}}">Member</a> | Discord |
| channel | The current channel object from Eris. | <a href="{{textchannel}}">TextChannel</a> | Discord |
| guild | The current guild object from Eris. | <a href="{{guild}}">Guild</a> | Discord |
| channels | Array of all channels in the current guild. | Array<<a href="{{}}"></a>> | Discord |
| members | Array of all members in the current guild. | Array<Object\> | Discord |


!!! tip
    If you don't need certain parser groups, you can disable them with by setting the disabledParsers option in the arguments. The parser groups that can be disabled are **args**, **discord**, **functional**, **strings**, **time** and **variables**.

Example:

```js
JagTagParser(string, {
  tagArgs: ['arg1', 'arg2'],
  author: erisAuthorObject,
  channel: erisChannelObject,
  guild: erisGuildObject,
  channels: erisChannelsArray,
  members: erisMembersArray
})
```
