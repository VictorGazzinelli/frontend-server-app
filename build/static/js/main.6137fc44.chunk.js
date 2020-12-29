(this["webpackJsonptrabalho-final"]=this["webpackJsonptrabalho-final"]||[]).push([[0],{651:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),i=n.n(a),c=n(93),s=n.n(c),o=n(49);var l,d=function(t){var e=t.display;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{id:"display",className:"lcd-screen",children:e})})},u=n(40);!function(t){t.UPDATE="UPDATE",t.ADD="ADD",t.SUBTRACT="SUBTRACT",t.MULTIPLY="MULTIPLY",t.DIVIDE="DIVIDE",t.CLEAR="CLEAR",t.EQUAL="EQUAL"}(l||(l={}));var j=l,p=n(41);function b(){var t=Object(u.a)(["\n    display: flex;\n    width: 50px;\n    height: 50px;\n    background-color: grey;\n    border: 1px solid black;\n    border-radius: 5px;\n    box-shadow: -3px 5px 10px 0px rgba(0,0,0, .35);\n    font-size: 1.5em;\n    align-items: center;\n    justify-content: center;\n"]);return b=function(){return t},t}var h=Object(o.b)()((function(t){var e=t.button,n=t.id,a=(t.display,t.dispatch);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(O,{id:n,value:e,className:"button",onClick:function(t){var r;a("clear"===n?{type:j.CLEAR,payload:{operation:"clear"}}:"subtract"===n?{type:j.SUBTRACT,payload:{operation:"operator"}}:"multiply"===n?{type:j.MULTIPLY,payload:{operation:"operator"}}:"divide"===n?{type:j.DIVIDE,payload:{operation:"operator"}}:"add"===n?{type:j.ADD,payload:{operation:"operator"}}:"equals"===n?{type:j.EQUAL,payload:{operation:"equal"}}:(r=e,{type:j.UPDATE,payload:{input:r,operation:"num"}}))},children:e})})})),O=p.a.button(b());function y(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 15%;\n  justify-content: start;\n  align-items: center;\n"]);return y=function(){return t},t}function x(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 75%;\n  height: 60%;\n"]);return x=function(){return t},t}var v=function(t){var e=t.display;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"keypad",children:[Object(r.jsxs)(f,{className:"button-group",children:[Object(r.jsxs)(m,{className:"button-row",children:[Object(r.jsx)(h,{button:"C",id:"clear",display:e}),Object(r.jsx)(h,{button:"/",id:"divide",display:e}),Object(r.jsx)(h,{button:"*",id:"multiply",display:e})]}),Object(r.jsxs)(m,{className:"button-row",children:[Object(r.jsx)(h,{button:"7",id:"seven",display:e}),Object(r.jsx)(h,{button:"8",id:"eight",display:e}),Object(r.jsx)(h,{button:"9",id:"nine",display:e}),Object(r.jsx)(h,{button:"-",id:"subtract",display:e})]}),Object(r.jsxs)(m,{className:"button-row",children:[Object(r.jsx)(h,{button:"4",id:"four",display:e}),Object(r.jsx)(h,{button:"5",id:"five",display:e}),Object(r.jsx)(h,{button:"6",id:"six",display:e}),Object(r.jsx)(h,{button:"+",id:"add",display:e})]}),Object(r.jsxs)(m,{className:"button-row",children:[Object(r.jsx)(h,{button:"1",id:"one",display:e}),Object(r.jsx)(h,{button:"2",id:"two",display:e}),Object(r.jsx)(h,{button:"3",id:"three",display:e})]})]}),Object(r.jsxs)(m,{className:"button-row",children:[Object(r.jsx)(h,{button:"0",id:"zero",display:e}),Object(r.jsx)(h,{button:".",id:"decimal",display:e}),Object(r.jsx)(h,{button:"=",id:"equals",display:e})]})]})})},f=p.a.div(x()),m=p.a.div(y());var g=Object(o.b)((function(t){console.log("oldState",t);var e=t.display;return console.log("newState",e),{display:e}}),null)((function(t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"calculator-body",children:[Object(r.jsx)("div",{className:"display-block",children:Object(r.jsx)(d,{display:t.display})}),Object(r.jsx)("div",{className:"keypad-block",children:Object(r.jsx)(v,{display:t.display})})]})})}));var w=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h1",{children:"Home"})})},A=n(96),D=n(196),U=n(197),E=n(97),L=n.n(E),N=function(){function t(){Object(D.a)(this,t)}return Object(U.a)(t,null,[{key:"_withBaseUrl",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"https://api.themoviedb.org/3/".concat(e,"?").concat(n,"&api_key=").concat(t.apiKey)}},{key:"getPopularMovies",value:function(){return L()(t._withBaseUrl("movie/popular"))}},{key:"getMovieById",value:function(e){return L()(t._withBaseUrl("movie/".concat(e)))}},{key:"getGenres",value:function(){return L()(t._withBaseUrl("genre/movie/list"))}}]),t}();N.apiKey="d416af5d4faee64e25ab001d87aab5c3";var T=function(t){t.id;var e=t.tittle,n=t.imagePath,a=t.subtitle,i=t.footer;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[n&&Object(r.jsx)("img",{src:n,style:{width:"200px",height:"200px"}}),Object(r.jsx)("h3",{children:e}),Object(r.jsx)("p",{children:a}),Object(r.jsx)("p",{children:i})]})})};var k=function(){var t=function(){var t=Object(a.useState)([]),e=Object(A.a)(t,2),n=e[0],r=e[1];return Object(a.useEffect)((function(){N.getGenres().then((function(t){return r(t.data.genres)}))}),[]),n}(),e=function(){var t=Object(a.useState)([]),e=Object(A.a)(t,2),n=e[0],r=e[1];return Object(a.useEffect)((function(){N.getPopularMovies().then((function(t){return r(t.data.results)}))}),[]),n}();return Object(r.jsx)(r.Fragment,{children:e.length>0&&t.length>0&&e.map((function(e,n){return Object(r.jsx)(T,{id:e.id,imagePath:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):null,tittle:e.title,subtitle:e.overview,footer:e.genre_ids.map((function(e){var n;return null===(n=t.find((function(t){return t.id===e})))||void 0===n?void 0:n.name})).filter((function(t){return null!=t})).join(",")},n)}))})},I=n(95),P=n(13);var S=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h1",{children:"Logo"})})};function C(){var t=Object(u.a)(["\n  list-style: none;\n\n  li {\n    display: inline-block;\n    margin-right: 16px;\n  }\n"]);return C=function(){return t},t}var F=function(t){var e=t.items;return Object(r.jsx)("nav",{className:"main-nav",children:Object(r.jsx)(B,{children:e.map((function(t,e){return Object(r.jsx)("li",{children:Object(r.jsx)(I.b,{to:t.route,children:t.title})},e)}))})})},B=p.a.ul(C());function M(){var t=Object(u.a)(["\n  width: 80%;\n  text-align: right;\n"]);return M=function(){return t},t}function R(){var t=Object(u.a)(["\n  display: flex\n"]);return R=function(){return t},t}var _=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(q,{className:"header-wrapper",children:[Object(r.jsx)("div",{className:"main-logo",children:Object(r.jsx)(S,{})}),Object(r.jsx)(Q,{className:"header-info",children:Object(r.jsx)(F,{items:[{title:"Home",route:"/home"},{title:"Calculadora",route:"/calculator"},{title:"Filmes",route:"/movies"}]})})]})})},q=p.a.div(R()),Q=p.a.div(M()),V=n(94),Y=n(18),z=n(98),G={display:"0",prevOp:"",accumulated:"0",history:"0"},H=Object(V.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j.UPDATE:var n=e.payload;return t.display.includes(".")&&"."===n.input||t.display.length>8?Object(Y.a)({},t):Object(Y.a)(Object(Y.a)({},t),{},{display:"0"==t.display||"operator"===t.prevOp?n.input:t.display+n.input,prevOp:n.operation});case j.ADD:var r=function(){return"operator"===t.prevOp?t.history.slice(0,t.history.length-4):t.history};return Object(Y.a)(Object(Y.a)({},t),{},{display:t.display,history:"0"==t.history&&"0"==t.accumulated?t.display+" + ":"0"!=t.accumulated?t.accumulated+" + ":r()+t.display+" + ",prevOp:"operator"});case j.SUBTRACT:var a=function(){return"operator"===t.prevOp?t.history.slice(0,t.history.length-4):t.history};return Object(Y.a)(Object(Y.a)({},t),{},{display:t.display,history:"0"==t.history&&"0"==t.accumulated?t.display+" - ":"0"!=t.accumulated?t.accumulated+" - ":a()+t.display+" - ",prevOp:"operator"});case j.MULTIPLY:var i=function(){return"operator"===t.prevOp?t.history.slice(0,t.history.length-4):t.history};return Object(Y.a)(Object(Y.a)({},t),{},{display:t.display,history:"0"==t.history&&"0"==t.accumulated?t.display+" * ":"0"!=t.accumulated?t.accumulated+" * ":i()+t.display+" * ",prevOp:"operator"});case j.DIVIDE:var c=function(){return"operator"===t.prevOp?t.history.slice(0,t.history.length-4):t.history};return Object(Y.a)(Object(Y.a)({},t),{},{display:t.display,history:"0"==t.history&&"0"==t.accumulated?t.display+" / ":"0"!=t.accumulated?t.accumulated+" / ":c()+t.display+" / ",prevOp:"operator"});case j.CLEAR:return Object(Y.a)(Object(Y.a)({},t),{},{display:"0",prevOp:"clear",accumulated:0,history:"0"});case j.EQUAL:var s=t.history+t.display,o=z.eval(s);return"equal"===t.prevOp?Object(Y.a)({},t):Object(Y.a)(Object(Y.a)({},t),{},{history:z.round(o,4).toString(),display:z.round(o,4).toString(),accumulated:o.toString(),prevOp:"equal"});default:return t}}));var J=function(t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(I.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{}),Object(r.jsx)("hr",{}),Object(r.jsxs)(P.d,{children:[Object(r.jsx)(P.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(P.a,{to:"/home"})}}),Object(r.jsx)(P.b,{path:"/home",children:Object(r.jsx)(w,{})}),Object(r.jsx)(P.b,{path:"/calculator",children:Object(r.jsx)(o.a,{store:H,children:Object(r.jsx)(g,{})})}),Object(r.jsx)(P.b,{path:"/movies",children:Object(r.jsx)(k,{})})]})]})})})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(o.a,{store:H,children:Object(r.jsx)(J,{})})}),document.getElementById("root"))}},[[651,1,2]]]);
//# sourceMappingURL=main.6137fc44.chunk.js.map