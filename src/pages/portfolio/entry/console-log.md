---
templateKey: src/pages/portfolio/entry.js
title: Console Log
blurb: Displaying the console log on a mobile device.
entryUrl: 'https://console.mikewgd.com'
tags:
  - Vanilla JS
media:
  - mediaType: image
    mediaUrl: test
    thumb: console-log_wkbrnu.png
created: 2019-08-06T01:49:12.970Z
---
A tool for programmers to see a viewable console in the browser. Meant to be used on mobile devices and/or browsers that do not support the console object. The script uses device detection (user agent sniffing) and if the console object is undefined; It then overwrites the console object. This is a bare bones console, not a replacement for the browsers console. Certain limitations and functionality that the browser's console has will not be implemented in order to keep the script file size down.

* No JavaScript libraries
* Toggle console
* Adjust console height / Clear console
* Query params (height/toggle/override)
* Recognizable theme / Syntax highlighting
* Show timestamp toggle
* Supported functions: `log`, `time`, `timeEnd`, `assert`,\
  `clear`, `count`, `warn`, `error` (does not include trace functionality)
