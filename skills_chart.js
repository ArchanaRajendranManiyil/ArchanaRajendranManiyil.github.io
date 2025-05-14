Plotly.newPlot('skillsChart', [{
  type: 'bar',
  x: [90, 85, 80, 80, 75, 90],
  y: ['Python', 'SQL', 'Power BI', 'Tableau', 'R', 'Excel'],
  orientation: 'h',
  marker: { color: 'rgba(37,99,235,0.7)' }
}], {
  title: 'Skill Proficiency',
  xaxis: { title: 'Proficiency (%)' },
  margin: { l: 100 }
});