// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//option 1 
//let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//option 2 - useful for adding multiple tile layers or background images of maps 
let map = L.map("mapid", {
     center: [40.7, -94.5],
     zoom: 4
   });

// Get data from cities.js 
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  //make the marker a circle that is equivalent to the city population
  L.circleMarker(city.location, {
    radius : ((city.population)/200000),
    color : "orange",
    fillColor: "orange",
    lineweight : 4
  })
  //add a pop up with city name and population for each marker 
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});


// Create the tile layer that will be the background of our map.
// use streets as variable since the layer will create a street-level map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add our 'graymap' tile layer to the map.
streets.addTo(map);