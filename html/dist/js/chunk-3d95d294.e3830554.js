(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d95d294"],{"3bf7":function(e,l,t){"use strict";var a=t("a4ad"),i=t.n(a);i.a},"67c5":function(e,l,t){},"72bf":function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"check_tab"},[t("el-tabs",{staticClass:"tab_class",attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"其他设备"}},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{label:"序号",width:"50",type:"index",sortable:""}}),t("el-table-column",{attrs:{prop:"fileName",label:"设备类型",sortable:"","min-width":"110px"}}),t("el-table-column",{attrs:{prop:"keyWords",label:"设备厂商",sortable:"","min-width":"110px"}}),t("el-table-column",{attrs:{prop:"hitRate",label:"设备名称",sortable:"","min-width":"110px"}}),t("el-table-column",{attrs:{prop:"classified",label:"序列号",sortable:"","min-width":"100px"}}),t("el-table-column",{attrs:{prop:"classified",label:"密级",sortable:""}}),t("el-table-column",{attrs:{prop:"classified",label:"安全状态",sortable:"","min-width":"110px"}}),t("el-table-column",{attrs:{prop:"classified",label:"设备VID",sortable:"","min-width":"100px"}}),t("el-table-column",{attrs:{prop:"classified",label:"产品PID",sortable:"","min-width":"100px"}}),t("el-table-column",{attrs:{prop:"classified",label:"首次使用时间",sortable:"","min-width":"140px"}}),t("el-table-column",{attrs:{prop:"classified",label:"最后使用时间",sortable:"","min-width":"140px"}}),t("el-table-column",{attrs:{prop:"classified",label:"违规提示",sortable:"","min-width":"110px"}}),t("el-table-column",{attrs:{prop:"classified",label:"违规参考",sortable:"","min-width":"110px"}})],1)],1)],1),t("div",{staticClass:"check_dispose"},[t("el-button",{on:{click:function(l){e.showDialog=!0}}},[e._v("设置检查时间")]),t("el-select",{attrs:{placeholder:"下载台账模板"},model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-select",{attrs:{placeholder:"导入USB台账"},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}},e._l(e.options2,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-select",{attrs:{placeholder:"导入USB信息"},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}},e._l(e.options3,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("time-dialog",{attrs:{dialogVisible:e.showDialog},on:{"update:dialogVisible":function(l){e.showDialog=l},"update:dialog-visible":function(l){e.showDialog=l}}})],1)},i=[],s=t("945b"),o={components:{timeDialog:s["a"]},data:function(){return{tableData:[{fileName:"文件名称",keyWords:"命中关键词",hitRate:"关键词命中率",classified:"涉密情况"}],showDialog:!1,options:[{value:"选项1",label:"下载台账模板"}],value1:"",options2:[{value:"选项1",label:"导入涉密USB台账"},{value:"选项2",label:"导入非涉密USB台账"},{value:"选项3",label:"导入全部USB台账"}],value2:"",options3:[{value:"选项1",label:"导入可信USB信息"},{value:"选项2",label:"导入违规USB信息"},{value:"选项3",label:"导入一般USB信息"}],value3:""}},methods:{handleSelectionChange:function(e){this.multipleSelection=e}}},n=o,c=(t("9079"),t("2877")),r=Object(c["a"])(n,a,i,!1,null,"6e3e2e74",null);l["default"]=r.exports},9079:function(e,l,t){"use strict";var a=t("67c5"),i=t.n(a);i.a},"945b":function(e,l,t){"use strict";var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"check_dialog"},[t("el-dialog",{attrs:{modal:!1,visible:e.dialogVisible,"modal-append-to-body":!1,"append-to-body":!0,"show-close":!1,"close-on-click-modal":!1,top:"38vh"},on:{close:function(l){return e.onClose()}}},[t("div",{staticClass:"title_class",attrs:{slot:"title"},slot:"title"},[t("span",[t("img",{attrs:{src:"/images/config_dlg_title.png",alt:""}})]),t("span",[e._v("常规USB检查配置")])]),t("div",{staticClass:"content_class"},[t("div",{staticClass:"check_type"},[t("span",[e._v("检查范围")])]),t("div",{staticClass:"time_class common"},[t("el-checkbox",{on:{change:e.unlimitedTimeChange},model:{value:e.timeChecked,callback:function(l){e.timeChecked=l},expression:"timeChecked"}},[e._v("不限时间")]),t("div",{staticStyle:{padding:"10px 0 0"}},[t("span",{staticStyle:{padding:"0 13px 0 18px"}},[e._v("开始时间")]),t("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",size:"mini",disabled:e.timeDiable},model:{value:e.startTime,callback:function(l){e.startTime=l},expression:"startTime"}}),t("span",{staticStyle:{padding:"0 18px 0 18px"}},[e._v("结束时间")]),t("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",size:"mini",disabled:e.timeDiable},model:{value:e.endTime,callback:function(l){e.endTime=l},expression:"endTime"}})],1)],1)]),t("div",{staticClass:"footer_class",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(l){return e.onClose()}}},[e._v("应用")]),t("el-button",{attrs:{size:"mini"},on:{click:function(l){return e.onClose()}}},[e._v("取 消")])],1)])],1)},i=[],s={props:["dialogVisible"],components:{},data:function(){return{timeDiable:!0,timeChecked:!0,startTime:"",endTime:""}},methods:{onClose:function(){this.dialogVisible&&this.$emit("update:dialogVisible",!1)},unlimitedTimeChange:function(e){console.log(e),this.timeDiable=!this.timeDiable}},computed:{}},o=s,n=(t("3bf7"),t("2877")),c=Object(n["a"])(o,a,i,!1,null,"d7af1be4",null);l["a"]=c.exports},a4ad:function(e,l,t){}}]);
//# sourceMappingURL=chunk-3d95d294.e3830554.js.map