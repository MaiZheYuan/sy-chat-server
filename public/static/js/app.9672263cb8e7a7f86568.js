webpackJsonp([1],{0:function(t,e){},DuBO:function(t,e){},GY21:function(t,e){},Kulh:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("VCXJ"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},i=o("Z0/y")(null,n,!1,null,null,null).exports,r=o("zO6J"),a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("div",{staticClass:"login-wrap"},[o("div",{staticClass:"login-form check-part"},t._l(t.routeList,function(e){return o("span",{staticClass:"sign-btn",class:{"sign-btn-active":e.isActive},domProps:{textContent:t._s(e.tit)},on:{click:function(o){t.checkPage(e)}}})})),t._v(" "),o("router-view",{ref:"signForm"}),t._v(" "),o("div",{staticClass:"login-form"},[o("div",{staticClass:"login-form-child",attrs:{onselectstart:"return false"}},[o("span",{staticClass:"login-btn",on:{click:t.userConfirm}},[t._v("确定")])])])],1)])},staticRenderFns:[]};var c=o("Z0/y")({data:function(){return{curItem:null,routeList:[{tit:"登录",routeName:"signIn",isActive:!0},{tit:"注册",routeName:"signUp",isActive:!1}]}},methods:{checkPage:function(t){this.curItem?this.curItem.isActive=!1:this.normalAllItem(),this.curItem=t,t.isActive=!0,this.$router.push({name:t.routeName})},normalAllItem:function(){this.routeList.forEach(function(t){t.isActive=!1})},userConfirm:function(){this.$refs.signForm.$emit("userConfirm")}}},a,!1,function(t){o("DuBO")},null,null).exports,u=o("3cXf"),l=o.n(u),m=o("rVsN"),d=o.n(m),h={data:function(){return{formModel:[{label:"账号：",tip:"",rule:"",isWarning:!1,value:"",id:"signInNumber"},{label:"密码：",tip:"",rule:"",isWarning:!1,value:"",id:"signInPassword"}],userInfo:null}},methods:{formNoValidate:function(){var t=!0,e={signInNumber:"userId",signInPassword:"password"},o={userId:"",password:""};this.formModel.forEach(function(s){0===s.value.length&&(s.isWarning=!0)&&(t=!1),o[e[s.id]]=s.value}),t&&this.signIn(o)},signIn:function(t){var e=this,o=window.SYRESOURCE.user;this.userInfo=t,this.$http.get(o,{params:t}).then(function(t){e.signInHandle(t).then(e.signInSucceed,e.signInFailed)},function(t){})},signInHandle:function(t){return new d.a(function(e,o){200===t.body.code?e(t):o(t)})},signInSucceed:function(t){this.userInfo.nickname=t.body.data.nickname,sessionStorage.setItem("userInfo",l()(this.userInfo)),this.$router.push({name:"home"})},signInFailed:function(t){alert(t.body.data)}},mounted:function(){this.$on("userConfirm",this.formNoValidate)}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"login-form",attrs:{id:"sign-in-form"}},t._l(t.formModel,function(e){return o("div",{staticClass:"login-form-child"},[o("label",{staticClass:"login-form-label",attrs:{for:"item.id"},domProps:{textContent:t._s(e.label)}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"login-form-input",class:{"sign-in-warning":e.isWarning},attrs:{type:"text",id:"item.id",placeholder:e.tip},domProps:{value:e.value},on:{input:function(o){o.target.composing||t.$set(e,"value",o.target.value)}}})])}))},staticRenderFns:[]};var p=o("Z0/y")(h,f,!1,function(t){o("jFyt")},null,null).exports,v={data:function(){return{formModel:[{label:"账号：",tip:"8-16位英文与字母组合",rule:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}/,isWarning:!1,value:"",id:"signUpNumber"},{label:"密码：",tip:"8-16位英文与字母组合",rule:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}/,isWarning:!1,value:"",id:"signUpPassword"},{label:"昵称：",tip:"1-10个字符",rule:/.{1,10}/,isWarning:!1,value:"",id:"signUpNickName"}],params:null}},methods:{formNoValidate:function(){var t=!0,e={signUpNumber:"userId",signUpPassword:"password",signUpNickName:"nickname"},o={userId:"",password:"",nickname:""};this.formModel.forEach(function(s){(0===s.value.length||!s.rule.test(s.value))&&((s.value="")||(s.isWarning=!0))&&(t=!1),o[e[s.id]]=s.value}),t&&this.signUp(o)},signUp:function(t){var e=this,o=window.SYRESOURCE.user;this.params=t,this.$http.post(o,{params:t}).then(function(t){e.signUpHandle(t).then(e.signUpSucceed,e.signUpFailed)},function(t){})},signUpHandle:function(t){return new d.a(function(e,o){200===t.body.code?e(t):o(t)})},signUpSucceed:function(){sessionStorage.setItem("userInfo",l()(this.params)),this.params=null,this.$router.push({name:"home"})},signUpFailed:function(t){alert(t.body.data)}},mounted:function(){this.$on("userConfirm",this.formNoValidate)}},g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"login-form",attrs:{id:"sign-in-form"}},t._l(t.formModel,function(e){return o("div",{staticClass:"login-form-child"},[o("label",{staticClass:"login-form-label",attrs:{for:"item.id"},domProps:{textContent:t._s(e.label)}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"login-form-input",class:{"sign-in-warning":e.isWarning},attrs:{type:"text",id:"item.id",placeholder:e.tip},domProps:{value:e.value},on:{input:function(o){o.target.composing||t.$set(e,"value",o.target.value)}}})])}))},staticRenderFns:[]};var C=o("Z0/y")(v,g,!1,function(t){o("y1eR")},null,null).exports,I={data:function(){return{roomName:"",roomId:"",roomCurrentDetail:null,userId:"",userInfo:null,txtSend:"",mesModel:[]}},methods:{roomCurrentChange:function(t){this.roomName&&this.socketRoomLeave(),this.roomName=t,this.getRoomId(t),this.mesModel=[]},getRoomId:function(t){var e=this,o={roomName:t},s=window.SYRESOURCE.room;this.$http.get(s,{params:o}).then(function(t){200===t.body.code?e.getRoomIdSucceed(t):e.errHandle(t)},function(t){})},getRoomIdSucceed:function(t){this.roomCurrentDetail=t.body.data,this.roomId=t.body.data.roomId,this.socketRoomJoin()},sendMess:function(){this.txtSend&&this.socketTxtSend()},socketRoomJoin:function(){var t={type:"roomJoin",roomId:this.roomId,data:{userId:this.userId,nickname:this.userInfo.nickname}};window.SYRESOURCE.chatSocket.emit("clientMes",t)},socketRoomLeave:function(){var t={type:"roomLeave",roomId:this.roomId};window.SYRESOURCE.chatSocket.emit("clientMes",t)},socketTxtSend:function(){var t={type:"chatTxt",roomId:this.roomId,data:{txt:this.txtSend}};window.SYRESOURCE.chatSocket.emit("clientMes",t)},socketMesGet:function(t){var e=new Date,o={type:t.type,txt:t.data.txt,img:t.data.img,userId:t.userInfo.userId,nickname:t.userInfo.nickname,moment:e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" "+e.getHours()+":"+e.getMinutes(),memberIn:"roomJoin"===t.type?t.userInfo.userName+"进入了房间":"",memberOut:"roomLeave"===t.type?t.userInfo.userName+"离开了房间":""};this.mesModel.push(o),console.log(t,o,"yyyyyyyyyyyyyyyy")},errHandle:function(t){console.error(t.body.data)},socketLink:function(){var t=io.connect();window.SYRESOURCE.chatSocket=t}},mounted:function(){var t=JSON.parse(sessionStorage.getItem("userInfo"));this.userInfo=t,this.userId=t.userId,this._$eventBus.$on("roomChecked",this.roomCurrentChange),this.socketLink(),window.SYRESOURCE.chatSocket.on("serverMes",this.socketMesGet)}},w={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"chat-room"},[o("h1",{staticClass:"tit",attrs:{id:"room-tit"},domProps:{textContent:t._s(t.roomName)}}),t._v(" "),o("div",{staticClass:"content"},t._l(t.mesModel,function(e){return o("p",{staticClass:"chat-line"},[o("span",{staticClass:"chat-moment chat-member",class:{"chat-moment-me":e.userId==t.userId},domProps:{textContent:t._s(e.nickname)}}),t._v(" "),o("span",{staticClass:"chat-moment",class:{"chat-moment-me":e.userId==t.userId},domProps:{textContent:t._s(e.moment)}}),t._v(" "),o("span",{staticClass:"chat-mess",class:{"chat-mess-me":e.userId==t.userId},domProps:{textContent:t._s(e.txt)}}),t._v(" "),o("span",{staticClass:"chat-in",domProps:{textContent:t._s(t.memberIn)}}),t._v(" "),o("span",{staticClass:"chat-out",domProps:{textContent:t._s(t.memberOut)}})])})),t._v(" "),o("form",{staticClass:"tool"},[o("div",{staticClass:"write-board"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.txtSend,expression:"txtSend",modifiers:{trim:!0}}],staticClass:"write-box",attrs:{type:"text",name:"write"},domProps:{value:t.txtSend},on:{input:function(e){e.target.composing||(t.txtSend=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),o("a",{staticClass:"send",attrs:{href:"javascript:"},on:{click:t.sendMess}},[t._v("发送")])])])},staticRenderFns:[]};var _=o("Z0/y")(I,w,!1,function(t){o("q/7U")},null,null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},S=o("Z0/y")({data:function(){return{}}},R,!1,null,null,null).exports,y={data:function(){return{curListItem:null,listData:[]}},computed:{roomList:function(){return this.listData.reverse()}},methods:{getUserRoomList:function(){var t=this,e=JSON.parse(sessionStorage.getItem("userInfo")),o=window.SYRESOURCE.userRooms;this.$http.get(o,{params:e}).then(function(e){200===e.body.code?t.listData=e.body.data||[]:t.errHandle()},function(t){})},errHandle:function(){},roomCheck:function(t){this.curListItem!==t&&(this.curListItem=t,this._$eventBus.$emit("roomChecked",t))}},mounted:function(){this.getUserRoomList(),this._$eventBus.$on("roomCreated",this.getUserRoomList),this._$eventBus.$on("roomJoined",this.getUserRoomList)}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"room-list"},t._l(t.roomList,function(e){return o("li",{staticClass:"room-list-item",on:{click:function(o){t.roomCheck(e)}}},[o("span",{staticClass:"room-list-item-content",attrs:{title:e},domProps:{textContent:t._s(e)}})])}))},staticRenderFns:[]};var x=o("Z0/y")(y,b,!1,function(t){o("ROU6")},null,null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prompt-part"},[e("input",{staticClass:"prompt-part-input",attrs:{type:"text"}}),e("button",{staticClass:"prompt-part-btn"},[this._v("确定")])])}]};var P={components:{inputPart:o("Z0/y")({data:function(){return{}}},N,!1,function(t){o("haKB")},null,null).exports},data:function(){return{roomName:"",roomPassword:"",toolList:[{tit:"加入",isActive:!1,action:"search"},{tit:"创建",isActive:!1,action:"create"}],curToolListItem:null,searchResultList:[],curResultItem:null,isShowResultForm:!1,userInfo:null}},methods:{toolSelect:function(t){this.curItemDerective(),this.curToolListItem=t,t.isActive=!0,this.searchResultList=[]},curItemDerective:function(){this.curToolListItem&&(this.curToolListItem.isActive=!1),this.curToolListItem=null,this.roomName=null,this.roomPassword=null,this.searchResultList=[],this.isShowResultForm=!1,this.curResultItem&&(this.curResultItem.isActive=!1),this.curResultItem=null},isShowCalc:function(t){return this.curToolListItem&&this.curToolListItem.action===t},toolFormConfirm:function(){switch(this.curToolListItem.action){case"create":return this.roomCreate();case"search":return this.roomSearch();default:return!1}},roomCreate:function(){var t=this;if(!this.roomPassword||!this.roomName)return!1;var e=window.SYRESOURCE.rooms,o={roomPassword:this.roomPassword,roomName:this.roomName,userId:this.userInfo.userId};this.$http.post(e,{params:o}).then(function(e){t.roomCreateHandle(e).then(t.roomCreateSucceed,t.roomCreateFailed)},function(t){})},roomCreateHandle:function(t){return new d.a(function(e,o){var s;200===(s=t.body.code)?e():o(s)})},roomCreateSucceed:function(){this._$eventBus.$emit("roomCreated")},roomCreateFailed:function(t){alert("新建失败！")},roomSearch:function(){var t=this;if(!this.roomName)return!1;var e=window.SYRESOURCE.rooms,o={roomName:this.roomName};this.$http.get(e,{params:o}).then(function(e){t.roomSearchHandle(e).then(t.roomSearchSucceed,t.roomSearchFailed)},function(t){})},roomSearchHandle:function(t){return new d.a(function(e,o){var s;200===(s=t.body.code)?e(t):o(s)})},roomSearchSucceed:function(t){this.searchResultList=t.body.data},roomSearchFailed:function(t){alert("搜索失败！")},joinRoomClickHandle:function(t){this.curResultItem!==t&&(this.curResultItem&&(this.curResultItem.isActive=!1),this.curResultItem=t,t.isActive=!0,this.isShowResultForm=!0)},roomJoinComfirm:function(){var t=this;if(!this.roomPassword)return!1;var e=window.SYRESOURCE.roomMembers,o={roomPassword:this.roomPassword,roomName:this.curResultItem.roomName,userId:this.userInfo.userId};this.$http.post(e,{params:o}).then(function(e){t.roomCreateHandle(e).then(200===e.body.code?t._$eventBus.$emit("roomJoined"):alert("加入房间失败！"))},function(t){})}},mounted:function(){this.userInfo=JSON.parse(sessionStorage.getItem("userInfo"))}},k={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tool-part",on:{mouseleave:t.curItemDerective}},[o("ul",{staticClass:"tool-part-list"},t._l(t.toolList,function(e){return o("li",{staticClass:"tool-part-list-item",class:{active:e.isActive}},[o("span",{domProps:{textContent:t._s(e.tit)},on:{click:function(o){t.toolSelect(e,o)}}})])})),t._v(" "),o("div",{staticClass:"tool-part-form-box"},[o("form",{key:"search",staticClass:"tool-part-form"},[o("div",[o("transition",{attrs:{name:"shrink"}},[o("input",{directives:[{name:"show",rawName:"v-show",value:t.curToolListItem,expression:"curToolListItem"},{name:"model",rawName:"v-model.trim",value:t.roomName,expression:"roomName",modifiers:{trim:!0}}],staticClass:"tool-part-input",attrs:{type:"text",placeholder:"房间名"},domProps:{value:t.roomName},on:{input:function(e){e.target.composing||(t.roomName=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])],1),t._v(" "),o("div",[o("transition",{attrs:{name:"shrink"}},[o("input",{directives:[{name:"show",rawName:"v-show",value:t.isShowCalc("create"),expression:"isShowCalc('create')"},{name:"model",rawName:"v-model.trim",value:t.roomPassword,expression:"roomPassword",modifiers:{trim:!0}}],staticClass:"tool-part-input",attrs:{type:"text",placeholder:"房间口令"},domProps:{value:t.roomPassword},on:{input:function(e){e.target.composing||(t.roomPassword=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])],1),t._v(" "),o("div",{staticClass:"tool-part-form-confirm"},[o("a",{directives:[{name:"show",rawName:"v-show",value:t.curToolListItem,expression:"curToolListItem"}],staticClass:"tool-part-confirm-btn",on:{click:t.toolFormConfirm}},[t._v("确定")])])]),t._v(" "),o("ul",{staticClass:"tool-part-result"},[t.isShowResultForm?o("li",{staticClass:"tool-part-result-form"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.roomPassword,expression:"roomPassword",modifiers:{trim:!0}}],staticClass:"tool-part-result-input",attrs:{type:"text",placeholder:"请输入房间口令"},domProps:{value:t.roomPassword},on:{input:function(e){e.target.composing||(t.roomPassword=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),o("span",{staticClass:"tool-part-result-btn",on:{click:t.roomJoinComfirm}},[t._v("确定")])]):t._e(),t._v(" "),t._l(t.searchResultList,function(e){return o("li",{staticClass:"tool-part-result-item",class:{"result-active":e.isActive},domProps:{textContent:t._s(e.roomName)},on:{click:function(o){t.joinRoomClickHandle(e)}}})})],2)])])},staticRenderFns:[]};var $={data:function(){return{listData:[],roleType:{0:"房主"}}},methods:{getRoomUserList:function(t){var e=this,o={roomName:t},s=window.SYRESOURCE.roomMembers;this.$http.get(s,{params:o}).then(function(t){200===t.body.code?e.succeedHandle(t):e.errHandle()},function(t){})},succeedHandle:function(t){t.body.data[0]&&(t.body.data[0].role=this.roleType[0]),this.listData=t.body.data},errHandle:function(){}},mounted:function(){this.getRoomUserList(),this._$eventBus.$on("roomChecked",this.getRoomUserList)}},L={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"user-list"},t._l(t.listData,function(e){return o("li",{staticClass:"user-list-item"},[o("span",{staticClass:"user-list-item-content",attrs:{title:e.nickname},domProps:{textContent:t._s(e.nickname)}}),t._v(" "),o("span",{staticClass:"user-list-item-role",domProps:{textContent:t._s(e.role)}})])}))},staticRenderFns:[]};var U={components:{chatPart:_,navPart:S,roomListPart:x,toolPart:o("Z0/y")(P,k,!1,function(t){o("GY21")},null,null).exports,userListPart:o("Z0/y")($,L,!1,function(t){o("qwtR")},null,null).exports},data:function(){return{}},methods:{bodyResize:function(){document.querySelector("body").style.height=window.innerHeight+"px"}},mounted:function(){this.bodyResize(),window.addEventListener("resize",this.bodyResize)}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("div",{staticClass:"home-room-list"},[e("toolPart"),this._v(" "),e("roomListPart")],1),this._v(" "),e("div",{staticClass:"home-room-chatting"},[e("div",{staticClass:"home-room-chatting-list"}),this._v(" "),e("div",{staticClass:"home-room-chatting-current"},[e("chatPart")],1)]),this._v(" "),e("div",{staticClass:"home-room-member"},[e("userListPart")],1)])},staticRenderFns:[]};var F=o("Z0/y")(U,E,!1,function(t){o("Kulh")},null,null).exports;s.a.use(r.a);var M=new r.a({routes:[{path:"/",redirect:"/user"},{path:"/user",name:"user",component:c,redirect:"/user/signIn",children:[{path:"signIn",name:"signIn",component:p},{path:"signUp",name:"signUp",component:C}]},{path:"/home",name:"home",component:F}]}),O=o("lLMz");s.a.config.productionTip=!1,s.a.use(O.a),s.a.use({install:function(t){t.prototype._$eventBus=new t}}),new s.a({el:"#app",router:M,components:{App:i},template:"<App/>"})},ROU6:function(t,e){},haKB:function(t,e){},jFyt:function(t,e){},"q/7U":function(t,e){},qwtR:function(t,e){},y1eR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9672263cb8e7a7f86568.js.map