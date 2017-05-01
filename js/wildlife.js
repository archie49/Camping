document.addEventListener('DOMContentLoaded',function( ) {
var map = L.map('map').setView([38.7712, -105.95], 7);
    
L.tileLayer('https://api.mapbox.com/styles/v1/archie21/cj1gmpwzo000w2rnwph8quk42/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJjaGllMjEiLCJhIjoiY2l5MmNpeXRjMDAxbTJxcWphOWc0cjNjYSJ9.J3pcJEVhPcdyS1-Apr2kgg',
{
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
    
document.getElementById("foco").onclick = function(){
  map.setView([40.54, -105.052], 12);
};
    
document.getElementById("love").onclick = function(){
  map.setView([40.391, -105.0739], 14);
};
    
document.getElementById("long").onclick = function(){
  map.setView([40.165, -105.102], 14);
};  
   
function showLatLng(e) {
  document.getElementById("latlong").innerText = e.latlng.lat + " | " + e.latlng.lng;
}
map.on('mousemove', showLatLng);
    
    var whereWeAreFromLayer = new FeatureLayer("https://services.nationalmap.gov/arcgis/rest/services/structures/MapServer/1"
);
map.addLayer(whereWeAreFromLayer);
    
     L.esri.featureLayer({
    url: "https://services.nationalmap.gov/arcgis/rest/services/structures/MapServer/6"
  }).addTo(map);
    
});