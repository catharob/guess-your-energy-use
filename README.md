# Guess Your Energy Use

This is a work-in-progress interactive feature for [Inside Energy](insideenergy.org). 

#### Current Problem

Highchart won't appear on `thankyou.html` page. 

Used code almost verbatim from here: http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/data/google-spreadsheet/

Added chart type (bar) in `script2.js`, and left out `pre` tag in html.

Fiddled with top of script2.js due to console returning error about code copied from JSFiddle: `$(function () {` on first line returned error. Changed to `function chart() {`. That might be totally wrong.