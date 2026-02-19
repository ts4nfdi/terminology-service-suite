import{r as B}from"./client-hNkKQuBU.js";import{aK as a,aO as M,bN as C,aP as w,aQ as l,aU as _,aL as i,bO as K,aM as k,aR as T,aJ as $,cl as F,aN as I}from"./QueryClientProvider-Cv6DMAwY.js";import{a as Q}from"./link.styles-DeXSguuE.js";var U={name:"uacjc5-inherit",styles:"color:inherit;label:inherit;"},V=function(e){var t=e.euiTheme;return{euiTextColor:a(";label:euiTextColor;"),default:a("color:",t.colors.textParagraph,";;label:default;"),subdued:a("color:",t.colors.textSubdued,";;label:subdued;"),success:a("color:",t.colors.textSuccess,";;label:success;"),accent:a("color:",t.colors.textAccent,";;label:accent;"),accentSecondary:a("color:",t.colors.textAccentSecondary,";;label:accentSecondary;"),danger:a("color:",t.colors.textDanger,";;label:danger;"),warning:a("color:",t.colors.textWarning,";;label:warning;"),ghost:a("color:",t.colors.ghost,"!important;;label:ghost;"),inherit:U,customColor:a(";label:customColor;")}};function P(n){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(n)}var G=["children","color","component","cloneElement","style"];function N(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,o)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?N(Object(t),!0).forEach(function(o){J(n,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(t,o))})}return n}function J(n,e,t){return(e=X(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function X(n){var e=Y(n,"string");return P(e)=="symbol"?e:e+""}function Y(n,e){if(P(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var o=t.call(n,e);if(P(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Z(n,e){if(n==null)return{};var t,o,r=ee(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||{}.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function ee(n,e){if(n==null)return{};var t={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(e.indexOf(o)>=0)continue;t[o]=n[o]}return t}var te=["default","subdued","success","accent","accentSecondary","danger","warning","ghost","inherit"],ne=function(e){return te.includes(e)},L=function(e){var t=e.children,o=e.color,r=o===void 0?"default":o,c=e.component,f=c===void 0?"span":c,m=e.cloneElement,g=m===void 0?!1:m,p=e.style,s=Z(e,G),y=ne(r),h=M(V),b=[h.euiTextColor,y?h[r]:h.customColor],d=S(y?{}:{color:r},p),v=S({css:b,style:d},s);if(B.isValidElement(t)&&g){var x=S(S({},t.props.style),d);return C(t,S(S({},v),{},{style:x}))}else return w(f,v,t)};L.propTypes={className:l.string,"aria-label":l.string,"data-test-subj":l.string,css:l.any,component:l.oneOf(["div","span","p"]),cloneElement:l.bool,color:l.oneOfType([l.any.isRequired,l.any.isRequired])};var W={euiTextAlign:a(";label:euiTextAlign;"),left:a(_("left"),";;label:left;"),right:a(_("right"),";;label:right;"),center:a(_("center"),";;label:center;")};function j(n){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(n)}var oe=["children","component","textAlign","cloneElement"];function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,o)}return t}function re(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?D(Object(t),!0).forEach(function(o){ie(n,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(t,o))})}return n}function ie(n,e,t){return(e=le(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function le(n){var e=ae(n,"string");return j(e)=="symbol"?e:e+""}function ae(n,e){if(j(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var o=t.call(n,e);if(j(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ce(n,e){if(n==null)return{};var t,o,r=se(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||{}.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function se(n,e){if(n==null)return{};var t={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(e.indexOf(o)>=0)continue;t[o]=n[o]}return t}var R=function(e){var t=e.children,o=e.component,r=o===void 0?"div":o,c=e.textAlign,f=c===void 0?"left":c,m=e.cloneElement,g=m===void 0?!1:m,p=ce(e,oe),s=[W.euiTextAlign,W[f]],y=re({css:s},p);return B.isValidElement(t)&&g?C(t,y):w(r,y,t)};R.propTypes={className:l.string,"aria-label":l.string,"data-test-subj":l.string,css:l.any,component:l.oneOf(["div","span","p"]),cloneElement:l.bool,textAlign:l.any};function z(n){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(n)}function q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,o)}return t}function H(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?q(Object(t),!0).forEach(function(o){ue(n,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(t,o))})}return n}function ue(n,e,t){return(e=fe(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function fe(n){var e=pe(n,"string");return z(e)=="symbol"?e:e+""}function pe(n,e){if(z(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var o=t.call(n,e);if(z(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var u=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",o=arguments.length>2?arguments[2]:void 0,r=e.euiTheme,c={xxxs:"xs",xxs:"s",xs:"m",s:"l",m:"xl",l:"xxl"};return H(H({},k(e,c[t],o)),{},{fontWeight:r.font.weight[r.font.title.weight],color:r.colors.textHeading})},be={name:"1x2qsb1-uppercase",styles:"text-transform:uppercase;label:uppercase;"},je=function(e){return{euiTitle:a(K()," &+&{",i("margin-top",e.euiTheme.size.l),";};label:euiTitle;"),uppercase:be,xxxs:a(u(e,"xxxs"),";;label:xxxs;"),xxs:a(u(e,"xxs"),";;label:xxs;"),xs:a(u(e,"xs"),";;label:xs;"),s:a(u(e,"s"),";;label:s;"),m:a(u(e,"m"),";;label:m;"),l:a(u(e,"l"),";;label:l;")}},de=function(e){var t=e.euiTheme;return{backgroundColor:t.components.codeBackground,color:t.components.codeColor}},me="max(64ch, 75%)",ge=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return{color:t?"inherit":e.colors.textParagraph,fontWeight:e.font.weight.regular}},E=function(e,t){var o=k(e,"m",t),r=o.fontSize,c=o.lineHeight,f=e.euiTheme,m=t.unit,g=t.customScale,p=m==="em"?"".concat(c,"em"):c,s={h1:u(e,"l",t),h2:u(e,"m",t),h3:u(e,"s",t),h4:u(e,"xs",t),h5:u(e,"xxs",t),h6:u(e,"xxxs",t)},y=g==="xxxs"?"xxs":g||"m",h=f.size[y],b=$(h,function(x){return x*2}),d=h,v=$(r,function(x){return x/4});return`
    font-size: `.concat(r,`;
    line-height: `).concat(c,`;

    h1 {
      font-size: `).concat(s.h1.fontSize,`;
      line-height: `).concat(s.h1.lineHeight,`;
    }
    h1:not(:last-child) {
      `).concat(i("margin-bottom",d),`
    }

    h2 {
      font-size: `).concat(s.h2.fontSize,`;
      line-height: `).concat(s.h2.lineHeight,`;

      &:not(:first-child) {
        `).concat(i("margin-top",b),`
      }

      &:not(:last-child) {
        `).concat(i("margin-bottom",d),`
      }
    }

    h3 {
      font-size: `).concat(s.h3.fontSize,`;
      line-height: `).concat(s.h3.lineHeight,`;

      &:not(:first-child) {
        `).concat(i("margin-top",b),`
      }

      &:not(:last-child) {
        `).concat(i("margin-bottom",d),`
      }
    }

    h4 {
      font-size: `).concat(s.h4.fontSize,`;
      line-height: `).concat(s.h4.lineHeight,`;

      &:not(:first-child) {
        `).concat(i("margin-top",b),`
      }

      &:not(:last-child) {
        `).concat(i("margin-bottom",d),`
      }
    }

    h5 {
      font-size: `).concat(s.h5.fontSize,`;
      line-height: `).concat(s.h5.lineHeight,`;

      &:not(:first-child) {
        `).concat(i("margin-top",b),`
      }

      &:not(:last-child) {
        `).concat(i("margin-bottom",d),`
      }
    }

    h6 {
      font-size: `).concat(s.h6.fontSize,`;
      line-height: `).concat(s.h6.lineHeight,`;

      &:not(:first-child) {
        `).concat(i("margin-top",b),`
      }

      &:not(:last-child) {
        `).concat(i("margin-bottom",d),`
      }
    }

    p,
    dl,
    blockquote,
    pre,
    > ul,
    > ol {
      `).concat(i("margin-bottom",p),`
    }

    ul,
    ol {
      `).concat(i("margin-left",p),`
    }

    /* The styles of the nested ordered lists follow the style of GitHub
       which is commonly used in Markdown or MDX formatting. */
    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }

    ul ul ol,
    ul ol ol,
    ol ul ol,
    ol ol ol {
      list-style-type: lower-alpha;
    }
  
    blockquote {
      font-size: `).concat(r,`;
      `).concat(F("padding","0 ".concat(r)),`
      `).concat(i("border-left-width",v),`
      `).concat(i("margin-bottom",r),`
    }

    dd + dt {
      `).concat(i("margin-top",r),`
    }

    dt,
    .eui-definitionListReverse dd {
      font-size: `).concat(r,`;
      line-height: `).concat(c,`;
    }

    .eui-definitionListReverse dt {
      font-size: `).concat(k(e,"xs",t).fontSize,`;
      color: `).concat(f.colors.textParagraph,`;
    }

    small {
      font-size: `).concat(k(e,"s",t).fontSize,`;
    }

    pre:not(.euiCodeBlock__pre) {
      padding: `).concat(p,`;
    }

    code:not(.euiCode):not(.euiCodeBlock__code)  {
      font-size: .9em; /* 90% of parent font size */
    }
    `).concat(T(e,{preferred:`
        .euiCodeBlock {
          `.concat(i("margin-bottom",p),`

          pre {
            `).concat(i("margin-bottom",0),`
          }
        }
      `)}),`
    `).concat(g==="m"?`
    kbd {
      `.concat(i("padding-bottom",f.size.xs),`
      /* Ensures the shape still looks like a square when only one character */
      `).concat(i("min-width",f.size.l),`
      `).concat(_("center"),`
    }
    
    kbd::after {
      content: '';
      `).concat(i("border-bottom","".concat(f.border.width.thin," solid ").concat(f.colors.textParagraph)),`
      position: absolute;
      `).concat(i("bottom",f.size.xxs),`
      `).concat(i("left",0),`
      `).concat(i("width","100%"),`
    }`):"",`
  `)},ye=function(e){var t=e.euiTheme,o=de(e);return{euiText:a(ge(t,!0),"clear:both;a:not([class]){",Q(e),";}ul{list-style:disc;}ol{list-style:decimal;}blockquote{border-inline-start-color:",t.border.color,";border-inline-start-style:solid;}blockquote:not(.euiMarkdownFormat__blockquote){color:",t.colors.textSubdued,";}h1{",u(e,"l"),";}h2{",u(e,"m"),";}h3{",u(e,"s"),";}h4,dt{",u(e,"xs"),";}h5{",u(e,"xxs"),";}h6{",u(e,"xxxs")," text-transform:uppercase;}h1,h2,h3,h4,h5,h6,dt{color:inherit;}pre:not(.euiCodeBlock > pre){white-space:pre-wrap;background-color:",o.backgroundColor,";color:",o.color,";",T(e,{preferred:"border: ".concat(t.border.thin)}),";}pre:not(.euiCodeBlock__pre),pre:not(.euiCodeBlock__pre) code{display:block;}>:last-child{",i("margin-bottom","0 !important"),";}kbd{position:relative;display:inline-block;",i("padding-vertical",t.size.xxs)," ",i("padding-horizontal",t.size.xs)," line-height:1;border:",t.border.width.thin," solid ",t.colors.textParagraph,";border-radius:",$(t.border.radius.small,function(r){return r/2}),";",T(e,{forced:`
            overflow: hidden;
            vertical-align: middle;
          `}),";};label:euiText;"),constrainedWidth:a(i("max-width",me),";;label:constrainedWidth;"),m:a(E(e,{customScale:"m"}),";;label:m;"),s:a(E(e,{customScale:"s"}),";;label:s;"),xs:a(E(e,{customScale:"xs"}),";;label:xs;"),relative:a(E(e,{unit:"em"}),";;label:relative;")}},he=["component","size","color","grow","textAlign","children","className"];function A(){return A=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)({}).hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},A.apply(null,arguments)}function ve(n,e){if(n==null)return{};var t,o,r=xe(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||{}.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function xe(n,e){if(n==null)return{};var t={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(e.indexOf(o)>=0)continue;t[o]=n[o]}return t}var Se=function(e){var t=e.component,o=t===void 0?"div":t,r=e.size,c=r===void 0?"m":r,f=e.color,m=e.grow,g=m===void 0?!0:m,p=e.textAlign,s=e.children,y=e.className,h=ve(e,he),b=M(ye),d=[b.euiText,g?void 0:b.constrainedWidth,b[c]],v=I("euiText",y),x=o,O=w(x,A({css:d,className:v},h),s);return f&&(O=w(L,{component:o,color:f,className:v,cloneElement:!0},O)),p&&(O=w(R,{component:o,textAlign:p,className:v,cloneElement:!0},O)),O};Se.propTypes={className:l.string,"aria-label":l.string,"data-test-subj":l.string,css:l.any,component:l.oneOf(["div","span","p"]),color:l.oneOfType([l.any.isRequired,l.any.isRequired]),textAlign:l.any,size:l.any,grow:l.bool};export{Se as E,L as a,je as b,u as e};
