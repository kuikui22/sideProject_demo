(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["friends"],{"18de":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"friends"},[a("nav-menu"),a("div",{staticClass:"friends-contain"},t._l(t.friendsActionList,function(s,i){return a("div",{key:s.ID,staticClass:"friends-block",class:{"friends-block_border":i<t.friendsActionList.length-1}},[a("div",{staticClass:"title media"},[a("img",{staticClass:"align-self-center",attrs:{src:s.friends.friendImg}}),a("div",{staticClass:"media-body"},[a("span",{staticClass:"name"},[t._v(t._s(s.friends.friendName))]),t._v("\n                    "+t._s(s.article.action)+":\n                    "),a("small",[t._v(t._s(s.friends.fans))]),a("span",{staticClass:"attention"},[t._v("+ 關注")])])]),a("div",{staticClass:"content"},[t._v("\n                "+t._s(s.article.content)+"\n                "),a("img",{staticClass:"align-self-center",attrs:{src:s.article.img}})]),s.musicList.music_name?a("div",{staticClass:"music"},[a("div",{staticClass:"media"},[a("img",{staticClass:"align-self-center",attrs:{src:s.friends.friendImg}}),a("div",{staticClass:"media-body"},[t._v("\n                        "+t._s(s.musicList.music_name)+"\n                        "),a("small",[t._v(t._s(s.friends.fans))])])])]):t._e(),a("div",{staticClass:"bottom_info"},[a("div",[a("font-awesome-icon",{attrs:{icon:"retweet"}}),t._v(" "+t._s(s.article.plays)+"\n                ")],1),a("div",[a("font-awesome-icon",{attrs:{icon:"comment-dots"}}),t._v(" "+t._s(s.article.comments)+"\n                ")],1),a("div",[a("font-awesome-icon",{attrs:{icon:"thumbs-up"}}),t._v(" "+t._s(s.article.great)+"\n                ")],1)])])}),0)],1)},n=[],e=a("eb41"),o={data:function(){return{friendsActionList:[]}},components:{navMenu:e["a"]},methods:{getFriendActionList:function(){this.friendsActionList=[{ID:"0",friends:{friendName:"friend_0",friendImg:"images/gray-wolf_p1_1.jpg",fans:"10.2萬"},article:{action:"分享單曲",plays:"123456",comments:"45678",great:"78945",img:"images/gray-wolf.jpg",content:"<html>..... <a link.....>"},images:[],musicList:{music_name:"gray-wolf",music_author:"GRAY-WOLF",music_img:"images/gray-wolf_p1_1.jpg"}},{ID:"1",friends:{friendName:"friend_1",friendImg:"images/tiger_p1_1.jpg",fans:"10.2萬"},article:{action:"分享單曲",plays:"123456",comments:"45678",great:"78945",img:"images/tiger.jpg",content:"<html>..... <a link.....>"},images:[],musicList:{music_name:"gray-wolf",music_author:"GRAY-WOLF",music_img:"images/tiger_p1_1.jpg"}},{ID:"2",friends:{friendName:"friend_2",friendImg:"images/owl_p1_1.jpg",fans:"10.2萬"},article:{action:"分享單曲",plays:"123456",comments:"45678",great:"78945",img:"images/owl.jpg",content:"<html>..... <a link.....>"},images:[],musicList:{music_name:"owl",music_author:"OWL",music_img:"images/owl_p1_1.jpg"}},{ID:"3",friends:{friendName:"friend_3",friendImg:"images/fox_p1_1.jpg",fans:"10.2萬"},article:{action:"分享單曲",plays:"123456",comments:"45678",great:"78945",img:"images/fox.jpg",content:"<html>..... <a link.....>"},images:[],musicList:{music_name:"fox",music_author:"GRAY-WOLF",music_img:"images/fox_p1_1.jpg"}}]}},created:function(){this.getFriendActionList()}},c=o,r=(a("db63"),a("2877")),m=Object(r["a"])(c,i,n,!1,null,"14429614",null);s["default"]=m.exports},"3d72":function(t,s,a){"use strict";var i=a("d2cb"),n=a.n(i);n.a},"593b":function(t,s,a){},d2cb:function(t,s,a){},db63:function(t,s,a){"use strict";var i=a("593b"),n=a.n(i);n.a},eb41:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu"},[a("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-white fixed-top",attrs:{id:"menu_top_nav"}},[a("button",{staticClass:"menu-nav_btn",attrs:{type:"button"},on:{click:t.clickMenu}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("ul",{staticClass:"nav justify-content-center",attrs:{id:"menu_main"}},[a("li",{staticClass:"nav-item"},t._l(t.mainMenu,function(s){return a("router-link",{attrs:{to:s.link,"active-class":"active"}},[t._v("\n          "+t._s(s.name)+"\n        ")])}),1)]),a("button",{staticClass:"menu-nav_btn px-2",attrs:{type:"button"}},[a("font-awesome-icon",{attrs:{icon:"search"}})],1)]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"mask",on:{click:function(s){return s.stopPropagation(),t.clickMenu(s)}}})]),a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMenu,expression:"isShowMenu"}],staticClass:"menu-nav_list bg-white"},[a("div",{staticClass:"nav_list-contain"},[a("div",{staticClass:"menu-nav_list_top"},[t._v("\n                top show.\n            ")]),a("div",{staticClass:"nav_list-nav"},[a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"envelope"}}),a("p",[t._v("我的消息")])],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("p",[t._v("我的好友")])],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"tshirt"}}),a("p",[t._v("個性換裝")])],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"microphone-alt"}}),a("p",[t._v("聽歌識曲")])],1)])]),a("div",{staticClass:"nav_list-block"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"crown"}}),t._v("演出")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),t._v("商城")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v("附近的人")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"bell"}}),t._v("口袋鈴聲")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"file-alt"}}),t._v("我的訂單")],1)])])]),a("div",{staticClass:"nav_list-block"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"clock"}}),t._v("定時停止播放")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"chess-board"}}),t._v("掃一掃")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"business-time"}}),t._v("音樂鬧鐘")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"headphones"}}),t._v("在線聽歌免流量")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"gamepad"}}),t._v("遊戲推薦")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"money-bill-wave"}}),t._v("優惠券")],1)]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"microphone"}}),t._v("我要直播")],1)])])])]),a("div",{staticClass:"nav_list-btm"},[a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"moon"}}),t._v("\n                夜間模式\n              ")],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"cog"}}),t._v("\n                設置\n              ")],1)]),a("span",[a("a",{attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:"power-off"}}),t._v("\n                退出\n              ")],1)])])])])],1)},n=[],e={props:{},data:function(){return{isShowMenu:!1,mainMenu:[]}},methods:{clickMenu:function(){this.isShowMenu=!this.isShowMenu},getMainMenuLink:function(){this.mainMenu=[{name:"我的",link:"/my_music/"},{name:"發現",link:"/discovery/"},{name:"朋友",link:"/friends/"},{name:"視頻",link:"/video/"}]}},mounted:function(){this.getMainMenuLink()}},o=e,c=(a("3d72"),a("2877")),r=Object(c["a"])(o,i,n,!1,null,"50e556f0",null);s["a"]=r.exports}}]);
//# sourceMappingURL=friends.a90fd349.js.map