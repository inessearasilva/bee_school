(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[372],{90606:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var n=i(1413),s=i(74165),l=i(15861),r=i(70885),a=i(72791),o=i(20601),c=i(38725),d=i(90466),x=i(12891),u=i(83672),p=i(57702),h=i(87970),m=i(6481),v=(i(44992),i(49952),i(34073)),f=i(59135),j=i(80184);function g(){var e,t,i,g,_=(0,a.useState)([]),y=(0,r.Z)(_,2),b=y[0],N=y[1],w=(0,a.useState)("top_10_global"),k=(0,r.Z)(w,2),C=k[0],q=k[1],Z=(0,a.useState)([]),S=(0,r.Z)(Z,2),T=S[0],F=S[1],B=(0,a.useState)([]),K=(0,r.Z)(B,2),D=(K[0],K[1]);(0,a.useEffect)((function(){function e(){return(e=(0,l.Z)((0,s.Z)().mark((function e(){var t,i,n,l,a,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5050/statistics_general/");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Ocorreu um erro: ".concat(t.statusText));case 6:return e.next=8,t.json();case 8:i=e.sent,console.log("Fetched records:",i),N(i),n=i[0].keywords||{},l=Object.entries(n).map((function(e){var t=(0,r.Z)(e,2);return{text:t[0],value:t[1]}})),F(l),a=i[0].hashtags||{},o=Object.entries(a).map((function(e){var t=(0,r.Z)(e,2);return{text:t[0],value:t[1]}})),console.log("hashtag array",o),D(o),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),window.alert(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=function(e){q(e)},V={top_10_global:(null===(e=b[0])||void 0===e?void 0:e.top_10_global)||[],top_10_media:(null===(t=b[0])||void 0===t?void 0:t.top_10_media)||[],top_10_verified:(null===(i=b[0])||void 0===i?void 0:i.top_10_verified)||[],top_10_question:(null===(g=b[0])||void 0===g?void 0:g.top_10_question)||[]},W=[];switch(C){case"top_10_global":default:W=V.top_10_global;break;case"top_10_media":W=V.top_10_media;break;case"top_10_verified":W=V.top_10_verified;break;case"top_10_question":W=V.top_10_question}var A=function(e){var t=e.x,i=e.y,n=e.width,s=e.height;return(0,j.jsx)("g",{children:(0,j.jsx)("rect",{x:t,y:i,width:n,height:s,rx:4,ry:4,fill:e.fill})})},I=function(e){var t=e.x,i=e.y,n=e.value,s=e.align;return(0,j.jsx)("text",{x:t,y:i,dy:-12,fill:"black",fontSize:20,fontWeight:"bold",textAnchor:s,children:n})},L=function(e){e.x;var t=e.y,i=(e.width,e.value);e.fill;if(i){var n="".concat(i.value,"\n").concat(i.perc.toFixed(2),"%").split("\n");return(0,j.jsx)("g",{children:n.map((function(e,i){return(0,j.jsx)("text",{x:500,y:t+16*i+-8,fill:"black",textAnchor:"end",dominantBaseline:"middle",children:(0,j.jsx)("tspan",{fontSize:0===i?25:18,dy:1===i?20:0,fontWeight:0===i?"bold":"normal",children:e})},i)}))})}return null},R=b.map((function(e){return{negative:{value:e.sentiment_count.Negative,perc:e.sentiment_percentages.Negative,sqrtValue:e.sentiment_count.Negative/1.1},neutral:{value:e.sentiment_count.Neutral,perc:e.sentiment_percentages.Neutral,sqrtValue:e.sentiment_count.Neutral/1.1-220},positive:{value:e.sentiment_count.Positive,perc:e.sentiment_percentages.Positive,sqrtValue:e.sentiment_count.Positive/1.1}}}));return(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:"TweetStats Worldwide"}),(0,j.jsx)("br",{}),(0,j.jsx)("table",{className:"home-table1",style:{display:"flex",alignItems:"center",width:"100%",minWidth:"1280px",maxWidth:"1280px"},children:(0,j.jsx)("div",{className:"container text",children:(0,j.jsxs)("div",{className:"row align-items-start",style:{marginTop:"30px"},children:[(0,j.jsx)("div",{className:"col-lg-6 col-md-4 col-sm-10",children:(0,j.jsx)("div",{style:{width:"500px",height:"300px",marginTop:"10px"},children:(0,j.jsx)(o.h,{children:(0,j.jsxs)(c.v,{data:R,layout:"vertical",barGap:55,children:[(0,j.jsx)(d.K,{type:"number",hide:!0}),(0,j.jsx)(x.B,{type:"category",hide:!0}),(0,j.jsx)(u.D,{iconType:"none"}),(0,j.jsxs)(p.$,{dataKey:"positive.sqrtValue",fill:"#76CC9D",name:"Positive",shape:(0,j.jsx)(A,{fill:"#76CC9D"}),children:[(0,j.jsx)(h.e,{dataKey:"positive",position:"right",content:function(e){return(0,j.jsx)(L,(0,n.Z)({},e))}}),(0,j.jsx)(h.e,{dataKey:"positive",position:"top",content:function(e){var t=e.x,i=e.y;return(0,j.jsx)(I,{x:t,y:i,value:"Positive",align:"left"})}})]}),(0,j.jsxs)(p.$,{dataKey:"neutral.sqrtValue",fill:"#FADB7C",name:"Neutral",shape:(0,j.jsx)(A,{fill:"#FADB7C"}),children:[(0,j.jsx)(h.e,{dataKey:"neutral",position:"right",content:function(e){return(0,j.jsx)(L,(0,n.Z)({},e))}}),(0,j.jsx)(h.e,{dataKey:"neutral",position:"top",content:function(e){var t=e.x,i=e.y;return(0,j.jsx)(I,{x:t,y:i,value:"Neutral",align:"left"})}})]}),(0,j.jsxs)(p.$,{dataKey:"negative.sqrtValue",fill:"#F46161",name:"Negative",shape:(0,j.jsx)(A,{fill:"#F46161"}),children:[(0,j.jsx)(h.e,{dataKey:"negative",position:"right",content:function(e){return(0,j.jsx)(L,(0,n.Z)({},e))}}),(0,j.jsx)(h.e,{dataKey:"negative",position:"top",content:function(e){var t=e.x,i=e.y;return(0,j.jsx)(I,{x:t,y:i,value:"Negative",align:"left"})}})]})]})})})}),(0,j.jsx)("div",{className:"col-lg-6 col-md-4 col-sm-10",children:(0,j.jsx)("div",{style:{width:"600px",height:"270px",marginTop:"10px"},children:(0,j.jsx)(m.ZP,{options:{enableTooltip:!0,deterministic:!1,fontFamily:"impact",fontSizes:[15,50],fontStyle:"normal",fontWeight:"normal",padding:1,rotations:0,scale:"sqrt",spiral:"archimedean",transitionDuration:1e3},words:T})})})]})})}),(0,j.jsx)("br",{}),(0,j.jsx)("div",{className:"container text",children:(0,j.jsxs)("div",{className:"row align-items-start",children:[(0,j.jsx)("div",{className:"col-lg-8 col-md-6 col-sm-12",children:(0,j.jsx)("div",{className:"flex-container",children:(0,j.jsxs)("div",{className:"flex-item",children:[(0,j.jsx)("div",{style:{marginBottom:"20px"},children:(0,j.jsx)("h3",{children:"Trending Tweets Today "})}),(0,j.jsxs)("div",{className:"filter-buttons",children:[(0,j.jsx)("button",{className:"top_10_global"===C?"active":"",onClick:function(){return P("top_10_global")},children:"Global"}),(0,j.jsx)("button",{className:"top_10_media"===C?"active":"",onClick:function(){return P("top_10_media")},children:"With Media"}),(0,j.jsx)("button",{className:"top_10_verified"===C?"active":"",onClick:function(){return P("top_10_verified")},children:"Verified"}),(0,j.jsx)("button",{className:"top_10_question"===C?"active":"",onClick:function(){return P("top_10_question")},children:"Concerns"})]}),(0,j.jsx)("br",{}),W.length>0?W.map((function(e,t){return(0,j.jsxs)("div",{style:{marginBottom:"20px",width:"1270px",border:"1px solid #ccc",borderRadius:"8px"},children:[(0,j.jsxs)("div",{style:{display:"flex",alignItems:"flex-start"},children:[(0,j.jsx)("div",{style:{marginRight:"10px",marginTop:"6px"},children:(0,j.jsx)("img",{src:e.profile_photo,alt:"Perfil",style:{width:"65px",marginLeft:"5px"}})}),(0,j.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("strong",{children:["@",e.username]})," ",e.verified&&(0,j.jsx)("img",{src:v,alt:"Verificado",style:{width:"13px",height:"13px",verticalAlign:"middle",marginBottom:"2px"}})]}),(0,j.jsxs)("div",{style:{fontSize:"15px",marginRight:"5px"},children:[e.result,(0,j.jsx)("br",{}),null!==e.media?(0,j.jsx)("a",{href:e.media,target:"_blank",rel:"noopener noreferrer",children:e.media}):null]})]})]}),(0,j.jsx)("br",{}),(0,j.jsxs)("div",{style:{marginLeft:"75px",marginBottom:"5px"},children:[(0,j.jsx)(f.dSq,{title:"Impressions"})," ",e.total_impressions," \xa0\xa0\xa0",(0,j.jsx)(f.$0H,{title:"Likes"})," ",e.total_likes," \xa0\xa0\xa0",(0,j.jsx)(f.FxE,{title:"Retweets"})," ",e.total_retweets," \xa0\xa0\xa0",(0,j.jsx)(f.fkU,{title:"Quotes"})," ",e.total_quotes," \xa0\xa0\xa0",(0,j.jsx)(f.Bjt,{title:"Replies"})," ",e.total_replys," \xa0\xa0\xa0",e.mentions>1?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(f.Xws,{title:"Mentions"})," ",e.mentions]}):null,(0,j.jsxs)("div",{style:{marginLeft:"10px",display:"inline-flex",alignItems:"center"},children:["Positive"===e.sentiment?(0,j.jsxs)("p",{children:[(0,j.jsx)(f.vXJ,{style:{color:"#76CC9D"}})," Positive"]}):null,"Negative"===e.sentiment?(0,j.jsxs)("p",{children:[(0,j.jsx)(f.nYS,{style:{color:"#F46161"}})," Negative"]}):null,"Neutral"===e.sentiment?(0,j.jsxs)("p",{children:[(0,j.jsx)(f.UMU,{style:{color:"#FADB7C"}})," Neutral"]}):null]})]})]},t)})):(0,j.jsx)("p",{children:"N\xe3o h\xe1 dados dispon\xedveis para o filtro selecionado."})]})})}),(0,j.jsxs)("div",{className:"col-lg-2 col-md-3 col-sm-6",style:{marginLeft:"20px",marginTop:"20px",alignItems:"center"},children:[(0,j.jsx)("br",{}),(0,j.jsx)("br",{})]})]})})]})}},34073:function(e,t,i){"use strict";e.exports=i.p+"static/media/verified.189d9f4ef95c546073c8.png"},75042:function(){}}]);
//# sourceMappingURL=372.8ae1e8b9.chunk.js.map