(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(16),s=n.n(r),i=(n(22),n(17)),o=n(3),u=n.n(o),j=n(5),l=n(7),d=n(6),h=n.n(d),v=n(0),b=function(e){var t,n=e.title,c=e.poster_path,a=e.overview,r=e.vote_average;return Object(v.jsxs)("div",{className:"card_container",children:[Object(v.jsx)("img",{className:"movie_img",src:"https://image.tmdb.org/t/p/w1280"+c,alt:n}),Object(v.jsxs)("div",{className:"info_container",children:[Object(v.jsx)("h3",{className:"title",children:n}),Object(v.jsx)("span",{className:"tag ".concat((t=r,t>=8?"green":t>=5?"yellow":"red")),children:r})]}),Object(v.jsxs)("div",{className:"movie_info",children:[Object(v.jsx)("h2",{children:"Overview"}),Object(v.jsx)("p",{children:a})]})]})};var p=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),o=s[0],d=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)("div",{className:"header_container",children:Object(v.jsx)("form",{onSubmit:function(e){(e.preventDefault(),o)&&(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+o);case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),d(""))},children:Object(v.jsx)("input",{className:"search",type:"text",placeholder:"Search...",value:o,onChange:function(e){d(e.target.value)}})})}),Object(v.jsx)("div",{className:"content",children:Object(v.jsx)("div",{className:"movie_container",children:n.map((function(e){return Object(v.jsx)(b,Object(i.a)({},e),e.id)}))})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(p,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.466aee92.chunk.js.map