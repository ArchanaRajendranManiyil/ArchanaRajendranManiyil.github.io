Plotly.newPlot('sleepChart', [{
  x: [6.2, 6.9, 7.0, 7.1, 6.5],
  y: [46, 72, 68, 65, 8],
  text: ['Japan', 'USA', 'Germany', 'France', 'India'],
  mode: 'markers',
  marker: {
    size: [34, 35, 28, 30, 44],
    color: ['#1f77b4', '#2ca02c', '#ff7f0e', '#ff7f0e', '#1f77b4']
  }
}], {
  title: 'Sleep Hours vs GDP/Hour',
  xaxis: { title: 'Avg Sleep Hours' },
  yaxis: { title: 'GDP per Hour (USD)' }
});