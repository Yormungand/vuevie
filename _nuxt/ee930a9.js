(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{538:function(t,e,l){"use strict";l(19),l(37);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var l=document.querySelectorAll(".gallery-mons");l.length>=1&&l.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var c=document.querySelector(".filtering");if(c){var o=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};c.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var l=e.target.getAttribute("data-filter");l=l,t.arrange({filter:l})}}));for(var d=document.querySelectorAll(".filtering"),i=0,n=d.length;i<n;i++){o(d[i])}}}},553:function(t,e,l){"use strict";e.a={particles:{number:{value:130,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"/img/github.svg",width:100,height:100}},opacity:{value:.2,random:!0,anim:{enable:!0,speed:1,opacity_min:.3,sync:!1}},size:{value:1.8,random:!0,anim:{enable:!1,speed:4,size_min:.4,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},645:function(t,e,l){},650:function(t,e,l){"use strict";l(645)},697:function(t,e,l){"use strict";l.r(e);l(74);var c=l(553),o=l(538),d={name:"demos",layout:"dark",head:function(){return{titleTemplate:"%s - Demos"}},data:function(){return{particlesOption:c.a}},mounted:function(){setTimeout((function(){Object(o.a)(),document.querySelector("#particles-js canvas")&&(document.querySelector("#particles-js canvas").style.position="unset")}),1e3)}},n=(l(650),l(73)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),l("header",{staticClass:"works-header particles valign bg-img parallaxie",style:{backgroundImage:"url(/demo-img/bg.png)",minHeight:"100vh",zIndex:"99999"},attrs:{"data-overlay-dark":"4"}},[l("Particles",{attrs:{id:"particles-js",options:t.particlesOption}}),t._v(" "),t._m(1)],1),t._v(" "),l("div",{staticClass:"main-content section-padding pb-0"},[l("section",{staticClass:"masonery section-padding"},[t._m(2),t._v(" "),l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},[l("div",{staticClass:"gallery full-width"},[l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home1-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/1.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Main Demo")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home1-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/01.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Main Demo")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home2-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/2.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Creative Agency")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home2-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/02.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Creative Agency")])])])],1)])]),t._v(" "),l("div",{staticClass:"gallery full-width"},[l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home7-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/n2.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Freelancer")]),t._v(" "),l("div",{staticClass:"sta new"},[l("span",[t._v("New Demo")])])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home7-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/n02.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Freelancer")]),t._v(" "),l("div",{staticClass:"sta new"},[l("span",[t._v("New Demo")])])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home8-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/n3.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Architecture")]),t._v(" "),l("div",{staticClass:"sta new"},[l("span",[t._v("New Demo")])])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home8-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/n03.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Architecture")]),t._v(" "),l("div",{staticClass:"sta new"},[l("span",[t._v("New Demo")])])])])],1)])]),t._v(" "),l("div",{staticClass:"gallery full-width"},[l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home5-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/3.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Digital Agency")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home5-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/03.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Digital Agency")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home4-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/4.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Business One Page")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home4-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/04.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Business One Page")])])])],1)])]),t._v(" "),l("div",{staticClass:"gallery full-width"},[l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home3-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/5.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Corporate Business")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home3-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/05.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Corporate Business")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home6-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/n1.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Modern Agency")]),t._v(" "),l("div",{staticClass:"sta new"},[l("span",[t._v("New Demo")])])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/homepage/home6-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/n01.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Modern Agency")]),t._v(" "),l("div",{staticClass:"sta new"},[l("span",[t._v("New Demo")])])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/about/about-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/about.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("About Us")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/about/about-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/about1.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("About Us")])])])],1)])]),t._v(" "),t._m(3)])])]),t._v(" "),l("section",{staticClass:"masonery section-padding position-re"},[t._m(4),t._v(" "),l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},[l("div",{staticClass:"gallery full-width"},[l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/showcase/showcase-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/s1.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Full Screen")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/showcase/showcase-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/s01.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Full Screen")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/showcase3/showcase3-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/s2.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Showcase Carousel")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/showcase3/showcase3-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/s02.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Showcase Carousel")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/showcase2/showcase2-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/s3.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Showcase Circle")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/showcase2/showcase2-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/s03.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Showcase Circle")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/works/works-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/w1.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Works 3 column")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/works/works-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/w01.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Works 3 column")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/works2/works2-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/w2.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Works Filtering")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/works2/works2-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/w02.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Works Filtering")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/works3/works3-dark"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/w3.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Works Gallery")])])])],1)]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("NuxtLink",{attrs:{target:"_blank",to:"/works3/works3-light"}},[l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/w03.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Works Gallery")])])])],1)])])])]),t._v(" "),l("div",{staticClass:"line top left"})]),t._v(" "),t._m(5),t._v(" "),l("section",{staticClass:"call-action section-padding bg-img",style:{backgroundImage:"url(/img/patrn.svg)"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[t._m(6),t._v(" "),l("div",{staticClass:"col-md-4 col-lg-3 valign"},[l("NuxtLink",{staticClass:"butn bord curve wow fadeInUp",attrs:{to:"#","data-wow-delay":".5s"}},[l("span",[t._v("Purchase Now")])])],1)])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"circle-bg"},[l("div",{staticClass:"circle-color fixed"},[l("div",{staticClass:"gradient-circle"}),t._v(" "),l("div",{staticClass:"gradient-circle two"})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-9 col-md-11 static"},[l("div",{staticClass:"capt mt-50"},[l("div",{staticClass:"bactxt custom-font valign"},[l("span",{staticClass:"full-width",staticStyle:{color:"transparent"}},[t._v(" vie ")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8 col-md-10"},[l("div",{staticClass:"sec-head text-center"},[l("h3",{staticClass:"color-font"},[t._v("16+ stunning unique home pages")]),t._v(" "),l("span",{staticClass:"tbg"},[l("b",[t._v("+")]),t._v("30 ")])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"gallery full-width"},[l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/c1.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Interior Demo")]),t._v(" "),l("div",{staticClass:"sta coming"},[l("span",[t._v("Coming Soon")])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/c2.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Mobile App")]),t._v(" "),l("div",{staticClass:"sta coming"},[l("span",[t._v("Coming Soon")])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/c3.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Restaurant")]),t._v(" "),l("div",{staticClass:"sta coming"},[l("span",[t._v("Coming Soon")])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 items"},[l("div",{staticClass:"item-img wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("span",{staticClass:"dot"}),t._v(" "),l("div",{staticClass:"img"},[l("img",{attrs:{src:"/demo-img/c4.png",alt:"image"}})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Multipurpose")]),t._v(" "),l("div",{staticClass:"sta coming"},[l("span",[t._v("Coming Soon")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8 col-md-10"},[l("div",{staticClass:"sec-head text-center"},[l("h3",{staticClass:"color-font"},[t._v("Showcases")])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"services bords lficon section-padding position-re"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8 col-md-10"},[l("div",{staticClass:"sec-head text-center"},[l("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Best Features")]),t._v(" "),l("h3",{staticClass:"wow color-font"},[t._v("\n                Creative Agency, Corporate and Portfolio Template\n              ")])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[l("div",{staticClass:"item-box"},[l("div",[l("span",{staticClass:"icon pe-7s-paint-bucket"})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("UI/UX Design")]),t._v(" "),l("p",[t._v("\n                  We provide the best design by following the latest trends.\n                ")])])])]),t._v(" "),l("div",{staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":".7s"}},[l("div",{staticClass:"item-box"},[l("div",[l("span",{staticClass:"icon pe-7s-phone"})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("Easily Customizable")]),t._v(" "),l("p",[t._v("Build and customize stunning pages in minutes.")])])])]),t._v(" "),l("div",{staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":".9s"}},[l("div",{staticClass:"item-box"},[l("div",[l("span",{staticClass:"icon pe-7s-display1"})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("One / Multi Page")]),t._v(" "),l("p",[t._v("Choose the layout style that fits your need.")])])])]),t._v(" "),l("div",{staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[l("div",{staticClass:"item-box"},[l("div",[l("span",{staticClass:"icon pe-7s-diskette"})]),t._v(" "),l("div",{staticClass:"cont"},[l("h6",[t._v("24/7 Support")]),t._v(" "),l("p",[t._v("We commit to keep your site up-to-date.")])])])])])]),t._v(" "),l("div",{staticClass:"line top right"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-8 col-lg-9"},[l("div",{staticClass:"content sm-mb30"},[l("h6",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("\n                Purchase The Vie\n              ")]),t._v(" "),l("h2",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("\n                and Make "),l("br"),t._v(" "),l("b",{staticClass:"back-color"},[t._v("Your Life Easier")]),t._v(".\n              ")])])])}],!1,null,"430c363b",null);e.default=component.exports}}]);