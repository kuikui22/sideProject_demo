(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f4be46e"],{"88b3a":function(t,a,e){},"8caa":function(t,a,e){"use strict";var s=e("88b3a"),i=e.n(s);i.a},ad38:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"main"}},[e("article",{staticClass:"mt-2"},[e("p",[t._v(t._s(t.titleContent))])]),e("b-row",{staticClass:"mt-2"},[e("b-col",{staticClass:"block",attrs:{cols:"6"}},[e("small",[t._v(t._s(t.todayTitle))]),e("p",[e("span",{staticClass:"finish-font"},[t._v(t._s(t.completedTodayList.length))]),t._v(" / "+t._s(t.todayTaskList.length)+" ")])]),e("b-col",{staticClass:"block",attrs:{cols:"6"}},[e("small",[t._v(t._s(t.weeklyTitle))]),e("p",[e("span",{staticClass:"finish-font"},[t._v(t._s(t.completedTaskList.length))]),t._v(" / "+t._s(t.taskList.length)+" ")])])],1),e("section",{staticClass:"mt-2 pb-3"},[e("h5",[t._v(t._s(t.chartTitle))]),e("div",{staticClass:"chart-tag"},[e("span",{staticClass:"mr-2",class:t.activeTagClass(t.TAG.TODAY),on:{click:t.getChartToday}},[t._v("Today")]),e("span",{class:t.activeTagClass(t.TAG.WEEK),on:{click:t.getChartWeek}},[t._v("Weekly")])]),e("VeHistogram",{attrs:{data:t.chartData,"tooltip-visible":!1,"legend-visible":!1,textStyle:t.chartLabelColor}})],1)],1)},i=[],n=(e("4de4"),e("4160"),e("d81d"),e("159b"),e("5530")),c=e("c415"),o=e("2f62"),r=e("d6af"),l={data:function(){return{TAG:c["a"],titleContent:"You completed your goal 4 days a row !",todayTitle:"Today's Task",weeklyTitle:"Weekly Task",chartTag:c["a"].WEEK,chartTitle:"Completed Task",chartData:{},chartLabelColor:{color:"#b7b7b7"}}},computed:Object(n["a"])({},Object(o["c"])(["taskList"]),{todayTaskList:function(){var t=Object(r["e"])(new Date);return this.taskList.filter((function(a){return t===a.date}))},completedTaskList:function(){return this.taskList.filter((function(t){return!0===t.finish}))},completedTodayList:function(){return this.todayTaskList.filter((function(t){return!0===t.finish}))}}),methods:{getChartWeek:function(){var t=this;this.chartTag=this.TAG.WEEK;var a=Object(r["d"])(new Date),e=a.map((function(a){var e=t.makeChartData(a);return{dateInt:a,date:e,task:0}}));this.completedTaskList.forEach((function(t){e.forEach((function(a){a.dateInt===t.date&&(a["task"]+=1)}))})),this.chartData={columns:["date","task"],rows:e}},getChartToday:function(){this.chartTag=this.TAG.TODAY;var t=this.completedTodayList>0?this.completedTodayList[0].date:new Date,a=this.makeChartData(t);this.chartData={columns:["date","task"],rows:[{date:a,task:this.completedTodayList.length}]}},makeChartData:function(t){var a=new Date(t);return a.getMonth()+1+" / "+a.getDate()},activeTagClass:function(t){return{active:this.chartTag===t}}},created:function(){this.titleContent="You completed your goal ".concat(this.completedTaskList.length," tasks !"),this.getChartWeek()}},d=l,h=(e("8caa"),e("2877")),u=Object(h["a"])(d,s,i,!1,null,"47e2073c",null);a["default"]=u.exports},d81d:function(t,a,e){"use strict";var s=e("23e7"),i=e("b727").map,n=e("1dde"),c=e("ae40"),o=n("map"),r=c("map");s({target:"Array",proto:!0,forced:!o||!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-5f4be46e.190bac8e.js.map