"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[985],{11602:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(1413),i=n(15671),s=n(43144),c=n(97326),a=n(60136),o=n(27277),l=n(72791),u=n(47022),d=n(41539),m=n.p+"static/media/banner.edf0ba7f9edc9ec36308.png",f=n(31243).Z.create({baseURL:"https://bee-aware-0831ce44e802.herokuapp.com/api",headers:{"Content-type":"application/json"}}),x=new(function(){function e(){(0,i.Z)(this,e)}return(0,s.Z)(e,[{key:"getAll",value:function(){return f.get("/tweets")}},{key:"get",value:function(e){return f.get("/tweets/".concat(e))}},{key:"create",value:function(e){return f.post("/utente",e)}},{key:"update",value:function(e,t){return f.put("/utente/".concat(e),t)}},{key:"delete",value:function(e){return f.delete("/utente/".concat(e))}},{key:"deleteAll",value:function(){return f.delete("/utente")}},{key:"findBynome_utente",value:function(e){return f.get("/utente?nome_utente=".concat(e))}},{key:"findBydata_nascimento",value:function(e){return f.get("/utente?data_nascimento=".concat(e))}},{key:"findBynum_sequencial",value:function(e){return f.get("/utente?num_sequencial=".concat(e))}},{key:"findAviniBynum_sequencial",value:function(e){return f.get("/forms/aviniforms/all?num_sequencial=".concat(e))}},{key:"findAviniByidcomposition",value:function(e){return f.get("/forms/aviniforms/all?idcomposition=".concat(e))}},{key:"findAviniByestado",value:function(e){return f.get("/forms/aviniforms/all?isCompleted=".concat(e))}},{key:"findAviniBydata",value:function(e){return f.get("/forms/aviniforms/all?createdat=".concat(e))}},{key:"findAvombroBynum_sequencial",value:function(e){return f.get("/forms/avombroforms/all?num_sequencial=".concat(e))}},{key:"findAvombroByidcomposition",value:function(e){return f.get("/forms/avombroforms/all?idcomposition=".concat(e))}},{key:"findAvombroByestado",value:function(e){return f.get("/forms/avombroforms/all?isCompleted=".concat(e))}},{key:"findAvombroBydata",value:function(e){return f.get("/forms/avombroforms/all?createdat=".concat(e))}},{key:"createform",value:function(e){return f.post("/forms",e)}},{key:"getformAvini",value:function(e){return f.get("/forms/avini/".concat(e))}},{key:"getformAvombro",value:function(e){return f.get("/forms/avombro/".concat(e))}},{key:"getAllform",value:function(){return f.get("/forms")}},{key:"getAllformAvini",value:function(){return f.get("/forms/aviniforms/all")}},{key:"getAllformAvombro",value:function(){return f.get("/forms/avombroforms/all")}},{key:"getvaluesAvini",value:function(e){return f.get("/forms/valuesAvini/".concat(e))}},{key:"getvaluesAvombro",value:function(e){return f.get("/forms/valuesAvombro/".concat(e))}},{key:"getSubAvini",value:function(e){return f.get("/forms/subAvini/".concat(e))}},{key:"getSubAvombro",value:function(e){return f.get("/forms/subAvombro/".concat(e))}},{key:"getidAvini",value:function(e){return f.get("/forms/initialAvini/".concat(e))}},{key:"getidAvombro",value:function(e){return f.get("/forms/initialAvombro/".concat(e))}},{key:"updateform",value:function(e,t){return f.put("/forms/".concat(e),t)}},{key:"deleteform",value:function(e){return f.delete("/forms/".concat(e))}},{key:"deleteAllform",value:function(){return f.delete("/forms")}}]),e}()),h=n(74165),v=n(15861),p=n(70885),g=n(69961),j=n(17626),y=n(73123),b=n(59500),k=(n(23666),n(80184)),w=function(e){var t=Object.entries(e.record.geographical).reduce((function(e,t){var n=(0,p.Z)(t,2),r=n[0],i=n[1];if("null"!==r){var s=i[0],c=i[1],a=i[2];null!==c&&null!==a&&e.push({country:r,value:s,coordinates:[c,a]})}return e}),[]);return(0,k.jsxs)(g.h,{style:{height:"660px",width:"830px"},center:[0,0],zoomSnap:0,zoom:1.7,doubleClickZoom:!1,attributionControl:!1,maxBounds:[[90,-180],[-90,180]],children:[(0,k.jsx)(j.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",noWrap:!0}),t.map((function(e){return(0,k.jsx)(y.c,{center:e.coordinates,radius:5*Math.pow(e.value,.2),color:"#F9E076",fillColor:"#F9E076",fillOpacity:.8,children:(0,k.jsxs)(b.G,{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("strong",{children:"Country: "}),e.country]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("strong",{children:"Value: "}),e.value]})]})},e.country)}))]})};function A(){var e=(0,l.useState)([]),t=(0,p.Z)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){function e(){return e=(0,v.Z)((0,h.Z)().mark((function e(){var t,n,i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bee-aware-0831ce44e802.herokuapp.com/statistics_general/");case 2:if((t=e.sent).ok){e.next=7;break}return n="An error occurred: ".concat(t.statusText),window.alert(n),e.abrupt("return");case 7:return e.next=9,t.json();case 9:i=e.sent,r(i);case 11:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,k.jsx)("div",{children:n.map((function(e){return(0,k.jsx)(w,{record:e},e._id)}))})}var Z=function(){var e=(0,l.useState)([]),t=(0,p.Z)(e,2),n=t[0],r=t[1];(0,l.useEffect)((function(){function e(){return(e=(0,v.Z)((0,h.Z)().mark((function e(){var t,n;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://bee-aware-0831ce44e802.herokuapp.com/statistics_general/");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("An error occurred: ".concat(t.statusText));case 6:return e.next=8,t.json();case 8:n=e.sent,r(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.alert(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(e){return Object.entries(e.hashtags).slice(0,10)};return(0,k.jsx)("tbody",{children:n.slice(0,10).map((function(e){return(0,k.jsxs)(l.Fragment,{children:[(0,k.jsx)("tr",{children:(0,k.jsx)("td",{style:{padding:"3px",paddingInlineStart:"20px"}})}),i(e).map((function(e){var t=(0,p.Z)(e,2),n=t[0],r=t[1];return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{style:{padding:"5px",paddingInlineStart:"10px",width:"82.5%"},children:n}),(0,k.jsx)("td",{className:"qtt-background",style:{padding:"3px"},children:r})]},n)})),(0,k.jsx)("tr",{children:(0,k.jsx)("td",{style:{padding:"3px",paddingInlineStart:"20px"}})})]},e._id)}))})},_=n(38566),T=function(e){return(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,k.jsxs)("div",{class:"metric-container",children:[(0,k.jsx)("div",{class:"metric-data",children:e.record.engagement_metrics.total_impressions}),(0,k.jsx)("div",{class:"metric-box1",children:(0,k.jsx)("strong",{children:"Impressions"})})]}),(0,k.jsxs)("div",{class:"metric-container",children:[(0,k.jsx)("div",{class:"metric-data",children:e.record.engagement_metrics.total_tweets}),(0,k.jsx)("div",{class:"metric-box2",children:(0,k.jsx)("strong",{children:"Tweets"})})]}),(0,k.jsxs)("div",{class:"metric-container",children:[(0,k.jsx)("div",{class:"metric-data",children:e.record.engagement_metrics.total_likes}),(0,k.jsx)("div",{class:"metric-box3",children:(0,k.jsx)("strong",{children:"Likes"})})]}),(0,k.jsxs)("div",{class:"metric-container",children:[(0,k.jsx)("div",{class:"metric-data",children:e.record.engagement_metrics.total_retweets}),(0,k.jsx)("div",{class:"metric-box4",children:(0,k.jsx)("strong",{children:"Retweets"})})]}),(0,k.jsxs)("div",{class:"metric-container",children:[(0,k.jsx)("div",{class:"metric-data",children:e.record.engagement_metrics.total_quotes}),(0,k.jsx)("div",{class:"metric-box5",children:(0,k.jsx)("strong",{children:"Quotes"})})]}),(0,k.jsxs)("div",{class:"metric-container",children:[(0,k.jsx)("div",{class:"metric-data",children:e.record.engagement_metrics.total_replys}),(0,k.jsx)("div",{class:"metric-box6",children:(0,k.jsx)("strong",{children:"Replys"})})]})]})};function N(){var e=(0,l.useState)([]),t=(0,p.Z)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){function e(){return(e=(0,v.Z)((0,h.Z)().mark((function e(){var t,n;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://bee-aware-0831ce44e802.herokuapp.com/statistics_general/");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("An error occurred: ".concat(t.statusText));case 6:return e.next=8,t.json();case 8:n=e.sent,r(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.alert(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,k.jsx)("div",{children:(0,k.jsx)("div",{style:{display:"flex"},children:(0,k.jsx)("div",{children:n.map((function(e){return(0,k.jsx)(T,{record:e},e._id)}))})})})}var S=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).retrieveTweet=r.retrieveTweet.bind((0,c.Z)(r)),r.refreshList=r.refreshList.bind((0,c.Z)(r)),r.setActiveTweet=r.setActiveTweet.bind((0,c.Z)(r)),r.state={Tweets:[],currentTweet:null,currentIndex:-1,searchid:"",searchnome:"",searchemprego:""},r}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.retrieveTweet()}},{key:"handleClick",value:function(e){this.setState({currentPage:Number(e.target.id)})}},{key:"retrieveTweet",value:function(){var e=this;x.getAll().then((function(t){var n=t.data.map((function(e){var t=e.tweet||{};return(0,r.Z)((0,r.Z)({},e),{},{nome:t.nome})}));e.setState({Tweets:n}),console.log(n)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveTweet(),this.setState({currentTweets:null,currentIndex:-1})}},{key:"setActiveTweet",value:function(e,t){this.setState({currentTweets:e,currentIndex:t})}},{key:"render",value:function(){return(0,k.jsx)(d.Z,{className:"navbar navbar-expand-lg navbar-white bg-white",children:(0,k.jsx)(u.Z,{children:(0,k.jsx)("div",{className:"container text",children:(0,k.jsxs)("div",{className:"row align-items-start",style:{display:"flex",width:"100%",minWidth:"1280px",maxWidth:"1280px"},children:[(0,k.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,k.jsx)("div",{className:"flex-container",children:(0,k.jsxs)("div",{className:"flex-item",children:[(0,k.jsxs)("table",{className:"home-table",style:{width:"100%",minWidth:"390px",maxWidth:"390px"},children:[(0,k.jsx)("thead",{children:(0,k.jsx)("tr",{children:(0,k.jsx)("th",{colSpan:"2",style:{textAlign:"center",position:"relative"},children:(0,k.jsx)("span",{style:{position:"relative",top:"3.6px"},children:"Topic Trends"})})})}),(0,k.jsx)(_.default,{})]}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsxs)("table",{className:"home-table",style:{width:"100%",minWidth:"390px",maxWidth:"390px"},children:[(0,k.jsx)("thead",{children:(0,k.jsx)("tr",{children:(0,k.jsx)("th",{colSpan:"2",style:{textAlign:"center",position:"relative"},children:(0,k.jsx)("span",{style:{position:"relative",top:"3.6px"},children:"# Hashtag Trends"})})})}),(0,k.jsx)(Z,{})]})]})})}),(0,k.jsx)("div",{className:"col-lg-8 col-md-6 col-sm-12",children:(0,k.jsxs)("div",{className:"flex-container",children:[(0,k.jsxs)("div",{className:"flex-item",children:[(0,k.jsxs)("div",{className:"row align-items-start",style:{display:"flex",width:"100%",minWidth:"840px",maxWidth:"840px"},children:[(0,k.jsx)("div",{className:"col-lg-9 col-md-9 col-sm-15",children:(0,k.jsx)("img",{src:m,style:{width:"650px"}})}),(0,k.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-8",children:(0,k.jsx)(N,{})})]}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("h2",{style:{fontFamily:"Cambria"},children:(0,k.jsx)("b",{children:"Tweets per Country"})})]}),(0,k.jsx)("div",{className:"flex-item",children:(0,k.jsx)(A,{})})]})})]})})})})}}]),n}(l.Component)},38566:function(e,t,n){n.r(t);var r=n(74165),i=n(15861),s=n(70885),c=n(72791),a=n(11087),o=(n(78983),n(80184));t.default=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),n=t[0],l=t[1];(0,c.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://bee-aware-0831ce44e802.herokuapp.com/statistics_general/");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("An error occurred: ".concat(t.statusText));case 6:return e.next=8,t.json();case 8:n=e.sent,l(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.alert(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var u=function(e){return Object.entries(e.topics).sort((function(e,t){return t[1]-e[1]})).slice(0,10)};return(0,o.jsx)("tbody",{children:n.sort((function(e,t){return t.value-e.value})).slice(0,10).map((function(e){return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{padding:"3px",paddingInlineStart:"10px"}})}),u(e).map((function(e){var t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{style:{padding:"5px",paddingInlineStart:"10px",width:"82.5%"},children:(0,o.jsx)(a.OL,{to:"/topics/".concat(n),style:{color:"black"},children:n})}),(0,o.jsx)("td",{className:"qtt-background",style:{padding:"3px"},children:r})]},n)})),(0,o.jsx)("tr",{children:(0,o.jsx)("td",{className:"viewall-background",style:{padding:"3px",marginLeft:"149px"},children:(0,o.jsx)(a.OL,{to:"/all_topics",style:{textDecoration:"none",color:"inherit",cursor:"pointer"},children:(0,o.jsx)("strong",{children:"View All"})})})}),(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{padding:"3px",paddingInlineStart:"20px"}})})]},e._id)}))})}}}]);
//# sourceMappingURL=985.b57309e4.chunk.js.map