(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_other-students-students"],{"0d85":function(t,e,n){"use strict";var i=n("f139"),a=n.n(i);a.a},2113:function(t,e,n){"use strict";n.r(e);var i=n("5b11"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"2c23":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.search-box[data-v-6f0150b6]{width:%?686?%;height:%?72?%;flex-direction:row;display:flex;justify-content:space-between;margin:%?36?% 0 0 %?32?%}[data-v-6f0150b6] .u-search__content{border:%?4?% solid #c1c8d8!important;border-radius:%?10?%!important}[data-v-6f0150b6] .u-search__action{background-color:#5d4fdc;border:%?4?% solid #5d4fdc;border-radius:%?10?%;color:#fff;height:%?64?%;line-height:%?64?%}.type[data-v-6f0150b6]{width:%?718?%;background:#fff;box-shadow:%?0?% %?0?% %?8?% %?0?% rgba(0,0,0,.1);border-radius:%?16?%;padding:%?32?%;box-sizing:border-box;margin:%?16?% auto}.type .title[data-v-6f0150b6]{height:%?48?%;font-size:%?32?%;color:#2a2a2a;line-height:%?48?%}.type .type-item[data-v-6f0150b6]{display:flex;height:%?90?%;align-items:center}.type .type-item .item-title[data-v-6f0150b6]{flex:1;color:#888}.type .small-colum[data-v-6f0150b6]{display:flex;justify-content:space-between;min-height:%?80?%;font-size:%?28?%;color:#888;line-height:1.4}.type .small-colum div[data-v-6f0150b6]{width:45%;text-align:center}',""]),t.exports=e},"4ba5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={zPaging:n("60eb").default,uSearch:n("8f67").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("z-paging",{ref:"paging",staticClass:"page",staticStyle:{"background-color":"#f8f8f8"},attrs:{"loading-more-no-more-text":"THE END","default-page-size":20,"use-cache":!0,"cache-key":"list"},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[n("v-uni-view",{staticClass:"search-box"},[n("u-search",{attrs:{placeholder:"搜索学生学号或姓名"},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.getList(1,10)},custom:function(e){arguments[0]=e=t.$handleEvent(e),t.getList(1,10)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),n("div",{staticClass:"type"},[n("div",{staticClass:"small-colum"},[n("div",[t._v("学生姓名")]),n("div",[t._v("学号")])]),t._l(t.list,(function(e){return n("div",{key:e.userId,staticClass:"small-colum",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goStudentDetails(e)}}},[n("div",{staticStyle:{flex:"1","text-align":"left"}},[n("v-uni-image",{staticStyle:{width:"60rpx",height:"60rpx","vertical-align":"middle","margin-right":"10rpx"},attrs:{src:e.avatar}}),t._v(t._s(e.nickName))],1),n("div",[t._v(t._s(e.studentNo))])])}))],2)],1)},r=[]},"5b11":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("d6eb"),a={data:function(){return{list:[],i:null,keyword:""}},onLoad:function(t){this.i=t.i?JSON.parse(t.i):""},methods:{getList:function(t,e){var n=this;(0,i.deptStuList)({deptId:this.i.deptId?this.i.deptId:"",keyword:this.keyword,pageNum:t,pageSize:e}).then((function(t){n.list=t.rows,n.$refs.paging.complete(t.rows)})).catch((function(t){n.$refs.paging.complete(!1)}))},goStudentDetails:function(t){uni.navigateTo({url:"/pages_other/student-details/student-details?i="+JSON.stringify(t)})},goStudentAdd:function(){uni.navigateTo({url:"/pages_other/student-add/student-add"})}}};e.default=a},6650:function(t,e,n){"use strict";n.r(e);var i=n("4ba5"),a=n("2113");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0d85");var s,o=n("f0c5"),d=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6f0150b6",null,!1,i["a"],s);e["default"]=d.exports},d6eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deptStuList=a;var i=n("03f5");function a(t){return(0,i.get)("/system/user/deptStuList",t)}},f139:function(t,e,n){var i=n("2c23");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2bb671e3",i,!0,{sourceMap:!1,shadowMode:!1})}}]);