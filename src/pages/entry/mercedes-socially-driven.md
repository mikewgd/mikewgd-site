---
templateKey: entry
title: Socially Driven
blurb: >-
  A microsite that builds a slideshow from Instagram images based on your city's
  location.
tags:
  - AWS
  - SCSS/CSS
  - Gulp
  - Angular
  - Node
media: []
created: 2019-08-07T02:25:18.993Z
---
The user would enter their location and using Instagram’s API and **Google Maps API** returns photos within the specific latitude and longitude. An API request would be made that triggers an **AWS lambda function** to stitch the photos together and creates a video using **ffmpeg** executable. This customizable slideshow is uploaded to **S3** which allows it to be shared to Facebook and/or Instagram with the user’s permission.

A moderation tool was built to display all the entries stored in a **DynamoDB**, for a moderator to show or hide the submitted entries on the main site.