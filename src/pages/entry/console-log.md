---
templateKey: entry
title: Console Log
blurb: Displaying the console log on a mobile device.
entryUrl: 'https://console.mikewgd.com'
tags:
  - Vanilla JS
media:
  - caption: _Demo using the tool on an iPhone._
    mediaType: video
    mediaUrl: >-
      https://res.cloudinary.com/dgjsyaqlh/video/upload/v1565780224/console-log_uhyu5l.mp4
    thumb: >-
      https://res.cloudinary.com/dgjsyaqlh/image/upload/v1565784124/console-log_wkbrnu.png
created: 2019-08-06T01:49:12.970Z
---
A tool for programmers to see a viewable console in the browser. Meant to be used on mobile devices and/or browsers that do not support the console object. The script uses device detection (user agent sniffing) and if the console object is undefined; It then overwrites the console object. This is a bare bones console, not a replacement for the browsers console. Certain limitations and functionality that the browser's console has will not be implemented in order to keep the script file size down.
