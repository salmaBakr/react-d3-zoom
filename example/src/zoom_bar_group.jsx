"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarGroupZoom = require('../../lib').BarGroupZoom;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/age.csv')

  var chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ],
    x = function(d) {
      return d.State;
    },
    xScale = 'ordinal',
    yTickFormat = d3.format(".2s");


  ReactDOM.render(
    <BarGroupZoom
      data= {generalChartData}
      chartSeries = {chartSeries}
      x= {x}
      xScale= {xScale}
      yTickFormat= {yTickFormat}
    />
  , document.getElementById('data_zoom_bar_group')
  )
})()
