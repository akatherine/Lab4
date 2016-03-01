//loads the variables of the map including the zoom and the lattitude and longitude
	var map = L.map('map').setView([30.467614, -91.131592], 5);
var streets =	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(map);

//loads the first transparent layer over the map. It includes Near-Real-Time Surface In-Situ Observations
var realtime = L.tileLayer.wms ("http://nowcoast.noaa.gov/arcgis/services/nowcoast/obs_meteocean_insitu_sfc_time/MapServer/WMSServer",
{
		layers: '3',
		format: 'image/png',
		transparent: true,
		attribution: "NOAA",
		opacity: 0.50
 }).addTo (map);

 //loads the 2nd transparent layer over the map. It includes Recent Weather Radar Imagery

 var recentradar = L.tileLayer.wms ("http://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer",
 {
 		layers: '1',
 		format: 'image/png',
 		transparent: true,
 		attribution: "NOAA",
 		opacity: 0.50
  }).addTo (map);

	//loads the 3rd transparent layer over the map. It includes Recent GOES Weather Satellite Imagery

	var recentsatellite = L.tileLayer.wms ("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_imagery_goes_time/MapServer/WMSServer",
  {
  		layers: '1',
  		format: 'image/png',
  		transparent: true,
  		attribution: "NOAA",
  	  opacity: 0.25
   }).addTo (map);

//Defines what the baselayer is that will be visible if none of the other layrs are displayed. 
var baselayers = {
	"streets": streets
};

//Displays the controlbox that permits the viewer to select which layers to display.
var overlays = {
	"Surface": realtime,
	"RecentRadar": recentradar,
	"RecentSatellite": recentsatellite
};

L.control.layers(baselayers, overlays).addTo(map);
