# date-fns-strftime

[![Package Version](https://badge.fury.io/js/date-fns-strftime.png)](http://badge.fury.io/js/date-fns-strftime)
[![Bower version](https://badge.fury.io/bo/date-fns-strftime.png)](https://badge.fury.io/bo/date-fns-strftime)
[![Dependency Status](https://gemnasium.com/ShogunPanda/date-fns-strftime.png?travis)](https://gemnasium.com/ShogunPanda/date-fns-strftime)
[![Build Status](https://secure.travis-ci.org/ShogunPanda/date-fns-strftime.png?branch=master)](http://travis-ci.org/ShogunPanda/date-fns-strftime)
[![Coverage Status](https://coveralls.io/repos/github/ShogunPanda/date-fns-strftime/badge.svg?branch=master)](https://coveralls.io/github/ShogunPanda/date-fns-strftime?branch=master)

strftime support for [date-fns](https://date-fns.org/)

https://github.com/ShogunPanda/date-fns-strftime

## Introduction

date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.

Unfortunately, the library doesn't support one of the most common approaches to format strings: the Unix-Style strftime syntax.

This plugin aims to fill the gap by reusing internally the `format` function of `date-fns`.

## Installation (NPM)

Simply do:

```
npm install date-fns-strftime
```

## Installation (Bower)

Simply do:

```
bower install date-fns-strftime
```

### Usage

```javascript
const strftime = require("date-fns-strftime");

strftime(new Date(), "%m/%d/%y %I:%M %p %Z"); // => "17/01/21 09:17 AM CET"
```

### Supported modifiers

This plugin supports all modifiers [listed here](http://man7.org/linux/man-pages/man3/strftime.3.html) with the exception of the following:

* `%c`
* `%C`
* `%E`
* `%G`
* `%n`
* `%O`
* `%t`
* `%U`
* `%x`
* `%X`
* `%+`

And with the addition of the following modifiers:

* `%L`: The milliseconds as decimal-number (range 000 to 999).

## Supported implementations.

date-fns-strftime supports and has been tested on [NodeJS](http://nodejs.org) 6.0+.

## API Documentation

The API documentation can be found [here](https://shogunpanda.github.io/date-fns-strftime).

## Contributing to date-fns-strftime

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.

Licensed under the MIT license, which can be found at http://opensource.org/licenses/MIT.
