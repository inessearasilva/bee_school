"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[180],{46180:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(74165),r=n(15861),i=n(70885),l=n(72791),c=n(59135),a=n(80184),o=function(e){var t=Object.keys(e.record.topics),n=Math.ceil(t.length/2),s=(t.slice(0,n),t.slice(n),function(e){var t="http:/#/topics/".concat(e);window.open(t,"_blank")});return(0,a.jsx)("table",{className:"home-table1",style:{width:"100%",textAlign:"center"},children:(0,a.jsxs)("div",{className:"row align-items-start",style:{display:"flex",alignItems:"center",width:"100%",justifyContent:"center"},children:[(0,a.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.filteredTopics.slice(0,Math.ceil(e.filteredTopics.length/3)).map((function(t,n){return(0,a.jsxs)("table",{className:"home-table2",style:{marginTop:"20px",marginBottom:"20px",alignItems:"center",width:"100%"},children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("th",{style:{display:"flex",padding:"12px"},children:[(0,a.jsx)("span",{style:{marginLeft:"8px",marginRight:"auto"},children:t}),(0,a.jsx)("a",{style:{marginRight:"8px"},href:"#",onClick:function(){return s(t)},children:(0,a.jsx)(c.H_v,{})})]})})}),(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{style:{display:"flex",padding:"12px"},children:[(0,a.jsx)("span",{style:{marginLeft:"8px",marginRight:"auto"},children:"Total Tweets"}),(0,a.jsx)("span",{style:{marginRight:"8px"},children:e.record.topics[t]})]})})})]},t)}))})})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.filteredTopics.slice(Math.ceil(e.filteredTopics.length/3),Math.ceil(e.filteredTopics.length/3*2)).map((function(t,n){return(0,a.jsxs)("table",{className:"home-table2",style:{marginTop:"20px",marginBottom:"20px",alignItems:"center",width:"100%"},children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("th",{style:{display:"flex",padding:"12px"},children:[(0,a.jsx)("span",{style:{marginLeft:"8px",marginRight:"auto"},children:t}),(0,a.jsx)("a",{style:{marginRight:"8px"},href:"#",onClick:function(){return s(t)},children:(0,a.jsx)(c.H_v,{})})]})})}),(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{style:{display:"flex",padding:"12px"},children:[(0,a.jsx)("span",{style:{marginLeft:"8px",marginRight:"auto"},children:"Total Tweets"}),(0,a.jsx)("span",{style:{marginRight:"8px"},children:e.record.topics[t]})]})})})]},t)}))})})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.filteredTopics.slice(Math.ceil(e.filteredTopics.length/3*2)).map((function(t,n){return(0,a.jsxs)("table",{className:"home-table2",style:{marginTop:"20px",marginBottom:"20px",alignItems:"center",width:"100%"},children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("th",{style:{display:"flex",padding:"12px"},children:[(0,a.jsx)("span",{style:{marginLeft:"8px",marginRight:"auto"},children:t}),(0,a.jsx)("a",{style:{marginRight:"8px"},href:"#",onClick:function(){return s(t)},children:(0,a.jsx)(c.H_v,{})})]})})}),(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{style:{display:"flex",padding:"12px"},children:[(0,a.jsx)("span",{style:{marginLeft:"8px",marginRight:"auto"},children:"Total Tweets"}),(0,a.jsx)("span",{style:{marginRight:"8px"},children:e.record.topics[t]})]})})})]},t)}))})})})]})})};function d(){var e=(0,l.useState)([]),t=(0,i.Z)(e,2),n=t[0],c=t[1],d=(0,l.useState)(""),h=(0,i.Z)(d,2),p=h[0],x=h[1],f=(0,l.useState)(new Set),u=(0,i.Z)(f,2),g=(u[0],u[1]),m=function(e){x(e);var t=new Set;n.forEach((function(e){Object.keys(e.topics).forEach((function(e){t.add(e[0].toUpperCase())}))})),g(t)};return(0,l.useEffect)((function(){function e(){return(e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://bee-aware-2b421aedee22.herokuapp.com/statistics_general/");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("An error occurred: ".concat(t.statusText));case 6:return e.next=8,t.json();case 8:n=e.sent,c(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.alert(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,l.useEffect)((function(){var e=new Set;n.forEach((function(t){Object.keys(t.topics).forEach((function(t){t.toLowerCase().startsWith(p.toLowerCase())&&e.add(t[0].toUpperCase())}))})),g(e)}),[p,n]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:""===p?"active":"",onClick:function(){return m("")},style:{padding:"8px 19px"},children:"All"}),Array.from({length:26},(function(e,t){return(0,a.jsx)("button",{className:p===String.fromCharCode(65+t)?"active":"",onClick:function(){return m(String.fromCharCode(65+t))},style:{padding:"8px 17.6px"},children:String.fromCharCode(65+t)},t)}))]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:n.map((function(e){var t=Object.keys(e.topics),n=p?t.filter((function(e){return e.toLowerCase().startsWith(p.toLowerCase())})):t;return(0,a.jsx)(o,{record:e,filteredTopics:n},e._id)}))})]})}}}]);
//# sourceMappingURL=180.f55b4088.chunk.js.map