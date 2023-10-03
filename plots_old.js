console.log(data);

// Greek god names
tickers = data.map(function (row){
  return row.Ticker
});

// Trace for the Greek Data
let trace1 = {
    x: data.map(row => row.Date),
    y: data.map(row => row.Price),
    type: "scatter"
  };

// Data trace array
let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
  title: "Stock Prices"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);


// console.log(data_AAPL, data_MSFT);

// // Initializes the page with a default plot
// function init() {
//   let trace1 = {
//     x: data_AAPL.map(row => row.Date),
//     y: data_AAPL.map(row => row.Price),
//     type: "scatter"

//   };

//   let traceData = [trace1];
//   let layout = {
//     title: "Stock Prices"
//   };

//   Plotly.newPlot("plot", traceData, layout);
// }

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   let dataset = dropdownMenu.property("value");

//   // Initialize x and y arrays
//   let x = [];
//   let y = [];

//   if (dataset === 'data_AAPL') {
//     x: data_AAPL.map(row => row.Date);
//     y: data_AAPL.map(row => row.Price);
//   }

//   else if (dataset === 'data_MSFT') {
//     x: data_MSFT.map(row => row.Date);
//     y: data_MSFT.map(row => row.Price);
//   }

//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
// }

init();
