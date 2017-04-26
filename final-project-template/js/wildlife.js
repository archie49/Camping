document.addEventListener('DOMContentLoaded', function() {
 var map = L.map('map').setView([40.38, -105.5], 4);   
L.tileLayer('https://api.mapbox.com/styles/v1/archie21/cj1gmpwzo000w2rnwph8quk42/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJjaGllMjEiLCJhIjoiY2l5MmNpeXRjMDAxbTJxcWphOWc0cjNjYSJ9.J3pcJEVhPcdyS1-Apr2kgg',
{
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
L.esri.featureLayer({
    url: 'https://services.nationalmap.gov/arcgis/rest/services/transportation/MapServer/41'
  }).addTo(map);
    L.esri.featureLayer({
    url: 'https://services.nationalmap.gov/arcgis/rest/services/transportation/MapServer/31'
  }).addTo(map);
   // L.esri.featureLayer({
   // url: 'https://services.nationalmap.gov/arcgis/rest/services/transportation/MapServer/41'
  //}).addTo(map);
  //  L.esri.featureLayer({
   // url: 'https://services.nationalmap.gov/arcgis/rest/services/transportation/MapServer/41'
 // }).addTo(map);
    
});