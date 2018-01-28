# PB-Static-Content

## Challenge

The challenge for this test was to create a node.js application that displays HTML pages at URLs that match the names of the folders in the content folder. This includes three folders `about-page`, `jobs`, and `valves`. In each of these folders is an `index.md` file that needed to be rendered on the `template.html` page.

## Approach

I took a test driven approach to this challenge. I broke it down into 3 stages, firstly to get a server that gives a 200 status code for going to a url matching the folder names. Then to give 404 status code for invalid urls. Finally, adding the content to valid url paths.

## Setup

#### To run the app on localhost:3000
- $ git clone https://github.com/ajdavey8/PB-Static-Content.git
- $ cd PB-Static-Content
- $ npm install
- $ npm start

#### To run tests:
- $ npm test
