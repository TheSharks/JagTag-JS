title: Time
description: JagTag-JS method reference
path: tree/master/docs/users
source: time.md

# Time method reference

These methods allow for the getting of time and the formatting of time expressions.

**{now}** - Returns current UTC time in [RFC 1123 format](http://www.csgnetwork.com/timerfc1123calc.html).<br>
**{now:FORMAT}** - Returns current UTC time in the specified format. See [Formatting](#formatting) for the available patterns.

> **JagTag:** The time is **{now}** and the current date is **{now:D.MM.YYYY}**<br>
> **Command:** ++tag example<br>
> **Result:** The time is {{currenttime}} and the current date is {{currentdate}} 

**{time:EPOCH_MILLISECONDS|FORMAT}** - Parses a <a href="{{date}}/now">Date.now()</a> expression to the provided format. If no format is supplied, the [RFC 1123 format](http://www.csgnetwork.com/timerfc1123calc.html) is used. See [Formatting](#formatting) for the available patterns.

> **JagTag:** {{now}} formatted to RFC 1123 is **{time:{{now}}}**<br>
> **Command:** ++tag example<br>
> **Result:** {{now}} formatted to RFC 1123 is {{nowrfc}}

## Formatting

JagTag-JS utilises [Moment.js](https://momentjs.com) for time parsing. Here is a list of available tokens.


### Year, month and day

| Input | Example | Description |
| ----- | ------- | ----------- |
| **YYYY** | 2014 | Two- or four-digit year. |
| **YY** | 14 | Two-digit year. |
| **Y** | -25 | Year with any number of digits and sign. |
| **Q** | 1 to 4 | Quarter of year. Sets month to first month in quarter. |
| **M** **MM** | 1 to 12 | Month number. |
| **MMM** **MMMM** | Jan to December | Month name in locale. |
| **D** **DD** | 1 to 31 | Day of month. |
| **Do** | 1st to 31st | Day of month with ordinal. |
| **DDD** **DDDD** | 1 to 365 | Day of year. |
| **X** | 1410715640.579 | Unix timestamp. |
| **x** | 1410715640579 | Unix millisecond timestamp. |

### Week year, week and weekday

| Input | Example | Description | 
| ----- | ------- | ----------- | 
| **gggg** | 2014 | Locale four-digit week year. |
| **gg** | 14 | Locale two-digit week year. |
| **w** **ww** | 1 to 53 | Locale week of year. |
| **e** | 0 to 6 | Locale day of week. |
| **ddd** **dddd** | Mon to Sunday | Day name in locale. |
| **GGGG** | 2014 | ISO four-digit week year. |
| **GG** | 14 | ISO two-digit week year. |
| **W** **WW** | 1 to 53 | ISO week of year. |
| **E** | 1 to 7 | ISO day of week. |

### Hour, minute, second, millisecond and time offset

| Input | Example | Description |
| ----- | ------- | ----------- |
| **H** **HH** | 0 to 23 | Hours (24 hour time). |
| **h** **hh** | 1 to 12 | Hours (12 hour time used with **a** **A**). |
| **k** **kk** | 1 to 24 | Hours (24 hour time from 1 to 24). |
| **a** **A** | am pm | Post or ante meridiem (Note that the single "a" and "p" characters are also considered valid). |
| **m** **mm** | 0 to 59 | Minutes. |
| **s** **ss** | 0 to 59 | Seconds. |
| **S** **SS** **SSS** | 0 to 999 | Fractional seconds. |
| **Z** **ZZ** | +12:00 | Offset from UTC as **+-HH:mm**, **+-HHmm** or **Z**. |
