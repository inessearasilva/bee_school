/*! For license information please see 932.27cc83c8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[932],{20932:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(74165),i=r(15861),o=r(70885),c=r(72791),a=r(80184);function l(){var t=(0,c.useState)([]),e=(0,o.Z)(t,2),r=e[0],l=e[1];(0,c.useEffect)((function(){function t(){return(t=(0,i.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://bee-aware-2b421aedee22.herokuapp.com/links/");case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("An error occurred: ".concat(e.statusText));case 6:return t.next=8,e.json();case 8:r=t.sent,l(r),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Error fetching data:",t.t0),window.alert(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var s=function(t){var e="http:/#/topics/".concat(t);window.open(e,"_blank")},u=function(t){window.location.href=t},f=function(t){var e=t;return t.includes(".com")?e=t.split(".com")[0]+".com":t.includes(".org")?e=t.split(".org")[0]+".org":t.includes(".uk")?e=t.split(".uk")[0]+".uk":t.includes(".gov")?e=t.split(".gov")[0]+".gov":t.includes(".ca")?e=t.split(".ca")[0]+".ca":t.includes(".tv")?e=t.split(".tv")[0]+".tv":t.includes(".net")?e=t.split(".net")[0]+".net":t.includes(".edu")?e=t.split(".edu")[0]+".edu":t.includes(".online")?e=t.split(".online")[0]+".online":t.includes(".fi")?e=t.split(".fi")[0]+".fi":t.includes(".mp")?e=t.split(".mp")[0]+".mp":t.includes(".ie")?e=t.split(".ie")[0]+".ie":t.includes(".zw")&&(e=t.split(".zw")[0]+".zw"),e},h=function(t){try{return new URL(t),!0}catch(e){return console.error("Invalid URL:",t),!1}},d=function(t){if(t&&t.length>190){var e=t.lastIndexOf(" ",190);return-1===e?t.substring(0,190)+"...":t.substring(0,e)+"..."}return t},p=function(t){if(t&&t.length>145){var e=t.lastIndexOf(" ",145);return-1===e?t.substring(0,145)+"...":t.substring(0,e)+"..."}return t},x=r.filter((function(t,e,r){return e===r.findIndex((function(e){return e.url===t.url||e.title===t.title}))}));return(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Perspectives and Updates"}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)("div",{className:"perspectivesg",style:{flex:1},children:x.slice(0,x.length/2).map((function(t){return(0,a.jsxs)("div",{children:[h(t.url)?(0,a.jsx)("table",{className:"newstable",children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"16px",fontWeight:"bold",marginLeft:"10px",marginTop:"5px",display:"block"},children:p(t.title)})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"14px",marginLeft:"10px",display:"block"},children:d(t.description)})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"12px",marginLeft:"10px",marginBottom:"5px",display:"block"},children:(0,a.jsx)("a",{href:"#",onClick:function(){return u(t.url)},children:f(t.url)})})}),(0,a.jsx)("tfoot",{children:(0,a.jsxs)("td",{style:{fontSize:"16px",marginLeft:"10px",display:"block"},children:["Related Topics:\xa0",Array.isArray(t.topic)?t.topic.map((function(e,r){return(0,a.jsxs)("span",{children:[(0,a.jsx)("a",{href:"#",onClick:function(){return s(e)},children:e}),r<t.topic.length-1?", ":""]},r)})):(0,a.jsx)("a",{href:"#",onClick:function(){return s(t.topic)},children:t.topic})]})})]})}):(0,a.jsxs)("p",{children:["Invalid URL: ",t.url]}),(0,a.jsx)("br",{})]},t._id)}))}),(0,a.jsx)("div",{style:{flex:1},className:"perspectivesg",children:x.slice(x.length/2).map((function(t){return(0,a.jsxs)("div",{children:[h(t.url)?(0,a.jsx)("table",{className:"newstable",children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"16px",fontWeight:"bold",marginLeft:"10px",marginTop:"5px",display:"block"},children:p(t.title)})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"14px",marginLeft:"10px",display:"block"},children:d(t.description)})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"12px",marginLeft:"10px",marginBottom:"5px",display:"block"},children:(0,a.jsx)("a",{href:"#",onClick:function(){return u(t.url)},children:f(t.url)})})}),(0,a.jsx)("tfoot",{children:(0,a.jsxs)("td",{style:{fontSize:"16px",marginLeft:"10px",display:"block"},children:["Related Topics:\xa0",Array.isArray(t.topic)?t.topic.map((function(e,r){return(0,a.jsxs)("span",{children:[(0,a.jsx)("a",{href:"#",onClick:function(){return s(e)},children:e}),r<t.topic.length-1?", ":""]},r)})):(0,a.jsx)("a",{href:"#",onClick:function(){return s(t.topic)},children:t.topic})]})})]})}):(0,a.jsxs)("p",{children:["Invalid URL: ",t.url]}),(0,a.jsx)("br",{})]},t._id)}))}),(0,a.jsx)("div",{style:{flex:1,maxWidth:"280px"},className:"perspectivesp",children:x.map((function(t){return(0,a.jsxs)("div",{children:[h(t.url)?(0,a.jsx)("table",{className:"newstable",children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"16px",fontWeight:"bold",marginLeft:"10px",marginTop:"5px",display:"block"},children:p(t.title)})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"14px",marginLeft:"10px",display:"block"},children:d(t.description)})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{style:{fontSize:"12px",marginLeft:"10px",marginBottom:"5px",display:"block"},children:(0,a.jsx)("a",{href:"#",onClick:function(){return u(t.url)},children:f(t.url)})})}),(0,a.jsx)("tfoot",{children:(0,a.jsxs)("td",{style:{fontSize:"16px",marginLeft:"10px",display:"block"},children:["Related Topics:\xa0",Array.isArray(t.topic)?t.topic.map((function(e,r){return(0,a.jsxs)("span",{children:[(0,a.jsx)("a",{href:"#",onClick:function(){return s(e)},children:e}),r<t.topic.length-1?", ":""]},r)})):(0,a.jsx)("a",{href:"#",onClick:function(){return s(t.topic)},children:t.topic})]})})]})}):(0,a.jsxs)("p",{children:["Invalid URL: ",t.url]}),(0,a.jsx)("br",{})]},t._id)}))})]})]})}},15861:function(t,e,r){function n(t,e,r,n,i,o,c){try{var a=t[o](c),l=a.value}catch(s){return void r(s)}a.done?e(l):Promise.resolve(l).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var c=t.apply(e,r);function a(t){n(c,i,o,a,l,"next",t)}function l(t){n(c,i,o,a,l,"throw",t)}a(void 0)}))}}r.d(e,{Z:function(){return i}})},74165:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(71002);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,c=Object.create(i.prototype),a=new _(n||[]);return o(c,"_invoke",{value:L(t,r,a)}),c}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var d={};function p(){}function x(){}function v(){}var y={};u(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==e&&r.call(m,a)&&(y=m);var j=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function i(o,c,a,l){var s=h(t[o],t,c);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,a,l)}),(function(t){i("throw",t,a,l)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,l)}))}l(s.arg)}var c;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return c=c?c.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return z()}for(r.method=i,r.arg=o;;){var c=r.delegate;if(c){var a=k(c,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:z}}function z(){return{value:void 0,done:!0}}return x.prototype=v,o(j,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:x,configurable:!0}),x.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,l,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var c=new b(f(e,r,n,i),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(j),u(j,s,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var a=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(a&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=932.27cc83c8.chunk.js.map