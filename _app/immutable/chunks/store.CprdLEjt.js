import{u as b,b as f,c as l,r as i,d,e as p,g as a,f as _,n as r,h as g,m as v,i as m}from"./runtime.lFxhRguB.js";function w(){const n=l,s=n.l.u;s&&(s.b.length&&b(()=>{o(n),i(s.b)}),f(()=>{const u=d(()=>s.m.map(p));return()=>{for(const e of u)typeof e=="function"&&e()}}),s.a.length&&f(()=>{o(n),i(s.a)}))}function o(n){if(n.l.s)for(const s of n.l.s)a(s);_(n.s)}function h(n,s,u){if(n==null)return s(void 0),r;const e=n.subscribe(s,u);return e.unsubscribe?()=>e.unsubscribe():e}function x(n,s,u){const e=u[s]??(u[s]={store:null,source:v(void 0),unsubscribe:r});if(e.store!==n)if(e.unsubscribe(),e.store=n??null,n==null)e.source.v=void 0,e.unsubscribe=r;else{var t=!0;e.unsubscribe=h(n,c=>{t?e.source.v=c:m(e.source,c)}),t=!1}return a(e.source)}function y(){const n={};return g(()=>{for(var s in n)n[s].unsubscribe()}),n}export{x as a,w as i,y as s};
