import{r as c}from"./client-DFp2fd_t.js";import{cB as b,Q as m,S as P,c1 as B,U as E,d5 as z,V as f}from"./provider-BlV9U33F.js";import{c as v,a as U}from"./emotion-css.esm-CxlRctii.js";import{u as Z}from"./useCombinedRefs-Crz01-E9.js";import{E as N}from"./portal-Cl-RhKb3.js";var j,w,_,L;function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var W=b(j||(j=h([`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`]))),se=function(n){return b(w||(w=h([`
   0% {
    opacity: 0;
    transform: translateY(`,`);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`])),n)},le=function(n){return b(_||(_=h([`
  0% {
    transform: translateX(`,`);
  }

  100% {
    transform: translateX(0);

  }
`])),n)};b(L||(L=h([`
  0% {
    opacity: 0;
  }

  1% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`])));var X=function(n){var t=n.euiTheme,a=n.highContrastMode;return{euiOverlayMask:v("position:fixed;",m("top",0)," ",m("left",0)," ",m("right",0)," ",m("bottom",0)," display:flex;align-items:center;justify-content:center;animation:",W," ",t.animation.fast," ease-in forwards;animation-iteration-count:1;background:",a?t.components.overlayMaskBackgroundHighContrast:t.components.overlayMaskBackground,";;label:euiOverlayMask;"),aboveHeader:v("z-index:",t.levels.mask,";;label:aboveHeader;"),belowHeader:v("z-index:",t.levels.maskBelowHeader,";",m("top","var(--euiFixedHeadersOffset, 0)"),";;label:belowHeader;"),noAnimation:v({name:"lqr4xc-noAnimation",styles:"animation:none;label:noAnimation;"})}},q={name:"131160-euiOverlayMaskBodyStyles",styles:"body{overflow:hidden;};label:euiOverlayMaskBodyStyles;"},$=["className","children","headerZindexLocation","maskRef","hasAnimation"];function T(e){return G(e)||Y(e)||I(e)||F()}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function G(e){if(Array.isArray(e))return k(e)}function Q(e,n){return J(e)||D(e,n)||I(e,n)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(e,n){if(e){if(typeof e=="string")return k(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(e,n):void 0}}function k(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function D(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,i,o,d,l=[],y=!0,u=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(y=(a=o.call(t)).done)&&(l.push(a.value),l.length!==n);y=!0);}catch(p){u=!0,i=p}finally{try{if(!y&&t.return!=null&&(d=t.return(),Object(d)!==d))return}finally{if(u)throw i}}return l}}function J(e){if(Array.isArray(e))return e}function K(e,n){if(e==null)return{};var t,a,i=ee(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function ee(e,n){if(e==null)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;t[a]=e[a]}return t}var ne=function(n){var t=n.className,a=n.children,i=n.headerZindexLocation,o=i===void 0?"above":i,d=n.maskRef,l=n.hasAnimation,y=l===void 0?!0:l,u=K(n,$),p=c.useRef(!1),R=c.useState(null),g=Q(R,2),r=g[0],H=g[1],C=Z([H,d]),O=c.useCallback(function(){p.current=!0},[]),A=P(X),S=U([A.euiOverlayMask,A["".concat(o,"Header")],(p.current||!y)&&A.noAnimation]);return c.useEffect(function(){if(r)return B(u).forEach(function(s){if(typeof u[s]!="string")throw new Error("Unhandled property type. EuiOverlayMask property ".concat(s," is not a string."));r&&r.setAttribute(s,u[s])}),r.addEventListener("animationend",O,{once:!0}),function(){r.removeEventListener("animationend",O)}},[r,O]),c.useEffect(function(){if(r)return r.classList.add("euiOverlayMask",S),r.dataset.relativeToHeader=o,function(){return r.classList.remove(S)}},[r,S,o]),c.useEffect(function(){if(t&&r){var s,M=t.split(" ");return(s=r.classList).add.apply(s,T(M)),function(){var x;return(x=r.classList).remove.apply(x,T(M))}}},[r,t]),E(N,{portalRef:C},E(z,{styles:q}),a)};ne.propTypes={children:f.node,headerZindexLocation:f.oneOf(["above","below"]),maskRef:f.oneOfType([f.any.isRequired,f.any.isRequired]),hasAnimation:f.bool};export{ne as E,se as a,le as e};
