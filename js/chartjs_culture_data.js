
// =====================
// Culture Chart
// =====================
var ctxCulture = document.getElementById("culture");



var cultureData = {
  labels: 'Culture',
  datasets: [
    {
      label: ['Diverse'],
      data: [{
        x: 85,
        y: 4,
        r: 95
    }],
    backgroundColor: '#536028',
  }, {
    label: ['Inclusive'], //54
    data: [{
      x: 40,
      y: 45,
      r: 115
    }],
    backgroundColor: '#536028',
  }, {
    label: ['Toxic'], //9
    data: [{
      x: 50,
      y: 15,
      r: 72
    }],
    backgroundColor: '#536028',
  }, {
    label: ['Bro-Culture'], //18
    data: [{
      x: 22,
      y: 52,
      r: 79
    }],
    backgroundColor: '#536028',
  }, {
    label: ['Results-Oriented'], //63
    data: [{
      x: 78,
      y: 40,
      r: 125
    }],
    backgroundColor: '#536028',
  }, {
    label: ['Caring'], //51
    data: [{
      x: 30,
      y: 10,
      r: 112
    }],
    backgroundColor: '#536028',
  }, {
    label: ['Other'], //15
    data: [{
      x: 55,
      y: 44,
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
