import{H,A as M,y as T,d as q,Q as m,J as l,e as x}from"./iframe-4vt7eyOh.js";import{l as v}from"./loading_spinner-BDnNTy53.js";import{m as L}from"./_button-C9-hZOfI.js";import{aE as O}from"./widgetDescriptions-Bv-fdvpN.js";var y,w;function U(){if(w)return y;w=1;var n=H(),r=M(),o="[object Symbol]";function t(e){return typeof e=="symbol"||r(e)&&n(e)==o}return y=t,y}var C,F;function G(){if(F)return C;F=1;function n(r,o){for(var t=-1,e=r==null?0:r.length,a=Array(e);++t<e;)a[t]=o(r[t],t,r);return a}return C=n,C}var S,z;function W(){if(z)return S;z=1;var n=T(),r=G(),o=q(),t=U(),e=n?n.prototype:void 0,a=e?e.toString:void 0;function c(i){if(typeof i=="string")return i;if(o(i))return r(i,c)+"";if(t(i))return a?a.call(i):"";var d=i+"";return d=="0"&&1/i==-1/0?"-0":d}return S=c,S}var k,B;function co(){if(B)return k;B=1;var n=W();function r(o){return o==null?"":n(o)}return k=r,k}function h(n){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},h(n)}function P(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),o.push.apply(o,t)}return o}function p(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?P(Object(o),!0).forEach(function(t){E(n,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function E(n,r,o){return(r=V(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function V(n){var r=$(n,"string");return h(r)=="symbol"?r:r+""}function $(n,r){if(h(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var t=o.call(n,r);if(h(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}var K=function(r){var o=r.euiTheme;return o.components.forms.maxWidth},b=function(r){var o=r.euiTheme,t=r.highContrastMode,e=t?o.colors.emptyShade:o.components.forms.background,a=o.size.xxl,c=o.size.xl,i={maxWidth:K(r),controlHeight:a,controlCompressedHeight:c,controlPadding:o.size.m,controlCompressedPadding:o.size.s,controlBorderRadius:o.border.radius.medium,controlCompressedBorderRadius:o.border.radius.small,iconAffordance:m(o.size.base,function(s){return s*1.5}),iconCompressedAffordance:m(o.size.m,function(s){return s*1.5}),stateUnderlineHeight:t?m(o.border.width.thick,function(s){return s*2}):o.border.width.thick},d={textColor:o.colors.textParagraph,textColorDisabled:o.components.forms.colorDisabled,backgroundColor:e,backgroundDisabledColor:o.components.forms.backgroundDisabled,backgroundReadOnlyColor:o.components.forms.backgroundReadOnly,borderColor:t?o.border.color:o.components.forms.border,controlDisabledColor:o.components.forms.controlBackgroundDisabled,controlBoxShadow:"0 0 transparent",controlPlaceholderText:L(o.colors.textSubdued)(e),appendPrependBackground:o.components.forms.prependBackground},f={controlLayoutGroupInputHeight:m(a,function(s){return s-2}),controlLayoutGroupInputCompressedHeight:m(c,function(s){return s-2}),controlLayoutGroupInputCompressedBorderRadius:o.border.radius.small},g={controlIconSize:{s:o.size.m,m:o.size.base,l:o.size.l,xl:o.size.xl,xxl:o.size.xxl}};return p(p(p(p(p({},i),d),g),f),{},{animationTiming:"".concat(o.animation.fast," ease-in")})},io=function(r){var o=b(r);return{shared:`
      `.concat(N(r),`
      `).concat(J(r),`
    `),uncompressed:`
      `.concat(l("height",o.controlHeight),`
      `).concat(l("padding-vertical",o.controlPadding),`
      `).concat(l("padding-left","calc(".concat(o.controlPadding," + (").concat(o.iconAffordance," * var(--euiFormControlLeftIconsCount, 0)))")),`
      `).concat(l("padding-right","calc(".concat(o.controlPadding," + (").concat(o.iconAffordance," * var(--euiFormControlRightIconsCount, 0)))")),`
      border-radius: `).concat(o.controlBorderRadius,`;
    `),compressed:`
      `.concat(l("height",o.controlCompressedHeight),`
      `).concat(l("padding-vertical",o.controlCompressedPadding),`
      `).concat(l("padding-left","calc(".concat(o.controlCompressedPadding," + (").concat(o.iconCompressedAffordance," * var(--euiFormControlLeftIconsCount, 0)))")),`
      `).concat(l("padding-right","calc(".concat(o.controlCompressedPadding," + (").concat(o.iconCompressedAffordance," * var(--euiFormControlRightIconsCount, 0)))")),`
      border-radius: `).concat(o.controlCompressedBorderRadius,`;
    `),inGroup:`
      `.concat(l("height","100%"),`
      `).concat(v(r,{none:"box-shadow: none;",preferred:"border: none;"}),`
      border-radius: 0;
    `),formWidth:`
      `.concat(l("max-width",o.maxWidth),`
      `).concat(l("width","100%"),`
    `),fullWidth:`
      `.concat(l("max-width","100%"),`
      `).concat(l("width","100%"),`
    `),invalid:X(r),focus:Q(r),disabled:Y(r),readOnly:Z(r),autoFill:oo(r)}},N=function(r){var o=r.euiTheme,t=x(r,"s"),e=t.fontSize,a=b(r);return`
    font-family: `.concat(o.font.family,`;
    font-size: `).concat(e,`;
    color: `).concat(a.textColor,`;

    `).concat(D(`
      color: `.concat(a.controlPlaceholderText,`;
      opacity: 1;
    `)),`
  `)},J=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=o.withBorder,e=t===void 0?!0:t,a=o.withBackground,c=a===void 0?!0:a,i=o.withBackgroundColor,d=i===void 0?c:i,f=o.withBackgroundAnimation,g=f===void 0?c:f,s=r.euiTheme,u=b(r),_=v(r,{none:`
      border: none;
      box-shadow: inset 0 0 0 `.concat(s.border.width.thin," ").concat(u.borderColor,`;
    `),preferred:`
      border: `.concat(s.border.width.thin," solid ").concat(s.border.color,`;
    `)}),j=`
    background-color: `.concat(u.backgroundColor,`;
  `).trim(),R=v(r,{none:`
      background-repeat: no-repeat;
      background-size: 0% 100%;
      background-image: linear-gradient(to top,
        var(--euiFormControlStateColor),
        var(--euiFormControlStateColor) `.concat(u.stateUnderlineHeight,`,
        transparent `).concat(u.stateUnderlineHeight,`,
        transparent 100%
      );
    `),forced:`
      background-repeat: no-repeat;
      background-size: 0% `.concat(u.stateUnderlineHeight,`;
      background-position: bottom left;
      background-origin: border-box;
    `)}),A=`
    `.concat(O,` {
      transition:
        background-image `).concat(u.animationTiming,`,
        background-size `).concat(u.animationTiming,`,
        background-color `).concat(u.animationTiming,`;
    }
  `).trim();return`
    `.concat(e?_:"",`
    `).concat(d?j:"",`
    `).concat(c?R:"",`
    `).concat(g?A:"",`
  `)},Q=function(r){var o=r.euiTheme,t=o.colors.primary;return`
    --euiFormControlStateColor: `.concat(t,`;
    background-color: `).concat(o.components.forms.backgroundFocused,`;
    `).concat(I(r,t),`
    outline: none; /* Remove all outlines and rely on our own bottom border gradient */
  `)},X=function(r){var o=r.euiTheme,t=o.colors.danger;return`
    --euiFormControlStateColor: `.concat(t,`;
    `).concat(I(r,t),`
  `)},Y=function(r){var o=b(r);return`
    color: `.concat(o.textColorDisabled,`;
    /* Required for Safari */
    -webkit-text-fill-color: `).concat(o.textColorDisabled,`;
    background-color: `).concat(o.backgroundDisabledColor,`;
    cursor: not-allowed;
    --euiFormControlStateColor: transparent;

    `).concat(D(`
      color: `.concat(o.textColorDisabled,`;
      opacity: 1;
    `)),`
  `)},Z=function(r){var o=b(r);return`
    cursor: default;
    color: `.concat(o.textColor,`;
    -webkit-text-fill-color: `).concat(o.textColor,`; /* Required for Safari */

    background-color: `).concat(o.backgroundReadOnlyColor,`;
    --euiFormControlStateColor: transparent;
    `).concat(v(r,{forced:"background-image: none;"}),`
  `)},oo=function(r){var o=r.euiTheme,t=o.colors.darkestShade,e=o.components.forms.backgroundAutofilled,a="inset 0 0 0 100vw ".concat(e),c=o.components.forms.borderAutofilled,i=o.colors.danger,d=function(g){return"inset 0 0 0 ".concat(o.border.width.thin," ").concat(g)};return`
    &:-webkit-autofill {
      -webkit-text-fill-color: `.concat(t,`;
      -webkit-box-shadow: `).concat(d(c),", ").concat(a,`;

      &:invalid {
        -webkit-box-shadow: `).concat(d(i),", ").concat(a,`;
      }
    }
  `)},I=function(r,o){if(r.highContrastMode!=="forced")return"background-size: 100% 100%;";var t=encodeURIComponent(o),e="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='".concat(t,"' /%3E%3C/svg%3E"),a=b(r),c=a.stateUnderlineHeight;return`
    background-size: 100% `.concat(c,`;
    background-image: url("`).concat(e,`");
  `)},D=function(r){return`
  &::-webkit-input-placeholder { `.concat(r,` }
  &::-moz-placeholder { `).concat(r,` }
  &:-ms-input-placeholder { `).concat(r,` }
  &:-moz-placeholder { `).concat(r,` }
  &::placeholder { `).concat(r,` }
`)},ro=function(r){var o=r.euiTheme,t=r.highContrastMode,e={control:o.size.base,lineHeight:o.size.l,labelGap:o.size.s},a={unselected:o.components.forms.controlBackgroundUnselected,unselectedBorder:t?o.border.color:o.components.forms.controlBorder,selected:o.colors.primary,selectedBorder:o.components.forms.controlBorderSelected,selectedIcon:o.colors.emptyShade,disabled:o.components.forms.controlBackgroundDisabled,disabledBorder:o.components.forms.controlBorderDisabled,disabledIcon:o.components.forms.iconDisabled,disabledLabel:o.colors.textDisabled},c={speed:o.animation.fast,easing:"ease-in"};return{sizes:e,colors:a,animation:c}},lo=function(r){var o=r.euiTheme,t=r.highContrastMode,e=ro(r),a=m([e.sizes.lineHeight,e.sizes.control],function(c,i){return(c-i)/2});return{wrapper:`
      display: flex;
      align-items: flex-start;
    `,input:{fauxInput:`
        position: relative;
        `.concat(l("height",e.sizes.control),`
        `).concat(l("width",e.sizes.control),`
        display: flex;
        justify-content: center;
        align-items: center;
        /* For Windows high contrast themes, a border must always be rendered, not just a background */
        border: `).concat(o.border.width.thin,` solid transparent;

        &:has(input:focus-visible) {
          outline: `).concat(o.focus.width," solid ").concat(e.colors.selected,`;
          outline-offset: `).concat(o.focus.width,`;
        }

        `).concat(O,` {
          transition-property: background-color, color;
          transition-duration: `).concat(e.animation.speed,`;
          transition-timing-function: `).concat(e.animation.easing,`;
        }
      `),hasLabel:`
        `.concat(l("margin-top",a),`
      `),enabled:{selected:`
          color: `.concat(e.colors.selectedIcon,`;
          background-color: `).concat(e.colors.selected,`;
          border-color: `).concat(e.colors.selected,`;
        `),unselected:`
          color: transparent;
          background-color: `.concat(e.colors.unselected,`;
          border-color: `).concat(e.colors.unselectedBorder,`;

          &:has(input:focus) {
            border-color: `).concat(e.colors.selected,`;
          }
        `)},disabled:{get shared(){var c=t?e.colors.disabledIcon:e.colors.disabled;return`
            label: disabled;
            cursor: not-allowed;
            background-color: `.concat(e.colors.disabled,`;
            border-color: `).concat(c,`;
          `)},get selected(){return`
            `.concat(this.shared,`
            color: `).concat(e.colors.disabledIcon,`;
          `)},get unselected(){return`
            `.concat(this.shared,`
            color: `).concat(e.colors.disabled,`;
          `)}},icon:`
        transform: scale(0.75);
      `,hiddenInput:`
        position: absolute;
        inset: 0;
        opacity: 0 !important;
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
        }
      `},label:{label:`
        /* Needs to use padding and not flex gap for extra mouse click area */
        `.concat(l("padding-left",e.sizes.labelGap),`
        line-height: `).concat(e.sizes.lineHeight,`;
        font-size: `).concat(x(r,"s").fontSize,`;
      `),enabled:`
        cursor: pointer;
      `,disabled:`
        cursor: not-allowed;
        color: `.concat(e.colors.disabledLabel,`;
      `)}}};export{co as a,G as b,ro as c,io as d,lo as e,b as f,K as g,N as h,J as i,U as r};
