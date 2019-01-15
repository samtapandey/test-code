$(function() {

  Highcharts.seriesTypes.pie.prototype.animate = function(init) {
    var series = this,
      points = series.points,
      startAngleRad = series.startAngleRad,
      len = points.length,
      //anim = Highcharts.pick(series.options.animation && series.options.animation.duration, 1000),
      step = anim / len;

    if (!init) {
      Highcharts.each(points, function(point, index) {
        var graphic = point.graphic,
          args = point.shapeArgs;

        if (graphic) {
          // start values
          graphic.attr({
            innerR: 0.1,
            r: 0.1, // animate from inner radius (#779)
            start: args.start,
            end: args.end
          });

          // animate
          setTimeout(function() {
            graphic.animate({
              innerR: (series.center[3] / 2) || 0,
              r: args.r,
              start: args.start,
              end: args.end
            }, series.options.animation);
          }, index * step);
        }
      });

      // delete this function to allow it only once
      series.animate = null;
    }
  };


  var colors = Highcharts.getOptions().colors,
    data = [{
      y: 13.33,
      color: colors[0],
      drilldown: {
        data: [12],
        color: colors[0]
      }
    }, {
      y: 10.38,
      color: colors[1],
      drilldown: {
        data: [6.3],
        color: colors[1]
      }
    }, {
      y: 24.03,
      color: colors[2],
      drilldown: {
        data: [12],
        color: colors[2]
      }
    }, {
      y: 4.77,
      color: colors[3],
      drilldown: {
        data: [2],
        color: colors[3]
      }
    }],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;


  // Build the data arrays
  for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
      y: data[i].y,
      color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
      brightness = 0.2 - (j / drillDataLen) / 5;
      versionsData.push({
        y: data[i].drilldown.data[j],
        color: Highcharts.Color(data[i].color).brighten(brightness).get()
      });
    }
  }

  // Create the chart
  $('#container').highcharts({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Browser market share, January, 2015 to May, 2015'
    },
    //subtitle: {
    //  text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
    //},
    yAxis: {
      title: {
        text: 'Total percent market share'
      }
    },
    plotOptions: {
      pie: {
        animation: {
          duration: 2000
        },
        dataLabels: {
          enabled: false
        },
        shadow: false,
        center: ['50%', '50%']
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    series: [{
      name: 'Inner',
      data: browserData,
      size: '40%'
    }, {
      name: 'Outer',
      data: versionsData,
      size: '80%',
      innerSize: '60%'
    }]
  });
});// JavaScript Document