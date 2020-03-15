window.__require=function t(e,o,n){function r(i,u){if(!o[i]){if(!e[i]){var s=i.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!u&&l)return l(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}}var p=o[i]={exports:{}};e[i][0].call(p.exports,function(t){return r(e[i][1][t]||t)},p,p.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({CommonFunc:[function(t,e,o){"use strict";cc._RF.push(e,"fd6f3QhfzdIIqBpSMzrAXTL","CommonFunc"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){}return t.getEventNode=function(){return cc.director.getScene().getChildByName("EventNode")},t}();o.default=n,cc._RF.pop()},{}],EventCenterMgr:[function(t,e,o){"use strict";cc._RF.push(e,"205feSamF9Nu4MI0IPE0Uy6","EventCenterMgr");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,u=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){cc.log("EventMgr \u521d\u59cb\u5316\uff01"),cc.game.addPersistRootNode(this.node)},e=r([i],e)}(cc.Component));o.default=u,cc._RF.pop()},{}],FruitLineMgr:[function(t,e,o){"use strict";cc._RF.push(e,"80a90lnGu1CQr2Bmt1c6wsX","FruitLineMgr");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./SlotEventConst"),i=t("./CommonFunc"),u=cc._decorator,s=u.ccclass,l=u.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fruitNodes=[],e._limitY=-320,e._resetY=320,e._repeatTime=3,e._iconCount=11,e._iconDir="fruit/",e._resultArr=[],e}return n(e,t),e.prototype.onLoad=function(){this.addEvents()},e.prototype.start=function(){},e.prototype.addEvents=function(){i.default.getEventNode().on(c.SlotEventConst.START_SCROLL,this.scrollToNumber,this)},e.prototype.setResult=function(t){t&&0!==t.length?this._resultArr=t:cc.log("the result arr isn't vaild")},e.prototype.scrollToNumber=function(){this.actScroll(this._repeatTime)},e.prototype.actScroll=function(t){for(var e=function(e,n){var r=o.fruitNodes[e],c=o._limitY;cc.tween(r).delay(.12*e).to(.3,{position:cc.v2(0,c)}).call(function(){r.y=this._resetY,this.changeIcon(r,this.randomIcon()),e===n-3&&t>0?(t-=1,this.actScroll(t)):e===n-3&&t<=0&&this.lastRoll(),cc.log(t)}.bind(o)).start()},o=this,n=0,r=this.fruitNodes.length;n<r;n++)e(n,r)},e.prototype.lastRoll=function(){for(var t=[-160,0,160],e=0;e<3;e++){var o=this.fruitNodes[e];this.changeIcon(o,"fruit_"+this._resultArr[e]),cc.tween(o).delay(.12*e).to(.3,{position:cc.v2(0,t[e])}).call(function(){}.bind(this)).start()}},e.prototype.randomIcon=function(){return"fruit_"+(Math.floor(Math.random()*this._iconCount)+1)},e.prototype.changeIcon=function(t,e){t.getComponent(cc.Sprite).spriteFrame=cc.loader.getRes(this._iconDir+e,cc.SpriteFrame)},r([l(cc.Node)],e.prototype,"fruitNodes",void 0),e=r([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./CommonFunc":"CommonFunc","./SlotEventConst":"SlotEventConst"}],GameSceneBase:[function(t,e,o){"use strict";cc._RF.push(e,"0931eyyIR1Mz49O13s79TxV","GameSceneBase");cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,u=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scrollNode=[],e.actBtn=null,e._repeatTimes=4,e._runNum=4,e}return n(e,t),e.prototype.onLoad=function(){this.addEvent()},e.prototype.start=function(){},e.prototype.addEvent=function(){this.actBtn.node.on("click",this.clickActBtn,this)},e.prototype.clickActBtn=function(){cc.log(44444),this._repeatTimes=4,this.rollAct(4)},e.prototype.rollAct=function(t){for(var e=function(e){o.scrollNode[e].runAction(cc.sequence(cc.delayTime(.4*e),cc.moveTo(.4,cc.v2(o.scrollNode[e].x,-100)),cc.callFunc(function(){this.scrollNode[e].y=100,this.scrollNode[e].getComponent(cc.Label).string=this._runNum.toString(),this._runNum=this._runNum+1>9?0:this._runNum+1,e===this.scrollNode.length-1&&(t>1?(t-=1,this.rollAct(t)):(this.scrollNode[0].stopAllActions(),this.scrollNode[0].runAction(cc.moveTo(.5,this.scrollNode[0].x,0))))}.bind(o))))},o=this,n=0;n<this.scrollNode.length;n++)e(n)},r([u(cc.Node)],e.prototype,"scrollNode",void 0),r([u(cc.Button)],e.prototype,"actBtn",void 0),e=r([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],IGameScene:[function(t,e,o){"use strict";cc._RF.push(e,"6c0a3o5uRdCKZYA7tz5bCIg","IGameScene"),cc._RF.pop()},{}],IScene:[function(t,e,o){"use strict";cc._RF.push(e,"5b03bNTnNRLnqTOiWU1+hfh","IScene"),cc._RF.pop()},{}],SlotConst:[function(t,e,o){"use strict";cc._RF.push(e,"795adm9hFdJ9oTYnGkpZvrZ","SlotConst"),cc._RF.pop()},{}],SlotEventConst:[function(t,e,o){"use strict";cc._RF.push(e,"e1fd6ChP+FKjYwjgX/yQBUT","SlotEventConst"),Object.defineProperty(o,"__esModule",{value:!0}),function(t){t.START_SCROLL="START_SCROLL"}(o.SlotEventConst||(o.SlotEventConst={})),cc._RF.pop()},{}],SlotGameMgr:[function(t,e,o){"use strict";cc._RF.push(e,"2acb4feMbBIKp7xYsnf9YA0","SlotGameMgr");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./CommonFunc"),i=t("./SlotEventConst"),u=cc._decorator,s=u.ccclass,l=u.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startBtn=null,e.fruitLines=[],e._maxNumber=11,e}return n(e,t),e.prototype.onLoad=function(){this.addEvent(),this.loadingRes()},e.prototype.start=function(){},e.prototype.loadingRes=function(){cc.loader.loadResDir("fruit",function(t,e){t&&cc.log("loading res fail....")})},e.prototype.addEvent=function(){this.startBtn.on("click",this.onClickStartBtn,this)},e.prototype.onClickStartBtn=function(){var t=this.prizeNumberArr();console.log("start...",t);for(var e=0,o=this.fruitLines.length;e<o;e++)this.fruitLines[e].getComponent("FruitLineMgr").setResult(t[e]);c.default.getEventNode().emit(i.SlotEventConst.START_SCROLL,t)},e.prototype.prizeNumberArr=function(){for(var t=[],e=0;e<3;e++){t[e]=[];for(var o=0;o<3;o++)t[e][o]=this.randomNumber()}return t},e.prototype.randomNumber=function(){return Math.floor(Math.random()*this._maxNumber)+1},r([l(cc.Node)],e.prototype,"startBtn",void 0),r([l(cc.Node)],e.prototype,"fruitLines",void 0),e=r([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./CommonFunc":"CommonFunc","./SlotEventConst":"SlotEventConst"}]},{},["GameSceneBase","EventCenterMgr","CommonFunc","FruitLineMgr","SlotConst","SlotEventConst","SlotGameMgr","Helloworld","IGameScene","IScene"]);