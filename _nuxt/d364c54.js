(window.webpackJsonp=window.webpackJsonp||[]).push([[122,45,64],{530:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},532:function(t,e,n){"use strict";var l=n(14),o=n(3),r=n(4),c=n(110),d=n(21),v=n(15),m=n(213),f=n(38),_=n(109),h=n(212),C=n(5),k=n(75).f,y=n(32).f,w=n(20).f,E=n(533),L=n(534).trim,N="Number",x=o.Number,S=x.prototype,A=o.TypeError,I=r("".slice),P=r("".charCodeAt),$=function(t){var e=h(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,l,o,r,c,d,code,v=h(t,"number");if(_(v))throw A("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=L(v),43===(e=P(v,0))||45===e){if(88===(n=P(v,2))||120===n)return NaN}else if(48===e){switch(P(v,1)){case 66:case 98:l=2,o=49;break;case 79:case 111:l=8,o=55;break;default:return+v}for(c=(r=I(v,2)).length,d=0;d<c;d++)if((code=P(r,d))<48||code>o)return NaN;return parseInt(r,l)}return+v};if(c(N,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var M,O=function(t){var e=arguments.length<1?0:x($(t)),n=this;return f(S,n)&&C((function(){E(n)}))?m(Object(e),n,O):e},j=l?k(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;j.length>V;V++)v(x,M=j[V])&&!v(O,M)&&w(O,M,y(x,M));O.prototype=S,S.constructor=O,d(o,N,O)}},533:function(t,e,n){var l=n(4);t.exports=l(1..valueOf)},534:function(t,e,n){var l=n(4),o=n(25),r=n(16),c=n(535),d=l("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),_=function(t){return function(e){var n=r(o(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},535:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},536:function(t,e,n){"use strict";n(19),n(37),n(31),n(76);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},543:function(t,e,n){"use strict";n(19),n(37),n(74),n(532);var l=0;function o(t,time){setInterval(function(t){(l=Number(window.getComputedStyle(t).getPropertyValue("opacity")))<1?(l+=1,t.style.opacity=l):clearInterval(0)}(t),time)}function r(t,time){setInterval(function(t){(l=Number(window.getComputedStyle(t).getPropertyValue("opacity")))>0?(l=0,t.style.opacity=l):clearInterval(0)}(t),time)}e.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach((function(e){t=document.querySelector(".div-tooltip-tit"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-tit")})),e.addEventListener("mousemove",(function(e){o(t,800),t.style.top=e.pageY+10+"px",t.style.left=e.pageX+20+"px",t.style.padding="0px 10px"})),e.addEventListener("mouseleave",(function(){r(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){e=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){o(e,800),e.style.top=t.pageY-15+"px",e.style.left=t.pageX+30+"px",e.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){r(e,800),e.style.padding=0}))}))}},556:function(t,e,n){"use strict";n.r(e);n(19),n(37);var l=n(530),o=function(t,e){t.style.left=e},r=(n(74),function(time,t){setTimeout((function(){}),time)}),c=function(){function t(){window.scrollTo(0,0)}var e=!1,n=document.querySelector(".topnav.dark"),c=document.querySelector(".topnav.dark .logo img"),d=document.querySelector(".topnav .menu-icon"),v=document.querySelector(".topnav .menu-icon .text");d&&(d.addEventListener("click",(function(){e=!e,document.querySelector(".hamenu").classList.toggle("open"),e?(o(document.querySelector(".hamenu"),"0px"),v.classList.add("open"),n&&n.classList.add("navlit"),c&&c.setAttribute("src","/img/logo-light.png"),window.addEventListener("scroll",t)):(r(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),n&&n.classList.remove("navlit"),c&&c.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t))})),document.querySelectorAll(".main-menu a").forEach((function(e){e.addEventListener("click",(function(){r(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),n&&n.classList.remove("navlit"),c&&c.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t)}))}))),document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.addEventListener("mouseenter",(function(){this.style.opacity="1",Object(l.a)(this).forEach((function(t){t.style.opacity=".5"}))})),t.addEventListener("mouseleave",(function(){document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.style.opacity="1"}))}))})),document.querySelectorAll(".main-menu > li .dmenu").length&&document.querySelectorAll(".main-menu > li .dmenu").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.add("gosub"),Object(l.a)(this.parentNode.parentNode).forEach((function(t){t.childNodes[2]&&t.childNodes[2].classList.remove("sub-open")})),this.parentNode.parentNode.childNodes[2].classList.add("sub-open")}))})),document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length&&document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.remove("gosub"),document.querySelector(".main-menu").classList.remove("sub-open")}))}))},d={props:["theme"],mounted:function(){c()}},v=n(73),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:"topnav "+(t.theme&&"light"===t.theme?"light":""),attrs:{id:"navi"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"logo"},[n("NuxtLink",{attrs:{to:"#0"}},["light"===t.theme?n("img",{attrs:{src:"/img/logo-dark.png",alt:"logo"}}):n("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"hamenu"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9 col-md-8"},[n("div",{staticClass:"menu-links"},[n("ul",{staticClass:"main-menu"},[n("li",[t._m(1),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(2),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home1-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Main Home\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home2-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("Creative Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home5-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Digital Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home4-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Business One Page\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home3-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Corporate\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home6-dark"}},[n("span",{staticClass:"nm"},[t._v("06.")]),t._v("Modern Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home7-dark"}},[n("span",{staticClass:"nm"},[t._v("07.")]),t._v("Freelancer\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home8-dark"}},[n("span",{staticClass:"nm"},[t._v("08.")]),t._v("Architecture\n                        ")])],1)])])])]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/about/about-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("About Us\n                  ")])],1)]),t._v(" "),n("li",[t._m(3),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(4),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase/showcase-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("ShowCase Parallax\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase3/showcase3-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("ShowCase Carousel\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase2/showcase2-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("ShowCase Circle\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works/works-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Portfolio Masonry\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works2/works2-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Portfolio Filtering\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works3/works3-dark"}},[n("span",{staticClass:"nm"},[t._v("06.")]),t._v("Portfolio Gallery\n                        ")])],1)])])])]),t._v(" "),n("li",[t._m(5),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(6),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog/blog-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Blog Standerd\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-list/blog-list-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("Blog List\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-grid/blog-grid-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Blog Grid\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-details/blog-details-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blog Details\n                        ")])],1)])])])]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/contact/contact-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Contact\n                  ")])],1)])])])]),t._v(" "),t._m(7)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-icon"},[n("span",{staticClass:"icon"},[n("i"),t._v(" "),n("i")]),t._v(" "),n("span",{staticClass:"text",attrs:{"data-splitting":""}},[n("span",{staticClass:"menu-text"},[t._v("Menu")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Home\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"sub-link back"},[n("i",{staticClass:"pe-7s-angle-left"}),t._v(" Go Back\n                        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Works\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"sub-link back"},[n("i",{staticClass:"pe-7s-angle-left"}),t._v(" Go Back\n                        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blogs\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"sub-link back"},[n("i",{staticClass:"pe-7s-angle-left"}),t._v(" Go Back\n                        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"cont-info"},[n("div",{staticClass:"item"},[n("h6",[t._v("Phone :")]),t._v(" "),n("p",[t._v("+03 762-2367-723")])]),t._v(" "),n("div",{staticClass:"item"},[n("h6",[t._v("Address :")]),t._v(" "),n("p",[t._v("541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io")])]),t._v(" "),n("div",{staticClass:"item"},[n("h6",[t._v("Email :")]),t._v(" "),n("p",[n("a",{attrs:{href:"#0"}},[t._v("Vie_website@gmail.com")])])])])])}],!1,null,"113f96cd",null);e.default=component.exports},562:function(t){t.exports=JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]')},636:function(t,e,n){"use strict";n.r(e);var l=n(562),o=n(536),r=n(543),c={props:["sliderRef"],data:function(){return{fullScreenData:l,swiperOptions:{slidesPerView:4,speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){Object(r.a)(),Object(o.a)()}},d=n(73),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:t.sliderRef,staticClass:"slider showcase-grid"},[n("div",{attrs:{id:"content-carousel-container-unq-1"}},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.fullScreenData,(function(t){return n("swiper-slide",{key:t.id,staticClass:"swiper-slide"},[n("div",{staticClass:"nbo-link"},[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[n("div",{staticClass:"bg-img",style:"background-image: url("+t.image+")",attrs:{"data-tooltip-tit":t.title.first+" "+t.title.second,"data-tooltip-sub":t.sub}})])],1)])})),1),t._v(" "),n("div",{staticClass:"txt-botm"},[n("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),n("div",{ref:"paginationRef",staticClass:"swiper-pagination dots"})])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Next Slide")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Prev Slide")])])}],!1,null,"5c528eb1",null);e.default=component.exports},690:function(t,e,n){"use strict";n.r(e);var l={layout:"light",head:function(){return{titleTemplate:"%s - Showcase 3 Light"}}},o=n(73),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavbarFullMenu",{attrs:{theme:"light"}}),t._v(" "),n("ShowcasesGrid")],1)}),[],!1,null,"013a344c",null);e.default=component.exports;installComponents(component,{NavbarFullMenu:n(556).default,ShowcasesGrid:n(636).default})}}]);