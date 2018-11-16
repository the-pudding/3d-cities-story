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
				bearing:0,
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

	var viewportWidth = d3.select("#content").node().getBoundingClientRect().width;
	var viewportHeight = d3.select("#content").node().getBoundingClientRect().height;


	d3.select(".intro-image").append("img").attr("src",function(){
		return "https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/71.02,-1.29,2.64,0,60/"+Math.min(1280,viewportWidth)+"x"+Math.min(viewportHeight*.5,500)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
	})


		var widthChange = .90;
		var imageCount = 2
		if((viewportWidth*widthChange) < 1300){
			imageCount = 2;
		}
		var width = Math.min(Math.floor((viewportWidth*widthChange)/imageCount),450);
		var height = width;

		var imgWrapper = d3.select(".single-year-wrapper")
			.selectAll("div")
			.data(cityArray)
			.enter()
			.append("div")
			.attr("class","img-wrapper");



		var imgBoxWrapper = imgWrapper.append("div")
			.attr("class",function(d){
				return "swiper-container "+d.city_id
			})
			;

		var textColumn = imgWrapper
			.append("div")
			.attr("class","text-column");

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

		function getLink(data,zoomLevel,angle){
			console.log(angle);

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
			var mapStyle = "cjnugndzr4rkn2spbxk0cnps5"

			if(angle != "3D"){
				pitch = 0;
			}

			if(zoomLevel == "medium"){
				zoom = 4.6;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
				// pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}

			if(angle != "3D" && zoomLevel != "medium" && zoomLevel != "close"){
				pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}

			if(zoomLevel == "far"){
				zoom = 3.6;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
				//pathLink = "path-5+666-0.5+f44-0(knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH)/"
			}

			if(zoomLevel == "super-far"){
				zoom = 2.6;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
				pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}

			if(angle != "3D" && zoomLevel != "close"){
				pitch = 0;
				mapStyle = "cjo7b0rly2am02sqoz0b4zs0y"
				pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}

			if(angle != "3D" && zoomLevel == "close"){
				mapStyle = "cjo7bhuwn056i2srxhhqjer8v"
			}



			//var mapStyle = "cjnel8krq2ltq2spteciqe2x3"
			var imageLink = "https://api.mapbox.com/styles/v1/dock4242/"+mapStyle+"/static/"+pathLink+lng+","+lat+","+zoom+","+bearing+","+pitch+"/"+width+"x"+height+"@2x?access_token="+token;
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

		var slideData = ["close","medium","far","super-far"];

		var swiperSlides = swiperWrapper.selectAll("div")
			.data(slideData)
			.enter()
			.append("div")
			.attr("class","swiper-slide")
			.style("width",width+"px")
			.style("height",height+"px")

		var swiperBorderDiv = swiperSlides
			.append("div")
			.attr("class","border-div");

		var mask = swiperSlides
			.append("div")
			.attr("class","mask-div");

		swiperBorderDiv
			.style("width",function(d,i){
				if(i==0){
					return width+"px"
				}
				if(i==1){
					return 85+"px"
				}
				return "40px"
			})
			.style("height",function(d,i){
				if(i==0){
					return height-40+"px"
				}
				if(i==1){
					return 85+"px"
				}
				return "40px"
			})
			;

		var swiperImages = swiperSlides
			.append("img")
			.style("width",width+"px")
			.style("height",height+"px")
			.attr("src",function(d){
				return getLink(d3.select(this.parentNode.parentNode).datum(),d,"3D");
			})
			;

		var fraction = imgBoxWrapper
			.append("p")
			.attr("class","fraction")
			.text("1/"+Math.ceil(slideData.length-1))

		var toggle = imgBoxWrapper
			.append("div")
			.attr("class","city-toggles")
			.selectAll("div")
			.data(["3D","overhead"])
			.enter()
			.append("div")
			.attr("class","city-toggle")
			.classed("city-toggle-active",function(d,i){
				console.log(i);
				if(i==0){
					return true;
				}
				return false;
			})
			.on("click",function(d){
				var optionClicked = d;
				var data = d3.select(this.parentNode).datum();
				updateImages(optionClicked,data)
				d3.select(this.parentNode).selectAll(".city-toggle").classed("city-toggle-active",false)
				d3.select(this).classed("city-toggle-active",true);
			})

		toggle
			.append("p")
			.attr("class","city-toggle-text")
			.html(function(d){
				return d;
			})
			;

			// var swiperOne = new Swiper(".hong_kong", {
			// 	spaceBetween: 22,
			// 	// slidesPerGroup: 1,
			// 	slidesPerView: imageCount,
			// 	grabCursor: true,
			// 	// centeredSlides: true,
			//
			// 	// trackValues: true,
			// 	// freeMode: true,
			//
			// 	slidesPerView: 'auto',
			// 	slideToClickedSlide: true,
			// 	pagination: {
			// 		el: d3.select(".hong_kong").select(".swiper-pagination").node(),
			// 		clickable: true,
			// 	},
			// });
			//
			// var swiperTwo = new Swiper(".lagos", {
			// 	spaceBetween: 22,
			// 	// slidesPerGroup: 1,
			// 	slidesPerView: imageCount,
			// 	grabCursor: true,
			// 	// centeredSlides: true,
			//
			// 	// trackValues: true,
			// 	// freeMode: true,
			//
			// 	slidesPerView: 'auto',
			// 	slideToClickedSlide: true,
			// 	pagination: {
			// 		el: d3.select(".lagos").select(".swiper-pagination").node(),
			// 		clickable: true,
			// 	},
			// });


		imgBoxWrapper.each(function(d,i,j){
			var elem = d3.select(this);
			d.swiper = new Swiper("."+d.city_id, {
				spaceBetween: 22,
				// slidesPerGroup: 1,
				slidesPerView: imageCount,
				grabCursor: true,
				// centeredSlides: true,

				// trackValues: true,
				// freeMode: true,

				slidesPerView: 'auto',
				slideToClickedSlide: true,
				pagination: {
					el: d3.select("."+d.city_id).select(".swiper-pagination").node(),
					clickable: true,
				},
			});

			d.swiper.on('slideChange', function() {
			 	elem.select(".fraction").text((d.swiper.activeIndex+1)+"/"+Math.ceil(slideData.length-1))
			});

		})

	d3.json("assets/data/world.json",function(world){
		var width = 70,
    height = 70;

		var radius = height / 2 - 5,
		  scale = radius,
		  velocity = .02;

		var globeWrapper = swiperSlides
			.filter(function(d,i){
				console.log(i);
				return i == 0;
			})
			.append("div")
			.attr("width",width+"px")
			.attr("height",height+"px")
			.attr("class","globe-wrapper")

		var svg = '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 -256 1792 1792" id="svg3025" version="1.1" inkscape:version="0.48.3.1 r9886" width="100%" height="100%"> <g transform="matrix(1,0,0,-1,364.47458,1270.2373)"> <path d="m 768,896 q 0,106 -75,181 -75,75 -181,75 -106,0 -181,-75 -75,-75 -75,-181 0,-106 75,-181 75,-75 181,-75 106,0 181,75 75,75 75,181 z m 256,0 q 0,-109 -33,-179 L 627,-57 q -16,-33 -47.5,-52 -31.5,-19 -67.5,-19 -36,0 -67.5,19 Q 413,-90 398,-57 L 33,717 Q 0,787 0,896 q 0,212 150,362 150,150 362,150 212,0 362,-150 150,-150 150,-362 z" id="path3029" inkscape:connector-curvature="0" /> </g> </svg>'

		globeWrapper.append("div")
			.attr("class","globe-wrapper-svg-container")
			.html(svg)

		var canvas = globeWrapper
			.append("canvas")
		  .attr("width", width)
		  .attr("height", height)
			.each(function(d){

				var d = d3.select(this.parentNode.parentNode.parentNode).datum();
				var projection = d3.geoOrthographic()
					.translate([width / 2, height / 2])
					.scale(scale)
					.rotate([-d.location.center[0],-d.location.center[1]])
					.clipAngle(90);

				var markerProjection = projection([d.location.center[0],d.location.center[1]])

				d3.select(this.parentNode).select(".globe-wrapper-svg-container")
					.style("transform","translate("+markerProjection[0]+"px,"+markerProjection[1]+"px)");

				var context = d3.select(this).node().getContext("2d");

				var path = d3.geoPath()
					.projection(projection)
					.context(context)
					;

				var land = topojson.feature(world, world.objects.land);

				context.clearRect(0, 0, width, height);

				context.beginPath();
				context.arc(width / 2, height / 2, radius - 2, 0, 2 * Math.PI, true);
				// context.lineWidth = 1;
				// context.fillStyle = "#002930"

				// context.stroke();
				context.fillStyle = "#263138"
				context.fill();

				context.beginPath();
				path(land);
				context.fillStyle = "#fff"
				context.fill();
			})
			;


		//



	})


}

export default { init, resize };
