// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  //turn each feature into a marker on the map using pointToLayer 
  // pointToLayer: function(feature,latlng){
  //   console.log(feature);
  //   return L.marker(latlng)
  //   .bindPopup("<h2>" + feature.properties.city +","+ feature.properties.country + "</h2> <hr> <h3>" + feature.properties.name + "</h3>");
  // }
  //turn each feature to a marker using onEachFeature
  onEachFeature: function(feature,layer){
    console.log(layer);
    layer.bindPopup("<h2>Airport Code: " +feature.properties.faa +"</h2> <hr><h3> Airport Name:" + feature.properties.name + "</h3>");
  }
}).addTo(map);

// Create the tile layer that will be the background of our map.
// use streets as variable since the layer will create a street-level map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add our 'graymap' tile layer to the map.
streets.addTo(map);