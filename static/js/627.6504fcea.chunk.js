"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[627],{627:(e,s,t)=>{t.r(s),t.d(s,{Reviews:()=>l});var r=t(791),i=t(689);const a="Reviews_error__XbL4s",n="Reviews_list__NfW5y",c="Reviews_nick__+1z5+";var h=t(184);const l=e=>{let{handleFetching:s}=e;const[t,l]=(0,r.useState)([]),[o,d]=(0,r.useState)(!1),{movieId:v}=(0,i.UO)();return(0,r.useEffect)((()=>{s("https://api.themoviedb.org/3/movie/".concat(v,"/reviews?language=en-US&page=1")).then((e=>e.results.slice(0,10))).then((e=>l(e))).catch((()=>d(!0)))}),[s,v]),(0,h.jsxs)("div",{children:[(o||!t)&&(0,h.jsx)("p",{className:a,children:"Error: Failed to get information from the server."}),t.length>0?(0,h.jsx)("ul",{className:n,children:t.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{className:c,children:e.author}),(0,h.jsx)("p",{children:e.content})]},e.id)))}):(0,h.jsx)("p",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=627.6504fcea.chunk.js.map