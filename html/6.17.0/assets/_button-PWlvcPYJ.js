import{cr as _,j as l,cs as w,ct as H,cu as P,ar as j,ap as y,au as E,cq as p,ax as I,av as B}from"./QueryClientProvider-CtwX41Lz.js";function h(n){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},h(n)}var D=function(o,r){return l.contrast(o,r)},F=4.5,z=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4.85;return function(t){var e,a=h(t)==="object"&&(e=_(t,o))!==null&&e!==void 0?e:o,i=h(t)==="object"?t.colors.body:t;(l(a).alpha()<1||l(i).alpha()<1)&&console.warn(`Contrast cannot be accurately calculated when colors have alpha channel opacity. Make sure the provided foreground and background colors have no transparency:

Foreground: `.concat(a,`
Background: `).concat(i));for(var c=l.contrast(a,i),b=w(i),s=a;c<r;){b>50?s=H(s,.05):s=P(s,.05),c=l.contrast(s,i);var u=w(s);if(u<5)return console.warn("High enough contrast could not be determined. Most likely your background color does not adjust for light mode."),s;if(u>95)return console.warn("High enough contrast could not be determined. Most likely your background color does not adjust for dark mode."),s}return l(s).hex()}},eo=function(o,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:F,e=D(o,r);e<t&&console.warn("Warning: ".concat(r," background with ").concat(o," text has a low contrast of ").concat(e.toFixed(2),". Should be above ").concat(t,"."))},v=':disabled, [aria-disabled="true"]';function g(n){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},g(n)}function N(n){return R(n)||L(n)||x(n)||V()}function V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(n,o){if(n){if(typeof n=="string")return k(n,o);var r={}.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(n,o):void 0}}function L(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function R(n){if(Array.isArray(n))return k(n)}function k(n,o){(o==null||o>n.length)&&(o=n.length);for(var r=0,t=Array(o);r<o;r++)t[r]=n[r];return t}function O(n,o){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)}return r}function A(n){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?O(Object(r),!0).forEach(function(t){U(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function U(n,o,r){return(o=W(o))in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function W(n){var o=K(n,"string");return g(o)=="symbol"?o:o+""}function K(n,o){if(g(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var t=r.call(n,o);if(g(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}var Y=["neutral","risk"],$=["text","accent","accentSecondary","primary","success","warning","danger"],q=[].concat($,Y),X=["base","fill","empty"],d=function(o,r,t){var e=o.euiTheme,a=o.highContrastMode,i=t==="base"?"background":"background".concat(t.charAt(0).toUpperCase()+t.slice(1)),c=t==="filled"?"textColorFilled":"textColor",b=p(i,r),s=p(c,r),u=p(i,r,"hover"),f=p(i,r,"active"),T=["warning","neutral","risk"].includes(r)?e.colors.textInk:r==="disabled"?e.components.buttons[s]:e.colors.textInverse,C=t==="filled"&&a?T:e.components.buttons[s];return{color:C,background:e.components.buttons[b],backgroundHover:e.components.buttons[u],backgroundActive:e.components.buttons[f],borderColor:a?C:r==="text"?e.colors.borderBasePlain:"transparent"}},G=function(o,r){var t=d(o,r,"base"),e=t.color,a=t.background;return{color:a==="transparent"||r==="disabled"?e:z(e)(a),backgroundColor:a,borderColor:t.borderColor,backgroundHover:t.backgroundHover,backgroundActive:t.backgroundActive}},S=function(o,r){var t=G(o,r);return A({color:t.color,backgroundColor:t.backgroundColor},M(o,t.borderColor))},J=function(o,r){var t=d(o,r,"filled"),e=t.color,a=t.background;return{color:e,backgroundColor:a,borderColor:r==="disabled"?e:a,backgroundHover:t.backgroundHover,backgroundActive:t.backgroundActive}},Q=function(o,r){var t=J(o,r),e=t.color,a=t.backgroundColor;return A({color:e,backgroundColor:a},M(o,t.borderColor))},Z=function(o,r){var t,e;switch(r){case"disabled":t=S(o,r).color,e="transparent";break;default:{var a=d(o,r,"empty");t=S(o,r).color,e=a.backgroundHover;break}}return{color:t,backgroundColor:e}},ao=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o.display,t=r===void 0?"base":r,e=j(oo);return e[t]},oo=function(o){var r=o.euiTheme,t=[].concat(N(q),["disabled"]),e={};return X.forEach(function(a){e[a]={},t.forEach(function(i){switch(a){case"base":{var c=d(o,i,"base"),b=i==="text"&&`
              border: `.concat(r.border.width.thin," solid ").concat(r.colors.borderBasePlain,`;
            `);e[a][i]=y(S(o,i)," ",m(o,c,"overlay")," ",b,";;label:displaysColorsMap-display-color;");break}case"fill":{var s=d(o,i,"filled");e[a][i]=y(Q(o,i),"outline-color:",o.colorMode==="DARK"&&i==="text"?"currentColor":i!=="disabled"?o.euiTheme.colors.fullShade:"",";",m(o,s),";;label:displaysColorsMap-display-color;");break}case"empty":{var u=d(o,i,"empty");e[a][i]=y("color:",Z(o,i).color,";",m(o,u,"overlay"),";;label:displaysColorsMap-display-color;");break}}var f=e[a][i];f.styles=f.styles.replace("label:displaysColorsMap-display-color;","label:".concat(a,"-").concat(i,";"))})}),e},io=function(){return j(ro)},ro=function(o){var r=y(";label:focusCSS;");return r.styles=r.styles.replace("label:focusCSS;",""),r},so=function(o){var r=o.euiTheme;return{xs:{minWidth:r.base*6,height:r.size.l,padding:E(r.size.m,function(t){return t/2}),radius:r.border.radius.small,fontScale:"xs"},s:{minWidth:r.base*6,height:r.size.xl,padding:r.size.s,radius:r.border.radius.small,fontScale:"s"},m:{minWidth:r.base*7,height:r.size.xxl,padding:r.size.m,radius:r.border.radius.small,fontScale:"s"}}},m=function(o,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"fill",e=function(){return t==="overlay"?`
        position: relative;
        overflow: hidden;

        &:hover:not(`.concat(v,`) {
          &::before {
            content: '';
            position: absolute;
            /* should stay under the content */
            z-index: 0;
            inset: 0;
            background-color: `).concat(r.backgroundHover,`;
            pointer-events: none;
          }
        }

        &:active:not(`).concat(v,`) {
          &::before {
            `).concat(B("width","100%"),`
            `).concat(B("height","100%"),`

            content: '';
            position: absolute;
            inset: 0;
            background-color: `).concat(r.backgroundActive,`;
          }
        }
      `):`
      &:hover:not(`.concat(v,`) {
        background-color: `).concat(r.backgroundHover,`;
      }

      &:active:not(`).concat(v,`) {
        background-color: `).concat(r.backgroundActive,`;
      }
    `)};return`    
    `.concat(I(o,{none:e(),forced:`
        position: relative;
        overflow: hidden;

        `.concat(no(o),`
      `)}),`
  `)},no=function(o){var r=o.euiTheme;return`
  &:hover:not(`.concat(v,`) {
    transition: none;

    /* using pseudo border to be able to control the color */
    &::after {
      content: '';
      position: absolute;
      inset: `).concat(r.border.width.thin,`;
      border: `).concat(r.border.width.thick," solid var(--highContrastHoverIndicatorColor, ").concat(r.border.color,`);
      border-radius: `).concat(E(r.border.radius.small,function(t){return t/2}),`;
      background-color: transparent;
      pointer-events: none;
    }
  }
`)},M=function(o,r){var t=o.highContrastMode,e=o.euiTheme;return t?{border:"".concat(e.border.width.thin," solid ").concat(r)}:{}};export{$ as B,q as E,Y as S,v as a,S as b,Z as c,io as d,so as e,oo as f,m as g,F as h,J as i,G as j,z as m,ao as u,eo as w};
