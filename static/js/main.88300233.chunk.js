(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(6),s=n.n(a),i=n(3),o=n(2),l=n(17),u=n(11),b=n.n(u),d=n(13),j=function(){var e=Object(r.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,c,a,s,i=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:c});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:e}},h=n(18),f="HEROES_FETCHING",O="HEROES_FETCHED",m="HEROES_FETCHING_ERROR",p="HERO_DELETE",x="HERO_CREATE",g="FILTERS_FETCHED",v="FILTERS_FETCHING_ERROR",E="ACTIVE_FILTER_CHANGED",N=function(){return{type:f}},y=function(e){return{type:O,payload:e}},w=function(){return{type:m}},S=n(1),_=function(e){var t,n=e.name,r=e.description,c=e.element,a=e.deleteItem,s=e.id;switch(c){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(S.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(S.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h3",{className:"card-title",children:n}),Object(S.jsx)("p",{className:"card-text",children:r})]}),Object(S.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(S.jsx)("button",{onClick:function(){return a(s)},type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},T=function(){return Object(S.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},k=["id"],C=function(){var e=Object(h.a)((function(e){return e.filters.activeFilter}),(function(e){return e.heroes.heroes}),(function(e,t){return"all"===e?t:t.filter((function(t){return t.element===e}))})),t=Object(i.c)(e),n=Object(i.c)((function(e){return e.heroes.heroesLoadingStatus})),c=Object(i.b)(),a=j().request;Object(r.useEffect)((function(){c(function(e){return function(t){t(N()),e("https://617ee0342ff7e600174bd939.mockapi.io/heroes").then((function(e){return t(y(e))})).catch((function(){return t(w())}))}}(a))}),[]);var s=Object(r.useCallback)((function(e){a("https://617ee0342ff7e600174bd939.mockapi.io//heroes/".concat(e),"DELETE").then(console.log("delete element ".concat(e))).then(c(function(e){return{type:p,payload:e}}(e))).catch((function(e){return console.log(e)}))}),[a]);if(n)return Object(S.jsx)(T,{});if(n)return Object(S.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var u,b=0===(u=t).length?Object(S.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):u.map((function(e){var t=e.id,n=Object(l.a)(e,k);return Object(S.jsx)(_,Object(o.a)(Object(o.a)({},n),{},{deleteItem:function(){return s(t)}}),t)}));return Object(S.jsx)("ul",{children:b})},F=n(8),L=n(35),R=function(){var e=Object(r.useState)(""),t=Object(F.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(F.a)(a,2),o=s[0],l=s[1],u=Object(r.useState)(""),b=Object(F.a)(u,2),d=b[0],h=b[1],f=Object(i.c)((function(e){return e.filters})),O=f.filters,m=f.filtersLoadingStatus,p=Object(i.b)(),g=j().request;return Object(S.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t,r={id:Object(L.a)(),name:n,description:o,element:d};g("https://617ee0342ff7e600174bd939.mockapi.io//heroes","POST",JSON.stringify(r)).then(p((t=r,{type:x,payload:t}))).catch((function(e){return console.log(e)})).finally(c(" "),l(" "),h(" "))},children:[Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(S.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",value:n,placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",onChange:function(e){return c(e.target.value)}})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(S.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",value:o,placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},onChange:function(e){return l(e.target.value)}})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(S.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",value:d,onChange:function(e){return h(e.target.value)},children:[Object(S.jsx)("option",{children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),Object(S.jsx)("option",{value:"",children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),function(e,t){return"loading"===t?Object(S.jsx)("option",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}):"error"===t?Object(S.jsx)("option",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}):e&&e.length>0?e.map((function(e){var t=e.name,n=e.label;if("all"!==t)return Object(S.jsx)("option",{value:t,children:n},t)})):void 0}(O,m)]})]}),Object(S.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},I=n(14),H=n.n(I),D=function(){return{type:"FILTERS_FETCHING"}},q=function(e){return{type:g,payload:e}},G=function(){return{type:v}},X=function(){var e=Object(i.c)((function(e){return e.filters})),t=e.filters,n=e.filtersLoadingStatus,c=e.activeFilter,a=Object(i.b)(),s=j().request;if(Object(r.useEffect)((function(){a(function(e){return function(t){t(D()),e("https://617ee0342ff7e600174bd939.mockapi.io/filter").then((function(e){return t(q(e))})).catch((function(){return t(G())}))}}(s))}),[]),n)return Object(S.jsx)(T,{});if(n)return Object(S.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var o,l=0===(o=t).length?Object(S.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):o.map((function(e){var t=e.name,n=e.className,r=e.label,s=H()("btn",n,{active:t===c});return Object(S.jsx)("button",{id:t,className:s,onClick:function(){return a({type:E,payload:t})},children:r},t)}));return Object(S.jsx)("div",{className:"card shadow-lg mt-4",children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(S.jsx)("div",{className:"btn-group",children:l})]})})},A=(n(31),function(){return Object(S.jsx)("main",{className:"app",children:Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)(C,{}),Object(S.jsxs)("div",{className:"content__interactive",children:[Object(S.jsx)(R,{}),Object(S.jsx)(X,{})]})]})})}),J=n(4),V=n(15),U=n(16),B={heroes:[],heroesLoadingStatus:!0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case m:return Object(o.a)(Object(o.a)({},e),{},{heroesLoadingStatus:!0});case O:return Object(o.a)(Object(o.a)({},e),{},{heroes:t.payload,heroesLoadingStatus:!1});case p:return Object(o.a)(Object(o.a)({},e),{},{heroes:e.heroes.filter((function(e){return e.id!==t.payload}))});case x:var n=[].concat(Object(U.a)(e.heroes),[t.payload]);return Object(o.a)(Object(o.a)({},e),{},{heroes:n});default:return e}},P={filters:[],filtersLoadingStatus:!0,activeFilter:"all"},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(o.a)(Object(o.a)({},e),{},{filters:t.payload,filtersLoadingStatus:!1});case v:return Object(o.a)(Object(o.a)({},e),{},{filtersLoadingStatus:!0});case E:return Object(o.a)(Object(o.a)({},e),{},{activeFilter:t.payload});default:return e}},K=Object(J.b)({heroes:M,filters:z}),Q=Object(J.d)(K,Object(J.c)(Object(J.a)(V.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));n(32);s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(i.a,{store:Q,children:Object(S.jsx)(A,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.88300233.chunk.js.map