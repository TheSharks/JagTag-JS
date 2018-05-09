title: Functional
description: JagTag-JS method reference
path: tree/master/docs/users
source: functional.md

# Functional method reference

These methods are centered around logic, mathematics and random numbers.

!!! bug "Incompatibility warning"
    Some of these methods differ slightly from the original implementation. They are marked with ==yellow markers==.

**{note:TEXT}** - Allows you to leave a note in a tag that gets removed at runtime.

> **JagTag:** **{note:Cool beans}** This is a tag<br>
> **Command:** ++tag example<br>
> **Result:** This is a tag

**{choose:OPTION1|OPTION2|OPTION3|(...)}** - Chooses a random item from a list. The options can theoretically continue ad infinitum.

> **JagTag:** **{choose:apples|bananas|pears}**<br>
> **Command:** ++tag example<br>
> **Result:** apples (Will change on each run)

**{range:START|END}** - Chooses a number from the provided range.

> **JagTag:** **{range:0|10}**<br>
> **Command:** ++tag example<br>
> **Result:** 7 (Will change on each run)

==**{if:SOMETHING|COMPARATOR|SOMETHING|THEN|ELSE}**==[^1] - Executes a comparison between two things. Standard [JavaScript comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) can be used for the **COMPARATOR** property. Supplying **?** as a comparator will compare the two parts by regex.

> **JagTag:** **{str|===|str|str is equal to str|str is not equal to str}**<br>
> **Command:** ++tag example<br>
> **Result:** str is equal to str

==**{math:EXPRESSION}**==[^2] - Executes and returns the result of a mathematical expression.

> **JagTag:** **{math:(2 + 2) * 3 / 4}**<br>
> **Command:** ++tag example<br>
> **Result:** 3

**{abs:NUMBER}** - Returns the absolute value of a number.

> **JagTag:** **{abs:-4}**<br>
> **Command:** ++tag example<br>
> **Result:** 4

**{floor:NUMBER}** - Rounds a number down.

> **JagTag:** **{floor:5.8}**<br>
> **Command:** ++tag example<br>
> **Result:** 6

**{ceil:NUMBER}** - Rounds a number up.

> **JagTag:** **{floor:3.2}**<br>
> **Command:** ++tag example<br>
> **Result:** 4

**{sin:NUMBER}** - Extracts the sine of a radian value.

> **JagTag:** **{sin:1.1}**<br>
> **Command:** ++tag example<br>
> **Result:** 0.89120736006

**{cos:NUMBER}** - Extracts the cosine of a radian value.

> **JagTag:** **{cos:1.1}**<br>
> **Command:** ++tag example<br>
> **Result:** 0.45359612142

**{tan:NUMBER}** - Extracts the tangent of a radian value.

> **JagTag:** **{tan:1.1}**<br>
> **Command:** ++tag example<br>
> **Result:** 1.96475965725

**{base:NUMBER|OLD_BASE|NEW_BASE}** - Converts a number to one base to another (Radix).

> **JagTag:** **{base:4|10|2}**<br>
> **Command:** ++tag example<br>
> **Result:** 100

[^1]: There is no need to supply the additional keywords in the arguments, and they will not be parsed either.

      - Java: **{if:SOMETHING|COMPARATOR|SOMETHING|then:THEN|else:ELSE}**
      - JS: **{if:SOMETHING|COMPARATOR|SOMETHING|THEN|ELSE}**

[^2]: A singular expression will suffice, rather than multiple chained ones.
      
      - Java: **{math:NUMBER|EXPRESSION|NUMBER|EXPRESSION|NUMBER|(...)}**
      - JS: **{math:EXPRESSION}**
