proportionalGraph = function(id) {
  var trace1 = {
    x: [0, 100],
    y: [0, 100],
    type: 'scatter'
  };
  var data = [trace1];
  var layout = {
    xaxis: {
      title: 'Intensity',
      autorange: true,
      showgrid: false,
      zeroline: true,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    },
    yaxis: {
      title: 'Speed',
      autorange: true,
      showgrid: false,
      zeroline: true,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    },
  };
  Plotly.newPlot(id, data, layout, {displayModeBar: false});
}

inverseGraph = function(id){
  var trace1 = {
    x: [0, 100],
    y: [100, 0],
    type: 'scatter'
  };
  var data = [trace1];
  var layout = {
    xaxis: {
      title: 'Intensity',
      autorange: true,
      showgrid: false,
      zeroline: true,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    },
    yaxis: {
      title: 'Speed',
      autorange: true,
      showgrid: false,
      zeroline: true,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    },
  };
  Plotly.newPlot(id, data, layout, {displayModeBar: false});
}
