"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[396],{356:(t,c,e)=>{e.d(c,{IJ:()=>h,Mt:()=>i,Wg:()=>s,gv:()=>u,q_:()=>o});var n=e(372);const r="https://api.themoviedb.org/3",a={headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWRjNzIzMjY1YjdjMzZiOWJhNDE0N2E5NzQ4N2M4OCIsInN1YiI6IjY1MTE3ZDllMjZkYWMxMDBhYzA5OTE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWkR21zshqWnzB_Rinad0qTA6B3gODh5i3MASIEagk4")}};async function o(){try{return(await n.c.get("".concat(r,"/trending/all/day"),a)).data.results}catch(t){return console.error(t),[]}}async function s(t){try{return(await n.c.get("".concat(r,"/movie/").concat(t,"/credits"),a)).data.cast}catch(c){return console.error(c),[]}}async function i(t){try{return(await n.c.get("".concat(r,"/movie/").concat(t,"/reviews"),a)).data.results}catch(c){return console.error(c),[]}}async function u(t){try{return(await n.c.get("".concat(r,"/movie/").concat(t),a)).data}catch(c){return console.error(c),[]}}async function h(t){try{return(await n.c.get("".concat(r,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),a)).data.results}catch(c){return console.error(c),[]}}},396:(t,c,e)=>{e.r(c),e.d(c,{default:()=>y});var n,r,a=e(60),o=e(560),s=e(356),i=e(312),u=e(288);const h=u.c.h3(n||(n=(0,i.c)(["\n  font-size: 1.2rem;\n  color: #333; \n"]))),l=u.c.p(r||(r=(0,i.c)(["\n  font-size: 1rem;\n  color: #666;\n"])));var d=e(496);const y=function(){const[t,c]=(0,a.useState)([]),{movieId:e}=(0,o.W4)();return(0,a.useEffect)((()=>{(0,s.Mt)(e).then((t=>{c(t)})).catch((t=>{console.error(t)}))}),[e]),(0,d.jsx)("div",{children:(0,d.jsx)("ul",{children:t.length>0?t.map(((t,c)=>(0,d.jsxs)("li",{children:[(0,d.jsxs)(h,{children:["Author : ",t.author]}),(0,d.jsx)(l,{children:t.content})]},c))):(0,d.jsx)("p",{children:"We dont have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=396.b24a1fc4.chunk.js.map