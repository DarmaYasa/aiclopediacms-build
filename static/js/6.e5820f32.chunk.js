(this["webpackJsonpaiclopedia-admin"]=this["webpackJsonpaiclopedia-admin"]||[]).push([[6],{520:function(e,a,t){"use strict";t.r(a);var n=t(26),c=t(48),s=t(49),l=t(50),i=t(51),o=t(0),r=t.n(o),m=t(57),d=t(300),u=t.n(d),p=t(32),b=(t(283),function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).onCollectionUpdate=function(e){var a=[];new Promise((function(t,c){e.forEach((function(e){a.push(Object(n.a)({key:e.id},e.data()))}))})),s.setState({contents:a})},s.ref=p.a.firestore().collection("contents"),s.unsubscribe=null,s.state={contents:[],isLoading:!1},s}return Object(s.a)(t,[{key:"componentWillMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){console.log(this.state.contents);var e=[{name:"#"},{name:"Latin Name"},{name:"Name",options:{filter:!1,customBodyRender:function(e){return r.a.createElement(o.Fragment,null,r.a.createElement("b",{className:"d-block pb-1"},"Indonesiam")," ",e.id,r.a.createElement("b",{className:"d-block pb-1 mt-1"},"English ")," ",e.en)}}},{name:"Description",options:{filter:!1,customBodyRender:function(e){return r.a.createElement(o.Fragment,null,r.a.createElement("b",{className:"d-block pb-1"},"Indonesian"),r.a.createElement("p",null,e.id),r.a.createElement("b",{className:"d-block pb-1"},"English"),r.a.createElement("p",null,e.en))}}},{name:"Audio",options:{filter:!1,customBodyRender:function(e){return r.a.createElement(o.Fragment,null,r.a.createElement("b",{className:"d-block pb-1"},"Indonesian"),r.a.createElement("audio",{style:{maxWidth:"5% !important"},src:e.id,controls:!0}),r.a.createElement("b",{className:"d-block pb-1 mt-1"},"English"),r.a.createElement("audio",{src:e.en,controls:!0}))}}},{name:"Action",options:{filter:!1,customBodyRender:function(e){return r.a.createElement(o.Fragment,null,r.a.createElement(m.b,{className:"btn btn-primary aligns-items-center",style:{paddingTop:"14px"},to:"/content/update/".concat(e)},r.a.createElement("i",{className:"fa fas fa-fw fa-edit"})))}}}],a=this.state.contents,t=[];return a.map((function(e,a){var n=[++a,e.latinName,{id:e.indonesian.name,en:e.english.name},{id:e.indonesian.description,en:e.english.description},{id:e.indonesian.audio,en:e.english.audio},e.key];t.push(n)})),r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"section-header"},r.a.createElement("h1",null,"Manage Classes/Labels")),r.a.createElement("div",{className:"section-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Manage Data"),r.a.createElement("div",{className:"card-header-action"},r.a.createElement(m.b,{to:"/content/create",className:"btn btn-primary",style:{borderRadius:"0px !important",paddingTop:"5px",paddingBottom:"5px"}},r.a.createElement("i",{className:"fa fas fa-plus"})," Add New Data"))),r.a.createElement("div",{className:"card-body"},r.a.createElement(u.a,{title:"Contents List",data:t,columns:e,options:{elevation:0,selectableRows:!1}})))))))}}]),t}(o.Component));a.default=b}}]);
//# sourceMappingURL=6.e5820f32.chunk.js.map