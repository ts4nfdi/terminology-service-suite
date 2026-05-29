import{aY as v,aZ as H}from"./storyArgs-Dtnm28xa.js";import{m as P}from"./_button-DvwR6LI_.js";import{T as f,l as i,g as y}from"./iframe-BvzVtTGW.js";function p(t){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},p(t)}function g(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function h(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?g(Object(o),!0).forEach(function(n){I(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}function I(t,r,o){return(r=W(r))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function W(t){var r=A(t,"string");return p(r)=="symbol"?r:r+""}function A(t,r){if(p(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,r);if(p(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var O=function(r){var o=r.euiTheme;return o.components.forms.maxWidth},S=function(r,o){var n=s(r),e=o??n.textColorDisabled;return`
    color: `.concat(e,`;
    opacity: 1;
  `)},s=function(r){var o=r.euiTheme,n=r.highContrastMode,e=n?o.colors.emptyShade:o.components.forms.background,a=o.size.xxl,c=o.size.xl,u={maxWidth:O(r),controlHeight:a,controlCompressedHeight:c,controlPadding:o.size.m,controlCompressedPadding:o.size.s,controlBorderRadius:o.border.radius.small,controlCompressedBorderRadius:o.border.radius.small,iconAffordance:f(o.size.base,function(l){return l*1.5}),iconCompressedAffordance:f(o.size.base,function(l){return l*1.5}),stateUnderlineHeight:n?f(o.border.width.thick,function(l){return l*2}):o.border.width.thick},b={textColor:o.colors.textParagraph,textColorDisabled:o.components.forms.colorDisabled,backgroundColor:e,backgroundDisabledColor:o.components.forms.backgroundDisabled,backgroundReadOnlyColor:o.components.forms.backgroundReadOnly,backgroundAutoFilled:o.components.forms.backgroundAutofilled,borderColor:n?o.border.color:o.components.forms.border,borderHovered:o.components.forms.borderHovered,borderFocused:o.components.forms.borderFocused,borderInvalid:o.components.forms.borderInvalid,borderInvalidHovered:o.components.forms.borderInvalidHovered,borderAutofilled:o.components.forms.borderAutofilled,borderAutofilledHovered:o.components.forms.borderAutofilledHovered,controlDisabledColor:o.components.forms.controlBackgroundDisabled,controlBoxShadow:"0 0 transparent",controlPlaceholderText:n?P(o.components.forms.colorDisabled)(e):o.components.forms.colorDisabled,appendPrependBackground:o.components.forms.prependBackground,labelColor:o.colors.textHeading},m={controlLayoutGroupInputHeight:f(a,function(l){return l-2}),controlLayoutGroupInputCompressedHeight:f(c,function(l){return l-2}),controlLayoutGroupInputCompressedBorderRadius:o.border.radius.small,controlLayoutBorderRadius:o.border.radius.small,controlLayoutInnerBorderRadius:f(o.border.radius.small,function(l){return l/2})},d={controlIconSize:{s:o.size.m,m:o.size.base,l:o.size.l,xl:o.size.xl,xxl:o.size.xxl}};return h(h(h(h(h({},u),b),d),m),{},{animationTiming:"".concat(o.animation.fast," ease-in")})},D=".euiFormControlLayout__childrenWrapper",K=function(r){var o=s(r);return{shared:`
      `.concat(x(r),`
      `).concat(j(r),`
    `),uncompressed:`
      `.concat(i("height",o.controlHeight),`
      `).concat(i("padding-vertical",o.controlPadding),`
      `).concat(i("padding-left","calc(".concat(o.controlPadding," + (").concat(o.iconAffordance," * var(--euiFormControlLeftIconsCount, 0)))")),`
      `).concat(i("padding-right","calc(".concat(o.controlPadding," + (").concat(o.iconAffordance," * var(--euiFormControlRightIconsCount, 0)))")),`
      border-radius: `).concat(o.controlBorderRadius,`;
    `),compressed:`
      `.concat(i("height",o.controlCompressedHeight),`
      `).concat(i("padding-vertical",o.controlCompressedPadding),`
      `).concat(i("padding-left","calc(".concat(o.controlCompressedPadding," + (").concat(o.iconCompressedAffordance," * var(--euiFormControlLeftIconsCount, 0)))")),`
      `).concat(i("padding-right","calc(".concat(o.controlCompressedPadding," + (").concat(o.iconCompressedAffordance," * var(--euiFormControlRightIconsCount, 0)))")),`
      border-radius: `).concat(o.controlCompressedBorderRadius,`;
    `),inGroup:`
      `.concat(i("height","100%"),`
      `).concat(v(r,{none:"box-shadow: none;",preferred:"border: none;"}),`
    `),formWidth:`
      `.concat(i("max-width",o.maxWidth),`
      `).concat(i("width","100%"),`
    `),fullWidth:`
      `.concat(i("max-width","100%"),`
      `).concat(i("width","100%"),`
    `),invalid:M(r),focus:L(r),disabled:_(r),readOnly:G(r),autoFill:U(r)}},x=function(r){var o=r.euiTheme,n=y(r,"s"),e=n.fontSize,a=s(r);return`
    font-family: `.concat(o.font.family,`;
    font-size: `).concat(e,`;
    color: `).concat(a.textColor,`;

    `).concat(k(S(r,a.controlPlaceholderText)),`
  `)},j=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=o.withBorder,e=n===void 0?!0:n,a=o.withBackground,c=a===void 0?!0:a,u=o.withBackgroundColor,b=u===void 0?c:u,m=r.euiTheme,d=s(r),l=v(r,{none:`
      --euiFormControlStateColor: `.concat(d.borderColor,`;
      border: none;
      box-shadow: inset 0 0 0 `).concat(m.border.width.thin,` var(--euiFormControlStateColor);

      `).concat(C(r),`
    `),preferred:`
      border: `.concat(m.border.width.thin," solid ").concat(m.border.color,`;

      `).concat(C(r),`
    `)}),z=`
    background-color: `.concat(d.backgroundColor,`;
  `).trim(),B=v(r,{forced:`
      background-repeat: no-repeat;
      background-size: 0% `.concat(d.stateUnderlineHeight,`;
      background-position: bottom left;
      background-origin: border-box;
    `)});return`
    `.concat(e?l:"",`
    `).concat(b?z:"",`
    `).concat(c?B:"",`
  `)},R='&:hover:not(:disabled, :focus, input[readonly], [class*="readOnly"])',C=function(r){var o=r.euiTheme,n=r.highContrastMode,e=s(r);return`
    `.concat(R,` {
      --borderWidthBase: var(--euiFormControlStateWidth, `).concat(o.border.width.thin,`);
      --borderWidth: `).concat(n?o.border.width.thick:"var(--borderWidthBase)",`;
      --borderColor: var(--euiFormControlStateHoverColor, `).concat(n?o.border.color:e.borderHovered,`);
      position: relative;
      outline: var(--borderWidth) solid var(--borderColor);
      outline-offset: calc(-1 * var(--borderWidth));
    }
  `)},F=`
  position: relative;
  z-index: 1;
  box-shadow: none;
  outline: var(--euiFormControlStateWidth) solid var(--euiFormControlStateColor);
  outline-offset: calc(-1 * var(--euiFormControlStateWidth));
`,L=function(r){var o=r.euiTheme,n=s(r),e=o.colors.primary;return`
      --euiFormControlStateColor: `.concat(n.borderFocused,`;
      --euiFormControlStateHoverColor: `).concat(n.borderFocused,`;
      --euiFormControlStateWidth: `).concat(o.border.width.thick,`;
      `).concat(F,`
      `).concat(v(r,{forced:`
          `.concat(w(r,e),`
        `)}),`
    `)},M=function(r){var o=r.euiTheme,n=r.highContrastMode,e=s(r),a=o.colors.danger;return`
      --euiFormControlStateColor: `.concat(e.borderInvalid,`;
      --euiFormControlStateHoverColor: `).concat(e.borderInvalidHovered,`;
      --euiFormControlStateWidth: `).concat(n==="preferred"?o.border.width.thick:o.border.width.thin,`;

      `).concat(F,`
      `).concat(w(r,a),`
    `)},_=function(r){var o=s(r);return`
    --euiFormControlStateColor: transparent;
    --euiFormControlStateHoverColor: transparent;
    --euiFormControlStateColor: `.concat(o.borderColor,`;

    color: `).concat(o.textColorDisabled,`;
    /* Required for Safari */
    -webkit-text-fill-color: `).concat(o.textColorDisabled,`;
    background-color: `).concat(o.backgroundDisabledColor,`;
    cursor: not-allowed;
    
    `).concat(k(S(r)),`
  `)},G=function(r){var o=r.euiTheme,n=s(r);return`
    --euiFormControlStateColor: `.concat(n.borderColor,`;
    --euiFormControlStateHoverColor: `).concat(n.borderColor,`;
    --euiFormControlStateWidth: `).concat(o.border.width.thin,`;

    /* keep the input below wrapper borders */
    position: relative;
    z-index: 0;
    background-color: `).concat(n.backgroundReadOnlyColor,`;
    cursor: default;
    color: `).concat(n.textColor,`;
    -webkit-text-fill-color: `).concat(n.textColor,`; /* Required for Safari */
    outline: none;
    box-shadow: inset 0 0 0 var(--euiFormControlStateWidth) var(--euiFormControlStateColor);

    `).concat(D,`[class*=inGroup] & {
      box-shadow: none;
    }

    `).concat(v(r,{preferred:"box-shadow: none;"}),`
  `)},U=function(r){var o=r.euiTheme,n=s(r),e=o.colors.darkestShade,a=n.backgroundAutoFilled,c="inset 0 0 0 100vw ".concat(a),u=n.borderAutofilled,b=n.borderAutofilledHovered,m=n.borderInvalid,d=n.borderInvalidHovered,l="inset 0 0 0 var(--euiFormControlStateAutofillWidth) var(--euiFormControlStateAutofillColor), ".concat(c);return`
    &:where(:-webkit-autofill) {
      --euiFormControlStateAutofillWidth: `.concat(o.border.width.thin,`;
      --euiFormControlStateAutofillColor: `).concat(u,`;
      
      -webkit-text-fill-color: `).concat(e,`;
      -webkit-box-shadow: `).concat(l,`;
     

      &:hover {
        --euiFormControlStateAutofillColor: `).concat(b,`;
      }

      &:focus {
        --euiFormControlStateAutofillWidth: `).concat(o.border.width.thick,`;
      }

      &:invalid {
        --euiFormControlStateAutofillColor: `).concat(m,`;

        &:hover {
          --euiFormControlStateAutofillColor: `).concat(d,`;
        }
      }
    }
  `)},w=function(r,o){var n=r.euiTheme,e=r.highContrastMode;if(e!=="forced")return"background-size: 100% 100%;";var a=s(r),c=a.stateUnderlineHeight,u=encodeURIComponent(o),b=c??"4px",m="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:transparent;stroke-width:".concat(b,";stroke:").concat(u,"' /%3E%3C/svg%3E");return`
      background-size: calc(100% - `.concat(f(b,function(d){return d/2}),") calc(100% - ").concat(f(b,function(d){return d/2}),`);
      background-position: `).concat(n.border.width.thin,`;
      background-image: url("`).concat(m,`");
    `)},k=function(r){return`
  &::-webkit-input-placeholder { `.concat(r,` }
  &::-moz-placeholder { `).concat(r,` }
  &:-moz-placeholder { `).concat(r,` }
  &::placeholder { `).concat(r,` }
`)},V=function(r){var o=r.euiTheme,n=r.highContrastMode,e={control:o.size.base,lineHeight:o.size.l,labelGap:o.size.s},a={unselected:o.components.forms.controlBackgroundUnselected,unselectedBorder:n?o.border.color:o.components.forms.controlBorder,selected:o.colors.primary,selectedBorder:o.components.forms.controlBorderSelected,selectedIcon:o.colors.emptyShade,disabled:o.components.forms.controlBackgroundDisabled,disabledBorder:o.components.forms.controlBorderDisabled,disabledIcon:o.components.forms.iconDisabled,disabledLabel:o.colors.textDisabled},c={speed:o.animation.fast,easing:"ease-in"};return{sizes:e,colors:a,animation:c}},N=function(r){var o=r.euiTheme,n=r.highContrastMode,e=V(r),a=f([e.sizes.lineHeight,e.sizes.control],function(c,u){return(c-u)/2});return{wrapper:`
      display: flex;
      align-items: flex-start;
    `,input:{fauxInput:`
        position: relative;
        `.concat(i("height",e.sizes.control),`
        `).concat(i("width",e.sizes.control),`
        display: flex;
        justify-content: center;
        align-items: center;
        /* For Windows high contrast themes, a border must always be rendered, not just a background */
        border: `).concat(o.border.width.thin,` solid transparent;

        &:has(input:focus-visible) {
          outline: `).concat(o.focus.width," solid ").concat(e.colors.selected,`;
          outline-offset: `).concat(o.focus.width,`;
        }

        `).concat(H,` {
          transition-property: background-color, color;
          transition-duration: `).concat(e.animation.speed,`;
          transition-timing-function: `).concat(e.animation.easing,`;
        }
      `),hasLabel:`
        `.concat(i("margin-top",a),`
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
        `)},disabled:{get shared(){var c=n?e.colors.disabledIcon:e.colors.disabled;return`
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
        `.concat(i("padding-left",e.sizes.labelGap),`
        line-height: `).concat(e.sizes.lineHeight,`;
        font-size: `).concat(y(r,"s").fontSize,`;
      `),enabled:`
        cursor: pointer;
      `,disabled:`
        cursor: not-allowed;
        color: `.concat(e.colors.disabledLabel,`;
      `)}}};export{V as a,K as b,s as c,O as d,N as e,x as f,j as g,L as h};
