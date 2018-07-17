Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
// Chart.defaults.global.defaultFontSize = 9;

function matchMedia() {
  if (window.matchMedia("(min-width: 768)").matches) {
    Chart.defaults.global.defaultFontSize = 30;
  }
  else {
    Chart.defaults.global.defaultFontSize = 6;
  }
}
