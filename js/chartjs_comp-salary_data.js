// =====================
// Comparable Salary Chart
// =====================
var ctxCompSalary = document.getElementById("comp-salary").getContext("2d");

var compsalaryData = {
  labels: [
    "Male", "Female"
  ],
    datasets: [
      {
        data: [75,48],
        label: 'Yes',
        backgroundColor: '#4583A2'

      }, {
        data: [25,52],
        label: 'No',
        backgroundColor: '#FF4C4C'
      }
    ],
};

var compSalaryBar = new Chart(ctxCompSalary, {
    type: 'bar',
    data: compsalaryData,
    options: {
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
