---
templateKey: entry
title: Running Audio Tool
blurb: 'A custom audio tool that allows authors to add, edit and tag classes.'
tags:
  - Vue
  - Stylus/CSS
  - Contentful UI Ext
  - Contentful
  - Webpack
  - ES6
created: 2019-08-07T11:36:56.005Z
---
A tool that allows trainers to upload their mp3 class audio files and tag them. Which allows them to identify where in the audio file is the introduction, segments and cooldowns. The tagged audio file is outputted as JSON and is then consumed by the Equinox iOS app to show class list views and data visualizations.

<span class="entryMedia" thumb="https://res.cloudinary.com/dgjsyaqlh/image/upload/v1566217087/running-audio-tool_hzpkki.png" full="https://res.cloudinary.com/dgjsyaqlh/video/upload/v1565780279/running-audio-tool_bqwmai.mp4" type="video">A demo of the audio tool built as a Contentful UI Extension.</span>

The audio tool was originally built as a standalone website. However I took it a step further and embedded it as a UI extension so all functionality is contained within **Contentful**. In order to tag the audio files we integrated [**peaks.js**](https://waveform.prototyping.bbc.co.uk/)**,** which is a browser-based audio waveform visualization tool. Some custom functions were added (goToSegment, getPrevSegment, markerInRange, etc) in order to accommodate the UI that was designed.
