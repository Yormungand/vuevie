(window.webpackJsonp=window.webpackJsonp||[]).push([[0,25,41,43,46,50,51,52,53,54],{529:function(t,e,n){"use strict";n.r(e);var o={props:["hideBGCOLOR"]},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{class:t.hideBGCOLOR?"":"sub-bg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),n("ul",[n("li",[n("div",{staticClass:"img"},[n("NuxtLink",{attrs:{to:"#"}},[n("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),n("div",{staticClass:"sm-post"},[n("NuxtLink",{attrs:{to:"#"}},[n("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),n("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),n("li",[n("div",{staticClass:"img"},[n("NuxtLink",{attrs:{to:"#"}},[n("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),n("div",{staticClass:"sm-post"},[n("NuxtLink",{attrs:{to:"#"}},[n("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),n("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item"},[t._m(3),t._v(" "),n("div",{staticClass:"social"},[n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),n("div",{staticClass:"copy-right"},[n("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),n("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[t._v("Contact Us")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Officeal Address")]),t._v(" "),n("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),n("li",[n("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Email Us")]),t._v(" "),n("p",[t._v("support@gmail.com")])])]),t._v(" "),n("li",[n("span",{staticClass:"icon pe-7s-call"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Call Us")]),t._v(" "),n("p",[t._v("+87986451666")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h5",[t._v("Recent News")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"subscribe"},[n("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),t._v(" "),n("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);e.default=component.exports;installComponents(component,{Footer:n(529).default})},530:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},531:function(t,e,n){"use strict";n.r(e);n(47),n(48),n(19);var o=n(530),r={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(o.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},l=n(73),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?n("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,n("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[n("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),n("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[n("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),n("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[n("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),n("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon-bar"},[e("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);e.default=component.exports},532:function(t,e,n){"use strict";var o=n(14),r=n(3),l=n(4),c=n(110),d=n(21),v=n(15),m=n(213),f=n(38),_=n(109),h=n(212),C=n(5),k=n(75).f,w=n(32).f,x=n(20).f,N=n(533),y=n(534).trim,j="Number",L=r.Number,I=L.prototype,E=r.TypeError,O=l("".slice),D=l("".charCodeAt),S=function(t){var e=h(t,"number");return"bigint"==typeof e?e:V(e)},V=function(t){var e,n,o,r,l,c,d,code,v=h(t,"number");if(_(v))throw E("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=y(v),43===(e=D(v,0))||45===e){if(88===(n=D(v,2))||120===n)return NaN}else if(48===e){switch(D(v,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+v}for(c=(l=O(v,2)).length,d=0;d<c;d++)if((code=D(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+v};if(c(j,!L(" 0o1")||!L("0b1")||L("+0x1"))){for(var B,$=function(t){var e=arguments.length<1?0:L(S(t)),n=this;return f(I,n)&&C((function(){N(n)}))?m(Object(e),n,$):e},A=o?k(L):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;A.length>M;M++)v(L,B=A[M])&&!v($,B)&&x($,B,w(L,B));$.prototype=I,I.constructor=$,d(r,j,$)}},533:function(t,e,n){var o=n(4);t.exports=o(1..valueOf)},534:function(t,e,n){var o=n(4),r=n(25),l=n(16),c=n(535),d=o("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),_=function(t){return function(e){var n=l(r(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},535:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},537:function(t,e,n){},539:function(t,e,n){"use strict";n(537)},540:function(t,e,n){"use strict";n.r(e);n(532),n(31),n(214);var o={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&null!==t[n]&&(e+=n+"="+t[n]+"&");return e.substr(0,e.length-1)},getYoutubeUrl:function(t,e){return"//www.youtube.com/embed/"+e+"?"+this.getQueryString(t)},getVimeoUrl:function(t,e){return"//player.vimeo.com/video/"+e+"?"+this.getQueryString(t)},getPadding:function(t){var e=t.split(":"),n=Number(e[0]);return 100*Number(e[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(t){var e=this;this.$nextTick((function(){void 0!==e.$refs.closeBtn&&e.$refs.closeBtn.focus()}))},deep:!0}}},r=(n(539),n(73)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isOpen?n("div",[n("div",{class:t.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":t.aria.openMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("update:isOpen",!1)}}},[n("div",{class:t.classNames.modalVideoBody},[n("button",{ref:"closeBtn",class:t.classNames.modalVideoCloseBtn,attrs:{"aria-label":t.aria.dismissBtnMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)}}}),t._v(" "),n("div",{class:t.classNames.modalVideoInner},[n("div",{class:t.classNames.modalVideoIframeWrap,style:{"padding-bottom":t.paddingBottom}},[n("iframe",{attrs:{src:t.fullVideoUrl,frameBorder:"0",allowFullScreen:t.allowFullScreen,tabIndex:"-1"}})])])])])]):t._e()}),[],!1,null,"fb8a83f8",null);e.default=component.exports},638:function(t,e,n){"use strict";n.r(e);var o={props:["projectHeaderData"]},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-header proj-det bg-img parallaxie valign",style:"background-image: url("+t.projectHeaderData.projectHeaderImage+")",attrs:{"data-overlay-dark":"4"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7 col-md-9"},[n("div",{staticClass:"cont"},[n("h6",[t._v(t._s(t.projectHeaderData.title.small))]),t._v(" "),n("h2",[t._v(t._s(t.projectHeaderData.title.big))])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"item mt-30"},[n("h6",[t._v("Client")]),t._v(" "),n("p",[n("NuxtLink",{attrs:{to:t.projectHeaderData.clientURLLink}},[t._v("\n              "+t._s(t.projectHeaderData.clientURLName)+"\n            ")])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"item mt-30"},[n("h6",[t._v("Date")]),t._v(" "),n("p",[t._v(t._s(t.projectHeaderData.date))])])]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"item mt-30"},[n("h6",[t._v("Categories")]),t._v(" "),n("p",t._l(t.projectHeaderData.categories,(function(e,o){return n("NuxtLink",{key:e.id,attrs:{to:e.link}},[t._v("\n              "+t._s(e.name)+"\n              "+t._s(t.projectHeaderData.categories.length!=o+1?" ,":"")+"\n            ")])})),1)])]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"item mt-30"},[n("h6",[t._v("Tags")]),t._v(" "),n("p",t._l(t.projectHeaderData.tags,(function(e,o){return n("NuxtLink",{key:e.id,attrs:{to:"tag.link"}},[t._v("\n              "+t._s(e.name)+"\n              "+t._s(t.projectHeaderData.tags.length!=o+1?" ,":"")+"\n            ")])})),1)])])])])])}),[],!1,null,"faa41f94",null);e.default=component.exports},639:function(t,e,n){"use strict";n.r(e);var o={props:["projectIntroductionData"]},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro-section section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[n("div",{staticClass:"text js-scroll__content"},[n("p",{staticClass:"extra-text"},[t._v("\n            "+t._s(t.projectIntroductionData.content)+"\n          ")]),t._v(" "),n("ul",{staticClass:"smp-list mt-30"},t._l(t.projectIntroductionData.spmList,(function(e){return n("li",{key:e.id},[t._v("\n              "+t._s(e.name)+"\n            ")])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"htit"},[n("h4",[n("span",[t._v("01 ")]),t._v(" Introduction")])])])}],!1,null,"aea13d04",null);e.default=component.exports},640:function(t,e,n){"use strict";n.r(e);var o={props:["projectGalleryData"]},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"projdtal"},[n("div",{staticClass:"popup-img"},[n("div",{staticClass:"row"},t._l(t.projectGalleryData,(function(e,o){return n("NuxtLink",{key:o,class:"col-md-"+(o+1===t.projectGalleryData.length?"12":"3")+" popimg",attrs:{to:"#0"}},[n("img",{attrs:{alt:"",src:e}})])})),1)])])}),[],!1,null,"5a5df6f0",null);e.default=component.exports},641:function(t,e,n){"use strict";n.r(e);var o={props:["projectDescriptionData"]},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro-section section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[n("div",{staticClass:"text js-scroll__content"},[n("p",{staticClass:"extra-text"},[t._v(t._s(t.projectDescriptionData.content))])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"htit"},[n("h4",[n("span",[t._v("02 ")]),t._v(" Description")])])])}],!1,null,"a930a848",null);e.default=component.exports},642:function(t,e,n){"use strict";n.r(e);var o={props:["projectVideoData"],data:function(){return{videoIsOpen:!1}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"video-wrapper section-padding bg-img parallaxie valign",style:"\n          background-image: url("+t.projectVideoData.projectHeaderImage+")",attrs:{"data-overlay-dark":"4"}},[n("div",{staticClass:"full-width text-center"},[n("ModalVideo",{attrs:{channel:t.videoChannel,videoId:t.videoId,isOpen:t.videoIsOpen},on:{"update:isOpen":function(e){t.videoIsOpen=e},"update:is-open":function(e){t.videoIsOpen=e}}}),t._v(" "),n("a",{staticClass:"vid",on:{click:t.openVideo}},[t._m(0)])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vid-butn"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-play"})])])}],!1,null,"27d4a85e",null);e.default=component.exports;installComponents(component,{ModalVideo:n(540).default})},643:function(t,e,n){"use strict";n.r(e);var o={},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"next-prog section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"box"},[n("div",{staticClass:"bg-img valign",staticStyle:{"background-image":"url(/img/portfolio/project2/6.jpg)"},attrs:{"data-overlay-dark":"4"}},[n("div",{staticClass:"caption ontop valign"},[n("div",{staticClass:"o-hidden full-width"},[n("h1",[n("NuxtLink",{attrs:{to:"#0"}},[n("div",{staticClass:"stroke"},[t._v("Natural plus modern.")])])],1)])]),t._v(" "),n("div",{staticClass:"copy-cap valign"},[n("div",{staticClass:"cap full-width"},[n("h1",[n("NuxtLink",{attrs:{to:"#0"}},[n("span",[t._v("Natural plus modern.")])])],1)])])])])])])])])}),[],!1,null,"9c586c9c",null);e.default=component.exports},644:function(t){t.exports=JSON.parse('{"id":1,"title":{"small":"art & illustration","big":"Inspiring new space."},"clientURLLink":"#","projectHeaderImage":"/img/portfolio/project2/bg.jpg","videoLink":"https://vimeo.com/127203262","clientURLName":"Envato.com","date":"6 August 2022","categories":[{"id":1,"name":"Web Design","link":"#"},{"id":2,"name":"WordPress","link":"#"}],"tags":[{"id":1,"name":"Minimal","link":"#"},{"id":2,"name":"Modern","link":"#"},{"id":3,"name":"Design","link":"#"}],"intro":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.","spmList":[{"id":1,"name":"Aenean sollicitudin"},{"id":2,"name":"lorem quis bibendum auctor"},{"id":31,"name":"nisi elit conseq uat ipsum"},{"id":4,"name":"nec sagittis sem nibh id elit"}]},"gallery":["/img/portfolio/project2/1.jpg","/img/portfolio/project2/2.jpg","/img/portfolio/project2/3.jpg","/img/portfolio/project2/5.jpg","/img/portfolio/project2/7.jpg"],"description":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."}}')}}]);