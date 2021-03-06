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
  "Satellite": satelliteStreets
};

//create earthquake layer for map 
let earthquakes = new L.layerGroup();

//define an object that contains the overlays -- visible at all time 
let overlays = {
  Earthquakes: earthquakes
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5], //center of US
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);

// acessing earthquake GeoJSON URL from USGS
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"; 


//grab GeoJSON data 
d3.json(earthquakeData).then(function(data){
  //return style data for each earthquake on the map-- pass mag of earthquake into a function to get radius
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  //determine the color of the circle based on magnitude 
  function getColor(magnitude){
    if (magnitude > 5){
      return "#ea2c2c";
    }
    if (magnitude > 4){
      return "#ea822c";
    }
    if (magnitude > 3){
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

  //determine the radius of the earthquake marker based on earthquakes magnitude (mag of 0 plotted w 1)
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }
  
  console.log(data);
  //create a GeoJSON layer with retrieved data 
  L.geoJson(data,{
    //turn each feature into a circle Marker on the map 
    pointToLayer: function(feature,latlng){
      console.log(data);
      return L.circleMarker(latlng);
    },
    //set the style for each circleMarker
    style: styleInfo,
    //create a popup for each circleMarker, displaying the mag and location 
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(earthquakes);
  earthquakes.addTo(map);
});
