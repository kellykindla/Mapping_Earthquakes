// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//option 1 
//let map = L.map('mapid').setView([40.7, -94.5], 4);
//option 2 - useful for adding multiple tile layers or background images of maps 
let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 4
  });

// Create the tile layer that will be the background of our map.
// use streets as variable since the layer will create a street-level map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add our 'graymap' tile layer to the map.
streets.addTo(map);