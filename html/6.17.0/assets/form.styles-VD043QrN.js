import{bX as x,bR as R,bP as j,bz as M,au as f,av as l,ax as v,aw as I,aN as L}from"./QueryClientProvider-CtwX41Lz.js";import{m as q}from"./_button-PWlvcPYJ.js";var g,w;function G(){if(w)return g;w=1;var t=x(),r=R(),o="[object Symbol]";function n(e){return typeof e=="symbol"||r(e)&&t(e)==o}return g=n,g}var C,F;function U(){if(F)return C;F=1;function t(r,o){for(var n=-1,e=r==null?0:r.length,a=Array(e);++n<e;)a[n]=o(r[n],n,r);return a}return C=t,C}var y,k;function V(){if(k)return y;k=1;var t=j(),r=U(),o=M(),n=G(),e=t?t.prototype:void 0,a=e?e.toString:void 0;function i(c){if(typeof c=="string")return c;if(o(c))return r(c,i)+"";if(n(c))return a?a.call(c):"";var s=c+"";return s=="0"&&1/c==-1/0?"-0":s}return y=i,y}var S,z;function io(){if(z)return S;z=1;var t=V();function r(o){return o==null?"":t(o)}return S=r,S}function p(t){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},p(t)}function B(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function h(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?B(Object(o),!0).forEach(function(n){E(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}function E(t,r,o){return(r=T(r))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function T(t){var r=N(t,"string");return p(r)=="symbol"?r:r+""}function N(t,r){if(p(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,r);if(p(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var $=function(r){var o=r.euiTheme;return o.components.forms.maxWidth},P=function(r,o){var n=b(r),e=o??n.textColorDisabled;return`
    color: `.concat(e,`;
    opacity: 1;
  `)},b=function(r){var o=r.euiTheme,n=r.highContrastMode,e=n?o.colors.emptyShade:o.components.forms.background,a=o.size.xxl,i=o.size.xl,c={maxWidth:$(r),controlHeight:a,controlCompressedHeight:i,controlPadding:o.size.m,controlCompressedPadding:o.size.s,controlBorderRadius:o.border.radius.small,controlCompressedBorderRadius:o.border.radius.small,iconAffordance:f(o.size.base,function(d){return d*1.5}),iconCompressedAffordance:f(o.size.base,function(d){return d*1.5}),stateUnderlineHeight:n?f(o.border.width.thick,function(d){return d*2}):o.border.width.thick},s={textColor:o.colors.textParagraph,textColorDisabled:o.components.forms.colorDisabled,backgroundColor:e,backgroundDisabledColor:o.components.forms.backgroundDisabled,backgroundReadOnlyColor:o.components.forms.backgroundReadOnly,backgroundAutoFilled:o.components.forms.backgroundAutofilled,borderColor:n?o.border.color:o.components.forms.border,borderHovered:o.components.forms.borderHovered,borderFocused:o.components.forms.borderFocused,borderInvalid:o.components.forms.borderInvalid,borderInvalidHovered:o.components.forms.borderInvalidHovered,borderAutofilled:o.components.forms.borderAutofilled,borderAutofilledHovered:o.components.forms.borderAutofilledHovered,controlDisabledColor:o.components.forms.controlBackgroundDisabled,controlBoxShadow:"0 0 transparent",controlPlaceholderText:n?q(o.components.forms.colorDisabled)(e):o.components.forms.colorDisabled,appendPrependBackground:o.components.forms.prependBackground,labelColor:o.colors.textHeading},m={controlLayoutGroupInputHeight:f(a,function(d){return d-2}),controlLayoutGroupInputCompressedHeight:f(i,function(d){return d-2}),controlLayoutGroupInputCompressedBorderRadius:o.border.radius.small,controlLayoutBorderRadius:o.border.radius.small,controlLayoutInnerBorderRadius:f(o.border.radius.small,function(d){return d/2})},u={controlIconSize:{s:o.size.m,m:o.size.base,l:o.size.l,xl:o.size.xl,xxl:o.size.xxl}};return h(h(h(h(h({},c),s),u),m),{},{animationTiming:"".concat(o.animation.fast," ease-in")})},K=".euiFormControlLayout__childrenWrapper",co=function(r){var o=b(r);return{shared:`
      `.concat(X(r),`
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
    `),formWidth:`
      `.concat(l("max-width",o.maxWidth),`
      `).concat(l("width","100%"),`
    `),fullWidth:`
      `.concat(l("max-width","100%"),`
      `).concat(l("width","100%"),`
    `),invalid:Z(r),focus:Y(r),disabled:oo(r),readOnly:ro(r),autoFill:no(r)}},X=function(r){var o=r.euiTheme,n=I(r,"s"),e=n.fontSize,a=b(r);return`
    font-family: `.concat(o.font.family,`;
    font-size: `).concat(e,`;
    color: `).concat(a.textColor,`;

    `).concat(O(P(r,a.controlPlaceholderText)),`
  `)},J=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=o.withBorder,e=n===void 0?!0:n,a=o.withBackground,i=a===void 0?!0:a,c=o.withBackgroundColor,s=c===void 0?i:c,m=r.euiTheme,u=b(r),d=v(r,{none:`
      --euiFormControlStateColor: `.concat(u.borderColor,`;
      border: none;
      box-shadow: inset 0 0 0 `).concat(m.border.width.thin,` var(--euiFormControlStateColor);

      `).concat(H(r),`
    `),preferred:`
      border: `.concat(m.border.width.thin," solid ").concat(m.border.color,`;

      `).concat(H(r),`
    `)}),D=`
    background-color: `.concat(u.backgroundColor,`;
  `).trim(),_=v(r,{forced:`
      background-repeat: no-repeat;
      background-size: 0% `.concat(u.stateUnderlineHeight,`;
      background-position: bottom left;
      background-origin: border-box;
    `)});return`
    `.concat(e?d:"",`
    `).concat(s?D:"",`
    `).concat(i?_:"",`
  `)},Q='&:hover:not(:disabled, :focus, input[readonly], [class*="readOnly"])',H=function(r){var o=r.euiTheme,n=r.highContrastMode,e=b(r);return`
    `.concat(Q,` {
      --borderWidthBase: var(--euiFormControlStateWidth, `).concat(o.border.width.thin,`);
      --borderWidth: `).concat(n?o.border.width.thick:"var(--borderWidthBase)",`;
      --borderColor: var(--euiFormControlStateHoverColor, `).concat(n?o.border.color:e.borderHovered,`);
      position: relative;
      outline: var(--borderWidth) solid var(--borderColor);
      outline-offset: calc(-1 * var(--borderWidth));
    }
  `)},A=`
  position: relative;
  z-index: 1;
  box-shadow: none;
  outline: var(--euiFormControlStateWidth) solid var(--euiFormControlStateColor);
  outline-offset: calc(-1 * var(--euiFormControlStateWidth));
`,Y=function(r){var o=r.euiTheme,n=b(r),e=o.colors.primary;return`
      --euiFormControlStateColor: `.concat(n.borderFocused,`;
      --euiFormControlStateHoverColor: `).concat(n.borderFocused,`;
      --euiFormControlStateWidth: `).concat(o.border.width.thick,`;
      `).concat(A,`
      `).concat(v(r,{forced:`
          `.concat(W(r,e),`
        `)}),`
    `)},Z=function(r){var o=r.euiTheme,n=r.highContrastMode,e=b(r),a=o.colors.danger;return`
      --euiFormControlStateColor: `.concat(e.borderInvalid,`;
      --euiFormControlStateHoverColor: `).concat(e.borderInvalidHovered,`;
      --euiFormControlStateWidth: `).concat(n==="preferred"?o.border.width.thick:o.border.width.thin,`;

      `).concat(A,`
      `).concat(W(r,a),`
    `)},oo=function(r){var o=b(r);return`
    --euiFormControlStateColor: transparent;
    --euiFormControlStateHoverColor: transparent;
    --euiFormControlStateColor: `.concat(o.borderColor,`;

    color: `).concat(o.textColorDisabled,`;
    /* Required for Safari */
    -webkit-text-fill-color: `).concat(o.textColorDisabled,`;
    background-color: `).concat(o.backgroundDisabledColor,`;
    cursor: not-allowed;
    
    `).concat(O(P(r)),`
  `)},ro=function(r){var o=r.euiTheme,n=b(r);return`
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

    `).concat(K,`[class*=inGroup] & {
      box-shadow: none;
    }

    `).concat(v(r,{preferred:"box-shadow: none;"}),`
  `)},no=function(r){var o=r.euiTheme,n=b(r),e=o.colors.darkestShade,a=n.backgroundAutoFilled,i="inset 0 0 0 100vw ".concat(a),c=n.borderAutofilled,s=n.borderAutofilledHovered,m=n.borderInvalid,u=n.borderInvalidHovered,d="inset 0 0 0 var(--euiFormControlStateAutofillWidth) var(--euiFormControlStateAutofillColor), ".concat(i);return`
    &:where(:-webkit-autofill) {
      --euiFormControlStateAutofillWidth: `.concat(o.border.width.thin,`;
      --euiFormControlStateAutofillColor: `).concat(c,`;
      
      -webkit-text-fill-color: `).concat(e,`;
      -webkit-box-shadow: `).concat(d,`;
     

      &:hover {
        --euiFormControlStateAutofillColor: `).concat(s,`;
      }

      &:focus {
        --euiFormControlStateAutofillWidth: `).concat(o.border.width.thick,`;
      }

      &:invalid {
        --euiFormControlStateAutofillColor: `).concat(m,`;

        &:hover {
          --euiFormControlStateAutofillColor: `).concat(u,`;
        }
      }
    }
  `)},W=function(r,o){var n=r.euiTheme,e=r.highContrastMode;if(e!=="forced")return"background-size: 100% 100%;";var a=b(r),i=a.stateUnderlineHeight,c=encodeURIComponent(o),s=i??"4px",m="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:transparent;stroke-width:".concat(s,";stroke:").concat(c,"' /%3E%3C/svg%3E");return`
      background-size: calc(100% - `.concat(f(s,function(u){return u/2}),") calc(100% - ").concat(f(s,function(u){return u/2}),`);
      background-position: `).concat(n.border.width.thin,`;
      background-image: url("`).concat(m,`");
    `)},O=function(r){return`
  &::-webkit-input-placeholder { `.concat(r,` }
  &::-moz-placeholder { `).concat(r,` }
  &:-moz-placeholder { `).concat(r,` }
  &::placeholder { `).concat(r,` }
`)},eo=function(r){var o=r.euiTheme,n=r.highContrastMode,e={control:o.size.base,lineHeight:o.size.l,labelGap:o.size.s},a={unselected:o.components.forms.controlBackgroundUnselected,unselectedBorder:n?o.border.color:o.components.forms.controlBorder,selected:o.colors.primary,selectedBorder:o.components.forms.controlBorderSelected,selectedIcon:o.colors.emptyShade,disabled:o.components.forms.controlBackgroundDisabled,disabledBorder:o.components.forms.controlBorderDisabled,disabledIcon:o.components.forms.iconDisabled,disabledLabel:o.colors.textDisabled},i={speed:o.animation.fast,easing:"ease-in"};return{sizes:e,colors:a,animation:i}},lo=function(r){var o=r.euiTheme,n=r.highContrastMode,e=eo(r),a=f([e.sizes.lineHeight,e.sizes.control],function(i,c){return(i-c)/2});return{wrapper:`
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

        `).concat(L,` {
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
        `)},disabled:{get shared(){var i=n?e.colors.disabledIcon:e.colors.disabled;return`
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
        `.concat(l("padding-left",e.sizes.labelGap),`
        line-height: `).concat(e.sizes.lineHeight,`;
        font-size: `).concat(I(r,"s").fontSize,`;
      `),enabled:`
        cursor: pointer;
      `,disabled:`
        cursor: not-allowed;
        color: `.concat(e.colors.disabledLabel,`;
      `)}}};export{b as a,$ as b,io as c,U as d,co as e,lo as f,eo as g,X as h,J as i,Y as j,G as r};
