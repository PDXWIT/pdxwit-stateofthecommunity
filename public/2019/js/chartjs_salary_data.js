
// =====================
// Salary Chart
// =====================
var ctxSalary = document.getElementById("salary").getContext("2d");

var salaryData = {
  labels: [
    "Yes",
    "No"
  ],
  datasets: [
    {
      data: [35, 65],
      backgroundColor: [
        pattern.draw('diagonal-right-left', '#63666A'), //dark grey
        pattern.draw('dot','#2F7392'), //blue
      ]
    }]
};

var salaryDoughnut = new Chart(ctxSalary, {
  type: 'doughnut',
  data: salaryData,
  options: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 20,
        fontSize: 16,
      },
    },
    elements: {
      arc: {
        borderWidth: 3,
        borderColor: '#2B3944',
      },
    },
    percentageInnerCutout : 50,
    animationEasing : "easeOutBounce",
    animateRotate : true,
    responsive: true,
    maintainAspectRatio: true
  }
});
