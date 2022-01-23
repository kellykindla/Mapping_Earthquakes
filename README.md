# Mapping Earthquakes Analysis 
## Module 13 

## Project Overview 
### Purpose of Module 13
In this module, we expanded on our JavaScript and D3 capability and were introduced to the Leaflet library and the use of Matbox APIs to populate an interactive world map from GeoJSON data. We used JavaScript and the D3 library to traverse and retrieve the GeoJSON data. We then plotted our data with a MapBox API request. We explored making the map interactive by adding multiple layers through Leaflet control plug-ins. This module further had us create multiple branches from the main branch on GitHub and push and merge such data onto the main branch. 

### Overview of Assignment 
For this assignment, we were challenged to create an interactive map of earthquake data all over the world for the last seven days. We first used a url for GeoJSON earthquake data from the USGS website and retrieved geographical coordinates and magnitudes of the earthquakes. We then used leaflet to plot the earthquake data on a Mapbox map through an API request. We also created a legend through the Leaflet package. For the challenge, we plotted tectonic plate data from GeoJSON data found on Github. We made the tectonic plate data an overlay layer and adjusted it so the data stands out on the map. We then followed a similar process to what was completed in the module, by collecting GeoJSON earthquake data from the USGS website for major earthquakes with a magnitude greater than 4.5. We plotted this data so the color and set radius of the circle markers were correspondent to the magnitude of the earthquake. We also added popup markers for each earthquake to display its magnitude and location. Lastly, we were asked to add a third map style to the earthquake map as a tile layer object to make the map more interactive for the user. 

### Resources 
- VS Code 1.62.1
- Command-line interface 
- [Weekly Earthquake data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) 
- [Major Earthquake data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)
- [Tectonic Plate data](https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json)
- [Leaflet Quick Start](https://leafletjs.com/examples/quick-start/)
- [Creating a Legend](https://leafletjs.com/examples/choropleth/)
- [Color List](https://matplotlib.org/3.1.0/gallery/color/named_colors.html) 


### Results 
Using the GeoJSON earthquake and tectonic plate data, we were able to create an interactive world map. When first opening the map, you will see all overlay maps on- earthtquake, tectonic plate, and major earthquake data with the street map style selected. On the bottom right corner, you will see a legend describing the magnitude of each earthquake plotted. 
<img width="1182" alt="OpenScreen" src="https://user-images.githubusercontent.com/92558842/150700961-956be6bf-f869-4e5e-9e4b-a3dd00acac29.png">

One may then deselect the tectonic plate and major earthquake overlays to see the earthquakes of the past seven days. The user can then select an earthquake to see the correseponding popup message with the magnitude and location of that earthquake. 
<img width="1182" alt="EQPopup" src="https://user-images.githubusercontent.com/92558842/150701080-d2d2fa31-9d20-4098-94fe-e4232fba9193.png">

Similarly, one can select the tectonic plate data only to see the tectonic plates of the Earth. I also added an option to display the name of the tectonic plate border by selecting on the line. 
<img width="1186" alt="TPlatePopUp" src="https://user-images.githubusercontent.com/92558842/150701163-537acdee-939a-4f77-aabb-ad5114a83a72.png">

Lastly for the overlays, one can select the major earthquake data only. Here one will see the earthquakes with a magnitude greater than 4.5. I added additional features to the circle markers by creating a thick diameter for each marker. The circle markers radius corresponds to the magnitude of the earthquake, as does the color of each circle marker. Furthermore, each marker has a popup that displays the location and magnitude of each earthquake. 
<img width="1185" alt="MajorEQPopup" src="https://user-images.githubusercontent.com/92558842/150701249-028e4645-dec7-474c-bdcf-baa69714d499.png">

To complete deliverable three, I added two additional map styles- 'Outdoor' and 'Light'. The user can select which style they prefer to view the map on. 
Streets View: 
<img width="1183" alt="Streets" src="https://user-images.githubusercontent.com/92558842/150701316-711cf792-d1dd-4afd-9341-129afd4268f8.png">

Satelite View: 
<img width="1181" alt="Satelite" src="https://user-images.githubusercontent.com/92558842/150701325-bdf0c5c2-a765-4df0-b819-d4588bd3dc27.png">

Outdoor View: 
<img width="1185" alt="Outdoor" src="https://user-images.githubusercontent.com/92558842/150701329-e4ada8d7-9a89-4761-a730-b6304f84abb7.png">

Light View: 
<img width="1185" alt="Light" src="https://user-images.githubusercontent.com/92558842/150701341-7b56650e-3dd8-4253-95db-eb14e6c74a85.png">


