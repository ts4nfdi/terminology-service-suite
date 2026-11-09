import{ah as b,f as m,r as c,u as C,D as B,h as E,ay as z,P as f}from"./iframe-DXdc-Lnu.js";import{c as v,a as Z}from"./emotion-css.esm-BdVx7Xv6.js";import{u as N}from"./useCombinedRefs-D0F3xZWi.js";import{E as U}from"./portal-B26yOc-I.js";var j,w,_,L;function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var W=b(j||(j=h([`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`]))),ie=function(n){return b(w||(w=h([`
   0% {
    opacity: 0;
    transform: translateY(`,`);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`])),n)},se=function(n){return b(_||(_=h([`
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
`])));var X=function(n){var t=n.euiTheme,a=n.highContrastMode;return{euiOverlayMask:v("position:fixed;",m("top",0)," ",m("left",0)," ",m("right",0)," ",m("bottom",0)," display:flex;align-items:center;justify-content:center;animation:",W," ",t.animation.fast," ease-in forwards;animation-iteration-count:1;background:",a?t.components.overlayMaskBackgroundHighContrast:t.components.overlayMaskBackground,";;label:euiOverlayMask;"),aboveHeader:v("z-index:",t.levels.mask,";;label:aboveHeader;"),belowHeader:v("z-index:",t.levels.maskBelowHeader,";",m("top","var(--euiFixedHeadersOffset, 0)"),";;label:belowHeader;"),noAnimation:v({name:"lqr4xc-noAnimation",styles:"animation:none;label:noAnimation;"})}},q={name:"131160-euiOverlayMaskBodyStyles",styles:"body{overflow:hidden;};label:euiOverlayMaskBodyStyles;"},$=["className","children","headerZindexLocation","maskRef","hasAnimation"];function T(e){return D(e)||Y(e)||I(e)||F()}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function D(e){if(Array.isArray(e))return S(e)}function G(e,n){return Q(e)||K(e,n)||I(e,n)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(e,n){if(e){if(typeof e=="string")return S(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(e,n):void 0}}function S(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function K(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,i,o,d,l=[],y=!0,u=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(y=(a=o.call(t)).done)&&(l.push(a.value),l.length!==n);y=!0);}catch(p){u=!0,i=p}finally{try{if(!y&&t.return!=null&&(d=t.return(),Object(d)!==d))return}finally{if(u)throw i}}return l}}function Q(e){if(Array.isArray(e))return e}function V(e,n){if(e==null)return{};var t,a,i=ee(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function ee(e,n){if(e==null)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;t[a]=e[a]}return t}var ne=function(n){var t=n.className,a=n.children,i=n.headerZindexLocation,o=i===void 0?"above":i,d=n.maskRef,l=n.hasAnimation,y=l===void 0?!0:l,u=V(n,$),p=c.useRef(!1),R=c.useState(null),g=G(R,2),r=g[0],H=g[1],P=N([H,d]),O=c.useCallback(function(){p.current=!0},[]),A=C(X),k=Z([A.euiOverlayMask,A["".concat(o,"Header")],(p.current||!y)&&A.noAnimation]);return c.useEffect(function(){if(r)return B(u).forEach(function(s){if(typeof u[s]!="string")throw new Error("Unhandled property type. EuiOverlayMask property ".concat(s," is not a string."));r&&r.setAttribute(s,u[s])}),r.addEventListener("animationend",O,{once:!0}),function(){r.removeEventListener("animationend",O)}},[r,O]),c.useEffect(function(){if(r)return r.classList.add("euiOverlayMask",k),r.dataset.relativeToHeader=o,function(){return r.classList.remove(k)}},[r,k,o]),c.useEffect(function(){if(t&&r){var s,M=t.split(" ");return(s=r.classList).add.apply(s,T(M)),function(){var x;return(x=r.classList).remove.apply(x,T(M))}}},[r,t]),E(U,{portalRef:P},E(z,{styles:q}),a)};ne.propTypes={children:f.node,headerZindexLocation:f.oneOf(["above","below"]),maskRef:f.oneOfType([f.any.isRequired,f.any.isRequired]),hasAnimation:f.bool};export{ne as E,ie as a,se as e};
