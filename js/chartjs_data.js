var ctx = document.getElementById("benefits").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Paid maternity leave", "Paid paternity leave", "Nursing room", "Flexible hours", "Remote working", "Onsite childcare", "Trans healthcare", "None of these"],
        datasets: [{
            label: 'Percent',
            data: [67, 48, 55, 72, 70, 6, 76, 89, 22, 4],
            backgroundColor: [
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
              ],
            borderColor:  [
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
                '#4583A2',
              ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
