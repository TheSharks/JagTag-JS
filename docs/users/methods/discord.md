title: Discord
description: JagTag-JS method reference
path: tree/master/docs/users
source: discord.md

# Discord method reference

These methods return names and other properties of Discord entities like channels and users. Throughout this section, the word "current" refers to the context the command was ran in (Guild, channel etc.).

!!! note "A note about search precision"
    The search methods use the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm to find the closest possible match to the supplied search query. **The longer the desired username is, the closer the search query will have to be to the real thing.** This is purely due to how the Levenshtein algorithm works.

    The search methods are also server-specific, meaning that you can't find results from servers outside the current one.

**{user}** - Returns the username of the user that ran the tag.<br>
**{user:SEARCH_USERNAME}** - Returns a user's name.

> **JagTag:** My username is **{user}** and I can search for **{user:doug}**<br>
> **Command:** ++tag example<br>
> **Result:** My username is LWTech and I can search for Dougley

**{nick}** - Returns the nickname of the user that ran the tag.<br>
**{nick:SEARCH_USERNAME}** - Returns a user's nickname.

> **JagTag:** My nickname is **{nick}** and Dougley's is **{nick:doug}**<br>
> **Command:** ++tag example<br>
> **Result:** My nickname is Bollocks and Dougley's is Dino

**{discrim}** - Returns the 4-digit discriminator of the user that ran the tag.<br>
**{user:SEARCH_USERNAME}** - Returns a user's discriminator.

> **JagTag:** My discriminator is **{discrim}** and James Bond's is **{discrim:james}**<br>
> **Command:** ++tag example<br>
> **Result:** My discriminator is 0005 and James Bond's is 0007

**{avatar}** - Returns the avatar URL of the user that ran the tag.<br>
**{nick:SEARCH_USERNAME}** - Returns a user's avatar URL.

> **JagTag:** My avatar URL is **{avatar}** and Dougley's is **{avatar:doug}**<br>
> **Command:** ++tag example<br>
> **Result:** My avatar URL is https://cdn.discordapp.com/avatars/152664793587777537/a_9fac7b06c5256cc37f059afe93294d28.gif?size=128 and Dougley's is https://cdn.discordapp.com/avatars/107904023901777920/89a6b0e49c7d56d386c3d7f562718c61.jpg?size=128'

**{creation:SNOWFLAKE}** - Gets the creation time of a Discord ID. Must be a valid ID.

> **JagTag:** My account was created at **{creation:152664793587777537}**<br>
> **Command:** ++tag example<br>
> **Result:** My account was created at Fri Feb 26 2016 06:35:23 GMT+0000

**{userid}** - Gets the user ID of the user that ran the tag.

> **JagTag:** My ID is **{userid}**<br>
> **Command:** ++tag example<br>
> **Result:** My ID is 152664793587777537

**{atuser}** - Returns a ping of the user that ran the tag.

> **JagTag:** I can ping myself with **{atuser}**<br>
> **Command:** ++tag example<br>
> **Result:** I can ping myself with @LWTech

**{server}** - Returns the name of the current server.

> **JagTag:** Welcome to **{server}**<br>
> **Command:** ++tag example<br>
> **Result:** Welcome to WildBot's Territory

**{serverid}** - Returns the ID of the current server.

> **JagTag:** The ID of this server is **{serverid}**<br>
> **Command:** ++tag example<br>
> **Result:** The ID of this server is 110462143152803840

**{servercount}** - Returns the member count of the current server.

> **JagTag:** This server has **{servercount}** members<br>
> **Command:** ++tag example<br>
> **Result:** This server has 5221 members

**{servericon}** - Returns the icon URL of the current server.

> **JagTag:** The icon of this server is **{servericon}**<br>
> **Command:** ++tag example<br>
> **Result:** The icon of this server is https://cdn.discordapp.com/icons/110462143152803840/9d2d4dfaf7fc0e8e74045647964d74e8.jpg?size=128

**{channel}** - Returns the name of the current channel.

> **JagTag:** This channel's name is #**{channel}**<br>
> **Command:** ++tag example<br>
> **Result:** This channel's name is #private-sandbox

**{channelid}** - Returns the ID of the current channel.

> **JagTag:** This channel's ID is **{channelid}**<br>
> **Command:** ++tag example<br>
> **Result:** This channel's name is 221387075021307904

**{randuser}** - Returns the name of a random user in the current server.

> **JagTag:** Go talk to **{randuser}**<br>
> **Command:** ++tag example<br>
> **Result:** Go talk to Zaza

**{randonline}** - Returns the name of a random online user in the current server.

> **JagTag:** Go talk to **{randuser}**<br>
> **Command:** ++tag example<br>
> **Result:** Go talk to Nenkai

**{randchannel}** - Returns the name of a random channel in the current server.

> **JagTag:** Go to **{randchannel}**<br>
> **Command:** ++tag example<br>
> **Result:** Go to #faq
