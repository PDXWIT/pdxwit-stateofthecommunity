
// =====================
// Salary Chart
// =====================
var ctxSalary = document.getElementById("salary").getContext("2d");

var salaryData = {
  labels: [
    "Yes: 13%",
    "No: 87%"
  ],
  datasets: [
    {
      data: [13, 87],
      backgroundColor: [
        '#63666A', //dark grey
        '#2F7392', //blue
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
        boxWidth: 8,
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
    rotation: (+1.9 * Math.PI) - (25/180 * Math.PI),
    maintainAspectRatio: true
  }
});
