(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[5],{50:function(t,e,i){},53:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n={_origin:"https://api.emailjs.com"},s=function(t,e,i){if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},r=i(24),a=i(23),o=Object(r.a)((function t(e){Object(a.a)(this,t),this.status=e.status,this.text=e.responseText})),u=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(s,r){var a=new XMLHttpRequest;a.addEventListener("load",(function(t){var e=t.target,i=new o(e);200===i.status||"OK"===i.text?s(i):r(i)})),a.addEventListener("error",(function(t){var e=t.target;r(new o(e))})),a.open("POST",n._origin+t,!0),Object.keys(i).forEach((function(t){a.setRequestHeader(t,i[t])})),a.send(e)}))},d=function(t,e,i,r){var a=r||n._userID;s(a,t,e);var o={lib_version:"3.2.0",user_id:a,service_id:t,template_id:e,template_params:i};return u("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})}}}]);
//# sourceMappingURL=5.176a46ce.chunk.js.map