// =====================
// Comparable Salary Chart
// =====================
var ctxCompSalary = document.getElementById("comp-salary").getContext("2d");

var compsalaryData = {
  labels: [
    "Male"
  ],
    datasets: [
      {
        data: [75],
        label: 'Yes'

      }, {
        data: [25],
        label: 'No'

      }
    ],
  labels: [
    "Female"
  ],
    datasets: [
      {
        data: [48],
        label: 'Yes'

      }, {
        data: [52],
        label: 'No'

      }
    ]
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
