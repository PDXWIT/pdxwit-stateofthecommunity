// =====================
// Experienced Chart 1
// =====================
var ctxExperienced1 = document.getElementById("experienced1").getContext("2d");

var experienceData1 = {
  labels: [
    ""
  ],
  datasets: [
    {
      label: 'Women',
      data: [33],
      backgroundColor: '#921B1E' //red
    }, {
      label: 'Men',
      data: [19],
      backgroundColor: '#63666A' //dark grey

    }
  ],
};

var experienceBar1 = new Chart(ctxExperienced1, {
    type: 'horizontalBar',
    data: experienceData1,
    options: {
      title: {
        display: true,
        text: 'Told you were too aggressive at work'
      },
      layout: {
        padding: 1,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: true,
      responsive: false,
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              max: 80,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});

// =====================
// Experienced Chart 2
// =====================
var ctxExperienced2 = document.getElementById("experienced2").getContext("2d");

var experienceData2 = {
  labels: [
    ""
  ],
  datasets: [
    {
      label: 'Women',
      data: [33],
      backgroundColor: '#921B1E' //red
    }, {
      label: 'Men',
      data: [6],
      backgroundColor: '#63666A' //dark grey

    }
  ],
};

var experienceBar2 = new Chart(ctxExperienced2, {
    type: 'horizontalBar',
    data: experienceData2,
    options: {
      title: {
        display: true,
        text: 'Asked to order lunches, schedule events that was beyond your job scope'
      },
      layout: {
        padding: 1,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      responsive: false,
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              max: 80,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});

// =====================
// Experienced Chart 3
// =====================
var ctxExperienced3 = document.getElementById("experienced3").getContext("2d");

var experienceData3 = {
  labels: [
    ""
  ],
  datasets: [
    {
      label: 'Women',
      data: [24],
      backgroundColor: '#921B1E' //red
    }, {
      label: 'Men',
      data: [5],
      backgroundColor: '#63666A' //dark grey

    }
  ],
};

var experienceBar3 = new Chart(ctxExperienced3, {
    type: 'horizontalBar',
    data: experienceData3,
    options: {
      title: {
        display: true,
        text: 'Suspect you were passed on a role because of your gender'
      },
      layout: {
        padding: 1,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      responsive: false,
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              max: 80,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});

// =====================
// Experienced Chart 4
// =====================
var ctxExperienced4 = document.getElementById("experienced4").getContext("2d");

var experienceData4 = {
  labels: [
    ""
  ],
  datasets: [
    {
      label: 'Women',
      data: [42],
      backgroundColor: '#921B1E' //red
    }, {
      label: 'Men',
      data: [2],
      backgroundColor: '#63666A' //dark grey

    }
  ],
};

var experienceBar4 = new Chart(ctxExperienced4, {
    type: 'horizontalBar',
    data: experienceData4,
    options: {
      title: {
        display: true,
        text: 'Learned to be the den mother, counselor, admin because of your gender'
      },
      layout: {
        padding: 1,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      responsive: false,
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              max: 80,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});

// =====================
// Experienced Chart 5
// =====================
var ctxExperienced5 = document.getElementById("experienced5").getContext("2d");

var experienceData5 = {
  labels: [
    ""
  ],
  datasets: [
    {
      label: 'Women',
      data: [16],
      backgroundColor: '#921B1E' //red
    }, {
      label: 'Men',
      data: [1],
      backgroundColor: '#63666A' //dark grey

    }
  ],
};

var experienceBar5 = new Chart(ctxExperienced5, {
    type: 'horizontalBar',
    data: experienceData5,
    options: {
      title: {
        display: true,
        text: 'Excluded from important work events because of your gender'
      },
      layout: {
        padding: 1,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      responsive: false,
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              max: 80,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});

// =====================
// Experienced Chart 6
// =====================
var ctxExperienced6 = document.getElementById("experienced6").getContext("2d");

var experienceData6 = {
  labels: [
    ""
  ],
  datasets: [
    {
      label: 'Women',
      data: [46],
      backgroundColor: '#921B1E' //red
    }, {
      label: 'Men',
      data: [5],
      backgroundColor: '#63666A' //dark grey

    }
  ],
};

var experienceBar6 = new Chart(ctxExperienced6, {
    type: 'horizontalBar',
    data: experienceData6,
    options: {
      title: {
        display: true,
        text: 'In a meeting and felt gendered language was used that did not include you'
      },
      layout: {
        padding: 1,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      responsive: false,
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              max: 80,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});


// =====================
// Experienced Chart 7
// =====================
var ctxExperienced7 = document.getElementById("experienced7").getContext("2d");

var experienceData7 = {
  labels: [
    ""
  ],
  datasets: [
    {
      label: 'Women',
      data: [25],
      backgroundColor: '#921B1E' //red
    }, {
      label: 'Men',
      data: [71],
      backgroundColor: '#63666A' //dark grey

    }
  ],
};

var experienceBar7 = new Chart(ctxExperienced7, {
    type: 'horizontalBar',
    data: experienceData7,
    options: {
      title: {
        display: true,
        text: 'No - I have not experienced any of these'
      },
      layout: {
        padding: 1,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
      maintainAspectRatio: false,
      responsive: false,
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              max: 80,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});
