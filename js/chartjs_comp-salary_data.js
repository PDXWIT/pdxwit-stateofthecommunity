// =====================
// Comparable Salary Chart
// =====================
var ctxCompSalary = document.getElementById("comp-salary").getContext("2d");

var compsalaryData = {
  labels: [
    "Men", "Women"
  ],
    datasets: [
      {
        data: [75,48],
        label: 'Yes',
        backgroundColor: '#2F7392'

      }, {
        data: [25,52],
        label: 'No',
        backgroundColor: '#921B1E'
      }
    ],
};

var compSalaryBar = new Chart(ctxCompSalary, {
    type: 'bar',
    data: compsalaryData,
    options: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 8,
        },
      },
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
              beginAtZero:true

          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }]
      }
  }
});
