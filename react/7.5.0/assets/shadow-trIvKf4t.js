import"./iframe-JBdhx46N.js";const w=e=>`filter: ${e.split(/,(?![^(]*\))/).map(a=>{a=a.trim(),a.startsWith("inset ")&&(a=a.slice(6));const d=a.match(/(hsl|rgb)a?\(.*\)|#[0-9a-fA-F]{3,8}|[a-zA-Z]+$/);let c,l;d?(c=d[0],l=a.substring(0,d.index).trim().split(/\s+/)):(c="#000",l=a.trim().split(/\s+/));const[s,h,u]=l;return`drop-shadow(${s} ${h} ${u} ${c})`}).join(" ")};`,o={left:"inline-start",right:"inline-end",top:"block-start",bottom:"block-end",horizontal:"inline",vertical:"block"},f=e=>e==="all"?"border":`border-${o[e]}`,i=(e,r)=>`
    /* create a containing block without using \`position\` to prevent CSS specificity issues and unexpected overrides;
    \`transform: translateZ(0)\` is the least likely to affect other behaviors (overflow, layout) */
    transform: translateZ(0);

    ${S(e,r)}
  `,S=(e,r)=>{const{euiTheme:a}=e,{side:d="all",borderColor:c=a.border.color,borderWidth:l=a.border.width.thin,borderStyle:s="solid"}=r;return`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      /* ensure to keep on top of flush content */
      z-index: 0;
      ${f(d)}: ${l} ${s} ${c};
      border-radius: inherit;
      pointer-events: none;
    }
  `},g=(e,r)=>{const{euiTheme:a,highContrastMode:d}=e;if(d)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,a.shadows.xs[c],{border:r==null?void 0:r.border})},$=(e,r)=>{const{euiTheme:a,highContrastMode:d}=e;if(d)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,a.shadows.s[c],{border:r==null?void 0:r.border})},y=(e,r)=>{const{euiTheme:a,highContrastMode:d}=e;if(d)return t(e,r);const c=(r==null?void 0:r.direction)??"down",l=a.shadows.m[c];return(r==null?void 0:r.property)==="filter"?l?n(e,w(l),{border:r==null?void 0:r.border,type:"filter"}):"":n(e,l,{border:r==null?void 0:r.border})},v=(e,r)=>{const{euiTheme:a,highContrastMode:d}=e;if(d)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,a.shadows.l[c],{border:r==null?void 0:r.border})},M=(e,r)=>{const{euiTheme:a,highContrastMode:d}=e;if(d)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,a.shadows.xl[c],{border:r==null?void 0:r.border})},B=(e,r)=>{var s;const{euiTheme:a,highContrastMode:d}=e;if(d)return t(e,r);const l=(s=a.shadows.flat)==null?void 0:s["down"];return n(e,l,{border:r==null?void 0:r.border})},F=(e,r="l",a)=>{if(e.highContrastMode)return t(e,a);switch(r){case"xs":return g(e,a);case"s":return $(e,a);case"m":return y(e,a);case"l":return v(e,a);case"xl":return M(e,a);default:return console.warn("Please provide a valid size option to useEuiShadow"),""}},P=(e,r="base",a)=>{if(e.highContrastMode)return t(e,a);switch(r){case"base":return b(e,"base",a);case"xs":return b(e,"s",a);case"s":return b(e,"m",a);case"m":return b(e,"l",a);case"l":return b(e,"xl",a);case"xl":return b(e,"xxl",a);default:return console.warn("Please provide a valid size option to useEuiShadow"),""}},b=(e,r="l",a)=>{const{euiTheme:d,highContrastMode:c}=e;if(c)return t(e,a);const l="down",s=r==="base"?d.shadows.hover.base[l]:r==="xxl"?d.shadows.hover.xl[l]:d.shadows[r][l];return n(e,s,{border:a==null?void 0:a.border})},t=(e,{border:r="all",borderAllInHighContrastMode:a}={})=>{const{euiTheme:d}=e;return a||r&&r!=="none"?`border: ${d.border.thin};`:`border-block-end: ${d.border.thin};`},n=(e,r,a)=>{const{euiTheme:d}=e,c=d.flags.shadowVariant==="refresh",{border:l="all",type:s="box-shadow"}=a,h=e.colorMode==="DARK"&&l!=="none"?`${i(e,{side:l??"all"})}`:"";return`
    ${s==="filter"?r:`box-shadow: ${r};`};
    ${c&&h};
  `};export{F as a,S as b,B as c,y as d,M as e,P as f};
