(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["discovery"],{"3d72":function(t,s,a){"use strict";var e=a("d2cb"),i=a.n(e);i.a},"56af":function(t,s,a){"use strict";var e=a("af8a"),i=a.n(e);i.a},aca0:function(t,s,a){},af8a:function(t,s,a){},d2cb:function(t,s,a){},de4a:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"discovery"},[a("nav-menu"),a("div",{staticClass:"discovery-contain",attrs:{id:"discovery_contain"}},[a("carousel",{attrs:{carouselImages:t.carouselImages,changeTime:3e3}}),a("div",{staticClass:"contain-menu"},[a("div",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"rounded-circle"},[a("font-awesome-icon",{attrs:{icon:"calendar-alt"}})],1),a("p",[t._v("每日推薦")])])]),a("div",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"rounded-circle"},[a("font-awesome-icon",{attrs:{icon:"clipboard-list"}})],1),a("p",[t._v("歌單")])])]),a("div",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"rounded-circle"},[a("font-awesome-icon",{attrs:{icon:"chart-bar"}})],1),a("p",[t._v("排行榜")])])]),a("div",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"rounded-circle"},[a("font-awesome-icon",{attrs:{icon:"headset"}})],1),a("p",[t._v("電台")])])]),a("div",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"rounded-circle"},[a("font-awesome-icon",{attrs:{icon:"fingerprint"}})],1),a("p",[t._v("直播")])])])]),a("div",[a("div",{staticClass:"contain-block"},[t._m(0),a("div",{staticClass:"row"},t._l(t.songList,function(s){return a("a",{staticClass:"col-4"},[a("div",{staticClass:"position-relative"},[a("img",{staticClass:"rounded img-fluid w-100",attrs:{src:s.img}}),a("span",{staticClass:"block-mask"},[a("font-awesome-icon",{attrs:{icon:"play"}}),t._v("\n                "+t._s(s.playTimes)+"\n              ")],1)]),a("p",[t._v(t._s(s.title))])])}),0)]),a("div",{staticClass:"contain-block"},[t._m(1),a("div",{staticClass:"row"},t._l(t.newCD,function(s){return a("a",{staticClass:"col-4"},[a("div",[a("img",{staticClass:"rounded img-fluid w-100",attrs:{src:s.img}})]),a("p",{staticClass:"mb-0"},[t._v(t._s(s.title))]),a("p",{staticClass:"block_font"},[t._v(t._s(s.author))])])}),0)]),a("div",{staticClass:"contain-block_1"},[a("div",{staticClass:"block-title",class:{sticky:t.cloudSticky},attrs:{id:"cloud_tit"}},[a("h5",[t._v("雲村精選(js sticky)")]),a("small",[a("font-awesome-icon",{attrs:{icon:"undo"}}),t._v("獲取新內容")],1)]),a("div",{staticClass:"row p-1"},t._l(t.newsList,function(s,e){return a("div",{staticClass:"block_s block_font col-12",class:[{"border-b":e<t.newsList.length-1}]},[a("p",[t._v(t._s(s.title))]),a("div",{staticClass:"block-content",class:[{bg_gray:s.img},{"p-1":!s.img}]},[a("img",{attrs:{src:s.img}}),t._v("\n              "+t._s(s.content)+"\n              "),a("div",{staticClass:"p-2"},[s.img?t._e():a("font-awesome-icon",{attrs:{icon:"headphones-alt"}}),t._v("\n                "+t._s(s.s_title)+"\n              ")],1)]),a("span",{staticClass:"block-great"},[a("font-awesome-icon",{attrs:{icon:"thumbs-up"}}),t._v(t._s(s.great))],1),a("span",{staticClass:"block-comment"},[a("font-awesome-icon",{attrs:{icon:"comment-dots"}}),t._v(t._s(s.comment))],1),a("span",{staticClass:"block-menu"},[a("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])}),0)])])],1)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h5",[t._v("推薦歌單")]),a("small",[t._v("歌單廣場")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h5",[t._v("新碟")]),a("small",[t._v("更多新碟")])])}],n=a("eb41"),o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition-group",{ref:"carousel",staticClass:"contain-slider",style:t.carouselStyle,attrs:{id:"carousel",tag:"div",name:"slider"}},[a("img",{key:t.currentImg,attrs:{src:t.getNowImg}}),a("div",{key:"carousel_nav",staticClass:"carousel_nav"},t._l(t.carouselImages,function(s,e){return a("span",{class:[{active:e===t.currentImg}]})}),0)])},c=[],r=function(t,s){var a;return function(){var e=this,i=arguments;clearTimeout(a),a=setTimeout(function(){t.apply(e,i)},s)}},l={props:["carouselImages","changeTime"],data:function(){return{currentImg:0,carouselStyle:{height:"40%"}}},methods:{resizeStyle:function(t){var s=document.getElementById("carousel");if(s){var a=s.children[0].clientHeight;this.carouselStyle.height=a+10+"px"}},conversionImgScale:function(){var t=document.documentElement.clientWidth;this.carouselStyle.height=Math.floor((t-10)/16*9)+"px"}},computed:{getNowImg:function(){return this.carouselImages[Math.abs(this.currentImg)%this.carouselImages.length]}},mounted:function(){var t=this;t.conversionImgScale(),t.$nextTick(function(){window.addEventListener("resize",r(t.resizeStyle,350))}),setInterval(function(){t.currentImg=t.currentImg+1>t.carouselImages.length-1?0:t.currentImg+=1},t.changeTime)},destroyed:function(){window.removeEventListener("resize",this.resizeStyle)}},m=l,u=(a("faa7"),a("2877")),v=Object(u["a"])(m,o,c,!1,null,"c678dbae",null),d=v.exports,_={data:function(){return{carouselImages:[],songList:[],newCD:[],newsList:[],cloudNavPos:"",cloudSticky:!1,cloudStyle:{top:"43px"}}},components:{navMenu:n["a"],carousel:d},methods:{getSlidImg:function(){this.carouselImages=["images/lion_p16_9.jpg","images/whale_shark_p16_9.jpg","images/squirrel_p16_9.jpg","images/shark_p16_9.jpg","images/White-fox_p16_9.jpg"]},getDataSongList:function(){this.songList=[{img:"images/cat_p1_1.jpg",title:"CAT | 精選曲目",playTimes:"12萬"},{img:"images/dog_p1_1.jpg",title:"DOG | 精選曲目",playTimes:"12萬"},{img:"images/tiger_p1_1.jpg",title:"TIGER | 精選曲目",playTimes:"12萬"},{img:"images/fox_p1_1.jpg",title:"FOX | 精選曲目",playTimes:"12萬"},{img:"images/owl_p1_1.jpg",title:"OWL | 精選曲目",playTimes:"12萬"},{img:"images/salamander_p1_1.jpg",title:"SALAMANDER | 精選曲目",playTimes:"12萬"}]},getDataNewCD:function(){this.newCD=[{img:"images/leopard_p1_1.jpg",title:"LEOPARD",author:"熱門單曲"},{img:"images/gray-wolf_p1_1.jpg",title:"GRAY_WOLF",author:"熱門單曲"},{img:"images/dolphin_p1_1.jpg",title:"DOLPHIN",author:"熱門單曲"}]},getDataNews:function(){this.newsList=[{title:"SHARK",img:"images/shark_p16_9.jpg",s_title:"SHARK",content:"",comment:"1234",great:"4567"},{title:"LION",img:"images/lion_p16_9.jpg",s_title:"LION",content:"",comment:"1234",great:"4567"},{title:"test empty",img:"",s_title:"test empty",content:"test empty title, this is content",comment:"1234",great:"4567"},{title:"WHITE-FOX",img:"images/White-fox_p16_9.jpg",s_title:"WHITE-FOX",content:"",comment:"1234",great:"4567"},{title:"WHALE-SHARK",img:"images/whale_shark_p16_9.jpg",s_title:"WHALE-SHARK",content:"",comment:"1234",great:"4567"}]},scrollSticky:function(t){var s=document.getElementById("discovery_contain"),a=document.getElementById("menu_top_nav");this.cloudNavPos||(this.cloudNavPos=document.getElementById("cloud_tit").offsetTop),s.scrollTop+a.clientHeight+10>this.cloudNavPos?this.cloudSticky=!0:this.cloudSticky=!1}},created:function(){this.getSlidImg(),this.getDataSongList(),this.getDataNewCD(),this.getDataNews()},mounted:function(){var t=this;window.addEventListener("scroll",t.scrollSticky,!0)},destroyed:function(){window.removeEventListener("scroll",this.scrollSticky,!0)}},g=_,p=(a("56af"),Object(u["a"])(g,e,i,!1,null,"1c251d5b",null));s["default"]=p.exports},eb41:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu"},[a("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-white fixed-top",attrs:{id:"menu_top_nav"}},[a("button",{staticClass:"menu-nav_btn",attrs:{type:"button"},on:{click:t.clickMenu}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("ul",{staticClass:"nav justify-content-center",attrs:{id:"menu_main"}},[a("li",{staticClass:"nav-item"},t._l(t.mainMenu,function(s){return a("router-link",{attrs:{to:s.link,"active-class":"active"}},[t._v("\n          "+t._s(s.name)+"\n        ")])}),1)]),a("button",{staticClass:"menu-nav_btn px-2",attrs:{type:"button"}},[a("font-awesome-icon",{attrs:{icon:"search"}})],1)]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"mask",on:{click:function(s){return s.stopPropagation(),t.clickMenu(s)}}})]),a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"menu-nav_list bg-white"},[a("div",{staticClass:"nav_list-contain"},[a("div",{staticClass:"menu-nav_list_top"},[t._v("\n                top show.\n            ")]),a("div",{staticClass:"nav_list-nav"},[a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"envelope"}}),a("p",[t._v("我的消息")])],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("p",[t._v("我的好友")])],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"tshirt"}}),a("p",[t._v("個性換裝")])],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"microphone-alt"}}),a("p",[t._v("聽歌識曲")])],1)])]),a("div",{staticClass:"nav_list-block"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"crown"}}),t._v("演出")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v("商城")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v("附近的人")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"bell"}}),t._v("口袋鈴聲")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"file-alt"}}),t._v("我的訂單")],1)])])]),a("div",{staticClass:"nav_list-block"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"clock"}}),t._v("定時停止播放")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"chess-board"}}),t._v("掃一掃")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"business-time"}}),t._v("音樂鬧鐘")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"headphones"}}),t._v("在線聽歌免流量")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"gamepad"}}),t._v("遊戲推薦")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"money-bill-wave"}}),t._v("優惠券")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"microphone"}}),t._v("我要直播")],1)])])])]),a("div",{staticClass:"nav_list-btm"},[a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"moon"}}),t._v("\n                夜間模式\n              ")],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"cog"}}),t._v("\n                設置\n              ")],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"power-off"}}),t._v("\n                退出\n              ")],1)])])])])],1)},i=[],n={props:{},data:function(){return{isShowMenu:!1,mainMenu:[]}},methods:{clickMenu:function(){this.isShowMenu=!this.isShowMenu},getMainMenuLink:function(){this.mainMenu=[{name:"我的",link:"/my_music/"},{name:"發現",link:"/discovery/"},{name:"朋友",link:"/friends/"},{name:"視頻",link:"/video/"}]}},mounted:function(){this.getMainMenuLink()}},o=n,c=(a("3d72"),a("2877")),r=Object(c["a"])(o,e,i,!1,null,"50e556f0",null);s["a"]=r.exports},faa7:function(t,s,a){"use strict";var e=a("aca0"),i=a.n(e);i.a}}]);
//# sourceMappingURL=discovery.c87afa2d.js.map