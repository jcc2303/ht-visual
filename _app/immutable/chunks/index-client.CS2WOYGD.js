import{z as w,A as T,x as g,B as y,E as N,C,D as M,d as p,q as Y,S as $,F as B,G as F,L as U,H as z,g as h,i as G,I as q,J as H,m as j,c as S,b as J,k as V}from"./runtime.lFxhRguB.js";import{h as b,d as Z,p as K,q as Q,j as W,i as x,k as X,u as ee,v as re,w as ae,x as te}from"./disclose-version.DSOrustx.js";function L(e){throw new Error("lifecycle_outside_component")}function fe(e,r,t,n=null,s=!1){b&&Z();var a=e,l=null,u=null,f=null,c=s?N:0;w(()=>{if(f===(f=!!r()))return;let _=!1;if(b){const E=a.data===K;f===E&&(a=Q(),W(a),x(!1),_=!0)}f?(l?T(l):l=g(()=>t(a)),u&&y(u,()=>{u=null})):(u?T(u):n&&(u=g(()=>n(a))),l&&y(l,()=>{l=null})),_&&x(!0)},c),b&&(a=X)}function D(e,r){var n;var t=e&&((n=e[$])==null?void 0:n.t);return e===r||t===r}function le(e={},r,t,n){return C(()=>{var s,a;return M(()=>{s=a,a=[],p(()=>{e!==t(...a)&&(r(e,...a),s&&D(t(...s),e)&&r(null,...s))})}),()=>{Y(()=>{a&&D(t(...a),e)&&r(null,...a)})}}),e}function ce(e,r,t,n){var I;var s=(t&re)!==0,a=(t&ae)!==0,l=(t&te)!==0,u=e[r],f=(I=B(e,r))==null?void 0:I.set,c=n,_=!0,E=()=>(l&&_&&(_=!1,c=p(n)),c);u===void 0&&n!==void 0&&(f&&a&&F(),u=E(),f&&f(u));var o;if(a)o=()=>{var i=e[r];return i===void 0?E():(_=!0,i)};else{var A=(s?q:H)(()=>e[r]);A.f|=U,o=()=>{var i=h(A);return i!==void 0&&(c=void 0),i===void 0?c:i}}if(!(t&ee))return o;if(f){var O=e.$$legacy;return function(i,v){return arguments.length>0?((!a||!v||O)&&f(v?o():i),i):o()}}var m=!1,P=j(u),d=q(()=>{var i=o(),v=h(P);return m?(m=!1,v):P.v=i});return s||(d.equals=z),function(i,v){var k=h(d);if(arguments.length>0){const R=v?h(d):i;return d.equals(R)||(m=!0,G(P,R),h(d)),i}return k}}function _e(e){S===null&&L(),S.l!==null?se(S).m.push(e):J(()=>{const r=p(e);if(typeof r=="function")return r})}function ne(e,r,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(e,{detail:r,bubbles:t,cancelable:n})}function oe(){const e=S;return e===null&&L(),(r,t,n)=>{var a;const s=(a=e.s.$$events)==null?void 0:a[r];if(s){const l=V(s)?s.slice():[s],u=ne(r,t,n);for(const f of l)f.call(e.x,u);return!u.defaultPrevented}return!0}}function se(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{le as b,oe as c,fe as i,_e as o,ce as p};
