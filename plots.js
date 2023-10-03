d3.csv('merged.csv').then(function(data) {
  // Convert date strings to Date objects
  data.forEach(function(d) {
      d.Date = new Date(d.Date);
      d.Price = parseFloat(d.Price);
  });

  // Extract date and price data for plotting
  const xData = data.map(d => d.Date);
  const yData = data.map(d => d.Price);

  // Create a Plotly trace for the stock price
  let trace1 = {
      x: xData,
      y: yData,
      type: 'scatter',
      mode: 'lines',
      name: 'Stock Price'
  };

  // Define the data array for the plot
  let plotData = [trace1];

  // Define the layout for the plot
  let layout = {
      title: 'Stock Value per Day',
      xaxis: {
          title: 'Date'
      },
      yaxis: {
          title: 'Price'
      }
  };

  // Create the Plotly chart
  Plotly.newPlot('plot', plotData, layout);
});


  

