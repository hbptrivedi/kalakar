webpackJsonp([47,55],{880:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t){return{changeRoute:function(e){return t(a.i(d.push)(e))}}}var s=a(1),u=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(u,"a",u);var l=a(345),c=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(c,"a",c);var d=a(151),p=d&&d.__esModule?function(){return d["default"]}:function(){return d};a.d(p,"a",p);var h=a(97),v=h&&h.__esModule?function(){return h["default"]}:function(){return h};a.d(v,"a",v);var f=a(96),m=a(952),b=a(346),g=b&&b.__esModule?function(){return b["default"]}:function(){return b};a.d(g,"a",g);var y=a(108),_=y&&y.__esModule?function(){return y["default"]}:function(){return y};a.d(_,"a",_),a.d(e,"AboutProject",function(){return O});var P=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var n=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={}),a&&n)for(var s in n)void 0===a[s]&&(a[s]=n[s]);else a||(a=n||{});if(1===r)a.children=i;else if(r>1){for(var u=Array(r),l=0;l<r;l++)u[l]=arguments[l+3];a.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),k=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),j=a(150),S=P("div",{className:"row"},void 0,P("div",{className:"col-md-12 col-sm-12 col-xs-12"},void 0,P("h1",{},void 0,"STEP 2 - ABOUT THE PROJECT"))),w=P("div",{className:"bigLoader"},void 0,P("i",{},void 0,P("img",{src:"https://kalakar.pro/kalakar/demo/other/assets/img/loader.svg"})),"Loading....."),D=P("label",{},void 0,"Project Video and Thumbnail"),C=P("label",{},void 0," "),I=P("span",{},void 0),T=P("i",{className:"fa fa-upload","aria-hidden":"true"}),L=P("label",{},void 0,"About The Project"),N=P("label",{},void 0,"Tags - Drag and Drop To Determine Order"),O=function(t){function e(t){o(this,e);var a=i(this,Object.getPrototypeOf(e).call(this,t));return a.openRoute=function(t){a.props.changeRoute(t)},a.state={pid:"",tagL:[],tags:"",tagList:[],urlLink:"",project_photo:"",project_photo_name:"",aboutProject:"",Loader:!1},a}return n(e,t),k(e,[{key:"componentDidMount",value:function(){this.setState({Loader:!0});var t=this;$("[data-toggle='tooltip']").tooltip(),document.getElementById("uploadBtn").onchange=function(){var e=this.value.replace(/^.*\\/,"");document.getElementById("uploadFile").value=e,t.isDisabledImageUpload(e)};var e=t.props.location.pathname,a=e.split("/aboutProject/")[1];t.setState({pid:a,Loader:!0});var o={action:"recentProject",PID:a,PUserId:v.a.load("userId")};j.getSetData(o,function(e){var a=e.data.DurationOfWork.split(" ");t.setState({durationT:a[0],durationH:a[1]}),"success"==e.status&&null!=e.data&&t.setState({selectCategory:e.data.PCID,title:e.data.PTitle,producedBy:e.data.Producedby,prolang:e.data.Planguage,langL:e.data.Planguage.split(","),yearOfCompletion:e.data.yearOfCompletion,DurationOfWork:t.state.durationT,duration:t.state.durationH,twLink:e.data.twLink,fbLink:e.data.fbLink,ownLink:e.data.ownLink,directedBy:e.data.directedBy,aboutProject:e.data.Pdescription,thumbnailId:e.data.thumbnailId,Loader:!1})});var i={action:"projectTags",PID:a},t=this;j.getSetData(i,function(e){"success"==e.status&&null!=e.data&&t.setState({tagL:e.data,Loader:!1})})}},{key:"validateImageUpload",value:function(t){var e=t.toLowerCase(),a=/([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif|.jpeg)$/;return a.test(e)}},{key:"isDisabledImageUpload",value:function(t){var e=!1;return""===t?(e=!0,this.setState({photo_error_text:"Required"})):this.validateImageUpload(t)?(e=!0,this.setState({photo_error_text:null})):this.setState({photo_error_text:f.a.uploadValid}),e}},{key:"handleTagChange",value:function(t){var e=t.target.value;this.setState({tags:e}),this.commonValidate5()}},{key:"addShow",value:function(){if(this.commonValidate5()){var t={action:"createProjectTags",PID:this.state.pid,Tag:this.state.tags},e=this;j.getSetData(t,function(a){if("success"==a.status){var o=e.state.tagL;o.push({ID:a.TID,PID:t.PID,Tag:t.Tag}),e.setState({tagL:o,tags:""})}})}}},{key:"addShow1",value:function(t){if(this.commonValidate5()&&13==t.keyCode){var e={action:"createProjectTags",PID:this.state.pid,Tag:this.state.tags},a=this;j.getSetData(e,function(t){if("success"==t.status){var o=a.state.tagL;o.push({ID:t.TID,PID:e.PID,Tag:e.Tag}),a.setState({tagL:o,tags:""})}})}}},{key:"addUrl",value:function(){if(this.isDisabledWebsite()){var t={action:"createThumbnail",type:"video",PID:this.state.pid,videoUrl:this.state.urlLink,userId:v.a.load("userId")},e=this;j.getSetData(t,function(t){"success"==t.status&&e.setState({MessageUrl:t.message,thumbnailId:t.TID})})}}},{key:"delete",value:function(t){var e=this.props.location.pathname,a=e.split("/aboutProject/")[1],o={action:"deleteProjectTags",TID:t},i=this;j.getSetData(o,function(t){if("success"==t.status){var e={action:"projectTags",PID:a};j.getSetData(e,function(t){"success"==t.status&&null!=t.data&&i.setState({tagL:t.data})})}})}},{key:"handleInputChange1",value:function(t,e){var a={},o=e.target.value;if(o.includes("youtube"))var i=o.replace("watch?v=","embed/");else if(o.includes("vimeo"))var i=o.replace("https://vimeo.com/","https://player.vimeo.com/video/");a[t]=i,this.setState(a),"urlLink"===t&&this.isDisabledWebsite()}},{key:"handleInputChange",value:function(t,e){var a={};a[t]=e.target.value,this.setState(a),this.commonValidate1(e.target.value)}},{key:"handleImageChange",value:function(t){var e=this;t.preventDefault();var a=new FileReader,o=t.target.files[0];a.onloadend=function(){var t={};t.project_photo=a.result,t.project_photo_name=o.name,e.setState(t)},a.readAsDataURL(o)}},{key:"uploadMedia",value:function(t){var e=this;e.setState({Loader:!0});var a={action:"createThumbnail",user_id:v.a.load("userId"),type:"photo",img:e.state.project_photo,PID:this.state.pid};j.getSetData(a,function(t){"success"==t.status&&e.setState({MessageUrl:t.message,thumbnailId:t.TID,Loader:!1})})}},{key:"commonValidate1",value:function(t){t||(t=this.state.aboutProject);var e=!1;return""===t||null===t||void 0===t?this.setState({aboutProject_error_text:f.a.required}):(e=!0,this.setState({aboutProject_error_text:null})),e}},{key:"saveProject",value:function(){if(""!=this.state.thumbnailId&&void 0!=this.state.thumbnailId&&"0"!=this.state.thumbnailId||this.setState({photo_error_text:"photo/video required",urlLink_error_text:"video/photo required"}),this.commonValidate1()){var t=this,e={action:"updateRecentProject",PID:this.state.pid,userId:v.a.load("userId"),PCID:this.state.selectCategory,title:this.state.title,producedby:this.state.producedBy,prolang:this.state.prolang,yearOfCompletion:this.state.yearOfCompletion,DurationOfWork:this.state.DurationOfWork+" "+this.state.duration,twLink:this.state.twLink,fbLink:this.state.fbLink,ownLink:this.state.ownLink,directedBy:this.state.directedBy,aboutProject:this.state.aboutProject,thumbnailId:this.state.thumbnailId};j.getSetData(e,function(e){"success"==e.status&&t.setState({})}),t.props.changeRoute("/CompletedProjects/CastAndCrew/"+t.state.pid)}}},{key:"previous",value:function(){var t=this;t.props.changeRoute("/CompletedProjects/BasicDetails/"+t.state.pid)}},{key:"validateWebsite",value:function(t){var e=/(?:(?:http|https):\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,a=/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;return!!e.test(t)||!!a.test(t)}},{key:"isDisabledWebsite",value:function(){var t=!1;return null==this.state.urlLink||""===this.state.urlLink||void 0===this.state.urlLink?(t=!0,this.setState({urlLink_error_text:null})):this.validateWebsite(this.state.urlLink)?(t=!0,this.setState({urlLink_error_text:null})):this.setState({urlLink_error_text:f.a.validF}),t}},{key:"commonValidate5",value:function(){var t=!1;return""===this.state.tags.trim()||null===this.state.tags.trim()||void 0===this.state.tags.trim()?this.setState({language_error_text:f.a.required}):(t=!0,this.setState({language_error_text:null})),t}},{key:"render",value:function(){var t=this;return P("section",{className:"inner-page"},void 0,P(m.a,{page:"aboutProject",ProjectId:this.state.pid}),P("div",{className:"pageRest cell"},void 0,P("div",{className:"Project-inner step1 newStep"},void 0,S,P("div",{className:"projectSteps"},void 0,P("div",{className:"row"},void 0,this.state.Loader===!0?w:"",P("div",{className:"col-md-6 col-sm-12 col-xs-12"},void 0,P("div",{className:"inputGroup fixedBtn"},void 0,D,P("input",{placeholder:"Paste Your Youtube, Vimeo, Soundcloud URL for Project",type:"text",value:this.state.urlLink,onChange:this.handleInputChange1.bind(this,"urlLink")}),P("small",{className:"errorMsg"},void 0,this.state.urlLink_error_text),P("button",{className:"btn add_val_btn",onClick:this.addUrl.bind(this)},void 0,"ADD"))),P("div",{className:"col-md-6 col-sm-12 col-xs-12"},void 0,P("div",{className:"inputGroup fixedBtn uploadBasicPh"},void 0,C,P("input",{id:"uploadFile",type:"text",placeholder:"Click To Upload Image For Project Thumbnail",value:this.state.value}),P("small",{className:"errorMsg"},void 0,this.state.photo_error_text),P("div",{className:"fileUpload"},void 0,I,P("input",{id:"uploadBtn",type:"file",accept:"image/*",className:"upload",onChange:this.handleImageChange.bind(this)}),T),P("button",{className:"btn add_val_btn",onClick:this.uploadMedia.bind(this,this.state.value)},void 0,"ADD")))),P("div",{className:"row"},void 0,P("div",{className:"col-xs-12"},void 0,P("div",{className:"inputGroup"},void 0,L,P("textarea",{placeholder:"Write about your project here...",className:"aboutProject",value:this.state.aboutProject,onChange:this.handleInputChange.bind(this,"aboutProject")}),P("small",{className:"errorMsg"},void 0,this.state.aboutProject_error_text)))),P("div",{className:"row"},void 0,P("div",{className:"col-md-6 col-sm-9 col-xs-12"},void 0,P("div",{className:"inputGroup fixedBtn"},void 0,N,P("input",{placeholder:"Add Tags",type:"text",value:this.state.tags,onChange:this.handleTagChange.bind(this),onKeyUp:this.addShow1.bind(this)}),P("small",{className:"errorMsg"},void 0,this.state.language_error_text),P("button",{className:"btn add_val_btn",onClick:this.addShow.bind(this)},void 0,"ADD")),P("div",{className:"tagsItems",style:{minHeight:1,marginBottom:15}},void 0,P("ul",{},void 0,this.state.tagL.map(function(e){return P("li",{},e.ID,e.Tag,P("button",{type:"button",onClick:t["delete"].bind(t,e.ID)},void 0,"x"))})))))),P("div",{className:"row"},void 0,P("div",{className:"col-md-12 col-sm-12 col-xs-12"},void 0,P("button",{className:" btn-Previous",onClick:this.previous.bind(this)},void 0,"Previous"),P("button",{className:" btn-SaveNext",onClick:this.saveProject.bind(this)},void 0,"Save & Next"))))))}}]),e}(u.a.Component);e["default"]=a.i(l.connect)(null,r)(O)},930:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=a(1),s=r&&r.__esModule?function(){return r["default"]}:function(){return r};a.d(s,"a",s);var u=a(108),l=u&&u.__esModule?function(){return u["default"]}:function(){return u};a.d(l,"a",l);var c=a(224),d=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(d,"a",d);var p=a(107),h=p&&p.__esModule?function(){return p["default"]}:function(){return p};a.d(h,"a",h);var v=a(96);a.d(e,"a",function(){return g});var f=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var n=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={}),a&&n)for(var s in n)void 0===a[s]&&(a[s]=n[s]);else a||(a=n||{});if(1===r)a.children=i;else if(r>1){for(var u=Array(r),l=0;l<r;l++)u[l]=arguments[l+3];a.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),m=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),b=f("br",{}),g=function(t){function e(){return o(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return n(e,t),m(e,[{key:"render",value:function(){return f("div",{},void 0,f(l.a,{className:"pay-ads-pop tagDel",title:this.props.title,modal:!1,open:this.props.open},void 0,f("p",{},void 0,this.props.body),b,f(h.a,{label:v.a.yes,primary:!0,className:"tagDelbtn",onTouchTap:this.props.onSubmit}),f(h.a,{label:v.a.no,primary:!0,className:"tagDelbtn",onTouchTap:this.props.onClose}),f(h.a,{label:"X",primary:!0,className:"cancelBtnPopup",onTouchTap:this.props.onClose})))}}]),e}(s.a.Component)},952:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=a(1),s=r&&r.__esModule?function(){return r["default"]}:function(){return r};a.d(s,"a",s);var u=a(226),l=u&&u.__esModule?function(){return u["default"]}:function(){return u};a.d(l,"a",l);var c=(a(930),a(97)),d=c&&c.__esModule?function(){return c["default"]}:function(){return c};a.d(d,"a",d),a(96),a.d(e,"a",function(){return g});var p=function(){var t="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,a,o,i){var n=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={}),a&&n)for(var s in n)void 0===a[s]&&(a[s]=n[s]);else a||(a=n||{});if(1===r)a.children=i;else if(r>1){for(var u=Array(r),l=0;l<r;l++)u[l]=arguments[l+3];a.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),h=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),v=(a(150),p("h2",{},void 0,"Create New Project")),f=p("a",{},void 0,"ABOUT THE PROJECT"),m=p("a",{},void 0,"CAST + CREW"),b=p("a",{},void 0,"MEDIA"),g=function(t){function e(t){o(this,e);var a=i(this,Object.getPrototypeOf(e).call(this,t));return a.state={user_id:d.a.load("userId"),pid:""},a}return n(e,t),h(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.ProjectId;this.setState({pid:null===e||void 0===e?"":e})}},{key:"componentDidMount",value:function(){l()(".sidebar h2").click(function(){l()(this).toggleClass("active"),l()(this).next("ul").toggleClass("open")})}},{key:"render",value:function(){return p("div",{className:"sidebar cell"},void 0,v,p("ul",{},void 0,p("li",{className:"Basic Details"===this.props.page?"active":""},void 0,p("a",{href:"/CompletedProjects/BasicDetails/"+this.state.pid},void 0,"BASIC DETAILS")),""===this.state.pid?p("span",{},void 0,p("li",{className:"aboutProject"===this.props.page?"active":""},void 0,f),p("li",{className:"Cast+Crew"===this.props.page?"active":""},void 0,m),p("li",{className:"Media"===this.props.page?"active":""},void 0,b)):p("span",{},void 0,p("li",{className:"aboutProject"===this.props.page?"active":""},void 0,p("a",{href:"/CompletedProjects/aboutProject/"+this.state.pid},void 0,"ABOUT THE PROJECT")),p("li",{className:"Cast+Crew"===this.props.page?"active":""},void 0,p("a",{href:"/CompletedProjects/CastAndCrew/"+this.state.pid},void 0,"CAST + CREW")),p("li",{className:"Media"===this.props.page?"active":""},void 0,p("a",{href:"/CompletedProjects/Media/"+this.state.pid},void 0,"MEDIA")))))}}]),e}(s.a.Component)}});