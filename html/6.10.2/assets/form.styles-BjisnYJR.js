import{aG as m,aH as c,aJ as v,aI as y,aZ as w}from"./QueryClientProvider-DoKhBl31.js";import{m as x}from"./_button-Dz-XatGf.js";function h(r){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(r)}function C(r,n){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)}return o}function p(r){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?C(Object(o),!0).forEach(function(t){O(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))})}return r}function O(r,n,o){return(n=D(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r}function D(r){var n=H(r,"string");return h(n)=="symbol"?n:n+""}function H(r,n){if(h(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var t=o.call(r,n);if(h(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}var I=function(n){var o=n.euiTheme;return o.components.forms.maxWidth},b=function(n){var o=n.euiTheme,t=n.highContrastMode,e=t?o.colors.emptyShade:o.components.forms.background,a=o.size.xxl,i=o.size.xl,s={maxWidth:I(n),controlHeight:a,controlCompressedHeight:i,controlPadding:o.size.m,controlCompressedPadding:o.size.s,controlBorderRadius:o.border.radius.medium,controlCompressedBorderRadius:o.border.radius.small,iconAffordance:m(o.size.base,function(l){return l*1.5}),iconCompressedAffordance:m(o.size.m,function(l){return l*1.5}),stateUnderlineHeight:t?m(o.border.width.thick,function(l){return l*2}):o.border.width.thick},u={textColor:o.colors.textParagraph,textColorDisabled:o.components.forms.colorDisabled,backgroundColor:e,backgroundDisabledColor:o.components.forms.backgroundDisabled,backgroundReadOnlyColor:o.components.forms.backgroundReadOnly,borderColor:t?o.border.color:o.components.forms.border,controlDisabledColor:o.components.forms.controlBackgroundDisabled,controlBoxShadow:"0 0 transparent",controlPlaceholderText:x(o.colors.textSubdued)(e),appendPrependBackground:o.components.forms.prependBackground},g={controlLayoutGroupInputHeight:m(a,function(l){return l-2}),controlLayoutGroupInputCompressedHeight:m(i,function(l){return l-2}),controlLayoutGroupInputCompressedBorderRadius:o.border.radius.small},f={controlIconSize:{s:o.size.m,m:o.size.base,l:o.size.l,xl:o.size.xl,xxl:o.size.xxl}};return p(p(p(p(p({},s),u),f),g),{},{animationTiming:"".concat(o.animation.fast," ease-in")})},E=function(n){var o=b(n);return{shared:`
      `.concat(j(n),`
      `).concat(R(n),`
    `),uncompressed:`
      `.concat(c("height",o.controlHeight),`
      `).concat(c("padding-vertical",o.controlPadding),`
      `).concat(c("padding-left","calc(".concat(o.controlPadding," + (").concat(o.iconAffordance," * var(--euiFormControlLeftIconsCount, 0)))")),`
      `).concat(c("padding-right","calc(".concat(o.controlPadding," + (").concat(o.iconAffordance," * var(--euiFormControlRightIconsCount, 0)))")),`
      border-radius: `).concat(o.controlBorderRadius,`;
    `),compressed:`
      `.concat(c("height",o.controlCompressedHeight),`
      `).concat(c("padding-vertical",o.controlCompressedPadding),`
      `).concat(c("padding-left","calc(".concat(o.controlCompressedPadding," + (").concat(o.iconCompressedAffordance," * var(--euiFormControlLeftIconsCount, 0)))")),`
      `).concat(c("padding-right","calc(".concat(o.controlCompressedPadding," + (").concat(o.iconCompressedAffordance," * var(--euiFormControlRightIconsCount, 0)))")),`
      border-radius: `).concat(o.controlCompressedBorderRadius,`;
    `),inGroup:`
      `.concat(c("height","100%"),`
      `).concat(v(n,{none:"box-shadow: none;",preferred:"border: none;"}),`
      border-radius: 0;
    `),formWidth:`
      `.concat(c("max-width",o.maxWidth),`
      `).concat(c("width","100%"),`
    `),fullWidth:`
      `.concat(c("max-width","100%"),`
      `).concat(c("width","100%"),`
    `),invalid:_(n),focus:A(n),disabled:U(n),readOnly:L(n),autoFill:M(n)}},j=function(n){var o=n.euiTheme,t=y(n,"s"),e=t.fontSize,a=b(n);return`
    font-family: `.concat(o.font.family,`;
    font-size: `).concat(e,`;
    color: `).concat(a.textColor,`;

    `).concat(S(`
      color: `.concat(a.controlPlaceholderText,`;
      opacity: 1;
    `)),`
  `)},R=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=o.withBorder,e=t===void 0?!0:t,a=o.withBackground,i=a===void 0?!0:a,s=o.withBackgroundColor,u=s===void 0?i:s,g=o.withBackgroundAnimation,f=g===void 0?i:g,l=n.euiTheme,d=b(n),F=v(n,{none:`
      border: none;
      box-shadow: inset 0 0 0 `.concat(l.border.width.thin," ").concat(d.borderColor,`;
    `),preferred:`
      border: `.concat(l.border.width.thin," solid ").concat(l.border.color,`;
    `)}),z=`
    background-color: `.concat(d.backgroundColor,`;
  `).trim(),B=v(n,{none:`
      background-repeat: no-repeat;
      background-size: 0% 100%;
      background-image: linear-gradient(to top,
        var(--euiFormControlStateColor),
        var(--euiFormControlStateColor) `.concat(d.stateUnderlineHeight,`,
        transparent `).concat(d.stateUnderlineHeight,`,
        transparent 100%
      );
    `),forced:`
      background-repeat: no-repeat;
      background-size: 0% `.concat(d.stateUnderlineHeight,`;
      background-position: bottom left;
      background-origin: border-box;
    `)}),P=`
    `.concat(w,` {
      transition:
        background-image `).concat(d.animationTiming,`,
        background-size `).concat(d.animationTiming,`,
        background-color `).concat(d.animationTiming,`;
    }
  `).trim();return`
    `.concat(e?F:"",`
    `).concat(u?z:"",`
    `).concat(i?B:"",`
    `).concat(f?P:"",`
  `)},A=function(n){var o=n.euiTheme,t=o.colors.primary;return`
    --euiFormControlStateColor: `.concat(t,`;
    background-color: `).concat(o.components.forms.backgroundFocused,`;
    `).concat(k(n,t),`
    outline: none; /* Remove all outlines and rely on our own bottom border gradient */
  `)},_=function(n){var o=n.euiTheme,t=o.colors.danger;return`
    --euiFormControlStateColor: `.concat(t,`;
    `).concat(k(n,t),`
  `)},U=function(n){var o=b(n);return`
    color: `.concat(o.textColorDisabled,`;
    /* Required for Safari */
    -webkit-text-fill-color: `).concat(o.textColorDisabled,`;
    background-color: `).concat(o.backgroundDisabledColor,`;
    cursor: not-allowed;
    --euiFormControlStateColor: transparent;

    `).concat(S(`
      color: `.concat(o.textColorDisabled,`;
      opacity: 1;
    `)),`
  `)},L=function(n){var o=b(n);return`
    cursor: default;
    color: `.concat(o.textColor,`;
    -webkit-text-fill-color: `).concat(o.textColor,`; /* Required for Safari */

    background-color: `).concat(o.backgroundReadOnlyColor,`;
    --euiFormControlStateColor: transparent;
    `).concat(v(n,{forced:"background-image: none;"}),`
  `)},M=function(n){var o=n.euiTheme,t=o.colors.darkestShade,e=o.components.forms.backgroundAutofilled,a="inset 0 0 0 100vw ".concat(e),i=o.components.forms.borderAutofilled,s=o.colors.danger,u=function(f){return"inset 0 0 0 ".concat(o.border.width.thin," ").concat(f)};return`
    &:-webkit-autofill {
      -webkit-text-fill-color: `.concat(t,`;
      -webkit-box-shadow: `).concat(u(i),", ").concat(a,`;

      &:invalid {
        -webkit-box-shadow: `).concat(u(s),", ").concat(a,`;
      }
    }
  `)},k=function(n,o){if(n.highContrastMode!=="forced")return"background-size: 100% 100%;";var t=encodeURIComponent(o),e="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='".concat(t,"' /%3E%3C/svg%3E"),a=b(n),i=a.stateUnderlineHeight;return`
    background-size: 100% `.concat(i,`;
    background-image: url("`).concat(e,`");
  `)},S=function(n){return`
  &::-webkit-input-placeholder { `.concat(n,` }
  &::-moz-placeholder { `).concat(n,` }
  &:-ms-input-placeholder { `).concat(n,` }
  &:-moz-placeholder { `).concat(n,` }
  &::placeholder { `).concat(n,` }
`)},W=function(n){var o=n.euiTheme,t=n.highContrastMode,e={control:o.size.base,lineHeight:o.size.l,labelGap:o.size.s},a={unselected:o.components.forms.controlBackgroundUnselected,unselectedBorder:t?o.border.color:o.components.forms.controlBorder,selected:o.colors.primary,selectedBorder:o.components.forms.controlBorderSelected,selectedIcon:o.colors.emptyShade,disabled:o.components.forms.controlBackgroundDisabled,disabledBorder:o.components.forms.controlBorderDisabled,disabledIcon:o.components.forms.iconDisabled,disabledLabel:o.colors.textDisabled},i={speed:o.animation.fast,easing:"ease-in"};return{sizes:e,colors:a,animation:i}},T=function(n){var o=n.euiTheme,t=n.highContrastMode,e=W(n),a=m([e.sizes.lineHeight,e.sizes.control],function(i,s){return(i-s)/2});return{wrapper:`
      display: flex;
      align-items: flex-start;
    `,input:{fauxInput:`
        position: relative;
        `.concat(c("height",e.sizes.control),`
        `).concat(c("width",e.sizes.control),`
        display: flex;
        justify-content: center;
        align-items: center;
        /* For Windows high contrast themes, a border must always be rendered, not just a background */
        border: `).concat(o.border.width.thin,` solid transparent;

        &:has(input:focus-visible) {
          outline: `).concat(o.focus.width," solid ").concat(e.colors.selected,`;
          outline-offset: `).concat(o.focus.width,`;
        }

        `).concat(w,` {
          transition-property: background-color, color;
          transition-duration: `).concat(e.animation.speed,`;
          transition-timing-function: `).concat(e.animation.easing,`;
        }
      `),hasLabel:`
        `.concat(c("margin-top",a),`
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
        `)},disabled:{get shared(){var i=t?e.colors.disabledIcon:e.colors.disabled;return`
            label: disabled;
            cursor: not-allowed;
            background-color: `.concat(e.colors.disabled,`;
            border-color: `).concat(i,`;
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
        `.concat(c("padding-left",e.sizes.labelGap),`
        line-height: `).concat(e.sizes.lineHeight,`;
        font-size: `).concat(y(n,"s").fontSize,`;
      `),enabled:`
        cursor: pointer;
      `,disabled:`
        cursor: not-allowed;
        color: `.concat(e.colors.disabledLabel,`;
      `)}}};export{T as a,W as b,b as c,I as d,E as e,j as f,R as g};
