import{q as V,ay as m,am as E,V as I,K as D,af as j,az as q,z,aA as L,T as H,aB as Y,_ as G,aC as T,C as w,y as O,a as U,D as v,U as $,aD as F,aE as K,P as x,A as J,aF as Q,w as X,G as Z,p as ee,h as k,d as te,k as re}from"./runtime.DcMbfjP2.js";import{d as ae}from"./disclose-version.9B_-sdtN.js";function _e(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ne=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function pe(e){return ne.includes(e)}const oe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function he(e){return e=e.toLowerCase(),oe[e]??e}const se=["touchstart","touchmove"];function ie(e){return se.includes(e)}function ve(e,t){if(t){const r=document.body;e.autofocus=!0,V(()=>{document.activeElement===r&&e.focus()})}}let R=!1;function ue(){R||(R=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function C(e){var t=I,r=D;m(null),E(null);try{return e()}finally{m(t),E(r)}}function ye(e,t,r,s=r){e.addEventListener(t,()=>C(r));const n=e.__on_r;n?e.__on_r=()=>{n(),s(!0)}:e.__on_r=()=>s(!0),ue()}const P=new Set,A=new Set;function ce(e,t,r,s){function n(a){if(s.capture||y.call(t,a),!a.cancelBubble)return C(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?V(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function ge(e,t,r,s,n){var a={capture:s,passive:n},u=ce(e,t,r,a);(t===document.body||t===window||t===document)&&j(()=>{t.removeEventListener(e,u,a)})}function we(e){for(var t=0;t<e.length;t++)P.add(e[t]);for(var r of A)r(e)}function y(e){var N;var t=this,r=t.ownerDocument,s=e.type,n=((N=e.composedPath)==null?void 0:N.call(e))||[],a=n[0]||e.target,u=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=n.indexOf(t);if(p===-1)return;d<=p&&(u=d)}if(a=n[u]||e.target,a!==t){q(e,"currentTarget",{configurable:!0,get(){return a||r}});var b=I,c=D;m(null),E(null);try{for(var o,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var l=a["__"+s];if(l!==void 0&&!a.disabled)if(z(l)){var[B,...W]=l;B.apply(a,[e,...W])}else l.call(a,e)}catch(g){o?i.push(g):o=g}if(e.cancelBubble||f===t||f===null)break;a=f}if(o){for(let g of i)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=t,delete e.currentTarget,m(b),E(c)}}}function me(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function fe(e,t){return M(e,t)}function Ee(e,t){L(),t.intro=t.intro??!1;const r=t.target,s=k,n=v;try{for(var a=H(r);a&&(a.nodeType!==8||a.data!==Y);)a=G(a);if(!a)throw T;w(!0),O(a),U();const u=M(e,{...t,anchor:a});if(v===null||v.nodeType!==8||v.data!==$)throw F(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&K(),L(),x(r),w(!1),fe(e,t);throw u}finally{w(s),O(n)}}const h=new Map;function M(e,{target:t,anchor:r,props:s={},events:n,context:a,intro:u=!0}){L();var _=new Set,d=c=>{for(var o=0;o<c.length;o++){var i=c[o];if(!_.has(i)){_.add(i);var f=ie(i);t.addEventListener(i,y,{passive:f});var l=h.get(i);l===void 0?(document.addEventListener(i,y,{passive:f}),h.set(i,1)):h.set(i,l+1)}}};d(J(P)),A.add(d);var p=void 0,b=Q(()=>{var c=r??t.appendChild(X());return Z(()=>{if(a){ee({});var o=re;o.c=a}n&&(s.$$events=n),k&&ae(c,null),p=e(c,s)||{},k&&(D.nodes_end=v),a&&te()}),()=>{var f;for(var o of _){t.removeEventListener(o,y);var i=h.get(o);--i===0?(document.removeEventListener(o,y),h.delete(o)):h.set(o,i)}A.delete(d),c!==r&&((f=c.parentNode)==null||f.removeChild(c))}});return S.set(p,b),p}let S=new WeakMap;function be(e,t){const r=S.get(e);return r?(S.delete(e),r(t)):Promise.resolve()}export{ue as a,ve as b,ce as c,we as d,pe as e,ge as f,Ee as h,_e as i,ye as l,fe as m,he as n,me as s,be as u};