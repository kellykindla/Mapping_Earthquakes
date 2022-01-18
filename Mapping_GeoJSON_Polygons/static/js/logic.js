// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the satelite view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7,-79.3], //center at toronto
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// acessing airport GeoJSON URL from Github
let torontoHoods = "https://raw.githubusercontent.com/kellykindla/Mapping_Earthquakes/main/torontoNeighborhoods.json"; 

// Create a style for the lines.
let myStyle = {
  fillColor: "#ffffa1",
  color: "blue",
  weight: 1
}

//grab GeoJSON data 
d3.json(torontoHoods).then(function(data){
  console.log(data);
  //create a GeoJSON layer with retrieved data 
  L.geoJson(data,{
    style: myStyle,
    onEachFeature: function(feature,layer){
      console.log(layer);
      layer.bindPopup("<h2>Neighborhood: " +feature.properties.AREA_NAME +"</h2>");
    }
  }).addTo(map);
});
