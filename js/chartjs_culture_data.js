
// =====================
// Culture Chart
// =====================
var ctxCulture = document.getElementById("culture");
var cultureData = {
  labels: 'Culture',
  datasets: [
    {
      label: ['diverse 34%'], //34
      data: [{
        x: 85,
        y: 4,
        r: 95
    }],
    backgroundColor: '#536028',
  }, {
    label: ['inclusive 54%'], //54
    data: [{
      x: 45,
      y: 45,
      r: 115
    }],
    backgroundColor: '#536028',
  }, {
    label: ['toxic 9%'], //9
    data: [{
      x: 50,
      y: 6,
      r: 72
    }],
    backgroundColor: '#536028',
  }, {
    label: ['bro-culture 18%'], //18
    data: [{
      x: 25,
      y: 55,
      r: 79
    }],
    backgroundColor: '#536028',
  }, {
    label: ['results-oriented 63%'], //63
    data: [{
      x: 78,
      y: 47,
      r: 125
    }],
    backgroundColor: '#536028',
  }, {
    label: ['caring 51%'], //51
    data: [{
      x: 30,
      y: 10,
      r: 112
    }],
    backgroundColor: '#536028',
  }, {
    label: ['other 15%'], //15
    data: [{
      x: 63,
      y: 24,
      r: 76
    }],
    backgroundColor: '#536028',
  }
  ]
};

var bubbleChart = new Chart(ctxCulture, {
  type: 'bubble',
  data: cultureData,
  options: {
    responsive: false,
    maintainAspectRatio: true,

    layout: {
      padding: 70,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        }
      }]
    },
  },
});

// Plugin to provide data labels
Chart.plugins.register({
  afterDatasetsDraw: function(ctxCulture, easing) {
    var ctx = bubbleChart.chart.ctx;
    bubbleChart.data.datasets.forEach(function (dataset, i) {
      var meta = bubbleChart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.data.forEach(function(element, index) {
          // Draw the text with the specified style
          ctx.fillStyle = '#FFF';
          var fontSize = 35;
          var fontStyle = 'normal';
          var fontFamily = 'Oswald';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
          // Convert to string

          var dataString = dataset.label[index].toString();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var padding = 5;
          var position = element.tooltipPosition();
          ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
        });
      }
    });
  }
});
