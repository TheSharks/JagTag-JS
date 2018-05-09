title: Arguments
description: JagTag-JS method reference
path: tree/master/docs/users
source: arguments.md

# Argument method reference

These methods deal with arguments that are passed to the parser at runtime. The method of supplying these arguments may vary depending on the implementation.

!!! note "A note about example accuracy"
    The examples you see here assume a certain command format, namely that used by [WildBeast](https://github.com/TheSharks/WildBeast). The way of passing the arguments may heavily differ from these examples depending on the implementation of this module. Consult the developer of the application you're using for information on how this works in their specific implementation.

**{args}** - Returns a list of arguments passed to the parser.

> **JagTag:** The arguments passed to this tag are **{args}**<br>
> **Command:** ++tag example these are the args<br>
> **Result:** The arguments passed to this tag are these, are, the, args

**{argslen}** - Returns the length of the list of arguments passed to the parser.

> **JagTag:** **{args}** arguments were passed to this tag<br>
> **Command:** ++tag example these are the args<br>
> **Result:** 4 arguments were passed to this tag

**{arg:NUM}** - Returns a specific argument from the list of arguments passed to the parser.

!!! warning "Indexing pitfall"
    The **NUM** parameter corresponds to an index in a list (First, second, etc.). In programming languages, there is a zeroth index, which results in **the first item being at the zeroth index**.

> **JagTag:** The first argument is **{arg:0}** and the second is **{arg:1}**<br>
> **Command:** ++tag example bananas apples oranges<br>
> **Result:** The first argument is bananas and the second is apples
