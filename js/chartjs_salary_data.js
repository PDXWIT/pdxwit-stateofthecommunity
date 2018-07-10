
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
      data: [13, 87],
      backgroundColor: [
        '#2F7392', //yellow
        '#921B1E', //red
      ]
    }]
};

var salaryDoughnut = new Chart(ctxSalary, {
  type: 'doughnut',
  data: salaryData,
  options: {
    percentageInnerCutout : 50,
    animationEasing : "easeOutBounce",
    animateRotate : true,
    responsive: true,
    rotation: (+1.9 * Math.PI) - (25/180 * Math.PI),
    maintainAspectRatio: true
  }
});
