(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my_music"],{"3d72":function(t,a,s){"use strict";var n=s("d2cb"),i=s.n(n);i.a},8707:function(t,a,s){},9213:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my_music"},[s("nav-menu"),s("div",{staticClass:"my_music-contain"},[s("div",{staticClass:"my_music-menu"},[t._l(t.myMusicMenu,function(a){return s("a",[s("span",[s("font-awesome-icon",{attrs:{icon:a.iconName}})],1),s("p",[t._v(t._s(a.name))])])}),s("a",[s("span",[s("font-awesome-icon",{attrs:{icon:"bars"}})],1),s("p",[t._v("編輯")])])],2),s("div",{staticClass:"music-menu-mid"},[s("ul",[s("li",[s("a",[s("font-awesome-icon",{attrs:{icon:"music"}}),t._m(0)],1)]),s("li",[s("a",[s("font-awesome-icon",{attrs:{icon:"play-circle"}}),t._m(1)],1)]),s("li",[s("a",[s("font-awesome-icon",{attrs:{icon:"cloud-download-alt"}}),t._m(2)],1)]),s("li",[s("a",[s("font-awesome-icon",{attrs:{icon:"robot"}}),t._m(3)],1)]),s("li",[s("a",[s("font-awesome-icon",{attrs:{icon:"star"}}),t._m(4)],1)])])]),s("div",{staticClass:"music-create"},[s("div",{staticClass:"title"},[s("a",{staticClass:"angle_flag",on:{click:t.changeListShow}},[s("font-awesome-icon",{class:{rotate_flag:!t.showList},attrs:{icon:"angle-down"}})],1),s("h5",[t._v("創建的歌單")]),s("small",[t._v("(1)")]),s("div",{staticClass:"title-btn_group"},[s("span",[s("font-awesome-icon",{attrs:{icon:"plus"}})],1),s("span",[s("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])]),s("transition",{attrs:{name:"slide_down"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"create_list"},[s("div",{staticClass:"create_media"},[s("div",{staticClass:"media_img"},[s("font-awesome-icon",{attrs:{icon:"heart"}})],1),s("div",{staticClass:"media_body"},[s("h5",{staticClass:"mt-0"},[t._v("我喜歡的音樂")]),s("p",[t._v("0首")]),s("span",[s("font-awesome-icon",{attrs:{icon:"heartbeat"}}),t._v("心動模式")],1)])])])]),s("div",{staticClass:"create_cut"},[s("font-awesome-icon",{attrs:{icon:"cut"}}),t._v(" 截圖導入歌單")],1)],1),s("div",{staticClass:"music-recommend"},[s("div",{staticClass:"title"},[s("span",{staticClass:"icon_span"},[s("font-awesome-icon",{attrs:{icon:"heart"}})],1),s("h5",[t._v("推薦歌單")]),s("span",{staticClass:"close"},[t._v("✖")])]),s("div",{staticClass:"row"},t._l(t.recommendList,function(a){return s("div",{staticClass:"col-4"},[s("img",{attrs:{src:a.img}}),s("p",[t._v(t._s(a.title))])])}),0)])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[t._v("\n                本地音樂\n                "),s("small",[t._v("(0)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[t._v("\n                最近播放\n                "),s("small",[t._v("(1)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[t._v("下載管理\n                "),s("small",[t._v("(1)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[t._v("我的電台\n                "),s("small",[t._v("(1)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[t._v("\n                我的收藏\n                "),s("small",[t._v("(專輯 / 歌手 / 視頻 / Mlog)")])])}],e=s("eb41"),o={data:function(){return{myMusicMenu:[],recommendList:[],showList:!0}},components:{navMenu:e["a"]},methods:{getMyMusicMenu:function(){this.myMusicMenu=[{name:"駕駛模式",iconName:"car"},{name:"私人FM",iconName:"band-aid"},{name:"最新電音",iconName:"braille"},{name:"Sati空間",iconName:"database"},{name:"私藏推薦",iconName:"heartbeat"},{name:"音樂交友",iconName:"heart"},{name:"親子頻道",iconName:"baby"},{name:"古典專區",iconName:"guitar"},{name:"跑步FM",iconName:"running"},{name:"小冰電台",iconName:"bacon"},{name:"爵士電台",iconName:"drum"}]},getRecommendList:function(){this.recommendList=[{title:"SQUIRREL",img:"images/squirrel_p1_1.jpg"},{title:"DOLPHIN",img:"images/dolphin_p1_1.jpg"},{title:"WHITE-FOX",img:"images/White-fox_p1_1.jpg"},{title:"SALAMANDER",img:"images/salamander_p1_1.jpg"},{title:"CAT",img:"images/cat_p1_1.jpg"},{title:"LEOPARD",img:"images/leopard_p1_1.jpg"}]},changeListShow:function(){this.showList=!this.showList}},created:function(){this.getMyMusicMenu(),this.getRecommendList()},mounted:function(){}},c=o,r=(s("f56a"),s("2877")),m=Object(r["a"])(c,n,i,!1,null,"3f4cf2bf",null);a["default"]=m.exports},d2cb:function(t,a,s){},eb41:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"menu"},[s("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-white fixed-top",attrs:{id:"menu_top_nav"}},[s("button",{staticClass:"menu-nav_btn",attrs:{type:"button"},on:{click:t.clickMenu}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("ul",{staticClass:"nav justify-content-center",attrs:{id:"menu_main"}},[s("li",{staticClass:"nav-item"},t._l(t.mainMenu,function(a){return s("router-link",{attrs:{to:a.link,"active-class":"active"}},[t._v("\n          "+t._s(a.name)+"\n        ")])}),1)]),s("button",{staticClass:"menu-nav_btn px-2",attrs:{type:"button"}},[s("font-awesome-icon",{attrs:{icon:"search"}})],1)]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"mask",on:{click:function(a){return a.stopPropagation(),t.clickMenu(a)}}})]),s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"menu-nav_list bg-white"},[s("div",{staticClass:"nav_list-contain"},[s("div",{staticClass:"menu-nav_list_top"},[t._v("\n                top show.\n            ")]),s("div",{staticClass:"nav_list-nav"},[s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"envelope"}}),s("p",[t._v("我的消息")])],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"user"}}),s("p",[t._v("我的好友")])],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"tshirt"}}),s("p",[t._v("個性換裝")])],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"microphone-alt"}}),s("p",[t._v("聽歌識曲")])],1)])]),s("div",{staticClass:"nav_list-block"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item active"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"crown"}}),t._v("演出")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v("商城")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v("附近的人")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"bell"}}),t._v("口袋鈴聲")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"file-alt"}}),t._v("我的訂單")],1)])])]),s("div",{staticClass:"nav_list-block"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"clock"}}),t._v("定時停止播放")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"chess-board"}}),t._v("掃一掃")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"business-time"}}),t._v("音樂鬧鐘")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"headphones"}}),t._v("在線聽歌免流量")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"gamepad"}}),t._v("遊戲推薦")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"money-bill-wave"}}),t._v("優惠券")],1)]),s("li",{staticClass:"nav-item"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"microphone"}}),t._v("我要直播")],1)])])])]),s("div",{staticClass:"nav_list-btm"},[s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"moon"}}),t._v("\n                夜間模式\n              ")],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"cog"}}),t._v("\n                設置\n              ")],1)]),s("span",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"power-off"}}),t._v("\n                退出\n              ")],1)])])])])],1)},i=[],e={props:{},data:function(){return{isShowMenu:!1,mainMenu:[]}},methods:{clickMenu:function(){this.isShowMenu=!this.isShowMenu},getMainMenuLink:function(){this.mainMenu=[{name:"我的",link:"/my_music/"},{name:"發現",link:"/discovery/"},{name:"朋友",link:"/friends/"},{name:"視頻",link:"/video/"}]}},mounted:function(){this.getMainMenuLink()}},o=e,c=(s("3d72"),s("2877")),r=Object(c["a"])(o,n,i,!1,null,"50e556f0",null);a["a"]=r.exports},f56a:function(t,a,s){"use strict";var n=s("8707"),i=s.n(n);i.a}}]);
//# sourceMappingURL=my_music.fc24b765.js.map