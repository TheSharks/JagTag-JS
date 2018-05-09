title: End user documentation
description: JagTag-JS end user documentation
path: tree/master/docs/users
source: intro.md

# End user documentation

## Introduction

Welcome to the end user section of the JagTag-JS documentation! Here you can find information on available methods, differences from the original and other information relevant to you as an end user.

## For those coming from the Java version

If you have used the original Java version of JagTag before (For instance in conjunction with [Spectra](https://github.com/jagrosh/Spectra), it's worth nothing that there are a few key differences when it comes to the implementation of JagTag in JavaScript.

### Cross-compatibility

Some methods are not 1-to-1 compatible between versions. What this means is that JagTag syntax considered valid in Java JagTag may not be fully copy-pasteable in this implementation. These cases are fortunately few and far between, as most of the differences can be found under the hood, but they exist. More details can be found in the [method reference](/users/methods/home).

### Keyword changes

JagTag-JS does not use keywords in tag arguments to simplify the operation of parsing tags and reduce the amount of necessary hardcoding. Methods like **if** may differ somewhat from the original implementation.

More information in the [method reference](/users/methods/home).
