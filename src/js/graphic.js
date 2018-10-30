/* global d3 */

function resize() {}

function init() {

	var style_1975 = "cjnn7622h02ph2smpyw7dhq4y";
	var style_1990 = "cjnl0k08b88ai2slsjxzk0jii";
	var style_2015 = "cjnel8krq2ltq2spteciqe2x3";

	var token = "pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
	var globalZoom = true;
	var globalZoomAmount = 7.5;

	var cityArray = [
		{
			city_name:"Hong Kong",
			city_id:"hong_kong",
			location:{
				center:[113.570587,22.78],
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		},
		{
			city_name:"Lagos",
			city_id:"lagos",
			location:{
				center:[3.32,6.58],
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		},
		{
			city_name:"Kinshasa",
			city_id:"kinshasa",
			location:{
				center:[15.31,-4.36],
				zoom:7.13,
				bearing:-82.38,
				pitch:60
			}
		},
		{
			city_name:"New York City",
			city_id:"new_york_city",
			location:{
				center:[-73.98,40.76],
				zoom:7.13,
				bearing:-33.19,
				pitch:60
			}
		},
		{
			city_name:"London",
			city_id:"london",
			location:{
				center:[-.23,51.43],
				zoom:7.13,
				bearing:-19.59,
				pitch:60
			}
		},
		{
			city_name:"Paris",
			city_id:"paris",
			location:{
				center:[2.228,48.88],
				zoom:7.13,
				bearing:-19.59,
				pitch:60
			}
		},
		{
			city_name:"Karachi",
			city_id:"kirachi",
			location:{
				center:[67.065,24.95],
				zoom:7.13,
				bearing:73.21,
				pitch:60
			}
		},
		{
			city_name:"Bangalore",
			city_id:"bangalore",
			location:{
				center:[77.511,13.109],
				zoom:7.13,
				bearing:-23.18,
				pitch:60
			}
		},
		{
			city_name:"Mexico City",
			city_id:"mexico_city",
			location:{
				center:[-99.120,19.319],
				zoom:7.13,
				bearing:0.74,
				pitch:60
			}
		},
		{
			city_name:"Singapore",
			city_id:"singapore",
			location:{
				center:[103.950,1.260],
				zoom:7.13,
				bearing:-103.18,
				pitch:60
			}
		}
	];

	// for (var city in cityArray){
	// 	var width = Math.floor((1200-40)/4);
	// 	var height = width;
	// 	var locationData = cityArray[city].location;
	// 	var bearing = locationData.bearing;
	// 	var pitch = locationData.pitch;
	// 	console.log(locationData.center);
	// 	var lat = locationData.center[1];
	// 	var lng = locationData.center[0];
	// 	var zoom = locationData.zoom;
	// 	if(globalZoom){
	// 		zoom = globalZoomAmount
	// 	}
	// 	var mapStyle = "cjnugndzr4rkn2spbxk0cnps5"
	//
	// 	var imageLink = "https://api.mapbox.com/styles/v1/dock4242/"+mapStyle+"/static/"+lng+","+lat+","+zoom+","+bearing+","+pitch+"/"+width+"x"+height+"?access_token="+token;
	//
	// 	d3.select(".single-year-wrapper").append("img").attr("src",imageLink);
	// }

	// for (var city in cityArray){
	// 	var height = 400;
	// 	var width = Math.floor((1200-40)/3);
	// 	var locationData = cityArray[city].location;
	// 	var bearing = locationData.bearing;
	// 	var pitch = locationData.pitch;
	// 	console.log(locationData.center);
	// 	var lat = locationData.center[1];
	// 	var lng = locationData.center[0];
	// 	var zoom = locationData.zoom;
	// 	if(globalZoom){
	// 		zoom = globalZoomAmount
	// 	}
	// 	var yearArray = [style_1975,style_1990,style_2015];
	//
	// 	d3.select(".image-wrapper")
	// 		.append("div")
	// 		.attr("class","years-wrapper")
	// 		.selectAll("img")
	// 		.data(yearArray)
	// 		.enter()
	// 		.append("img")
	// 		.attr("src",function(d){
	// 			var imageLink = "https://api.mapbox.com/styles/v1/dock4242/"+d+"/static/"+lng+","+lat+","+zoom+","+bearing+","+pitch+"/"+width+"x"+height+"?access_token="+token;
	// 			return imageLink
	// 		})
	//
	//
	//
	// }




}

export default { init, resize };
