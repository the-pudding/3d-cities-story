
import Tracker from './utils/tracker';
// import TweenMax from 'gsap/src/minified/TweenMax.min';
// import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
// import TimelineMax from 'gsap/src/minified/TimelineMax.min';

function resize() {}

function init() {

	console.time("start")

	var controller = new ScrollMagic.Controller();

	function addStoryImages(){
		console.log("ADDING STORY IMAGES");
		d3.select(".intro-image").append("img").attr("src",function(){
			if(viewportWidth < 600){
				return "https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/95,12,2.64,0,50/"+Math.min(1280,viewportWidth)+"x"+Math.min(Math.floor(viewportHeight*viewportHeightAdjust),500)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
			}
			return "https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/71.02,-1.29,2.64,0,60/"+Math.min(1280,viewportWidth)+"x"+Math.min(Math.floor(viewportHeight*viewportHeightAdjust),500)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
		})

		d3.select(".intro-image").append("img").attr("src",function(){
			if(viewportWidth < 600){
				return "https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/-97.677,12,2.64,0,50/"+Math.min(1280,viewportWidth)+"x"+Math.min(Math.floor(viewportHeight*viewportHeightAdjust),500)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
			}
			return "https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/-26.55,-10.28,2.64,0,60/"+Math.min(1280,viewportWidth)+"x"+Math.min(Math.floor(viewportHeight*viewportHeightAdjust),500)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"

		})

		d3.select(".intro-image-two")
			.append("div")
			.append("img").attr("src",function(){
				return "https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/35.28,31.9,6,-8,60/"+Math.floor(Math.min(1280,(viewportWidth/countPerRow)))+"x"+Math.floor(Math.min(viewportHeight*viewportHeightAdjust,500))+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
			})

		d3.select(".intro-image-two")
			.append("div")
			.append("img").attr("src",function(){
				return "https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/126.79,37.38,6,-12.7,36.5/"+Math.floor(Math.min(1280,(viewportWidth/countPerRow)))+"x"+Math.floor(Math.min(viewportHeight*viewportHeightAdjust,500))+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
			})

		d3.select(".intro-image-two")
			.append("div")
			.append("img").attr("src",function(){
				return "https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/-117.91,33.55,6,-0.67,60/"+Math.floor(Math.min(1280,(viewportWidth/countPerRow)))+"x"+Math.floor(Math.min(viewportHeight*viewportHeightAdjust,500))+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
			})

		d3.select(".intro-image-two")
			.append("div")
			.append("img").attr("src",function(){
				return "https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/107.81,-6.76,6,0,47/"+Math.floor(Math.min(1280,(viewportWidth/countPerRow)))+"x"+Math.floor(Math.min(viewportHeight*viewportHeightAdjust,500))+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
			})

	}

	function setupInteractiveMap(){

		var startCoords = [-74.331,41.261];

		var loadingOverlay = d3.select(".loading-overlay");
		var percent = loadingOverlay.select(".percent");
		var percentCount = 0;
		var duration = 50;

		function increment(){
			percent.transition().duration(duration).on("end",function(d){
				percentCount = percentCount + 1;
				d3.select(this).text(percentCount+"%")
				// if(percentCount == 31 || percentCount == 12 || percentCount == 38 || percentCount == 21 || percentCount == 66 || percentCount == 88){
				// 	duration = 750
				// }
				// else {
				// 	duration = 50;
				// }
				// if(percentCount < 100){
				// 	increment();
				// }
			})
		}

		// increment();

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

		var tileCount = false;
		var keyFound = false;

		map.on("data",function(d){
			console.log(d);
			console.log("data");
			if(d.hasOwnProperty('tile') && !keyFound){
				keyFound = true;
				console.timeEnd("fallback")
				clearTimeout(fallBack);

				loadingOverlay.transition().duration(1000).style("opacity",0).on("end",function(d){
					d3.select(this).remove();
				})
				d3.select(".map-not-loaded").select("p").text("This is a story about how to perceive the population size of cities.");
				d3.select("body").classed("map-hidden",false);

			}
		})

		//
		// map.on("styledata",function(d){
		// 	console.log("style data");
		// })
		//
		// map.on("sourcedata",function(d){
		// 	console.log("source data");
		// })
		map.on("render",function(d){
			console.log(d);
			console.log("render");
			increment();
		})

		map.on("dataloading",function(d){
			console.log("data loading");
			increment();
		})


		map.on("styledataloading",function(d){
			console.log("styledataloading");
			increment();
		})

		map.on("sourcedataloading",function(d){
			console.log("sourcedataloading");
			increment();
		})
		//
		map.on("load",function(d){
			console.log("map loaded");

			addStoryImages();
			map.setLayoutProperty("place-city-large", 'visibility', 'visible');

		})

		console.time("fallback")
		console.timeEnd("start")

		var fallBack = setTimeout(function(){
			console.timeEnd("fallback")
			console.log("falling back");
			d3.select("body").classed("map-hidden",false);
			loadingOverlay.transition().duration(1000).style("opacity",0).on("end",function(d){
				d3.select(this).remove();
			})
			map.remove();
			d3.select(".scroll").classed("image-only",true);
			d3.selectAll(".step").append("div").attr("class","fallback-image")
				.append("img").attr("src",function(d,i){

					var divHeight = d3.select(this.parentNode.parentNode).node().getBoundingClientRect().height;
					if(i==0){
						return "https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/"+startCoords[0]+","+startCoords[1]+",6,0,0/"+Math.floor(Math.min(1280,(viewportWidth)))+"x"+divHeight+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
					}
					else if(i==1){
						return "https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/"+startCoords[0]+","+startCoords[1]+",6,0,60/"+Math.floor(Math.min(1280,(viewportWidth)))+"x"+divHeight+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
					}
					else if(i==2){
						return "https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/"+startCoords[0]+","+startCoords[1]+",6,-65.6,60/"+Math.floor(Math.min(1280,(viewportWidth)))+"x"+divHeight+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
					}
				});

			pinScene.removePin(true);
			pinScene.remove();
			tiltShiftStep.remove();
			rotateStep.remove();
			addStoryImages();

		},500);

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

	d3.select(".header").select(".header-sub").selectAll("a").on("click",function(){
		Tracker.send({ category: 'top-header-link-click', action: 'click', once: true });
	})



	setupInteractiveMap();

	var style_1975 = "cjnn7622h02ph2smpyw7dhq4y";
	var style_1990 = "cjnl0k08b88ai2slsjxzk0jii";
	var style_2015 = "cjnel8krq2ltq2spteciqe2x3";

	var token = "pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"
	var globalZoom = true;
	var globalZoomAmount = 7;

	var cityArray = [
		{
			city_name:"Paris",
			city_id:"paris",
			population:"10.9 million People",
			city_text:"",
			location:{
				center:[2.228,48.88],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-19.59,
				pitch:60
			}
		}
		,
		{
			city_name:"London",
			city_id:"london",
			population:"9 million People",
			city_text:"",
			location:{
				center:[-.23,51.43],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-19.59,
				pitch:60
			}
		},
		{
			city_name:"Singapore",
			city_id:"singapore",
			population:"5.7 million People",
			city_text:'Note how different these cities are in shape. Paris and London are the largest peaks in their respective areas, with a slow descent surrounding them, denoting suburbanization.<br><br>Singapore is considered one of the most “planned” cities in the world, and in its background lies Kuala Lumpur, which is 2 million people larger and has experienced immense, uncontained growth over the past decade.<br><br>Let’s now contrast this with Kinshasa and other major cities in Africa.<br><br><span class="title-break">African Megacities (future and present)</span>',
			location:{
				center:[103.838,1.411],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:8.63,
				bearing:-38.48,
				pitch:60
			}
		},
		{
			city_name:"Kinshasa",
			city_id:"kinshasa",
			population:"13.1 million People",
			city_text:'<span>KINSHASA, DRC (13.1M people)&mdash;</span> Since 2001, Kinshasa has grown from the 38th to 23rd largest city in the world. One of the biggest challenges facing this city is transportation: <a href="https://capx.co/africa-is-urbanising-without-globalising/">getting to Kinshasa is difficult</a>, and you can see this in the population data. Kinshasa is a mountain surrounded by few settlements (compare this to a similar city, such as Paris, where the surrounding city is heavily suburbanized).',
			location:{
				center:[15.31,-4.36],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		},
		{
			city_name:"Luanda",
			city_id:"luanda",
			population:"7.7 million People",
			city_text:'<span>LUANDA, ANGOLA (7.7M people)&mdash;</span> the city is one of the <a href="https://www.economist.com/baobab/2011/02/08/eye-wateringly-expensive">most expensive in the world for expats</a> and will grow to 12.1 million by 2030 (Angola has the third-highest fertility rate in the world: 6.16 children born/woman).',
			location:{
				center:[13.36,-8.705],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-21.6,
				pitch:60
			}
		},
		{
			city_name:"Lagos",
			city_id:"lagos",
			population:"13 million People",
			city_text:'<span>LAGOS, NIGERIA (13M people)&mdash;</span> Compared to Kinshasa and Luanda, Lagos is surrounded by cities and development (Nigeria is the most-populous country in Africa). The city is predicted to be the <a href="https://journals.sagepub.com/doi/abs/10.1177/0956247816663557">largest in the world by 2100</a> (estimates of over 100M people).',
			location:{
				center:[3.172,6.719],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		},
		{
			city_name:"Dar es Salaam",
			city_id:'dar_es_salaam',
			population:"6 million People",
			city_text:'<span>DAR ES SALAAM, TANZANIA (6M people)&mdash;</span> The city has the highest projected growth rates in Africa from 2015 - 2030. CityLab <a href="https://www.citylab.com/design/2015/02/the-bright-future-of-dar-es-salaam-an-unlikely-african-megacity/385801/">wrote a relatively positive outlook for the city in 2015</a>, noting the rapid sprawl and informal housing has been coupled with comparatively lower poverty rates and rapid improved public transportation.<br><br>Let’s now turn to Asia, where rapid urbanization in India and China are changing the distribution of the world’s population centers.<br><br><span class="title-break">Asian Megacities (future and present)</span>',
			location:{
				center:[39.14,-6.845],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-21.6,
				pitch:60
			}
		}
		,
		{
			city_name:"Bangalore",
			city_id:"bangalore",
			population:"11.4 million People",
			city_text:'<span>BANGALORE, INDIA (11.4M people)&mdash;</span> It reached megacity status in the 2010s (over 10M people), led by its burgeoning tech sector (aka the “Silicon Valley of India”). The population density of India is easier to see in the above images, with Bangalore surrounded by incredibly dense urban settlements. The mostly unplanned growth has come at a cost, as <a href="https://www.theguardian.com/cities/2018/mar/19/urban-explosion-kinshasa-el-alto-growth-mexico-city-bangalore-lagos">covered by The Guardian</a>, “The situation is very worrying. People are moving out. Illnesses are increasing. At this rate every house will need a dialysis machine...Bangalore cannot continue like this. It is becoming an unliveable city. This is the worst city in the world for unchecked urbanisation.”<br><br>In China, the landscape is different. Imagine all of the 10 million-person cities we’ve covered, except now they are all adjacent to one another. It’s a concept called “mega-regions,” and China is creating lots of them.',
			location:{
				center:[77.511,13.109],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:-23.18,
				pitch:60
			}
		},
		{
			city_name:"Pearl River Delta",
			city_id:"hong_kong",
			population:"50-100 million People",
			city_text:'<span>PEARL RIVER DELTA, CHINA (50M - 100M people)&mdash;</span> This is actually three cities: Hong Kong (7.4M people), Shenzhen (11.9M), Guangzhou (12.6M). Rapid growth has linked all the surrounding cities with contiguous urban density. It’s formed a mega-region that’s roughly <a href="https://www.theguardian.com/cities/2017/may/05/megaregions-endless-china-urbanisation-sprawl-xiongan-jingjinji">the size of the UK in population</a> and akin to the US’s northeast corridor (Boston, NYC, Philadelphia, Baltimore, and DC) merging into one enormous city.',
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
			city_name:"Chongqing",
			city_id:"chongqing",
			population:"14.8 million People",
			city_text:'<span>CHONGQING, CHINA (14.8M people)&mdash;</span>It’s now the 14th largest city in the world, and for many it’s size is a surprise. <a href="https://www.citylab.com/design/2015/03/inside-chinas-unknown-mega-city/389000/" >CityLab called it</a> “China’s Unknown Mega-City,” “the biggest city you’ve never heard of,” and “China’s Detroit.” It sits a 5 hour drive from another emerging megacity, Chengdu (8.8M people), and it’s part of the Chenyu mega-region, which is over three times the size of the Pearl River Delta, or roughly the size of Austria (<a href="https://qz.com/201012/chinas-mega-cities-are-combining-into-even-larger-mega-regions-and-theyre-doing-it-all-wrong/" >Quartz</a>).',
			location:{
				center:[106.547900,29.570338],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		},
		{
			city_name:"Tianjin",
			city_id:"tianjin",
			population:"13.2 million People",
			city_text:'<span>TIANJIN, CHINA (13.2M people)&mdash;</span> Tianjin sits 70 miles southeast of Beijing and the Chinese government is <a href="https://www.theguardian.com/world/2017/apr/04/china-plans-build-new-city-nearly-three-times-the-size-of-new-york">planning a new city</a>, Xiongan, to complete the <a href="https://en.wikipedia.org/wiki/Jingjinji">Jing-Jin-Ji mega-region</a>. Nevertheless, the Chinese government seems determined to double-down on Beijing, combining it with the city of Tianjin and parts of Hebei province into one huge megalopolis. https://qz.com/201012/chinas-mega-cities-are-combining-into-even-larger-mega-regions-and-theyre-doing-it-all-wrong/',
			location:{
				center:[117.077225,39.337146],
				pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
				zoom:7.13,
				bearing:0,
				pitch:60
			}
		}




		// {
		// 	city_name:"New York City",
		// 	city_id:"new_york_city",
		// 	population:"18.8M People",
		// 	city_text:"",
		// 	location:{
		// 		center:[-73.98,40.76],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:-33.19,
		// 		pitch:60
		// 	}
		// },

		// {
		// 	city_name:"Lahore",
		// 	city_id:"lahore",
		// 	city_text:"TBD",
		// 	location:{
		// 		center:[74.165629,31.511876],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:0,
		// 		pitch:60
		// 	}
		// }
		// ,
		// {
		// 	city_name:"Chengdu",
		// 	city_id:"chengdu",
		// 	city_text:"TBD",
		// 	location:{
		// 		center:[104.076330,30.989421],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:0,
		// 		pitch:60
		// 	}
		// }
		// ,
//		,
		// {
		// 	city_name:"Xi’an",
		// 	city_id:"xian",
		// 	city_text:"TBD",
		// 	location:{
		// 		center:[108.905231,34.280797],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:0,
		// 		pitch:60
		// 	}
		// }
		//,
		// {
		// 	city_name:"Kuala Lumpur",
		// 	city_id:"kuala_lumpur",
		// 	city_text:"TBD",
		// 	location:{
		// 		center:[-84.386,33.754],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:-16.8,
		// 		pitch:60
		// 	}
		// }


		// {
		// 	city_name:"New York City",
		// 	city_id:"new_york_city",
		// 	city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
		// 	location:{
		// 		center:[-73.98,40.76],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:-33.19,
		// 		pitch:60
		// 	}
		// },
		//,

		// {
		// 	city_name:"Karachi",
		// 	city_id:"kirachi",
		// 	city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
		// 	location:{
		// 		center:[67.065,24.95],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:73.21,
		// 		pitch:60
		// 	}
		// },

		// {
		// 	city_name:"Mexico City",
		// 	city_id:"mexico_city",
		// 	city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
		// 	location:{
		// 		center:[-99.120,19.319],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:7.13,
		// 		bearing:0.74,
		// 		pitch:60
		// 	}
		// },
		// {
		// 	city_name:"Singapore",
		// 	city_id:"singapore",
		// 	city_text:"The world’s population centers are a lot different than 25 years ago. In 1993, there were 14 cities over 10 million people. Today, there are 34, with many of these new “megacities” sprouting from farmland in our lifetimes.",
		// 	location:{
		// 		center:[103.838,1.411],
		// 		pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",
		// 		zoom:8.63,
		// 		bearing:-38.48,
		// 		pitch:60
		// 	}
		// }
	];

	var viewportWidth = d3.select("#content").node().getBoundingClientRect().width;
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


	function makeLegend(){
		var container = d3.select(".legend");
		var dataPoints = [[1,"#fbeee0"],[250,"#f3ba7c"],[1500,"#f32020"],[5000,"#830707"],[10000,"#4b0707"]];
		container.append("p").attr("class","legend-title").text("Population / 1,000 sq. meters")

		var commaFormat = d3.format(",");

		var legendBox = container.selectAll("div")
			.data(dataPoints)
			.enter()
			.append("div")
			.attr("class","legend-box")

			;

		legendBox.append("div")
			.attr("class","legend-color")
			.style("background-color",function(d){
				return d[1];
			})
			;

		legendBox.append("p")
			.attr("class","legend-name")
			.text(function(d){
				return commaFormat(d[0]*4);
			})
			;

	}

	makeLegend();




	var viewportHeightAdjust = .5;
	var countPerRow = 2;
	if(viewportWidth < 600){
		viewportHeightAdjust = .75
		countPerRow = 1;
	}


		var widthChange = .90;
		var imageCount = 2
		if((viewportWidth*widthChange) < 1300){
			imageCount = 2;
		}
		var width = Math.min(Math.floor((viewportWidth*widthChange)/imageCount),450);
		if(viewportWidth < 500){
			width = Math.floor(viewportWidth*widthChange)-50;
		}
		if(viewportWidth < 400){
			widthChange = 1;
			width = Math.floor(viewportWidth*widthChange)-20;
		}
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
			.attr("class","city-desc")
			.html(function(d){
				return d.city_text;
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
			var mapStyle = "cjo5jr9510nfb2sp0ixdls6fw"

			if(angle != "3D"){
				pitch = 0;
			}

			if(zoomLevel == "medium"){
				// zoom = 4.6;
				zoom = 6
				mapStyle = "cjoojxw063ksk2spglbhik1g8"
				//mapStyle = "cjo5tayip0w952rpski8ml7w0"
				// pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}
			if(zoomLevel == "medium-two"){
				// zoom = 4.6;
				zoom = 5.1
				mapStyle = "cjoojxw063ksk2spglbhik1g8"
				//mapStyle = "cjo5tayip0w952rpski8ml7w0"
				// pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}
			if(zoomLevel == "medium-far"){
				zoom = 4.2;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
				// pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}

			if(angle != "3D" && zoomLevel != "medium" && zoomLevel != "close"){
				// pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}

			// if(zoomLevel == "far"){
			// 	zoom = 3.2;
			// 	mapStyle = "cjo5tayip0w952rpski8ml7w0"
			// 	//pathLink = "path-5+666-0.5+f44-0(knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH)/"
			// }

			if(zoomLevel == "super-far"){
				zoom = 3;
				mapStyle = "cjo5tayip0w952rpski8ml7w0"
				// pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
			}

			if(angle != "3D" && zoomLevel != "close"){
				pitch = 0;
				mapStyle = "cjo7b0rly2am02sqoz0b4zs0y"
				// pathLink = "path-2+444-0.8+f44-0("+pathString+")/"
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
					return "";
				})
			;

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

		var slideData = ["close","medium","medium-two","medium-far","super-far"];

		var swiperSlides = swiperWrapper.selectAll("div")
			.data(slideData)
			.enter()
			.append("div")
			.attr("class","swiper-slide")
			.style("width",width+"px")
			.style("height",height+"px")

		var cityTitle = swiperSlides
			.filter(function(d,i){
				return i == 0;
			})
			.append("p")
			.attr("class","city-title")
			.html(function(d,i){
				var cityId = d3.select(this.parentNode.parentNode).datum().city_id;
				return d3.select(this.parentNode.parentNode).datum().city_name + "<span>"+d3.select(this.parentNode.parentNode).datum().population+"</span>";
			})

		var overlayDiv = swiperSlides
			.filter(function(d,i){
				return d3.select(this.parentNode.parentNode).datum().city_id == "hong_kong" && i == 0;
			})
			.append("div")
			.attr("class","overlay-div")
			.html('<svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg"> <defs> <marker id="head" orient="auto" markerWidth="6" markerHeight="8" refX="0" refY="4"> <path d="M0,0 V8 L4,4 Z" fill="black" /> </marker> </defs> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Atlas Grotesk" font-size="16" font-weight="bold" letter-spacing="0em"> <tspan x="315.281" y="318.992">Hong Kong</tspan> </text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Atlas Grotesk" font-size="16" font-weight="bold" letter-spacing="0em"> <tspan x="176.023" y="342.992">Shenzhen</tspan> </text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Atlas Grotesk" font-size="16" font-weight="bold" letter-spacing="0em"> <tspan x="35.0156" y="367.992">Guangzhou</tspan> </text> <path marker-end="url(#head)" d="M217 319C218.167 289 247.6 226 296 250" stroke="black" stroke-width="3"/> <path marker-end="url(#head)" d="M77.5002 345.5C65.8335 306.5 65.8002 216.7 159 169.5" stroke="black" stroke-width="3"/> </svg>')


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
					return 100+"px"
				}
				if(i==2){
					return 50+"px"
				}
				if(i==3){
					return 30+"px"
				}
				return "20px"
			})
			.style("height",function(d,i){
				if(i==0){
					return height-40+"px"
				}
				if(i==1){
					return 100+"px"
				}
				if(i==2){
					return 50+"px"
				}
				if(i==3){
					return 30+"px"
				}
				return "20px"
			})
			;

		var slideImagesbuild = false;

		function buildImages(){
			slideImagesbuild = true;

			var swiperImages = swiperSlides
				.append("img")
				.style("width",width+"px")
				.style("height",height+"px")
				.attr("src",function(d){
					return getLink(d3.select(this.parentNode.parentNode).datum(),d,"3D");
				})
				;
		}

		var fraction = imgBoxWrapper
			.append("p")
			.attr("class","fraction")
			.text("1/"+Math.ceil(slideData.length))

		var toggle = imgBoxWrapper
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

		imgBoxWrapper.each(function(d,i,j){
			var elem = d3.select(this);
			d.swiper = new Swiper("."+d.city_id, {
				spaceBetween: 22,
				// slidesPerGroup: 1,
				slidesPerView: imageCount,
				grabCursor: true,
				// centeredSlides: true,

				// trackValues: true,
				freeMode: true,
				// freeModeSticky: true,
				mousewheel: {
			    invert: true,
					forceToAxis:true,
					// releaseOnEdges:true,
					// sensitivity:1
			  },
				slidesPerView: 'auto',
				slideToClickedSlide: true,
				pagination: {
					el: d3.select("."+d.city_id).select(".swiper-pagination").node(),
					clickable: true,
				},
	      breakpoints: {
	        920: {
	          slidesPerView: 2
	        },
	        500: {
	          slidesPerView: 1
	        }
	      }
			});

			d.swiper.on('slideChange', function() {
			 	elem.select(".fraction").text((d.swiper.activeIndex+1)+"/"+Math.ceil(slideData.length))
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

		var scalingRatio = 0;
		if(window.devicePixelRatio){
			scalingRatio = window.devicePixelRatio;
		}

		var canvas = globeWrapper
			.append("canvas")
		  .attr("width", width*scalingRatio)
		  .attr("height", height*scalingRatio)
			.style("width", width+"px")
		  .style("height", height+"px")
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

				context.scale(scalingRatio, scalingRatio)


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

	var lazyLoadImages = new ScrollMagic.Scene({
			triggerElement:"#lazy-trigger",
			duration: 100,
			offset: 0,	// start this scene after scrolling for 50px
			triggerHook:.5
		})
		.on("enter", function (event) {
			if(!slideImagesbuild){
				console.log("building images");
				buildImages();
			}
		})
		.addTo(controller); // assign the scene to the controller


}

export default { init, resize };
