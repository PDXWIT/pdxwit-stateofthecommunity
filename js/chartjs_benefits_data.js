// =====================
// Benefits Chart
// =====================

var ctxBenefits = document.getElementById("benefits").getContext("2d");
var myChart = new Chart(ctxBenefits, {
    type: 'horizontalBar',
    data: {
        labels: ["Paid maternity leave", "Paid paternity leave", "Nursing room", "Flexible hours", "Remote working", "Onsite childcare", /*"Paid sick leave", "Paid vacation", */ "Trans healthcare", "None of these"],
        datasets: [{
            label: 'Percent',
            data: [67, 48, 55, 72, 70, 6, /*76, 89,*/ 22, 4],
            backgroundColor: [
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
              ],
            borderColor:  [
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
                '#2F7392',
              ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
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
