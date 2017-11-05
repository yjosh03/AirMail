// Set map var
var coords = [37.8,-96]; // set center point var
var zoom = 5; // set zoom level var
var map = L.map('map').setView(coords, zoom); // put it all together

////////////////////////////////////////////////////////////////////
// load a basemap tie layer
L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Data by <a href="https://cdflint.github.io/">Carl Flint</a>'
}).addTo(map);

