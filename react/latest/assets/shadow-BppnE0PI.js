import"./iframe-D1bE6IOg.js";const w=e=>`filter: ${e.split(/,(?![^(]*\))/).map(d=>{d=d.trim(),d.startsWith("inset ")&&(d=d.slice(6));const a=d.match(/(hsl|rgb)a?\(.*\)|#[0-9a-fA-F]{3,8}|[a-zA-Z]+$/);let c,l;a?(c=a[0],l=d.substring(0,a.index).trim().split(/\s+/)):(c="#000",l=d.trim().split(/\s+/));const[s,h,u]=l;return`drop-shadow(${s} ${h} ${u} ${c})`}).join(" ")};`,o={left:"inline-start",right:"inline-end",top:"block-start",bottom:"block-end",horizontal:"inline",vertical:"block"},f=e=>e==="all"?"border":`border-${o[e]}`,i=(e,r)=>`
    /* create a containing block without using \`position\` to prevent CSS specificity issues and unexpected overrides;
    \`transform: translateZ(0)\` is the least likely to affect other behaviors (overflow, layout) */
    transform: translateZ(0);

    ${S(e,r)}
  `,S=(e,r)=>{const{euiTheme:d}=e,{side:a="all",borderColor:c=d.border.color,borderWidth:l=d.border.width.thin,borderStyle:s="solid"}=r;return`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      /* ensure to keep on top of flush content */
      z-index: 0;
      ${f(a)}: ${l} ${s} ${c};
      border-radius: inherit;
      pointer-events: none;
    }
  `},g=(e,r)=>{const{euiTheme:d,highContrastMode:a}=e;if(a)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,d.shadows.xs[c],{border:r==null?void 0:r.border})},$=(e,r)=>{const{euiTheme:d,highContrastMode:a}=e;if(a)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,d.shadows.s[c],{border:r==null?void 0:r.border})},y=(e,r)=>{const{euiTheme:d,highContrastMode:a}=e;if(a)return t(e,r);const c=(r==null?void 0:r.direction)??"down",l=d.shadows.m[c];return(r==null?void 0:r.property)==="filter"?l?n(e,w(l),{border:r==null?void 0:r.border,type:"filter"}):"":n(e,l,{border:r==null?void 0:r.border})},v=(e,r)=>{const{euiTheme:d,highContrastMode:a}=e;if(a)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,d.shadows.l[c],{border:r==null?void 0:r.border})},M=(e,r)=>{const{euiTheme:d,highContrastMode:a}=e;if(a)return t(e,r);const c=(r==null?void 0:r.direction)??"down";return n(e,d.shadows.xl[c],{border:r==null?void 0:r.border})},B=(e,r)=>{var s;const{euiTheme:d,highContrastMode:a}=e;if(a)return t(e,r);const l=(s=d.shadows.flat)==null?void 0:s["down"];return n(e,l,{border:r==null?void 0:r.border})},F=(e,r="l",d)=>{if(e.highContrastMode)return t(e,d);switch(r){case"xs":return g(e,d);case"s":return $(e,d);case"m":return y(e,d);case"l":return v(e,d);case"xl":return M(e,d);default:return console.warn("Please provide a valid size option to useEuiShadow"),""}},P=(e,r="base",d)=>{if(e.highContrastMode)return t(e,d);switch(r){case"base":return b(e,"base",d);case"xs":return b(e,"s",d);case"s":return b(e,"m",d);case"m":return b(e,"l",d);case"l":return b(e,"xl",d);case"xl":return b(e,"xxl",d);default:return console.warn("Please provide a valid size option to useEuiShadow"),""}},b=(e,r="l",d)=>{const{euiTheme:a,highContrastMode:c}=e;if(c)return t(e,d);const l="down",s=r==="base"?a.shadows.hover.base[l]:r==="xxl"?a.shadows.hover.xl[l]:a.shadows[r][l];return n(e,s,{border:d==null?void 0:d.border})},t=(e,{border:r="all",borderAllInHighContrastMode:d}={})=>{const{euiTheme:a}=e;return d||r&&r!=="none"?`border: ${a.border.thin};`:`border-block-end: ${a.border.thin};`},n=(e,r,d)=>{const{euiTheme:a}=e,c=a.flags.shadowVariant==="refresh",{border:l="all",type:s="box-shadow"}=d,h=e.colorMode==="DARK"&&l!=="none"?`${i(e,{side:l??"all"})}`:"";return`
    ${s==="filter"?r:`box-shadow: ${r};`};
    ${c&&h};
  `};export{S as a,B as b,y as c,P as d,F as e};
