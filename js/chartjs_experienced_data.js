// =====================
// Experienced Chart
// =====================
var ctxExperienced = document.getElementById("experienced").getContext("2d");

var experienceData = {
  labels: [
    "Told you were too aggressive at work",
    "Asked to order lunches/schedule events that was beyond your job scope",
    "Suspect you were passed on a role because of your gender",
    "Learned to be the den mother/counselor/admin because of your gender",
    "Excluded from important work events because of your gender",
    "In a meeting and felt gendered language was used that did not include you",
    "No - I have not experienced any of these"
  ],
  datasets: [
    {
      label: 'Female',
      data: [33, 33, 24, 42, 16, 46, 25],
      backgroundColor: '#DE3C4B'
    }, {
      label: 'Male',
      data: [19, 6, 5, 2, 1, 5, 71],
      backgroundColor: '#E1ED67'

    }
  ],
};

var experienceBar = new Chart(ctxExperienced, {
    type: 'horizontalBar',
    data: experienceData,
    options: {
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            /*  Doesn't currently work
                takes a string phrase and breaks it into separate phrases
                no bigger than 'maxwidth', breaks are made at complete words.
            scaleLabel: function formatLabel(str, maxwidth){
                      var sections = [];
                      var words = str.split(" ");
                      var temp = "";

                      words.forEach(function(item, index){
                          if(temp.length > 0)
                          {
                              var concat = temp + ' ' + item;

                              if(concat.length > maxwidth){
                                  sections.push(temp);
                                  temp = "";
                              }
                              else{
                                  if(index == (words.length-1))
                                  {
                                      sections.push(concat);
                                      return;
                                  }
                                  else{
                                      temp = concat;
                                      return;
                                  }
                              }
                          }

                          if(index == (words.length-1))
                          {
                              sections.push(item);
                              return;
                          }

                          if(item.length < maxwidth) {
                              temp = item;
                          }
                          else {
                              sections.push(item);
                          }

                      });

                      return sections;
                  }*/
          }],
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            }


          }]
      }
  }
});
