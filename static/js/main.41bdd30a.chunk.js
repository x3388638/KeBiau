(this["webpackJsonpke-biau"]=this["webpackJsonpke-biau"]||[]).push([[0],{45:function(e,t,a){e.exports=a(91)},63:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(19),l=a.n(o),i=a(20),s=(a(56),a(11)),c=a(12),u=a(14),d=a(13),m=a(9),p=a(2),h=a(0),f=a.n(h),b=a(10),g=a(5);function E(){var e=Object(m.a)(["\n  @media (max-width: 1000px) and (min-width: 576px) {\n    display: none;\n  }\n"]);return E=function(){return e},e}function C(){var e=Object(m.a)(["\n  @media (max-width: 850px) and (min-width: 576px) {\n    display: none;\n  }\n"]);return C=function(){return e},e}function v(){var e=Object(m.a)(["\n  z-index: 100;\n  padding: 0.3rem 1rem;\n"]);return v=function(){return e},e}var O=Object(b.a)(p.u)(v()),y=b.a.span(C()),k=b.a.span(E()),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(g.a)(n)),n.toggleLoginTooltip=n.toggleLoginTooltip.bind(Object(g.a)(n)),n.toggleLogoutTooltip=n.toggleLogoutTooltip.bind(Object(g.a)(n)),n.state={navbarIsOpen:!1,loginTooltip:!1,logoutTooltip:!1},n}return Object(c.a)(a,[{key:"toggleNavbar",value:function(){this.setState((function(e){return{navbarIsOpen:!e.navbarIsOpen}}))}},{key:"toggleLoginTooltip",value:function(){this.setState((function(e){return{loginTooltip:!e.loginTooltip}}))}},{key:"toggleLogoutTooltip",value:function(){this.setState((function(e){return{logoutTooltip:!e.logoutTooltip}}))}},{key:"handleLogin",value:function(e){var t;switch(e){case"fb":t=new window.firebase.auth.FacebookAuthProvider;break;case"google":default:t=new window.firebase.auth.GoogleAuthProvider}window.firebase.auth().signInWithPopup(t).then((function(){window.location.reload()})).catch((function(e){var t=e.code,a=e.message;console.error("[".concat(t,"] ").concat(a))}))}},{key:"handleLogout",value:function(){window.firebase.auth().signOut().then((function(){window.location.reload()})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this,t=this.context.router.route,a=this.context.user,n=!!a,o=n&&!!a.uid;return r.a.createElement(O,{color:"dark",dark:!0,expand:"sm"},r.a.createElement(p.v,{href:"https://2yc.tw/KeBiau"},r.a.createElement("img",{src:"".concat("https://2yc.tw/KeBiau","/logo.png"),alt:"",height:"31px"})," ","\u81ea\u5df1\u7684\u8ab2\u8868\u81ea\u5df1\u6392 2.0"),r.a.createElement(p.w,{onClick:this.toggleNavbar}),r.a.createElement(p.e,{isOpen:this.state.navbarIsOpen,navbar:!0},r.a.createElement(p.r,{navbar:!0},r.a.createElement(p.s,null,r.a.createElement(i.b,{className:"/"===t.match.path?"active nav-link":" nav-link",to:"/"},r.a.createElement("i",{className:"fa fa-table","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-sm-none d-md-inline"},r.a.createElement(y,null,"\u6211\u7684"),"\u8ab2\u8868"))),r.a.createElement(p.s,null,r.a.createElement(p.t,{href:"https://fb.com/MOLi.rocks/posts/2104134533131853",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-sm-none d-md-inline"},"\u9078\u8ab2\u6559\u5b78")))),r.a.createElement(p.s,null,r.a.createElement(p.t,{href:"https://github.com/x3388638/KeBiau/issues",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-sm-none d-md-inline"},"\u56de\u5831"))))),r.a.createElement(p.r,{className:"ml-auto",navbar:!0},n&&o&&r.a.createElement(p.s,null,r.a.createElement(p.t,null,r.a.createElement(k,{className:"ml-2"},a.displayName))),n&&o?r.a.createElement(p.s,null,r.a.createElement(p.t,{id:"LogoutBtn",href:"#",onClick:this.handleLogout},r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-inline d-sm-none"},"\u767b\u51fa"),r.a.createElement(p.z,{delay:{show:0,hide:0},placement:"left",isOpen:this.state.logoutTooltip,target:"LogoutBtn",toggle:this.toggleLogoutTooltip},"\u767b\u51fa"))):r.a.createElement(p.A,{nav:!0,inNavbar:!0},r.a.createElement(p.i,{nav:!0,caret:!0},"\u767b\u5165"),r.a.createElement(p.h,{right:!0},r.a.createElement(p.g,{onClick:function(){e.handleLogin("fb")}},r.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"})," ","Facebook"),r.a.createElement(p.g,{onClick:function(){e.handleLogin("google")}},r.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"})," Google"))))))}}]),a}(r.a.Component);w.contextTypes={user:f.a.object,router:f.a.object};a(63);function j(){var e=Object(m.a)(["\n  position: relative;\n"]);return j=function(){return e},e}var x=Object(b.a)(p.f)(j()),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={user:null},n.db=window.firebase.database(),window.firebase.auth().onAuthStateChanged((function(e){e?n.setState({user:Object.assign({},e.providerData[0],{uuid:e.uid})}):n.setState({user:{uid:null}})})),n}return Object(c.a)(a,[{key:"getChildContext",value:function(){return{user:this.state.user}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(x,null,this.props.children))}}]),a}(r.a.Component);_.childContextTypes={user:f.a.object};var T=a(22),N=a(15),M=a.n(N),S=a(44);function D(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ",";\n"]);return D=function(){return e},e}var F=b.a.div(D(),(function(e){return"".concat(e.marginTop||20,"px")})),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(F,this.props,r.a.createElement(S.BarLoader,{color:"#666",loading:!0,height:5,width:200}))}}]),a}(r.a.PureComponent);function R(){var e=Object(m.a)(["\n  background: #f9f9f9;\n  border-radius: 2px;\n  & span {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    &.TableRow__link,\n    &.TableRow__btn {\n      justify-content: center;\n    }\n  }\n\n  @media screen and (max-width: 991px) {\n    padding: 5px;\n    box-shadow: 1px 1px 2px 0px #878787;\n    margin-bottom: 10px;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-template-areas:\n      'cid cname classes'\n      'teacher teacher teacher'\n      'time time time'\n      'location location location'\n      'link link btn';\n    & span {\n      padding: 0 8px;\n    }\n\n    & span.TableRow__cid {\n      grid-area: cid;\n    }\n    & span.TableRow__cname {\n      grid-area: cname;\n      justify-content: center;\n      font-weight: bold;\n    }\n    & span.TableRow__classes {\n      grid-area: classes;\n      justify-content: flex-end;\n      &::after {\n        content: '\u73ed';\n        padding-left: 2px;\n      }\n    }\n    & span.TableRow__time {\n      grid-area: time;\n      &::before {\n        content: '\u6642\u9593:';\n        padding-right: 2px;\n      }\n    }\n    & span.TableRow__location {\n      grid-area: location;\n      &::before {\n        content: '\u5730\u9ede:';\n        padding-right: 2px;\n      }\n    }\n    & span.TableRow__teacher {\n      grid-area: teacher;\n      &::before {\n        content: '\u6559\u5e2b:';\n        padding-right: 2px;\n      }\n    }\n    & span.TableRow__grade {\n      display: none;\n    }\n    & span.TableRow__link {\n      grid-area: link;\n      justify-content: flex-end;\n    }\n    & span.TableRow__btn {\n      grid-area: btn;\n      & button {\n        width: 100%;\n      }\n    }\n  }\n"]);return R=function(){return e},e}function B(){var e=Object(m.a)(["\n  margin: 0 5px 5px;\n  position: sticky;\n  top: 0;\n  left: 0;\n  background: #fff;\n  z-index: 10;\n  border-bottom: 1px solid #adadad;\n  & span {\n    padding: 10px 0px;\n    font-weight: bold;\n  }\n\n  @media screen and (max-width: 992px) {\n    display: none;\n  }\n"]);return B=function(){return e},e}function z(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 2fr 3fr 1fr 1fr 2fr 3fr 1fr 1fr 1fr;\n  grid-gap: 2px;\n  margin: 5px;\n"]);return z=function(){return e},e}var I=b.a.div(z()),A=Object(b.a)(I)(B()),W=Object(b.a)(I)(R()),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={selected:""},n.handleSelect=n.handleSelect.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({selected:"\u901a\u8b58"})}},{key:"handleSelect",value:function(e){this.setState({selected:e.target.value}),this.props.onChangeDept(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"mb-2"},r.a.createElement("strong",null,"\u958b\u8ab2\u55ae\u4f4d\uff1a"),r.a.createElement("select",{value:this.state.selected,onChange:this.handleSelect},Object.keys(this.props.deptList).map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))," ",r.a.createElement(p.b,{className:this.props.filterCourse?"active":"",color:this.props.filterCourse?"danger":"light",size:"sm",onClick:this.props.onFilterCourse},"\u7be9\u9078\u8ab2\u7a0b")," ",r.a.createElement(p.b,{className:this.props.filterConflict?"active":"",color:this.props.filterConflict?"danger":"light",size:"sm",onClick:this.props.onFilterConflict},this.props.filterConflict?"\u53d6\u6d88\u904e\u6ffe":"\u904e\u6ffe\u885d\u5802"),r.a.createElement("a",{className:"float-right mr-2 text-warning",href:"https://ccweb6.ncnu.edu.tw/student/DeptQuerylist.php",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-sitemap","aria-hidden":"true"})," \u5404\u7cfb\u6240\u8ab2\u7a0b\u5730\u5716"))}}]),a}(r.a.Component),J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.courseList;return r.a.createElement("div",null,r.a.createElement(q,this.props),r.a.createElement("div",{style:{overflow:"auto",maxHeight:"487px",background:"#fff",width:"100%"}},!t.length&&r.a.createElement(L,null),!!t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement("span",null,"\u8ab2\u865f"),r.a.createElement("span",null,"\u8ab2\u7a0b\u540d\u7a31"),r.a.createElement("span",null,"\u73ed\u5225"),r.a.createElement("span",null,"\u6642\u6bb5"),r.a.createElement("span",null,"\u6388\u8ab2\u5730\u9ede"),r.a.createElement("span",null,"\u6559\u5e2b"),r.a.createElement("span",null,"\u5e74\u7d1a"),r.a.createElement("span",null),r.a.createElement("span",null)),Object.keys(t).map((function(a){return e.props.filterConflict&&t[a].isConflict?null:r.a.createElement(W,{key:a,"data-uuid":a},r.a.createElement("span",{className:"TableRow__cid"},t[a].cid),r.a.createElement("span",{className:"TableRow__cname"},t[a].cname),r.a.createElement("span",{className:"TableRow__classes"},t[a].classes),r.a.createElement("span",{className:"TableRow__time"},t[a].time),r.a.createElement("span",{className:"TableRow__location"},t[a].location),r.a.createElement("span",{className:"TableRow__teacher"},t[a].teacher),r.a.createElement("span",{className:"TableRow__grade"},t[a].grade),r.a.createElement("span",{className:"TableRow__link"},r.a.createElement("a",{href:"https://ccweb6.ncnu.edu.tw/student/aspmaker_course_opened_detail_viewview.php?showdetail=&year=".concat(t[a].year,"&courseid=").concat(t[a].cid,"&_class=").concat(t[a].classes,"&modal=0"),target:"_blank",rel:"noopener noreferrer"},"\u8ab2\u7db1"," ",r.a.createElement("i",{className:"fa fa-external-link","aria-hidden":"true"}))),r.a.createElement("span",{className:"TableRow__btn"},r.a.createElement(p.b,{color:"success",size:"sm",disabled:!!t[a].isConflict,onClick:function(){e.props.onAddCourse(t[a],!0)}},t[a].isConflict?"\u885d\u5802":"\u52a0\u5165")))})))))}}]),a}(r.a.Component);function G(){var e=Object(m.a)(["\n  vertical-align: middle !important;\n  background: ",";\n  color: ",";\n  &:hover {\n    background: #fafafa;\n    "," {\n      display: initial;\n    }\n\n    "," {\n      display: initial;\n    }\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(m.a)(["\n  display: none;\n  cursor: pointer;\n  font-size: 14px;\n  &:hover {\n    color: #0275d8;\n  }\n"]);return K=function(){return e},e}function P(){var e=Object(m.a)(["\n  display: none;\n  cursor: pointer;\n  color: #c9302c !important;\n  font-size: 20px;\n"]);return P=function(){return e},e}function U(){var e=Object(m.a)(["\n  top: -8px;\n  position: relative;\n"]);return U=function(){return e},e}var V=b.a.span(U()),Z=b.a.span(P()),$=b.a.i(K()),H=b.a.td(G(),(function(e){return"".concat(e.bg," !important")||!1}),(function(e){if(e.bg){var t=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e.bg),a=t.r,n=t.g,r=t.b;return Math.sqrt(a*a*.241+n*n*.691+r*r*.068)<125?"#fff":""}return""}),Z,$);var X=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={mouseEnter:!1},n.handleMouseEnter=n.handleMouseEnter.bind(Object(g.a)(n)),n.handleMouseLeave=n.handleMouseLeave.bind(Object(g.a)(n)),n.handleDel=n.handleDel.bind(Object(g.a)(n)),n.handleEdit=n.handleEdit.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleMouseEnter",value:function(){this.setState({mouseEnter:!0})}},{key:"handleMouseLeave",value:function(){this.setState({mouseEnter:!1})}},{key:"handleDel",value:function(e){if(!this.props.shared){var t=e.target.parentNode.parentNode.parentNode.getAttribute("data-time"),a=e.target.parentNode.parentNode.getAttribute("rowspan");this.props.onDelCourse(t,a,this.props.dayOfWeek)}}},{key:"handleEdit",value:function(e){this.props.shared||this.props.onEditCourse({time:e.target.parentNode.parentNode.parentNode.parentNode.getAttribute("data-time"),dayOfWeek:this.props.dayOfWeek,title:this.props.title,desc:this.props.desc,bg:this.props.bg})}},{key:"hexToRgb",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}},{key:"render",value:function(){return r.a.createElement(H,{bg:this.props.bg,rowSpan:this.props.rowspan||1,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},!this.props.shared&&this.props.title&&this.state.mouseEnter&&r.a.createElement("span",{className:"float-right mr-2"},r.a.createElement(Z,{className:"text-danger",onClick:this.handleDel},"\xd7"),r.a.createElement("br",null),r.a.createElement(V,null,r.a.createElement($,{className:"fa fa-pencil","aria-hidden":"true",onClick:this.handleEdit}))),this.props.title&&this.props.title,r.a.createElement("br",{className:"uniBR"}),this.props.desc&&this.props.desc)}}]),a}(r.a.Component);function Q(){var e=Object(m.a)(["\n  width: auto;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"]);return Q=function(){return e},e}function Y(){var e=Object(m.a)(["\n  display: none;\n  &:hover {\n    cursor: pointer;\n    color: #c9302c !important;\n  }\n"]);return Y=function(){return e},e}var ee=b.a.i(Y()),te=b.a.th(Q(),ee),ae=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){var e=document.getElementById("CustomTable").className.replace("table-bordered","").trim().split(" ");document.getElementById("CustomTable").className=e.join(" "),setTimeout((function(){document.getElementById("CustomTable").className+=" table-bordered"}),1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.y,{id:"CustomTable",bordered:!0,responsive:!0,size:"sm",style:{background:"#fff",tableLayout:"fixed"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"60px"}}),r.a.createElement("th",{className:"text-center"},"\u661f\u671f\u4e00"),r.a.createElement("th",{className:"text-center"},"\u661f\u671f\u4e8c"),r.a.createElement("th",{className:"text-center"},"\u661f\u671f\u4e09"),r.a.createElement("th",{className:"text-center"},"\u661f\u671f\u56db"),r.a.createElement("th",{className:"text-center"},"\u661f\u671f\u4e94"),this.props.tableData.sat&&r.a.createElement(te,{className:"text-center"},"\u661f\u671f\u516d"," ",r.a.createElement(ee,{className:"fa fa-times-circle text-danger","aria-hidden":"true",onClick:function(){!e.props.shared&&e.props.onDelSatOrSun("sat")}})),this.props.tableData.sun&&r.a.createElement(te,{className:"text-center"},"\u661f\u671f\u65e5"," ",r.a.createElement(ee,{className:"fa fa-times-circle text-danger","aria-hidden":"true",onClick:function(){!e.props.shared&&e.props.onDelSatOrSun("sun")}})))),r.a.createElement("tbody",null,["a/08","b/09","c/10","d/11","z/12","e/13","f/14","g/15","h/16","i/17","j/18","k/19","l/20","m/21"].map((function(t,a){return r.a.createElement("tr",{"data-time":t,key:a},r.a.createElement("th",{className:"text-center"},t),Object.keys(e.props.tableData.course[t]).map((function(a,n){var o=e.props.tableData.course[t][a];return null===o?null:(e.props.tableData.sat||"5"!==a)&&(e.props.tableData.sun||"6"!==a)?r.a.createElement(X,Object.assign({},o,{key:n,dayOfWeek:a,shared:e.props.shared,onDelCourse:e.props.onDelCourse,onEditCourse:e.props.onEditCourse})):null})))})))))}}]),a}(r.a.Component),ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={exportDropdownOpen:!1,clearDropdownOpen:!1},n.toggleExportDropdown=n.toggleExportDropdown.bind(Object(g.a)(n)),n.toggleClearDropdown=n.toggleClearDropdown.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"toggleExportDropdown",value:function(){this.setState((function(e){return{exportDropdownOpen:!e.exportDropdownOpen}}))}},{key:"toggleClearDropdown",value:function(){this.setState((function(e){return{clearDropdownOpen:!e.clearDropdownOpen}}))}},{key:"handleExportExcel",value:function(e){document.querySelectorAll(".uniBR").forEach((function(e){e.setAttribute("style","mso-data-placement:same-cell")}));var t='<html><head><meta charset="utf-8"></head><body>'+document.getElementById("CustomTable").parentNode.innerHTML+"</body></html>";window.open("data:application/vnd.ms-excel,"+encodeURIComponent(t)),e.preventDefault()}},{key:"handleExportPNG",value:function(){window.html2canvas(document.querySelectorAll("#CustomTable"),{onrendered:function(e){}}),window.html2canvas(document.querySelectorAll("#CustomTable"),{onrendered:function(e){window.Canvas2Image.saveAsPNG(e)}})}},{key:"render",value:function(){var e={cursor:"pointer",marginBottom:"5px"};return r.a.createElement("div",null,r.a.createElement(p.b,{color:"primary",size:"sm",className:"mr-1",style:e,onClick:this.props.onSave},r.a.createElement("i",{className:"fa fa-floppy-o","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-none d-sm-inline"},"\u5132\u5b58")),r.a.createElement(p.b,{color:"light",size:"sm",className:"mr-1",style:e,onClick:this.props.onShare},r.a.createElement("i",{className:"fa fa-share-square-o","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-none d-sm-inline"},"\u5206\u4eab")),r.a.createElement(p.c,{className:"mr-1",isOpen:this.state.exportDropdownOpen,style:e,size:"sm",toggle:this.toggleExportDropdown},r.a.createElement(p.i,{caret:!0,color:"light"},r.a.createElement("i",{className:"fa fa-download","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-none d-sm-inline"},"\u532f\u51fa")),r.a.createElement(p.h,null,r.a.createElement(p.g,{onClick:this.handleExportExcel},r.a.createElement("i",{className:"fa fa-file-excel-o","aria-hidden":"true"})," .xls"),r.a.createElement(p.g,{onClick:this.handleExportPNG},r.a.createElement("i",{className:"fa fa-file-image-o","aria-hidden":"true"})," .png"))),r.a.createElement("span",{className:"ml-2 mr-2"}),r.a.createElement(p.c,{className:"mr-1",isOpen:this.state.clearDropdownOpen,style:e,size:"sm",toggle:this.toggleClearDropdown},r.a.createElement(p.i,{caret:!0,color:"light"},r.a.createElement("i",{className:"fa fa-repeat","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-none d-sm-inline"},"\u6e05\u9664")),r.a.createElement(p.h,null,r.a.createElement(p.g,{onClick:this.props.onReColor},r.a.createElement("i",{className:"fa fa-magic","aria-hidden":"true"})," \u6a19\u8a18"),r.a.createElement(p.g,{onClick:this.props.onReTable},r.a.createElement("i",{className:"fa fa-table","aria-hidden":"true"})," \u8ab2\u8868"))),r.a.createElement(p.b,{color:"light",size:"sm",className:"mr-1",style:e,onClick:this.props.onClickCustom},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," ",r.a.createElement("span",{className:"d-none d-sm-inline"},"\u81ea\u8a02\u6642\u6bb5")))}}]),a}(r.a.Component),re=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={deptList:{},courseList:{},customTable:{course:{"a/08":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"b/09":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"c/10":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"d/11":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"z/12":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"e/13":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"f/14":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"g/15":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"h/16":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"i/17":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"j/18":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"k/19":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"l/20":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}},"m/21":{0:{},1:{},2:{},3:{},4:{},5:{},6:{}}},sat:!1,sun:!1},modalEditCourse:{open:!1,modalTitle:"\u7de8\u8f2f\u8ab2\u7a0b",title:"",desc:"",bg:""},modalCustomCourseOpen:!1,filterConflict:!1,modalFilterCourseOpen:!1,filterCourseForm:{cname:"",teacher:"",time:"",location:""}},n.timeMap={a:"a/08",b:"b/09",c:"c/10",d:"d/11",z:"z/12",e:"e/13",f:"f/14",g:"g/15",h:"h/16",i:"i/17",j:"j/18",k:"k/19",l:"l/20",m:"m/21"},n.timeOrder=["a","b","c","d","z","e","f","g","h","i","j","k","l","m"],n.db=window.firebase.database(),n.getCourseList=n.getCourseList.bind(Object(g.a)(n)),n.getCourseData=n.getCourseData.bind(Object(g.a)(n)),n.changeDept=n.changeDept.bind(Object(g.a)(n)),n.getTableData=n.getTableData.bind(Object(g.a)(n)),n.checkConflict=n.checkConflict.bind(Object(g.a)(n)),n.handleDelSatOrSun=n.handleDelSatOrSun.bind(Object(g.a)(n)),n.handleDelCourse=n.handleDelCourse.bind(Object(g.a)(n)),n.handleOpenEditModal=n.handleOpenEditModal.bind(Object(g.a)(n)),n.toggleModalEditCourse=n.toggleModalEditCourse.bind(Object(g.a)(n)),n.handleEditCourse=n.handleEditCourse.bind(Object(g.a)(n)),n.handleReColor=n.handleReColor.bind(Object(g.a)(n)),n.handleReTable=n.handleReTable.bind(Object(g.a)(n)),n.toggleModalCustomCourse=n.toggleModalCustomCourse.bind(Object(g.a)(n)),n.handleAddCustomCourse=n.handleAddCustomCourse.bind(Object(g.a)(n)),n.handleSave=n.handleSave.bind(Object(g.a)(n)),n.handleShare=n.handleShare.bind(Object(g.a)(n)),n.filterConflict=n.filterConflict.bind(Object(g.a)(n)),n.toggleModalFilterCourse=n.toggleModalFilterCourse.bind(Object(g.a)(n)),n.handleFilterCourse=n.handleFilterCourse.bind(Object(g.a)(n)),n.handleClearFilterCourse=n.handleClearFilterCourse.bind(Object(g.a)(n)),n.handleFilterCourseChange=n.handleFilterCourseChange.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getCourseData(),this.getTableData()}},{key:"getCourseList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u901a\u8b58",a=window.sessionStorage.courseList?JSON.parse(window.sessionStorage.courseList):"{}";this.db.ref("course/".concat(t)).once("value").then((function(n){e.setState({courseList:n.val()||{}}),window.sessionStorage.courseList=JSON.stringify(Object.assign({},a,Object(T.a)({},t,n.val())))}))}},{key:"getCourseData",value:function(){var e=this;this.db.ref("deptList/").once("value").then((function(t){window.sessionStorage.deptList=JSON.stringify(t.val()||{}),e.setState({deptList:t.val()||{}})})),this.getCourseList()}},{key:"changeDept",value:function(e){this.getCourseList(e)}},{key:"getTableData",value:function(){var e=this,t=this.context.user;null!==t?t.uid&&this.db.ref("customTable/".concat(t.uuid)).once("value").then((function(t){var a=t.val();a&&e.setState({customTable:Object.assign({},JSON.parse(a))})})):setTimeout(this.getTableData,100)}},{key:"checkConflict",value:function(e,t){var a=this,n=e.time.toLowerCase(),r=this.apartCourseTime(n),o=!0;if(r.some((function(e){var n=a.validateTime(e);return!n.valid&&(t&&alert(n.msg),o=!1,!0)})),o){var l=!1,i=M()(this.state.customTable);return r.forEach((function(n,r){if(!l){var o=n,s=o[0],c=o[1],u=o.length-1;if(null===i.course[a.timeMap[c]][s-1]||i.course[a.timeMap[c]][s-1].title)l=!0;else{t&&(i.course[a.timeMap[c]][s-1]={rowspan:u,title:e.cname||e.title,desc:e.desc||"".concat(e.location," ").concat(e.teacher),bg:e.bg||""});for(var d=a.timeOrder.indexOf(c)+1,m=a.timeMap[a.timeOrder[d]],p=0;p<u-1;p++){var h=i.course[m][s-1];if(null===h||h.title)return void(l=!0);t&&(i.course[m][s-1]=null),d++,m=a.timeMap[a.timeOrder[d]]}t&&("6"!==s||i.sat||(i.sat=!0),"7"!==s||i.sun||(i.sun=!0))}}})),l&&t?void alert("!!! \u885d\u5802 !!!"):(t&&this.setState({customTable:M()(i)}),l)}return!1}},{key:"validateTime",value:function(e){if(/^[1-7]{1}[A-MZa-mz]+$/.test(e)){for(var t=-1,a=0,n=1;n<e.length;n++){var r=e[n].charCodeAt();if(-1!==t){if(122===r){if(100!==t){a++;break}t=r;continue}if(101===r){if(122!==t){a++;break}t=r;continue}if(r!==+t+1){a++;break}}t=r}return a?{valid:!1,msg:"\u6642\u6bb5\u4e0d\u9023\u7e8c"}:{valid:!0}}return{valid:!1,msg:"\u6642\u9593\u683c\u5f0f\u932f\u8aa4"}}},{key:"apartCourseTime",value:function(e){var t=[];return""===e?["zzzzz"]:e.replace(/[1-7]{1}[A-MZa-mz]+/g,"").length>0?(t.push(e),t):e.match(/[1-7]{1}[A-MZa-mz]+/g)}},{key:"handleDelSatOrSun",value:function(e){var t=M()(this.state.customTable);t[e]=!1;var a="sat"===e?5:6;Object.keys(t.course).forEach((function(e,n){t.course[e][a]={}})),this.setState({customTable:M()(t)})}},{key:"handleDelCourse",value:function(e,t,a){var n=M()(this.state.customTable);n.course[e][a]={};for(var r=this.timeOrder.indexOf(e[0])+1,o=this.timeMap[this.timeOrder[r]],l=0;l<t-1;l++)n.course[o][a]={},r++,o=this.timeMap[this.timeOrder[r]];this.setState({customTable:M()(n)})}},{key:"handleOpenEditModal",value:function(e){var t=M()(this.state.modalEditCourse);t.open=!0,t.modalTitle="\u7de8\u8f2f ".concat(e.title),t.title=e.title,t.desc=e.desc,t.bg=e.bg,t.time=e.time,t.dayOfWeek=e.dayOfWeek,this.setState({modalEditCourse:M()(t)})}},{key:"toggleModalEditCourse",value:function(){var e=M()(this.state.modalEditCourse);e.open=!e.open,this.setState({modalEditCourse:M()(e)})}},{key:"handleEditCourse",value:function(e,t){if(""!==document.getElementById("ModalEditCourse__inputTitle").value){var a=M()(this.state.modalEditCourse);a.open=!1;var n=M()(this.state.customTable);n.course[e][t].title=document.getElementById("ModalEditCourse__inputTitle").value,n.course[e][t].desc=document.getElementById("ModalEditCourse__inputDesc").value,n.course[e][t].bg=document.getElementById("ModalEditCourse__inputBg").value,this.setState({modalEditCourse:M()(a),customTable:M()(n)})}else alert("\u6a19\u984c\u4e0d\u5f97\u70ba\u7a7a")}},{key:"handleReColor",value:function(){var e=M()(this.state.customTable);Object.keys(e.course).forEach((function(t){Object.keys(e.course[t]).forEach((function(a){e.course[t][a]&&(e.course[t][a].bg="")}))})),this.setState({customTable:M()(e)})}},{key:"handleReTable",value:function(){var e=M()(this.state.customTable);Object.keys(e.course).forEach((function(t){Object.keys(e.course[t]).forEach((function(a){e.course[t][a]={}}))})),e.sat=!1,e.sun=!1,this.setState({customTable:M()(e)})}},{key:"toggleModalCustomCourse",value:function(){this.setState((function(e){return{modalCustomCourseOpen:!e.modalCustomCourseOpen}}))}},{key:"handleAddCustomCourse",value:function(){var e=document.getElementById("ModalCustomCourse__inputTime").value,t=document.getElementById("ModalCustomCourse__inputTitle").value;e&&t?(this.checkConflict({time:e,title:t,desc:document.getElementById("ModalCustomCourse__inputDesc").value||" ",bg:document.getElementById("ModalCustomCourse__inputBg").value},!0),this.toggleModalCustomCourse()):alert("\u6642\u9593\u3001\u6a19\u984c\u4e0d\u5f97\u70ba\u7a7a")}},{key:"handleSave",value:function(){this.db.ref("customTable/".concat(this.context.user.uuid)).set(JSON.stringify(this.state.customTable)).then((function(){alert("\u5132\u5b58\u6210\u529f!")}))}},{key:"handleShare",value:function(){var e=this.context.user.uuid,t=(Date.now()*Math.random()*Math.random()).toString(16).replace(".","").substring(2,6);this.db.ref("sharedTable/".concat(e)).set(JSON.stringify(Object(T.a)({},t,this.state.customTable))).then((function(){prompt("\u5df2\u5c07\u7576\u524d\u8ab2\u8868\u5206\u4eab\u65bc\u4ee5\u4e0b\u9023\u7d50","".concat("https://2yc.tw/KeBiau","/#/share/").concat(e).concat(t))}))}},{key:"filterConflict",value:function(){this.setState((function(e){return{filterConflict:!e.filterConflict}}))}},{key:"toggleModalFilterCourse",value:function(){this.setState((function(e){return{modalFilterCourseOpen:!e.modalFilterCourseOpen}}))}},{key:"handleFilterCourseChange",value:function(e,t){var a=e.target.value;this.setState((function(e){return{filterCourseForm:Object.assign({},e.filterCourseForm,Object(T.a)({},t,a))}}))}},{key:"handleFilterCourse",value:function(){this.setState((function(){return{modalFilterCourseOpen:!1}}))}},{key:"handleClearFilterCourse",value:function(){this.setState((function(){return{filterCourseForm:{cname:"",teacher:"",time:"",location:""},modalFilterCourseOpen:!1}}))}},{key:"render",value:function(){var e=this,t=M()(this.state.courseList),a=!1,n=[],o=this.state.filterCourseForm;return Object.keys(t).reduce((function(r,l){return t[l].isConflict=e.checkConflict(t[l],!1),Object.keys(o).every((function(e){return""===o[e]||(a=!0,!!t[l][e].toUpperCase().includes(o[e].toUpperCase()))}))&&n.push(t[l]),n}),[]),r.a.createElement("div",{style:{background:"#fff",padding:"20px 5px",boxShadow:"0 0 10px 0 #080808"}},r.a.createElement(p.x,{className:"mb-2"},r.a.createElement(p.d,{xs:"12"},this.context.user&&this.context.user.uid&&r.a.createElement(ne,{onSave:this.handleSave,onShare:this.handleShare,onReColor:this.handleReColor,onReTable:this.handleReTable,onClickCustom:this.toggleModalCustomCourse}))),r.a.createElement(p.x,{className:"mb-2"},r.a.createElement(p.d,{xs:"12"},r.a.createElement(ae,{tableData:this.state.customTable,onDelSatOrSun:this.handleDelSatOrSun,onDelCourse:this.handleDelCourse,onEditCourse:this.handleOpenEditModal}),r.a.createElement("hr",null))),r.a.createElement(p.x,null,r.a.createElement(p.d,{xs:"12"},r.a.createElement(J,{deptList:this.state.deptList,courseList:n,onChangeDept:this.changeDept,onAddCourse:this.checkConflict,filterConflict:this.state.filterConflict,onFilterConflict:this.filterConflict,filterCourse:a,onFilterCourse:this.toggleModalFilterCourse}))),r.a.createElement(p.n,{id:"ModalEditCourse",isOpen:this.state.modalEditCourse.open,toggle:this.toggleModalEditCourse},r.a.createElement(p.q,{id:"ModalEditCourse__title",toggle:this.toggleModalEditCourse},this.state.modalEditCourse.modalTitle),r.a.createElement(p.o,null,r.a.createElement(p.j,null,r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalEditCourse__inputTitle",sm:2},"\u6a19\u984c"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalEditCourse__inputTitle",defaultValue:this.state.modalEditCourse.title,placeholder:"\u8ab2\u7a0b\u540d\u7a31"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalEditCourse__inputDesc",sm:2},"\u5167\u5bb9"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalEditCourse__inputDesc",defaultValue:this.state.modalEditCourse.desc,placeholder:"\u6559\u5e2b\u3001\u5730\u9ede"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalEditCourse__inputBg",sm:2},"\u6a19\u8a18"),r.a.createElement(p.d,{sm:10},r.a.createElement("input",{id:"ModalEditCourse__inputBg",type:"color",defaultValue:this.state.modalEditCourse.bg||"#ffffff",style:{verticalAlign:"sub",width:"100%"}}))))),r.a.createElement(p.p,null,r.a.createElement(p.b,{color:"primary",onClick:function(){e.handleEditCourse(e.state.modalEditCourse.time,e.state.modalEditCourse.dayOfWeek)}},"\u78ba\u5b9a"))),r.a.createElement(p.n,{id:"ModalCustomCourse",isOpen:this.state.modalCustomCourseOpen,toggle:this.toggleModalCustomCourse},r.a.createElement(p.q,{toggle:this.toggleModalCustomCourse},"\u81ea\u8a02\u6642\u6bb5"),r.a.createElement(p.o,null,r.a.createElement(p.j,null,r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalCustomCourse__inputTime",sm:2},"\u6642\u9593"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalCustomCourse__inputTime",placeholder:"2bcd4jk"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalCustomCourse__inputTitle",sm:2},"\u6a19\u984c"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalCustomCourse__inputTitle",placeholder:"meeting"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalCustomCourse__inputDesc",sm:2},"\u5167\u5bb9"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalCustomCourse__inputDesc",placeholder:"R438 with YCC"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalCustomCourse__inputBg",sm:2},"\u6a19\u8a18"),r.a.createElement(p.d,{sm:10},r.a.createElement("input",{id:"ModalCustomCourse__inputBg",type:"color",defaultValue:"#ffffff",style:{verticalAlign:"sub",width:"100%"}}))))),r.a.createElement(p.p,null,r.a.createElement(p.b,{color:"primary",onClick:this.handleAddCustomCourse},"\u78ba\u5b9a"))),r.a.createElement(p.n,{id:"ModalFilterCourse",isOpen:this.state.modalFilterCourseOpen,toggle:this.toggleModalFilterCourse},r.a.createElement(p.q,{id:"ModalFilterCourse__title",toggle:this.toggleModalFilterCourse},"\u7be9\u9078\u8ab2\u7a0b"),r.a.createElement(p.o,null,r.a.createElement(p.j,null,r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalFilterCourse__inputCname",sm:2},"\u8ab2\u540d"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalFilterCourse__inputCname",value:this.state.filterCourseForm.cname,onChange:function(t){e.handleFilterCourseChange(t,"cname")},placeholder:"\u8ab2\u7a0b\u540d\u7a31"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalFilterCourse__inputTeacher",sm:2},"\u6559\u5e2b"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalFilterCourse__inputTeacher",value:this.state.filterCourseForm.teacher,onChange:function(t){e.handleFilterCourseChange(t,"teacher")},placeholder:"\u6388\u8ab2\u6559\u5e2b"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalFilterCourse__inputTime",sm:2},"\u6642\u9593"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalFilterCourse__inputTime",value:this.state.filterCourseForm.time,onChange:function(t){e.handleFilterCourseChange(t,"time")},placeholder:"1bcd"}))),r.a.createElement(p.k,{row:!0},r.a.createElement(p.m,{for:"ModalFilterCourse__inputLocation",sm:2},"\u6559\u5ba4"),r.a.createElement(p.d,{sm:10},r.a.createElement(p.l,{type:"text",id:"ModalFilterCourse__inputLocation",value:this.state.filterCourseForm.location,onChange:function(t){e.handleFilterCourseChange(t,"location")},placeholder:"\u7ba1268"}))))),r.a.createElement(p.p,null,r.a.createElement(p.b,{color:"primary",onClick:this.handleFilterCourse},"\u7be9\u9078"),r.a.createElement(p.b,{color:"danger",onClick:this.handleClearFilterCourse},"\u53d6\u6d88\u7be9\u9078"))))}}]),a}(r.a.Component);re.contextTypes={user:f.a.object};var oe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(re,null))}}]),a}(r.a.Component);function le(){var e=Object(m.a)(["\n  background: #fff;\n  padding: 20px 5px;\n  box-shadow: 0 0 10px 0 #080808;\n  margin-top: 55px;\n  margin-bottom: 55px;\n"]);return le=function(){return e},e}var ie=b.a.div(le()),se=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={customTable:"Loading..."},n.db=window.firebase.database(),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.context.router.route.match.params.hash,a=t.substring(0,t.length-4),n=t.substring(t.length-4,t.length);this.db.ref("sharedTable/".concat(a)).once("value").then((function(t){var a=t.val();if(null!==a){var r=JSON.parse(a)[n];r?e.setState({customTable:r}):e.setState({customTable:"\u9023\u7d50\u7121\u6548"})}else e.setState({customTable:"\u9023\u7d50\u7121\u6548"})}))}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(ie,null,r.a.createElement(p.x,null,r.a.createElement(p.d,{xs:"12"},"string"===typeof this.state.customTable&&r.a.createElement(p.a,{className:"text-center",color:"warning"},this.state.customTable),"string"!==typeof this.state.customTable&&r.a.createElement(ae,{tableData:this.state.customTable,shared:!0})))))}}]),a}(r.a.Component);se.contextTypes={router:f.a.object};var ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}window.firebase.initializeApp({apiKey:"AIzaSyDsof_DycXOzeXGVwix3nTgHGZwtseEzJ0",authDomain:"kebiau-7864f.firebaseapp.com",databaseURL:"https://kebiau-7864f.firebaseio.com",projectId:"kebiau-7864f",storageBucket:"kebiau-7864f.appspot.com",messagingSenderId:"223133259969"}),l.a.render(r.a.createElement(i.a,null,r.a.createElement(i.e,null,r.a.createElement(i.d,{exact:!0,path:"/",component:oe}),r.a.createElement(i.d,{exact:!0,path:"/share/:hash",component:se}),r.a.createElement(i.c,{from:"*",to:"/"}))),document.getElementById("app")),function(){if("serviceWorker"in navigator){if(new URL("/KeBiau",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/KeBiau","/service-worker.js");ce?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):ue(e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.41bdd30a.chunk.js.map