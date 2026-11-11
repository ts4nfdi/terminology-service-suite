import{r as q}from"./client-DFp2fd_t.js";import{F as i,Q as l,bN as R,Z as z,S as M,cx as H,U as C,V as c,bu as E,N as T,M as _,W as F,X as V}from"./provider-BlV9U33F.js";import{a as G}from"./link.styles-BGS0RoP2.js";function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(e)}function A(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function N(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?A(Object(o),!0).forEach(function(t){Q(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function Q(e,n,o){return(n=U(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function U(e){var n=X(e,"string");return O(n)=="symbol"?n:n+""}function X(e,n){if(O(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var t=o.call(e,n);if(O(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var u=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",t=arguments.length>2?arguments[2]:void 0,r=n.euiTheme,a={xxxs:"xs",xxs:"s",xs:"m",s:"l",m:"xl",l:"xxl"};return N(N({},z(n,a[o],t)),{},{fontWeight:r.font.weight[r.font.title.weight],color:r.colors.textHeading})},Z={name:"1x2qsb1-uppercase",styles:"text-transform:uppercase;label:uppercase;"},Pn=function(n){return{euiTitle:i(R()," &+&{",l("margin-top",n.euiTheme.size.l),";};label:euiTitle;"),uppercase:Z,xxxs:i(u(n,"xxxs"),";;label:xxxs;"),xxs:i(u(n,"xxs"),";;label:xxs;"),xs:i(u(n,"xs"),";;label:xs;"),s:i(u(n,"s"),";;label:s;"),m:i(u(n,"m"),";;label:m;"),l:i(u(n,"l"),";;label:l;")}},J={name:"uacjc5-inherit",styles:"color:inherit;label:inherit;"},Y=function(n){var o=n.euiTheme;return{euiTextColor:i(";label:euiTextColor;"),default:i("color:",o.colors.textParagraph,";;label:default;"),subdued:i("color:",o.colors.textSubdued,";;label:subdued;"),success:i("color:",o.colors.textSuccess,";;label:success;"),accent:i("color:",o.colors.textAccent,";;label:accent;"),accentSecondary:i("color:",o.colors.textAccentSecondary,";;label:accentSecondary;"),danger:i("color:",o.colors.textDanger,";;label:danger;"),warning:i("color:",o.colors.textWarning,";;label:warning;"),ghost:i("color:",o.colors.textGhost,"!important;;label:ghost;"),inherit:J,customColor:i(";label:customColor;")}};function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(e)}var nn=["children","color","component","cloneElement","style"];function W(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function k(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?W(Object(o),!0).forEach(function(t){on(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):W(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function on(e,n,o){return(n=en(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function en(e){var n=tn(e,"string");return w(n)=="symbol"?n:n+""}function tn(e,n){if(w(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var t=o.call(e,n);if(w(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function rn(e,n){if(e==null)return{};var o,t,r=ln(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function ln(e,n){if(e==null)return{};var o={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)>=0)continue;o[t]=e[t]}return o}var cn=["default","subdued","success","accent","accentSecondary","danger","warning","ghost","inherit"],an=function(n){return cn.includes(n)},I=function(n){var o=n.children,t=n.color,r=t===void 0?"default":t,a=n.component,d=a===void 0?"span":a,f=n.cloneElement,g=f===void 0?!1:f,p=n.style,s=rn(n,nn),y=an(r),h=M(Y),m=[h.euiTextColor,y?h[r]:h.customColor],b=k(y?{}:{color:r},p),v=k({css:m,style:b},s);if(q.isValidElement(o)&&g){var x=k(k({},o.props.style),b);return H(o,k(k({},v),{},{style:x}))}else return C(d,v,o)};I.propTypes={className:c.string,"aria-label":c.string,"data-test-subj":c.string,css:c.any,component:c.oneOf(["div","span","p"]),cloneElement:c.bool,color:c.oneOfType([c.any.isRequired,c.any.isRequired])};var D={euiTextAlign:i(";label:euiTextAlign;"),left:i(E("left"),";;label:left;"),right:i(E("right"),";;label:right;"),center:i(E("center"),";;label:center;")};function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},P(e)}var sn=["children","component","textAlign","cloneElement"];function B(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function un(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?B(Object(o),!0).forEach(function(t){dn(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function dn(e,n,o){return(n=pn(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function pn(e){var n=mn(e,"string");return P(n)=="symbol"?n:n+""}function mn(e,n){if(P(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var t=o.call(e,n);if(P(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function bn(e,n){if(e==null)return{};var o,t,r=fn(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function fn(e,n){if(e==null)return{};var o={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)>=0)continue;o[t]=e[t]}return o}var K=function(n){var o=n.children,t=n.component,r=t===void 0?"div":t,a=n.textAlign,d=a===void 0?"left":a,f=n.cloneElement,g=f===void 0?!1:f,p=bn(n,sn),s=[D.euiTextAlign,D[d]],y=un({css:s},p);return q.isValidElement(o)&&g?H(o,y):C(r,y,o)};K.propTypes={className:c.string,"aria-label":c.string,"data-test-subj":c.string,css:c.any,component:c.oneOf(["div","span","p"]),cloneElement:c.bool,textAlign:c.any};var L=function(n){var o=n.euiTheme;return{backgroundColor:o.components.codeBackground,color:o.components.codeColor}},jn=function(n){var o=n.euiTheme,t=n.highContrastMode,r=L(n),a=r.backgroundColor,d=r.color;return{backgroundColor:a,color:d,inlineBackgroundColor:o.components.codeInlineBackground,inlineCodeColor:o.components.codeInlineColor,selectedBackgroundColor:o.components.codeBackgroundSelected,commentColor:o.components.codeCommentColor,selectorTagColor:o.components.codeSelectorColor,stringColor:o.components.codeStringColor,tagColor:o.components.codeTagColor,nameColor:o.components.codeNameColor,numberColor:o.components.codeNumberColor,keywordColor:o.components.codeKeywordColor,inlineCodeKeywordColor:o.components.codeInlineCodeKeywordColor,functionTitleColor:o.components.codeFunctionTitleColor,typeColor:o.components.codeTypeColor,attributeColor:o.components.codeAttributeColor,symbolColor:o.components.codeSymbolColor,paramsColor:o.components.codeParamsColor,metaColor:o.components.codeMetaColor,titleColor:o.components.codeTitleColor,sectionColor:o.components.codeSectionColor,additionColor:o.components.codeAdditionColor,deletionColor:o.components.codeDeletionColor,selectorClassColor:o.components.codeSelectorClassColor,selectorIdColor:o.components.codeSelectorIdColor,get tokensCss(){return`
  .token.punctuation:not(.interpolation-punctuation):not([class*='attr-']) {
    opacity: `.concat(t?"1":".7",`;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.coord,
  .token.blockquote {
    color: `).concat(this.commentColor,`;
    font-style: italic;
  }

  .token.selector {
    color: `).concat(this.selectorTagColor,`;
  }

  .token.string,
  .token.interpolation,
  .token.interpolation-punctuation,
  .token.doc-comment .token.keyword,
  .token.attr-value,
  .token.url .token.content {
    color: `).concat(this.stringColor,`;
  }

  .token.number,
  .token.boolean,
  .token.keyword.nil,
  .token.regex,
  .token.variable,
  .token.unit,
  .token.hexcode,
  .token.attr-name,
  .token.attr-equals {
    color: `).concat(this.numberColor,`;
  }

  .token.atrule .token.rule,
  .token.key.atrule,
  .token.keyword {
    color: `).concat(this.keywordColor,`;
  }

  .token.function {
    color: `).concat(this.functionTitleColor,`;
  }

  .token.tag {
    color: `).concat(this.tagColor,`;
  }

  .token.class-name {
    color: `).concat(this.typeColor,`;
  }

  .token.property {
    color: `).concat(this.attributeColor,`;
  }

  .token.console,
  .token.list-punctuation,
  .token.url-reference,
  .token.url .token.url {
    color: `).concat(this.symbolColor,`;
  }

  .token.paramater {
    color: `).concat(this.paramsColor,`;
  }

  .token.meta,
  .token.important {
    color: `).concat(this.metaColor,`;
  }

  .token.title {
    color: `).concat(this.titleColor,`;
  }

  .token.section {
    color: `).concat(this.sectionColor,`;
  }

  .token.prefix.inserted,
  .token.prefix.deleted {
    padding-inline-start: -`).concat(o.size.xs,`;
    margin-inline-start:  -`).concat(o.size.xs,`;
  }

  .token.prefix.inserted {
    box-shadow: -`).concat(o.size.xs," 0 ").concat(this.additionColor,`;
    color: `).concat(this.additionColor,`;
  }

  .token.prefix.deleted {
    box-shadow: -`).concat(o.size.xs," 0 ").concat(this.deletionColor,`;
    color: `).concat(this.deletionColor,`;
  }

  .token.selector .token.class {
    color: `).concat(this.selectorClassColor,`;
  }

  .token.selector .token.id {
    color: `).concat(this.selectorIdColor,`;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: `).concat(o.font.weight.bold,`;
  }

  .token.url-reference,
  .token.url .token.url {
    text-decoration: underline;
  }

  .token.entity {
    cursor: help;
  }`)}}},gn="max(64ch, 75%)",yn=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return{color:o?"inherit":n.colors.textParagraph,fontWeight:n.font.weight.regular}},j=function(n,o){var t=z(n,"m",o),r=t.fontSize,a=t.lineHeight,d=n.euiTheme,f=o.unit,g=o.customScale,p=f==="em"?"".concat(a,"em"):a,s={h1:u(n,"l",o),h2:u(n,"m",o),h3:u(n,"s",o),h4:u(n,"xs",o),h5:u(n,"xxs",o),h6:u(n,"xxxs",o)},y=g==="xxxs"?"xxs":g||"m",h=d.size[y],m=_(h,function(x){return x*2}),b=h,v=_(r,function(x){return x/4});return`
    font-size: `.concat(r,`;
    line-height: `).concat(a,`;

    h1 {
      font-size: `).concat(s.h1.fontSize,`;
      line-height: `).concat(s.h1.lineHeight,`;
    }
    h1:not(:last-child) {
      `).concat(l("margin-bottom",b),`
    }

    h2 {
      font-size: `).concat(s.h2.fontSize,`;
      line-height: `).concat(s.h2.lineHeight,`;

      &:not(:first-child) {
        `).concat(l("margin-top",m),`
      }

      &:not(:last-child) {
        `).concat(l("margin-bottom",b),`
      }
    }

    h3 {
      font-size: `).concat(s.h3.fontSize,`;
      line-height: `).concat(s.h3.lineHeight,`;

      &:not(:first-child) {
        `).concat(l("margin-top",m),`
      }

      &:not(:last-child) {
        `).concat(l("margin-bottom",b),`
      }
    }

    h4 {
      font-size: `).concat(s.h4.fontSize,`;
      line-height: `).concat(s.h4.lineHeight,`;

      &:not(:first-child) {
        `).concat(l("margin-top",m),`
      }

      &:not(:last-child) {
        `).concat(l("margin-bottom",b),`
      }
    }

    h5 {
      font-size: `).concat(s.h5.fontSize,`;
      line-height: `).concat(s.h5.lineHeight,`;

      &:not(:first-child) {
        `).concat(l("margin-top",m),`
      }

      &:not(:last-child) {
        `).concat(l("margin-bottom",b),`
      }
    }

    h6 {
      font-size: `).concat(s.h6.fontSize,`;
      line-height: `).concat(s.h6.lineHeight,`;

      &:not(:first-child) {
        `).concat(l("margin-top",m),`
      }

      &:not(:last-child) {
        `).concat(l("margin-bottom",b),`
      }
    }

    p,
    dl,
    blockquote,
    pre,
    > ul,
    > ol {
      `).concat(l("margin-bottom",p),`
    }

    ul,
    ol {
      `).concat(l("margin-left",p),`
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
      `).concat(l("border-left-width",v),`
      `).concat(l("margin-bottom",r),`
    }

    dd + dt {
      `).concat(l("margin-top",r),`
    }

    dt,
    .eui-definitionListReverse dd {
      font-size: `).concat(r,`;
      line-height: `).concat(a,`;
    }

    .eui-definitionListReverse dt {
      font-size: `).concat(z(n,"xs",o).fontSize,`;
      color: `).concat(d.colors.textParagraph,`;
    }

    small {
      font-size: `).concat(z(n,"s",o).fontSize,`;
    }

    pre:not(.euiCodeBlock__pre) {
      padding: `).concat(p,`;
    }

    code:not(.euiCode):not(.euiCodeBlock__code)  {
      font-size: .9em; /* 90% of parent font size */
    }
    `).concat(T(n,{preferred:`
        .euiCodeBlock {
          `.concat(l("margin-bottom",p),`

          pre {
            `).concat(l("margin-bottom",0),`
          }
        }
      `)}),`
    `).concat(g==="m"?`
    kbd {
      `.concat(l("padding-bottom",d.size.xs),`
      /* Ensures the shape still looks like a square when only one character */
      `).concat(l("min-width",d.size.l),`
      `).concat(E("center"),`
    }
    
    kbd::after {
      content: '';
      `).concat(l("border-bottom","".concat(d.border.width.thin," solid ").concat(d.colors.textParagraph)),`
      position: absolute;
      `).concat(l("bottom",d.size.xxs),`
      `).concat(l("left",0),`
      `).concat(l("width","100%"),`
    }`):"",`
  `)},hn=function(n){var o=n.euiTheme,t=L(n);return{euiText:i(yn(o,!0),"clear:both;a:not([class]){",G(n),";}ul{list-style:disc;}ol{list-style:decimal;}blockquote{border-inline-start-color:",o.border.color,";border-inline-start-style:solid;}blockquote:not(.euiMarkdownFormat__blockquote){color:",o.colors.textSubdued,";}h1{",u(n,"l"),";}h2{",u(n,"m"),";}h3{",u(n,"s"),";}h4,dt{",u(n,"xs"),";}h5{",u(n,"xxs"),";}h6{",u(n,"xxxs"),";}h1,h2,h3,h4,h5,h6,dt{color:inherit;}pre:not(.euiCodeBlock > pre){white-space:pre-wrap;background-color:",t.backgroundColor,";color:",t.color,";",T(n,{preferred:"border: ".concat(o.border.thin)}),";}pre:not(.euiCodeBlock__pre),pre:not(.euiCodeBlock__pre) code{display:block;}>:last-child{",l("margin-bottom","0 !important"),";}kbd{position:relative;display:inline-block;",l("padding-vertical",o.size.xxs)," ",l("padding-horizontal",o.size.xs)," line-height:1;border:",o.border.width.thin," solid ",o.colors.textParagraph,";border-radius:",_(o.border.radius.small,function(r){return r/2}),";",T(n,{forced:`
            overflow: hidden;
            vertical-align: middle;
          `}),";};label:euiText;"),constrainedWidth:i(l("max-width",gn),";;label:constrainedWidth;"),m:i(j(n,{customScale:"m"}),";;label:m;"),s:i(j(n,{customScale:"s"}),";;label:s;"),xs:i(j(n,{customScale:"xs"}),";;label:xs;"),relative:i(j(n,{unit:"em"}),";;label:relative;")}},vn=["component","size","color","grow","textAlign","children","className"];function $(){return $=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)({}).hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},$.apply(null,arguments)}function xn(e,n){if(e==null)return{};var o,t,r=kn(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function kn(e,n){if(e==null)return{};var o={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)>=0)continue;o[t]=e[t]}return o}var Sn=function(n){var o=n.component,t=o===void 0?"div":o,r=n.size,a=r===void 0?"m":r,d=n.color,f=n.grow,g=f===void 0?!0:f,p=n.textAlign,s=n.children,y=n.className,h=xn(n,vn),m=M(hn),b=[m.euiText,g?void 0:m.constrainedWidth,m[a]],v=V("euiText",y),x=t,S=C(x,$({css:b,className:v},h),s);return d&&(S=C(I,{component:t,color:d,className:v,cloneElement:!0},S)),p&&(S=C(K,{component:t,textAlign:p,className:v,cloneElement:!0},S)),S};Sn.propTypes={className:c.string,"aria-label":c.string,"data-test-subj":c.string,css:c.any,component:c.oneOf(["div","span","p"]),color:c.oneOfType([c.any.isRequired,c.any.isRequired]),textAlign:c.any,size:c.any,grow:c.bool};export{Sn as E,I as a,u as b,Pn as c,jn as e};
