(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video"],{"377e":function(t,a,s){"use strict";var n=s("8867"),i=s.n(n);i.a},"3d72":function(t,a,s){"use strict";var n=s("d2cb"),i=s.n(n);i.a},8867:function(t,a,s){},bdc7:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"video"},[s("nav-menu"),s("div",{staticClass:"video-contain"},[t._m(0),t._l(t.videoList,function(a,n){return s("div",{staticClass:"video-block",class:{"video-block_border":n<t.videoList.length-1}},[s("div",{staticClass:"title"},[s("img",{attrs:{src:a.img}}),s("p",[t._v(t._s(a.content))])]),s("div",{staticClass:"content"},[s("span",[s("img",{attrs:{src:a.authorImg}}),t._v("\n                    "+t._s(a.author)+"\n                ")]),s("div",{staticClass:"icon_group"},[s("span",[s("font-awesome-icon",{attrs:{icon:"thumbs-up"}}),t._v(t._s(a.great))],1),s("span",[s("font-awesome-icon",{attrs:{icon:"comment-dots"}}),t._v(t._s(a.comment))],1),s("span",[s("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])])])})],2)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"video-menu"},[s("a",{staticClass:"active"},[t._v("\n                推薦"),s("span")]),s("a",[t._v("\n                Look直播"),s("span")]),s("a",[t._v("現場"),s("span")]),s("a",[t._v("MV"),s("span")]),s("a",[t._v("舞蹈"),s("span")]),s("a",[t._v("萌寵"),s("span")]),s("a",[t._v("\n                定制寶寶MV"),s("span")]),s("a",[t._v("\n                翻唱"),s("span")]),s("a",[t._v("\n                廣場"),s("span")]),s("a",[t._v("\n                ACG音樂"),s("span")]),s("a",[t._v("\n                生活"),s("span")]),s("a",[t._v("\n                最佳飯制"),s("span")])])}],e=s("eb41"),o={data:function(){return{videoList:[]}},components:{navMenu:e["a"]},methods:{getVideoList:function(){this.videoList=[{author:"SHARK",authorImg:"images/salamander_p1_1.jpg",content:"shark",img:"images/shark.jpg",great:"1234582",comment:"85215"},{author:"LION",authorImg:"images/lion_p1_1.jpg",content:"shark",img:"images/lion.jpg",great:"1234582",comment:"85215"},{author:"White-fox",authorImg:"images/White-fox_p1_1.jpg",content:"shark",img:"images/White-fox.jpg",great:"1234582",comment:"85215"},{author:"Squirrel",authorImg:"images/squirrel_p1_1.jpg",content:"shark",img:"images/squirrel.jpg",great:"1234582",comment:"85215"},{author:"Owl",authorImg:"images/owl_p1_1.jpg",content:"shark",img:"images/owl.jpg",great:"1234582",comment:"85215"},{author:"FOX",authorImg:"images/fox_p1_1.jpg",content:"shark",img:"images/fox.jpg",great:"1234582",comment:"85215"}]}},created:function(){this.getVideoList()}},c=o,r=(s("377e"),s("2877")),m=Object(r["a"])(c,n,i,!1,null,"69136692",null);a["default"]=m.exports},d2cb:function(t,a,s){},eb41:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"menu"},[s("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-white fixed-top",attrs:{id:"menu_top_nav"}},[s("button",{staticClass:"menu-nav_btn",attrs:{type:"button"},on:{click:t.clickMenu}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("ul",{staticClass:"nav justify-content-center",attrs:{id:"menu_main"}},[s("li",{staticClass:"nav-item"},t._l(t.mainMenu,function(a){return s("router-link",{attrs:{to:a.link,"active-class":"active"}},[t._v("\n          "+t._s(a.name)+"\n        ")])}),1)]),s("button",{staticClass:"menu-nav_btn px-2",attrs:{type:"button"}},[s("font-awesome-icon",{attrs:{icon:"search"}})],1)]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"mask",on:{click:function(a){return a.stopPropagation(),t.clickMenu(a)}}})]),s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"menu-nav_list bg-white"},[s("div",{staticClass:"nav_list-contain"},[s("div",{staticClass:"menu-nav_list_top"},[t._v("\n                top show.\n            ")]),s("div",{staticClass:"nav_list-nav"},[s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"envelope"}}),s("p",[t._v("我的消息")])],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"user"}}),s("p",[t._v("我的好友")])],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"tshirt"}}),s("p",[t._v("個性換裝")])],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"microphone-alt"}}),s("p",[t._v("聽歌識曲")])],1)])]),s("div",{staticClass:"nav_list-block"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item active"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"crown"}}),t._v("演出")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v("商城")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v("附近的人")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"bell"}}),t._v("口袋鈴聲")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"file-alt"}}),t._v("我的訂單")],1)])])]),s("div",{staticClass:"nav_list-block"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"clock"}}),t._v("定時停止播放")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"chess-board"}}),t._v("掃一掃")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"business-time"}}),t._v("音樂鬧鐘")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"headphones"}}),t._v("在線聽歌免流量")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"gamepad"}}),t._v("遊戲推薦")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"money-bill-wave"}}),t._v("優惠券")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"microphone"}}),t._v("我要直播")],1)])])])]),s("div",{staticClass:"nav_list-btm"},[s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"moon"}}),t._v("\n                夜間模式\n              ")],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"cog"}}),t._v("\n                設置\n              ")],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"power-off"}}),t._v("\n                退出\n              ")],1)])])])])],1)},i=[],e={props:{},data:function(){return{isShowMenu:!1,mainMenu:[]}},methods:{clickMenu:function(){this.isShowMenu=!this.isShowMenu},getMainMenuLink:function(){this.mainMenu=[{name:"我的",link:"/my_music/"},{name:"發現",link:"/discovery/"},{name:"朋友",link:"/friends/"},{name:"視頻",link:"/video/"}]}},mounted:function(){this.getMainMenuLink()}},o=e,c=(s("3d72"),s("2877")),r=Object(c["a"])(o,n,i,!1,null,"50e556f0",null);a["a"]=r.exports}}]);
//# sourceMappingURL=video.b924c479.js.map