(window.webpackJsonp=window.webpackJsonp||[]).push([[7,41],{532:function(e,t,n){"use strict";var o=n(14),l=n(3),r=n(4),c=n(110),d=n(21),f=n(15),v=n(213),m=n(38),h=n(109),_=n(212),y=n(5),I=n(75).f,N=n(32).f,C=n(20).f,w=n(533),O=n(534).trim,E="Number",V=l.Number,k=V.prototype,S=l.TypeError,x=r("".slice),B=r("".charCodeAt),$=function(e){var t=_(e,"number");return"bigint"==typeof t?t:j(t)},j=function(e){var t,n,o,l,r,c,d,code,f=_(e,"number");if(h(f))throw S("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=O(f),43===(t=B(f,0))||45===t){if(88===(n=B(f,2))||120===n)return NaN}else if(48===t){switch(B(f,1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+f}for(c=(r=x(f,2)).length,d=0;d<c;d++)if((code=B(r,d))<48||code>l)return NaN;return parseInt(r,o)}return+f};if(c(E,!V(" 0o1")||!V("0b1")||V("+0x1"))){for(var M,F=function(e){var t=arguments.length<1?0:V($(e)),n=this;return m(k,n)&&y((function(){w(n)}))?v(Object(t),n,F):t},T=o?I(V):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;T.length>A;A++)f(V,M=T[A])&&!f(F,M)&&C(F,M,N(V,M));F.prototype=k,k.constructor=F,d(l,E,F)}},533:function(e,t,n){var o=n(4);e.exports=o(1..valueOf)},534:function(e,t,n){var o=n(4),l=n(25),r=n(16),c=n(535),d=o("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(e){return function(t){var n=r(l(t));return 1&e&&(n=d(n,v,"")),2&e&&(n=d(n,m,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},535:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},537:function(e,t,n){},539:function(e,t,n){"use strict";n(537)},540:function(e,t,n){"use strict";n.r(t);n(532),n(31),n(214);var o={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)},getYoutubeUrl:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)},getVimeoUrl:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)},getPadding:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(e){var t=this;this.$nextTick((function(){void 0!==t.$refs.closeBtn&&t.$refs.closeBtn.focus()}))},deep:!0}}},l=(n(539),n(73)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isOpen?n("div",[n("div",{class:e.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":e.aria.openMessage},on:{click:function(t){return e.$emit("update:isOpen",!1)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.$emit("update:isOpen",!1)}}},[n("div",{class:e.classNames.modalVideoBody},[n("button",{ref:"closeBtn",class:e.classNames.modalVideoCloseBtn,attrs:{"aria-label":e.aria.dismissBtnMessage},on:{click:function(t){return e.$emit("update:isOpen",!1)}}}),e._v(" "),n("div",{class:e.classNames.modalVideoInner},[n("div",{class:e.classNames.modalVideoIframeWrap,style:{"padding-bottom":e.paddingBottom}},[n("iframe",{attrs:{src:e.fullVideoUrl,frameBorder:"0",allowFullScreen:e.allowFullScreen,tabIndex:"-1"}})])])])])]):e._e()}),[],!1,null,"fb8a83f8",null);t.default=component.exports},618:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{videoIsOpen:!1}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},l=n(73),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"about-cr"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[e._m(0),e._v(" "),n("div",{staticClass:"col-lg-4 valign"},[n("div",{staticClass:"cont full-width"},[n("h3",{staticClass:"color-font"},[e._v("Huge collection.")]),e._v(" "),e._m(1),e._v(" "),n("ModalVideo",{attrs:{channel:e.videoChannel,videoId:e.videoId,isOpen:e.videoIsOpen},on:{"update:isOpen":function(t){e.videoIsOpen=t},"update:is-open":function(t){e.videoIsOpen=t}}}),e._v(" "),n("div",{staticClass:"vid-area"},[n("div",{staticClass:"vid-icon"},[n("a",{staticClass:"vid",on:{click:e.openVideo}},[e._m(2)])]),e._v(" "),e._m(3)]),e._v(" "),e._m(4)],1)])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-lg-6 img md-mb50"},[t("img",{attrs:{src:"/img/intro/4.jpg",alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h6",[e._v("\n            Innovative solutions "),n("br"),e._v("\n            to boost your creative projects.\n          ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vid-butn back-color"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-play"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"valign"},[n("span",{staticClass:"text"},[e._v("Watch Video")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"states"},[n("h2",{staticClass:"color-font fw-700"},[e._v("\n              125 "),n("span",{staticClass:"fz-30"},[e._v("k")])]),e._v(" "),n("p",[e._v("Projects completed around the world")])])}],!1,null,"b5f29728",null);t.default=component.exports;installComponents(component,{ModalVideo:n(540).default})}}]);