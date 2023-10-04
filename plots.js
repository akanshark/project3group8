// Initializes the page with a default plot
function init() {
  data = [{
    x: ["Sept 1 2023", "Sept 5 2023", "Sept 6 2023", "Sept 7 2023", "Sept 8 2023", "Sept 11 2023", "Sept 12 2023", "Sept 13 2023", "Sept 14 2023", "Sept 15 2023", "Sept 18 2023", "Sept 19 2023", "Sept 20 2023", "Sept 21 2023", "Sept 22 2023",
    "Sept 25 2023", "Sept 26 2023", "Sept 27 2023", "Sept 28 2023", "Sept 29 2023", "Oct 2 2023", "Oct 3 2023"],
    y: [189.46,	189.7,	182.91,	177.56,	178.18,	179.36,	176.3,	174.21,	175.74,	175.01,	177.97,	179.07,	175.49,	173.93,	174.79,	176.08,	171.96,	170.43,	170.69,	171.21,	173.75,	171.9899] }];
    
    let layout = {
      title: "AAPL Stock Price",
      xaxis: {
        title: "Date"
      },
      yaxis: {
        title: "Stock Price"
      }
    };

  Plotly.newPlot("plot", data, layout);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];

  x = ["Sept 1 2023", "Sept 5 2023", "Sept 6 2023", "Sept 7 2023", "Sept 8 2023", "Sept 11 2023", "Sept 12 2023", "Sept 13 2023", "Sept 14 2023", "Sept 15 2023", "Sept 18 2023", "Sept 19 2023", "Sept 20 2023", "Sept 21 2023", "Sept 22 2023",
       "Sept 25 2023", "Sept 26 2023", "Sept 27 2023", "Sept 28 2023", "Sept 29 2023", "Oct 2 2023", "Oct 3 2023"]

  if (dataset === 'dataset1') { // Apple
    //x = [1, 2, 3, 4, 5];
    y = [189.46,	189.7,	182.91,	177.56,	178.18,	179.36,	176.3,	174.21,	175.74,	175.01,	177.97,	179.07,	175.49,	173.93,	174.79,	176.08,	171.96,	170.43,	170.69,	171.21,	173.75,	171.9899];
    title = "AAPL Stock Price"
  }

  else if (dataset === 'dataset2') { // Google
    //x = [10, 20, 30, 40, 50];
    y = [135.66,	135.77,	134.46,	135.26,	136.38,	136.92,	135.34,	136.71,	138.1,	137.4,	138.21,	138.04,	133.74,	130.44,	130.25,	131.11,	128.565, 130.54,	132.31,	130.86,	134.17,	131.9663];
    title = "GOOGL Stock Price"
  }

  else if (dataset === 'dataset3') { // TSLA
    //x = [110, 210, 310, 410, 510];
    y = [245.01,	256.49,	251.92,	251.49,	248.5,	273.58,	267.48,	271.3,	276.04,	274.39,	265.28,	266.5, 262.59,	255.7,	244.88,	246.99,	244.12,	240.5,	246.38,	250.22,	251.6,	245.77];
    title = "TSLA Stock Price"
  }

  else if (dataset === 'dataset4') { // MSFT
    //x = [110, 210, 310, 410, 50];
    y = [328.66,	333.55,	332.88,	329.91,	334.27,	337.94,	331.77,	336.06,	338.7,	330.22,	329.06,	328.65,	320.77,	319.53,	317.01,	317.54,	312.14,	312.79,	313.64,	315.75,	321.8,	311.63]
    title = "MSFT Stock Price"
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
  
  var layout_update = {
    title: title, // updates the title
    xaxis: xaxis // updates the x axis
};

Plotly.relayout("plot", layout_update)

}

init();
  