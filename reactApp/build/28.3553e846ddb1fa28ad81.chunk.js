webpackJsonp([28,55],{924:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{changeRoute:function(t){return e(a.i(u.push)(t))}}}var n=a(1),l=n&&n.__esModule?function(){return n["default"]}:function(){return n};a.d(l,"a",l);var d=a(345),c=d&&d.__esModule?function(){return d["default"]}:function(){return d};a.d(c,"a",c);var u=a(151),p=u&&u.__esModule?function(){return u["default"]}:function(){return u};a.d(p,"a",p);var f=a(932),h=a(109),v=h&&h.__esModule?function(){return h["default"]}:function(){return h};a.d(v,"a",v);var _=a(941),m=a(934),y=a(108),k=y&&y.__esModule?function(){return y["default"]}:function(){return y};a.d(k,"a",k);var g=a(97),b=g&&g.__esModule?function(){return g["default"]}:function(){return g};a.d(b,"a",b);var w=a(96);a.d(t,"WorkcredDetails",function(){return D});var N=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,a,o,r){var i=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),S=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),x=a(150),j=N("i",{className:"fa fa-play-circle"}),C=N("div",{className:"bigLoader"},void 0," ",N("i",{},void 0,N("img",{src:"https://kalakar.pro/kalakar/demo/other/assets/img/loader.svg"})),"Loading....."),P=N("span",{}),O=N("i",{className:"fa fa-upload upload_icon","aria-hidden":"true"}),I=N("div",{className:"row"},void 0,N("div",{className:"col-xs-12 lastCol"},void 0,N("div",{className:"spacerLine"}))),M=N("i",{className:"fa fa-chevron-right"}),D=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.openRoute=function(e){a.props.changeRoute(e)},a.state={stateUpdate:!1,workcreddata:[],workcred_data:{id_workcred:0,worked_as:"",project_name:"",work_photo_name:"",work_photo:"",work_media:"",work_video:"",work_link:"",number_of_days_workcred:"",year_of_project:"",button_text:w.a.add,result:null,resultMsg:"",Loader:!1},years:[1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]},a}return i(t,e),S(t,[{key:"componentDidMount",value:function(){document.title="Extended Profile | Kalakar",function(e){e(window).load(function(){e(".scroller335").mCustomScrollbar({setHeight:335,theme:"dark-3"})})}(jQuery);var e=this;$("[data-toggle='tooltip']").tooltip(),document.getElementById("uploadBtn").onchange=function(){var t=this.value.replace(/^.*\\/,"");document.getElementById("uploadFile").value=t,e.isDisabledImageUpload(t)};var t={action:"workcred_list",profile_id:this.props.params.profileId},a=this;x.getSetData(t,function(e){"success"==e.status?(a.setState({workcreddata:e.data}),a.initializeGallery()):console.log("Error in WorkcredList.Please try again.")})}},{key:"initializeGallery",value:function(){jQuery("#lightgallery").lightGallery(),jQuery(".lightgallery-single-image").lightGallery(),jQuery(".lightgallery-single-video").lightGallery()}},{key:"handleEditClick",value:function(e,t){var a={action:"workcred_detail",workcred_id:e};x.getSetData(a,function(e){if("success"==e.status){var a={};a.workcred_data=e.data[0],a.workcred_data.button_text=w.a.update,t.setState(a)}})}},{key:"handleDeleteClick",value:function(e,t){var a={action:"deleteWorkcred",workcred_id:e};x.getSetData(a,function(e){"success"==e.status&&alert("Record deleted successfully.")})}},{key:"handleInputChange",value:function(e,t){var a={};a.workcred_data=this.state.workcred_data,a.workcred_data[e]=t.target.value,this.setState(a),"worked_as"==e&&this.validate1(),"project_name"==e&&this.validate2(),"work_video"==e&&this.isDisabledWebsite(),"work_link"==e&&this.isDisabledLink(),"number_of_days_workcred"==e&&this.validate3()}},{key:"handleChange",value:function(e){var t={};t.workcred_data=this.state.workcred_data,t.workcred_data.year_of_project=e.target.value,this.setState(t),this.validateSelect()}},{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,o=e.target.files[0];a.onloadend=function(){var e={};e.workcred_data=t.state.workcred_data,e.workcred_data.work_photo=a.result,e.workcred_data.work_photo_name=o.name,t.setState(e)},a.readAsDataURL(o)}},{key:"validate1",value:function(){var e=!1;return""==this.state.workcred_data.worked_as?this.setState({worked_error_text:w.a.required}):(e=!0,this.setState({worked_error_text:null})),e}},{key:"validate2",value:function(){var e=!1;return""==this.state.workcred_data.project_name?this.setState({project_name_error:w.a.required}):(e=!0,this.setState({project_name_error:null})),e}},{key:"validate3",value:function(){var e=!1;return""==this.state.workcred_data.number_of_days_workcred?this.setState({dworked_error_text:w.a.required}):(e=!0,this.setState({dworked_error_text:null})),e}},{key:"validateWebsite",value:function(e){var t=/^(?:(?:http|https):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.]*)*\/?.*$/;return t.test(e)}},{key:"isDisabledWebsite",value:function(){var e=!1;return""===this.state.workcred_data.work_video?(e=!0,this.setState({website_error_text:null})):this.validateWebsite(this.state.workcred_data.work_video)?(e=!0,this.setState({website_error_text:null})):this.setState({website_error_text:w.a.validF}),e}},{key:"isDisabledLink",value:function(){var e=!1;return""===this.state.workcred_data.work_link?(e=!0,this.setState({lwebsite_error_text:null})):this.validateWebsite(this.state.workcred_data.work_link)?(e=!0,this.setState({lwebsite_error_text:null})):this.setState({lwebsite_error_text:w.a.validF}),e}},{key:"validateSelect",value:function(){var e=!1;return""==this.state.workcred_data.year_of_project?this.setState({year_error_text:w.a.required}):(e=!0,this.setState({year_error_text:null})),e}},{key:"validateImageUpload",value:function(e){var t=/([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif|.jpeg)$/;return t.test(e)}},{key:"isDisabledImageUpload",value:function(e){var t=!1;return""===e?(t=!0,this.setState({photo_error_text:null})):this.validateImageUpload(e)?(t=!0,this.setState({photo_error_text:null})):this.setState({photo_error_text:w.a.uploadValid}),t}},{key:"uploadMedia",value:function(){this.setState({Loader:!0});var e=this,t={action:"mediaupload",user_id:b.a.load("userId"),profile_id:this.props.params.profileId,file_name:this.state.workcred_data.work_photo_name,imgsrc:this.state.workcred_data.work_photo};x.getSetData(t,function(t){"success"==t.status&&(e.uploadWorkcred(t.mediaId),e.setState({Loader:!1}))})}},{key:"uploadWorkcred",value:function(e){this.setState({Loader:!0});var t=this,a={action:"workcred",number_of_days_workcred:this.state.workcred_data.number_of_days_workcred,profile_id:this.props.params.profileId,project_name:this.state.workcred_data.project_name,work_link:this.state.workcred_data.work_link,work_media:e,worked_as:this.state.workcred_data.worked_as,year_of_project:this.state.workcred_data.year_of_project,work_video:this.state.workcred_data.work_video};0!=this.state.workcred_data.id_workcred&&(a.workcred_id=this.state.workcred_data.id_workcred),x.getSetData(a,function(e){if("success"==e.status){t.state.stateUpdate=!0;var a={action:"workcred_list",profile_id:t.props.params.profileId};x.getSetData(a,function(a){document.getElementById("uploadFile").value="","success"==a.status&&(t.setState({workcreddata:a.data,workcred_data:{worked_as:"",project_name:"",work_photo:"",work_photo_name:"",work_video:"",work_link:"",work_media:"",number_of_days_workcred:"",year_of_project:"",button_text:"Add",result:!0,resultMsg:e.message},Loader:!1}),t.initializeGallery())})}else{var o={};o.workcred_data=t.state.workcred_data,o.workcred_data.result=!1,o.workcred_data.resultMsg=e.message,t.setState(o),t.setState({Loader:!1})}})}},{key:"submitWorkcred",value:function(e){return e.preventDefault(),this.validate1()&&this.validate2()&&this.isDisabledWebsite()&&this.isDisabledLink()&&this.validate3()&&this.validateSelect()?void(void 0!=this.state.workcred_data.work_photo_name&&""!=this.state.workcred_data.work_photo_name&&null!=this.state.workcred_data.work_photo_name&&0!=this.state.workcred_data.work_photo_name?this.uploadMedia():""!=this.state.workcred_data.work_photo&&null!=this.state.workcred_data.work_photo?this.uploadWorkcred(this.state.workcred_data.work_photo):this.uploadWorkcred(0)):(this.validate1(),this.validate2(),this.validate3(),this.isDisabledWebsite(),this.isDisabledLink(),void this.validateSelect())}},{key:"Continue",value:function(){var e=this.props.params.profileId;this.props.changeRoute("/my-accounts/extended-profile/"+e+"/training")}},{key:"render",value:function(){var e=!1;this.state.stateUpdate&&(e=!0,this.state.stateUpdate=!1);var t=this;return N("div",{},void 0,N("section",{className:"inner-page basic-profile"},void 0,N(f.a,{page:"Workcred",profileId:this.props.params.profileId}),N("div",{className:"pageRest cell"},void 0,N("div",{className:"basic-profile-inner"},void 0,1==this.state.workcred_data.result&&N("div",{className:"sucess_ep"},void 0,this.state.workcred_data.resultMsg),0==this.state.workcred_data.result&&N("div",{className:"error_ep"},void 0,this.state.workcred_data.resultMsg),N("form",{onSubmit:this.submitWorkcred.bind(this)},void 0,N("div",{className:"row"},void 0,N("div",{className:"col-sm-6 "},void 0,N("div",{className:"btn_inline_view"},void 0,N("h1",{className:"h1_btn"},void 0,w.a.Workcred))),N("div",{className:"col-sm-6 right"},void 0,N("h3",{},void 0,w.a.Step," 4/14"))),N("div",{className:"filterMsgOuter myCal"},void 0,N("span",{className:"lightgallery-single-video singleBtn"},void 0,N("div",{className:"video","data-src":"https://www.youtube.com/watch?v=1rx5xFpMH3Y&feature=youtu.be"},void 0,N("button",{type:"button",className:" btn video_assist_btn"},void 0,w.a.VideoAssist," ",j)))),N("div",{className:"row"},void 0,this.state.Loader===!0?C:"",N("div",{className:"col-xs-12 lastCol"},void 0,N("input",{type:"text",placeholder:w.a.Worked,value:this.state.workcred_data.worked_as,onBlur:this.handleInputChange.bind(this,"worked_as"),onChange:this.handleInputChange.bind(this,"worked_as")}),N("small",{className:"errorMsg"},void 0,this.state.worked_error_text),N("i",{className:"fa fa-info","data-toggle":"tooltip",title:"","data-original-title":w.a.WRole})),N("div",{className:"col-xs-12 lastCol"},void 0,N("input",{type:"text",placeholder:w.a.nameP,value:this.state.workcred_data.project_name,onBlur:this.handleInputChange.bind(this,"project_name"),onChange:this.handleInputChange.bind(this,"project_name")}),N("small",{className:"errorMsg"},void 0,this.state.project_name_error),N("i",{className:"fa fa-info","data-toggle":"tooltip",title:"","data-original-title":w.a.namet})),N("div",{className:"row"},void 0,N("div",{className:"col-xs-12"},void 0,N("div",{className:"col-md-4 col-sm-4 col-xs-12 uploadBasicPh lastCol"},void 0,N("input",{id:"uploadFile",type:"text",placeholder:w.a.verifyP,value:this.state.value}),N("small",{className:"errorMsg"},void 0,this.state.photo_error_text),N("div",{className:"fileUpload "},void 0,P,N("input",{id:"uploadBtn",type:"file",title:w.a.verifyTool,accept:"image/*",className:"upload",onChange:this.handleImageChange.bind(this)}),O),N("i",{className:"fa fa-info","data-toggle":"tooltip",title:w.a.verifyTool})),N("div",{className:"col-md-4 col-sm-4 col-xs-12 lastCol"},void 0,N("input",{type:"text",placeholder:w.a.verifyV,value:this.state.workcred_data.work_video,onChange:this.handleInputChange.bind(this,"work_video")}),N("small",{className:"errorMsg"},void 0,this.state.website_error_text),N("i",{className:"fa fa-info","data-toggle":"tooltip",title:"","data-original-title":w.a.verifyVideo})),N("div",{className:"col-md-4 col-sm-4 col-xs-12 lastCol"},void 0,N("input",{type:"text",placeholder:w.a.verifyL,value:this.state.workcred_data.work_link,onChange:this.handleInputChange.bind(this,"work_link")}),N("small",{className:"errorMsg"},void 0,this.state.lwebsite_error_text),N("i",{className:"fa fa-info","data-toggle":"tooltip",title:"","data-original-title":w.a.verifyTL})))),N("div",{className:"col-md-3 col-sm-4 col-xs-12 lastCol"},void 0,N("select",{value:this.state.workcred_data.year_of_project,onChange:this.handleChange.bind(this)},void 0,N("option",{value:""},void 0,w.a.year),this.state.years.map(function(e){return N("option",{value:e},e,e)})),N("small",{className:"errorMsg"},void 0,this.state.year_error_text),N("i",{className:"fa fa-info","data-toggle":"tooltip",title:"","data-original-title":w.a.selectYear})),N("div",{className:"col-md-3 col-sm-4 col-xs-12"},void 0,N("input",{placeholder:w.a.daysW,type:"number",min:"0",value:this.state.workcred_data.number_of_days_workcred,onBlur:this.handleInputChange.bind(this,"number_of_days_workcred"),onChange:this.handleInputChange.bind(this,"number_of_days_workcred")}),N("small",{className:"errorMsg"},void 0,this.state.dworked_error_text)),N("div",{className:"col-md-6 col-sm-4 col-xs-12 lastCol alignRigh1"},void 0,N("button",{className:"add_val_btn marginTopBott4"},void 0,this.state.workcred_data.button_text))),I,N("div",{className:"scroller335"},void 0,N("div",{className:"row"},void 0,N("div",{className:"col-xs-12"},void 0,this.state.workcreddata.map(function(e,a){return N(_.a,{id_workcred:e.id_workcred,institute:e.worked_as,project_name:e.project_name,year:e.year_of_project+" | ",no_days:e.number_of_days_workcred,duration:w.a.Days,hPhoto:e.photourl,hVideo:e.work_video,hLink:e.work_link,onClick:t.handleEditClick.bind(null,e.id_workcred,t),onDeleteClick:t.handleDeleteClick.bind(null,e.id_workcred,t)},a)})))),N("div",{className:"row"},void 0,N("div",{className:"col-sm-12 col-xs-12 alignRigh1"},void 0,N("button",{type:"button",onClick:this.Continue.bind(this),className:"btn btn-profile2 big "},void 0,w.a.Continue," ",M))),N(m.a,{profileId:this.props.params.profileId,stateUpdate:e}))))))}}]),t}(l.a.Component);t["default"]=a.i(d.connect)(null,s)(D)},930:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(108),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(224),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u);var p=a(107),f=p&&p.__esModule?function(){return p["default"]}:function(){return p};a.d(f,"a",f);var h=a(96);a.d(t,"a",function(){return y});var v=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,a,o,r){var i=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),m=v("br",{}),y=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),_(t,[{key:"render",value:function(){return v("div",{},void 0,v(d.a,{className:"pay-ads-pop tagDel",title:this.props.title,modal:!1,open:this.props.open},void 0,v("p",{},void 0,this.props.body),m,v(f.a,{label:h.a.yes,primary:!0,className:"tagDelbtn",onTouchTap:this.props.onSubmit}),v(f.a,{label:h.a.no,primary:!0,className:"tagDelbtn",onTouchTap:this.props.onClose}),v(f.a,{label:"X",primary:!0,className:"cancelBtnPopup",onTouchTap:this.props.onClose})))}}]),t}(n.a.Component)},931:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(108),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(107),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u),a.d(t,"a",function(){return g});var p=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,a,o,r){var i=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),h=p("i",{className:"fa fa-link","aria-hidden":"true"}),v=p("a",{href:"#"},void 0," ",p("i",{className:"fa fa-play-circle-o","aria-hidden":"true"})),_=p("a",{href:"#"},void 0,p("i",{className:"fa fa-clone","aria-hidden":"true"})),m=p("i",{className:"fa fa-link","aria-hidden":"true"}),y=p("a",{href:"#"},void 0," ",p("i",{className:"fa fa-play-circle-o","aria-hidden":"true"})),k=p("a",{href:"#"},void 0,p("i",{className:"fa fa-clone","aria-hidden":"true"})),g=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={IsMobile:0},a}return i(t,e),f(t,[{key:"componentDidMount",value:function(){jQuery.browser.mobile&&this.setState({IsMobile:1})}},{key:"initializeScroller",value:function(){jQuery(".profileLeftTabReapeat").mCustomScrollbar({setHeight:524,theme:"dark-3"})}},{key:"render",value:function(){return jQuery(".lightgallery-single-image").lightGallery(),jQuery(".lightgallery-single-video").lightGallery(),0===this.state.IsMobile?p("div",{className:"row profileLeftTabReapeat"},void 0,p("div",{className:"col-sm-6 col-sm-6 col-xs-12"},void 0,p("h5",{},void 0,this.props.institute.replace(/\\/g,"")),p("p",{},void 0,this.props.project_name.replace(/\\/g,"")),p("p",{},void 0,this.props.year,"  ",this.props.no_days," ",this.props.duration)),p("div",{className:"col-md-6 col-sm-6 col-xs-12 "},void 0,p("ul",{},void 0,""==this.props.hLink?"":p("li",{},void 0,p("a",{href:this.props.hLink,target:"_blank"},void 0,h)),0==this.props.hVideo||null==this.props.hVideo||""==this.props.hVideo?"":p("span",{className:"lightgallery-single-video"},void 0,p("li",{className:"video","data-src":this.props.hVideo},void 0,v)),0==this.props.hPhoto||null==this.props.hPhoto||""==this.props.hPhoto?"":p("span",{className:"lightgallery-single-image"},void 0,p("li",{className:!0,"data-src":this.props.hPhoto},void 0,_))))):p("div",{className:"row profileLeftTabReapeat"},void 0,p("div",{className:"col-sm-9 col-sm-9 col-xs-12"},void 0,p("h5",{},void 0,this.props.institute.replace(/\\/g,"")),p("p",{},void 0,this.props.project_name.replace(/\\/g,"")),p("p",{},void 0,this.props.year,"  ",this.props.no_days," ",this.props.duration)),p("div",{className:"col-md-3 col-sm-3 col-xs-12 "},void 0,p("ul",{},void 0,""==this.props.hLink?"":p("li",{},void 0,p("a",{href:this.props.hLink,target:"_blank"},void 0,m)),0==this.props.hVideo||null==this.props.hVideo||""==this.props.hVideo?"":p("span",{className:"lightgallery-single-video"},void 0,p("li",{className:"video","data-src":this.props.hVideo},void 0,y)),0==this.props.hPhoto||null==this.props.hPhoto||""==this.props.hPhoto?"":p("span",{className:"lightgallery-single-image"},void 0,p("li",{className:!0,"data-src":this.props.hPhoto},void 0,k)))))}}]),t}(n.a.Component)},932:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(226),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(930),u=a(97),p=u&&u.__esModule?function(){return u["default"]}:function(){return u};a.d(p,"a",p);var f=a(96);a.d(t,"a",function(){return m});var h=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,a,o,r){var i=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),_=a(150),m=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.handleOpen=function(){a.setState({confirmOpen:!0})},a.handleClose=function(){a.setState({confirmOpen:!1})},a.state={confirmOpen:!1,user_id:p.a.load("userId"),Code:p.a.load("code")},a}return i(t,e),v(t,[{key:"componentDidMount",value:function(){void 0!==this.state.user_id&&202!==this.state.Code&&203!==this.state.Code||d()(location).attr("href","/"),d()(".sidebar h2").click(function(){d()(this).toggleClass("active"),d()(this).next("ul").toggleClass("open")})}},{key:"delete",value:function(e){var t={action:"deleteProfile",profile_id:e,user_id:this.state.user_id};_.getSetData(t,function(e){"success"==e.status?(alert(f.a.deletePro),d()(location).attr("href","/my-dashboard")):alert(f.a["try"])})}},{key:"render",value:function(){return h("div",{className:"sidebar cell"},void 0,h("h2",{},void 0,f.a.createEx),h("ul",{},void 0,h("li",{className:"ProfileBasic"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/basic"},void 0,f.a.profilebasics)),h("li",{className:"ContactDetails"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/details"},void 0,f.a.ContactDetails)),h("li",{className:"Intro"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/intro"},void 0,f.a.Intro)),h("li",{className:"Workcred"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/workcred"},void 0,f.a.Workcred)),h("li",{className:"Training"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/training"},void 0,f.a.Training)),h("li",{className:"Awards"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/awards"},void 0,f.a.Awards)),h("li",{className:"Links"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/links"},void 0,f.a.Links)),h("li",{className:"Tags"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/tags"},void 0,f.a.Tags)),h("li",{className:"Circle"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/circle"},void 0,f.a.Circle)),h("li",{className:"Photos"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/photos"},void 0,f.a.photos)),h("li",{className:"Videos"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/video"},void 0,f.a.videos)),h("li",{className:"Albums"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/albums"},void 0,f.a.albums)),h("li",{className:"Deck"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/deck"},void 0,f.a.Deck)),h("li",{className:"Social"===this.props.page?"active":""},void 0,h("a",{href:"/my-accounts/extended-profile/"+this.props.profileId+"/social"},void 0,f.a.Social)),h("li",{className:"DeleteProfile"===this.props.page?"active":""},void 0,h("a",{href:"javascript:void(0)",onTouchTap:this.handleOpen},void 0,f.a.deleteProfile)),h(c.a,{open:this.state.confirmOpen,title:f.a.deleteProfile,onSubmit:this["delete"].bind(this,this.props.profileId),body:f.a.body,onClose:this.handleClose})))}}]),t}(n.a.Component)},934:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(345),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(151),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u);var p=(a(931),a(96));a.d(t,"a",function(){return _});var f=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,a,o,r){var i=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),v=a(150),_=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={progressbar:0},a}return i(t,e),h(t,[{key:"getProgressData",value:function(e){var t=this,a={action:"progress",profile_id:e};v.getSetData(a,function(e){if("success"==e.status)return t.setState({progressbar:void 0==e.progress?0:e.progress}),!0})}},{key:"componentDidMount",value:function(){var e=this.props.profileId;this.getProgressData(e)}},{key:"componentWillReceiveProps",value:function(e){if(e.stateUpdate){var t=e.profileId;this.getProgressData(t)}}},{key:"render",value:function(){return f("div",{className:"row"},void 0,f("div",{className:"col-md-12 col-sm-12 col-xs-12 slideWrap"},void 0,f("h4",{},void 0,p.a.Progress),f("div",{className:"progress"},void 0,f("div",{className:"progress-bar",style:{width:this.state.progressbar+"%"},"data-progress":this.state.progressbar+"%"}))))}}]),t}(n.a.Component)},941:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(1),n=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(n,"a",n);var l=a(108),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(d,"a",d);var c=a(107),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(u,"a",u);var p=a(96);a.d(t,"a",function(){return y});var f=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,a,o,r){var i=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),v=f("i",{className:"fa fa-link","aria-hidden":"true"}),_=f("a",{href:"#"},void 0," ",f("i",{className:"fa fa-play-circle-o","aria-hidden":"true"})),m=f("a",{href:"#"},void 0," ",f("i",{className:"fa fa-clone","aria-hidden":"true"})),y=function(e){function t(e){o(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={},a}return i(t,e),h(t,[{key:"render",value:function(){return f("div",{className:"wordcreed_data"},void 0,f("div",{className:"row"},void 0,f("div",{className:"col-sm-5 col-sm-4 col-xs-12"},void 0,f("h5",{},void 0,this.props.institute.replace(/\\/g,"")),f("p",{},void 0,this.props.project_name.replace(/\\/g,"")),f("p",{},void 0,this.props.year," ",this.props.no_days," ",this.props.duration)),f("div",{className:"col-md-5 col-sm-5 col-xs-6"},void 0,f("ul",{},void 0,""==this.props.hLink?"":f("li",{},void 0,f("a",{href:this.props.hLink,target:"_blank"},void 0,v)),0==this.props.hVideo?"":f("span",{className:"lightgallery-single-video"},void 0,f("li",{className:"video","data-src":this.props.hVideo},void 0,_)),null==this.props.hPhoto?"":f("span",{className:"lightgallery-single-image"
},void 0,f("li",{className:!0,"data-src":this.props.hPhoto},void 0,m)))),f("div",{className:"col-md-3 col-sm-3 col-xs-6 lastCol alignRigh1"},void 0,f("button",{type:"button",className:"add_val_btn",onClick:this.props.onClick},void 0,p.a.Edit),f("button",{type:"button",className:"add_val_btn",onClick:this.props.onDeleteClick},void 0,p.a.Delete))))}}]),t}(n.a.Component)}});