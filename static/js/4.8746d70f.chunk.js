(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[4],{43:function(e,t,a){"use strict";var s=a(26),r=a(27),n=function(){function e(){Object(s.a)(this,e)}return Object(r.a)(e,[{key:"setItem",value:function(e,t){if("string"!==typeof t)throw new Error("Value of localStorage by key ".concat(e," is not string."));if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.setItem(e,t)}},{key:"getItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));return localStorage.getItem(e)}},{key:"unsetItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}();t.a=new n},44:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return o}));var s="first-name",r="last-name",n="email",o="password"},45:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var s=a(47),r=(a(53),function(){return s.b.success("The message has been successfully sent!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",progress:void 0})}),n=function(){return s.b.error("Something went wrong! Try again, please.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",progress:void 0})}},46:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return o}));var s=new RegExp(/\S+@\S+\.\S+/),r=(new RegExp(/^\+7 \((\d{3})\) (\d{3})-(\d{2})-(\d{2})$/),new RegExp(/^7(\d{10})$/),function(e){return e&&""!==e.trim()?"":"The field cannot be empty"}),n=function(e){return e&&""!==e.trim()?1===e.trim().split(/\s+/).length&&s.test(e)?"":"Invalid email.":"The field cannot be empty"},o=function(e){return e?""===e.trim()?"Password cannot contains spaces":e?e.length>=6?"":"Password must be at least 6 characters long.":"":"The field cannot be empty"}},48:function(e,t,a){"use strict";t.a=a.p+"static/media/github.04be58c1.svg"},49:function(e,t,a){"use strict";t.a=a.p+"static/media/gitlab.a6e2e6ad.svg"},50:function(e,t,a){"use strict";t.a=a.p+"static/media/logo.f78c8a42.webp"},51:function(e,t,a){"use strict";t.a=a.p+"static/media/Feedback.8e07ee44.gif"},52:function(e,t,a){"use strict";t.a=a.p+"static/media/Bibliophile.8576124c.gif"},60:function(e,t,a){e.exports={BottomNavigation:"BottomNavigation_BottomNavigation__2HFE7",BottomNavigation__item:"BottomNavigation_BottomNavigation__item__5lTkG",Link__text_active:"BottomNavigation_Link__text_active__3AydY",Link__icon_active:"BottomNavigation_Link__icon_active__BnCtP",BottomNavigation__link:"BottomNavigation_BottomNavigation__link__300R9",Link__icon:"BottomNavigation_Link__icon__2uTlq",Link__text:"BottomNavigation_Link__text__2wcME"}},64:function(e,t,a){e.exports={header:"Header_header__3vQD3"}},65:function(e,t,a){e.exports={headerLogo:"HeaderLogo_headerLogo__2eAPm"}},66:function(e,t,a){e.exports={noScrollbar:"Library_noScrollbar__2t1n1",loader:"Library_loader__2_w4G",spinner:"Library_spinner__1V63f"}},67:function(e,t,a){e.exports={"will-change":"Contacts_will-change__3Z5NT",cursor:"Contacts_cursor__102rH",Feedback__image:"Contacts_Feedback__image__3JhO5"}},68:function(e,t,a){},69:function(e,t,a){e.exports={Background:"LoaderWithBackground_Background__1mKmW"}},70:function(e,t,a){e.exports={Auth:"Auth_Auth__3GWZw",Auth__image:"Auth_Auth__image__29oKJ"}},72:function(e,t,a){"use strict";a.r(t);var s=a(12),r=a(1),n=a(3),o=a(47),i=a(43),c=a(44),l=a(25),d=a(60),b=a.n(d),u=a(71),m=a(63),j=a(5),f=function(){var e=Object(n.g)().pathname,t=Object(r.useState)(null),a=Object(s.a)(t,2),o=a[0],i=a[1],c=[{name:"Library",pathname:"/books-review/library",icon:m.a},{name:"My Bookshelf",pathname:"/books-review/bookshelf",icon:m.b},{name:"Contacts",pathname:"/books-review/contacts",icon:m.c}];Object(r.useEffect)((function(){var t=c.find((function(t){return t.pathname===e}));i((null===t||void 0===t?void 0:t.name)||c[0].name)}),[]);return Object(j.jsx)("ul",{className:b.a.BottomNavigation,children:c.map((function(e,t){return Object(j.jsx)("li",{onClick:(a=e.name,function(){i(a)}),className:b.a.BottomNavigation__item,children:Object(j.jsxs)(l.b,{to:e.pathname,className:b.a.BottomNavigation__link,children:[Object(j.jsx)(u.a,{icon:e.icon,className:"".concat(b.a.Link__icon," ").concat(o===e.name?b.a.Link__icon_active:"")}),Object(j.jsx)("span",{className:"".concat(b.a.Link__text," ").concat(o===e.name?b.a.Link__text_active:""),children:e.name})]})},t);var a}))})},x=a(64),h=a.n(x),p=a(65),g=a.n(p),v=a(50);var O=function(){return Object(j.jsx)("img",{className:g.a.headerLogo,src:v.a,alt:"logo"})},w=a(48),N=a(49),y=function(){var e=Object(n.h)();return Object(j.jsxs)("header",{className:h.a.header,children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"flex justify-center items-center gap-x-1.5 mt-4 lg:mt-0",children:[Object(j.jsx)("a",{href:"https://github.com/Assetbekov-Almar",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:w.a,alt:"github"})}),Object(j.jsx)("a",{href:"https://gitlab.com/almar-a",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:N.a,className:"w-8 h-8",alt:"gitlab"})}),Object(j.jsx)("button",{className:"flex border-2 items-center justify-center px-2 rounded",onClick:function(){i.a.clear(),e("/auth")},children:"Sign out"})]})]})},_=a(15),k=a(66),S=a.n(k),C=a(9),I=a(22),B=Object(_.b)((function(e){return{library:e.libraryReducer.books,foundBooks:e.getBooksReducer.books,loading:e.getBooksReducer.loading,error:e.getBooksReducer.error}}),{addBook:C.f,removeBook:C.j,getBooksRequest:C.h,removeReview:I.c})((function(e){var t=e.getBooksRequest,a=e.foundBooks,n=e.loading,o=e.error,i=e.addBook,c=e.removeBook,l=e.library,d=e.removeReview,b=Object(r.useState)(""),u=Object(s.a)(b,2),m=u[0],f=u[1];if(n)return Object(j.jsx)("div",{className:"flex justify-center items-center mt-5",children:Object(j.jsx)("div",{className:"".concat(S.a.loader," ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32")})});if(o)return Object(j.jsx)("div",{children:"error..."});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"flex items-center justify-center",children:Object(j.jsxs)("form",{className:"flex rounded",onSubmit:function(e){e.preventDefault(),t(m)},children:[Object(j.jsx)("input",{type:"text",value:m,onChange:function(e){f(e.target.value)},className:"px-4 py-2 w-full bg-gray-200 appearance-none outline-none border-2 border-gray-200 focus:border-gray-300 box-border rounded rounded-r-none",placeholder:"Search..."}),Object(j.jsx)("button",{type:"submit",className:"flex  border-2 items-center justify-center px-4 rounded rounded-l-none border-l-0",children:Object(j.jsx)("svg",{className:"w-6 h-6 text-gray-600",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})})})]})}),Object(j.jsx)("div",{className:"flex flex-wrap gap-10 justify-center m-10",children:null===a||void 0===a?void 0:a.map((function(e,t){var a,s,r,n=e.volumeInfo;return Object(j.jsxs)("div",{className:"relative",children:[l.filter((function(t){return e.id===t.id})).length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"absolute z-40 -top-3 -left-3 bg-red-400 text-blue-100 p-1 w-18 h-8 rounded-full",onClick:function(){c(e),d(e)},children:"Remove"}),Object(j.jsx)("button",{className:"absolute z-40 -top-3 -right-3 bg-gray-400 text-blue-100 p-1 w-16 h-8 rounded-full",children:"Added"})]}):Object(j.jsx)("button",{className:"absolute z-40 -top-3 -right-3 bg-green-500 text-blue-100 p-1 w-10 h-10 rounded-full",onClick:function(){return i(e)},children:"Add"}),Object(j.jsx)("div",{className:"flex max-w-sm bg-white shadow-md rounded-lg relative overflow-hidden mx-auto",children:Object(j.jsxs)("div",{className:"overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card","data-movie-id":"438631",children:[Object(j.jsx)("div",{className:"absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"}),Object(j.jsx)("div",{className:"".concat(S.a.noScrollbar," h-500 overflow-auto relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"),children:Object(j.jsxs)("div",{className:"poster__info align-self-end w-full",children:[Object(j.jsx)("div",{className:"h-32"}),Object(j.jsxs)("div",{className:"space-y-6 detail_info",children:[Object(j.jsxs)("div",{className:"flex flex-col space-y-2 inner",children:[Object(j.jsx)("h3",{className:"text-2xl font-bold text-white","data-unsp-sanitized":"clean",children:n.title}),Object(j.jsx)("div",{className:"mb-0 text-lg text-gray-400",children:null===n||void 0===n||null===(a=n.authors)||void 0===a?void 0:a.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))})]}),Object(j.jsxs)("div",{className:"flex flex-col datos_col",children:[Object(j.jsx)("div",{className:"text-sm text-gray-400",children:"Genre:"}),Object(j.jsx)("div",{className:"release",children:(null===n||void 0===n||null===(s=n.categories)||void 0===s?void 0:s.map((function(e,t){return Object(j.jsx)("div",{children:e},t)})))||"not given"})]}),Object(j.jsxs)("div",{className:"flex flex-row justify-around datos",children:[Object(j.jsxs)("div",{className:"flex flex-col datos_col",children:[Object(j.jsx)("div",{className:"text-sm text-gray-400",children:"Rating:"}),Object(j.jsx)("div",{className:"popularity",children:n.ratingsCount||"-"})]}),Object(j.jsxs)("div",{className:"flex flex-col datos_col",children:[Object(j.jsx)("div",{className:"text-sm text-gray-400",children:"Pages:"}),Object(j.jsx)("div",{className:"release",children:n.pageCount||"not provided"})]})]}),Object(j.jsxs)("div",{className:"flex flex-col overview",children:[Object(j.jsx)("div",{className:"flex flex-col"}),Object(j.jsx)("div",{className:"text-xs text-gray-400 mb-2",children:"Overview:"}),Object(j.jsx)("p",{className:"text-xs text-gray-100 mb-6",children:n.description||"not provided"})]})]})]})}),Object(j.jsx)("img",{alt:"thumbnail",className:"absolute inset-0 transform w-full -translate-y-4",src:null===n||void 0===n||null===(r=n.imageLinks)||void 0===r?void 0:r.thumbnail,style:{filter:"grayscale(0)"}})]})})]},t)}))})]})})),E=a(18),L=a(11),M=a(45),P=Object(_.b)((function(e){return{books:e.libraryReducer.books,reviews:e.bookshelfReducer.reviews}}),{setReview:I.d})((function(e){var t=e.books,a=e.reviews,n=e.setReview,o=Object(r.useState)([]),i=Object(s.a)(o,2),c=i[0],l=i[1],d=function(e,t){return function(){var s,r,o,i;(null===(s=c[t])||void 0===s?void 0:s.review)===(null===(r=a.find((function(t){return t.id===e})))||void 0===r?void 0:r.review)&&(null===(o=c[t])||void 0===o?void 0:o.starNumber)===(null===(i=a.find((function(t){return t.id===e})))||void 0===i?void 0:i.rating)||(n({id:e,review:c[t].review,rating:c[t].starNumber}),Object(M.b)())}},b=function(e){return function(t){l((function(a){var s;return Object.assign(Object(L.a)(a),Object(E.a)({},e,{review:t.target.value,starNumber:null===(s=c[e])||void 0===s?void 0:s.starNumber}))}))}},u=function(e,t){return function(){l((function(a){var s;return Object.assign(Object(L.a)(a),Object(E.a)({},e,{review:null===(s=c[e])||void 0===s?void 0:s.review,starNumber:t}))}))}};return 0===t.length?Object(j.jsxs)("div",{className:"text-center mt-5 text-2xl",children:["It seems like you don't have any books on your shelves.",Object(j.jsx)("br",{}),"You can go to Library and pick any book you want."]}):Object(j.jsx)("div",{className:"m-2",children:t.map((function(e,t){var s,r,n,o,i=e.volumeInfo;return Object(j.jsxs)("div",{className:"shadow-xl mb-10 border-2 border-black-600 rounded",children:[Object(j.jsxs)("div",{className:"pt-10",children:[Object(j.jsxs)("div",{className:"max-w-sm rounded overflow-hidden flex my-0 mx-auto",children:[Object(j.jsx)("img",{className:"w-50 h-40 m-auto",src:null===(s=i.imageLinks)||void 0===s?void 0:s.thumbnail,alt:""}),Object(j.jsxs)("div",{className:"px-6 py-4 w-60",children:[Object(j.jsx)("div",{className:"font-bold text-xl mb-2",children:null===i||void 0===i||null===(r=i.authors)||void 0===r?void 0:r.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}))}),Object(j.jsx)("div",{className:"font-bold text-xl mb-2",children:i.title}),Object(j.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.11.2/css/all.css"}),Object(j.jsx)("ul",{className:"flex justify-center",children:Object(L.a)(Array(5).keys()).map((function(s,r){var n,o;return Object(j.jsx)("li",{onMouseMove:u(t,r+1),children:Object(j.jsx)("i",{className:"fa-star fa-sm text-yellow-500 mr-1 cursor-pointer\n                                      star-".concat(r+1," ").concat(r+1<=((null===(n=c[t])||void 0===n?void 0:n.starNumber)||(null===(o=a.find((function(t){return t.id===e.id})))||void 0===o?void 0:o.rating))?"fas":"far")})},r+1)}))})]})]}),Object(j.jsx)("textarea",{className:"p-2.5 mt-5 h-40 text-gray-700 w-full text-base border-t-2 border-b-2 border-black-200 focus:outline-none focus:border-gray-300 focus:border-opacity-85 resize-none ",defaultValue:null===(n=a.find((function(t){return t.id===e.id})))||void 0===n?void 0:n.review,onChange:b(t),value:null===(o=c[t])||void 0===o?void 0:o.review,placeholder:"Type here..."})]}),Object(j.jsx)("div",{className:"flex justify-end p-2 gap-4",children:Object(j.jsx)("button",{className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",onClick:d(e.id,t),children:"Save"})})]},t)}))})})),T=a(21),F=a(67),R=a.n(F),A=a(51),z=a(54),H=(a(68),function(e){var t=e.position,a=void 0===t?"absolute":t;return Object(j.jsx)("div",{className:"loader",style:{position:a},"data-testid":"loader",children:Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignSelf:"center"},className:"lds-ring",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}),D=a(69),W=a.n(D),q=function(e){var t=e.loading,a=e.position,s=void 0===a?"absolute":a;return t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(H,{position:s}),Object(j.jsx)("div",{className:W.a.Background})]}):null},K=function(){var e=Object(r.useState)({from_name:"",to_name:"Books Review",message:"",reply_to:""}),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),c=i[0],l=i[1],d=Object(r.useState)(!1),b=Object(s.a)(d,2),u=b[0],m=b[1],f=function(e){n(Object(T.a)(Object(T.a)({},a),{},Object(E.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"m-5",children:[Object(j.jsxs)("div",{className:"mb-16 group",children:[Object(j.jsxs)("span",{className:"relative",children:[Object(j.jsx)("span",{className:"h-20 pt-2 text-4xl overflow-x-hidden whitespace-nowrap text-brand-accent text-blue-700",children:"We care what you think!"}),Object(j.jsx)("span",{className:"".concat(R.a.cursor," absolute -top-4 left-0 -top-1 inline-block h-10 bg-white w-full animate-type will-change")})]}),Object(j.jsx)("p",{className:"text-2xl text-gray-500 mt-2 animate-appear opacity-0",children:"Give us feedback, so that we know what we should improve to deliver a better experience."}),Object(j.jsx)("img",{src:A.a,alt:"feedback",className:R.a.Feedback__image})]}),Object(j.jsxs)("form",{className:"w-full max-w-lg relative",onSubmit:function(e){e.preventDefault(),Object.values(a).some((function(e){return""===e}))?l(!0):(l(!1),m(!0),Object(z.a)("service_0c0t89b","template_f1fo9tg",a,"user_fzMcAS4TUL53ER9r0bZex").then((function(e){200===e.status?(Object(M.b)(),window.scrollTo(0,0),m(!1),n({from_name:"",to_name:"",message:"",reply_to:""}),"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then((function(e){console.log(e);var t={body:"Your message has been delivered successfully! Thank you for your contribution!",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.showNotification("Delivered!",t)}))):Object(M.a)()})).catch((function(){m(!1)})))},children:[Object(j.jsx)(q,{loading:u}),Object(j.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-6",children:[Object(j.jsxs)("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[Object(j.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"from-name",children:"From"}),Object(j.jsx)("input",{autoComplete:"off",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"from-name",type:"text",name:"from_name",placeholder:"Name",value:a.from_name,onChange:f})]}),Object(j.jsxs)("div",{className:"w-full md:w-1/2 px-3",children:[Object(j.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"to-name",children:"To"}),Object(j.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"to-last-name",type:"text",name:"to_name",placeholder:"Name",value:a.to_name,disabled:!0,onChange:f})]})]}),Object(j.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:Object(j.jsxs)("div",{className:"w-full px-3",children:[Object(j.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"email",children:"E-mail"}),Object(j.jsx)("input",{autoComplete:"off",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"email",type:"email",name:"reply_to",placeholder:"Your email",value:a.reply_to,onChange:f})]})}),Object(j.jsx)("div",{className:"flex flex-wrap -mx-3 mb-3",children:Object(j.jsxs)("div",{className:"w-full px-3",children:[Object(j.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"password",children:"Message"}),Object(j.jsx)("textarea",{className:" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",id:"message",name:"message",placeholder:"Your message",value:a.message,onChange:f})]})}),Object(j.jsxs)("div",{className:"md:flex gap-y-2 flex-col md:items-center justify-center",children:[c&&Object(j.jsx)("span",{className:"text-red-600",children:"Please make sure all fields are filled."}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"shadow  bg-black hover:bg-opacity-80 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"submit",children:"Send"})}),Object(j.jsx)("div",{className:"md:w-2/3"})]})]})]})},G=a(70),Y=a.n(G),J=a(52),U=a(46),V=function(e){var t=e.form,a=e.isEmailModified,o=e.setIsEmailModified,l=e.isPasswordModified,d=e.setIsPasswordModified,b=e.setIsSignIn,u=e.handleChange,m=Object(n.h)(),f=Object(r.useState)(!1),x=Object(s.a)(f,2),h=x[0],p=x[1];return Object(j.jsxs)("form",{className:"w-full h-full max-w-md flex flex-col pt-10 items-center",onSubmit:function(e){e.preventDefault(),t.email&&t.password?(p(!1),i.a.setItem(c.a,t.email),i.a.setItem(c.d,t.password),m("/library")):p(!0)},children:[Object(j.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(j.jsx)("div",{className:"md:w-1/3",children:Object(j.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"email",children:"Email"})}),Object(j.jsx)("div",{className:"md:w-2/3",children:Object(j.jsx)("input",{autoComplete:"off",className:"bg-gray-200 appearance-none border-2 ".concat(a&&Object(U.a)(t.email)?"border-red-300 focus:border-red-500":"border-gray-200 focus:border-purple-500","\n                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"),id:"email",type:"email",placeholder:"Enter value",value:t.email,onChange:function(e){return u(e.target.value,"email",o)}})})]}),Object(j.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(j.jsx)("div",{className:"md:w-1/3",children:Object(j.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-password",children:"Password"})}),Object(j.jsxs)("div",{className:"md:w-2/3",children:[Object(j.jsx)("input",{autoComplete:"off",className:"bg-gray-200 appearance-none border-2 ".concat(l&&Object(U.c)(t.password)?"border-red-300 focus:border-red-500":"border-gray-200 focus:border-purple-500","\n                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"),id:"inline-password",type:"password",placeholder:"Enter value",value:t.password,onChange:function(e){return u(e.target.value,"password",d)}}),l&&Object(j.jsx)("p",{className:"text-red-500 text-xs italic",children:Object(U.c)(t.password)})]})]}),Object(j.jsxs)("div",{className:"flex items-center flex-col gap-y-3",children:[h&&Object(j.jsx)("p",{className:"text-red-500",children:"Please fill all the fields."}),Object(j.jsx)("div",{className:"mb-8",children:Object(j.jsx)("button",{className:"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"submit",children:"Sign In"})})]}),Object(j.jsx)("ul",{className:"list-none",children:Object(j.jsxs)("li",{children:["Not a member?"," ",Object(j.jsx)("span",{className:"text-blue-500 hover:text-blue-800 cursor-pointer",onClick:function(){return b(!1)},children:"Sign Up"})]})})]})},Z=function(e){var t=e.form,a=e.isNameModified,o=e.setIsNameModified,l=e.isLastNameModified,d=e.setIsLastNameModified,b=e.isEmailModified,u=e.setIsEmailModified,m=e.isPasswordModified,f=e.setIsPasswordModified,x=e.setIsSignIn,h=e.handleChange,p=Object(n.h)(),g=Object(r.useState)(!1),v=Object(s.a)(g,2),O=v[0],w=v[1];return Object(j.jsxs)("form",{className:"w-full h-full flex flex-col pt-10 items-center",onSubmit:function(e){e.preventDefault(),Object.values(t).some((function(e){return""===e}))?w(!0):(w(!1),i.a.setItem(c.b,t.firstName),i.a.setItem(c.c,t.lastName),i.a.setItem(c.a,t.email),i.a.setItem(c.d,t.password),p("/library"))},autoComplete:"off",children:[Object(j.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(j.jsx)("div",{className:"md:w-1/3",children:Object(j.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-first-name",children:"First Name"})}),Object(j.jsxs)("div",{className:"md:w-2/3",children:[Object(j.jsx)("input",{className:"bg-gray-200 appearance-none border-2 ".concat(a&&Object(U.b)(t.firstName)?"border-red-300 focus:border-red-500":"border-gray-200 focus:border-purple-500","\n                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"),id:"inline-first-name",type:"text",placeholder:"Enter value",value:t.firstName,onChange:function(e){return h(e.target.value,"firstName",o)},autoComplete:"off"}),a&&Object(j.jsx)("p",{className:"text-red-500 text-xs italic",children:Object(U.b)(t.firstName)})]})]}),Object(j.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(j.jsx)("div",{className:"md:w-1/3",children:Object(j.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-last-name",children:"Last Name"})}),Object(j.jsxs)("div",{className:"md:w-2/3",children:[Object(j.jsx)("input",{className:"bg-gray-200 appearance-none border-2 ".concat(l&&Object(U.b)(t.lastName)?"border-red-300 focus:border-red-500":"border-gray-200 focus:border-purple-500","\n                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"),id:"inline-last-name",type:"text",placeholder:"Enter value",value:t.lastName,onChange:function(e){return h(e.target.value,"lastName",d)},autoComplete:"off"}),l&&Object(j.jsx)("p",{className:"text-red-500 text-xs italic",children:Object(U.b)(t.lastName)})]})]}),Object(j.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(j.jsx)("div",{className:"md:w-1/3",children:Object(j.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"email",children:"Email"})}),Object(j.jsxs)("div",{className:"md:w-2/3",children:[Object(j.jsx)("input",{className:"bg-gray-200 appearance-none border-2 ".concat(b&&Object(U.a)(t.email)?"border-red-300 focus:border-red-500":"border-gray-200 focus:border-purple-500","\n                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"),id:"email",type:"email",placeholder:"Enter value",value:t.email,onChange:function(e){return h(e.target.value,"email",u)},autoComplete:"off"}),b&&Object(j.jsx)("p",{className:"text-red-500 text-xs italic",children:Object(U.a)(t.email)})]})]}),Object(j.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(j.jsx)("div",{className:"md:w-1/3",children:Object(j.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-password",children:"Password"})}),Object(j.jsxs)("div",{className:"md:w-2/3",children:[Object(j.jsx)("input",{className:"bg-gray-200 appearance-none border-2 ".concat(m&&Object(U.c)(t.password)?"border-red-300 focus:border-red-500":"border-gray-200 focus:border-purple-500","\n                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"),id:"inline-password",type:"password",placeholder:"Enter value",value:t.password,onChange:function(e){return h(e.target.value,"password",f)},autoComplete:"off"}),m&&Object(j.jsx)("p",{className:"text-red-500 text-xs italic",children:Object(U.c)(t.password)})]})]}),Object(j.jsxs)("div",{className:"flex items-center flex-col gap-y-3",children:[O&&Object(j.jsx)("p",{className:"text-red-500",children:"Please fill all the fields."}),Object(j.jsx)("div",{className:"mb-8",children:Object(j.jsx)("button",{className:"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"submit",children:"Sign Up"})})]}),Object(j.jsx)("ul",{className:"list-none",children:Object(j.jsxs)("li",{children:["Already a member?"," ",Object(j.jsx)("span",{className:"text-blue-500 hover:text-blue-800 cursor-pointer",onClick:function(){return x(!0)},children:"Sign In"})]})})]})},$=function(){var e=Object(r.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),c=i[0],l=i[1],d=Object(r.useState)(!1),b=Object(s.a)(d,2),u=b[0],m=b[1],f=Object(r.useState)(!1),x=Object(s.a)(f,2),h=x[0],p=x[1],g=Object(r.useState)(!1),v=Object(s.a)(g,2),O=v[0],w=v[1],N=Object(r.useState)(!1),y=Object(s.a)(N,2),_=y[0],k=y[1],S=function(e,t,a){a(!0),n((function(a){return Object(T.a)(Object(T.a)({},a),{},Object(E.a)({},t,e))}))};return Object(j.jsxs)("div",{className:Y.a.Auth,children:[Object(j.jsx)("img",{src:J.a,alt:"books",className:Y.a.Auth__image}),_?Object(j.jsx)(V,{form:a,isEmailModified:h,setIsEmailModified:p,isPasswordModified:O,setIsPasswordModified:w,setIsSignIn:k,handleChange:S}):Object(j.jsx)(Z,{form:a,isNameModified:c,setIsNameModified:l,isLastNameModified:u,setIsLastNameModified:m,isEmailModified:h,setIsEmailModified:p,isPasswordModified:O,setIsPasswordModified:w,setIsSignIn:k,handleChange:S})]})};function Q(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){if(a)i(!1);else if(window.addEventListener("beforeinstallprompt",(function(e){console.log("\ud83d\udc4d","beforeinstallprompt",e),e.preventDefault(),window.deferredPrompt=e})),window.addEventListener("appinstalled",(function(e){console.log("\ud83d\udc4d","appinstalled",e),window.deferredPrompt=null})),"http:"===window.location.protocol){var e=document.getElementById("requireHTTPS");e.querySelector("a").href=window.location.href.replace("http://","https://"),e.classList.remove("hidden")}})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/books-review/service-worker.js"),window.addEventListener("appinstalled",(function(){window.deferredPrompt=null,console.log("PWA was installed")})),Object(j.jsxs)("div",{style:{width:"100%",overflowX:"hidden"},children:[Object(j.jsx)(o.a,{}),Object(j.jsx)(y,{}),Object(j.jsxs)("div",{className:"content mb-20",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)("p",{id:"requireHTTPS",className:"hidden",children:[Object(j.jsx)("b",{children:"STOP!"})," This page ",Object(j.jsx)("b",{children:"must"})," be served over HTTPS. Please ",Object(j.jsx)("a",{children:"reload this page via HTTPS"}),"."]})}),Object(j.jsx)(n.b,{})]}),Object(j.jsx)(f,{})]})}var X=function(){var e=Object(n.g)(),t=Object(n.h)(),a=Object(r.useState)(i.a.getItem(c.a)),o=Object(s.a)(a,2),l=o[0],d=o[1];return console.log(l),Object(r.useEffect)((function(){d(i.a.getItem(c.a)),"/books-review"===e.pathname&&t("/books-review/library")}),[e.pathname]),Object(j.jsx)(n.e,{children:l?Object(j.jsxs)(n.c,{path:"/books-review",element:Object(j.jsx)(Q,{}),children:[Object(j.jsx)(n.c,{index:!0,element:Object(j.jsx)(B,{})}),Object(j.jsx)(n.c,{path:"library",element:Object(j.jsx)(B,{})}),Object(j.jsx)(n.c,{path:"bookshelf",element:Object(j.jsx)(P,{})}),Object(j.jsx)(n.c,{path:"contacts",element:Object(j.jsx)(K,{})}),Object(j.jsx)(n.c,{path:"*",element:Object(j.jsx)(n.a,{to:"/books-review/library"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(n.c,{path:"/books-review/auth",element:Object(j.jsx)($,{})}),Object(j.jsx)(n.c,{path:"*",element:Object(j.jsx)(n.a,{to:"/books-review/auth"})})]})})};t.default=X}}]);
//# sourceMappingURL=4.8746d70f.chunk.js.map