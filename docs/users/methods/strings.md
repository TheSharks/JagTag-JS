title: Strings
description: JagTag-JS method reference
path: tree/master/docs/users
source: strings.md

# String method reference

These methods allow the manipulation of strings in various ways.

!!! bug "Incompatibility warning"
    Some of these methods differ slightly from the original implementation. They are marked with ==yellow markers==.

**{lower:TEXT}** - Converts the passed text into lowercase.

> **JagTag:** This will be **{lower:DE-SHOUTED}**<br>
> **Command:** ++tag example<br>
> **Result:** This will be de-shouted

**{upper:TEXT}** - Converts the passed text into uppercase.

> **JagTag:** This will be **{upper:shouted}**<br>
> **Command:** ++tag example<br>
> **Result:** This will be SHOUTED

**{length:TEXT}** - Returns the length of the passed text.

> **JagTag:** The length of "something" is **{length:something}**<br>
> **Command:** ++tag example<br>
> **Result:** The length of "something" is 9

**{url:TEXT}** - Converts the passed text into UTF-8 enconded URL format.

<!-- &#8203; is a zero width space to disable the first URL -->
> **JagTag:** http:&#8203;//lmgtfy.com/?q=**{url:Spicy Memes}**<br>
> **Command:** ++tag example<br>
> **Result:** http://lmgtfy.com/?q=Spicy+Memes

==**{replace:THIS|WITH_THIS|IN_THIS}**==[^1] - Replaces a piece of text with another in the passed text. The first argument may be either a substring (Literal matching) or a regex pattern.

> **JagTag:** **{replace:apples|bananas|I like apples}**<br>
> **Command:** ++tag example<br>
> **Result:** I like bananas

**{substring:START|END|TEXT}** - Returns a piece from the text between the START and END points. You can use negative numbers to start from the end of the string, rather than the beginning.

!!! warning "Indexing pitfall"
    The **START** and **END** parameters correspond to character positions in a string (First, second, etc.). In programming languages, there is a zeroth index, which results in **the first character being at the zeroth index**.

> **JagTag:** **{substring:2|6|something}** and **{substring:-2|4|something}**<br>
> **Command:** ++tag example<br>
> **Result:** meth ng

**{oneline:TEXT}** - Removes extraneous whitespace from a piece of text.

> **JagTag:** **{oneline:lots&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;whitespace}**<br>
> **Command:** ++tag example<br>
> **Result:** lots of whitespace

**{hash:TEXT}** - Returns the hash code for a piece of text.

> **JagTag:** **{hash:test text}**<br>
> **Command:** ++tag example<br>
> **Result:** -1238303749

[^1]: There is no need to supply the additional keywords in the arguments, and they will not be parsed either.

      - Java: **{replace:THIS|with:THIS|in:THIS}**<br>
      - JS: **{replace:THIS|WITH_THIS|IN_THIS}**

      The **replaceregex** method is also incorporated in this method - it's not a separate method. The regex has to be in JavaScript format. For more information, see [this tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285) and [Regex101](https://regex101.com).
