// import TweenMax from 'gsap/src/minified/TweenMax.min';
// import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
// import TimelineMax from 'gsap/src/minified/TimelineMax.min';

function resize() {}

function init() {


	function setupInteractiveMap(){
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
			map.setLayoutProperty("place-city-large", 'visibility', 'visible');
		})

		var controller = new ScrollMagic.Controller();
		var tweenProgress = 0;
		var tweenProgressRotate = 0;


		var pinScene = new ScrollMagic.Scene({
				triggerElement:"#fixed-map",
				duration: d3.select(".scroll__text").node().getBoundingClientRect().height - Math.max(document.documentElement.clientHeight, window.innerHeight || 0)/2,	// the scene should last for a scroll distance of 100px
				offset: 0,	// start this scene after scrolling for 50px
				triggerHook:0
			})
			// .addIndicators({name:"hi there"})
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
				progress = Math.round(progress*50)/50;
				if(progress != tweenProgress){
					tweenProgress = progress;
					map.jumpTo({
						pitch: tweenProgress*60, // pitch in degrees
						bearing: 0
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
				progress = Math.round(progress*50)/50;
				if(progress != tweenProgressRotate){
					tweenProgressRotate = progress;
					map.jumpTo({
						bearing: tweenProgressRotate*-65.6, // pitch in degrees
						pitch: 60 // pitch in degrees

					});
				}
			})
			// .addIndicators({name:"spin"})

			.addTo(controller); // assign the scene to the controller
	}

	setupInteractiveMap();
	var style_1975 = "cjnn7622h02ph2smpyw7dhq4y";
	var style_1990 = "cjnl0k08b88ai2slsjxzk0jii";
	var style_2015 = "cjnel8krq2ltq2spteciqe2x3";

	var token = "pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
	var globalZoom = true;
	var globalZoomAmount = 7;

	var cityArray = [
		{
			city_name:"Hong Kong",
			city_id:"hong_kong",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",

			location:{
				center:[113.570587,22.78],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		}
		,
		{
			city_name:"Lagos",
			city_id:"lagos",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[3.32,6.58],
				pathString:"qeii@kzpSfftB{p_BzkeAf~vAiqxBzp_B",
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		}
		,
		{
			city_name:"Kinshasa",
			city_id:"kinshasa",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[15.31,-4.36],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-82.38,
				pitch:60
			}
		},
		{
			city_name:"New York City",
			city_id:"new_york_city",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[-73.98,40.76],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-33.19,
				pitch:60
			}
		},
		{
			city_name:"London",
			city_id:"london",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[-.23,51.43],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-19.59,
				pitch:60
			}
		},
		{
			city_name:"Paris",
			city_id:"paris",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[2.228,48.88],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-19.59,
				pitch:60
			}
		},
		{
			city_name:"Karachi",
			city_id:"kirachi",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[67.065,24.95],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:73.21,
				pitch:60
			}
		},
		{
			city_name:"Bangalore",
			city_id:"bangalore",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[77.511,13.109],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-23.18,
				pitch:60
			}
		},
		{
			city_name:"Mexico City",
			city_id:"mexico_city",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[-99.120,19.319],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:0.74,
				pitch:60
			}
		},
		{
			city_name:"Singapore",
			city_id:"singapore",
			city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
			location:{
				center:[103.838,1.411],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:8.63,
				bearing:-38.48,
				pitch:60
			}
		}
	];

	// d3.select(".intro-image").append("img").attr("src",function(){
	// 	return "https://api.mapbox.com/styles/v1/dock4242/cjnugndzr4rkn2spbxk0cnps5/static/-75.14907,41.53713,7,-51,60/1280x1280@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
	// })

		var viewportWidth = d3.select("#content").node().getBoundingClientRect().width;
		var width = Math.floor((viewportWidth-200)/3);
		var height = width+20;

		var imgWrapper = d3.select(".single-year-wrapper")
			.selectAll("div")
			.data(cityArray)
			.enter()
			.append("div")
			.attr("class","img-wrapper");

		var textColumn = imgWrapper
			.append("div")
			.attr("class","text-column");

		var imgBoxWrapper = imgWrapper.append("div")
			.attr("class","swiper-container");

		textColumn
			.append("p")
			.attr("class","city-name")
			.html(function(d){
				return d.city_name;
			})
			;

		textColumn
			.append("p")
			.attr("class","city-desc")
			.html(function(d){
				return d.city_text;
			})
			;

		var toggle = textColumn
			.append("div")
			.attr("class","city-toggles")
			.selectAll("div")
			.data(["3D","overhead"])
			.enter()
			.append("div")
			.attr("class","city-toggle")
			.classed("city-toggle-active",function(d,i){
				if(i==0){
					return true;
				}
				return false;
			})
			.on("click",function(d){
				var optionClicked = d;
				var data = d3.select(this.parentNode).datum();
				updateImages(optionClicked,data)
				toggle.classed("city-toggle-active",false)
				d3.select(this).classed("city-toggle-active",true);
			})

		toggle
			.append("p")
			.attr("class","city-toggle-text")
			.html(function(d){
				return d;
			})
			;

		function getLink(data,zoomLevel,angle){

			var locationData = data.location;
			var bearing = locationData.bearing;
			var pitch = locationData.pitch;
			var lat = locationData.center[1];
			var lng = locationData.center[0];
			var zoom = locationData.zoom;
			var pathString = locationData.pathString;
			var pathLink = ""
			if(globalZoom){
				zoom = globalZoomAmount
			}
			if(angle != "3D"){
				pitch = 0;
			}
			var mapStyle = "cjnugndzr4rkn2spbxk0cnps5"

			if(zoomLevel == "medium"){
				zoom = 4.6;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
			}

			if(angle != "3D" && zoomLevel != "medium" && zoomLevel != "close"){
				pathLink = "path-2+007aff-0.8+f44-0("+pathString+")/"
			}

			if(zoomLevel == "far"){
				zoom = 3.6;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
				//pathLink = "path-5+666-0.5+f44-0(knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH)/"
			}

			if(zoomLevel == "super-far"){
				zoom = 2.6;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
				pathLink = "path-2+007aff-0.8+f44-0("+pathString+")/"
			}



			//var mapStyle = "cjnel8krq2ltq2spteciqe2x3"
			var imageLink = "https://api.mapbox.com/styles/v1/dock4242/"+mapStyle+"/static/"+pathLink+lng+","+lat+","+zoom+","+bearing+","+pitch+"/"+width+"x"+height+"?access_token="+token;
			return imageLink
		}

		function updateImages(angle,data){
			var cityId = data.city_id;

			imgBoxWrapper
				.filter(function(d,i){
					return d.city_id == cityId;
				})
				.selectAll(".swiper-slide").select("img")
				.attr("src",function(d){
					return getLink(d3.select(this.parentNode.parentNode).datum(),d,angle);
				})
			;

		}
		var swiperWrapper = imgBoxWrapper.append("div")
			.attr("class","swiper-wrapper");

		var swiperPagination = imgBoxWrapper.append("div")
			.attr("class","swiper-pagination");

		swiperWrapper.selectAll("div")
			.data(["close","medium","far","super-far"])
			.enter()
			.append("div")
			.attr("class","swiper-slide")
			.style("width",width+"px")
			.style("height",height+"px")
			.append("img")
			.style("width",width+"px")
			.style("height",height+"px")
			.attr("src",function(d){
				return getLink(d3.select(this.parentNode.parentNode).datum(),d,"3D");
			})
			;

		imgBoxWrapper.each(function(d,i,j){
			var swiper = new Swiper(j, {
				spaceBetween: 5,
				slidesPerGroup: 1,
				grabCursor: true,
				trackValues: true,
				slidesPerView: 'auto',
				slideToClickedSlide: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		})


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


}

export default { init, resize };
