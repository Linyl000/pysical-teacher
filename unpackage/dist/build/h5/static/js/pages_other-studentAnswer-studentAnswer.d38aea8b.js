(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_other-studentAnswer-studentAnswer"],{2614:function(t,e,a){"use strict";a.r(e);var i=a("ac32"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"611a":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={zPaging:a("60eb").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("z-paging",{ref:"paging",staticClass:"page",attrs:{"loading-more-no-more-text":"THE END"},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[a("v-uni-view",{staticClass:"course-des-box"},[a("v-uni-view",{staticClass:"block_3"}),a("v-uni-text",{staticClass:"text_7",attrs:{lines:"1"}},[t._v(t._s(t.nickName)+"本次作业详情")])],1),t._l(t.list,(function(e,i){return a("div",{key:e.id,staticClass:"question"},[a("v-uni-view",{staticClass:"course-des-box2"},[a("v-uni-view",{staticClass:"block_3"}),a("v-uni-text",{staticClass:"text_7",attrs:{lines:"1"}},[t._v("题目"+t._s(i+1)+" ("+t._s(e.titleScore)+"分)")])],1),a("div",{staticClass:"title"},[t._v(t._s(e.titleContent))]),a("div",{staticClass:"stu-arr"},[t._v("学生答案："),"0"===e.titleType?a("span",[t._v(t._s(e.answer))]):"1"===e.titleType?a("span",[t._v(t._s(e.answerArr))]):"2"===e.titleType?a("span",[t._v(t._s("0"===e.answer?"正确":"错误"))]):"3"===e.titleType?a("span",[a("v-uni-video",{staticStyle:{width:"360rpx",height:"220rpx"},attrs:{src:e.answer}})],1):t._e()]),a("div",{staticClass:"corr-arr"},[t._v("正确答案："),"0"===e.titleType||"1"===e.titleType?a("span",[t._v(t._s(e.correctAnswer))]):"2"===e.titleType?a("span",[t._v(t._s("0"===e.correctAnswer?"正确":"错误"))]):"3"===e.titleType?a("span",[a("v-uni-video",{staticStyle:{width:"360rpx",height:"220rpx"},attrs:{src:e.correctAnswer}})],1):t._e(),"3"===e.titleType?a("div",{staticStyle:{color:"rgba(93, 79, 220, 1)","text-align":"center","font-size":"30rpx"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goVideoDetails(e)}}},[t._v("点击查看详情分析>>")]):t._e()])],1)}))],2)},s=[]},"65a9":function(t,e,a){"use strict";var i=a("b6e9"),n=a.n(i);n.a},"782f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.examDetail=n;var i=a("03f5");function n(t){return(0,i.get)("/exam/examDetail/list",t)}},"8c8c":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".page[data-v-f7381e14]{background-color:#f8f8f8}.question[data-v-f7381e14]{width:%?718?%;background:#fff;box-shadow:%?0?% %?0?% %?8?% %?0?% rgba(0,0,0,.1);border-radius:%?16?%;padding:%?32?%;box-sizing:border-box;margin:%?16?% auto;margin-bottom:%?20?%;line-height:%?60?%}.question .course-des-box2[data-v-f7381e14]{flex-direction:row;display:flex;align-items:center}.question .block_3[data-v-f7381e14]{background-color:#5d4fdc;border-radius:%?8?%;width:%?16?%;height:%?26?%;display:flex;flex-direction:column}.question .text_7[data-v-f7381e14]{margin-left:%?10?%;font-weight:600;font-size:%?30?%}.name[data-v-f7381e14]{font-size:%?42?%;font-weight:600;padding:%?22?% %?20?%;background-color:#fff}.stu-intro[data-v-f7381e14]{background-color:#fff}.stu-intro .left[data-v-f7381e14]{padding:0 %?20?% %?30?%;flex:1;display:flex;flex-direction:column;justify-content:space-between}.stu-intro .left .text_3[data-v-f7381e14]{height:%?64?%;overflow-wrap:break-word;font-size:%?36?%;font-weight:600;white-space:nowrap;line-height:%?64?%}.stu-intro .left .text_4[data-v-f7381e14]{height:%?36?%;overflow-wrap:break-word;font-size:%?24?%;white-space:nowrap;line-height:%?36?%;margin-top:%?8?%}",""]),t.exports=e},"91c3":function(t,e,a){"use strict";a.r(e);var i=a("611a"),n=a("2614");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("65a9");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"f7381e14",null,!1,i["a"],r);e["default"]=c.exports},ac32:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("782f"),n={data:function(){return{examRecordId:null,list:[],examPaperName:"",nickName:"",studentNo:""}},onLoad:function(t){this.nickName=JSON.parse(t.student).nickName,this.studentNo=JSON.parse(t.student).studentNo,this.examPaperName=JSON.parse(t.student).examPaperName,this.examRecordId=JSON.parse(t.student).id},methods:{getList:function(t,e){var a=this;(0,i.examDetail)({pageNum:t,pageSize:e,examRecordId:this.examRecordId}).then((function(t){a.list=t.rows,a.$refs.paging.complete(t.rows)})).catch((function(t){a.$refs.paging.complete(!1)}))},goVideoDetails:function(t){uni.navigateTo({url:"/pages_other/video-details/video-details?video="+JSON.stringify(t)})}}};e.default=n},b6e9:function(t,e,a){var i=a("8c8c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("29ca27f3",i,!0,{sourceMap:!1,shadowMode:!1})}}]);