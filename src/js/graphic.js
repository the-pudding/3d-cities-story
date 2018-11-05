// import TweenMax from 'gsap/src/minified/TweenMax.min';
// import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
// import TimelineMax from 'gsap/src/minified/TimelineMax.min';

function resize() {}

function init() {


	var startCoords = [-74.331,41.261];

	mapboxgl.accessToken =
		'pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ';

	var map = new mapboxgl.Map({
		container: 'map',
		// style: 'mapbox://styles/mapbox/light-v9',
		style: 'mapbox://styles/dock4242/cjnugndzr4rkn2spbxk0cnps5?optimize=true',
		center: [startCoords[0], startCoords[1]],
		zoom: 6,
		pitch: 0, // pitch in degrees
		bearing: 0, // bearing in degrees
		interactive: false
	});
	map.scrollZoom.disable();

	map.on("load",function(d){

	})

	map.on("click",function(d){
		map.flyTo({
			pitch:60
		})
	})

	var style_1975 = "cjnn7622h02ph2smpyw7dhq4y";
	var style_1990 = "cjnl0k08b88ai2slsjxzk0jii";
	var style_2015 = "cjnel8krq2ltq2spteciqe2x3";

	var token = "pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
	var globalZoom = true;
	var globalZoomAmount = 6.9;

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
				center:[103.838,1.411],
				zoom:8.63,
				bearing:-38.48,
				pitch:60
			}
		}
	];

	// d3.select(".intro-image").append("img").attr("src",function(){
	// 	return "https://api.mapbox.com/styles/v1/dock4242/cjnugndzr4rkn2spbxk0cnps5/static/-75.14907,41.53713,7,-51,60/1280x1280@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
	// })

	// for (var city in cityArray){
	// 	var width = Math.floor((900-20)/2);
	// 	var height = width+50;
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
	// 	//var mapStyle = "cjnel8krq2ltq2spteciqe2x3"
	//
	// 	var imageLink = "https://api.mapbox.com/styles/v1/dock4242/"+mapStyle+"/static/"+lng+","+lat+","+zoom+","+bearing+","+pitch+"/"+width+"x"+height+"?access_token="+token;
	//
	// 	var imgWrapper = d3.select(".single-year-wrapper").append("div").attr("class","img-wrapper")
	//
	// 	imgWrapper
	// 		.append("img")
	// 		.attr("src",imageLink);
	//
	// 	imgWrapper
	// 		.append("p")
	// 		.attr("class","city-name")
	// 		.html("<span>"+cityArray[city].city_name+"</span>We found fascinating patterns in the arrangements of buildings. Traditional road maps highlight streets and highways; here they show up as a linear absence.")
	// 		;
	//
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

	// const scroller = scrollama();
	//
	// function handleStepEnter(callback){
	// 	console.log(callback);
	// }
	//
	// function handleStepExit(callback){
	// 	console.log(callback);
	// }
	//
	// function handleStepProgress(callback){
	// 	console.log(callback);
	// }
	//
	// scroller.setup({
	//   	step: '.step', // required - class name of trigger steps
	// 		container: '.scroll', // required (for sticky)
	// 		graphic: '.scroll__graphic' // required (for sticky)
	// 	})
	// 	.onStepEnter(handleStepEnter)
	// 	.onStepProgress(handleStepProgress)
	// 	.onStepExit(handleStepExit);
	var controller = new ScrollMagic.Controller();
	var tweenProgress = 0;
	var tweenProgressRotate = 0;


	var pinScene = new ScrollMagic.Scene({
			triggerElement:"#fixed-map",
			duration: d3.select(".scroll__text").node().getBoundingClientRect().height,// - Math.max(document.documentElement.clientHeight, window.innerHeight || 0),	// the scene should last for a scroll distance of 100px
			offset: 0,	// start this scene after scrolling for 50px
			triggerHook:0
		})
		.addIndicators({name:"hi there"})
		.setPin("#fixed-map",{pushfollowers: false}) // pins the element for the the scene's duration
		.addTo(controller); // assign the scene to the controller


	var tiltShiftStep = new ScrollMagic.Scene({
			triggerElement:"#tilt-shift-step",
			duration: d3.select("#tilt-shift-step").node().getBoundingClientRect().height,	// the scene should last for a scroll distance of 100px
			offset: 0,	// start this scene after scrolling for 50px
			triggerHook:.5
		})
		.on("progress", function (event) {
			var progress = event.progress;
			progress = Math.round(progress*30)/30;
			if(progress != tweenProgress){
				tweenProgress = progress;
				map.jumpTo({
					pitch: tweenProgress*60 // pitch in degrees
				});
			}
		})
		.addTo(controller); // assign the scene to the controller

	var rotateStep = new ScrollMagic.Scene({
			triggerElement:"#rotate-step",
			duration: d3.select("#rotate-step").node().getBoundingClientRect().height,	// the scene should last for a scroll distance of 100px
			offset: 0,	// start this scene after scrolling for 50px
			triggerHook:.5
		})
		.on("progress", function (event) {
			var progress = event.progress;
			progress = Math.round(progress*30)/30;
			if(progress != tweenProgressRotate){
				tweenProgressRotate = progress;
				map.jumpTo({
					bearing: tweenProgressRotate*-65.6 // pitch in degrees
				});
			}
		})
		.addTo(controller); // assign the scene to the controller

}

export default { init, resize };
