!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}({0:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},13:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),o={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.android()||o.blackberry()||o.ios()||o.opera()||o.windows()}},c=o;var a={init:function(){var e=[-74.331,41.261];mapboxgl.accessToken="pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ";var t=new mapboxgl.Map({container:"map",style:"mapbox://styles/dock4242/cjnugndzr4rkn2spbxk0cnps5?optimize=true",center:[e[0],e[1]],zoom:6,pitch:0,bearing:0,interactive:!1});t.scrollZoom.disable(),t.on("load",function(e){}),t.on("click",function(e){t.flyTo({pitch:60})});var n=new ScrollMagic.Controller,r=0,i=0;new ScrollMagic.Scene({triggerElement:"#fixed-map",duration:d3.select(".scroll__text").node().getBoundingClientRect().height,offset:0,triggerHook:0}).addIndicators({name:"hi there"}).setPin("#fixed-map",{pushfollowers:!1}).addTo(n),new ScrollMagic.Scene({triggerElement:"#tilt-shift-step",duration:d3.select("#tilt-shift-step").node().getBoundingClientRect().height,offset:0,triggerHook:.5}).on("progress",function(e){var n=e.progress;(n=Math.round(30*n)/30)!=r&&(r=n,t.jumpTo({pitch:60*r}))}).addTo(n),new ScrollMagic.Scene({triggerElement:"#rotate-step",duration:d3.select("#rotate-step").node().getBoundingClientRect().height,offset:0,triggerHook:.5}).on("progress",function(e){var n=e.progress;(n=Math.round(30*n)/30)!=i&&(i=n,t.jumpTo({bearing:-65.6*i}))}).addTo(n)},resize:function(){}},u=d3.select("body"),s=0;function f(){var e=u.node().offsetWidth;s!==e&&(s=e,a.resize())}u.classed("is-mobile",c.any()),window.addEventListener("resize",i()(f,150)),function(){if(u.select("header").classed("is-sticky")){var e=u.select(".header__menu"),t=u.select(".header__toggle");t.on("click",function(){var n=e.classed("is-visible");e.classed("is-visible",!n),t.classed("is-visible",!n)})}}(),a.init()},2:function(e,t,n){(function(t){var n="Expected a function",r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=f||l||Function("return this")(),p=Object.prototype.toString,g=Math.max,v=Math.min,b=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==i}(e))return r;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?s(e.slice(2),n?2:8):c.test(e)?r:+e}e.exports=function(e,t,r){var i,o,c,a,u,s,f=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function h(t){var n=i,r=o;return i=o=void 0,f=t,a=e.apply(r,n)}function j(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-f>=c}function w(){var e=b();if(j(e))return x(e);u=setTimeout(w,function(e){var n=t-(e-s);return d?v(n,c-(e-f)):n}(e))}function x(e){return u=void 0,p&&i?h(e):(i=o=void 0,a)}function M(){var e=b(),n=j(e);if(i=arguments,o=this,s=e,n){if(void 0===u)return function(e){return f=e,u=setTimeout(w,t),l?h(e):a}(s);if(d)return u=setTimeout(w,t),h(s)}return void 0===u&&(u=setTimeout(w,t)),a}return t=m(t)||0,y(r)&&(l=!!r.leading,c=(d="maxWait"in r)?g(m(r.maxWait)||0,t):c,p="trailing"in r?!!r.trailing:p),M.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=s=o=u=void 0},M.flush=function(){return void 0===u?a:x(b())},M}}).call(this,n(0))}});