title: Variables
description: JagTag-JS method reference
path: tree/master/docs/users
source: variables.md

# Variable method reference

These methods get and set variables in a string. The values of the variables are not persistent after the tags are run, and as such have to be defined before they are called.

**{set:NAME|VALUE}** - Sets a variable **NAME** to be **VALUE**. This is removed at runtime and not visible in the result.

> **JagTag:** **{set:foo|bar}** foo is now bar<br>
> **Command:** ++tag example<br>
> **Result:** foo is now bar

**{get:NAME}** - Gets the variable **NAME**. The variable must exist, otherwise the variable will be **undefined**.

> **JagTag:** **{set:foo|bar}** The variable foo is **{get:foo}**<br>
> **Command:** ++tag example<br>
> **Result:** The variable foo is bar
