// Get the Roadster endpoint

const historical = ("historical.json")

// Fetch the JSON data and console log it
d3.json(historical).then(function(data) {
  console.log(data);
});

// Get the capsules endpoint

const fundamental = ("fundamental.json")

// Fetch the JSON data and console log it
d3.json(fundamental).then(function(data) {
  console.log(data);
});