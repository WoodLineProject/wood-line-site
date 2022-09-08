"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[938],{1938:(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});var a=e(629),i=e(6890);function r(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?r(Object(e),!0).forEach((function(s){n(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function n(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}const o={name:"MobileHomePage",data:function(){return{loading:i.V,trans_prefix:"pages.homePage"}},mounted:function(){this.getCarouselImageAsync()},computed:l({},(0,a.Se)("appStore",["carouselImage"])),methods:l({},(0,a.nv)("appStore",["getCarouselImageAsync"]))};const c=(0,e(1900).Z)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex flex-column",staticStyle:{width:"98%",height:"auto"}},[e("div",{staticClass:"mb-5",staticStyle:{width:"100%"}},[e("v-card",{attrs:{shaped:""}},[e("v-carousel",{attrs:{continuous:!0,height:"250pt",cycle:"","show-arrows-on-hover":""}},t._l(t.carouselImage,(function(s){return e("v-carousel-item",{key:s.id,attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[e("img",{attrs:{alt:t.loading.img,height:"350pt",width:"100%",src:s.path}})])})),1)],1)],1),t._v(" "),e("v-card",{staticClass:"d-flex flex-row align-self-start pl-5 mb-5",attrs:{width:"100%",shaped:""}},[e("div",{staticStyle:{width:"100%"}},[e("v-card-title",{staticClass:"justify-center text-center"},[e("span",{staticClass:"textInHomePage"},[t._v(t._s(t.$t(t.trans_prefix+".title")))])]),t._v(" "),e("div",{staticClass:"d-flex flex-row"},[e("div",{staticClass:"my-auto",attrs:{id:"lineInHomePage"}}),t._v(" "),e("v-card-title",{staticClass:"text-center"},[e("span",{staticClass:"textInHomePage",attrs:{id:"projectName"}},[t._v(t._s(t.$t("projectName")))])]),t._v(" "),e("div",{staticClass:"my-auto",attrs:{id:"lineInHomePage"}})],1),t._v(" "),e("div",{staticClass:"mx-auto my-3",attrs:{id:"check_list"}},[e("div",{staticStyle:{float:"left",clear:"left"}},[e("v-icon",{staticClass:"mr-3",attrs:{color:"green"}},[t._v("done")])],1),t._v(" "),e("span",{staticClass:"textInHomePage"},[t._v(t._s(t.$t(t.trans_prefix+".title2")))])]),t._v(" "),e("div",{staticClass:"mx-auto my-3",attrs:{id:"check_list"}},[e("div",{staticStyle:{float:"left",clear:"left"}},[e("v-icon",{staticClass:"mr-3",attrs:{color:"green"}},[t._v("done")])],1),t._v(" "),e("span",{staticClass:"textInHomePage"},[t._v(t._s(t.$t(t.trans_prefix+".title3")))])]),t._v(" "),e("div",{staticClass:"mx-auto my-3",attrs:{id:"check_list"}},[e("div",{staticStyle:{float:"left",clear:"left"}},[e("v-icon",{staticClass:"mr-3",attrs:{color:"green"}},[t._v("done")])],1),t._v(" "),e("span",{staticClass:"textInHomePage"},[t._v(t._s(t.$t(t.trans_prefix+".title4")))])]),t._v(" "),e("div",{staticClass:"d-flex flex-column",staticStyle:{"margin-left":"20%"}},[e("div",{staticClass:"mx-auto my-3",attrs:{id:"check_list"}},[e("v-icon",{attrs:{size:"75",color:"#4F53B1"}},[t._v("\n                        bed\n                    ")]),t._v(" "),e("span",{staticClass:"textInIcons"},[t._v(t._s(t.$t(t.trans_prefix+".bed")))])],1),t._v(" "),e("div",{staticClass:"mx-auto my-3",attrs:{id:"check_list"}},[e("v-icon",{attrs:{size:"75",color:"#4F53B1"}},[t._v("\n                        sensor_window\n                    ")]),t._v(" "),e("span",{staticClass:"textInIcons"},[t._v(t._s(t.$t(t.trans_prefix+".drawer")))])],1),t._v(" "),e("div",{staticClass:"mx-auto my-3",attrs:{id:"check_list"}},[e("v-icon",{attrs:{size:"75",color:"#4F53B1"}},[t._v("\n                        weekend\n                    ")]),t._v(" "),e("span",{staticClass:"textInIcons"},[t._v(t._s(t.$t(t.trans_prefix+".sofa")))])],1),t._v(" "),e("div",{staticClass:"mx-auto my-3",attrs:{id:"check_list"}},[e("v-icon",{attrs:{size:"75",color:"#4F53B1"}},[t._v("\n                        panorama_vertical\n                    ")]),t._v(" "),e("span",{staticClass:"textInIcons"},[t._v(t._s(t.$t(t.trans_prefix+".poof")))])],1)]),t._v(" "),e("div",{staticClass:"d-flex flex-row my-2"},[e("div",{staticClass:"mx-auto",staticStyle:{width:"90%"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"upholstery"}}},[e("v-btn",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{rounded:"",color:"#4F53B1",dark:"",elevation:"12",large:"",outlined:""}},[e("span",{staticClass:"textBtn"},[t._v(t._s(t.$t(t.trans_prefix+".lincToTextile")))])])],1)],1)]),t._v(" "),e("div",{staticClass:"d-flex flex-row my-2"},[e("div",{staticClass:"mx-auto",staticStyle:{width:"90%"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"wholesaleCustomers"}}},[e("v-btn",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{rounded:"",color:"#4F53B1",dark:"",elevation:"12",large:"",outlined:""}},[e("span",{staticClass:"textBtn"},[t._v(t._s(t.$t(t.trans_prefix+".lincToWholesale")))])])],1)],1)]),t._v(" "),e("div",{staticClass:"d-flex flex-row my-2"},[e("div",{staticClass:"mx-auto",staticStyle:{width:"90%"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"aboutAs"}}},[e("v-btn",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{rounded:"",color:"#4F53B1",dark:"",elevation:"12",large:"",outlined:""}},[e("span",{staticClass:"textBtn"},[t._v(t._s(t.$t(t.trans_prefix+".lincToAboutAs")))])])],1)],1)]),t._v(" "),e("div",{staticClass:"d-flex flex-row my-2"},[e("div",{staticClass:"mx-auto",staticStyle:{width:"90%"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"catalog"}}},[e("v-btn",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{rounded:"",color:"#4F53B1",dark:"",elevation:"12",large:"",outlined:""}},[e("span",{staticClass:"textBtn"},[t._v(t._s(t.$t(t.trans_prefix+".lincToCatalog")))])])],1)],1)]),t._v(" "),e("div",{staticClass:"mb-5",attrs:{id:"lineInHomePage"}})],1)])],1)}),[],!1,null,null,null).exports}}]);