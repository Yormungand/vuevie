(window.webpackJsonp=window.webpackJsonp||[]).push([[117,45,63],{530:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},536:function(t,e,n){"use strict";n(19),n(37),n(31),n(76);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},556:function(t,e,n){"use strict";n.r(e);n(19),n(37);var l=n(530),o=function(t,e){t.style.left=e},r=(n(74),function(time,t){setTimeout((function(){}),time)}),c=function(){function t(){window.scrollTo(0,0)}var e=!1,n=document.querySelector(".topnav.dark"),c=document.querySelector(".topnav.dark .logo img"),d=document.querySelector(".topnav .menu-icon"),v=document.querySelector(".topnav .menu-icon .text");d&&(d.addEventListener("click",(function(){e=!e,document.querySelector(".hamenu").classList.toggle("open"),e?(o(document.querySelector(".hamenu"),"0px"),v.classList.add("open"),n&&n.classList.add("navlit"),c&&c.setAttribute("src","/img/logo-light.png"),window.addEventListener("scroll",t)):(r(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),n&&n.classList.remove("navlit"),c&&c.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t))})),document.querySelectorAll(".main-menu a").forEach((function(e){e.addEventListener("click",(function(){r(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),n&&n.classList.remove("navlit"),c&&c.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t)}))}))),document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.addEventListener("mouseenter",(function(){this.style.opacity="1",Object(l.a)(this).forEach((function(t){t.style.opacity=".5"}))})),t.addEventListener("mouseleave",(function(){document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.style.opacity="1"}))}))})),document.querySelectorAll(".main-menu > li .dmenu").length&&document.querySelectorAll(".main-menu > li .dmenu").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.add("gosub"),Object(l.a)(this.parentNode.parentNode).forEach((function(t){t.childNodes[2]&&t.childNodes[2].classList.remove("sub-open")})),this.parentNode.parentNode.childNodes[2].classList.add("sub-open")}))})),document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length&&document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.remove("gosub"),document.querySelector(".main-menu").classList.remove("sub-open")}))}))},d={props:["theme"],mounted:function(){c()}},v=n(73),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:"topnav "+(t.theme&&"light"===t.theme?"light":""),attrs:{id:"navi"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"logo"},[n("NuxtLink",{attrs:{to:"#0"}},["light"===t.theme?n("img",{attrs:{src:"/img/logo-dark.png",alt:"logo"}}):n("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"hamenu"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9 col-md-8"},[n("div",{staticClass:"menu-links"},[n("ul",{staticClass:"main-menu"},[n("li",[t._m(1),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(2),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home1-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Main Home\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home2-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("Creative Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home5-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Digital Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home4-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Business One Page\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home3-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Corporate\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home6-dark"}},[n("span",{staticClass:"nm"},[t._v("06.")]),t._v("Modern Agency\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home7-dark"}},[n("span",{staticClass:"nm"},[t._v("07.")]),t._v("Freelancer\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home8-dark"}},[n("span",{staticClass:"nm"},[t._v("08.")]),t._v("Architecture\n                        ")])],1)])])])]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/about/about-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("About Us\n                  ")])],1)]),t._v(" "),n("li",[t._m(3),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(4),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase/showcase-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("ShowCase Parallax\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase3/showcase3-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("ShowCase Carousel\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase2/showcase2-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("ShowCase Circle\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works/works-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Portfolio Masonry\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works2/works2-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Portfolio Filtering\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works3/works3-dark"}},[n("span",{staticClass:"nm"},[t._v("06.")]),t._v("Portfolio Gallery\n                        ")])],1)])])])]),t._v(" "),n("li",[t._m(5),t._v(" "),n("div",{staticClass:"sub-menu"},[n("ul",[t._m(6),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog/blog-dark"}},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Blog Standerd\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-list/blog-list-dark"}},[n("span",{staticClass:"nm"},[t._v("02.")]),t._v("Blog List\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-grid/blog-grid-dark"}},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Blog Grid\n                        ")])],1)]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-details/blog-details-dark"}},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blog Details\n                        ")])],1)])])])]),t._v(" "),n("li",[n("div",{staticClass:"o-hidden"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/contact/contact-dark"}},[n("span",{staticClass:"nm"},[t._v("05.")]),t._v("Contact\n                  ")])],1)])])])]),t._v(" "),t._m(7)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-icon"},[n("span",{staticClass:"icon"},[n("i"),t._v(" "),n("i")]),t._v(" "),n("span",{staticClass:"text",attrs:{"data-splitting":""}},[n("span",{staticClass:"menu-text"},[t._v("Menu")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("01.")]),t._v("Home\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"sub-link back"},[n("i",{staticClass:"pe-7s-angle-left"}),t._v(" Go Back\n                        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("03.")]),t._v("Works\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"sub-link back"},[n("i",{staticClass:"pe-7s-angle-left"}),t._v(" Go Back\n                        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"link dmenu"},[n("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blogs\n                    "),n("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"o-hidden"},[n("span",{staticClass:"sub-link back"},[n("i",{staticClass:"pe-7s-angle-left"}),t._v(" Go Back\n                        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"cont-info"},[n("div",{staticClass:"item"},[n("h6",[t._v("Phone :")]),t._v(" "),n("p",[t._v("+03 762-2367-723")])]),t._v(" "),n("div",{staticClass:"item"},[n("h6",[t._v("Address :")]),t._v(" "),n("p",[t._v("541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io")])]),t._v(" "),n("div",{staticClass:"item"},[n("h6",[t._v("Email :")]),t._v(" "),n("p",[n("a",{attrs:{href:"#0"}},[t._v("Vie_website@gmail.com")])])])])])}],!1,null,"113f96cd",null);e.default=component.exports},588:function(t){t.exports=JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/3.jpg","sub":"Design"}]')},634:function(t,e,n){"use strict";n.r(e);n(74);var l=n(588),o=n(536),r={props:["sliderRef"],data:function(){return{showcasse1Data:l,swiperOptions:{speed:1e3,slidesPerView:1,mousewheel:!0,parallax:!0,navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{handleSwiperReadied:function(t){setTimeout((function(){for(var i=0;i<t.slides.length;i++)t.slides[i].childNodes[0].setAttribute("data-swiper-parallax",.75*t.width)}))}},mounted:function(){Object(o.a)()}},c=n(73),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:t.sliderRef,staticClass:"slider showcase-full"},[n("div",{staticClass:"swiper-container parallax-slider"},[n("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions},on:{ready:t.handleSwiperReadied}},t._l(t.showcasse1Data,(function(e){return n("swiper-slide",{key:e.id,staticClass:"swiper-slide"},[n("div",{staticClass:"bg-img valign",style:"background-image: url("+e.image+")",attrs:{"data-overlay-dark":"4"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"caption"},[n("h1",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[n("div",{staticClass:"stroke",attrs:{"data-swiper-parallax":"-2000"}},[t._v("\n                        "+t._s(e.title.first)+"\n                      ")]),t._v(" "),n("span",{attrs:{"data-swiper-parallax":"-5000"}},[t._v("\n                        "+t._s(e.title.second)+"\n                      ")])]),t._v(" "),n("div",{staticClass:"bord"})],1),t._v(" "),n("div",{staticClass:"discover"},[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[n("span",[t._v("\n                        Explore "),n("br"),t._v("\n                        More\n                      ")])])],1)])])])])])])})),1),t._v(" "),n("div",{staticClass:"txt-botm"},[n("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),n("div",{ref:"paginationRef",staticClass:"swiper-pagination dots"})])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Next Slide")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Prev Slide")])])}],!1,null,"487b3454",null);e.default=component.exports},685:function(t,e,n){"use strict";n.r(e);var l={layout:"dark",head:function(){return{titleTemplate:"%s - Showcase Dark"}}},o=n(73),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavbarFullMenu"),t._v(" "),n("ShowcasesFullScreen")],1)}),[],!1,null,"283ae448",null);e.default=component.exports;installComponents(component,{NavbarFullMenu:n(556).default,ShowcasesFullScreen:n(634).default})}}]);