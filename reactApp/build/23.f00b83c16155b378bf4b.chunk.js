webpackJsonp([23,55],{884:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){return{changeRoute:function(e){return t(a.i(u.push)(e))}}}var n=a(1),l=n&&n.__esModule?function(){return n["default"]}:function(){return n};a.d(l,"a",l);var d=a(345),c=d&&d.__esModule?function(){return d["default"]}:function(){return d};a.d(c,"a",c);var u=a(151),p=u&&u.__esModule?function(){return u["default"]}:function(){return u};a.d(p,"a",p);var h=a(97),f=h&&h.__esModule?function(){return h["default"]}:function(){return h};a.d(f,"a",f);var v=(a(96),a(958)),m=a(975),_=a(346),g=_&&_.__esModule?function(){return _["default"]}:function(){return _};a.d(g,"a",g);var y=a(973);a.d(e,"Cast",function(){return M});var b=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&r)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a||(a=r||{});if(1===s)a.children=i;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),k=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),x=a(150),S=b("div",{className:"bigLoader"},void 0,b("i",{},void 0,b("img",{src:"https://kalakar.pro/kalakar/demo/other/assets/img/loader.svg"})),"Loading....."),P=b("div",{className:"col-md-12 col-sm-12 col-xs-12"},void 0,b("h1",{},void 0,"STEP - 3 : CAST ")),C=b("div",{className:"row"},void 0,b("div",{className:"col-md-12 col-sm-12 col-lg-12 col-xs-12"},void 0,b("span",{className:"dragTitle"},void 0,"Drag and Drop To Determine Order"))),N=b("div",{className:"col-md-6 col-sm-6 col-lg-6 col-xs-5"},void 0,b("b",{},void 0,"ALL CAST :")),T=b("label",{},void 0,"Avg Daily Rate "),D=b("label",{},void 0,"Duration of Work "),w=b("label",{},void 0,"Work Dates"),j=b("label",{},void 0,"No. Required "),O=b("label",{},void 0,"Gender"),I=b("label",{},void 0,"Write Job Description"),M=function(t){function e(t){o(this,e);var a=i(this,Object.getPrototypeOf(e).call(this,t));return a.openRoute=function(t){a.props.changeRoute(t)},a.handleScheduleChange=function(t,e){a.setState({PDate:e}),a.commonValidate3()},a.state={openPost:!1,location:"",duration:"",PDate:null,Loader:!1,projectList:[],openEditPost:!1},a}return r(e,t),k(e,[{key:"componentDidMount",value:function(){var t=this.props.location.pathname,e=t.split("/Cast/");this.setState({pid:e[1],Loader:!0});var a=this,o={action:"projectDetail",PID:e[1],PUserId:f.a.load("userId")};x.getSetData(o,function(t){"success"==t.status&&a.setState({location:t.data.PLocation,duration:t.data.Pduration,PDate:""===t.data.PostadDate||void 0===t.data.PostadDate?null:new Date(t.data.PostadDate),PTitle:t.data.PTitle,Producedby:t.data.Producedby,Planguage:t.data.Planguage,PStartdate:t.data.PStartdate,PCID:t.data.PCID,Pdescription:t.data.Pdescription,Pstatus:t.data.Pstatus,Loader:!1})}),a.updateProjectList()}},{key:"updateProjectList",value:function(){var t=this.props.location.pathname,e=t.split("/Cast/");this.setState({pid:e[1],Loader:!0});var a=this,o={action:"castNcrew",type:1,PID:e[1],user_id:f.a.load("userId")},a=this;x.getSetData(o,function(t){"success"==t.status&&null!=t.data&&a.setState({projectList:t.data,Loader:!1})})}},{key:"handleOpenPost",value:function(){this.setState({openPost:!0})}},{key:"formatDate",value:function(t){var e=t.getDate(),a=t.getMonth()+1,o=t.getFullYear();e<10&&(e="0"+e),a<10&&(a="0"+a);var i=e+"/"+a+"/"+o;return i}},{key:"handleClosePost",value:function(){this.setState({openPost:!1})}},{key:"handleOpenEdit",value:function(t){this.setState({openEditPost:!0,openId:t})}},{key:"handleCloseEdit",value:function(){this.setState({openEditPost:!1})}},{key:"previous",value:function(){var t=this;t.props.changeRoute("/Projects/Crew/"+t.state.pid)}},{key:"saveCast",value:function(){var t=this;t.props.changeRoute("/my-dashboard/projects")}},{key:"render",value:function(){var t=this;return b("section",{className:"inner-page"},void 0,b(m.a,{open:this.state.openPost,close:this.handleClosePost.bind(this),location:this.state.location,startdate:this.state.PStartdate,duration:this.state.duration,Pdate:this.state.PDate,Project_id:this.state.pid,cast:"Cast",projectTitle:"Create Cast",projectbutton:"Save Cast",titlePro:this.state.PTitle,updateProjectList:this.updateProjectList.bind(this)}),b(v.a,{page:"Cast",ProjectId:this.state.pid}),b("div",{className:"pageRest cell"},void 0,b("div",{className:"Project-inner step2"},void 0,b("div",{className:"row"},void 0,this.state.Loader===!0?S:"",P),b("div",{className:"projectSteps "},void 0,C,b("div",{className:"row"},void 0,N,b("div",{className:"col-md-6 col-sm-6 col-lg-6 col-xs-7",style:{textAlign:"right"}},void 0,b("button",{className:"btn btn-profile2 innerBtn",onTouchTap:this.handleOpenPost.bind(this)},void 0,"Add More Cast Members"))),this.state.projectList.map(function(e,a){return b("div",{className:"row"},e.JobID,b("div",{className:"col-md-2 col-sm-2 col-lg-2 col-xs-6 titleC"},void 0,"Actors"==e.catName&&0!=a?e.catName+a:e.catName),b("div",{className:"col-md-10 col-sm-10 col-lg-10 col-xs-12"},void 0,b("div",{className:"row"},void 0,b("div",{className:"col-md-2 col-sm-2 col-lg-2 col-xs-12 AvgDailyRateImput"},void 0,b("div",{className:"inputGroup"},void 0,T,b("input",{placeholder:"Rs / Day",type:"text",value:e.avg_rate,disabled:!0}))),b("div",{className:"col-md-2 col-sm-2 col-lg-2 col-xs-12 DurationWorkImput"},void 0,b("div",{className:"inputGroup"},void 0,D,b("input",{placeholder:"No. of Days",type:"text",value:e.duration_of_work,disabled:!0}))),b("div",{className:"col-md-2 col-sm-2 col-lg-2 col-xs-12 inputboxControl"},void 0,b("div",{className:"inputGroup dateInput"},void 0,w,b("input",{placeholder:"Work Dates ",type:"text",value:e.post_date,disabled:!0}))),b("div",{className:"col-md-2 col-sm-2 col-lg-2 col-xs-6 NoRequriedInput"},void 0,b("div",{className:"inputGroup"},void 0,j,b("input",{className:"textCenter",placeholder:1,type:"text",value:e.NoOfPossitions,disabled:!0}))),b("div",{className:"col-md-1 col-sm-1 col-lg-1 col-xs-6 genderInput"},void 0,b("div",{className:"inputGroup"},void 0,O,b("div",{className:"selectgroup"},void 0,b("select",{},void 0,b("option",{},void 0,e.gender))))),b("div",{className:"col-md-2 col-sm-2 col-lg-2 col-xs-12 JobDiscriptionInput"},void 0,b("div",{className:"inputGroup"},void 0,I,b("input",{placeholder:"Write Job Discription",type:"text",value:e.post_description,disabled:!0}))),b("div",{className:"col-md-1 col-sm-1 col-lg-1 col-xs-12 PostBtn"},void 0,b("div",{className:"inputGroup"},void 0,b("button",{className:"btn btn-projectEdit innerBtnGrid",onTouchTap:t.handleOpenEdit.bind(t,a)},void 0,"Edit Job"))))))}),b(y.a,{location:this.state.location,duration:this.state.duration,Pdate:this.state.PDate,Project_id:this.state.pid,open:this.state.openEditPost,close:this.handleCloseEdit.bind(this),editObj:this.state.projectList,openId:this.state.openId,cast:"Cast",dialogTitle:"Edit Cast",updateProjectList:this.updateProjectList.bind(this),projectbutton:"Save Cast"})),b("div",{className:"row"},void 0,b("div",{className:"col-md-12 col-sm-12 col-xs-12"},void 0,b("button",{className:"btn-Previous",onClick:this.previous.bind(this)},void 0,"Previous"),b("button",{className:" btn-SaveNext",onClick:this.saveCast.bind(this)},void 0,"Save"))))))}}]),e}(l.a.Component);e["default"]=a.i(d.connect)(null,s)(M)},930:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(108),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(224),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u);var p=a(107),h=p&&p.__esModule?function(){return p["default"]}:function(){return p};a.d(h,"a",h);var f=a(96);a.d(e,"a",function(){return g});var v=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&r)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a||(a=r||{});if(1===s)a.children=i;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),m=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),_=v("br",{}),g=function(t){function e(){return o(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return r(e,t),m(e,[{key:"render",value:function(){return v("div",{},void 0,v(d.a,{className:"pay-ads-pop tagDel",title:this.props.title,modal:!1,open:this.props.open},void 0,v("p",{},void 0,this.props.body),_,v(h.a,{label:f.a.yes,primary:!0,className:"tagDelbtn",onTouchTap:this.props.onSubmit}),v(h.a,{label:f.a.no,primary:!0,className:"tagDelbtn",onTouchTap:this.props.onClose}),v(h.a,{label:"X",primary:!0,className:"cancelBtnPopup",onTouchTap:this.props.onClose})))}}]),e}(n.a.Component)},953:103,954:103,958:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(226),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=(a(930),a(97)),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u),a(96),a.d(e,"a",function(){return _});var p=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&r)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a||(a=r||{});if(1===s)a.children=i;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),h=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),f=(a(150),p("h2",{},void 0,"Start my Project")),v=p("a",{},void 0,"Crew"),m=p("a",{},void 0,"Cast"),_=function(t){function e(t){o(this,e);var a=i(this,Object.getPrototypeOf(e).call(this,t));return a.state={user_id:u.a.load("userId")},a}return r(e,t),h(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.ProjectId;this.setState({pid:null===e||void 0===e?"":e})}},{key:"componentDidMount",value:function(){d()(".sidebar h2").click(function(){d()(this).toggleClass("active"),d()(this).next("ul").toggleClass("open")})}},{key:"render",value:function(){return p("div",{className:"sidebar cell"},void 0,f,p("ul",{},void 0,p("li",{className:"Project Details"===this.props.page?"active":""},void 0,p("a",{href:"/Projects/ProjectDetails/"+this.state.pid},void 0,"Project Details")),""===this.state.pid?p("span",{},void 0,p("li",{className:"Crew"===this.props.page?"active":""},void 0,v),p("li",{className:"Cast"===this.props.page?"active":""},void 0,m)):p("span",{},void 0," ",p("li",{className:"Crew"===this.props.page?"active":""},void 0,p("a",{href:"/Projects/Crew/"+this.state.pid},void 0,"Crew")),p("li",{className:"Cast"===this.props.page?"active":""},void 0,p("a",{href:"/Projects/Cast/"+this.state.pid},void 0,"Cast")))))}}]),e}(n.a.Component)},973:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(107),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(109),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u);var p=a(227),h=p&&p.__esModule?function(){return p["default"]}:function(){return p};a.d(h,"a",h);var f=a(152),v=f&&f.__esModule?function(){return f["default"]}:function(){return f};a.d(v,"a",v);var m=a(346),_=m&&m.__esModule?function(){return m["default"]}:function(){return m};a.d(_,"a",_);var g=a(153),y=a(224),b=y&&y.__esModule?function(){return y["default"]}:function(){return y};a.d(b,"a",b);var k=a(97),x=k&&k.__esModule?function(){return k["default"]}:function(){return k};a.d(x,"a",x);var S=(a(229),a(96)),P=a(108),C=P&&P.__esModule?function(){return P["default"]}:function(){return P};a.d(C,"a",C),a.d(e,"a",function(){return E});var N=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&r)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a||(a=r||{});if(1===s)a.children=i;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),T=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),D=a(150),w=N("div",{className:"bigLoader"},void 0,N("i",{},void 0,N("img",{src:"https://kalakar.pro/kalakar/demo/other/assets/img/loader.svg"})),"Loading....."),j=N("p",{},void 0,"Select Gender"),O=N(v.a,{value:"",primaryText:"Select"}),I=N(v.a,{value:"Male",primaryText:"Male"}),M=N(v.a,{value:"Female",primaryText:"Female"}),L=N(v.a,{value:"Any",primaryText:"Any"}),R=N("p",{},void 0,"Text of your project post",N("span",{})),E=function(t){function e(t){o(this,e);var a=i(this,Object.getPrototypeOf(e).call(this,t));return a.state={user_id:x.a.load("userId"),open:!0,payNowOpen:!1,kalakarParentTypeData:[],kalakarChildTypeData:[],kalakarSubChildTypeData:[],form_data:{category_id:"",childCatId:"",parentCatID:"",Amout:"",duration_of_work:"",avg_rate:"",title:"",post_description:"",gender:"",noOfPositions:"",location:"",post_date:"",PID:"",schedule_work_dates:""},Loader:!1},a}return r(e,t),T(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.openId,a=t.editObj[e];if(void 0!=e&&e!=this.state.openId||1==t.open){this.setState({openId:e,form_data:{duration_of_work:a.duration_of_work,noOfPositions:a.NoOfPossitions,avg_rate:a.avg_rate,gender:a.gender,title:a.title,post_description:a.post_description,category_id:a.category_id,childCatId:a.childId,parentCatID:a.parentId,location:t.location,post_date:t.Pdate,PID:t.Project_id,cNcId:a.id},cast:t.cast,crew:t.crew});var o=this;this.setState({Loader:!0});var i={action:"get_child_cat",category:a.parentId};D.getSetData(i,function(t){o.setState({kalakarChildTypeData:t.data,Loader:!1})});var r={action:"get_child_cat",category:a.childId};D.getSetData(r,function(t){o.setState({kalakarSubChildTypeData:t.data,Loader:!1})})}}},{key:"componentDidMount",value:function(){this.setState({Loader:!0});var t=this,e={action:"get_parent_cat"};D.getSetData(e,function(e){"success"===e.status&&t.setState({kalakarParentTypeData:e.data,Loader:!1})})}},{key:"handleParentChange",value:function(t,e,a){if(e>0){var o=this,i={};i.form_data=this.state.form_data,i.form_data.parentCatID=a,i.form_data.childCatId="",i.form_data.category_id="",o.setState(i),this.state.kalakarChildTypeData=[],this.state.kalakarSubChildTypeData=[];var r={action:"get_child_cat",category:a};D.getSetData(r,function(t){o.setState({kalakarChildTypeData:t.data})})}else{var o=this,i={};i.form_data=this.state.form_data,i.form_data.parentCatID="",i.form_data.childCatId="",i.form_data.category_id="",o.setState(i),o.setState({kalakarChildTypeData:[],kalakarSubChildTypeData:[]})}}},{key:"handleChildChange",value:function(t,e,a){if(e>0){var o=this,i={};i.form_data=this.state.form_data,i.form_data.childCatId=a,i.form_data.category_id="",o.setState(i),o.kalakarSubChildTypeData=[];var r={action:"get_child_cat",category:a};D.getSetData(r,function(t){o.setState({kalakarSubChildTypeData:t.data})})}}},{key:"handleSubChildChange",value:function(t,e,a){var o={};o.form_data=this.state.form_data,o.form_data.category_id=a,this.setState(o),this.validateSelectProf()}},{key:"handleChangeGender",value:function(t,e,a){var o={};o.form_data=this.state.form_data,o.form_data.gender=a,this.setState(o),this.validate3()}},{key:"handleChange",value:function(t,e){var a={};a.form_data=this.state.form_data,a.form_data[t]=e.target.value,this.setState(a),"noOfPositions"==t&&this.validate1(),"title"==t&&this.validate5(),"avg_rate"==t&&this.validateRate(),"post_description"==t&&this.validate2()}},{key:"validateRatereg",value:function(t){var e=/^\d+$/;return e.test(t)}},{key:"validateRate",value:function(){var t=!1;return""===this.state.form_data.avg_rate||null===this.state.form_data.avg_rate||void 0===this.state.form_data.avg_rate?this.setState({avg_rate_error_text:null}):this.validateRatereg(this.state.form_data.avg_rate)?(t=!0,this.setState({avg_rate_error_text:null})):this.setState({avg_rate_error_text:S.a.validNo}),t}},{key:"validateSelectProf",value:function(){var t=!1;return""==this.state.form_data.category_id||null==this.state.form_data.category_id||void 0==this.state.form_data.category_id?this.setState({category_id_text:S.a.required}):(t=!0,this.setState({category_id_text:null})),t}},{key:"validate1",value:function(){var t=!1;return""===this.state.form_data.noOfPositions||null===this.state.form_data.noOfPositions||void 0===this.state.form_data.noOfPositions?this.setState({error_text:S.a.required}):this.validateRatereg(this.state.form_data.noOfPositions)?(t=!0,this.setState({error_text:null})):this.setState({error_text:S.a.validNo}),t}},{key:"validate2",value:function(){var t=!1;return""==this.state.form_data.post_description?this.setState({post_description_error_text:S.a.required}):(t=!0,this.setState({post_description_error_text:null})),t}},{key:"validate3",value:function(){var t=!1;return""==this.state.form_data.gender?this.setState({gender_error_text:S.a.required}):(t=!0,this.setState({gender_error_text:null})),t}},{key:"validate5",value:function(){var t=!1;return""==this.state.form_data.title?this.setState({title_error_text:S.a.required}):(t=!0,this.setState({title_error_text:null})),t}},{key:"clear",value:function(){this.setState({title_error_text:"",error_text:"",gender_error_text:"",post_description_error_text:"",category_id_text:"",avg_rate_error_text:""}),this.props.close()}},{key:"submitData",value:function(){if(!(this.validateSelectProf()&&this.validate1()&&this.validate2()&&this.validate3()&&this.validate5()&&this.validateRate()))return this.validateSelectProf(),this.validate1(),this.validate2(),this.validate3(),this.validate5(),void this.validateRate();this.setState({Loader:!0}),this.state.cast&&(this.state.form_data.type=1),this.state.crew&&(this.state.form_data.type=0);var t=this.state.form_data.post_date,e=t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2),a=this.state.user_id;this.state.form_data.action="updateCastNCrew",this.state.form_data.user_id=a,this.state.form_data.post_date=e,this.state.form_data.schedule_work_dates=e;var o=this;D.getSetData(this.state.form_data,function(t){"success"==t.status&&(o.setState({Loader:!1}),o.props.updateProjectList(),o.props.close("SUCCESS"))})}},{key:"render",value:function(){return N(C.a,{title:this.props.dialogTitle,autoDetectWindowHeight:!0,titleStyle:{textAlign:"center",fontSize:"20px",textColor:"#d01d15",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px",lineHeight:"24px",marginBottom:"10px"},modal:!1,open:this.props.open,autoScrollBodyContent:!0},void 0,N("div",{className:"classifiedPopup"},void 0,N("div",{className:""},void 0,this.state.Loader===!0?w:"",N("ul",{className:"projectEditPop"},void 0,N("li",{className:"basic_profile mb-0"},void 0,N("p",{},void 0,S.a.SelectProfession),N("div",{className:"h_col_4 col_common"},void 0,N("div",{className:"filter"},void 0,0==this.state.form_data.parentCatID?N(h.a,{value:this.state.form_data.childCatId,onChange:this.handleChildChange.bind(this),maxHeight:180,fullWidth:!0,disabled:!0},void 0,N(v.a,{value:"",primaryText:S.a.Select}),this.state.kalakarChildTypeData.map(function(t){return N(v.a,{value:t.category_id,primaryText:t.category_name,style:{cursor:"pointer"}},t.category_name)})):N(h.a,{value:this.state.form_data.parentCatID,onChange:this.handleParentChange.bind(this),maxHeight:180,fullWidth:!0,disabled:!0},void 0,N(v.a,{value:"",primaryText:S.a.typeKalakar}),this.state.kalakarParentTypeData.map(function(t){return N(v.a,{value:t.category_id,primaryText:t.category_name,style:{cursor:"pointer"}},t.category_name)})))),N("div",{className:"h_col_4 col_common"},void 0,N("div",{className:"filter"},void 0,N(h.a,{value:this.state.form_data.childCatId,onChange:this.handleChildChange.bind(this),maxHeight:180,fullWidth:!0,disabled:!0},void 0,N(v.a,{value:"",primaryText:S.a.Select}),this.state.kalakarChildTypeData.map(function(t){return N(v.a,{value:t.category_id,primaryText:t.category_name,style:{cursor:"pointer"}},t.category_name)})))),N("div",{className:"h_col_4 col_common"},void 0,N("div",{className:"filter"},void 0,N(h.a,{value:this.state.form_data.category_id,onChange:this.handleSubChildChange.bind(this),maxHeight:180,fullWidth:!0,errorText:this.state.category_id_text,disabled:!0},void 0,N(v.a,{value:"",primaryText:S.a.SelectProfession}),this.state.kalakarSubChildTypeData.map(function(t){return N(v.a,{value:t.category_id,primaryText:t.category_name,style:{cursor:"pointer"}},t.category_name)})))),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:S.a.SelectProfession},void 0,N(g.a,{src:a(953),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("div",{className:"h_col_4 col_common "},void 0,N("p",{},void 0,S.a.avgProFee),N(u.a,{hintText:S.a.perDay,className:"NormalInputTxt",value:this.state.form_data.avg_rate,onChange:this.handleChange.bind(this,"avg_rate")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.avg_rate_error_text)),N("div",{className:"h_col_4 col_common"},void 0,N("p",{},void 0,S.a.NumberOfPossition),N(u.a,{hintText:S.a.noPos,className:"NormalInputTxt",value:this.state.form_data.noOfPositions,onChange:this.handleChange.bind(this,"noOfPositions")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.error_text)),N("div",{className:"h_col_4 col_common basic_profile"},void 0,j,N("div",{className:"filter"},void 0,N(h.a,{maxHeight:180,fullWidth:!0,value:this.state.form_data.gender,onChange:this.handleChangeGender.bind(this)},void 0,O,I,M,L),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.gender_error_text))),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:S.a.avgProFee},void 0,N(g.a,{src:a(953),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("div",{className:"h_col_12 col_common"},void 0,N("p",{},void 0,"Title of your project post ",N("span",{},void 0,S.a.character)),N(u.a,{id:"text-field2",hintText:"Title of your project post",className:"NormalInputTxt",value:this.state.form_data.title,onChange:this.handleChange.bind(this,"title")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.title_error_text)),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:"Title of your project post"},void 0,N(g.a,{src:a(953),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("div",{className:"h_col_12 col_common"},void 0,R,N(u.a,{id:"text-field2",hintText:"Text of your project post",className:"TextareaTxt",multiLine:!0,rows:5,value:this.state.form_data.post_description,onChange:this.handleChange.bind(this,"post_description")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.post_description_error_text)),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:"Text of your project post"},void 0,N(g.a,{src:a(953),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("span",{className:"add_project_btn"},void 0,N("button",{className:" popbtn-Save",onClick:this.submitData.bind(this)},void 0,this.props.projectbutton)))))),N(d.a,{label:"X",primary:!0,className:"cancelBtnPopup",style:{zIndex:"999"},onTouchTap:this.clear.bind(this)}))}}]),e}(n.a.Component)},975:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(107),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(109),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u);var p=a(227),h=p&&p.__esModule?function(){return p["default"]}:function(){return p};a.d(h,"a",h);var f=a(152),v=f&&f.__esModule?function(){return f["default"]}:function(){return f};a.d(v,"a",v);var m=a(346),_=m&&m.__esModule?function(){return m["default"]}:function(){return m};a.d(_,"a",_);var g=a(153),y=a(224),b=y&&y.__esModule?function(){return y["default"]}:function(){return y};a.d(b,"a",b);var k=a(97),x=k&&k.__esModule?function(){return k["default"]}:function(){return k};a.d(x,"a",x);var S=(a(229),a(96)),P=a(108),C=P&&P.__esModule?function(){return P["default"]}:function(){return P};a.d(C,"a",C),a.d(e,"a",function(){return E});var N=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&r)for(var n in r)void 0===a[n]&&(a[n]=r[n]);else a||(a=r||{});if(1===s)a.children=i;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),T=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),D=a(150),w=N("div",{className:"bigLoader"},void 0,N("i",{},void 0,N("img",{src:"https://kalakar.pro/kalakar/demo/other/assets/img/loader.svg"})),"Loading.....  "),j=N("p",{},void 0,"Select Gender"),O=N(v.a,{value:"",primaryText:"Select"}),I=N(v.a,{value:"Male",primaryText:"Male"}),M=N(v.a,{value:"Female",primaryText:"Female"}),L=N(v.a,{value:"Any",primaryText:"Any"}),R=N("p",{},void 0,"Text of your project post",N("span",{})),E=function(t){function e(t){o(this,e);var a=i(this,Object.getPrototypeOf(e).call(this,t));return a.state={user_id:x.a.load("userId"),open:!0,payNowOpen:!1,kalakarParentTypeData:[],kalakarChildTypeData:[],kalakarSubChildTypeData:[],form_data:{category_id:"",childCatId:"",parentCatID:"",Amout:"",duration_of_work:"",avg_rate:"",title:"",post_description:"",gender:"",noOfPositions:"",location:"",post_date:"",PID:"",startdate:""},Loader:!1},a}return r(e,t),T(e,[{key:"componentWillReceiveProps",value:function(t){var e={};e.form_data=this.state.form_data,e.form_data.location=t.location,e.form_data.duration_of_work=t.duration,e.form_data.post_date=t.Pdate,e.form_data.PID=t.Project_id,e.form_data.title=t.titlePro,e.form_data.schedule_work_dates=t.startdate,e.cast=t.cast,e.crew=t.crew,this.setState(e)}},{key:"componentDidMount",value:function(){this.setState({Loader:!0});var t=this,e={action:"get_parent_cat"};D.getSetData(e,function(e){t.setState({kalakarParentTypeData:e.data,Loader:!1})})}},{key:"handleParentChange",value:function(t,e,a){if(e>0){this.setState({Loader:!0});var o=this,i={};i.form_data=this.state.form_data,i.form_data.parentCatID=a,o.setState(i),this.state.kalakarChildTypeData=[],this.state.kalakarSubChildTypeData=[];var r={action:"get_child_cat",category:a};D.getSetData(r,function(t){o.setState({kalakarChildTypeData:t.data,Loader:!1})})}}},{key:"handleChildChange",value:function(t,e,a){if(e>0){this.setState({Loader:!0});var o=this,i={};i.form_data=this.state.form_data,i.form_data.childCatId=a,o.setState(i),o.kalakarSubChildTypeData=[];var r={action:"get_child_cat",category:a};D.getSetData(r,function(t){o.setState({kalakarSubChildTypeData:t.data,Loader:!1})})}}},{key:"handleSubChildChange",value:function(t,e,a){var o={};o.form_data=this.state.form_data,o.form_data.category_id=a,this.setState(o),this.validateSelectProf()}},{key:"handleChangeGender",value:function(t,e,a){var o={};o.form_data=this.state.form_data,o.form_data.gender=a,this.setState(o),this.validate3()}},{key:"handleChange",value:function(t,e){var a={};a.form_data=this.state.form_data,a.form_data[t]=e.target.value,this.setState(a),"noOfPositions"==t&&this.validate1(),"title"==t&&this.validate5(),"avg_rate"==t&&this.validateRate(),"post_description"==t&&this.validate2()}},{key:"validateRatereg",value:function(t){var e=/^\d+$/;return e.test(t)}},{key:"validateRate",value:function(){var t=!1;return""===this.state.form_data.avg_rate||null===this.state.form_data.avg_rate||void 0===this.state.form_data.avg_rate?this.setState({avg_rate_error_text:null}):this.validateRatereg(this.state.form_data.avg_rate)?(t=!0,this.setState({avg_rate_error_text:null
})):this.setState({avg_rate_error_text:S.a.validNo}),t}},{key:"validateSelectProf",value:function(){var t=!1;return""==this.state.form_data.category_id?this.setState({category_id_text:S.a.required}):(t=!0,this.setState({category_id_text:null})),t}},{key:"validate1",value:function(){var t=!1;return""===this.state.form_data.noOfPositions||null===this.state.form_data.noOfPositions||void 0===this.state.form_data.noOfPositions?this.setState({error_text:S.a.required}):this.validateRatereg(this.state.form_data.noOfPositions)?(t=!0,this.setState({error_text:null})):this.setState({error_text:S.a.validNo}),t}},{key:"validate2",value:function(){var t=!1;return""==this.state.form_data.post_description?this.setState({post_description_error_text:S.a.required}):(t=!0,this.setState({post_description_error_text:null})),t}},{key:"validate3",value:function(){var t=!1;return""==this.state.form_data.gender?this.setState({gender_error_text:S.a.required}):(t=!0,this.setState({gender_error_text:null})),t}},{key:"validate5",value:function(){var t=!1;return""==this.state.form_data.title?this.setState({title_error_text:S.a.required}):(t=!0,this.setState({title_error_text:null})),t}},{key:"clear",value:function(){this.setState({title_error_text:"",gender_error_text:"",post_description_error_text:"",error_text:"",avg_rate_error_text:"",category_id_text:""}),this.props.close()}},{key:"submitData",value:function(){if(!(this.validateSelectProf()&&this.validate1()&&this.validate2()&&this.validate3()&&this.validate5()&&this.validateRate()))return this.validateSelectProf(),this.validate1(),this.validate2(),this.validate3(),this.validate5(),void this.validateRate();this.setState({Loader:!0});var t=this,e=this.state.user_id;this.state.form_data.action="createCastNCrew",this.state.form_data.user_id=e,this.state.cast&&(this.state.form_data.type=1),this.state.crew&&(this.state.form_data.type=0);var a=new Date(this.state.form_data.schedule_work_dates),o=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2);this.state.form_data.schedule_work_dates=o;var i=new Date(this.state.form_data.post_date),r=i.getFullYear()+"-"+("0"+(i.getMonth()+1)).slice(-2)+"-"+("0"+i.getDate()).slice(-2);this.state.form_data.post_date=r,D.getSetData(this.state.form_data,function(e){"success"==e.status&&(t.setState({form_data:{category_id:"",childCatId:"",parentCatID:"",Amout:"",duration_of_work:"",avg_rate:"",title:"",post_description:"",gender:"",noOfPositions:"",location:"",post_date:"",PID:""},Loader:!1}),t.props.updateProjectList(),t.props.close("SUCCESS"))})}},{key:"render",value:function(){return N(C.a,{title:this.props.projectTitle,autoDetectWindowHeight:!0,titleStyle:{textAlign:"center",fontSize:"20px",textColor:"#d01d15",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px",lineHeight:"24px",marginBottom:"10px"},modal:!1,open:this.props.open,autoScrollBodyContent:!0},void 0,N("div",{className:"classifiedPopup"},void 0,N("div",{className:""},void 0,this.state.Loader===!0?w:"",N("ul",{},void 0,N("li",{className:"basic_profile mb-0 "},void 0,N("p",{},void 0,S.a.SelectProfession),N("div",{className:"h_col_4 col_common"},void 0,N("div",{className:"filter"},void 0,N(h.a,{value:this.state.form_data.parentCatID,onChange:this.handleParentChange.bind(this),maxHeight:180,fullWidth:!0},void 0,N(v.a,{value:"",primaryText:S.a.typeKalakar}),this.state.kalakarParentTypeData.map(function(t){return N(v.a,{value:t.category_id,primaryText:t.category_name,style:{cursor:"pointer"}},t.category_name)})))),N("div",{className:"h_col_4 col_common"},void 0,N("div",{className:"filter"},void 0,N(h.a,{value:this.state.form_data.childCatId,onChange:this.handleChildChange.bind(this),maxHeight:180,fullWidth:!0},void 0,N(v.a,{value:"",primaryText:S.a.Select}),this.state.kalakarChildTypeData.map(function(t){return N(v.a,{value:t.category_id,primaryText:t.category_name,style:{cursor:"pointer"}},t.category_name)})))),N("div",{className:"h_col_4 col_common"},void 0,N("div",{className:"filter"},void 0,N(h.a,{value:this.state.form_data.category_id,onChange:this.handleSubChildChange.bind(this),maxHeight:180,fullWidth:!0},void 0,N(v.a,{value:"",primaryText:S.a.SelectProfession}),this.state.kalakarSubChildTypeData.map(function(t){return N(v.a,{value:t.category_id,primaryText:t.category_name,style:{cursor:"pointer"}},t.category_name)})),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.category_id_text))),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:S.a.SelectProfession},void 0,N(g.a,{src:a(954),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("div",{className:"h_col_4 col_common "},void 0,N("p",{},void 0,S.a.avgProFee),N(u.a,{hintText:S.a.perDay,className:"NormalInputTxt",value:this.state.form_data.avg_rate,onChange:this.handleChange.bind(this,"avg_rate")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.avg_rate_error_text)),N("div",{className:"h_col_4 col_common"},void 0,N("p",{},void 0,S.a.NumberOfPossition),N(u.a,{hintText:S.a.noPos,className:"NormalInputTxt",value:this.state.form_data.noOfPositions,onChange:this.handleChange.bind(this,"noOfPositions")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.error_text)),N("div",{className:"h_col_4 col_common basic_profile"},void 0,j,N("div",{className:"filter"},void 0,N(h.a,{maxHeight:180,fullWidth:!0,value:this.state.form_data.gender,onChange:this.handleChangeGender.bind(this)},void 0,O,I,M,L),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.gender_error_text))),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:S.a.avgProFee},void 0,N(g.a,{src:a(954),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("div",{className:"h_col_12 col_common"},void 0,N("p",{},void 0,"Title of your project post ",N("span",{},void 0,S.a.character)),N(u.a,{id:"text-field2",hintText:"Title of your project post",className:"NormalInputTxt",value:this.state.form_data.title,onChange:this.handleChange.bind(this,"title")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.title_error_text)),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:"Title of your project post"},void 0,N(g.a,{src:a(954),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("div",{className:"h_col_12 col_common"},void 0,R,N(u.a,{id:"text-field2",hintText:"Text of your project post",className:"TextareaTxt",multiLine:!0,rows:5,value:this.state.form_data.post_description,onChange:this.handleChange.bind(this,"post_description")}),N("small",{className:"errorMsg",style:{marginTop:"0px"}},void 0,this.state.post_description_error_text)),N("a",{href:"#",className:"tooltip2","data-toggle":"tooltip","data-placement":"left",title:"Text of your project post"},void 0,N(g.a,{src:a(954),alt:"kalakar"}))),N("li",{className:"mb-0"},void 0,N("span",{className:"add_project_btn"},void 0,N("button",{className:" popbtn-Save",onClick:this.submitData.bind(this)},void 0,this.props.projectbutton)))))),N(d.a,{label:"X",primary:!0,className:"cancelBtnPopup",style:{zIndex:"999"},onTouchTap:this.clear.bind(this)}))}}]),e}(n.a.Component)}});