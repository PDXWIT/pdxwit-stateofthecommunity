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
        backgroundColor: '#2F7392'

      }, {
        data: [25,52],
        label: 'No',
        backgroundColor: '#DE3C4B'
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
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
      }
  }
});
