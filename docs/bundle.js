!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=13)}({0:function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},13:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i.n(n),o={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.android()||o.blackberry()||o.ios()||o.opera()||o.windows()}},r=o,s=window.location.hostname.indexOf("localhost")>-1,c={};var l={send:function(e){var t=e.category,i=e.action,n=e.once;(function(e){var t=e.category,i=e.action;if(e.once){var n=t.toString().replace(/\W+/g,""),a=i.toString().replace(/\W+/g,""),o="".concat(n).concat(a);return!c[o]&&(c[o]=!0,!0)}return!0})({category:t,action:i,once:n})&&(s?console.log({category:t,action:i,once:n}):window.ga&&ga("send",{hitType:"event",eventCategory:t.toString(),eventAction:i.toString()}))}};function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d={init:function(){console.time("start");var e=new ScrollMagic.Controller;function t(){console.log("ADDING STORY IMAGES"),d3.select(".intro-image").append("img").attr("src",function(){return o<600?"https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/95,12,2.64,0,50/"+Math.min(1280,o)+"x"+Math.min(Math.floor(r*s),600)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ":"https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/71.02,-1.29,2.64,0,60/"+Math.min(1280,o)+"x"+Math.min(Math.floor(r*s),600)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"}),d3.select(".intro-image").append("img").attr("src",function(){return o<600?"https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/-97.677,12,2.64,0,50/"+Math.min(1280,o)+"x"+Math.min(Math.floor(r*s),600)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ":"https://api.mapbox.com/styles/v1/dock4242/cjo5tayip0w952rpski8ml7w0/static/-26.55,-10.28,2.64,0,60/"+Math.min(1280,o)+"x"+Math.min(Math.floor(r*s),600)+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"}),d3.select(".intro-image-two").append("div").append("img").attr("src",function(){return"https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/-117.91,33.55,6,-0.67,60/"+Math.floor(Math.min(1280,o/c-20))+"x"+Math.floor(Math.min(r*s,600))+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"}).style("width",Math.floor(Math.min(1280,o/c-30))+"px").style("height",Math.floor(Math.min(r*s,600))+"px"),d3.select(".intro-image-two").append("div").append("img").attr("src",function(){return"https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/107.81,-6.76,6,0,47/"+Math.floor(Math.min(1280,o/c-20))+"x"+Math.floor(Math.min(r*s,600))+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ"}).style("width",Math.floor(Math.min(1280,o/c-30))+"px").style("height",Math.floor(Math.min(r*s,600))+"px")}d3.select(".header").select(".header-sub").selectAll("a").on("click",function(){l.send({category:"top-header-link-click",action:"click",once:!0})}),function(){var i=[-74.331,41.261],n=d3.select(".loading-overlay"),a=n.select(".percent"),r=0,s=50;function c(){a.transition().duration(s).on("end",function(e){r+=1,d3.select(this).text(r+"%")})}mapboxgl.accessToken="pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ";var l=new mapboxgl.Map({container:"map",style:"mapbox://styles/dock4242/cjnugndzr4rkn2spbxk0cnps5?optimize=true",center:[i[0],i[1]],zoom:6,pitch:0,bearing:0,interactive:!1});l.scrollZoom.disable();var p=!1;l.on("data",function(e){e.hasOwnProperty("tile")&&!p&&(p=!0,console.timeEnd("fallback"),clearTimeout(d),n.transition().duration(1e3).style("opacity",0).on("end",function(e){d3.select(this).remove()}),d3.select(".map-not-loaded").select("p").text("This is a story about how to perceive the population size of cities."),d3.select("body").classed("map-hidden",!1))}),l.on("render",function(e){c()}),l.on("dataloading",function(e){c()}),l.on("styledataloading",function(e){c()}),l.on("sourcedataloading",function(e){c()}),l.on("load",function(e){t(),l.setLayoutProperty("place-city-large","visibility","visible")}),console.time("fallback"),console.timeEnd("start");var d=setTimeout(function(){console.timeEnd("fallback"),console.log("falling back"),d3.select("body").classed("map-hidden",!1),n.transition().duration(1e3).style("opacity",0).on("end",function(e){d3.select(this).remove()}),l.remove(),d3.select(".scroll").classed("image-only",!0),d3.selectAll(".step").append("div").attr("class","fallback-image").append("img").attr("src",function(e,t){var n=d3.select(this.parentNode.parentNode).node().getBoundingClientRect().height;return 0==t?"https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/"+i[0]+","+i[1]+",6,0,0/"+Math.floor(Math.min(1280,o))+"x"+n+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ":1==t?"https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/"+i[0]+","+i[1]+",6,0,60/"+Math.floor(Math.min(1280,o))+"x"+n+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ":2==t?"https://api.mapbox.com/styles/v1/dock4242/cjoojxw063ksk2spglbhik1g8/static/"+i[0]+","+i[1]+",6,-65.6,60/"+Math.floor(Math.min(1280,o))+"x"+n+"@2x?access_token=pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ":void 0}),g.removePin(!0),g.remove(),m.remove(),f.remove(),t()},15e3),h=0,u=0,g=new ScrollMagic.Scene({triggerElement:"#fixed-map",duration:d3.select(".scroll__text").node().getBoundingClientRect().height-Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2,offset:0,triggerHook:0}).setPin("#fixed-map",{pushfollowers:!1}).addTo(e),m=new ScrollMagic.Scene({triggerElement:"#tilt-shift-step",duration:d3.select("#tilt-shift-step").node().getBoundingClientRect().height,offset:0,triggerHook:.5}).on("progress",function(e){var t=e.progress;(t=Math.round(50*t)/50)!=h&&(h=t,l.jumpTo({pitch:60*h,bearing:0}))}).addTo(e),f=new ScrollMagic.Scene({triggerElement:"#rotate-step",duration:d3.select("#rotate-step").node().getBoundingClientRect().height,offset:0,triggerHook:.5}).on("progress",function(e){var t=e.progress;(t=Math.round(50*t)/50)!=u&&(u=t,l.jumpTo({bearing:-65.6*u,pitch:60}))}).addTo(e)}();var i="pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ",n=!0,a=7,o=d3.select("#content").node().getBoundingClientRect().width,r=Math.max(document.documentElement.clientHeight,window.innerHeight||0);!function(){var e=d3.select(".legend");e.append("p").attr("class","legend-title").text("Population / 1,000 sq. meters");var t=d3.format(","),i=e.selectAll("div").data([[1,"#fbeee0"],[250,"#f3ba7c"],[1500,"#f32020"],[5e3,"#830707"],[1e4,"#4b0707"]]).enter().append("div").attr("class","legend-box");i.append("div").attr("class","legend-color").style("background-color",function(e){return e[1]}),i.append("p").attr("class","legend-name").text(function(e){return t(4*e[0])})}();var s=.65,c=2;o<600&&(s=.75,c=1);var d=.9,h=2;o*d<1300&&(h=2);var u=Math.min(Math.floor(o*d/h),450);o<500&&(u=Math.floor(o*d)-50),o<400&&(d=1,u=Math.floor(o*d)-20);var g=u,m=d3.select(".single-year-wrapper").selectAll("div").data([{city_name:"Paris",city_id:"paris",population:"10.9 million People",city_text:"",location:{center:[2.228,48.88],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:-19.59,pitch:60}},{city_name:"London",city_id:"london",population:"9 million People",city_text:"",location:{center:[-.23,51.43],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:-19.59,pitch:60}},{city_name:"Singapore",city_id:"singapore",population:"5.7 million People",city_text:'Note how different these cities are in shape. Paris and London are the largest peaks in their respective areas, with a slow descent surrounding them, denoting suburbanization.<br><br>Singapore is considered one of the most “planned” cities in the world, and in its background lies Kuala Lumpur, which is 2 million people larger and has experienced immense, uncontained growth over the past decade.<br><br>Let’s now contrast this with Kinshasa and other major cities in Africa.<br><br><span class="title-break">African Cities</span>',location:{center:[103.838,1.411],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:8.63,bearing:-38.48,pitch:60}},{city_name:"Kinshasa",city_id:"kinshasa",population:"13.1 million People",city_text:'<span>KINSHASA, DRC (13.1M people)&mdash;</span> Since 2001, Kinshasa has grown from the 38th to 23rd largest city in the world. One of the biggest challenges facing this city is transportation: <a href="https://capx.co/africa-is-urbanising-without-globalising/">getting to Kinshasa is difficult</a>, and you can see this in the population data. Figuratively, Kinshasa is a stand-alone mountain, surrounded by few settlements (compare this to a similar city, such as Paris, where the surrounding city is heavily suburbanized).',location:{center:[15.31,-4.36],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:0,pitch:60}},{city_name:"Luanda",city_id:"luanda",population:"7.7 million People",city_text:'<span>LUANDA, ANGOLA (7.7M people)&mdash;</span> The city is one of the <a href="https://www.economist.com/baobab/2011/02/08/eye-wateringly-expensive">most expensive in the world for expats</a> and will grow to 12.1 million by 2030 (Angola has the third-highest fertility rate in the world: 6.16 children born/woman).',location:{center:[13.36,-8.705],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:-21.6,pitch:60}},{city_name:"Lagos",city_id:"lagos",population:"13 million People",city_text:'<span>LAGOS, NIGERIA (13M people)&mdash;</span> Compared to Kinshasa and Luanda, Lagos is surrounded by cities and development (Nigeria is the most-populous country in Africa). The city is predicted to be the <a href="https://journals.sagepub.com/doi/abs/10.1177/0956247816663557">largest in the world by 2100</a> (estimated to reach of over 100M people).',location:{center:[3.172,6.719],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:0,pitch:60}},{city_name:"Dar es Salaam",city_id:"dar_es_salaam",population:"6 million People",city_text:'<span>DAR ES SALAAM, TANZANIA (6M people)&mdash;</span> The city has the highest projected growth rates in Africa from 2015 - 2030 and will be 10 million people by 2030. 20 years ago, the city was just 2 million in size.<br><br>Let’s now turn to Asia, where rapid urbanization in India and China are changing the distribution of the world’s population centers.<br><br><span class="title-break">Asian Cities</span>',location:{center:[39.14,-6.845],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:-21.6,pitch:60}},{city_name:"Bangalore",city_id:"bangalore",population:"11.4 million People",city_text:'<span>BANGALORE, INDIA (11.4M people)&mdash;</span> It reached megacity status in the 2010s (over 10M people), led by its burgeoning tech sector (aka the “Silicon Valley of India.”) The population density of India is easier to see in the above images, with Bangalore surrounded by incredibly dense urban settlements. The mostly unplanned growth has come at a cost, as <a href="https://www.theguardian.com/cities/2018/mar/19/urban-explosion-kinshasa-el-alto-growth-mexico-city-bangalore-lagos">covered by The Guardian</a>, “The situation is very worrying. People are moving out. Illnesses are increasing. At this rate every house will need a dialysis machine...Bangalore cannot continue like this. It is becoming an unliveable city. This is the worst city in the world for unchecked urbanisation.”<br><br>In China, In China, the scale of population is on another level. Imagine all of the 10 million-person cities we’ve covered, except now they are all adjacent to one another. It’s a concept called “mega-regions,” and China is creating lots of them.',location:{center:[77.511,13.109],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:-23.18,pitch:60}},{city_name:"Pearl River Delta",city_id:"hong_kong",population:"50-100 million People",city_text:'<span>PEARL RIVER DELTA, CHINA (50M - 100M people)&mdash;</span> This is actually three cities: Hong Kong (7.4M people), Shenzhen (11.9M), Guangzhou (12.6M). Rapid growth has linked all the surrounding cities with contiguous urban density. It’s formed a mega-region that’s roughly <a href="https://www.theguardian.com/cities/2017/may/05/megaregions-endless-china-urbanisation-sprawl-xiongan-jingjinji">the size of the UK in population</a> and akin to the US’s northeast corridor (Boston, NYC, Philadelphia, Baltimore, and DC) merging into one enormous city.',location:{center:[113.570587,22.78],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:0,pitch:60}},{city_name:"Chongqing",city_id:"chongqing",population:"14.8 million People",city_text:'<span>CHONGQING, CHINA (14.8M people)&mdash;</span>It’s now the 14th largest city in the world, and for many its size is a surprise. <a href="https://www.citylab.com/design/2015/03/inside-chinas-unknown-mega-city/389000/" >CityLab called it</a> “China’s Unknown Mega-City,” “the biggest city you’ve never heard of,” and “China’s Detroit.” It sits a 5 hour drive from another emerging megacity, Chengdu (8.8M people), and it’s part of the Chenyu mega-region, which is over three times the size of the Pearl River Delta, or roughly the size of Austria (<a href="https://qz.com/201012/chinas-mega-cities-are-combining-into-even-larger-mega-regions-and-theyre-doing-it-all-wrong/" >Quartz</a>).',location:{center:[106.5479,29.570338],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:0,pitch:60}},{city_name:"Tianjin",city_id:"tianjin",population:"13.2 million People",city_text:'<span>TIANJIN, CHINA (13.2M people)&mdash;</span>Tianjin sits 70 miles southeast of Beijing and the Chinese government is <a href="https://www.theguardian.com/world/2017/apr/04/china-plans-build-new-city-nearly-three-times-the-size-of-new-york">planning a new nearby city</a>, Xiongan, to complete the <a href="https://en.wikipedia.org/wiki/Jingjinji">Jing-Jin-Ji mega-region</a>, which will be <a href="https://qz.com/198337/chinas-new-megalopolis-would-be-bigger-than-uruguay-and-more-populous-than-germany"/>one big one huge megalopolis</a> with over 100 million people.',location:{center:[117.077225,39.337146],pathString:"knxnCswrnT}qVaj~FveoI{fsDpvfAjuoH",zoom:7.13,bearing:0,pitch:60}}]).enter().append("div").attr("class","img-wrapper"),f=m.append("div").attr("class",function(e){return"swiper-container "+e.city_id});function y(e,t,o){var r=e.location,s=r.bearing,c=r.pitch,l=r.center[1],p=r.center[0],d=r.zoom;r.pathString,n&&(d=a);var h="cjo5jr9510nfb2sp0ixdls6fw";return"3D"!=o&&(c=0),"medium"==t&&(d=6,h="cjoojxw063ksk2spglbhik1g8"),"medium-two"==t&&(d=5.1,h="cjoojxw063ksk2spglbhik1g8"),"medium-far"==t&&(d=4.2,h="cjo5tayip0w952rpski8ml7w0"),"super-far"==t&&(d=3,h="cjo5tayip0w952rpski8ml7w0"),"3D"!=o&&"close"!=t&&(c=0,h="cjo7b0rly2am02sqoz0b4zs0y"),"3D"!=o&&"close"==t&&(h="cjo7bhuwn056i2srxhhqjer8v"),"https://api.mapbox.com/styles/v1/dock4242/"+h+"/static/"+p+","+l+","+d+","+s+","+c+"/"+u+"x"+g+"@2x?access_token="+i}m.append("div").attr("class","text-column").append("p").attr("class","city-desc").html(function(e){return e.city_text});var b=f.append("div").attr("class","swiper-wrapper"),w=(f.append("div").attr("class","swiper-pagination"),["close","medium","medium-two","medium-far","super-far"]),v=b.selectAll("div").data(w).enter().append("div").attr("class","swiper-slide").style("width",u+"px").style("height",g+"px"),x=(v.filter(function(e,t){return 0==t}).append("p").attr("class","city-title").html(function(e,t){return d3.select(this.parentNode.parentNode).datum().city_id,d3.select(this.parentNode.parentNode).datum().city_name+"<span>"+d3.select(this.parentNode.parentNode).datum().population+"</span>"}),v.filter(function(e,t){return"hong_kong"==d3.select(this.parentNode.parentNode).datum().city_id&&0==t}).append("div").attr("class","overlay-div").html('<svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg"> <defs> <marker id="head" orient="auto" markerWidth="6" markerHeight="8" refX="0" refY="4"> <path d="M0,0 V8 L4,4 Z" fill="black" /> </marker> </defs> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Atlas Grotesk" font-size="16" font-weight="bold" letter-spacing="0em"> <tspan x="315.281" y="318.992">Hong Kong</tspan> </text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Atlas Grotesk" font-size="16" font-weight="bold" letter-spacing="0em"> <tspan x="176.023" y="342.992">Shenzhen</tspan> </text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Atlas Grotesk" font-size="16" font-weight="bold" letter-spacing="0em"> <tspan x="35.0156" y="367.992">Guangzhou</tspan> </text> <path marker-end="url(#head)" d="M217 319C218.167 289 247.6 226 296 250" stroke="black" stroke-width="3"/> <path marker-end="url(#head)" d="M77.5002 345.5C65.8335 306.5 65.8002 216.7 159 169.5" stroke="black" stroke-width="3"/> </svg>'),v.append("div").attr("class","border-div"));v.append("div").attr("class","mask-div"),x.style("width",function(e,t){return 0==t?u+"px":1==t?"100px":2==t?"50px":3==t?"30px":"20px"}).style("height",function(e,t){return 0==t?g-40+"px":1==t?"100px":2==t?"50px":3==t?"30px":"20px"});var k=!1;f.append("p").attr("class","fraction").text("1/"+Math.ceil(w.length)),f.append("div").attr("class","city-toggles").selectAll("div").data(["3D","overhead"]).enter().append("div").attr("class","city-toggle").classed("city-toggle-active",function(e,t){return 0==t}).on("click",function(e){!function(e,t){var i=t.city_id;f.filter(function(e,t){return e.city_id==i}).selectAll(".swiper-slide").select("img").attr("src",function(e){return""}),f.filter(function(e,t){return e.city_id==i}).selectAll(".swiper-slide").select("img").attr("src",function(t){return y(d3.select(this.parentNode.parentNode).datum(),t,e)})}(e,d3.select(this.parentNode).datum()),d3.select(this.parentNode).selectAll(".city-toggle").classed("city-toggle-active",!1),d3.select(this).classed("city-toggle-active",!0)}).append("p").attr("class","city-toggle-text").html(function(e){return e}),f.each(function(e,t,i){var n,a=d3.select(this);e.swiper=new Swiper("."+e.city_id,(p(n={spaceBetween:22,slidesPerView:h,grabCursor:!0,freeMode:!0,mousewheel:{invert:!0,forceToAxis:!0}},"slidesPerView","auto"),p(n,"slideToClickedSlide",!0),p(n,"pagination",{el:d3.select("."+e.city_id).select(".swiper-pagination").node(),clickable:!0}),p(n,"breakpoints",{920:{slidesPerView:2},500:{slidesPerView:1}}),n)),e.swiper.on("slideChange",function(){a.select(".fraction").text(e.swiper.activeIndex+1+"/"+Math.ceil(w.length))}),e.swiper.on("click",function(t){0==e.swiper.activeIndex&&0==e.swiper.clickedIndex&&e.swiper.slideTo(1)})}),d3.json("assets/data/world.json",function(e){var t=v.filter(function(e,t){return 0==t}).append("div").attr("width","70px").attr("height","70px").attr("class","globe-wrapper");t.append("div").attr("class","globe-wrapper-svg-container").html('<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 -256 1792 1792" id="svg3025" version="1.1" inkscape:version="0.48.3.1 r9886" width="100%" height="100%"> <g transform="matrix(1,0,0,-1,364.47458,1270.2373)"> <path d="m 768,896 q 0,106 -75,181 -75,75 -181,75 -106,0 -181,-75 -75,-75 -75,-181 0,-106 75,-181 75,-75 181,-75 106,0 181,75 75,75 75,181 z m 256,0 q 0,-109 -33,-179 L 627,-57 q -16,-33 -47.5,-52 -31.5,-19 -67.5,-19 -36,0 -67.5,19 Q 413,-90 398,-57 L 33,717 Q 0,787 0,896 q 0,212 150,362 150,150 362,150 212,0 362,-150 150,-150 150,-362 z" id="path3029" inkscape:connector-curvature="0" /> </g> </svg>');var i=0;window.devicePixelRatio&&(i=window.devicePixelRatio),t.append("canvas").attr("width",70*i).attr("height",70*i).style("width","70px").style("height","70px").each(function(t){t=d3.select(this.parentNode.parentNode.parentNode).datum();var n=d3.geoOrthographic().translate([35,35]).scale(30).rotate([-t.location.center[0],-t.location.center[1]]).clipAngle(90),a=n([t.location.center[0],t.location.center[1]]);d3.select(this.parentNode).select(".globe-wrapper-svg-container").style("transform","translate("+a[0]+"px,"+a[1]+"px)");var o=d3.select(this).node().getContext("2d");o.scale(i,i);var r=d3.geoPath().projection(n).context(o),s=topojson.feature(e,e.objects.land);o.clearRect(0,0,70,70),o.beginPath(),o.arc(35,35,28,0,2*Math.PI,!0),o.fillStyle="#263138",o.fill(),o.beginPath(),r(s),o.fillStyle="#fff",o.fill()})}),new ScrollMagic.Scene({triggerElement:"#lazy-trigger",duration:100,offset:0,triggerHook:.5}).on("enter",function(e){k||(k=!0,v.append("img").style("width",u+"px").style("height",g+"px").attr("src",function(e){return y(d3.select(this.parentNode.parentNode).datum(),e,"3D")}))}).addTo(e)},resize:function(){}},h=d3.select("body"),u=0;function g(){var e=h.node().offsetWidth;u!==e&&(u=e,d.resize())}h.classed("is-mobile",r.any()),window.addEventListener("resize",a()(g,150)),function(){if(h.select("header").classed("is-sticky")){var e=h.select(".header__menu"),t=h.select(".header__toggle");t.on("click",function(){var i=e.classed("is-visible");e.classed("is-visible",!i),t.classed("is-visible",!i)})}}(),d.init()},2:function(e,t,i){(function(t){var i="Expected a function",n=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,h=p||d||Function("return this")(),u=Object.prototype.toString,g=Math.max,m=Math.min,f=function(){return h.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&u.call(e)==a}(e))return n;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=s.test(e);return i||c.test(e)?l(e.slice(2),i?2:8):r.test(e)?n:+e}e.exports=function(e,t,n){var a,o,r,s,c,l,p=0,d=!1,h=!1,u=!0;if("function"!=typeof e)throw new TypeError(i);function w(t){var i=a,n=o;return a=o=void 0,p=t,s=e.apply(n,i)}function v(e){var i=e-l;return void 0===l||i>=t||i<0||h&&e-p>=r}function x(){var e=f();if(v(e))return k(e);c=setTimeout(x,function(e){var i=t-(e-l);return h?m(i,r-(e-p)):i}(e))}function k(e){return c=void 0,u&&a?w(e):(a=o=void 0,s)}function j(){var e=f(),i=v(e);if(a=arguments,o=this,l=e,i){if(void 0===c)return function(e){return p=e,c=setTimeout(x,t),d?w(e):s}(l);if(h)return c=setTimeout(x,t),w(l)}return void 0===c&&(c=setTimeout(x,t)),s}return t=b(t)||0,y(n)&&(d=!!n.leading,r=(h="maxWait"in n)?g(b(n.maxWait)||0,t):r,u="trailing"in n?!!n.trailing:u),j.cancel=function(){void 0!==c&&clearTimeout(c),p=0,a=l=o=c=void 0},j.flush=function(){return void 0===c?s:k(f())},j}}).call(this,i(0))}});