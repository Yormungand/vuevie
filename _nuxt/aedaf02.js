(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{532:function(t,e,n){"use strict";var r=n(14),o=n(3),l=n(4),c=n(110),d=n(21),f=n(15),v=n(213),m=n(38),w=n(109),y=n(212),E=n(5),h=n(75).f,_=n(32).f,x=n(20).f,N=n(533),S=n(534).trim,I="Number",C=o.Number,A=C.prototype,L=o.TypeError,P=l("".slice),T=l("".charCodeAt),k=function(t){var e=y(t,"number");return"bigint"==typeof e?e:V(e)},V=function(t){var e,n,r,o,l,c,d,code,f=y(t,"number");if(w(f))throw L("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=S(f),43===(e=T(f,0))||45===e){if(88===(n=T(f,2))||120===n)return NaN}else if(48===e){switch(T(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=P(f,2)).length,d=0;d<c;d++)if((code=T(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(I,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var j,O=function(t){var e=arguments.length<1?0:C(k(t)),n=this;return m(A,n)&&E((function(){N(n)}))?v(Object(e),n,O):e},R=r?h(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;R.length>M;M++)f(C,j=R[M])&&!f(O,j)&&x(O,j,_(C,j));O.prototype=A,A.constructor=O,d(o,I,O)}},533:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},534:function(t,e,n){var r=n(4),o=n(25),l=n(16),c=n(535),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),w=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:w(1),end:w(2),trim:w(3)}},535:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},536:function(t,e,n){"use strict";n(19),n(37),n(31),n(76);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},543:function(t,e,n){"use strict";n(19),n(37),n(74),n(532);var r=0;function o(t,time){setInterval(function(t){(r=Number(window.getComputedStyle(t).getPropertyValue("opacity")))<1?(r+=1,t.style.opacity=r):clearInterval(0)}(t),time)}function l(t,time){setInterval(function(t){(r=Number(window.getComputedStyle(t).getPropertyValue("opacity")))>0?(r=0,t.style.opacity=r):clearInterval(0)}(t),time)}e.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach((function(e){t=document.querySelector(".div-tooltip-tit"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-tit")})),e.addEventListener("mousemove",(function(e){o(t,800),t.style.top=e.pageY+10+"px",t.style.left=e.pageX+20+"px",t.style.padding="0px 10px"})),e.addEventListener("mouseleave",(function(){l(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){e=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){o(e,800),e.style.top=t.pageY-15+"px",e.style.left=t.pageX+30+"px",e.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){l(e,800),e.style.padding=0}))}))}},562:function(t){t.exports=JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]')},636:function(t,e,n){"use strict";n.r(e);var r=n(562),o=n(536),l=n(543),c={props:["sliderRef"],data:function(){return{fullScreenData:r,swiperOptions:{slidesPerView:4,speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){Object(l.a)(),Object(o.a)()}},d=n(73),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:t.sliderRef,staticClass:"slider showcase-grid"},[n("div",{attrs:{id:"content-carousel-container-unq-1"}},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.fullScreenData,(function(t){return n("swiper-slide",{key:t.id,staticClass:"swiper-slide"},[n("div",{staticClass:"nbo-link"},[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[n("div",{staticClass:"bg-img",style:"background-image: url("+t.image+")",attrs:{"data-tooltip-tit":t.title.first+" "+t.title.second,"data-tooltip-sub":t.sub}})])],1)])})),1),t._v(" "),n("div",{staticClass:"txt-botm"},[n("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),n("div",{ref:"paginationRef",staticClass:"swiper-pagination dots"})])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Next Slide")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Prev Slide")])])}],!1,null,"5c528eb1",null);e.default=component.exports}}]);