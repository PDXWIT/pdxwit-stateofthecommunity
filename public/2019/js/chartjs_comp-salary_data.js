// =====================
// Comparable Salary Chart
// =====================


//pie version
var ctxCompSalaryM = document.getElementById("comp-salaryM").getContext("2d");

var compsalaryDataM = {
  labels: [
    "Yes",
    "No",
    "Not Sure"
  ],
    datasets: [
      {
        data: [32, 25, 43],
        label: ['Yes', 'No', 'Not Sure'],
        backgroundColor: [
          pattern.draw('diagonal-right-left', '#63666A'), //dark grey
          pattern.draw('dot','#2F7392'), //blue
          pattern.draw('dash', '#CC6750') //pdxwit red
        ]

      }
    ],
};

var compSalaryPieM = new Chart(ctxCompSalaryM, {
    type: 'pie',
    data: compsalaryDataM,
    options: {
      title: {
        display: true,
        text: "Men",
        fontSize: 20,
      },
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
      maintainAspectRatio: true,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      responsive: true,
  }
});

var ctxCompSalaryW = document.getElementById("comp-salaryW").getContext("2d");

var compsalaryDataW = {
  labels: [
    "Yes",
    "No",
    "Not Sure"
  ],
    datasets: [
      {
        data: [32, 26, 42],
        label: ['Yes', 'No', 'Not Sure'],
        backgroundColor: [
          pattern.draw('diagonal-right-left', '#63666A'), //dark grey
          pattern.draw('dot','#2F7392'), //blue
          pattern.draw('dash', '#CC6750') //pdxwit red
        ]

      }
    ],
};

var compSalaryPieW = new Chart(ctxCompSalaryW, {
    type: 'pie',
    data: compsalaryDataW,
    options: {
      title: {
        display: true,
        text: "Women",
        fontSize: 20,
      },
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
      maintainAspectRatio: true,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      responsive: true,
  }
});



//bar version
// var ctxCompSalary = document.getElementById("comp-salary").getContext("2d");
//
// var compsalaryData = {
//   labels: [
//     "Men", "Women"
//   ],
//     datasets: [
//       {
//         data: [75,48],
//         label: 'Yes',
//         backgroundColor: '#2F7392' //blue
//
//       }, {
//         data: [25,52],
//         label: 'No',
//         backgroundColor: '#E03A47' //red
//       }
//     ],
// };
//
// var compSalaryBar = new Chart(ctxCompSalary, {
//     type: 'bar',
//     data: compsalaryData,
//     options: {
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           boxWidth: 8,
//         },
//       },
//       maintainAspectRatio: true,
//       scales: {
//         yAxes: [{
//           stacked: true,
//           gridLines: {
//             display: false,
//             drawBorder: false,
//           },
//           ticks: {
//               beginAtZero:true
//
//           }
//         }],
//         xAxes: [{
//           stacked: true,
//           barThickness: 30,
//           gridLines: {
//             display: false,
//             drawBorder: false,
//           }
//         }]
//       }
//   }
// });
