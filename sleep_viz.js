
Plotly.d3.csv("sleep_vs_productivity.csv", function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var trace = {
        x: unpack(rows, 'Sleep Hours'),
        y: unpack(rows, 'Productivity Score'),
        text: unpack(rows, 'Country'),
        mode: 'markers',
        marker: {
            size: 12,
            color: unpack(rows, 'Productivity Score'),
            colorscale: 'Viridis',
            showscale: true
        },
        type: 'scatter'
    };

    var layout = {
        title: 'Sleep Hours vs Productivity Score by Country',
        xaxis: { title: 'Sleep Hours (avg per day)' },
        yaxis: { title: 'Productivity Score' }
    };

    Plotly.newPlot('sleepChart', [trace], layout);
});
