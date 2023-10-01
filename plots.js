let trace1 = {
    x: xData, // make this the dates
    y: yData // make this the values

    // x: data.map(row => row.greekName),
    // y: data.map(row => row.greekSearchResults)
    // greekName and greekSearchResults are column names from the .js file we need to produce
  };
  
  let data = [trace1];
  
  let layout = {
    title: "Stock Value per Day"
  };
  
  Plotly.newPlot("plot", data, layout);

