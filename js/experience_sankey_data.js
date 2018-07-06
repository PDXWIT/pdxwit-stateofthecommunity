google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addRows([
    [ 'I was harassed', 'I did not report it', 63 ],
    [ 'I was harassed', 'I reported it', 33 ],
    [ 'I reported it', "Well", 24 ],
    [ 'I reported it', "Somewhat well", 30 ],
    [ 'I reported it', "Not Well", 58 ]
  ]);

  var colors = ['#2F7392', '#DE3C4B', '#E1ED67', '#9ECC50', '#536028', '#C8C9C7'];
  // Sets chart options.
  var options = {
    width: 600,
    sankey: {
      node: {
        colors: { colors },
        label: {  fontName: 'Helvetica',
                  fontSize: 14,
                  color: '#FFF',
                },
      },
    },
  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('experience_sankey'));
  chart.draw(data, options);
}
