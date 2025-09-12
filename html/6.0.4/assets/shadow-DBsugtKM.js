import{c as l,cI as s}from"./storyArgs-AFjXh7XW.js";const $=(x,a,w)=>{const r=w===s.dark?a*3.5:a*1;return l(x).alpha(r).css()},d=({euiTheme:x,colorMode:a,highContrastMode:w},r)=>{if(w)return u(x,r);const c=(r==null?void 0:r.color)||x.colors.shadow;return`
box-shadow:
  0 .8px .8px ${$(c,.04,a)},
  0 2.3px 2px ${$(c,.03,a)};
`},f=({euiTheme:x,colorMode:a,highContrastMode:w},r)=>{if(w)return u(x,r);const c=(r==null?void 0:r.color)||x.colors.shadow;return`
box-shadow:
  0 .7px 1.4px ${$(c,.07,a)},
  0 1.9px 4px ${$(c,.05,a)},
  0 4.5px 10px ${$(c,.05,a)};
`},S=({euiTheme:x,colorMode:a,highContrastMode:w},r)=>{if(w)return u(x,r);const c=(r==null?void 0:r.color)||x.colors.shadow;return(r==null?void 0:r.property)==="filter"?`filter: drop-shadow(0 5.7px 9px ${$(c,.2,a)});`:`box-shadow:
      0 .9px 4px ${$(c,.08,a)},
      0 2.6px 8px ${$(c,.06,a)},
      0 5.7px 12px ${$(c,.05,a)},
      0 15px 15px ${$(c,.04,a)};`},e=({euiTheme:x,colorMode:a,highContrastMode:w},r)=>{if(w)return u(x,r);const c=(r==null?void 0:r.color)||x.colors.shadow;return`
box-shadow:
  0 1px 5px ${$(c,.1,a)},
  0 3.6px 13px ${$(c,.07,a)},
  0 8.4px 23px ${$(c,.06,a)},
  0 23px 35px ${$(c,.05,a)};
`},b=({euiTheme:x,colorMode:a,highContrastMode:w},r)=>{if(w)return u(x,r);const c=(r==null?void 0:r.color)||x.colors.shadow,h=(r==null?void 0:r.reverse)??!1;return`
box-shadow:
  0 ${h?"-":""}2.7px 9px ${$(c,.13,a)},
  0 ${h?"-":""}9.4px 24px ${$(c,.09,a)},
  0 ${h?"-":""}21.8px 43px ${$(c,.08,a)};
`},g=({euiTheme:x,colorMode:a,highContrastMode:w},r)=>{if(w)return u(x,r);const c=x.colors.shadow;return`
box-shadow:
  0 0 .8px ${$(c,.06,a)},
  0 0 2px ${$(c,.04,a)},
  0 0 5px ${$(c,.04,a)},
  0 0 17px ${$(c,.03,a)};
`},t=(x,a="l",w)=>{if(x.highContrastMode)return u(x.euiTheme,w);switch(a){case"xs":return d(x,w);case"s":return f(x,w);case"m":return S(x,w);case"l":return e(x,w);case"xl":return b(x,w);default:return console.warn("Please provide a valid size option to useEuiShadow"),""}},u=({border:x},{borderAllInHighContrastMode:a}={})=>a?`border: ${x.thin};`:`border-block-end: ${x.thin};`;export{g as a,S as b,t as e};
