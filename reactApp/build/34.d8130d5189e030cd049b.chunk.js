webpackJsonp([34,55],{917:function(a,e,t){"use strict";function s(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function r(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?a:e}function i(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)}function o(a){return{changeRoute:function(e){return a(t.i(u.push)(e))}}}var l=t(1),n=l&&l.__esModule?function(){return l["default"]}:function(){return l};t.d(n,"a",n);var d=t(345),c=d&&d.__esModule?function(){return d["default"]}:function(){return d};t.d(c,"a",c);var u=t(151),v=u&&u.__esModule?function(){return u["default"]}:function(){return u};t.d(v,"a",v);var _=t(108),p=_&&_.__esModule?function(){return _["default"]}:function(){return _};t.d(p,"a",p);var g=t(97),m=g&&g.__esModule?function(){return g["default"]}:function(){return g};t.d(m,"a",m);var h=t(933),f=t(96);t.d(e,"Ratings",function(){return C});var b=function(){var a="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,t,s,r){var i=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===o)t.children=r;else if(o>1){for(var n=Array(o),d=0;d<o;d++)n[d]=arguments[d+3];t.children=n}return{$$typeof:a,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}}(),y=function(){function a(a,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(e,t,s){return t&&a(e.prototype,t),s&&a(e,s),e}}(),N=t(150),k=b(h.a,{page:"ratings"}),w=b("div",{className:"bigLoader"},void 0,b("i",{},void 0,b("img",{src:"https://kalakar.pro/kalakar/demo/other/assets/img/loader.svg"})),"Loading....."),S=b("i",{className:"fa fa-play-circle"}),P=b("div",{id:"canvas_container"},void 0),G=b("br",{}),C=function(a){function e(a){s(this,e);var t=r(this,Object.getPrototypeOf(e).call(this,a));return t.openRoute=function(a){t.props.changeRoute(a)},t.state={profileData:[],activeProfileIndex:0,Loader:!1},t}return i(e,a),y(e,[{key:"componentDidMount",value:function(){this.setState({Loader:!0}),document.title="My Dashboard | Kalakar",jQuery(".lightgallery-single-video").lightGallery(),jQuery(".dashboard_rating .rating_left ul li .rating_progress > .progress").click(function(){jQuery(this).siblings(".sub_rating").hasClass("open")?(jQuery(".dashboard_rating .rating_left ul li .rating_progress .progress").siblings(".sub_rating").removeClass("open"),jQuery(".dashboard_rating .rating_left ul li .rating_progress .progress").siblings(".rating_count").hide(),jQuery(".dashboard_rating .rating_left ul li .rating_progress .progress").children(".progress-bar").children("span").hide()):(jQuery(".dashboard_rating .rating_left ul li .rating_progress .progress").siblings(".sub_rating").removeClass("open"),jQuery(".dashboard_rating .rating_left ul li .rating_progress .progress").siblings(".rating_count").hide(),jQuery(".dashboard_rating .rating_left ul li .rating_progress .progress").children(".progress-bar").children("span").hide(),jQuery(this).siblings(".sub_rating").addClass("open"),jQuery(this).siblings(".rating_count").show(),jQuery(this).children(".progress-bar").children("span").show())});var a={action:"profilesList",user_id:m.a.load("userId")},e=this;N.getSetData(a,function(a){"success"==a.status&&null!=a.data&&!function(){var t=[],s={};a.data.map(function(a){s[a.profile_id]||(s[a.profile_id]=!0,t.push(a))}),e.setState({profileData:t,profileFirst:a.data[0].profile_id,Loader:!1})}();var t=e.state.profileFirst;e.profileClick(t,0)})}},{key:"profileClick",value:function(a,e){var t={action:"detail_ratings",profile_id:a},s=this;N.getSetData(t,function(a){"success"==a.status&&(null!=a.data&&a.data.details?s.setState({rating:void 0==a.data.ratings||null==a.data.ratings||""==a.data.ratings||"0"==a.data.ratings?0:a.data.ratings,profile_ratings:null==a.data.details.Gh_Profile?0:parseFloat(a.data.details.Gh_Profile),workcred_rating:null==a.data.details.Gh_Workcred?0:parseFloat(a.data.details.Gh_Workcred),messages_rating:null==a.data.details.Gh_Messages?0:parseFloat(a.data.details.Gh_Messages),bookmarks_rating:null==a.data.details.Gh_Bookmark?0:parseFloat(a.data.details.Gh_Bookmark),calendar_rating:null==a.data.details.Gh_Calendar?0:parseFloat(a.data.details.Gh_Calendar),likes_rating:null==a.data.details.Gh_Likes?0:parseFloat(a.data.details.Gh_Likes),awards_rating:null==a.data.details.Gh_Awards?0:parseFloat(a.data.details.Gh_Awards),about_Profile:null==a.data.Gh_Profile.Gh_about_us?0:parseFloat(a.data.Gh_Profile.Gh_about_us),photo_Profile:null==a.data.Gh_Profile.Gh_photos?0:parseFloat(a.data.Gh_Profile.Gh_photos),training_Profile:null==a.data.Gh_Profile.Gh_Training?0:parseFloat(a.data.Gh_Profile.Gh_Training),tags_Profile:null==a.data.Gh_Profile.Gh_Tags?0:parseFloat(a.data.Gh_Profile.Gh_Tags),links_Profile:null==a.data.Gh_Profile.Gh_Links?0:parseFloat(a.data.Gh_Profile.Gh_Links),list_workcred:null==a.data.Gh_Workcred.Gh_workcred_listed?0:parseFloat(a.data.Gh_Workcred.Gh_workcred_listed),media_workcred:null==a.data.Gh_Workcred.Gh_workcred_media?0:parseFloat(a.data.Gh_Workcred.Gh_workcred_media),uniq_messages:null==a.data.Gh_Messages.Gh_uniq_Messages?0:parseFloat(a.data.Gh_Messages.Gh_uniq_Messages),messages_2hr:null==a.data.Gh_Messages.Gh_reply_messages_2hr?0:parseFloat(a.data.Gh_Messages.Gh_reply_messages_2hr),messages_3days:null==a.data.Gh_Messages.Gh_reply_messages_3days?0:parseFloat(a.data.Gh_Messages.Gh_reply_messages_3days),bookmarks:null==a.data.Gh_Bookmark.gh_peer_bookmarks?0:parseFloat(a.data.Gh_Bookmark.gh_peer_bookmarks),calendar_morethen30:null==a.data.Gh_Calendar.Gh_calendar_morethen30?0:parseFloat(a.data.Gh_Calendar.Gh_calendar_morethen30),calendar_atleast30:null==a.data.Gh_Calendar.Gh_calendar_atleast30?0:parseFloat(a.data.Gh_Calendar.Gh_calendar_atleast30),calendar_atleast20:null==a.data.Gh_Calendar.Gh_calendar_atleast20?0:parseFloat(a.data.Gh_Calendar.Gh_calendar_atleast20),calendar_atleast10:null==a.data.Gh_Calendar.Gh_calendar_atleast10?0:parseFloat(a.data.Gh_Calendar.Gh_calendar_atleast10),awards_listed:null==a.data.Gh_Awards.Gh_awards_listed?0:parseFloat(a.data.Gh_Awards.Gh_awards_listed),awards_media:null==a.data.Gh_Awards.Gh_awards_media?0:parseFloat(a.data.Gh_Awards.Gh_awards_media),likes_others:null==a.data.Gh_Likes["Likes by other incred users"]?0:parseFloat(a.data.Gh_Likes["Likes by other incred users"])}):s.setState({rating:0}));var e=[{value:14,color:"#e0e0e0"},{value:14,color:"#e0e0e0"},{value:14,color:"#e0e0e0"},{value:14,color:"#e0e0e0"},{value:14,color:"#e0e0e0"},{value:14,color:"#e0e0e0"},{value:14,color:"#e0e0e0"}],t=[{value:s.state.profile_ratings<=0?0:s.state.profile_ratings,color:"#bc3c6d"},{value:s.state.workcred_rating<=0?0:s.state.workcred_rating,color:"#feb528"},{value:s.state.messages_rating<=0?0:s.state.messages_rating,color:"#57a695"},{value:s.state.likes_rating<=0?0:s.state.likes_rating,color:"#ed6f47"},{value:s.state.awards_rating<=0?0:s.state.awards_rating,color:"#feb528"},{value:s.state.calendar_rating<=0?0:s.state.calendar_rating,color:"#0098da"},{value:s.state.bookmarks_rating<=0?0:s.state.bookmarks_rating,color:"#a8cf45"}];$("#canvas_container").html(""),$("#canvas_container").html('<canvas id="canvas" height="290" width="290" className="round_rating"/>'),0==s.state.rating||void 0===s.state.rating||null===s.state.rating?new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(e,{percentageInnerCutout:60,animateRotate:!1,segmentShowStroke:!0,showTooltips:!1}):new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(t,{percentageInnerCutout:60,showTooltips:!1,animationSteps:60})}),this.setState({activeProfileIndex:e})}},{key:"render",value:function(){var a=this;return b("div",{className:"PageMinHeight"},void 0,k,b("section",{className:"inner_page dashMsg"},void 0,b("div",{className:"container"},void 0,b("div",{className:"row"},void 0,this.state.Loader===!0?w:"",b("div",{className:"col-sm-12"},void 0,b("div",{className:"filterMsgOuter myCal"},void 0,b("span",{className:"lightgallery-single-video singleBtn"},void 0,b("div",{className:"video","data-src":"https://www.youtube.com/watch?v=3NkmnpXA6JY&feature=youtu.be"},void 0,b("button",{type:"button",className:" btn video_assist_btn"},void 0,f.a.VideoAssist," ",S))),b("ul",{className:"filterMsg"},void 0,this.state.profileData.map(function(e,t){return b("li",{style:{borderBottomWidth:"2px",borderBottomStyle:"solid",borderBottomColor:"#"+e.profile_color}},e.profile_id,a.state.activeProfileIndex==t?b("a",{href:"javascript:void(0)",onClick:a.profileClick.bind(a,e.profile_id,t),style:{background:""!=e.profile_color?"#"+e.profile_color:"#d01d15",color:"#fff",textDecoration:"none",borderBottomColor:"#"+e.profile_color}},void 0,e.profileName):b("a",{href:"javascript:void(0)",onClick:a.profileClick.bind(a,e.profile_id,t)},void 0,e.profileName))}))))),b("div",{className:"dashRating"},void 0,b("div",{className:"dashboard_rating"},void 0,b("div",{className:"rating_right"},void 0,P,b("div",{className:"total_round_rating"},void 0,f.a.TotalIncred,G,f.a.Rating,b("span",{},void 0,this.state.rating))),b("div",{className:"rating_left"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"rating_name"},void 0,f.a.ProfileR),b("span",{className:"rating_progress"},void 0,b("div",{className:"progress progress_sm"},void 0,b("div",{className:"progress-bar bg-profile",role:"progressbar","data-transitiongoal":100,style:{width:this.state.profile_ratings/12*100+"%"}},void 0,b("span",{},void 0,this.state.profile_ratings))),b("span",{className:"rating_count"},void 0,"12 ",f.a.max),b("div",{className:"sub_rating"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.About," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-profile",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.about_Profile/2*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.about_Profile," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.photosR," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-profile",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.photo_Profile/3*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.photo_Profile," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.trainingR),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-profile",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.training_Profile/3*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.training_Profile," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.tag,"  "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-profile",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.tags_Profile/2*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.tags_Profile," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.linksR," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-profile",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.links_Profile/2*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.links_Profile," PTS")))))),b("li",{},void 0,b("span",{className:"rating_name"},void 0,f.a.Workcred),b("span",{className:"rating_progress"},void 0,b("div",{className:"progress progress_sm"},void 0,b("div",{className:"progress-bar bg-workcred",role:"progressbar","data-transitiongoal":100,style:{width:this.state.workcred_rating/12*100+"%"}},void 0,b("span",{},void 0,this.state.workcred_rating))),b("span",{className:"rating_count"},void 0,"12  ",f.a.max),b("div",{className:"sub_rating"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.pro," ",f.a.max," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-workcred",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.list_workcred/5*100}}))),b("span",{className:"sub_rating_total"},void 0,this.state.list_workcred,"PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.verifiedMedia),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-workcred",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.media_workcred/12*100}}))),b("span",{className:"sub_rating_total"},void 0,this.state.media_workcred,"PTS")))))),b("li",{},void 0,b("span",{className:"rating_name"},void 0,f.a.Messages),b("span",{className:"rating_progress"},void 0,b("div",{className:"progress progress_sm"},void 0,b("div",{className:"progress-bar bg-messages",role:"progressbar","data-transitiongoal":"18.5",style:{width:this.state.messages_rating/10*100+"%"}},void 0,b("span",{},void 0,this.state.messages_rating))),b("span",{className:"rating_count"},void 0,"10 ",f.a.max),b("div",{className:"sub_rating"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.unique," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-messages",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.uniq_messages/4*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.uniq_messages," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.replyJob," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-messages",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.messages_2hr/10*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.messages_2hr," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.replyJobT),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-messages",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.messages_3days/1*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.messages_3days," PTS")))))),b("li",{},void 0,b("span",{className:"rating_name"},void 0,f.a.bookmarks),b("span",{className:"rating_progress"},void 0,b("div",{className:"progress progress_sm"},void 0,b("div",{className:"progress-bar bg-bookmarks",role:"progressbar","data-transitiongoal":9,style:{width:this.state.bookmarks_rating/10*100+"%"}},void 0,b("span",{},void 0,this.state.bookmarks_rating))),b("span",{className:"rating_count"},void 0,"10 ",f.a.max),b("div",{className:"sub_rating"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.bookMarkR),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-bookmarks",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.bookmarks/10*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.bookmarks," PTS")))))),b("li",{},void 0,b("span",{className:"rating_name"},void 0,f.a.calendar),b("span",{className:"rating_progress"},void 0,b("div",{className:"progress progress_sm"},void 0,b("div",{className:"progress-bar bg-calendar",role:"progressbar","data-transitiongoal":100,style:{width:this.state.calendar_rating/10*100+"%"}},void 0,b("span",{},void 0,this.state.calendar_rating))),b("span",{className:"rating_count"},void 0,"10 ",f.a.max),b("div",{className:"sub_rating"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.cal1," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-calendar",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.calendar_morethen30/10*100}}))),b("span",{className:"sub_rating_total"},void 0,this.state.calendar_morethen30," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.cal2," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-calendar",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.calendar_atleast30/8*100}}))),b("span",{className:"sub_rating_total"},void 0,this.state.calendar_atleast30," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.cal3," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-calendar",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.calendar_atleast20/5*100}}))),b("span",{className:"sub_rating_total"},void 0,this.state.calendar_atleast20," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.cal4," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-calendar",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.calendar_atleast10/2*100}}))),b("span",{className:"sub_rating_total"},void 0,this.state.calendar_atleast10," PTS")))))),b("li",{},void 0,b("span",{className:"rating_name"},void 0,f.a.Likes),b("span",{className:"rating_progress"},void 0,b("div",{className:"progress progress_sm"},void 0,b("div",{className:"progress-bar bg-likes",role:"progressbar","data-transitiongoal":100,style:{width:this.state.likes_rating/10*100+"%"}},void 0,b("span",{},void 0,this.state.likes_rating))),b("span",{className:"rating_count"},void 0,"10 ",f.a.max),b("div",{className:"sub_rating"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.like1),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-likes",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.likes_others/10*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.likes_others," PTS")))))),b("li",{},void 0,b("span",{className:"rating_name"},void 0,f.a.Awards),b("span",{className:"rating_progress"},void 0,b("div",{className:"progress progress_sm"},void 0,b("div",{className:"progress-bar bg-workcred",role:"progressbar","data-transitiongoal":100,style:{width:this.state.awards_rating/10*100+"%"}},void 0,b("span",{},void 0,this.state.awards_rating))),b("span",{className:"rating_count"},void 0,"10 ",f.a.max),b("div",{className:"sub_rating"},void 0,b("ul",{},void 0,b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.award1," "),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-workcred",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.awards_listed/4*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.awards_listed," PTS")),b("li",{},void 0,b("span",{className:"left_sub_rating"},void 0,b("p",{},void 0,f.a.award2),b("div",{className:"progress"},void 0,b("div",{className:"progress-bar bg-workcred",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:this.state.awards_media/10*100+"%"}}))),b("span",{className:"sub_rating_total"},void 0,this.state.awards_media," PTS")))))))))))))}}]),e}(n.a.Component);e["default"]=t.i(d.connect)(null,o)(C)},933:function(a,e,t){"use strict";function s(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function r(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?a:e}function i(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)}var o=t(937),l=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(l,"a",l);var n=t(1),d=n&&n.__esModule?function(){return n["default"]}:function(){return n};t.d(d,"a",d);var c=t(107),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};t.d(u,"a",u);var v=t(936),_=t(97),p=_&&_.__esModule?function(){return _["default"]}:function(){return _};t.d(p,"a",p);var g=t(96);t.d(e,"a",function(){return y});var m=function(){var a="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,t,s,r){var i=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===o)t.children=r;else if(o>1){for(var n=Array(o),d=0;d<o;d++)n[d]=arguments[d+3];t.children=n}return{$$typeof:a,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}}(),h=function(){function a(a,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(e,t,s){return t&&a(e.prototype,t),s&&a(e,s),e}}(),f=t(150),b=m("i",{className:"fa fa-play-circle"}),y=function(a){function e(a){s(this,e);var t=r(this,Object.getPrototypeOf(e).call(this,a));return t.handleOpen=function(){t.setState({openState:!0})},t.handleClose=function(){t.setState({openState:!1})},t.state={user_id:p.a.load("userId"),user_name:"",user_image:"",openState:1==p.a.load("create_profile"),Code:p.a.load("code"),IsMobile:0},t}return i(e,a),h(e,[{key:"componentDidMount",value:function(){jQuery.browser.mobile&&this.setState({IsMobile:1}),void 0!==this.state.user_id&&202!==this.state.Code&&203!==this.state.Code||$(location).attr("href","/"),p.a.remove("create_profile",{path:"/"}),$(".dashboard_menu ul li a.active").on("click",function(a){a.preventDefault(),$(".dashboard_menu ul").toggleClass("open"),jQuery("#lightgallery").lightGallery(),jQuery(".lightgallery-single-image").lightGallery(),jQuery(".lightgallery-single-video").lightGallery()});var a=this,e=this.state.user_id,t={action:"dashboard",user_id:e};f.getSetData(t,function(e){"success"==e.status&&a.setState({user_name:e.user_name,user_image:e.user_image})})}},{key:"render",value:function(){return m("section",{className:"inner_page"},void 0,m("div",{className:"dash_header"},void 0,m("div",{className:"row"},void 0,m("div",{className:"col-xs-6 profileInfo"},void 0,m("span",{},void 0," ",m("a",{href:"/my-profile/"+this.state.user_id},void 0,m("img",{src:""===this.state.user_image||void 0===this.state.user_image||null===this.state.user_image?t(939):this.state.user_image,alt:""}))),m("h3",{style:{textTransform:"capitalize"}},void 0,this.state.user_name,m("span",{},void 0,g.a.Dashboard))),m("div",{className:"col-xs-6 profileEdit "},void 0,0===this.state.IsMobile?m(u.a,{className:"profileEditbtn float_right",href:"/my-accounts",primary:!0,label:g.a.editMyB}):"",m("span",{className:"lightgallery-single-video"},void 0,m("div",{className:"video","data-src":"https://www.youtube.com/watch?v=oKYGq_D8ywU&feature=youtu.be"},void 0,0===this.state.IsMobile?m("button",{type:"button",className:" btn video_assist_btn1"},void 0,g.a.VideoAssist," ",b):""))))),m("div",{className:"dashboard_menu"},void 0,0===this.state.IsMobile?m("ul",{},void 0,m("li",{},void 0,m("a",{href:"/my-dashboard",className:"EditProfile"===this.props.page?"active":""},void 0,g.a.edit)),m("li",{},void 0,m("a",{href:"javascript:void(0)",onTouchTap:this.handleOpen},void 0,g.a.CreateNewProfile)),m("li",{},void 0,m("a",{href:"/my-dashboard/messages",className:"Messages"==this.props.page?"active":""},void 0,g.a.Messages)),m("li",{},void 0,m("a",{href:"/my-dashboard/bookmarks",className:"Bookmark"===this.props.page?"active":""},void 0,g.a.bookmarks)),m("li",{},void 0,m("a",{href:"/my-dashboard/analytics",className:"Analytics"===this.props.page?"active":""},void 0,g.a.Analytics)),m("li",{},void 0,m("a",{href:"/my-dashboard/projects",className:"projects"==this.props.page?"active":""},void 0,"Projects")),m("li",{},void 0,m("a",{href:"/my-dashboard/affiliate",className:"Affiliates"===this.props.page?"active":""},void 0,g.a.Affiliates)),m("li",{},void 0,m("a",{href:"/my-dashboard/classifieds",className:"Classified"===this.props.page?"active":""},void 0,g.a.Classifieds)),m("li",{},void 0,m("a",{href:"/my-dashboard/forums",className:"Forums"===this.props.page?"active":""},void 0,g.a.Forums)),m("li",{},void 0,m("a",{href:"/my-dashboard/orders",className:"Orders"===this.props.page?"active":""},void 0,g.a.Orders)),m("li",{},void 0,m("a",{href:"/my-dashboard/calendar",className:"Calendar"===this.props.page?"active":""},void 0,g.a.calendar))):"",m(v.a,{open:this.state.openState,close:this.handleClose})))}}]),e}(d.a.Component)},936:function(a,e,t){"use strict";function s(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function r(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?a:e}function i(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)}var o=t(1),l=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(l,"a",l);var n=t(108),d=n&&n.__esModule?function(){return n["default"]}:function(){return n};t.d(d,"a",d);var c=t(226),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};t.d(u,"a",u);var v=t(107),_=v&&v.__esModule?function(){return v["default"]}:function(){return v};t.d(_,"a",_);var p=t(227),g=p&&p.__esModule?function(){return p["default"]}:function(){return p};t.d(g,"a",g);var m=t(152),h=m&&m.__esModule?function(){return m["default"]}:function(){return m};t.d(h,"a",h);var f=t(97),b=f&&f.__esModule?function(){return f["default"]}:function(){return f};t.d(b,"a",b);var y=t(96);t.d(e,"a",function(){return G});var N=function(){var a="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(e,t,s,r){var i=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===o)t.children=r;else if(o>1){for(var n=Array(o),d=0;d<o;d++)n[d]=arguments[d+3];t.children=n}return{$$typeof:a,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}}(),k=function(){function a(a,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(e,t,s){return t&&a(e.prototype,t),s&&a(e,s),e}}(),w=t(150),S=b.a.load("lang"),P=N("input",{type:"checkbox",checked:!0}),G=function(a){function e(a){s(this,e);var t=r(this,Object.getPrototypeOf(e).call(this,a));return t.state={user_id:b.a.load("userId"),kalakarParentTypeData:[],kalakarChildTypeData:[],kalakarSubChildTypeData:[],parentValue:"",childValue:"",Amount:0,finalPrice:600,form_data:{category_id:"",show:!1,refer_code:"",errorMsg:!1,referalmessage:"",successMsg:!1},sugg:""},t}return i(e,a),k(e,[{key:"componentDidMount",value:function(){var a=this,e={action:"get_parent_cat",lang:S};w.getSetData(e,function(e){a.setState({kalakarParentTypeData:e.data})})}},{key:"handleParentChange",value:function(a,e,t){if(e>0){var s=this;s.setState({parentValue:t});var r={action:"get_child_cat",category:t,lang:S};w.getSetData(r,function(a){var e={};e.form_data=s.state.form_data,e.form_data.category_id="",e.kalakarChildTypeData=a.data,e.kalakarSubChildTypeData=[],e.childValue="",s.setState(e),s.validateSelect(),s.validateSelect1(),s.validateSelect2()})}}},{key:"handleChildChange",value:function(a,e,t){if(e>0){var s=this,r={action:"get_child_cat",category:t,lang:S};w.getSetData(r,function(a){if(200===a.code){s.setState({Amount:a.data[0].category_price,finalPrice:a.data[0].category_price,sugg:1});var e={};e.form_data=s.state.form_data,e.form_data.category_id=t,s.state.form_data.show=!0,s.setState(e)}else{var r={};r.form_data=s.state.form_data,r.form_data.category_id="",r.kalakarSubChildTypeData=a.data,r.childValue=t,s.setState(r)}s.validateSelect(),s.validateSelect1(),s.validateSelect2()})}}},{key:"validateSelect",value:function(){var a=!1;return""==this.state.parentValue?this.setState({error_text2:y.a.required}):(a=!0,this.setState({error_text2:null})),a}},{key:"validateSelect1",value:function(){var a=!1;return""==this.state.childValue?this.setState({error_text:y.a.required}):(a=!0,this.setState({error_text:null})),a}},{key:"validateSelect2",value:function(){var a=!1;return""==this.state.form_data.category_id?this.setState({error_text1:y.a.required}):(a=!0,this.setState({error_text1:null})),a}},{key:"createprofile",value:function(){if(!(this.validateSelect1()&&this.validateSelect2()&&this.validateSelect()))return this.validateSelect(),this.validateSelect1(),void this.validateSelect2();var a=this;if(0===this.state.finalPrice){var e={action:"create_profile",user_id:this.state.user_id,sub_child_cat:a.state.form_data.category_id,amount_input:this.state.finalPrice,refer_code:this.state.form_data.refer_code};w.getSetData(e,function(e){"success"==e.status?u()(location).attr("href","/my-dashboard"):"fail"==e.status?(a.setState({message:e.message}),alert(a.state.message)):alert(e.message)})}else{var e={action:"create_profile",user_id:this.state.user_id,sub_child_cat:a.state.form_data.category_id,amount_input:this.state.finalPrice,refer_code:this.state.form_data.refer_code};w.getSetData(e,function(e){if("success"==e.status){var t=e.firstname,s=e.email,r=e.phone,i=e.user_id,o=e.order,l=e.catID;if(""!=t&&""!=s&&""!=r&&""!=i&&""!=o&&""!=l){var n=u()('<form action="https://kalakar.pro/kalakar/PayUMoney_form.php" method="post"><input type="hidden" name="amount" value="'+a.state.finalPrice+'" /><input type="hidden" name="firstname" value="'+t+'" /><input type="hidden" name="email" value="'+s+'" /><input type="hidden" name="productinfo" value="'+l+'" /><input type="hidden" name="phone" value="'+r+'" /><input type="hidden" name="udf1" value="'+e.profile_id+'" /><input type="hidden" name="udf2" value="'+i+'" /><input type="hidden" name="udf3" value="'+o+'" /></form>');u()("body").append(n),u()(n).submit()}else alert(y.a.verifyReferal)}else"fail"==e.status&&(a.setState({message:e.message}),alert(a.state.message))})}}},{key:"checkReferalCode",value:function(){var a=this;if(""!==a.state.form_data.refer_code){var e={action:"verify_referal",user_id:this.state.user_id,refer_code:a.state.form_data.refer_code};w.getSetData(e,function(e){var t={};if("fail"==e.status)t.form_data=a.state.form_data,t.form_data.errorMsg=!0,t.form_data.successMsg=!1,t.finalPrice=a.state.Amount,a.setState(t);else{t.form_data=a.state.form_data,t.form_data.errorMsg=!1,t.form_data.successMsg=!0,a.setState(t);var s=a.state.Amount*e.data.discount_percentage/100,r=a.state.Amount-s;a.setState({referalmessage:e.message,finalPrice:r})}})}var t={};t.form_data=a.state.form_data,t.form_data.errorMsg=!1,t.form_data.successMsg=!1,a.setState(t)}},{key:"handleInputChange",value:function(a,e){var t={};t.form_data=this.state.form_data,t.form_data[a]=e.target.value,this.setState(t),this.state.form_data.refer_code.length>=6&&this.checkReferalCode();
}},{key:"clear",value:function(){this.props.close(),this.state.form_data.refer_code="",this.state.parentValue="",this.state.childValue="",this.state.form_data.category_id="",this.state.form_data.show=!1,this.state.referalmessage="",this.state.error_text1="",this.state.error_text=""}},{key:"render",value:function(){return N(d.a,{className:"pay-ads-pop create_profile_pop",modal:!1,open:this.props.open,autoScrollBodyContent:!0},void 0,N(_.a,{label:"X",primary:!0,className:"cancelBtnPopup",onTouchTap:this.clear.bind(this)}),N("div",{className:"create_profile_pop"},void 0,N("h2",{},void 0,y.a.createNPro,"!"),N("div",{className:"optionsSelect"},void 0,N("div",{className:"row"},void 0,N("div",{className:"col-sm-4"},void 0,N(g.a,{className:"CrProSelectBox",value:this.state.parentValue,onChange:this.handleParentChange.bind(this),maxHeight:180},void 0,N(h.a,{value:this.state.parentValue,primaryText:y.a.typeK}),this.state.kalakarParentTypeData.map(function(a){return N(h.a,{value:a.category_id,primaryText:null!==a.keyvalue?a.keyvalue:a.category_name,style:{cursor:"pointer"}},null!==a.keyvalue?a.keyvalue:a.category_name)})),N("small",{className:"errorMsg"},void 0,this.state.error_text2)),N("div",{className:"col-sm-4"},void 0,N(g.a,{className:"CrProSelectBox",value:this.state.childValue,onChange:this.handleChildChange.bind(this),maxHeight:180,fullWidth:!0},void 0,N(h.a,{value:this.state.childValue,primaryText:y.a.Select}),this.state.kalakarChildTypeData.map(function(a){return N(h.a,{value:a.category_id,primaryText:null!==a.keyvalue?a.keyvalue:a.category_name,style:{cursor:"pointer"}},null!==a.keyvalue?a.keyvalue:a.category_name)})),N("small",{className:"errorMsg"},void 0,this.state.error_text)),N("div",{className:"col-sm-4"},void 0,N(g.a,{className:"CrProSelectBox",value:this.state.form_data.category_id,onChange:this.handleChildChange.bind(this),maxHeight:180,fullWidth:!0},void 0,N(h.a,{value:this.state.form_data.category_id,primaryText:y.a.selectP}),this.state.kalakarSubChildTypeData.map(function(a){return N(h.a,{value:a.category_id,primaryText:null!==a.keyvalue?a.keyvalue:a.category_name,style:{cursor:"pointer"}},null!==a.keyvalue?a.keyvalue:a.category_name)})),N("small",{className:"errorMsg"},void 0,this.state.error_text1)))),this.state.form_data.show&&N("div",{},void 0,N("div",{className:"optionsPrices"},void 0,N("div",{className:"row"},void 0,N("div",{className:"col-sm-6"},void 0,N("div",{className:"checkboxes"},void 0,P,N("label",{},void 0,y.a.premium))),N("div",{className:"col-sm-6"},void 0,N("span",{className:"plan_price"},void 0,this.state.Amount!=this.state.finalPrice&&N("span",{className:"old_price"},void 0,y.a.Rs," ",N("strong",{},void 0,this.state.Amount)),y.a.Rs," ",N("strong",{className:"dyn_price"},void 0,this.state.finalPrice),"/- ",y.a.year))),N("div",{className:"row"},void 0,N("div",{className:"col-xs-12"},void 0,""!==this.state.sugg?N("strong",{},void 0,N("p",{},void 0,y.a.mulPro)):"",N("p",{},void 0,y.a.proPara),N("p",{},void 0,y.a.proPara2)))),N("div",{className:"refer_code_profile"},void 0,N("div",{className:"row"},void 0,N("div",{className:"col-xs-12"},void 0,N("p",{},void 0,y.a.ReferCode),N("input",{type:"text",id:"refer_code_text",name:"refer_code_text",value:this.state.form_data.refer_code,onChange:this.handleInputChange.bind(this,"refer_code"),onBlur:this.checkReferalCode.bind(this)}),N("button",{className:"referCode_btn"},void 0,y.a.Apply),this.state.form_data.successMsg&&N("span",{id:"refer_code_msg_s",className:"refer_code_msg_s"},void 0,this.state.referalmessage),this.state.form_data.errorMsg&&N("span",{id:"refer_code_msg_f",className:"refer_code_msg_f"},void 0,y.a.codeIn)))),N("div",{className:"refer_code_profile"},void 0,N("div",{className:"row"},void 0,N("div",{className:"col-xs-12"},void 0,N("button",{type:"button",id:"order_btn",className:"pay_now_offer",onClick:this.createprofile.bind(this)},void 0,y.a.pay)))))))}}]),e}(l.a.Component)},937:function(a,e,t){var s=t(938);"string"==typeof s&&(s=[[a.i,s,""]]),t(879)(s,{}),s.locals&&(a.exports=s.locals)},938:function(a,e,t){e=a.exports=t(878)(),e.push([a.i,"",""])},939:function(a,e,t){a.exports=t.p+"68d110fc8c9f3dcd2342346107d1bca9.png"}});