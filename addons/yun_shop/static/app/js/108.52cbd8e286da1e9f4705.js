webpackJsonp([108],{EJWQ:function(e,t,n){var a=n("akYB");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("03e05b32",a,!0,{})},G1xk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),s=n("Tg7E"),i={data:function(){return{member:{},task:{}}},activated:function(){this.getData()},methods:{getData:function(){var e=this;$http.get("plugin.team-rewards.frontend.controllers.task.index",{}," ").then(function(t){1===t.result?(e.member=t.data.member,e.task=t.data.task):Object(s.Toast)(t.msg)},function(e){console.log(e)})}},components:{cTitle:a.a}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"task_center"}},[n("c-title",{attrs:{hide:!1,text:"任务中心"}}),e._v(" "),e.member.member?n("div",{staticClass:"header"},[n("div",{staticClass:"use-header"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.member.member.avatar_image}})]),e._v(" "),n("ul",[n("li",{staticClass:"name"},[e._v(e._s(e.member.member.nickname))]),e._v(" "),e.member.level?n("li",[e._v("等级名称:"+e._s(e.member.level.level_name))]):e._e()])]),e._v(" "),n("div",{staticClass:"time"},[n("yd-icon",{staticClass:"iconfont icon-jiangli1",attrs:{custom:"",size:"1.125rem",color:"#f5d59c"}}),e._v(" "),n("font",[n("span",[e._v("奖励：")]),e._v(e._s(e.task.price)+"元")])],1)]):e._e(),e._v(" "),e._m(0),e._v(" "),n("ul",{staticClass:"list_box"},[e.task.is_child?n("li",{staticClass:"list"},[n("i",{staticClass:"iconfont icon-taskconter"}),e._v(" "),n("span",{staticClass:"text"},[e._v("直推订单数量满"+e._s(e.task.is_child.all)+"笔")]),e._v(" "),Number(e.task.is_child.complete)<Number(e.task.is_child.all)?n("span",{staticClass:"right"},[e._v(e._s(e.task.is_child.complete)+"/"+e._s(e.task.is_child.all))]):e._e(),e._v(" "),Number(e.task.is_child.complete)>=Number(e.task.is_child.all)?n("span",{staticClass:"right complete"}):e._e()]):e._e(),e._v(" "),e.task.is_self?n("li",{staticClass:"list"},[n("i",{staticClass:"iconfont icon-taskconter"}),e._v(" "),n("span",{staticClass:"text"},[e._v("自购订单数量满"+e._s(e.task.is_self.all)+"笔")]),e._v(" "),Number(e.task.is_self.complete)<Number(e.task.is_self.all)?n("span",{staticClass:"right"},[e._v(e._s(e.task.is_self.complete)+"/"+e._s(e.task.is_self.all))]):e._e(),e._v(" "),Number(e.task.is_self.complete)>=Number(e.task.is_self.all)?n("span",{staticClass:"right complete"}):e._e()]):e._e(),e._v(" "),e.task.is_child_self?n("li",{staticClass:"list"},[n("i",{staticClass:"iconfont icon-taskconter"}),e._v(" "),n("span",{staticClass:"text"},[e._v("直推+自购订单数量满"+e._s(e.task.is_child_self.all)+"笔")]),e._v(" "),Number(e.task.is_child_self.complete)<Number(e.task.is_child_self.all)?n("span",{staticClass:"right"},[e._v(e._s(e.task.is_child_self.complete)+"/"+e._s(e.task.is_child_self.all))]):e._e(),e._v(" "),Number(e.task.is_child_self.complete)>=Number(e.task.is_child_self.all)?n("span",{staticClass:"right complete"}):e._e()]):e._e()])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"left"}),this._v(" "),t("span",[this._v("奖励任务")]),this._v(" "),t("div",{staticClass:"right"})])}]};var l=n("VU/8")(i,r,!1,function(e){n("EJWQ")},"data-v-bd97073e",null);t.default=l.exports},akYB:function(e,t,n){var a=n("kxFB");(e.exports=n("FZ+f")(!1)).push([e.i,'\n@charset "UTF-8";\n#task_center[data-v-bd97073e] {\n  padding-top: 40px;\n}\n#task_center .header[data-v-bd97073e] {\n    width: 100%;\n}\n#task_center .header .use-header[data-v-bd97073e] {\n      background-color: #3b3b4f;\n      padding: 1.25rem;\n      position: relative;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#task_center .header .use-header .img[data-v-bd97073e] {\n        width: 3.75rem;\n        height: 3.75rem;\n        border: solid 0.125rem #fff;\n        border-radius: 50%;\n        margin-right: 1rem;\n        overflow: hidden;\n}\n#task_center .header .use-header .img img[data-v-bd97073e] {\n          width: 100%;\n}\n#task_center .header .use-header ul[data-v-bd97073e] {\n        text-align: left;\n}\n#task_center .header .use-header ul li[data-v-bd97073e] {\n          line-height: 1.75rem;\n          color: #fff;\n          font-size: 16px;\n}\n#task_center .header .use-header ul li[data-v-bd97073e]:last-child {\n          font-size: 14px;\n}\n#task_center .header .use-header ul .name[data-v-bd97073e] {\n          font-weight: bold;\n}\n#task_center .header .use-header .button[data-v-bd97073e] {\n        width: 21%;\n        height: 1.625rem;\n        background-color: #fff;\n        border-radius: 0.8125rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 0 0.5rem;\n        position: absolute;\n        margin-top: 1.0625rem;\n        right: 0.625rem;\n}\n#task_center .header .use-header .button input[data-v-bd97073e] {\n          border: none;\n          color: #efcb7b;\n}\n#task_center .header .use-header .button i[data-v-bd97073e] {\n          color: #efcb7b;\n          font-size: 1.25rem;\n          line-height: 1.625rem;\n}\n#task_center .header .time[data-v-bd97073e] {\n      background-color: rgba(59, 59, 79, 0.8);\n      text-align: left;\n      height: 2.25rem;\n      padding: 0 1.25rem;\n}\n#task_center .header .time font[data-v-bd97073e] {\n        font-size: 14px;\n        line-height: 2.25rem;\n        color: #f5d59c;\n}\n#task_center .header .time font span[data-v-bd97073e] {\n          font-weight: bold;\n}\n#task_center .header .time i[data-v-bd97073e] {\n        margin-right: 0.625rem;\n}\n#task_center .title-box[data-v-bd97073e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 3.125rem;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#task_center .title-box .left[data-v-bd97073e] {\n      margin-left: 0.875rem;\n      width: 4%;\n      height: 0.0625rem;\n      background-color: #ccc;\n}\n#task_center .title-box span[data-v-bd97073e] {\n      font-size: 16px;\n      line-height: 1.875rem;\n      margin: 0 0.625rem;\n}\n#task_center .title-box .right[data-v-bd97073e] {\n      width: 4%;\n      height: 0.0625rem;\n      background-color: #ccc;\n      margin-right: 0.875rem;\n}\n#task_center .list_box[data-v-bd97073e] {\n    background: #fff;\n}\n#task_center .list_box .list[data-v-bd97073e] {\n      border-bottom: solid 0.0625rem #ebebeb;\n      padding: 0.875rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-size: 16px;\n}\n#task_center .list_box .list .iconfont[data-v-bd97073e] {\n        margin-right: 0.625rem;\n        color: #f5d59c;\n        font-size: 36px;\n}\n#task_center .list_box .list .text[data-v-bd97073e] {\n        max-width: 15rem;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        text-align: left;\n}\n#task_center .list_box .list .right[data-v-bd97073e] {\n        position: absolute;\n        right: 0.875rem;\n        color: #f5d59c;\n        font-size: 18px;\n}\n#task_center .list_box .list .complete[data-v-bd97073e] {\n        width: 2.5rem;\n        height: 2.5rem;\n        background-image: url('+a(n("oCFC"))+");\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 2.5rem;\n        transform: rotate(-30deg);\n        -ms-transform: rotate(-30deg);\n        /* Internet Explorer */\n        -moz-transform: rotate(-30deg);\n        /* Firefox */\n        -webkit-transform: rotate(-30deg);\n        /* Safari 和 Chrome */\n        -o-transform: rotate(-30deg);\n        /* Opera */\n}\n",""])},oCFC:function(e,t,n){e.exports=n.p+"static/app/img/task_complete.daaea6b.png"}});