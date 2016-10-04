var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];

var layout = {
  height: 380,
  width: 480
};

Plotly.newPlot('myDiv', data, layout);