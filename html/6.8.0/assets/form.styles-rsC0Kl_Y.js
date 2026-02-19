import{bL as H,bF as M,bD as T,bn as q,aJ as b,aL as l,aM as x,aX as O,aR as v}from"./QueryClientProvider-Cv6DMAwY.js";import{m as L}from"./_button-DR0DDSYL.js";var y,w;function U(){if(w)return y;w=1;var r=H(),n=M(),o="[object Symbol]";function t(e){return typeof e=="symbol"||n(e)&&r(e)==o}return y=t,y}var C,F;function G(){if(F)return C;F=1;function r(n,o){for(var t=-1,e=n==null?0:n.length,a=Array(e);++t<e;)a[t]=o(n[t],t,n);return a}return C=r,C}var S,z;function W(){if(z)return S;z=1;var r=T(),n=G(),o=q(),t=U(),e=r?r.prototype:void 0,a=e?e.toString:void 0;function c(i){if(typeof i=="string")return i;if(o(i))return n(i,c)+"";if(t(i))return a?a.call(i):"";var d=i+"";return d=="0"&&1/i==-1/0?"-0":d}return S=c,S}var k,B;function to(){if(B)return k;B=1;var r=W();function n(o){return o==null?"":r(o)}return k=n,k}function h(r){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(r)}function P(r,n){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)}return o}function p(r){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?P(Object(o),!0).forEach(function(t){V(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))})}return r}function V(r,n,o){return(n=E(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r}function E(r){var n=$(r,"string");return h(n)=="symbol"?n:n+""}function $(r,n){if(h(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var t=o.call(r,n);if(h(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}var K=function(n){var o=n.euiTheme;return o.components.forms.maxWidth},m=function(n){var o=n.euiTheme,t=n.highContrastMode,e=t?o.colors.emptyShade:o.components.forms.background,a=o.size.xxl,c=o.size.xl,i={maxWidth:K(n),controlHeight:a,controlCompressedHeight:c,controlPadding:o.size.m,controlCompressedPadding:o.size.s,controlBorderRadius:o.border.radius.medium,controlCompressedBorderRadius:o.border.radius.small,iconAffordance:b(o.size.base,function(s){return s*1.5}),iconCompressedAffordance:b(o.size.m,function(s){return s*1.5}),stateUnderlineHeight:t?b(o.border.width.thick,function(s){return s*2}):o.border.width.thick},d={textColor:o.colors.textParagraph,textColorDisabled:o.components.forms.colorDisabled,backgroundColor:e,backgroundDisabledColor:o.components.forms.backgroundDisabled,backgroundReadOnlyColor:o.components.forms.backgroundReadOnly,borderColor:t?o.border.color:o.components.forms.border,controlDisabledColor:o.components.forms.controlBackgroundDisabled,controlBoxShadow:"0 0 transparent",controlPlaceholderText:L(o.colors.textSubdued)(e),appendPrependBackground:o.components.forms.prependBackground},g={controlLayoutGroupInputHeight:b(a,function(s){return s-2}),controlLayoutGroupInputCompressedHeight:b(c,function(s){return s-2}),controlLayoutGroupInputCompressedBorderRadius:o.border.radius.small},f={controlIconSize:{s:o.size.m,m:o.size.base,l:o.size.l,xl:o.size.xl,xxl:o.size.xxl}};return p(p(p(p(p({},i),d),f),g),{},{animationTiming:"".concat(o.animation.fast," ease-in")})},ao=function(n){var o=m(n);return{shared:`
      `.concat(N(n),`
      `).concat(J(n),`
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
      `).concat(v(n,{none:"box-shadow: none;",preferred:"border: none;"}),`
      border-radius: 0;
    `),formWidth:`
      `.concat(l("max-width",o.maxWidth),`
      `).concat(l("width","100%"),`
    `),fullWidth:`
      `.concat(l("max-width","100%"),`
      `).concat(l("width","100%"),`
    `),invalid:Q(n),focus:X(n),disabled:Y(n),readOnly:Z(n),autoFill:oo(n)}},N=function(n){var o=n.euiTheme,t=x(n,"s"),e=t.fontSize,a=m(n);return`
    font-family: `.concat(o.font.family,`;
    font-size: `).concat(e,`;
    color: `).concat(a.textColor,`;

    `).concat(I(`
      color: `.concat(a.controlPlaceholderText,`;
      opacity: 1;
    `)),`
  `)},J=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=o.withBorder,e=t===void 0?!0:t,a=o.withBackground,c=a===void 0?!0:a,i=o.withBackgroundColor,d=i===void 0?c:i,g=o.withBackgroundAnimation,f=g===void 0?c:g,s=n.euiTheme,u=m(n),_=v(n,{none:`
      border: none;
      box-shadow: inset 0 0 0 `.concat(s.border.width.thin," ").concat(u.borderColor,`;
    `),preferred:`
      border: `.concat(s.border.width.thin," solid ").concat(s.border.color,`;
    `)}),R=`
    background-color: `.concat(u.backgroundColor,`;
  `).trim(),j=v(n,{none:`
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
    `).concat(d?R:"",`
    `).concat(c?j:"",`
    `).concat(f?A:"",`
  `)},X=function(n){var o=n.euiTheme,t=o.colors.primary;return`
    --euiFormControlStateColor: `.concat(t,`;
    background-color: `).concat(o.components.forms.backgroundFocused,`;
    `).concat(D(n,t),`
    outline: none; /* Remove all outlines and rely on our own bottom border gradient */
  `)},Q=function(n){var o=n.euiTheme,t=o.colors.danger;return`
    --euiFormControlStateColor: `.concat(t,`;
    `).concat(D(n,t),`
  `)},Y=function(n){var o=m(n);return`
    color: `.concat(o.textColorDisabled,`;
    /* Required for Safari */
    -webkit-text-fill-color: `).concat(o.textColorDisabled,`;
    background-color: `).concat(o.backgroundDisabledColor,`;
    cursor: not-allowed;
    --euiFormControlStateColor: transparent;

    `).concat(I(`
      color: `.concat(o.textColorDisabled,`;
      opacity: 1;
    `)),`
  `)},Z=function(n){var o=m(n);return`
    cursor: default;
    color: `.concat(o.textColor,`;
    -webkit-text-fill-color: `).concat(o.textColor,`; /* Required for Safari */

    background-color: `).concat(o.backgroundReadOnlyColor,`;
    --euiFormControlStateColor: transparent;
    `).concat(v(n,{forced:"background-image: none;"}),`
  `)},oo=function(n){var o=n.euiTheme,t=o.colors.darkestShade,e=o.components.forms.backgroundAutofilled,a="inset 0 0 0 100vw ".concat(e),c=o.components.forms.borderAutofilled,i=o.colors.danger,d=function(f){return"inset 0 0 0 ".concat(o.border.width.thin," ").concat(f)};return`
    &:-webkit-autofill {
      -webkit-text-fill-color: `.concat(t,`;
      -webkit-box-shadow: `).concat(d(c),", ").concat(a,`;

      &:invalid {
        -webkit-box-shadow: `).concat(d(i),", ").concat(a,`;
      }
    }
  `)},D=function(n,o){if(n.highContrastMode!=="forced")return"background-size: 100% 100%;";var t=encodeURIComponent(o),e="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='".concat(t,"' /%3E%3C/svg%3E"),a=m(n),c=a.stateUnderlineHeight;return`
    background-size: 100% `.concat(c,`;
    background-image: url("`).concat(e,`");
  `)},I=function(n){return`
  &::-webkit-input-placeholder { `.concat(n,` }
  &::-moz-placeholder { `).concat(n,` }
  &:-ms-input-placeholder { `).concat(n,` }
  &:-moz-placeholder { `).concat(n,` }
  &::placeholder { `).concat(n,` }
`)},no=function(n){var o=n.euiTheme,t=n.highContrastMode,e={control:o.size.base,lineHeight:o.size.l,labelGap:o.size.s},a={unselected:o.components.forms.controlBackgroundUnselected,unselectedBorder:t?o.border.color:o.components.forms.controlBorder,selected:o.colors.primary,selectedBorder:o.components.forms.controlBorderSelected,selectedIcon:o.colors.emptyShade,disabled:o.components.forms.controlBackgroundDisabled,disabledBorder:o.components.forms.controlBorderDisabled,disabledIcon:o.components.forms.iconDisabled,disabledLabel:o.colors.textDisabled},c={speed:o.animation.fast,easing:"ease-in"};return{sizes:e,colors:a,animation:c}},co=function(n){var o=n.euiTheme,t=n.highContrastMode,e=no(n),a=b([e.sizes.lineHeight,e.sizes.control],function(c,i){return(c-i)/2});return{wrapper:`
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
        font-size: `).concat(x(n,"s").fontSize,`;
      `),enabled:`
        cursor: pointer;
      `,disabled:`
        cursor: not-allowed;
        color: `.concat(e.colors.disabledLabel,`;
      `)}}};export{to as a,G as b,no as c,ao as d,co as e,m as f,K as g,N as h,J as i,U as r};
