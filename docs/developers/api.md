title: API reference
description: JagTag-JS API reference
path: tree/master/docs/developers
source: api.md

# API reference

This page contains the API reference for JagTag-JS.

<!-- Using HTML header because of auto-replacement -->
## JagTagParser (string<**String**\>, args<**Object**\>)

Main parser function. Takes a string and an [args](#args) object, which will be parsed and the output will be returned.

???+ warning "Edge cases"
    - If no string is passed to the parser, `undefined` will be returned.
    - If there is an unclosed tag within a string, no tags will be parsed in the string until the issue is corrected (String is returned unchanged).
    - If there are no tags within a string, the string is returned unchanged.

!!! failure "A note about the callback parameter"
    Those who have browsed the source code may have noticed that the parser function also takes a callback parameter. **Do not define it unless you willingly want the parser to go haywire.** It is used internally to track tag nesting and parse them appropriately; it's not meant to be used by anyone else. Treat it as private.

## args

The `args` object is required to be passed along to most parsers. It's good practice to pass `args` object along with every parser call.

### Object property reference

| Property | Description | Type | Used by | Optional? |
| -------- | ----------- | ---- | ------- | --------- |
| **disabledParsers** | Parser groups to disable from use. | <a href="{{array}}">Array</a><<a href="{{string}}">String</a>> | Parser | Yes |
| **enableLogging** | Enable logging of exceptions in method calls. If not set, no logging output will be provided. | <a href="{{boolean}}">Boolean</a> | Parser | Yes
| **tagArgs** | Additional arguments to pass to certain tags. | <a href="{{array}}">Array</a><<a href="{{string}}">String</a>> | Args | Yes |
| **id** | The ID of the message the tag is in (<a href="{{message}}">Message</a>.id). | <a href="{{string}}">String</a> | Variables | No |
| **author** | Tag author object (<a href="{{message}}">Message</a>). | <a href="{{member}}">Member</a> | Discord | No* |
| **channel** | The current channel (<a href="{{textchannel}}">TextChannel</a>). | <a href="{{textchannel}}">TextChannel</a> | Discord | No* |
| **guild** | The current guild (<a href="{{message}}">Message</a>.guild). | <a href="{{guild}}">Guild</a> | Discord | No* |
| **channels** | Array of all channels in the current guild. (Message.guild.channels). | <a href="{{array}}">Array</a><<a href="{{guild}}">Guild</a>> | Discord | No* |
| **members** | Array of all members in the current guild (Message.guild.members). | <a href="{{array}}">Array</a><<a href="{{member}}">Member</a>> | Discord | No* |

\*: If the Discord parser is enabled, these properties must be passed to the parser.

!!! tip
    If you don't need certain parser groups, you can disable them with by setting the disabledParsers option in the arguments. The parser groups that can be disabled are **args**, **discord**, **functional**, **strings**, **time** and **variables**.

Example:

```js
JagTagParser('string with {upper:tags}', {
  tagArgs: ['arg1', 'arg2'],
  disabledParsers: [ 'time', 'variables' ]
  author: erisAuthorObject,
  channel: erisChannelObject,
  guild: erisGuildObject,
  channels: erisChannelsArray,
  members: erisMembersArray
})
```
