(this["webpackJsonptraining-react-app"]=this["webpackJsonptraining-react-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),l=a(1),u=a.n(l),o=a(2),m=a(5),i=function(){var e=Object(o.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i("".concat("https://jsonplaceholder.typicode.com","/users")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=(a(12),function(e){var t=e.user,a=t.id,n=t.name,c=t.email,s=t.company;return r.a.createElement("tr",{className:"table__row"},r.a.createElement("th",{className:"table__cell"},a),r.a.createElement("th",{className:"table__cell"},n),r.a.createElement("th",{className:"table__cell"},c),r.a.createElement("th",{className:"table__cell"},s.name))}),b=function(e){var t=e.users;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table__head"},r.a.createElement("tr",{className:"table__row"},r.a.createElement("th",{className:"table__heading"},"No"),r.a.createElement("th",{className:"table__heading"},"Name"),r.a.createElement("th",{className:"table__heading"},"Email"),r.a.createElement("th",{className:"table__heading"},"Company"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(h,{key:e.id,user:e})}))))},f=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("button",{type:"button",onClick:s},"Load Users"),r.a.createElement(b,{users:a}))};s.a.render(r.a.createElement(f,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.4cfd48cd.chunk.js.map