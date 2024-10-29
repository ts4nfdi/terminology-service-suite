export const tssResetStyles = `
/* // Adapted from Eric Meyer's reset (http://meyerweb.com/eric/tools/css/reset/, v2.0 | 20110126). */


*, *:before, *:after {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: none;
  vertical-align: baseline;
}

.tss-style h1, h2, h3, h4, h5, h6, p {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

a[href],
button,
[role='button'] {
  cursor: pointer;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  border-radius: 0;
  font-size: inherit;
}

input {
  margin: 0;
  padding: 0;
}

input:disabled {
  opacity: 1; /* required on iOS */
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

hr {
  margin: 0;
}

fieldset {
  min-inline-size: auto;
}

/* Chrome has an issue around RTL languages in SVGs when letter-spacing is negative
 * https://bugs.chromium.org/p/chromium/issues/detail?id=966480
 */
svg text {
  letter-spacing: normal !important;
}


@-webkit-keyframes euiAnimFadeIn {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }
@keyframes euiAnimFadeIn {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@-webkit-keyframes euiGrow {
  0% {
    opacity: 0; }
  1% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes euiGrow {
  0% {
    opacity: 0; }
  1% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@-webkit-keyframes focusRingAnimate {
  0% {
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0); }
  100% {
    box-shadow: 0 0 0 2px #0071c2; } }

@keyframes focusRingAnimate {
  0% {
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0); }
  100% {
    box-shadow: 0 0 0 2px #0071c2; } }

@-webkit-keyframes focusRingAnimateLarge {
  0% {
    box-shadow: 0 0 0 10px rgba(0, 119, 204, 0); }
  100% {
    box-shadow: 0 0 0 4px #0071c2; } }

@keyframes focusRingAnimateLarge {
  0% {
    box-shadow: 0 0 0 10px rgba(0, 119, 204, 0); }
  100% {
    box-shadow: 0 0 0 4px #0071c2; } }

@-webkit-keyframes euiButtonActive {
  50% {
    -webkit-transform: translateY(1px);
            transform: translateY(1px); } }

@keyframes euiButtonActive {
  50% {
    -webkit-transform: translateY(1px);
            transform: translateY(1px); } }

.eui-alignBaseline {
  vertical-align: baseline !important; }

.eui-alignBottom {
  vertical-align: bottom !important; }

.eui-alignMiddle {
  vertical-align: middle !important; }

.eui-alignTop {
  vertical-align: top !important; }

.eui-displayBlock {
  display: block !important; }

.eui-displayInline {
  display: inline !important; }

.eui-displayInlineBlock {
  display: inline-block !important; }

.eui-fullWidth {
  display: block !important;
  width: 100% !important; }

.eui-textCenter {
  text-align: center !important; }

.eui-textLeft {
  text-align: left !important; }

.eui-textRight {
  text-align: right !important; }

.eui-textNoWrap {
  white-space: nowrap !important; }

.eui-textInheritColor {
  color: inherit !important; }

.eui-textBreakWord {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word; }

.eui-textBreakAll {
  overflow-wrap: break-word !important;
  word-break: break-all !important; }

.eui-textBreakNormal {
  overflow-wrap: normal !important;
  word-wrap: normal !important;
  word-break: normal !important; }

.eui-textTruncate {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important; }

.eui-textNumber {
  font-feature-settings: "calt" 1, "kern" 1, "liga" 1, "tnum" 1; }


[class*='eui-showFor'] {
  display: none !important;
 }

@media only screen and (max-width: 574px) {
  .eui-hideFor--xs {
    display: none !important; } }

@media only screen and (max-width: 574px) {
  .eui-showFor--xs {
    display: inline !important; } }

@media only screen and (max-width: 574px) {
  .eui-showFor--xs--block {
    display: block !important; } }

@media only screen and (max-width: 574px) {
  .eui-showFor--xs--inlineBlock {
    display: inline-block !important; } }

@media only screen and (max-width: 574px) {
  .eui-showFor--xs--flex {
    display: -webkit-flex !important;
    display: flex !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .eui-hideFor--s {
    display: none !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .eui-showFor--s {
    display: inline !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .eui-showFor--s--block {
    display: block !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .eui-showFor--s--inlineBlock {
    display: inline-block !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .eui-showFor--s--flex {
    display: -webkit-flex !important;
    display: flex !important; } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .eui-hideFor--m {
    display: none !important; } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .eui-showFor--m {
    display: inline !important; } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .eui-showFor--m--block {
    display: block !important; } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .eui-showFor--m--inlineBlock {
    display: inline-block !important; } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .eui-showFor--m--flex {
    display: -webkit-flex !important;
    display: flex !important; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .eui-hideFor--l {
    display: none !important; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .eui-showFor--l {
    display: inline !important; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .eui-showFor--l--block {
    display: block !important; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .eui-showFor--l--inlineBlock {
    display: inline-block !important; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .eui-showFor--l--flex {
    display: -webkit-flex !important;
    display: flex !important; } }

@media only screen and (min-width: 1200px) {
  .eui-hideFor--xl {
    display: none !important; } }

@media only screen and (min-width: 1200px) {
  .eui-showFor--xl {
    display: inline !important; } }

@media only screen and (min-width: 1200px) {
  .eui-showFor--xl--block {
    display: block !important; } }

@media only screen and (min-width: 1200px) {
  .eui-showFor--xl--inlineBlock {
    display: inline-block !important; } }

@media only screen and (min-width: 1200px) {
  .eui-showFor--xl--flex {
    display: -webkit-flex !important;
    display: flex !important; } }

/**
  * IE doesn't properly wrap groups if it is within a flex-item of a flex-group.
  * Adding the following styles to the flex-item that contains the wrapping group, will fix IE.
  * https://github.com/philipwalton/flexbugs/issues/104
  */
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .euiIEFlexWrapFix {
    -webkit-flex-grow: 1;
            flex-grow: 1;
    -webkit-flex-shrink: 1;
            flex-shrink: 1;
    -webkit-flex-basis: 0%;
            flex-basis: 0%; } }

/**
 * Scroll bar only
 */
.eui-scrollBar {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin; }
  .eui-scrollBar::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .eui-scrollBar::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .eui-scrollBar::-webkit-scrollbar-corner, .eui-scrollBar::-webkit-scrollbar-track {
    background-color: transparent; }

/**
  * Overflow scrolling
  */
.eui-yScroll {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden; }
  .eui-yScroll::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .eui-yScroll::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .eui-yScroll::-webkit-scrollbar-corner, .eui-yScroll::-webkit-scrollbar-track {
    background-color: transparent; }
  .eui-yScroll:focus {
    outline: none;
    /* 1 */ }
  .eui-yScroll[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

.eui-xScroll {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  overflow-x: auto; }
  .eui-xScroll::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .eui-xScroll::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .eui-xScroll::-webkit-scrollbar-corner, .eui-xScroll::-webkit-scrollbar-track {
    background-color: transparent; }
  .eui-xScroll:focus {
    outline: none;
    /* 1 */ }
  .eui-xScroll[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

/**
  * Overflow scrolling with shadows
  */
.eui-yScrollWithShadows {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
          mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%); }
  .eui-yScrollWithShadows::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .eui-yScrollWithShadows::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .eui-yScrollWithShadows::-webkit-scrollbar-corner, .eui-yScrollWithShadows::-webkit-scrollbar-track {
    background-color: transparent; }
  .eui-yScrollWithShadows:focus {
    outline: none;
    /* 1 */ }
  .eui-yScrollWithShadows[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

.eui-xScrollWithShadows {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  overflow-x: auto;
  -webkit-mask-image: linear-gradient(to right, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
          mask-image: linear-gradient(to right, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%); }
  .eui-xScrollWithShadows::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .eui-xScrollWithShadows::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .eui-xScrollWithShadows::-webkit-scrollbar-corner, .eui-xScrollWithShadows::-webkit-scrollbar-track {
    background-color: transparent; }
  .eui-xScrollWithShadows:focus {
    outline: none;
    /* 1 */ }
  .eui-xScrollWithShadows[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

/**
  * Forcing focus ring on non-EUI elements
  */
.eui-isFocusable:focus {
  outline: 2px solid currentColor; }
  .eui-isFocusable:focus:focus-visible {
    outline-style: auto; }
  .eui-isFocusable:focus:not(:focus-visible) {
    outline: none; }

/**
 * For quickly applying a full-height element whether using flex or not
 */
.eui-fullHeight {
  height: 100%;
  -webkit-flex: 1 1 auto;
          flex: 1 1 auto;
  overflow: hidden; }

/**
 * LEGEND
 * __day-name : Week headers like Su, Mo, etc
 * __day : Number on the calendar
 *       --highlighted
 *       --disabled :               _this.isDisabled(),
 *       --selected :               _this.isSameDay(_this.props.selected),
    *       --range-start :            _this.isRangeStart(),
    *       --range-end :              _this.isRangeEnd(),
 *       --keyboard-selected :      _this.isKeyboardSelected(),
 *       --in-range :               _this.isInRange(),
    *       --in-selecting-range :     _this.isInSelectingRange(),
    *       --selecting-range-start :  _this.isSelectingRangeStart(),
    *       --selecting-range-end :    _this.isSelectingRangeEnd(),
 *       --today :                  _this.isSameDay(now(_this.props.utcOffset)),
 *       --weekend :                _this.isWeekend(),
 *       --outside-month :          _this.isOutsideMonth()
 */
.react-datepicker__day-names,
.react-datepicker__week {
  white-space: nowrap;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.react-datepicker__day-name,
.react-datepicker__day {
  font-weight: 500;
  text-align: center;
  color: #1a1c21;
  display: inline-block;
  width: 32px;
  line-height: 32px;
  border-radius: 4px;
  margin: 2px; }

.react-datepicker__day-name {
  color: #69707D; }

.react-datepicker__day {
  cursor: pointer;
  transition: -webkit-transform 90ms ease-in-out;
  transition: transform 90ms ease-in-out;
  transition: transform 90ms ease-in-out, -webkit-transform 90ms ease-in-out; }
  .react-datepicker__day:hover {
    color: #0061a6;
    background-color: rgba(0, 119, 204, 0.2);
    text-decoration: underline; }
    @media screen and (prefers-reduced-motion: no-preference) {
      .react-datepicker__day:hover {
        -webkit-transform: scale(1.1);
                transform: scale(1.1); } }
  .react-datepicker__day--today {
    color: #07C;
    font-weight: 700; }
  .react-datepicker__day--outside-month {
    color: #69707D; }
  .react-datepicker__day--highlighted, .react-datepicker__day--highlighted:hover {
    color: #00726b;
    background-color: rgba(0, 191, 179, 0.2); }
  .react-datepicker__day--in-range, .react-datepicker__day--in-range:hover {
    color: #0061a6;
    background-color: rgba(0, 119, 204, 0.2); }
  .react-datepicker__day--in-range:not(.react-datepicker__day--selected):not(:hover), .react-datepicker__day--in-range.react-datepicker__day--disabled:not(.react-datepicker__day--selected), .react-datepicker__day--in-range.react-datepicker__day--disabled:not(.react-datepicker__day--selected):hover {
    box-shadow: -2px 0 rgba(0, 119, 204, 0.2), 2px 0 rgba(0, 119, 204, 0.2);
    border-radius: 0; }
    .react-datepicker__day--in-range:not(.react-datepicker__day--selected):not(:hover):first-of-type, .react-datepicker__day--in-range.react-datepicker__day--disabled:not(.react-datepicker__day--selected):first-of-type, .react-datepicker__day--in-range.react-datepicker__day--disabled:not(.react-datepicker__day--selected):hover:first-of-type {
      box-shadow: 2px 0 rgba(0, 119, 204, 0.2); }
    .react-datepicker__day--in-range:not(.react-datepicker__day--selected):not(:hover):last-of-type, .react-datepicker__day--in-range.react-datepicker__day--disabled:not(.react-datepicker__day--selected):last-of-type, .react-datepicker__day--in-range.react-datepicker__day--disabled:not(.react-datepicker__day--selected):hover:last-of-type {
      box-shadow: -2px 0 rgba(0, 119, 204, 0.2); }
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover {
    background-color: #07C;
    color: #FFF; }
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(189, 39, 30, 0.5); }
  .react-datepicker__day--disabled, .react-datepicker__day--disabled:hover {
    background-color: rgba(171, 180, 196, 0.1);
    color: #a2abba;
    cursor: not-allowed;
    text-decoration: none;
    -webkit-transform: none;
            transform: none; }
    .react-datepicker__day--disabled.react-datepicker__day--in-range:not(.react-datepicker__day--selected), .react-datepicker__day--disabled.react-datepicker__day--in-range:not(.react-datepicker__day--selected):hover, .react-datepicker__day--disabled:hover.react-datepicker__day--in-range:not(.react-datepicker__day--selected), .react-datepicker__day--disabled:hover.react-datepicker__day--in-range:not(.react-datepicker__day--selected):hover {
      color: #8c9daa;
      background-color: rgba(0, 119, 204, 0.2); }
  .react-datepicker__day--disabled.react-datepicker__day--selected, .react-datepicker__day--disabled.react-datepicker__day--selected:hover {
    color: #BD271E;
    background-color: rgba(189, 39, 30, 0.2); }

/**
 * LEGEND
 * __time-list-item :
 *       --preselected : closest current time but not selected (also applied when using arrow keys to indicate focus)
 *       --selected
 *       --disabled
 *       --injected
 */
.react-datepicker__header--time {
  display: none; }

.react-datepicker__time-container {
  border-left: #D3DAE6;
  width: auto;
  display: -webkit-flex;
  display: flex;
  margin-top: 40px;
  margin-left: 8px;
  -webkit-flex-grow: 1;
          flex-grow: 1;
  background-color: #fafbfd;
  border-radius: 6px; }
  .react-datepicker__time-container--focus .react-datepicker__time-list-item--preselected {
    text-decoration: underline; }
  @media only screen and (max-width: 574px) {
    .react-datepicker__time-container {
      margin-top: 0; } }

.react-datepicker__time,
.react-datepicker__time-box {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.react-datepicker__time-list {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px 12px;
  height: 100px !important;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-flex-grow: 1;
          flex-grow: 1;
  -webkit-align-items: center;
          align-items: center;
  gap: 4px; }
  .react-datepicker__time-list::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .react-datepicker__time-list::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .react-datepicker__time-list::-webkit-scrollbar-corner, .react-datepicker__time-list::-webkit-scrollbar-track {
    background-color: transparent; }
  .react-datepicker__time-list:focus {
    outline: none;
    /* 1 */ }
  .react-datepicker__time-list[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

.react-datepicker__time-list-item {
  display: inline-block;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  text-align: center;
  white-space: nowrap;
  max-width: 100%;
  vertical-align: middle;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;
  outline-offset: -1px;
  -webkit-transform: none !important;
          transform: none !important;
  /* 1 */
  -webkit-animation: none !important;
          animation: none !important;
  /* 1 */
  transition-timing-function: ease-in;
  /* 2 */
  transition-duration: 150ms;
  /* 2 */
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  font-size: 12px; }
  @media screen and (prefers-reduced-motion: no-preference) {
    .react-datepicker__time-list-item {
      transition: background 250ms ease-in-out, -webkit-transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out, -webkit-transform 250ms ease-in-out; }
      .react-datepicker__time-list-item:hover:not([class*='isDisabled']) {
        -webkit-transform: translateY(-1px);
                transform: translateY(-1px); }
      .react-datepicker__time-list-item:focus {
        -webkit-animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
                animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1); }
      .react-datepicker__time-list-item:active:not([class*='isDisabled']) {
        -webkit-transform: translateY(1px);
                transform: translateY(1px); } }
  .react-datepicker__time-list-item:hover:not([class*='isDisabled']), .react-datepicker__time-list-item:focus {
    text-decoration: underline; }
  .react-datepicker__time-list-item--disabled, .react-datepicker__time-list-item--disabled:hover {
    text-decoration: none !important;
    cursor: not-allowed;
    color: #ABB4C4;
    background-color: transparent; }
  .react-datepicker__time-list-item--injected, .react-datepicker__time-list-item--injected:hover {
    color: #00726b;
    background-color: rgba(0, 191, 179, 0.2); }
  .react-datepicker__time-list-item--preselected, .react-datepicker__time-list-item--preselected:hover {
    background: rgba(0, 119, 204, 0.1); }
  .react-datepicker__time-list-item--selected, .react-datepicker__time-list-item--selected:hover {
    background-color: #07C;
    color: #FFF; }

.react-datepicker--time-only {
  padding: 0 !important; }
  .react-datepicker--time-only .react-datepicker__time-container {
    background-color: transparent;
    margin: 0; }
  .react-datepicker--time-only .react-datepicker__time-list {
    height: 204px !important; }
  .react-datepicker--time-only .react-datepicker__time-list-item {
    font-size: 14px;
    min-width: 112px;
    text-align: left; }

/**
 * LEGEND
 * __header__dropdown : Contains the month and year, but affords for the navigational arrows

 *   __month-dropdown-container: Contains both static/selected control and the dropdown
 *     __month-read-view: The static control
 *     __month-dropdown: The absolutely positioned list
 *       __month-option: Each option in the list
 *                       --selected_month
 *                       --selected
 *                       --preselected

 *   __year-dropdown-container: Contains both static/selected control and the dropdown
 *     __year-read-view: The static control
 *     __year-dropdown: The absolutely positioned list
 *       __year-option: Each option in the list
 *                       --selected_year
 *                       --selected
 *                       --preselected
 */
.react-datepicker__header__dropdown {
  padding: 8px;
  display: -webkit-flex;
  display: flex;
  gap: 4px;
  position: absolute;
  top: 0;
  left: 36px;
  right: 36px;
  -webkit-justify-content: center;
          justify-content: center; }

/**
 * Make the top selectors look like select inputs
 */
.react-datepicker__year-read-view,
.react-datepicker__month-read-view,
.react-datepicker__month-year-read-view {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  padding: 8px;
  border-radius: 4px;
  height: 32px;
  font-weight: 500;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row-reverse;
          flex-direction: row-reverse;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-align-items: center;
          align-items: center; }
  @supports (-moz-appearance: none) {
    .react-datepicker__year-read-view,
    .react-datepicker__month-read-view,
    .react-datepicker__month-year-read-view {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .react-datepicker__year-read-view,
    .react-datepicker__month-read-view,
    .react-datepicker__month-year-read-view {
      line-height: 1em; } }
  .react-datepicker__year-read-view::-webkit-input-placeholder,
  .react-datepicker__month-read-view::-webkit-input-placeholder,
  .react-datepicker__month-year-read-view::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .react-datepicker__year-read-view::-moz-placeholder,
  .react-datepicker__month-read-view::-moz-placeholder,
  .react-datepicker__month-year-read-view::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .react-datepicker__year-read-view::-webkit-input-placeholder, .react-datepicker__month-read-view::-webkit-input-placeholder, .react-datepicker__month-year-read-view::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .react-datepicker__year-read-view::-moz-placeholder, .react-datepicker__month-read-view::-moz-placeholder, .react-datepicker__month-year-read-view::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .react-datepicker__year-read-view::placeholder,
  .react-datepicker__month-read-view::placeholder,
  .react-datepicker__month-year-read-view::placeholder {
    color: #69707D;
    opacity: 1; }
  @supports (-moz-appearance: none) {
    .react-datepicker__year-read-view,
    .react-datepicker__month-read-view,
    .react-datepicker__month-year-read-view {
      transition-property: box-shadow, background-image, background-size; } }
  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer;
    text-decoration: underline; }
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    background-position: center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+ICA8ZGVmcz4gICAgPHBhdGggaWQ9ImFycm93X2Rvd24tYSIgZD0iTTEzLjA2ODg1MDgsNS4xNTcyNTAzOCBMOC4zODQyMzk3NSw5Ljc2ODI3NDI4IEM4LjE3MDU0NDE1LDkuOTc4NjEzMDggNy44Mjk5OTIxNCw5Ljk3OTE0MDk1IDcuNjE1NzYwMjUsOS43NjgyNzQyOCBMMi45MzExNDkxNSw1LjE1NzI1MDM4IEMyLjcxODEzNTksNC45NDc1ODMyMSAyLjM3Mjc3MzE5LDQuOTQ3NTgzMjEgMi4xNTk3NTk5NCw1LjE1NzI1MDM4IEMxLjk0Njc0NjY5LDUuMzY2OTE3NTYgMS45NDY3NDY2OSw1LjcwNjg1NTIyIDIuMTU5NzU5OTQsNS45MTY1MjI0IEw2Ljg0NDM3MTA0LDEwLjUyNzU0NjMgQzcuNDg1MTc0MjQsMTEuMTU4MjgzNiA4LjUxNjQ0OTc5LDExLjE1NjY4NTEgOS4xNTU2Mjg5NiwxMC41Mjc1NDYzIEwxMy44NDAyNDAxLDUuOTE2NTIyNCBDMTQuMDUzMjUzMyw1LjcwNjg1NTIyIDE0LjA1MzI1MzMsNS4zNjY5MTc1NiAxMy44NDAyNDAxLDUuMTU3MjUwMzggQzEzLjYyNzIyNjgsNC45NDc1ODMyMSAxMy4yODE4NjQxLDQuOTQ3NTgzMjEgMTMuMDY4ODUwOCw1LjE1NzI1MDM4IFoiLz4gIDwvZGVmcz4gIDxnIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDx1c2UgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYXJyb3dfZG93bi1hIi8+ICA8L2c+PC9zdmc+);
    right: 8px;
    height: 12px;
    width: 12px;
    display: inline-block;
    background-size: cover; }
  .react-datepicker__year-read-view--selected-month, .react-datepicker__year-read-view--selected-year,
  .react-datepicker__month-read-view--selected-month,
  .react-datepicker__month-read-view--selected-year,
  .react-datepicker__month-year-read-view--selected-month,
  .react-datepicker__month-year-read-view--selected-year {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important; }

.react-datepicker__year-dropdown-container,
.react-datepicker__month-dropdown-container {
  position: relative;
  display: inline-block;
  -webkit-flex-grow: 1;
          flex-grow: 1;
  max-width: 400px; }

.react-datepicker__year-dropdown-container > div:not([class*='read-view']),
.react-datepicker__month-dropdown {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05);
  height: auto;
  max-height: 250px;
  background-color: #FFF;
  position: absolute;
  z-index: 1;
  border-radius: 6px;
  min-width: 100px;
  width: 100%; }
  .react-datepicker__year-dropdown-container > div:not([class*='read-view'])::-webkit-scrollbar,
  .react-datepicker__month-dropdown::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .react-datepicker__year-dropdown-container > div:not([class*='read-view'])::-webkit-scrollbar-thumb,
  .react-datepicker__month-dropdown::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .react-datepicker__year-dropdown-container > div:not([class*='read-view'])::-webkit-scrollbar-corner, .react-datepicker__year-dropdown-container > div:not([class*='read-view'])::-webkit-scrollbar-track,
  .react-datepicker__month-dropdown::-webkit-scrollbar-corner,
  .react-datepicker__month-dropdown::-webkit-scrollbar-track {
    background-color: transparent; }
  .react-datepicker__year-dropdown-container > div:not([class*='read-view']):focus,
  .react-datepicker__month-dropdown:focus {
    outline: none;
    /* 1 */ }
  .react-datepicker__year-dropdown-container > div:not([class*='read-view'])[tabindex='0']:focus:focus-visible,
  .react-datepicker__month-dropdown[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

.react-datepicker__year-dropdown-container > div:not([class*='read-view']) .react-datepicker__year-dropdown {
  padding: 4px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column-reverse;
          flex-direction: column-reverse;
  -webkit-justify-content: flex-end;
          justify-content: flex-end; }

.react-datepicker__month-dropdown-container {
  -webkit-flex-grow: 2;
          flex-grow: 2; }
  .react-datepicker__month-dropdown-container .react-datepicker__month-dropdown {
    padding: 4px;
    min-width: 140px; }

.react-datepicker__year-option,
.react-datepicker__month-option,
.react-datepicker__month-year-option {
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  font-size: 14px;
  margin: 4px 0;
  cursor: pointer; }
  .react-datepicker__year-option:hover, .react-datepicker__year-option:focus,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-option:focus,
  .react-datepicker__month-year-option:hover,
  .react-datepicker__month-year-option:focus {
    text-decoration: underline; }
  .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    display: none; }

.react-datepicker__year-option--preselected, .react-datepicker__year-option--preselected:hover,
.react-datepicker__month-option--preselected,
.react-datepicker__month-option--preselected:hover {
  background: rgba(0, 119, 204, 0.1); }

.react-datepicker__year-option--selected_year, .react-datepicker__year-option--selected_year:hover,
.react-datepicker__month-option--selected_month,
.react-datepicker__month-option--selected_month:hover {
  background-color: #07C;
  color: #FFF; }

.react-datepicker__navigation--next,
.react-datepicker__navigation--previous {
  background-position: center;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzM0Mzc0MSIgZD0iTTExLjY5MiA3SDMuNTU2QzMuMjQ5IDcgMyA3LjIyNCAzIDcuNXMuMjQ5LjUuNTU2LjVoOC4xMzZsLTQuMDk2IDQuMDk2YS41LjUgMCAwMC43MDcuNzA3bDQuMjQzLTQuMjQyYy4yNTgtLjI1OS40MDMtLjU4Ny40MzMtLjkyNWEuNDU0LjQ1NCAwIDAwMC0uMjcyIDEuNDk0IDEuNDk0IDAgMDAtLjQzMy0uOTI1TDguMzAzIDIuMTk3YS41LjUgMCAxMC0uNzA3LjcwN0wxMS42OTIgN3oiLz48L3N2Zz4=);
  cursor: pointer;
  position: absolute;
  top: 8px;
  height: 32px;
  width: 32px;
  z-index: 1;
  text-indent: -999em;
  overflow: hidden;
  background-repeat: no-repeat;
  border-radius: 4px;
  background-position: center; }
  .react-datepicker__navigation--next:hover, .react-datepicker__navigation--next:focus,
  .react-datepicker__navigation--previous:hover,
  .react-datepicker__navigation--previous:focus {
    background-color: rgba(0, 119, 204, 0.1); }

.react-datepicker__navigation--previous {
  left: 8px;
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
  -webkit-transform-origin: center;
          transform-origin: center; }

.react-datepicker__navigation--next {
  right: 8px; }

/* This file is a heavy retheme of react-datepicker's Sass as of v1.4.0
** https://github.com/Hacker0x01/react-datepicker
*/
.euiDatePicker {
  display: block; }
  .euiDatePicker .euiFormControlLayout {
    height: auto; }
  .euiDatePicker.euiDatePicker--inline .euiFormControlLayout {
    width: auto; }
  .euiDatePicker.euiDatePicker--shadow .react-datepicker-popper {
    box-shadow: 0 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0 2.6px 8px -1px rgba(0, 0, 0, 0.06), 0 5.7px 12px -1px rgba(0, 0, 0, 0.05), 0 15px 15px -1px rgba(0, 0, 0, 0.04);
    border: 1px solid #D3DAE6;
    background-color: #FFF;
    border-radius: 0 0 6px 6px; }
  .euiDatePicker.euiDatePicker--shadow.euiDatePicker--inline .react-datepicker {
    box-shadow: 0 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0 2.6px 8px -1px rgba(0, 0, 0, 0.06), 0 5.7px 12px -1px rgba(0, 0, 0, 0.05), 0 15px 15px -1px rgba(0, 0, 0, 0.04);
    border: 1px solid #D3DAE6;
    background-color: #FFF;
    border-radius: 6px; }

.react-datepicker {
  font-size: 12px;
  color: #343741;
  display: -webkit-flex;
  display: flex;
  border-radius: 6px;
  padding: 8px;
  -webkit-justify-content: center;
          justify-content: center; }

.euiDatePicker.euiDatePicker--shadow .react-datepicker-popper {
  z-index: 2000;
  -webkit-animation: euiAnimFadeIn 150ms ease-in;
          animation: euiAnimFadeIn 150ms ease-in; }
  .euiDatePicker.euiDatePicker--shadow .react-datepicker-popper[data-placement^='top'] {
    box-shadow: 0 0 0.8px rgba(0, 0, 0, 0.06), 0 0 2px rgba(0, 0, 0, 0.04), 0 0 5px rgba(0, 0, 0, 0.04), 0 0 17px rgba(0, 0, 0, 0.03);
    border-radius: 6px 6px 0 0; }
  .euiDatePicker.euiDatePicker--shadow .react-datepicker-popper[data-placement^='right'] {
    margin-left: 0; }
  .euiDatePicker.euiDatePicker--shadow .react-datepicker-popper[data-placement^='left'] {
    margin-right: 0; }

.react-datepicker__current-month,
.react-datepicker-time__header {
  display: none; }

.react-datepicker__screenReaderOnly {
  position: absolute;
  top: auto;
  left: -10000px;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
          clip-path: inset(50%);
  overflow: hidden;
  margin: -1px; }

.react-datepicker__focusTrap {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
          justify-content: center; }

.react-datepicker__month-container {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  margin-top: 36px; }

.react-datepicker__header {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column; }

.react-datepicker-time__header {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important; }

.react-datepicker__month {
  text-align: center;
  border-radius: 6px; }

@media only screen and (max-width: 574px) {
  .react-datepicker__focusTrap,
  .react-datepicker {
    -webkit-flex-direction: column;
            flex-direction: column; }
  .react-datepicker__time-box {
    margin-top: 0; } }

.euiAccordionForm__extraAction {
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiAccordionForm__extraAction:focus {
    opacity: 1; }

.euiAccordionForm__title {
  display: inline-block; }

.euiAccordionForm__button {
  padding: 16px 16px 16px 0; }
  .euiAccordionForm__button:hover {
    text-decoration: none; }
    .euiAccordionForm__button:hover .euiAccordionForm__title {
      text-decoration: underline; }

.euiAccordionForm {
  border-top: 1px solid #D3DAE6;
  border-bottom: 1px solid #D3DAE6; }
  .euiAccordionForm + .euiAccordionForm {
    border-top: none; }
  .euiAccordionForm:hover .euiAccordionForm__extraAction {
    opacity: 1;
    visibility: visible; }

/**
 * 1. Accounts for the border
 */
.euiBadge {
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  /* 1 */
  padding: 0 8px;
  display: inline-block;
  text-decoration: none;
  border-radius: 3px;
  border: solid 1px transparent;
  background-color: transparent;
  white-space: nowrap;
  vertical-align: middle;
  cursor: default;
  max-width: 100%;
  text-align: left; }
  .euiBadge.euiBadge-isDisabled {
    color: #717782 !important;
    background-color: #ABB4C4 !important; }
  .euiBadge:focus-within {
    outline: 2px solid currentColor; }
    .euiBadge:focus-within:focus-visible {
      outline-style: auto; }
    .euiBadge:focus-within:not(:focus-visible) {
      outline: none; }
  .euiBadge + .euiBadge {
    margin-left: 4px; }
  .euiBadge .euiBadge__content {
    min-height: 18px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
            align-items: center;
    overflow: hidden; }
  .euiBadge .euiBadge__childButton {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
    text-align: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit; }
    .euiBadge .euiBadge__childButton:disabled {
      cursor: not-allowed; }
    .euiBadge .euiBadge__childButton:not(:disabled):hover, .euiBadge .euiBadge__childButton:not(:disabled):focus {
      text-decoration: underline; }
  .euiBadge .euiBadge__iconButton {
    -webkit-flex: 0 0 auto;
            flex: 0 0 auto;
    font-size: 0;
    margin-left: 4px; }
    .euiBadge .euiBadge__iconButton:focus {
      background-color: rgba(255, 255, 255, 0.8);
      color: #000;
      border-radius: 2px; }
    .euiBadge .euiBadge__iconButton:disabled {
      cursor: not-allowed; }
    .euiBadge .euiBadge__iconButton .euiBadge__icon {
      margin: 0 !important; }
  .euiBadge .euiBadge__text {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
    cursor: default; }
  .euiBadge .euiBadge__icon {
    -webkit-flex: 0 0 auto;
            flex: 0 0 auto; }
    .euiBadge .euiBadge__icon:not(:only-child) {
      margin-left: 4px; }
  .euiBadge.euiBadge--iconLeft .euiBadge__content {
    -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse; }
  .euiBadge.euiBadge--iconLeft .euiBadge__iconButton,
  .euiBadge.euiBadge--iconLeft .euiBadge__icon:not(:only-child) {
    margin-right: 4px;
    margin-left: 0; }

.euiBadge-isClickable:not(:disabled):hover, .euiBadge-isClickable:not(:disabled):focus {
  text-decoration: underline; }

.euiBadge-isClickable.euiBadge-isDisabled {
  cursor: not-allowed; }

.euiBadge-isClickable:focus {
  outline: 2px solid currentColor; }
  .euiBadge-isClickable:focus:focus-visible {
    outline-style: auto; }
  .euiBadge-isClickable:focus:not(:focus-visible) {
    outline: none; }

.euiBadge-isClickable .euiBadge__text {
  cursor: inherit; }

.euiBadge--hollow {
  background-color: #FFF;
  border-color: #D3DAE6;
  color: #343741; }

.euiBadgeGroup__item {
  display: inline-block;
  max-width: 100%; }

.euiBadgeGroup--gutterExtraSmall {
  margin: -2px; }
  .euiBadgeGroup--gutterExtraSmall > .euiBadgeGroup__item {
    margin: 2px;
    max-width: calc(100% - 4px); }

.euiBadgeGroup--gutterSmall {
  margin: -4px; }
  .euiBadgeGroup--gutterSmall > .euiBadgeGroup__item {
    margin: 4px;
    max-width: calc(100% - 8px); }

.euiBetaBadge {
  display: inline-block;
  padding: 0 16px;
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #D3DAE6;
  vertical-align: super;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  cursor: default; }
  .euiBetaBadge:focus {
    outline: 2px solid currentColor;
    outline-color: #000;
    outline-offset: 2px; }
    .euiBetaBadge:focus:focus-visible {
      outline-style: auto; }
    .euiBetaBadge:focus:not(:focus-visible) {
      outline: none; }
  .euiBetaBadge:not(.euiBetaBadge--hollow) {
    box-shadow: none; }
  .euiBetaBadge.euiBetaBadge--small {
    font-size: 8.75px;
    font-size: 0.625rem;
    line-height: 20px;
    padding: 0 12px; }

.euiBetaBadge--iconOnly {
  padding: 0;
  width: 24px; }
  .euiBetaBadge--iconOnly .euiBetaBadge__icon {
    position: relative;
    -webkit-transform: translate(0, -1px);
            transform: translate(0, -1px); }
  .euiBetaBadge--iconOnly.euiBetaBadge--small {
    width: 20px;
    padding: 0; }

.euiBetaBadge--singleLetter {
  padding: 0;
  width: 24px; }
  .euiBetaBadge--singleLetter.euiBetaBadge--small {
    width: 20px;
    padding: 0; }

.euiBetaBadge--subdued {
  background: #e0e5ee;
  color: #000; }
  .euiBetaBadge--subdued.euiBetaBadge-isClickable {
    color: #000; }

.euiBetaBadge--hollow.euiBetaBadge-isClickable {
  color: #000; }

.euiBetaBadge--accent {
  background: #c4407c;
  color: #FFF; }
  .euiBetaBadge--accent.euiBetaBadge-isClickable {
    color: #FFF; }

.euiNotificationBadge {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  display: inline-block;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  height: 16px;
  min-width: 16px;
  padding-left: 4px;
  padding-right: 4px;
  vertical-align: middle;
  text-align: center;
  transition: all 150ms ease-in;
  cursor: default;
  background: #c4407c;
  color: #FFF; }

.euiNotificationBadge--medium {
  line-height: 20px;
  height: 20px;
  min-width: 24px; }

.euiNotificationBadge--subdued {
  background: #e0e5ee;
  color: #000; }

.euiBasicTable-loading {
  position: relative; }
  .euiBasicTable-loading tbody {
    overflow: hidden; }
  .euiBasicTable-loading tbody:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #07C;
    -webkit-animation: euiBasicTableLoading 1000ms linear;
            animation: euiBasicTableLoading 1000ms linear;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite; }

@-webkit-keyframes euiBasicTableLoading {
  from {
    left: 0;
    width: 0; }
  20% {
    left: 0;
    width: 40%; }
  80% {
    left: 60%;
    width: 40%; }
  100% {
    left: 100%;
    width: 0; } }

@keyframes euiBasicTableLoading {
  from {
    left: 0;
    width: 0; }
  20% {
    left: 0;
    width: 40%; }
  80% {
    left: 60%;
    width: 40%; }
  100% {
    left: 100%;
    width: 0; } }

.euiButton {
  display: inline-block;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  text-align: center;
  white-space: nowrap;
  max-width: 100%;
  vertical-align: middle;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;
  outline-offset: -1px;
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  min-width: 112px; }
  @media screen and (prefers-reduced-motion: no-preference) {
    .euiButton {
      transition: background 250ms ease-in-out, -webkit-transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out, -webkit-transform 250ms ease-in-out; }
      .euiButton:hover:not([class*='isDisabled']) {
        -webkit-transform: translateY(-1px);
                transform: translateY(-1px); }
      .euiButton:focus {
        -webkit-animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
                animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1); }
      .euiButton:active:not([class*='isDisabled']) {
        -webkit-transform: translateY(1px);
                transform: translateY(1px); } }
  .euiButton:hover:not([class*='isDisabled']), .euiButton:focus {
    text-decoration: underline; }
  .euiButton .euiButton__content {
    padding: 0 12px; }
  .euiButton .euiButton__text {
    text-overflow: ellipsis;
    overflow: hidden; }
  .euiButton.euiButton--small {
    height: 32px;
    line-height: 32px; }
  .euiButton:hover, .euiButton:active {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05); }
  .euiButton:not([class*='isDisabled']):hover, .euiButton:not([class*='isDisabled']):focus, .euiButton:not([class*='isDisabled']):focus-within {
    background-color: rgba(0, 119, 204, 0.1); }
  .euiButton.euiButton-isDisabled {
    pointer-events: auto;
    cursor: not-allowed;
    color: #ABB4C4;
    border-color: #ABB4C4; }
    .euiButton.euiButton-isDisabled .euiButtonContent__icon {
      fill: currentColor; }
    .euiButton.euiButton-isDisabled .euiButtonContent__spinner {
      border-color: #07C currentColor currentColor currentColor; }
    .euiButton.euiButton-isDisabled.euiButton--fill {
      color: #717782;
      background-color: #ABB4C4;
      border-color: #ABB4C4; }
      .euiButton.euiButton-isDisabled.euiButton--fill:hover, .euiButton.euiButton-isDisabled.euiButton--fill:focus, .euiButton.euiButton-isDisabled.euiButton--fill:focus-within {
        background-color: #ABB4C4;
        border-color: #ABB4C4; }
    .euiButton.euiButton-isDisabled:hover, .euiButton.euiButton-isDisabled:focus, .euiButton.euiButton-isDisabled:focus-within {
      box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
      text-decoration: none; }

.euiButton--primary {
  color: #0071c2;
  border-color: #07C; }
  .euiButton--primary.euiButton--fill {
    background-color: #07C;
    border-color: #07C;
    color: #FFF; }
    .euiButton--primary.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--primary.euiButton--fill:not([class*='isDisabled']):focus, .euiButton--primary.euiButton--fill:not([class*='isDisabled']):focus-within {
      background-color: #0068b3;
      border-color: #0068b3; }
  .euiButton--primary:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(61, 109, 143, 0.04), 0 2.3px 2px rgba(61, 109, 143, 0.03); }
    .euiButton--primary:not([class*='isDisabled']):hover, .euiButton--primary:not([class*='isDisabled']):focus, .euiButton--primary:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(61, 109, 143, 0.1), 0 3.6px 13px rgba(61, 109, 143, 0.07), 0 8.4px 23px rgba(61, 109, 143, 0.06), 0 23px 35px rgba(61, 109, 143, 0.05);
      background-color: rgba(0, 119, 204, 0.1); }

.euiButton--accent {
  color: #c4407c;
  border-color: #F04E98; }
  .euiButton--accent.euiButton--fill {
    background-color: #F04E98;
    border-color: #F04E98;
    color: #000; }
    .euiButton--accent.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--accent.euiButton--fill:not([class*='isDisabled']):focus, .euiButton--accent.euiButton--fill:not([class*='isDisabled']):focus-within {
      background-color: #ee368a;
      border-color: #ee368a; }
  .euiButton--accent:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(182, 136, 157, 0.04), 0 2.3px 2px rgba(182, 136, 157, 0.03); }
    .euiButton--accent:not([class*='isDisabled']):hover, .euiButton--accent:not([class*='isDisabled']):focus, .euiButton--accent:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(182, 136, 157, 0.1), 0 3.6px 13px rgba(182, 136, 157, 0.07), 0 8.4px 23px rgba(182, 136, 157, 0.06), 0 23px 35px rgba(182, 136, 157, 0.05);
      background-color: rgba(240, 78, 152, 0.1); }

.euiButton--success {
  color: #007e77;
  border-color: #00BFB3; }
  .euiButton--success.euiButton--fill {
    background-color: #00BFB3;
    border-color: #00BFB3;
    color: #000; }
    .euiButton--success.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--success.euiButton--fill:not([class*='isDisabled']):focus, .euiButton--success.euiButton--fill:not([class*='isDisabled']):focus-within {
      background-color: #00a69b;
      border-color: #00a69b; }
  .euiButton--success:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(57, 134, 129, 0.04), 0 2.3px 2px rgba(57, 134, 129, 0.03); }
    .euiButton--success:not([class*='isDisabled']):hover, .euiButton--success:not([class*='isDisabled']):focus, .euiButton--success:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(57, 134, 129, 0.1), 0 3.6px 13px rgba(57, 134, 129, 0.07), 0 8.4px 23px rgba(57, 134, 129, 0.06), 0 23px 35px rgba(57, 134, 129, 0.05);
      background-color: rgba(0, 191, 179, 0.1); }

.euiButton--warning {
  color: #8a6a0a;
  border-color: #FEC514; }
  .euiButton--warning.euiButton--fill {
    background-color: #FEC514;
    border-color: #FEC514;
    color: #000; }
    .euiButton--warning.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--warning.euiButton--fill:not([class*='isDisabled']):focus, .euiButton--warning.euiButton--fill:not([class*='isDisabled']):focus-within {
      background-color: #f7bb01;
      border-color: #f7bb01; }
  .euiButton--warning:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(183, 161, 91, 0.04), 0 2.3px 2px rgba(183, 161, 91, 0.03); }
    .euiButton--warning:not([class*='isDisabled']):hover, .euiButton--warning:not([class*='isDisabled']):focus, .euiButton--warning:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(183, 161, 91, 0.1), 0 3.6px 13px rgba(183, 161, 91, 0.07), 0 8.4px 23px rgba(183, 161, 91, 0.06), 0 23px 35px rgba(183, 161, 91, 0.05);
      background-color: rgba(254, 197, 20, 0.1); }

.euiButton--danger {
  color: #BD271E;
  border-color: #BD271E; }
  .euiButton--danger.euiButton--fill {
    background-color: #BD271E;
    border-color: #BD271E;
    color: #FFF; }
    .euiButton--danger.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--danger.euiButton--fill:not([class*='isDisabled']):focus, .euiButton--danger.euiButton--fill:not([class*='isDisabled']):focus-within {
      background-color: #a7221b;
      border-color: #a7221b; }
  .euiButton--danger:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(123, 97, 96, 0.04), 0 2.3px 2px rgba(123, 97, 96, 0.03); }
    .euiButton--danger:not([class*='isDisabled']):hover, .euiButton--danger:not([class*='isDisabled']):focus, .euiButton--danger:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(123, 97, 96, 0.1), 0 3.6px 13px rgba(123, 97, 96, 0.07), 0 8.4px 23px rgba(123, 97, 96, 0.06), 0 23px 35px rgba(123, 97, 96, 0.05);
      background-color: rgba(189, 39, 30, 0.1); }

.euiButton--ghost {
  color: #FFF;
  border-color: #FFF; }
  .euiButton--ghost.euiButton--fill {
    background-color: #FFF;
    border-color: #FFF;
    color: #000; }
    .euiButton--ghost.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--ghost.euiButton--fill:not([class*='isDisabled']):focus, .euiButton--ghost.euiButton--fill:not([class*='isDisabled']):focus-within {
      background-color: #f2f2f2;
      border-color: #f2f2f2; }
  .euiButton--ghost:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03); }
    .euiButton--ghost:not([class*='isDisabled']):hover, .euiButton--ghost:not([class*='isDisabled']):focus, .euiButton--ghost:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
      background-color: rgba(255, 255, 255, 0.1); }

.euiButton--text {
  color: #343741;
  border-color: #69707D; }
  .euiButton--text.euiButton--fill {
    background-color: #69707D;
    border-color: #69707D;
    color: #FFF; }
    .euiButton--text.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--text.euiButton--fill:not([class*='isDisabled']):focus, .euiButton--text.euiButton--fill:not([class*='isDisabled']):focus-within {
      background-color: #5d646f;
      border-color: #5d646f; }
  .euiButton--text:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(115, 115, 115, 0.04), 0 2.3px 2px rgba(115, 115, 115, 0.03); }
    .euiButton--text:not([class*='isDisabled']):hover, .euiButton--text:not([class*='isDisabled']):focus, .euiButton--text:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(115, 115, 115, 0.1), 0 3.6px 13px rgba(115, 115, 115, 0.07), 0 8.4px 23px rgba(115, 115, 115, 0.06), 0 23px 35px rgba(115, 115, 115, 0.05);
      background-color: rgba(105, 112, 125, 0.1); }

.euiButton.euiButton-isDisabled.euiButton--ghost, .euiButton.euiButton-isDisabled.euiButton--ghost:hover, .euiButton.euiButton-isDisabled.euiButton--ghost:focus, .euiButton.euiButton-isDisabled.euiButton--ghost:focus-within {
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
  color: #69707D;
  border-color: #69707D; }

.euiButton.euiButton-isDisabled.euiButton--ghost.euiButton--fill {
  background-color: #69707D;
  color: #a1a5ae; }

.euiButton--fullWidth {
  display: block;
  width: 100%; }

.euiButtonContent {
  height: 100%;
  width: 100%;
  vertical-align: middle;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: center;
          align-items: center; }
  .euiButtonContent .euiButtonContent__icon,
  .euiButtonContent .euiButtonContent__spinner {
    -webkit-flex-shrink: 0;
            flex-shrink: 0; }
  .euiButtonContent > * + * {
    -webkit-margin-start: 8px;
            margin-inline-start: 8px; }

.euiButtonContent--iconRight {
  height: 100%;
  width: 100%;
  vertical-align: middle;
  -webkit-flex-direction: row-reverse;
          flex-direction: row-reverse; }
  .euiButtonContent--iconRight .euiButtonContent__icon,
  .euiButtonContent--iconRight .euiButtonContent__spinner {
    -webkit-flex-shrink: 0;
            flex-shrink: 0; }
  .euiButtonContent--iconRight > * + * {
    -webkit-margin-start: 0;
            margin-inline-start: 0;
    -webkit-margin-end: 8px;
            margin-inline-end: 8px; }

/**
 * 1. We don't want any of the animations that come inherited from the mixin.
 *    These should act like normal links instead.
 * 2. Change the easing, quickness to not bounce so lighter backgrounds don't flash
 */
.euiButtonEmpty {
  display: inline-block;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  text-align: center;
  white-space: nowrap;
  max-width: 100%;
  vertical-align: middle;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;
  outline-offset: -1px;
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
  -webkit-transform: none !important;
          transform: none !important;
  /* 1 */
  -webkit-animation: none !important;
          animation: none !important;
  /* 1 */
  transition-timing-function: ease-in;
  /* 2 */
  transition-duration: 150ms;
  /* 2 */ }
  @media screen and (prefers-reduced-motion: no-preference) {
    .euiButtonEmpty {
      transition: background 250ms ease-in-out, -webkit-transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out, -webkit-transform 250ms ease-in-out; }
      .euiButtonEmpty:hover:not([class*='isDisabled']) {
        -webkit-transform: translateY(-1px);
                transform: translateY(-1px); }
      .euiButtonEmpty:focus {
        -webkit-animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
                animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1); }
      .euiButtonEmpty:active:not([class*='isDisabled']) {
        -webkit-transform: translateY(1px);
                transform: translateY(1px); } }
  .euiButtonEmpty:hover:not([class*='isDisabled']), .euiButtonEmpty:focus {
    text-decoration: underline; }
  .euiButtonEmpty .euiButtonEmpty__content {
    padding: 0 8px; }
  .euiButtonEmpty .euiButtonEmpty__text {
    text-overflow: ellipsis;
    overflow: hidden; }
  .euiButtonEmpty.euiButtonEmpty--small {
    height: 32px; }
  .euiButtonEmpty.euiButtonEmpty--xSmall {
    height: 24px;
    font-size: 14px; }
  .euiButtonEmpty:disabled {
    pointer-events: auto;
    cursor: not-allowed;
    color: #ABB4C4; }
    .euiButtonEmpty:disabled .euiButtonContent__icon {
      fill: currentColor; }
    .euiButtonEmpty:disabled .euiButtonContent__spinner {
      border-color: #07C currentColor currentColor currentColor; }
    .euiButtonEmpty:disabled:focus {
      background-color: transparent; }
    .euiButtonEmpty:disabled:hover, .euiButtonEmpty:disabled:focus {
      text-decoration: none; }

.euiButtonEmpty--flushLeft .euiButtonEmpty__content,
.euiButtonEmpty--flushRight .euiButtonEmpty__content,
.euiButtonEmpty--flushBoth .euiButtonEmpty__content {
  padding-left: 0;
  padding-right: 0; }

.euiButtonEmpty--flushLeft {
  margin-right: 8px; }

.euiButtonEmpty--flushRight {
  margin-left: 8px; }

.euiButtonEmpty--primary {
  color: #0071c2; }
  .euiButtonEmpty--primary:focus {
    background-color: rgba(0, 113, 194, 0.1); }

.euiButtonEmpty--danger {
  color: #BD271E; }
  .euiButtonEmpty--danger:focus {
    background-color: rgba(189, 39, 30, 0.1); }

.euiButtonEmpty--disabled {
  color: #717782; }
  .euiButtonEmpty--disabled:focus {
    background-color: rgba(171, 180, 196, 0.1); }
  .euiButtonEmpty--disabled:hover {
    cursor: not-allowed; }

.euiButtonEmpty--ghost {
  color: #FFF; }
  .euiButtonEmpty--ghost:focus {
    background-color: rgba(255, 255, 255, 0.1); }

.euiButtonEmpty--text {
  color: #343741; }
  .euiButtonEmpty--text:focus {
    background-color: rgba(52, 55, 65, 0.1); }

.euiButtonEmpty--success {
  color: #007e77; }
  .euiButtonEmpty--success:focus {
    background-color: rgba(0, 126, 119, 0.1); }

.euiButtonEmpty--warning {
  color: #8a6a0a; }
  .euiButtonEmpty--warning:focus {
    background-color: rgba(138, 106, 10, 0.1); }

.euiButtonIcon {
  display: inline-block;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  text-align: center;
  white-space: nowrap;
  max-width: 100%;
  vertical-align: middle;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;
  outline-offset: -1px;
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  width: 40px;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: space-around;
          justify-content: space-around; }
  @media screen and (prefers-reduced-motion: no-preference) {
    .euiButtonIcon {
      transition: background 250ms ease-in-out, -webkit-transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out;
      transition: transform 250ms ease-in-out, background 250ms ease-in-out, -webkit-transform 250ms ease-in-out; }
      .euiButtonIcon:hover:not([class*='isDisabled']) {
        -webkit-transform: translateY(-1px);
                transform: translateY(-1px); }
      .euiButtonIcon:focus {
        -webkit-animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
                animation: euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1); }
      .euiButtonIcon:active:not([class*='isDisabled']) {
        -webkit-transform: translateY(1px);
                transform: translateY(1px); } }
  .euiButtonIcon:hover:not([class*='isDisabled']), .euiButtonIcon:focus {
    text-decoration: underline; }
  .euiButtonIcon > svg {
    pointer-events: none; }
  .euiButtonIcon.euiButtonIcon--empty {
    box-shadow: none !important;
    border: none; }
  .euiButtonIcon.euiButtonIcon-isDisabled {
    pointer-events: auto;
    cursor: not-allowed;
    color: #ABB4C4;
    border-color: #ABB4C4; }
    .euiButtonIcon.euiButtonIcon-isDisabled .euiButtonContent__icon {
      fill: currentColor; }
    .euiButtonIcon.euiButtonIcon-isDisabled .euiButtonContent__spinner {
      border-color: #07C currentColor currentColor currentColor; }
    .euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--fill {
      color: #717782;
      background-color: #ABB4C4;
      border-color: #ABB4C4; }
      .euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--fill:hover, .euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--fill:focus, .euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--fill:focus-within {
        background-color: #ABB4C4;
        border-color: #ABB4C4; }
    .euiButtonIcon.euiButtonIcon-isDisabled:hover, .euiButtonIcon.euiButtonIcon-isDisabled:focus, .euiButtonIcon.euiButtonIcon-isDisabled:focus-within {
      box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
      text-decoration: none; }

.euiButtonIcon--xSmall {
  height: 24px;
  width: 24px; }

.euiButtonIcon--small {
  height: 32px;
  width: 32px; }

.euiButtonIcon--primary {
  color: #0071c2;
  border-color: #07C; }
  .euiButtonIcon--primary.euiButtonIcon--fill {
    background-color: #07C;
    border-color: #07C;
    color: #FFF; }
    .euiButtonIcon--primary.euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--primary.euiButtonIcon--fill:not([class*='isDisabled']):focus, .euiButtonIcon--primary.euiButtonIcon--fill:not([class*='isDisabled']):focus-within {
      background-color: #0068b3;
      border-color: #0068b3; }
  .euiButtonIcon--primary:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(61, 109, 143, 0.04), 0 2.3px 2px rgba(61, 109, 143, 0.03); }
    .euiButtonIcon--primary:not([class*='isDisabled']):hover, .euiButtonIcon--primary:not([class*='isDisabled']):focus, .euiButtonIcon--primary:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(61, 109, 143, 0.1), 0 3.6px 13px rgba(61, 109, 143, 0.07), 0 8.4px 23px rgba(61, 109, 143, 0.06), 0 23px 35px rgba(61, 109, 143, 0.05);
      background-color: rgba(0, 119, 204, 0.1); }

.euiButtonIcon--accent {
  color: #c4407c;
  border-color: #F04E98; }
  .euiButtonIcon--accent.euiButtonIcon--fill {
    background-color: #F04E98;
    border-color: #F04E98;
    color: #000; }
    .euiButtonIcon--accent.euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--accent.euiButtonIcon--fill:not([class*='isDisabled']):focus, .euiButtonIcon--accent.euiButtonIcon--fill:not([class*='isDisabled']):focus-within {
      background-color: #ee368a;
      border-color: #ee368a; }
  .euiButtonIcon--accent:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(182, 136, 157, 0.04), 0 2.3px 2px rgba(182, 136, 157, 0.03); }
    .euiButtonIcon--accent:not([class*='isDisabled']):hover, .euiButtonIcon--accent:not([class*='isDisabled']):focus, .euiButtonIcon--accent:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(182, 136, 157, 0.1), 0 3.6px 13px rgba(182, 136, 157, 0.07), 0 8.4px 23px rgba(182, 136, 157, 0.06), 0 23px 35px rgba(182, 136, 157, 0.05);
      background-color: rgba(240, 78, 152, 0.1); }

.euiButtonIcon--success {
  color: #007e77;
  border-color: #00BFB3; }
  .euiButtonIcon--success.euiButtonIcon--fill {
    background-color: #00BFB3;
    border-color: #00BFB3;
    color: #000; }
    .euiButtonIcon--success.euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--success.euiButtonIcon--fill:not([class*='isDisabled']):focus, .euiButtonIcon--success.euiButtonIcon--fill:not([class*='isDisabled']):focus-within {
      background-color: #00a69b;
      border-color: #00a69b; }
  .euiButtonIcon--success:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(57, 134, 129, 0.04), 0 2.3px 2px rgba(57, 134, 129, 0.03); }
    .euiButtonIcon--success:not([class*='isDisabled']):hover, .euiButtonIcon--success:not([class*='isDisabled']):focus, .euiButtonIcon--success:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(57, 134, 129, 0.1), 0 3.6px 13px rgba(57, 134, 129, 0.07), 0 8.4px 23px rgba(57, 134, 129, 0.06), 0 23px 35px rgba(57, 134, 129, 0.05);
      background-color: rgba(0, 191, 179, 0.1); }

.euiButtonIcon--warning {
  color: #8a6a0a;
  border-color: #FEC514; }
  .euiButtonIcon--warning.euiButtonIcon--fill {
    background-color: #FEC514;
    border-color: #FEC514;
    color: #000; }
    .euiButtonIcon--warning.euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--warning.euiButtonIcon--fill:not([class*='isDisabled']):focus, .euiButtonIcon--warning.euiButtonIcon--fill:not([class*='isDisabled']):focus-within {
      background-color: #f7bb01;
      border-color: #f7bb01; }
  .euiButtonIcon--warning:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(183, 161, 91, 0.04), 0 2.3px 2px rgba(183, 161, 91, 0.03); }
    .euiButtonIcon--warning:not([class*='isDisabled']):hover, .euiButtonIcon--warning:not([class*='isDisabled']):focus, .euiButtonIcon--warning:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(183, 161, 91, 0.1), 0 3.6px 13px rgba(183, 161, 91, 0.07), 0 8.4px 23px rgba(183, 161, 91, 0.06), 0 23px 35px rgba(183, 161, 91, 0.05);
      background-color: rgba(254, 197, 20, 0.1); }

.euiButtonIcon--danger {
  color: #BD271E;
  border-color: #BD271E; }
  .euiButtonIcon--danger.euiButtonIcon--fill {
    background-color: #BD271E;
    border-color: #BD271E;
    color: #FFF; }
    .euiButtonIcon--danger.euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--danger.euiButtonIcon--fill:not([class*='isDisabled']):focus, .euiButtonIcon--danger.euiButtonIcon--fill:not([class*='isDisabled']):focus-within {
      background-color: #a7221b;
      border-color: #a7221b; }
  .euiButtonIcon--danger:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(123, 97, 96, 0.04), 0 2.3px 2px rgba(123, 97, 96, 0.03); }
    .euiButtonIcon--danger:not([class*='isDisabled']):hover, .euiButtonIcon--danger:not([class*='isDisabled']):focus, .euiButtonIcon--danger:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(123, 97, 96, 0.1), 0 3.6px 13px rgba(123, 97, 96, 0.07), 0 8.4px 23px rgba(123, 97, 96, 0.06), 0 23px 35px rgba(123, 97, 96, 0.05);
      background-color: rgba(189, 39, 30, 0.1); }

.euiButtonIcon--ghost {
  color: #FFF;
  border-color: #FFF; }
  .euiButtonIcon--ghost.euiButtonIcon--fill {
    background-color: #FFF;
    border-color: #FFF;
    color: #000; }
    .euiButtonIcon--ghost.euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--ghost.euiButtonIcon--fill:not([class*='isDisabled']):focus, .euiButtonIcon--ghost.euiButtonIcon--fill:not([class*='isDisabled']):focus-within {
      background-color: #f2f2f2;
      border-color: #f2f2f2; }
  .euiButtonIcon--ghost:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03); }
    .euiButtonIcon--ghost:not([class*='isDisabled']):hover, .euiButtonIcon--ghost:not([class*='isDisabled']):focus, .euiButtonIcon--ghost:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
      background-color: rgba(255, 255, 255, 0.1); }

.euiButtonIcon--text {
  color: #343741;
  border-color: #69707D; }
  .euiButtonIcon--text.euiButtonIcon--fill {
    background-color: #69707D;
    border-color: #69707D;
    color: #FFF; }
    .euiButtonIcon--text.euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--text.euiButtonIcon--fill:not([class*='isDisabled']):focus, .euiButtonIcon--text.euiButtonIcon--fill:not([class*='isDisabled']):focus-within {
      background-color: #5d646f;
      border-color: #5d646f; }
  .euiButtonIcon--text:not([class*='isDisabled']) {
    box-shadow: 0 0.8px 0.8px rgba(115, 115, 115, 0.04), 0 2.3px 2px rgba(115, 115, 115, 0.03); }
    .euiButtonIcon--text:not([class*='isDisabled']):hover, .euiButtonIcon--text:not([class*='isDisabled']):focus, .euiButtonIcon--text:not([class*='isDisabled']):focus-within {
      box-shadow: 0 1px 5px rgba(115, 115, 115, 0.1), 0 3.6px 13px rgba(115, 115, 115, 0.07), 0 8.4px 23px rgba(115, 115, 115, 0.06), 0 23px 35px rgba(115, 115, 115, 0.05);
      background-color: rgba(105, 112, 125, 0.1); }

.euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--ghost, .euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--ghost:hover, .euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--ghost:focus, .euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--ghost:focus-within {
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
  color: #69707D;
  border-color: #69707D; }

.euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--ghost.euiButton--fill {
  background-color: #69707D;
  color: #a1a5ae; }

.euiButtonGroup {
  display: inline-block;
  max-width: 100%;
  position: relative; }

.euiButtonGroup--fullWidth {
  display: block; }
  .euiButtonGroup--fullWidth .euiButtonGroup__buttons {
    width: 100%; }
    .euiButtonGroup--fullWidth .euiButtonGroup__buttons .euiButtonGroupButton {
      -webkit-flex: 1;
              flex: 1; }

.euiButtonGroup__buttons {
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
  border-radius: 7px;
  max-width: 100%;
  display: -webkit-flex;
  display: flex;
  overflow: hidden; }

.euiButtonGroup--isDisabled .euiButtonGroup__buttons {
  box-shadow: none; }

.euiButtonGroup--compressed .euiButtonGroup__buttons {
  box-shadow: none !important;
  border-radius: 4px;
  background-color: #fbfcfd;
  height: 32px;
  border: 1px solid rgba(17, 43, 134, 0.1);
  overflow: visible; }

.euiButtonGroupButton {
  display: inline-block;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  text-align: center;
  white-space: nowrap;
  max-width: 100%;
  vertical-align: middle;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out, color 250ms ease-in-out;
  min-width: 0;
  -webkit-flex-shrink: 1;
          flex-shrink: 1;
  -webkit-flex-grow: 0;
          flex-grow: 0; }
  .euiButtonGroupButton .euiButton__content {
    padding: 0 12px; }
  .euiButtonGroupButton-isIconOnly .euiButton__content {
    padding: 0 8px; }
  .euiButtonGroupButton .euiButton__text {
    text-overflow: ellipsis;
    overflow: hidden; }
  .euiButtonGroupButton.euiButtonGroupButton--small {
    height: 32px;
    line-height: 32px; }
  .euiButtonGroupButton:not([class*='isDisabled']):hover, .euiButtonGroupButton:not([class*='isDisabled']):focus, .euiButtonGroupButton:not([class*='isDisabled']):focus-within {
    background-color: rgba(0, 119, 204, 0.1);
    text-decoration: underline; }
  .euiButtonGroupButton.euiButtonGroupButton-isDisabled {
    pointer-events: auto;
    cursor: not-allowed;
    color: #ABB4C4; }
    .euiButtonGroupButton.euiButtonGroupButton-isDisabled .euiButtonContent__icon {
      fill: currentColor; }
    .euiButtonGroupButton.euiButtonGroupButton-isDisabled .euiButtonContent__spinner {
      border-color: #07C currentColor currentColor currentColor; }
    .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton-isSelected {
      color: #717782;
      background-color: #ABB4C4;
      border-color: #ABB4C4; }
      .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton-isSelected:focus-within {
        background-color: #ABB4C4;
        border-color: #ABB4C4; }
  .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']) {
    color: #0071c2; }
    .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']).euiButtonGroupButton-isSelected {
      background-color: #07C;
      border-color: #07C;
      color: #FFF; }
      .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']).euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus-within {
        background-color: #0068b3;
        border-color: #0068b3; }
    .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']):hover, .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']):focus, .euiButtonGroupButton.euiButtonGroupButton--primary:not([class*='isDisabled']):focus-within {
      background-color: rgba(0, 119, 204, 0.1); }
  .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']) {
    color: #c4407c; }
    .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']).euiButtonGroupButton-isSelected {
      background-color: #F04E98;
      border-color: #F04E98;
      color: #000; }
      .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']).euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus-within {
        background-color: #ee368a;
        border-color: #ee368a; }
    .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']):hover, .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']):focus, .euiButtonGroupButton.euiButtonGroupButton--accent:not([class*='isDisabled']):focus-within {
      background-color: rgba(240, 78, 152, 0.1); }
  .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']) {
    color: #007e77; }
    .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']).euiButtonGroupButton-isSelected {
      background-color: #00BFB3;
      border-color: #00BFB3;
      color: #000; }
      .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']).euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus-within {
        background-color: #00a69b;
        border-color: #00a69b; }
    .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']):hover, .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']):focus, .euiButtonGroupButton.euiButtonGroupButton--success:not([class*='isDisabled']):focus-within {
      background-color: rgba(0, 191, 179, 0.1); }
  .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']) {
    color: #8a6a0a; }
    .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']).euiButtonGroupButton-isSelected {
      background-color: #FEC514;
      border-color: #FEC514;
      color: #000; }
      .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']).euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus-within {
        background-color: #f7bb01;
        border-color: #f7bb01; }
    .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']):hover, .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']):focus, .euiButtonGroupButton.euiButtonGroupButton--warning:not([class*='isDisabled']):focus-within {
      background-color: rgba(254, 197, 20, 0.1); }
  .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']) {
    color: #BD271E; }
    .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']).euiButtonGroupButton-isSelected {
      background-color: #BD271E;
      border-color: #BD271E;
      color: #FFF; }
      .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']).euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus-within {
        background-color: #a7221b;
        border-color: #a7221b; }
    .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']):hover, .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']):focus, .euiButtonGroupButton.euiButtonGroupButton--danger:not([class*='isDisabled']):focus-within {
      background-color: rgba(189, 39, 30, 0.1); }
  .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']) {
    color: #FFF; }
    .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']).euiButtonGroupButton-isSelected {
      background-color: #FFF;
      border-color: #FFF;
      color: #000; }
      .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']).euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus-within {
        background-color: #f2f2f2;
        border-color: #f2f2f2; }
    .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']):hover, .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']):focus, .euiButtonGroupButton.euiButtonGroupButton--ghost:not([class*='isDisabled']):focus-within {
      background-color: rgba(255, 255, 255, 0.1); }
  .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']) {
    color: #343741; }
    .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']).euiButtonGroupButton-isSelected {
      background-color: #69707D;
      border-color: #69707D;
      color: #FFF; }
      .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']).euiButtonGroupButton-isSelected:hover, .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus, .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']).euiButtonGroupButton-isSelected:focus-within {
        background-color: #5d646f;
        border-color: #5d646f; }
    .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']):hover, .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']):focus, .euiButtonGroupButton.euiButtonGroupButton--text:not([class*='isDisabled']):focus-within {
      background-color: rgba(105, 112, 125, 0.1); }

.euiButtonGroupButton__textShift::after {
  display: block;
  content: attr(data-text);
  font-weight: 700;
  height: 0;
  overflow: hidden;
  visibility: hidden; }

/**
 * Medium and Small sizing (regular button style)
 */
.euiButtonGroup--medium .euiButtonGroupButton,
.euiButtonGroup--small .euiButtonGroupButton {
  border: 1px solid #D3DAE6; }
  .euiButtonGroup--medium .euiButtonGroupButton:not(:first-child),
  .euiButtonGroup--small .euiButtonGroupButton:not(:first-child) {
    margin-left: -1px; }
  .euiButtonGroup--medium .euiButtonGroupButton:first-child,
  .euiButtonGroup--small .euiButtonGroupButton:first-child {
    border-radius: 6px 0 0 6px; }
  .euiButtonGroup--medium .euiButtonGroupButton:last-child,
  .euiButtonGroup--small .euiButtonGroupButton:last-child {
    border-radius: 0 6px 6px 0; }

.euiButtonGroup--medium .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost, .euiButtonGroup--medium .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:hover, .euiButtonGroup--medium .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:focus, .euiButtonGroup--medium .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:focus-within,
.euiButtonGroup--small .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost,
.euiButtonGroup--small .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:hover,
.euiButtonGroup--small .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:focus,
.euiButtonGroup--small .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:focus-within {
  color: #69707D; }

.euiButtonGroup--isDisabled .euiButtonGroup--medium .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost, .euiButtonGroup--isDisabled
.euiButtonGroup--small .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost {
  border-color: #69707D; }

.euiButtonGroup--medium .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost.euiButtonGroupButton-isSelected,
.euiButtonGroup--small .euiButtonGroupButton.euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost.euiButtonGroupButton-isSelected {
  background-color: #69707D;
  color: #a1a5ae; }

.euiButtonGroup--medium .euiButtonGroupButton-isSelected,
.euiButtonGroup--small .euiButtonGroupButton-isSelected {
  z-index: 0; }

.euiButtonGroup--medium .euiButtonGroupButton-isSelected + .euiButtonGroupButton-isSelected,
.euiButtonGroup--small .euiButtonGroupButton-isSelected + .euiButtonGroupButton-isSelected {
  box-shadow: -1px 0 0 rgba(255, 255, 255, 0.1); }

/**
 * Compressed (form style)
 */
.euiButtonGroup--compressed .euiButtonGroupButton {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border-radius: 6px;
  padding: 2px;
  background-clip: content-box; }
  .euiButtonGroup--compressed .euiButtonGroupButton .euiButton__content {
    padding-left: 8px;
    padding-right: 8px; }
  .euiButtonGroup--compressed .euiButtonGroupButton.euiButtonGroupButton-isSelected {
    font-weight: 600; }
  .euiButtonGroup--compressed .euiButtonGroupButton:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton:not([class*='isDisabled']):focus-within {
    outline: 2px solid #0071c2; }

/**
 * 1. Footer is always at the bottom.
 * 2. Fix for IE where the image correctly resizes in width but doesn't collapse its height
      (https://github.com/philipwalton/flexbugs/issues/75#issuecomment-134702421)
 * 3. Horizontal layouts should always top left align no matter the textAlign prop
 */
.euiCard {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  min-height: 1px;
  /* 2 */ }
  .euiCard.euiCard-isDisabled {
    cursor: not-allowed !important;
    -webkit-transform: none !important;
            transform: none !important;
    box-shadow: none !important;
    text-decoration: none !important;
    background-color: rgba(171, 180, 196, 0.1) !important;
    color: #ABB4C4; }
    .euiCard.euiCard-isDisabled .euiCard__top {
      -webkit-filter: grayscale(100%);
              filter: grayscale(100%); }
    .euiCard.euiCard-isDisabled .euiCard__titleAnchor,
    .euiCard.euiCard-isDisabled .euiCard__titleButton {
      color: #ABB4C4;
      cursor: inherit; }
    .euiCard.euiCard-isDisabled .euiCard__betaBadge:not(.euiBetaBadge-isClickable):not(.euiBetaBadge--hollow) {
      box-shadow: inset 0 0 0 1px #D3DAE6;
      background: transparent;
      color: inherit; }
    .euiCard.euiCard-isDisabled .euiCard__betaBadge:not(.euiBetaBadge-isClickable).euiBetaBadge--hollow {
      background-color: #FFF; }
  .euiCard.euiCard--isClickable {
    display: -webkit-flex;
    display: flex;
    width: 100%; }
    .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):focus-within {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
      outline: 2px solid currentColor; }
      .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):focus-within:focus-visible {
        outline-style: auto; }
      .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):focus-within:not(:focus-visible) {
        outline: none; }
    .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):focus .euiCard__title,
    .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):focus .euiCard__titleAnchor,
    .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):focus .euiCard__titleButton, .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):hover .euiCard__title,
    .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):hover .euiCard__titleAnchor,
    .euiCard.euiCard--isClickable:not(.euiCard-isDisabled):hover .euiCard__titleButton {
      text-decoration: underline; }
  .euiCard .euiCard__top,
  .euiCard .euiCard__content,
  .euiCard .euiCard__footer {
    width: 100%; }
  .euiCard.euiCard--leftAligned {
    text-align: left;
    -webkit-align-items: flex-start;
            align-items: flex-start; }
    .euiCard.euiCard--leftAligned .euiCard__titleButton {
      text-align: left; }
  .euiCard.euiCard--centerAligned {
    text-align: center;
    -webkit-align-items: center;
            align-items: center; }
  .euiCard.euiCard--rightAligned {
    text-align: right;
    -webkit-align-items: flex-end;
            align-items: flex-end; }
    .euiCard.euiCard--rightAligned .euiCard__titleButton {
      text-align: right; }
  .euiCard.euiCard-isSelected {
    transition: all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1); }

.euiCard--hasBetaBadge {
  position: relative;
  overflow: visible; }
  .euiCard--hasBetaBadge .euiCard__betaBadgeWrapper {
    position: absolute;
    top: -12px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    z-index: 3;
    min-width: 30%;
    max-width: calc(100% - 32px); }
    .euiCard--hasBetaBadge .euiCard__betaBadgeWrapper .euiToolTipAnchor,
    .euiCard--hasBetaBadge .euiCard__betaBadgeWrapper .euiCard__betaBadge {
      width: 100%; }
    .euiCard--hasBetaBadge .euiCard__betaBadgeWrapper .euiCard__betaBadge {
      overflow: hidden;
      text-overflow: ellipsis; }

.euiCard__betaBadge.euiBetaBadge--hollow {
  background-color: #FFF; }

.euiCard--isSelectable {
  position: relative; }

.euiCard[class*='paddingSmall'] {
  padding: 8px; }
  .euiCard[class*='paddingSmall'].euiCard--isSelectable {
    padding-bottom: 48px; }
  .euiCard[class*='paddingSmall'] .euiCard__top .euiCard__image {
    width: calc(100% + (8px * 2));
    left: -8px;
    top: -8px;
    margin-bottom: -8px; }
    .euiCard[class*='paddingSmall'] .euiCard__top .euiCard__image + .euiCard__icon {
      -webkit-transform: translate(-50%, -75%);
              transform: translate(-50%, -75%);
      -webkit-transform: translate(-50%, calc(-50% + -8px));
              transform: translate(-50%, calc(-50% + -8px)); }

.euiCard[class*='paddingMedium'] {
  padding: 16px; }
  .euiCard[class*='paddingMedium'].euiCard--isSelectable {
    padding-bottom: 56px; }
  .euiCard[class*='paddingMedium'] .euiCard__top .euiCard__image {
    width: calc(100% + (16px * 2));
    left: -16px;
    top: -16px;
    margin-bottom: -16px; }
    .euiCard[class*='paddingMedium'] .euiCard__top .euiCard__image + .euiCard__icon {
      -webkit-transform: translate(-50%, -75%);
              transform: translate(-50%, -75%);
      -webkit-transform: translate(-50%, calc(-50% + -16px));
              transform: translate(-50%, calc(-50% + -16px)); }

.euiCard[class*='paddingLarge'] {
  padding: 24px; }
  .euiCard[class*='paddingLarge'].euiCard--isSelectable {
    padding-bottom: 64px; }
  .euiCard[class*='paddingLarge'] .euiCard__top .euiCard__image {
    width: calc(100% + (24px * 2));
    left: -24px;
    top: -24px;
    margin-bottom: -24px; }
    .euiCard[class*='paddingLarge'] .euiCard__top .euiCard__image + .euiCard__icon {
      -webkit-transform: translate(-50%, -75%);
              transform: translate(-50%, -75%);
      -webkit-transform: translate(-50%, calc(-50% + -24px));
              transform: translate(-50%, calc(-50% + -24px)); }

.euiCard__top {
  -webkit-flex-grow: 0;
          flex-grow: 0;
  /* 1 */
  position: relative;
  min-height: 1px;
  /* 2 */
  font-size: 0; }
  .euiCard__top .euiCard__image {
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden; }
    .euiCard__top .euiCard__image img {
      width: 100%; }
    .euiCard__top .euiCard__image + .euiCard__icon {
      position: absolute;
      top: 50%;
      left: 50%; }
  .euiCard__top .euiCard__icon {
    margin-top: 8px; }

.euiCard__footer:not(:empty) {
  -webkit-flex-grow: 0;
          flex-grow: 0;
  /* 1 */
  margin-top: 16px; }

.euiCard[class*='transparent'] .euiCard__image {
  border-radius: 6px; }

.euiCard--isSelectable--text.euiCard-isSelected:not(.euiCard-isDisabled) {
  border-color: #00BFB3 !important; }

.euiCard--isSelectable--primary.euiCard-isSelected:not(.euiCard-isDisabled) {
  border-color: #07C !important; }

.euiCard--isSelectable--success.euiCard-isSelected:not(.euiCard-isDisabled) {
  border-color: #00BFB3 !important; }

.euiCard--isSelectable--danger.euiCard-isSelected:not(.euiCard-isDisabled) {
  border-color: #BD271E !important; }

.euiCard--isSelectable--ghost.euiCard-isSelected:not(.euiCard-isDisabled) {
  border-color: #69707D !important; }

.euiCard__top + .euiCard__content {
  margin-top: 16px; }

.euiCard__content {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  /* 1 */ }
  .euiCard__content .euiCard__description,
  .euiCard__content .euiCard__children {
    margin-top: 8px; }
  .euiCard__content .euiCard__titleAnchor,
  .euiCard__content .euiCard__titleButton {
    font: inherit;
    color: inherit;
    letter-spacing: inherit; }
    .euiCard__content .euiCard__titleAnchor:focus,
    .euiCard__content .euiCard__titleButton:focus {
      text-decoration: underline; }

.euiCard.euiCard--horizontal .euiCard__content,
.euiCard.euiCard--horizontal .euiCard__titleButton {
  text-align: left;
  /* 3 */ }

.euiCard.euiCard--horizontal.euiCard--hasIcon {
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: flex-start !important;
          align-items: flex-start !important;
  /* 3 */ }
  .euiCard.euiCard--horizontal.euiCard--hasIcon .euiCard__top,
  .euiCard.euiCard--horizontal.euiCard--hasIcon .euiCard__content {
    width: auto;
    margin-top: 0; }
  .euiCard.euiCard--horizontal.euiCard--hasIcon .euiCard__top .euiCard__icon {
    margin-top: 0;
    margin-right: 16px; }

.euiCardSelect {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px !important;
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 700; }
  .euiCardSelect--text:enabled {
    background-color: #F5F7FA !important; }
  .euiCardSelect--primary:enabled {
    background-color: #e6f1fa !important; }
  .euiCardSelect--success:enabled {
    background-color: #e6f9f7 !important;
    color: #007e77; }
  .euiCardSelect--danger:enabled {
    background-color: #f8e9e9 !important; }
  .euiCardSelect--ghost:enabled {
    background-color: #69707D !important; }
  .euiCardSelect:disabled {
    background-color: #fafbfd; }

.euiCheckableCard {
  transition: border-color 250ms ease-in; }
  .euiCheckableCard:not(.euiCheckableCard-isDisabled).euiCheckableCard-isChecked {
    border-color: #07C; }

.euiCheckableCard__label {
  cursor: pointer;
  display: block;
  width: calc(100% + 32px);
  padding: 16px;
  margin: -16px; }

.euiCheckableCard__label-isDisabled {
  color: #98A2B3;
  cursor: not-allowed; }

.euiCheckableCard__children {
  margin-top: 16px; }

.euiCodeBlock {
  max-width: 100%;
  display: block;
  position: relative;
  background: #F5F7FA; }
  .euiCodeBlock .euiCodeBlock__pre {
    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
    scrollbar-width: thin;
    height: 100%;
    overflow: auto;
    display: block; }
    .euiCodeBlock .euiCodeBlock__pre::-webkit-scrollbar {
      width: 16px;
      height: 16px; }
    .euiCodeBlock .euiCodeBlock__pre::-webkit-scrollbar-thumb {
      background-color: rgba(105, 112, 125, 0.5);
      background-clip: content-box;
      border-radius: 16px;
      border: 6px solid transparent; }
    .euiCodeBlock .euiCodeBlock__pre::-webkit-scrollbar-corner, .euiCodeBlock .euiCodeBlock__pre::-webkit-scrollbar-track {
      background-color: transparent; }
  .euiCodeBlock .euiCodeBlock__pre--whiteSpacePre {
    white-space: pre; }
  .euiCodeBlock .euiCodeBlock__pre--whiteSpacePreWrap {
    white-space: pre-wrap; }
  .euiCodeBlock .euiCodeBlock__pre--isVirtualized .euiCodeBlock__code {
    position: relative; }
  .euiCodeBlock .euiCodeBlock__line {
    display: block; }
  .euiCodeBlock--hasLineNumbers .euiCodeBlock__line {
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none; }
  .euiCodeBlock .euiCodeBlock__lineText,
  .euiCodeBlock .euiCodeBlock__lineNumber {
    display: inline-block; }
  .euiCodeBlock .euiCodeBlock__lineText {
    padding-left: 8px;
    border-left: 1px solid #D3DAE6;
    -webkit-user-select: text;
       -moz-user-select: text;
            user-select: text; }
  .euiCodeBlock .euiCodeBlock__lineNumber {
    position: absolute;
    height: 100%;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
    padding-right: 8px;
    box-sizing: content-box; }
    .euiCodeBlock .euiCodeBlock__lineNumber:before {
      content: attr(data-line-number);
      color: #69707D;
      text-align: right;
      display: block; }
  .euiCodeBlock .euiCodeBlock__line--isHighlighted .euiCodeBlock__lineText {
    background: rgba(0, 119, 204, 0.1);
    border-left: 2px solid #0071c2; }
  .euiCodeBlock .euiCodeBlock__code {
    font-family: "Roboto Mono", Consolas, Menlo, Courier, monospace;
    letter-spacing: normal;
    line-height: 1.5;
    font-weight: 400;
    font-size: inherit;
    color: #343741;
    display: block; }
  .euiCodeBlock .euiCodeBlock__controls {
    position: absolute;
    top: 0;
    right: 0; }
  .euiCodeBlock .euiCodeBlock__fullScreenButton + .euiCodeBlock__copyButton {
    margin-top: 4px; }
  .euiCodeBlock.euiCodeBlock-isFullScreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; }
    .euiCodeBlock.euiCodeBlock-isFullScreen .euiCodeBlock__pre {
      padding: 32px !important; }
    .euiCodeBlock.euiCodeBlock-isFullScreen .euiCodeBlock__controls {
      top: 4px;
      right: 4px; }
  .euiCodeBlock.euiCodeBlock--fontSmall {
    font-size: 12px; }
  .euiCodeBlock.euiCodeBlock--fontMedium {
    font-size: 14px; }
  .euiCodeBlock.euiCodeBlock--fontLarge {
    font-size: 14px; }
  .euiCodeBlock.euiCodeBlock--hasControl {
    min-height: 24px; }
  .euiCodeBlock.euiCodeBlock--hasBothControls {
    min-height: 52px; }
  .euiCodeBlock.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePreWrap {
    padding-right: 28px; }
  .euiCodeBlock.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePre {
    margin-right: 28px; }
  .euiCodeBlock.euiCodeBlock--paddingSmall .euiCodeBlock__pre {
    padding: 8px; }
  .euiCodeBlock.euiCodeBlock--paddingSmall.euiCodeBlock--hasControl {
    min-height: 40px; }
  .euiCodeBlock.euiCodeBlock--paddingSmall.euiCodeBlock--hasBothControls {
    min-height: 68px; }
  .euiCodeBlock.euiCodeBlock--paddingSmall .euiCodeBlock__controls {
    top: 8px;
    right: 8px; }
  .euiCodeBlock.euiCodeBlock--paddingSmall.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePreWrap {
    padding-right: 36px; }
  .euiCodeBlock.euiCodeBlock--paddingSmall.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePre {
    margin-right: 36px; }
  .euiCodeBlock.euiCodeBlock--paddingMedium .euiCodeBlock__pre {
    padding: 16px; }
  .euiCodeBlock.euiCodeBlock--paddingMedium.euiCodeBlock--hasControl {
    min-height: 56px; }
  .euiCodeBlock.euiCodeBlock--paddingMedium.euiCodeBlock--hasBothControls {
    min-height: 84px; }
  .euiCodeBlock.euiCodeBlock--paddingMedium .euiCodeBlock__controls {
    top: 16px;
    right: 16px; }
  .euiCodeBlock.euiCodeBlock--paddingMedium.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePreWrap {
    padding-right: 44px; }
  .euiCodeBlock.euiCodeBlock--paddingMedium.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePre {
    margin-right: 44px; }
  .euiCodeBlock.euiCodeBlock--paddingLarge .euiCodeBlock__pre {
    padding: 24px; }
  .euiCodeBlock.euiCodeBlock--paddingLarge.euiCodeBlock--hasControl {
    min-height: 72px; }
  .euiCodeBlock.euiCodeBlock--paddingLarge.euiCodeBlock--hasBothControls {
    min-height: 100px; }
  .euiCodeBlock.euiCodeBlock--paddingLarge .euiCodeBlock__controls {
    top: 24px;
    right: 24px; }
  .euiCodeBlock.euiCodeBlock--paddingLarge.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePreWrap {
    padding-right: 52px; }
  .euiCodeBlock.euiCodeBlock--paddingLarge.euiCodeBlock--hasControl .euiCodeBlock__pre--whiteSpacePre {
    margin-right: 52px; }
  .euiCodeBlock.euiCodeBlock--transparentBackground {
    background: transparent; }
  .euiCodeBlock .token.punctuation:not(.interpolation-punctuation):not([class*='attr-']) {
    opacity: .7; }
  .euiCodeBlock .token.comment,
  .euiCodeBlock .token.prolog,
  .euiCodeBlock .token.doctype,
  .euiCodeBlock .token.cdata,
  .euiCodeBlock .token.coord,
  .euiCodeBlock .token.blockquote {
    color: #69707D;
    font-style: italic; }
  .euiCodeBlock .token.selector {
    color: inherit; }
  .euiCodeBlock .token.string,
  .euiCodeBlock .token.interpolation,
  .euiCodeBlock .token.interpolation-punctuation,
  .euiCodeBlock .token.doc-comment .token.keyword,
  .euiCodeBlock .token.attr-value,
  .euiCodeBlock .token.url .token.content {
    color: #ac4e6d; }
  .euiCodeBlock .token.number,
  .euiCodeBlock .token.boolean,
  .euiCodeBlock .token.keyword.nil,
  .euiCodeBlock .token.regex,
  .euiCodeBlock .token.variable,
  .euiCodeBlock .token.unit,
  .euiCodeBlock .token.hexcode,
  .euiCodeBlock .token.attr-name,
  .euiCodeBlock .token.attr-equals {
    color: #3b7d6a; }
  .euiCodeBlock .token.atrule .token.rule,
  .euiCodeBlock .token.keyword {
    color: #7c609e; }
  .euiCodeBlock .token.function {
    color: inherit; }
  .euiCodeBlock .token.tag {
    color: #4a7194; }
  .euiCodeBlock .token.class-name {
    color: #4a7194; }
  .euiCodeBlock .token.property {
    color: inherit; }
  .euiCodeBlock .token.console,
  .euiCodeBlock .token.list-punctuation,
  .euiCodeBlock .token.url-reference,
  .euiCodeBlock .token.url .token.url {
    color: #b34f3b; }
  .euiCodeBlock .token.paramater {
    color: inherit; }
  .euiCodeBlock .token.meta,
  .euiCodeBlock .token.important {
    color: #69707D; }
  .euiCodeBlock .token.title {
    color: #996130; }
  .euiCodeBlock .token.section {
    color: #b34f3b; }
  .euiCodeBlock .token.prefix.inserted,
  .euiCodeBlock .token.prefix.deleted {
    padding-left: 4px;
    margin-left: -4px; }
  .euiCodeBlock .token.prefix.inserted {
    box-shadow: -4px 0 #3b7d6a;
    color: #3b7d6a; }
  .euiCodeBlock .token.prefix.deleted {
    box-shadow: -4px 0 #BD271E;
    color: #BD271E; }
  .euiCodeBlock .token.selector .token.class {
    color: inherit; }
  .euiCodeBlock .token.selector .token.id {
    color: inherit; }
  .euiCodeBlock .token.italic {
    font-style: italic; }
  .euiCodeBlock .token.important,
  .euiCodeBlock .token.bold {
    font-weight: 700; }
  .euiCodeBlock .token.url-reference,
  .euiCodeBlock .token.url .token.url {
    text-decoration: underline; }
  .euiCodeBlock .token.entity {
    cursor: help; }

/*
* 1. Size the code against the text its embedded within.
*/
.euiCode {
  font-family: "Roboto Mono", Consolas, Menlo, Courier, monospace;
  letter-spacing: normal;
  font-size: .9em;
  /* 1 */
  padding: .2em .5em;
  /* 1 */
  background: #F5F7FA; }
  .euiCode.euiCode--transparentBackground {
    background: transparent; }
  .euiCode .token.punctuation:not(.interpolation-punctuation):not([class*='attr-']) {
    opacity: .7; }
  .euiCode .token.comment,
  .euiCode .token.prolog,
  .euiCode .token.doctype,
  .euiCode .token.cdata,
  .euiCode .token.coord,
  .euiCode .token.blockquote {
    color: #69707D;
    font-style: italic; }
  .euiCode .token.selector {
    color: inherit; }
  .euiCode .token.string,
  .euiCode .token.interpolation,
  .euiCode .token.interpolation-punctuation,
  .euiCode .token.doc-comment .token.keyword,
  .euiCode .token.attr-value,
  .euiCode .token.url .token.content {
    color: #ac4e6d; }
  .euiCode .token.number,
  .euiCode .token.boolean,
  .euiCode .token.keyword.nil,
  .euiCode .token.regex,
  .euiCode .token.variable,
  .euiCode .token.unit,
  .euiCode .token.hexcode,
  .euiCode .token.attr-name,
  .euiCode .token.attr-equals {
    color: #3b7d6a; }
  .euiCode .token.atrule .token.rule,
  .euiCode .token.keyword {
    color: #7c609e; }
  .euiCode .token.function {
    color: inherit; }
  .euiCode .token.tag {
    color: #4a7194; }
  .euiCode .token.class-name {
    color: #4a7194; }
  .euiCode .token.property {
    color: inherit; }
  .euiCode .token.console,
  .euiCode .token.list-punctuation,
  .euiCode .token.url-reference,
  .euiCode .token.url .token.url {
    color: #b34f3b; }
  .euiCode .token.paramater {
    color: inherit; }
  .euiCode .token.meta,
  .euiCode .token.important {
    color: #69707D; }
  .euiCode .token.title {
    color: #996130; }
  .euiCode .token.section {
    color: #b34f3b; }
  .euiCode .token.prefix.inserted,
  .euiCode .token.prefix.deleted {
    padding-left: 4px;
    margin-left: -4px; }
  .euiCode .token.prefix.inserted {
    box-shadow: -4px 0 #3b7d6a;
    color: #3b7d6a; }
  .euiCode .token.prefix.deleted {
    box-shadow: -4px 0 #BD271E;
    color: #BD271E; }
  .euiCode .token.selector .token.class {
    color: inherit; }
  .euiCode .token.selector .token.id {
    color: inherit; }
  .euiCode .token.italic {
    font-style: italic; }
  .euiCode .token.important,
  .euiCode .token.bold {
    font-weight: 700; }
  .euiCode .token.url-reference,
  .euiCode .token.url .token.url {
    text-decoration: underline; }
  .euiCode .token.entity {
    cursor: help; }

.euiCollapsibleNav:not([class*='push']) {
  z-index: 6000 !important; }

.euiCollapsibleNavGroup:not(:first-child) {
  border-top: 1px solid #D3DAE6; }

.euiCollapsibleNavGroup .euiAccordion__triggerWrapper {
  padding: 16px; }

.euiCollapsibleNavGroup--light {
  background-color: #fafbfd; }

.euiCollapsibleNavGroup--dark {
  background-color: #2a2c34;
  color: #FFF; }
  .euiCollapsibleNavGroup--dark .euiCollapsibleNavGroup__heading:focus .euiAccordion__iconWrapper {
    color: #0d7ecf;
    -webkit-animation-name: euiCollapsibleNavGroupDarkFocusRingAnimate !important;
            animation-name: euiCollapsibleNavGroupDarkFocusRingAnimate !important; }
  .euiCollapsibleNavGroup--dark .euiCollapsibleNavGroup__title {
    color: inherit;
    line-height: inherit; }

.euiCollapsibleNavGroup__heading {
  font-weight: 600; }
  .euiCollapsibleNavGroup__heading:not(.euiAccordion__button) {
    padding: 16px; }

.euiCollapsibleNavGroup__children {
  padding: 8px; }

.euiCollapsibleNavGroup--withHeading .euiCollapsibleNavGroup__children {
  padding-top: 0; }

@-webkit-keyframes euiCollapsibleNavGroupDarkFocusRingAnimate {
  0% {
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0); }
  100% {
    box-shadow: 0 0 0 2px #0d7ecf; } }

@keyframes euiCollapsibleNavGroupDarkFocusRingAnimate {
  0% {
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0); }
  100% {
    box-shadow: 0 0 0 2px #0d7ecf; } }

.euiColorPicker {
  position: relative;
  width: 152px; }

.euiColorPicker__popoverAnchor .euiColorPicker__input {
  padding-right: 40px; }
  .euiColorPicker__popoverAnchor .euiColorPicker__input[class*='--compressed'] {
    padding-right: 32px; }
  .euiColorPicker__popoverAnchor .euiColorPicker__input + .euiFormControlLayoutIcons {
    color: inherit; }

.euiColorPicker__swatches {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  margin: -4px; }

.euiColorPicker__swatch-item {
  margin: 4px; }

.euiSwatchInput__stroke {
  fill: none;
  stroke: rgba(0, 0, 0, 0.2); }

.euiColorPicker__popoverPanel--pickerOnly {
  padding-bottom: 0 !important; }

.euiColorPicker__input--inGroup {
  height: 38px !important;
  box-shadow: none !important;
  border-radius: 0; }
  .euiColorPicker__input--inGroup.euiFieldText--compressed {
    height: 30px !important;
    border-radius: 0; }

.euiColorPicker__alphaRange .euiRangeInput {
  min-width: 0; }

.euiColorPickerSwatch {
  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 3px;
  cursor: pointer;
  border: solid 1px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05); }
  .euiColorPickerSwatch:disabled {
    cursor: default; }
  .euiColorPickerSwatch:focus {
    outline: 2px solid currentColor; }
    .euiColorPickerSwatch:focus:focus-visible {
      outline-style: auto; }
    .euiColorPickerSwatch:focus:not(:focus-visible) {
      outline: none; }

.euiHue {
  background: linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);
  height: 24px;
  margin: 4px 0;
  position: relative; }
  .euiHue:before, .euiHue:after {
    content: '';
    left: 0;
    position: absolute;
    height: 8px;
    background: #FFF;
    width: 100%; }
  .euiHue:after {
    bottom: 0; }

.euiHue__range {
  position: relative;
  height: 24px;
  width: calc(100% + 2px);
  margin: 0 -1px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: transparent;
  z-index: 2; }
  .euiHue__range::-webkit-slider-thumb {
    padding: 7px;
    border: 1px solid #c9cbcd;
    background: #FFF no-repeat center;
    border-radius: 14px;
    -webkit-transition: background-color 150ms ease-in, border-color 150ms ease-in;
    transition: background-color 150ms ease-in, border-color 150ms ease-in;
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    border: 2px solid #FFF;
    cursor: pointer;
    background-color: #69707D;
    padding: 0;
    height: 16px;
    width: 16px;
    box-sizing: border-box; }
  .euiHue__range::-moz-range-thumb {
    padding: 7px;
    border: 1px solid #c9cbcd;
    background: #FFF no-repeat center;
    border-radius: 14px;
    -moz-transition: background-color 150ms ease-in, border-color 150ms ease-in;
    transition: background-color 150ms ease-in, border-color 150ms ease-in;
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    border: 2px solid #FFF;
    cursor: pointer;
    background-color: #69707D;
    padding: 0;
    height: 16px;
    width: 16px;
    box-sizing: border-box; }
  .euiHue__range::-ms-thumb {
    padding: 7px;
    border: 1px solid #c9cbcd;
    background: #FFF no-repeat center;
    border-radius: 14px;
    -ms-transition: background-color 150ms ease-in, border-color 150ms ease-in;
    transition: background-color 150ms ease-in, border-color 150ms ease-in;
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    border: 2px solid #FFF;
    cursor: pointer;
    background-color: #69707D;
    padding: 0;
    height: 16px;
    width: 16px;
    box-sizing: border-box; }
  .euiHue__range::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0; }
  .euiHue__range::-ms-thumb {
    margin-top: 0; }
  .euiHue__range::-ms-track {
    height: 24px;
    background: transparent;
    border-color: transparent;
    color: transparent; }
  .euiHue__range::-moz-focus-outer {
    border: none; }
  .euiHue__range::-ms-fill-lower, .euiHue__range::-ms-fill-upper {
    background: transparent; }
  .euiHue__range:focus {
    outline: none; }
    .euiHue__range:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 2px #0071c2;
      border-color: #07C; }
    .euiHue__range:focus::-moz-range-thumb {
      box-shadow: 0 0 0 2px #0071c2;
      border-color: #07C; }
    .euiHue__range:focus::-ms-thumb {
      box-shadow: 0 0 0 2px #0071c2;
      border-color: #07C; }

.euiSaturation {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 3px;
  touch-action: none;
  z-index: 3; }
  .euiSaturation .euiSaturation__lightness,
  .euiSaturation .euiSaturation__saturation {
    position: absolute;
    top: -1px;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 3px; }
  .euiSaturation .euiSaturation__lightness {
    background: linear-gradient(to right, white, rgba(255, 255, 255, 0)); }
  .euiSaturation .euiSaturation__saturation {
    background: linear-gradient(to top, black, rgba(0, 0, 0, 0)); }
  .euiSaturation .euiSaturation__indicator {
    position: absolute;
    height: 12px;
    width: 12px;
    border-radius: 100%;
    margin-top: -6px;
    margin-left: -6px;
    border: 1px solid #343741; }
    .euiSaturation .euiSaturation__indicator:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100%;
      border: 1px solid #F5F7FA; }
  .euiSaturation:focus {
    outline: none; }
    .euiSaturation:focus .euiSaturation__indicator {
      box-shadow: 0 0 0 2px #0071c2;
      border-color: #07C; }

.euiColorStops:not(.euiColorStops-isDisabled):focus {
  outline: 2px solid #0071c2; }

.euiColorStops__addContainer {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 16px;
  margin-top: -8px; }
  .euiColorStops__addContainer:hover:not(.euiColorStops__addContainer-isDisabled) {
    cursor: pointer; }
    .euiColorStops__addContainer:hover:not(.euiColorStops__addContainer-isDisabled) .euiColorStops__addTarget {
      opacity: .7; }

.euiColorStops__addTarget {
  padding: 7px;
  border: 1px solid #c9cbcd;
  background: #FFF no-repeat center;
  border-radius: 14px;
  transition: background-color 150ms ease-in, border-color 150ms ease-in;
  box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
  border: 2px solid #FFF;
  cursor: pointer;
  background-color: #69707D;
  padding: 0;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  height: 16px;
  width: 16px;
  background-color: #F5F7FA;
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms; }

.euiColorStop {
  width: 152px; }

.euiColorStopPopover.euiPopover {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  margin-top: -8px; }

.euiColorStopPopover-hasFocus {
  z-index: 1; }

.euiColorStopPopover__anchor {
  position: absolute;
  width: 100%;
  height: 100%; }
  .euiColorStopPopover__anchor:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 16px;
    width: 16px;
    border-radius: 16px;
    background: #FFF; }

.euiColorStopThumb.euiRangeThumb:not(:disabled) {
  top: 0;
  margin-top: 0;
  pointer-events: auto;
  cursor: -webkit-grab;
  cursor: grab;
  border: solid 3px #FFF;
  box-shadow: 0 0 0 1px #98A2B3, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2); }
  .euiColorStopThumb.euiRangeThumb:not(:disabled):active {
    cursor: -webkit-grabbing;
    cursor: grabbing; }

.euiColorStopPopover-isLoadingPanel {
  visibility: hidden !important; }

.euiColorStops.euiColorStops-isDragging:not(.euiColorStops-isDisabled):not(.euiColorStops-isReadOnly) {
  cursor: -webkit-grabbing;
  cursor: grabbing; }

.euiColorStops__highlight {
  color: #D3DAE6; }

.euiColorPalettePicker__itemTitle {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem; }

.euiColorPalettePicker__itemTitle + .euiColorPaletteDisplay {
  margin-top: 4px; }

.euiColorPaletteDisplay {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  overflow: hidden;
  height: 8px; }

.euiColorPaletteDisplay--sizeExtraSmall {
  position: relative;
  height: 4px;
  border-radius: 4px; }
  .euiColorPaletteDisplay--sizeExtraSmall:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    content: '';
    pointer-events: none;
    border: 1px solid rgba(52, 55, 65, 0.2); }

.euiColorPaletteDisplay--sizeExtraSmall .euiColorPaletteDisplayFixed__bleedArea {
  height: 4px; }

.euiColorPaletteDisplay--sizeSmall {
  position: relative;
  height: 8px;
  border-radius: 8px; }
  .euiColorPaletteDisplay--sizeSmall:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    content: '';
    pointer-events: none;
    border: 1px solid rgba(52, 55, 65, 0.2); }

.euiColorPaletteDisplay--sizeSmall .euiColorPaletteDisplayFixed__bleedArea {
  height: 8px; }

.euiColorPaletteDisplay--sizeMedium {
  position: relative;
  height: 16px;
  border-radius: 16px; }
  .euiColorPaletteDisplay--sizeMedium:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    content: '';
    pointer-events: none;
    border: 1px solid rgba(52, 55, 65, 0.2); }

.euiColorPaletteDisplay--sizeMedium .euiColorPaletteDisplayFixed__bleedArea {
  height: 16px; }

.euiColorPaletteDisplayFixed__bleedArea {
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-flex;
  display: flex;
  height: 8px;
  width: calc(100% + 1px); }

.euiComboBox {
  max-width: 400px;
  width: 100%;
  height: auto;
  position: relative;
  /**
   * 1. Allow pills to truncate their text with an ellipsis.
   * 2. Don't allow pills/placeholder to overlap with the caret, loading icon or clear button.
   * 3. The height on combo can be larger than normal text inputs.
   */
  /**
   * 1. Force field height to match other field heights.
   * 2. Force input height to expand to fill this element.
   * 3. Reset appearance on Safari.
   * 4. Fix react-input-autosize appearance.
   * 5. Prevent a lot of input from causing the react-input-autosize to overflow the container.
   */ }
  .euiComboBox--fullWidth {
    max-width: 100%; }
  .euiComboBox--compressed {
    height: 32px; }
  .euiComboBox--inGroup {
    height: 100%; }
  .euiComboBox--compressed,
  .euiComboBox .euiFormControlLayout {
    height: auto; }
  .euiComboBox .euiComboBox__inputWrap {
    max-width: 400px;
    width: 100%;
    height: 40px;
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    letter-spacing: normal;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-kerning: normal;
            font-kerning: normal;
    font-size: 14px;
    color: #343741;
    border: none;
    border-radius: 6px;
    padding: 12px;
    max-width: 400px;
    width: 100%;
    height: auto;
    padding: 4px 8px;
    display: -webkit-flex;
    display: flex;
    /* 1 */
    outline: none;
    padding-right: 40px;
    /* 2 */ }
    .euiComboBox .euiComboBox__inputWrap--fullWidth {
      max-width: 100%; }
    .euiComboBox .euiComboBox__inputWrap--compressed {
      height: 32px; }
    .euiComboBox .euiComboBox__inputWrap--inGroup {
      height: 100%; }
    @supports (-moz-appearance: none) {
      .euiComboBox .euiComboBox__inputWrap {
        transition-property: box-shadow, background-image, background-size; } }
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
      .euiComboBox .euiComboBox__inputWrap {
        line-height: 1em; } }
    .euiComboBox .euiComboBox__inputWrap::-webkit-input-placeholder {
      color: #69707D;
      opacity: 1; }
    .euiComboBox .euiComboBox__inputWrap::-moz-placeholder {
      color: #69707D;
      opacity: 1; }
    .euiComboBox .euiComboBox__inputWrap::placeholder {
      color: #69707D;
      opacity: 1; }
    .euiComboBox .euiComboBox__inputWrap--compressed {
      background-color: #fbfcfd;
      background-repeat: no-repeat;
      background-size: 0% 100%;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
      transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
      padding: 8px;
      border-radius: 4px; }
      @supports (-moz-appearance: none) {
        .euiComboBox .euiComboBox__inputWrap--compressed {
          transition-property: box-shadow, background-image, background-size; } }
    .euiComboBox .euiComboBox__inputWrap--inGroup {
      box-shadow: none !important;
      border-radius: 0; }
    .euiComboBox .euiComboBox__inputWrap--withIcon {
      padding-left: 40px; }
    .euiComboBox .euiComboBox__inputWrap--fullWidth {
      max-width: 100%; }
    .euiComboBox .euiComboBox__inputWrap--compressed {
      height: 32px; }
    .euiComboBox .euiComboBox__inputWrap--inGroup {
      height: 100%; }
    .euiComboBox .euiComboBox__inputWrap .euiComboBoxPill {
      max-width: calc(100% - 2px - 16px); }
    .euiComboBox .euiComboBox__inputWrap:not(.euiComboBox__inputWrap--noWrap) {
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 4px;
      height: auto;
      /* 3 */
      -webkit-flex-wrap: wrap;
              flex-wrap: wrap;
      /* 1 */
      -webkit-align-content: flex-start;
              align-content: flex-start; }
      .euiComboBox .euiComboBox__inputWrap:not(.euiComboBox__inputWrap--noWrap):hover {
        cursor: text; }
    .euiComboBox .euiComboBox__inputWrap.euiComboBox__inputWrap-isClearable {
      padding-right: 62px;
      /* 2 */ }
    .euiComboBox .euiComboBox__inputWrap.euiComboBox__inputWrap-isLoading {
      padding-right: 62px;
      /* 2 */ }
      .euiComboBox .euiComboBox__inputWrap.euiComboBox__inputWrap-isLoading .euiComboBoxPlaceholder {
        padding-right: 62px;
        /* 2 */ }
    .euiComboBox .euiComboBox__inputWrap.euiComboBox__inputWrap-isLoading.euiComboBox__inputWrap-isClearable {
      padding-right: 84px;
      /* 2 */ }
  .euiComboBox .euiComboBox__input {
    display: -webkit-inline-flex !important;
    display: inline-flex !important;
    /* 1 */
    height: 32px;
    /* 2 */
    overflow: hidden;
    /* 5 */ }
    .euiComboBox .euiComboBox__input > input {
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-weight: 400;
      letter-spacing: normal;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-font-kerning: normal;
              font-kerning: normal;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      /* 3 */
      padding: 0;
      border: none;
      background: transparent;
      font-size: 14px;
      color: #343741;
      margin: 4px;
      line-height: 1.5;
      /* 4 */ }
  .euiComboBox.euiComboBox-isOpen .euiComboBox__inputWrap {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiComboBox.euiComboBox-isOpen .euiComboBox__inputWrap--compressed {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiComboBox.euiComboBox-isInvalid .euiComboBox__inputWrap {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiComboBox.euiComboBox-isDisabled .euiComboBox__inputWrap {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    -webkit-text-fill-color: unset; }
    .euiComboBox.euiComboBox-isDisabled .euiComboBox__inputWrap::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiComboBox.euiComboBox-isDisabled .euiComboBox__inputWrap::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiComboBox.euiComboBox-isDisabled .euiComboBox__inputWrap::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiComboBox.euiComboBox-isDisabled .euiComboBoxPlaceholder,
  .euiComboBox.euiComboBox-isDisabled .euiComboBoxPill--plainText {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3; }
  .euiComboBox.euiComboBox-isDisabled .euiComboBox__inputWrap:not(.euiComboBox__inputWrap--noWrap):hover {
    cursor: not-allowed; }
  .euiComboBox.euiComboBox--compressed .euiComboBox__inputWrap {
    line-height: 32px;
    /* 2 */
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 32px;
    /* 2 */ }
    .euiComboBox.euiComboBox--compressed .euiComboBox__inputWrap.euiComboBox__inputWrap-isClearable {
      padding-right: 54px;
      /* 2 */ }
    .euiComboBox.euiComboBox--compressed .euiComboBox__inputWrap.euiComboBox__inputWrap-isLoading {
      padding-right: 54px;
      /* 2 */ }
      .euiComboBox.euiComboBox--compressed .euiComboBox__inputWrap.euiComboBox__inputWrap-isLoading .euiComboBoxPlaceholder {
        padding-right: 54px;
        /* 2 */ }
    .euiComboBox.euiComboBox--compressed .euiComboBox__inputWrap.euiComboBox__inputWrap-isLoading.euiComboBox__inputWrap-isClearable {
      padding-right: 76px;
      /* 2 */ }
  .euiComboBox .euiFormControlLayout__prepend,
  .euiComboBox .euiFormControlLayout__append {
    height: auto !important; }

.euiComboBox__input {
  max-width: 100%; }
  .euiComboBox__input input {
    border: none !important;
    box-shadow: none !important;
    outline: none !important; }

/*
 * 1. Overwrites the base styling of EuiBadge, to give it a larger size and margins
 * that make sense in the input wrap.
 */
.euiComboBoxPill {
  height: 22px;
  line-height: 22px;
  vertical-align: baseline; }
  .euiComboBoxPill,
  .euiComboBoxPill + .euiComboBoxPill {
    margin: 4px; }
  .euiComboBox--compressed .euiComboBoxPill,
  .euiComboBox--compressed .euiComboBoxPill + .euiComboBoxPill {
    margin: 5px 4px 0 0; }
  .euiComboBoxPill--plainText {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    letter-spacing: normal;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-kerning: normal;
            font-kerning: normal;
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    line-height: 24px;
    font-size: 14px;
    padding: 0;
    color: #343741;
    vertical-align: middle;
    display: inline-block; }

.euiComboBoxPlaceholder {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  padding-right: 40px;
  position: absolute;
  pointer-events: none;
  padding-left: 4px;
  line-height: 32px;
  color: #69707D;
  margin-bottom: 0 !important; }

/**
 * 1. Using specificity to override panel shadow
 * 2. Prevent really long input from overflowing the container.
 */
.euiComboBoxOptionsList {
  -webkit-transform: none !important;
          transform: none !important;
  top: 0; }
  .euiComboBoxOptionsList .euiFilterSelectItem__content {
    margin-block: 0 !important; }

.euiComboBoxOptionsList__empty {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  /* 2 */
  padding: 8px;
  text-align: center;
  word-wrap: break-word; }

.euiComboBoxOptionsList__rowWrap {
  padding: 0;
  max-height: 200px;
  overflow: hidden; }
  .euiComboBoxOptionsList__rowWrap > div {
    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
    scrollbar-width: thin; }
    .euiComboBoxOptionsList__rowWrap > div::-webkit-scrollbar {
      width: 16px;
      height: 16px; }
    .euiComboBoxOptionsList__rowWrap > div::-webkit-scrollbar-thumb {
      background-color: rgba(105, 112, 125, 0.5);
      background-clip: content-box;
      border-radius: 16px;
      border: 6px solid transparent; }
    .euiComboBoxOptionsList__rowWrap > div::-webkit-scrollbar-corner, .euiComboBoxOptionsList__rowWrap > div::-webkit-scrollbar-track {
      background-color: transparent; }

.euiComboBoxOption {
  font-size: 14px;
  padding: 4px 8px 4px 16px;
  width: 100%;
  text-align: left;
  border: 1px solid #D3DAE6;
  border-color: transparent;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }
  .euiComboBoxOption:hover {
    text-decoration: underline; }
  .euiComboBoxOption.euiComboBoxOption-isFocused {
    cursor: pointer;
    color: #0071c2;
    background-color: rgba(0, 119, 204, 0.1); }
  .euiComboBoxOption.euiComboBoxOption-isDisabled {
    color: #98A2B3;
    cursor: not-allowed; }
    .euiComboBoxOption.euiComboBoxOption-isDisabled:hover {
      text-decoration: none; }

.euiComboBoxOption__contentWrapper {
  display: -webkit-flex;
  display: flex; }
  .euiComboBoxOption__contentWrapper .euiComboBoxOption__emptyStateText {
    -webkit-flex: 1;
            flex: 1;
    text-align: left;
    margin-bottom: 0; }
  .euiComboBoxOption__contentWrapper .euiComboBoxOption__enterBadge {
    -webkit-align-self: center;
            align-self: center;
    margin-left: 4px; }

.euiComboBoxOption__content {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  -webkit-flex: 1;
          flex: 1;
  text-align: left; }

/**
 * 1. Force each title to be the same height as an option, so that the virtualized scroll logic
 *    works.
 */
.euiComboBoxTitle {
  font-size: 12px;
  padding: 11px 8px 4px;
  /* 1 */
  width: 100%;
  font-weight: 700;
  color: #000; }

.euiContextMenu {
  width: 256px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  transition: height 150ms cubic-bezier(0.694, 0.0482, 0.335, 1);
  border-radius: 6px; }
  .euiContextMenu .euiContextMenu__content {
    padding: 8px; }

/**
  * 1. When there are multiple ContextMenuPanels, the ContextMenu will absolutely
  *    position them. ContextMenuPanel will break the layout of a Popover if it's
  *    absolutely positioned by default.
  */
.euiContextMenu__panel {
  position: absolute;
  /* 1 */ }

.euiContextMenu__icon {
  margin-right: 8px; }

.euiContextMenuPanel {
  width: 100%;
  visibility: visible;
  outline-offset: -2px; }
  .euiContextMenuPanel:focus {
    outline: none; }
  .euiContextMenuPanel.euiContextMenuPanel-txInLeft {
    pointer-events: none;
    -webkit-animation: euiContextMenuPanelTxInLeft 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
            animation: euiContextMenuPanelTxInLeft 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiContextMenuPanel.euiContextMenuPanel-txOutLeft {
    pointer-events: none;
    -webkit-animation: euiContextMenuPanelTxOutLeft 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
            animation: euiContextMenuPanelTxOutLeft 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiContextMenuPanel.euiContextMenuPanel-txInRight {
    pointer-events: none;
    -webkit-animation: euiContextMenuPanelTxInRight 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
            animation: euiContextMenuPanelTxInRight 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiContextMenuPanel.euiContextMenuPanel-txOutRight {
    pointer-events: none;
    -webkit-animation: euiContextMenuPanelTxOutRight 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
            animation: euiContextMenuPanelTxOutRight 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }

.euiContextMenuPanel--next {
  -webkit-transform: translateX(256px);
          transform: translateX(256px);
  visibility: hidden; }

.euiContextMenuPanel--previous {
  -webkit-transform: translateX(-256px);
          transform: translateX(-256px);
  visibility: hidden; }

.euiContextMenuPanelTitle {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 700;
  padding: 12px;
  width: 100%;
  text-align: left;
  outline-offset: -2px;
  border-bottom: 1px solid #D3DAE6; }
  .euiContextMenuPanelTitle:enabled:hover, .euiContextMenuPanelTitle:enabled:focus {
    text-decoration: underline; }
  .euiContextMenuPanelTitle--small {
    padding: 6px 8px; }

@-webkit-keyframes euiContextMenuPanelTxInLeft {
  0% {
    -webkit-transform: translateX(256px);
            transform: translateX(256px); }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0); } }

@keyframes euiContextMenuPanelTxInLeft {
  0% {
    -webkit-transform: translateX(256px);
            transform: translateX(256px); }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0); } }

@-webkit-keyframes euiContextMenuPanelTxOutLeft {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0); }
  100% {
    -webkit-transform: translateX(-256px);
            transform: translateX(-256px); } }

@keyframes euiContextMenuPanelTxOutLeft {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0); }
  100% {
    -webkit-transform: translateX(-256px);
            transform: translateX(-256px); } }

@-webkit-keyframes euiContextMenuPanelTxInRight {
  0% {
    -webkit-transform: translateX(-256px);
            transform: translateX(-256px); }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0); } }

@keyframes euiContextMenuPanelTxInRight {
  0% {
    -webkit-transform: translateX(-256px);
            transform: translateX(-256px); }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0); } }

@-webkit-keyframes euiContextMenuPanelTxOutRight {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0); }
  100% {
    -webkit-transform: translateX(256px);
            transform: translateX(256px); } }

@keyframes euiContextMenuPanelTxOutRight {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0); }
  100% {
    -webkit-transform: translateX(256px);
            transform: translateX(256px); } }

.euiContextMenuItem {
  display: block;
  padding: 12px;
  width: 100%;
  text-align: left;
  color: #343741;
  outline-offset: -2px; }
  .euiContextMenuItem:hover, .euiContextMenuItem:focus {
    text-decoration: underline; }
  .euiContextMenuItem:focus {
    background-color: rgba(0, 119, 204, 0.1); }
  .euiContextMenuItem.euiContextMenuItem-isDisabled {
    color: #ABB4C4;
    cursor: default; }
    .euiContextMenuItem.euiContextMenuItem-isDisabled:hover, .euiContextMenuItem.euiContextMenuItem-isDisabled:focus {
      text-decoration: none; }
  .euiContextMenuItem--small {
    padding: 6px 8px; }
    .euiContextMenuItem--small .euiContextMenuItem__text {
      font-size: 14px;
      font-size: 1rem;
      line-height: 1.71429rem; }

.euiContextMenuItem__inner {
  display: -webkit-flex;
  display: flex; }

.euiContextMenuItem__text {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  overflow: hidden; }

.euiContextMenuItem__arrow {
  -webkit-align-self: flex-end;
          align-self: flex-end; }

.euiContextMenu__itemLayout {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }
  .euiContextMenu__itemLayout.euiContextMenu__itemLayout--bottom {
    -webkit-align-items: flex-end;
            align-items: flex-end; }
  .euiContextMenu__itemLayout.euiContextMenu__itemLayout--top {
    -webkit-align-items: flex-start;
            align-items: flex-start; }
  .euiContextMenu__itemLayout .euiContextMenu__icon {
    -webkit-flex-shrink: 0;
            flex-shrink: 0; }

.euiControlBar {
  background: #343741;
  color: white;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  box-shadow: inset 0 40px 0 #343741, inset 0 600rem 0 #fafbfd;
  bottom: 0;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  height: 40px;
  max-height: calc(100vh - 80px); }
  .euiControlBar--fixed {
    position: fixed;
    z-index: 6000; }
  .euiControlBar--absolute {
    position: absolute;
    z-index: 1000; }
  .euiControlBar--relative {
    position: relative; }
  .euiControlBar-isOpen {
    -webkit-animation-duration: 250ms;
            animation-duration: 250ms;
    -webkit-animation-timing-function: cubic-bezier(0.694, 0.0482, 0.335, 1);
            animation-timing-function: cubic-bezier(0.694, 0.0482, 0.335, 1);
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards; }
  .euiControlBar-isOpen.euiControlBar--large {
    -webkit-animation-name: euiControlBarOpenPanelLarge;
            animation-name: euiControlBarOpenPanelLarge;
    height: calc(100vh - 80px);
    bottom: -100vh; }
  .euiControlBar-isOpen.euiControlBar--medium {
    -webkit-animation-name: euiControlBarOpenPanelMedium;
            animation-name: euiControlBarOpenPanelMedium;
    height: 480px;
    bottom: -480px; }
  .euiControlBar-isOpen.euiControlBar--small {
    -webkit-animation-name: euiControlBarOpenPanelSmall;
            animation-name: euiControlBarOpenPanelSmall;
    height: 240px;
    bottom: -240px; }

.euiControlBar__controls {
  height: 40px;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0 12px; }

.euiControlBar__content {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 40px);
  background-color: #fafbfd;
  -webkit-animation-name: euiControlBarShowContent;
          animation-name: euiControlBarShowContent;
  -webkit-animation-duration: 350ms;
          animation-duration: 350ms;
  -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
  -webkit-animation-timing-function: cubic-bezier(0.694, 0.0482, 0.335, 1);
          animation-timing-function: cubic-bezier(0.694, 0.0482, 0.335, 1);
  color: #343741; }
  .euiControlBar__content::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiControlBar__content::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiControlBar__content::-webkit-scrollbar-corner, .euiControlBar__content::-webkit-scrollbar-track {
    background-color: transparent; }

.euiControlBar__icon {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  margin-left: 8px;
  margin-right: 8px; }

.euiControlBar__buttonIcon {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  min-width: 40px;
  min-height: 40px; }

.euiControlBar__button {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  border-radius: 3px;
  margin-left: 4px;
  font-size: 14px; }
  .euiControlBar__button:enabled:hover {
    -webkit-transform: none;
            transform: none;
    box-shadow: none; }
  .euiControlBar__button:last-child {
    margin-right: 4px; }

.euiControlBar__breadcrumbs .euiBreadcrumb:not(:last-of-type) .euiBreadcrumb__content {
  color: #9ca0aa; }

.euiControlBar__breadcrumbs .euiBreadcrumb::after {
  background: rgba(255, 255, 255, 0.2); }

.euiControlBar__spacer {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  height: 100%; }

.euiControlBar__divider {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2); }

.euiControlBar__text {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  padding: 0 8px;
  color: white; }
  .euiControlBar__text:last-child {
    padding-right: 0; }

.euiControlBar__tab {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  color: white;
  padding: 0 16px;
  text-align: center;
  height: 100%; }
  .euiControlBar__tab:hover, .euiControlBar__tab:focus {
    text-decoration: underline;
    cursor: pointer; }
  .euiControlBar__tab.euiControlBar__tab--active {
    background-color: #fafbfd;
    box-shadow: inset 0 4px 0 #0071c2;
    color: #0071c2; }

.euiControlBar__controls .euiLink.euiLink--primary {
  color: #5eaadf; }
  .euiControlBar__controls .euiLink.euiLink--primary:hover {
    color: #4da0db; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #FFF; }

.euiControlBar__controls .euiControlBar__button.euiButton--primary:enabled {
  box-shadow: none; }

.euiControlBar__controls .euiControlBar__button.euiButton--primary:enabled:not(.euiButton--fill) {
  color: #5eaadf;
  border-color: #5eaadf; }

.euiControlBar__controls .euiButtonIcon--primary {
  color: #5eaadf; }

.euiControlBar__controls .euiLink.euiLink--accent {
  color: #f576af; }
  .euiControlBar__controls .euiLink.euiLink--accent:hover {
    color: #f583b7; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #FFF; }

.euiControlBar__controls .euiControlBar__button.euiButton--accent:enabled {
  box-shadow: none; }

.euiControlBar__controls .euiControlBar__button.euiButton--accent:enabled:not(.euiButton--fill) {
  color: #f576af;
  border-color: #f576af; }

.euiControlBar__controls .euiButtonIcon--accent {
  color: #f576af; }

.euiControlBar__controls .euiLink.euiLink--success {
  color: #00BFB3; }
  .euiControlBar__controls .euiLink.euiLink--success:hover {
    color: #4dd2ca; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #FFF; }

.euiControlBar__controls .euiControlBar__button.euiButton--success:enabled {
  box-shadow: none; }

.euiControlBar__controls .euiControlBar__button.euiButton--success:enabled:not(.euiButton--fill) {
  color: #00BFB3;
  border-color: #00BFB3; }

.euiControlBar__controls .euiButtonIcon--success {
  color: #00BFB3; }

.euiControlBar__controls .euiLink.euiLink--warning {
  color: #FEC514; }
  .euiControlBar__controls .euiLink.euiLink--warning:hover {
    color: #fed65b; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #FFF; }

.euiControlBar__controls .euiControlBar__button.euiButton--warning:enabled {
  box-shadow: none; }

.euiControlBar__controls .euiControlBar__button.euiButton--warning:enabled:not(.euiButton--fill) {
  color: #FEC514;
  border-color: #FEC514; }

.euiControlBar__controls .euiButtonIcon--warning {
  color: #FEC514; }

.euiControlBar__controls .euiLink.euiLink--danger {
  color: #db8a85; }
  .euiControlBar__controls .euiLink.euiLink--danger:hover {
    color: #d16862; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #FFF; }

.euiControlBar__controls .euiControlBar__button.euiButton--danger:enabled {
  box-shadow: none; }

.euiControlBar__controls .euiControlBar__button.euiButton--danger:enabled:not(.euiButton--fill) {
  color: #db8a85;
  border-color: #db8a85; }

.euiControlBar__controls .euiButtonIcon--danger {
  color: #db8a85; }

.euiControlBar__controls .euiLink.euiLink--ghost {
  color: #FFF; }
  .euiControlBar__controls .euiLink.euiLink--ghost:hover {
    color: white; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #FFF; }

.euiControlBar__controls .euiControlBar__button.euiButton--ghost:enabled {
  box-shadow: none; }

.euiControlBar__controls .euiControlBar__button.euiButton--ghost:enabled:not(.euiButton--fill) {
  color: #FFF;
  border-color: #FFF; }

.euiControlBar__controls .euiButtonIcon--ghost {
  color: #FFF; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #9ca0aa; }
  .euiControlBar__controls .euiLink.euiLink--text:hover {
    color: #969ba4; }

.euiControlBar__controls .euiLink.euiLink--text {
  color: #FFF; }

.euiControlBar__controls .euiControlBar__button.euiButton--text:enabled {
  box-shadow: none; }

.euiControlBar__controls .euiControlBar__button.euiButton--text:enabled:not(.euiButton--fill) {
  color: #9ca0aa;
  border-color: #9ca0aa; }

.euiControlBar__controls .euiButtonIcon--text {
  color: #9ca0aa; }

@media only screen and (max-width: 574px) {
  .euiControlBar:not(.euiControlBar--showOnMobile) {
    display: none; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiControlBar:not(.euiControlBar--showOnMobile) {
    display: none; } }

@-webkit-keyframes euiControlBarOpenPanelLarge {
  0% {
    -webkit-transform: translateY(calc((40px * 3) * -1));
            transform: translateY(calc((40px * 3) * -1)); }
  100% {
    -webkit-transform: translateY(-100vh);
            transform: translateY(-100vh); } }

@keyframes euiControlBarOpenPanelLarge {
  0% {
    -webkit-transform: translateY(calc((40px * 3) * -1));
            transform: translateY(calc((40px * 3) * -1)); }
  100% {
    -webkit-transform: translateY(-100vh);
            transform: translateY(-100vh); } }

@-webkit-keyframes euiControlBarOpenPanelMedium {
  0% {
    -webkit-transform: translateY(-40px);
            transform: translateY(-40px); }
  100% {
    -webkit-transform: translateY(-480px);
            transform: translateY(-480px); } }

@keyframes euiControlBarOpenPanelMedium {
  0% {
    -webkit-transform: translateY(-40px);
            transform: translateY(-40px); }
  100% {
    -webkit-transform: translateY(-480px);
            transform: translateY(-480px); } }

@-webkit-keyframes euiControlBarOpenPanelSmall {
  0% {
    -webkit-transform: translateY(-40px);
            transform: translateY(-40px); }
  100% {
    -webkit-transform: translateY(-240px);
            transform: translateY(-240px); } }

@keyframes euiControlBarOpenPanelSmall {
  0% {
    -webkit-transform: translateY(-40px);
            transform: translateY(-40px); }
  100% {
    -webkit-transform: translateY(-240px);
            transform: translateY(-240px); } }

@-webkit-keyframes euiControlBarShowContent {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@keyframes euiControlBarShowContent {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

/**
 * 1. Account for inner box-shadow style border
 */
.euiDatePickerRange {
  max-width: 400px;
  width: 100%;
  height: auto;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  padding: 1px;
  /* 1 */ }
  .euiDatePickerRange--fullWidth {
    max-width: 100%; }
  .euiDatePickerRange--compressed {
    height: 32px; }
  .euiDatePickerRange--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiDatePickerRange {
      transition-property: box-shadow, background-image, background-size; } }
  .euiDatePickerRange > * {
    -webkit-flex-grow: 1;
            flex-grow: 1; }
  .euiDatePickerRange .euiFieldText.euiDatePicker {
    height: 38px;
    box-shadow: none !important;
    text-align: center; }
  .euiDatePickerRange .euiDatePickerRange__start {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0; }
  .euiDatePickerRange .euiDatePickerRange__end {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0; }
  .euiDatePickerRange .react-datepicker-popper .euiFieldText.euiDatePicker {
    text-align: left; }
  .euiDatePickerRange--inGroup {
    box-shadow: none;
    padding: 0; }

.euiDatePickerRange--isDisabled {
  background: #eef2f7; }

.euiDatePickerRange--readOnly {
  background: #FFF; }

.euiDatePickerRange__delimeter {
  -webkit-align-self: stretch;
          align-self: stretch;
  height: auto;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }

.euiDatePickerRange--isInvalid .euiDatePickerRange__delimeter {
  background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
  background-size: 100%; }

.euiSuperDatePicker__absoluteDateFormRow {
  padding: 0 8px 8px; }

.euiDatePopoverButton {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  display: block;
  width: 100%;
  padding: 0 8px;
  line-height: 38px;
  height: 38px;
  word-break: break-all;
  transition: background 150ms ease-in;
  background-size: 100%; }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiDatePopoverButton {
      line-height: 1em; } }
  .euiDatePopoverButton::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiDatePopoverButton::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiDatePopoverButton::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiDatePopoverButton--compressed {
    line-height: 30px;
    height: 30px; }
  .euiDatePopoverButton:focus, .euiDatePopoverButton-isSelected {
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%); }
  .euiDatePopoverButton-needsUpdating {
    background-color: #e6f9f7;
    color: #007e77; }
    .euiDatePopoverButton-needsUpdating:focus, .euiDatePopoverButton-needsUpdating.euiDatePopoverButton-isSelected {
      background-image: linear-gradient(to top, #00BFB3, #00BFB3 2px, transparent 2px, transparent 100%); }
  .euiDatePopoverButton-isInvalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%;
    background-color: transparent;
    color: #BD271E; }
    .euiDatePopoverButton-isInvalid:focus, .euiDatePopoverButton-isInvalid.euiDatePopoverButton-isSelected {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%); }
  .euiDatePopoverButton:disabled {
    background-color: #eef2f7;
    color: #69707D;
    cursor: default; }

.euiDatePopoverButton--start {
  text-align: right; }

.euiDatePopoverButton--end {
  text-align: left; }

.euiDatePopoverContent {
  width: 400px;
  max-width: 100%; }

.euiDatePopoverContent__padded {
  padding: 8px; }

.euiDatePopoverContent__padded--large {
  padding: 16px; }

@media only screen and (max-width: 574px) {
  .euiDatePopoverContent {
    width: 284px; } }

.euiQuickSelectPopover__content {
  width: 400px;
  max-width: 100%; }

.euiQuickSelectPopover__section {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  max-height: 132px;
  overflow: hidden;
  overflow-y: auto;
  padding: 8px 0 4px; }
  .euiQuickSelectPopover__section::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiQuickSelectPopover__section::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiQuickSelectPopover__section::-webkit-scrollbar-corner, .euiQuickSelectPopover__section::-webkit-scrollbar-track {
    background-color: transparent; }

.euiQuickSelectPopover__buttonText {
  margin-right: 4px !important; }

.euiQuickSelectPopover__anchor {
  height: 100%; }

.euiQuickSelectPopover__sectionItem {
  font-size: 14px;
  line-height: 14px; }
  .euiQuickSelectPopover__sectionItem:not(:last-of-type) {
    margin-bottom: 8px; }

.euiQuickSelect__applyButton {
  min-width: 0; }

.euiRefreshInterval__startButton {
  min-width: 90px; }

.euiSuperDatePicker__flexWrapper {
  max-width: calc(100% + 8px);
  min-width: MIN(326px, 100%);
  width: 606px; }
  .euiSuperDatePicker__flexWrapper.euiSuperDatePicker__flexWrapper--fullWidth {
    width: calc(100% + 8px); }
  .euiSuperDatePicker__flexWrapper.euiSuperDatePicker__flexWrapper--isQuickSelectOnly {
    min-width: 0; }
  .euiSuperDatePicker__flexWrapper.euiSuperDatePicker__flexWrapper--autoWidth {
    display: -webkit-inline-flex;
    display: inline-flex;
    width: auto; }

.euiSuperDatePicker__flexWrapper--isAutoRefreshOnly {
  min-width: MIN(200px, 100%);
  width: 400px; }

.euiSuperDatePicker__flexWrapper--noUpdateButton {
  min-width: MIN(200px, 100%);
  width: 480px; }

.euiSuperDatePicker {
  max-width: 100% !important; }
  .euiSuperDatePicker > .euiFormControlLayout__childrenWrapper {
    -webkit-flex: 1 1 100%;
            flex: 1 1 100%;
    overflow: hidden; }
    .euiSuperDatePicker > .euiFormControlLayout__childrenWrapper > .euiDatePickerRange {
      max-width: none;
      width: auto;
      border-radius: 0 6px 6px 0; }
    .euiSuperDatePicker > .euiFormControlLayout__childrenWrapper:not(:last-child) > .euiDatePickerRange,
    .euiSuperDatePicker > .euiFormControlLayout__childrenWrapper:not(:last-child) > .euiDatePickerRange .euiDatePopoverButton--end,
    .euiSuperDatePicker > .euiFormControlLayout__childrenWrapper:not(:last-child) > .euiDatePickerRange .euiSuperDatePicker__prettyFormat {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0; }

.euiSuperDatePicker__prettyFormat {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  display: block;
  width: 100%;
  padding: 0 8px;
  line-height: 38px;
  height: 38px;
  word-break: break-all;
  transition: background 150ms ease-in;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  text-align: left; }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiSuperDatePicker__prettyFormat {
      line-height: 1em; } }
  .euiSuperDatePicker__prettyFormat::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSuperDatePicker__prettyFormat::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSuperDatePicker__prettyFormat::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSuperDatePicker__prettyFormat:not(:disabled):hover, .euiSuperDatePicker__prettyFormat:focus {
    text-decoration: none; }
  .euiSuperDatePicker__prettyFormat:disabled {
    background-color: #eef2f7;
    color: #69707D;
    cursor: not-allowed; }

@media only screen and (max-width: 574px) {
  .euiSuperDatePicker__flexWrapper {
    width: calc(100% + 8px); } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiSuperDatePicker__flexWrapper {
    width: calc(100% + 8px); } }

.euiDataGrid {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: stretch;
          align-items: stretch;
  overflow: hidden;
  height: 100%; }

.euiDataGrid--fullScreen {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #FFF; }
  .euiDataGrid--fullScreen .euiDataGrid__pagination {
    padding-bottom: 4px;
    background: #F5F7FA;
    box-shadow: 1px 0 0 1px #D3DAE6; }

.euiDataGrid__content {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  height: 100%;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;
  background: #fafbfd;
  font-feature-settings: 'tnum' 1; }

.euiDataGrid__pagination {
  z-index: 2;
  padding-top: 4px;
  -webkit-flex-grow: 0;
          flex-grow: 0; }

.euiDataGrid__restrictBody {
  height: 100vh;
  overflow: hidden; }
  .euiDataGrid__restrictBody .euiHeader {
    z-index: 998; }

.euiDataGrid__focusWrap {
  height: 100%; }

.euiDataGrid__virtualized {
  scrollbar-color: rgba(105, 112, 125, 0.5) #FFF;
  scrollbar-width: thin;
  scroll-padding: 0; }
  .euiDataGrid__virtualized::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiDataGrid__virtualized::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid #FFF; }
  .euiDataGrid__virtualized::-webkit-scrollbar-corner, .euiDataGrid__virtualized::-webkit-scrollbar-track {
    background-color: #FFF; }

.euiDataGrid__scrollOverlay {
  position: absolute;
  top: -1px;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px #D3DAE6; }
  .euiDataGrid--bordersHorizontal .euiDataGrid__scrollOverlay {
    box-shadow: inset 0 -2px 0 -1px #D3DAE6; }
  .euiDataGrid__scrollOverlay .euiDataGrid__scrollBarOverlayBottom {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #D3DAE6; }
  .euiDataGrid__scrollOverlay .euiDataGrid__scrollBarOverlayRight {
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #D3DAE6; }

.euiDataGridHeader {
  display: -webkit-flex;
  display: flex;
  z-index: 3;
  background: #FFF;
  position: -webkit-sticky;
  position: sticky;
  top: 0; }

.euiDataGridHeaderCell {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 700;
  padding: 6px;
  -webkit-flex: 0 0 auto;
          flex: 0 0 auto;
  position: relative;
  -webkit-align-items: center;
          align-items: center;
  display: -webkit-flex;
  display: flex; }
  .euiDataGridHeaderCell.euiDataGridHeaderCell--numeric {
    text-align: right; }
  .euiDataGridHeaderCell.euiDataGridHeaderCell--currency {
    text-align: right; }
  .euiDataGridHeaderCell:focus {
    outline: none;
    border-top: none; }
    .euiDataGridHeaderCell:focus::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 2px solid #0071c2;
      border-radius: 4px;
      z-index: 2;
      pointer-events: none; }
  .euiDataGridHeaderCell:not(.euiDataGridHeaderCell--controlColumn):focus-within {
    outline: none;
    border-top: none; }
    .euiDataGridHeaderCell:not(.euiDataGridHeaderCell--controlColumn):focus-within::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 2px solid #0071c2;
      border-radius: 4px;
      z-index: 2;
      pointer-events: none; }
  .euiDataGridHeaderCell:not(.euiDataGridHeaderCell--controlColumn) .euiDataGridHeaderCell__sortingArrow {
    margin-right: 4px; }
  .euiDataGridHeaderCell:not(.euiDataGridHeaderCell--controlColumn) .euiDataGridHeaderCell__button {
    -webkit-flex: 0 0 auto;
            flex: 0 0 auto;
    position: relative;
    -webkit-align-items: center;
            align-items: center;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    font-weight: 700;
    outline: none; }
    .euiDataGridHeaderCell:not(.euiDataGridHeaderCell--controlColumn) .euiDataGridHeaderCell__button .euiDataGridHeaderCell__sortingArrow {
      -webkit-flex-grow: 0;
              flex-grow: 0; }
  .euiDataGridHeaderCell:not(.euiDataGridHeaderCell--controlColumn) .euiDataGridHeaderCell__content {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    -webkit-flex-grow: 1;
            flex-grow: 1;
    -webkit-align-self: baseline;
            align-self: baseline; }
  .euiDataGridHeaderCell:not(.euiDataGridHeaderCell--controlColumn) .euiDataGridHeaderCell__icon {
    -webkit-flex-grow: 0;
            flex-grow: 0;
    -webkit-flex-basis: auto;
            flex-basis: auto;
    width: auto;
    padding-left: 4px; }

.euiDataGridHeader__action--selected {
  font-weight: 700 !important; }

.euiDataGrid--bordersNone.euiDataGrid--bordersHorizontal .euiDataGridHeader {
  background: #FFF; }

.euiDataGrid--headerUnderline .euiDataGridHeaderCell {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #D3DAE6;
  border-bottom-color: #343741; }

.euiDataGrid--bordersNone.euiDataGrid--headerUnderline .euiDataGridHeaderCell {
  border-bottom: 2px solid #D3DAE6;
  border-color: #343741; }

.euiDataGrid--headerShade .euiDataGridHeaderCell {
  background: #f5f7fa; }

.euiDataGrid--headerShade.euiDataGrid--bordersAll .euiDataGridHeaderCell {
  border-right: 1px solid #D3DAE6;
  border-bottom: 1px solid #D3DAE6;
  border-left: none; }
  .euiDataGrid--headerShade.euiDataGrid--bordersAll .euiDataGridHeaderCell:first-of-type {
    border-left: 1px solid #D3DAE6; }

.euiDataGrid--headerShade.euiDataGrid--bordersHorizontal .euiDataGridHeaderCell {
  border-top: none;
  border-bottom: 1px solid #D3DAE6; }

.euiDataGrid--bordersNone .euiDataGridHeaderCell {
  border: none; }

.euiDataGrid--borderhorizontal .euiDataGridHeaderCell {
  border-top: none;
  border-right: none;
  border-left: none; }

.euiDataGrid--fontSizeSmall .euiDataGridHeaderCell {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem; }

.euiDataGrid--fontSizeLarge .euiDataGridHeaderCell {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem; }

.euiDataGrid--paddingSmall .euiDataGridHeaderCell {
  padding: 4px; }

.euiDataGrid--paddingLarge .euiDataGridHeaderCell {
  padding: 8px; }

.euiDataGrid--noControls.euiDataGrid--bordersAll .euiDataGridHeaderCell {
  border-top: 1px solid #D3DAE6; }

.euiDataGrid--noControls.euiDataGrid--bordersHorizontal .euiDataGridHeaderCell {
  border-top: 1px solid #D3DAE6; }

.euiDataGridFooter {
  display: -webkit-flex;
  display: flex; }

.euiDataGridRowCell.euiDataGridFooterCell {
  -webkit-flex: 0 0 auto;
          flex: 0 0 auto;
  position: relative;
  font-weight: 700; }

.euiDataGrid--stickyFooter .euiDataGridFooter {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0; }

.euiDataGrid--footerOverline .euiDataGridRowCell.euiDataGridFooterCell {
  border-top: 2px solid #D3DAE6;
  border-top-color: #343741 !important;
  background: #FFF !important; }

.euiDataGrid--bordersNone .euiDataGridRowCell.euiDataGridFooterCell {
  border-left: none;
  border-right: none; }

.euiDataGrid--bordersHorizontal .euiDataGridRowCell.euiDataGridFooterCell {
  border-left: none;
  border-right: none; }

.euiDataGrid--footerShade .euiDataGridRowCell.euiDataGridFooterCell {
  background: #f5f7fa; }

.euiDataGridColumnResizer {
  position: absolute;
  top: 0;
  right: -8px;
  height: 100%;
  width: 16px;
  cursor: ew-resize;
  opacity: 0;
  z-index: 2; }
  .euiDataGridColumnResizer:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #07C; }
  .euiDataGridColumnResizer:hover, .euiDataGridColumnResizer:active {
    opacity: 1; }
    .euiDataGridColumnResizer:hover ~ .euiDataGridHeaderCell__content, .euiDataGridColumnResizer:active ~ .euiDataGridHeaderCell__content {
      -webkit-user-select: none;
         -moz-user-select: none;
              user-select: none; }

.euiDataGridHeaderCell:last-child .euiDataGridColumnResizer {
  right: 0;
  width: 8px; }
  .euiDataGridHeaderCell:last-child .euiDataGridColumnResizer:after {
    left: auto;
    right: 0; }

.euiDataGridRow {
  background-color: #FFF; }

.euiDataGridRowCell {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  padding: 6px;
  border-right: solid 1px #edf0f5;
  border-bottom: 1px solid #D3DAE6;
  overflow: hidden; }
  .euiDataGridRowCell > * {
    height: 100%; }
  .euiDataGridRowCell.euiDataGridRowCell--firstColumn {
    border-left: 1px solid #D3DAE6; }
  .euiDataGridRowCell.euiDataGridRowCell--lastColumn {
    border-right-color: #D3DAE6; }
  .euiDataGridRowCell:focus {
    outline: none; }
    .euiDataGridRowCell:focus::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 2px solid #0071c2;
      border-radius: 4px;
      z-index: 2;
      pointer-events: none; }
  .euiDataGridRowCell:hover .euiDataGridRowCell__actionButtonIcon {
    -webkit-animation-duration: 90ms;
            animation-duration: 90ms;
    -webkit-animation-name: euiDataGridCellActionsSlideIn;
            animation-name: euiDataGridCellActionsSlideIn;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-animation-delay: 250ms;
            animation-delay: 250ms;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards; }
  .euiDataGridRowCell:focus .euiDataGridRowCell__actionButtonIcon, .euiDataGridRowCell:focus-within .euiDataGridRowCell__actionButtonIcon, .euiDataGridRowCell.euiDataGridRowCell--open .euiDataGridRowCell__actionButtonIcon {
    -webkit-animation: none;
            animation: none;
    margin-left: 6px;
    width: 12px; }
  .euiDataGridRowCell:not(:hover):not(:focus):not(.euiDataGridRowCell--open) .euiDataGridRowCell__actionButtonIcon {
    display: none; }
  .euiDataGridRowCell.euiDataGridRowCell--numeric {
    text-align: right; }
  .euiDataGridRowCell.euiDataGridRowCell--currency {
    text-align: right; }
  .euiDataGridRowCell.euiDataGridRowCell--uppercase {
    text-transform: uppercase; }
  .euiDataGridRowCell.euiDataGridRowCell--lowercase {
    text-transform: lowercase; }
  .euiDataGridRowCell.euiDataGridRowCell--capitalize {
    text-transform: capitalize; }
  .euiDataGridRowCell .euiDataGridRowCell__definedHeight {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word;
    -webkit-flex-grow: 1;
            flex-grow: 1; }
  .euiDataGridRowCell:not(.euiDataGridRowCell--controlColumn) .euiDataGridRowCell__content,
  .euiDataGridRowCell:not(.euiDataGridRowCell--controlColumn) .euiDataGridRowCell__truncate, .euiDataGridRowCell:not(.euiDataGridRowCell--controlColumn).euiDataGridRowCell__truncate,
  .euiDataGridRowCell:not(.euiDataGridRowCell--controlColumn) .euiDataGridRowCell__expandContent {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    overflow: hidden;
    white-space: nowrap; }

.euiDataGridRowCell__popover {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  overflow: auto;
  max-width: 400px !important;
  max-height: 400px !important;
  z-index: 1000 !important; }
  .euiDataGridRowCell__popover::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiDataGridRowCell__popover::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiDataGridRowCell__popover::-webkit-scrollbar-corner, .euiDataGridRowCell__popover::-webkit-scrollbar-track {
    background-color: transparent; }

.euiDataGridRowCell__expandFlex {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: baseline;
          align-items: baseline;
  height: 100%; }
  .euiDataGridRowCell--controlColumn .euiDataGridRowCell__expandFlex {
    -webkit-align-items: center;
            align-items: center; }

.euiDataGridRowCell__expandContent {
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.euiDataGridRowCell__contentByHeight {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  height: 100%; }

.euiDataGridRowCell__expandActions {
  display: -webkit-flex;
  display: flex; }

.euiDataGridRowCell__expandContent + .euiDataGridRowCell__expandActions {
  -webkit-flex-grow: 0;
          flex-grow: 0; }

.euiDataGridRowCell__contentByHeight + .euiDataGridRowCell__expandActions {
  background-color: #FFF;
  position: absolute;
  right: 0;
  top: 0;
  padding: 6px 0; }

.euiDataGridRowCell__actionButtonIcon {
  height: 12px;
  border-radius: 3px;
  width: 0;
  overflow: hidden;
  transition: none;
  box-shadow: none !important;
  border: none; }

.euiDataGrid--stripes .euiDataGridRow--striped {
  background-color: #F5F7FA; }
  .euiDataGrid--stripes .euiDataGridRow--striped .euiDataGridRowCell__contentByHeight + .euiDataGridRowCell__expandActions {
    background-color: #F5F7FA; }

.euiDataGrid--rowHoverHighlight .euiDataGridRow:hover {
  background-color: #fff9e8; }
  .euiDataGrid--rowHoverHighlight .euiDataGridRow:hover .euiDataGridRowCell__contentByHeight + .euiDataGridRowCell__expandActions {
    background-color: #fff9e8; }

.euiDataGrid--bordersNone .euiDataGridRowCell {
  border-color: transparent !important; }

.euiDataGrid--bordersHorizontal .euiDataGridRowCell {
  border-right-color: transparent;
  border-left-color: transparent; }

.euiDataGrid--fontSizeSmall .euiDataGridRowCell {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem; }

.euiDataGrid--fontSizeLarge .euiDataGridRowCell {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem; }

.euiDataGrid--paddingSmall .euiDataGridRowCell {
  padding: 4px; }

.euiDataGrid--paddingLarge .euiDataGridRowCell {
  padding: 8px; }

.euiDataGrid--fontSizeSmall.euiDataGrid--paddingSmall .euiDataGridRowCell__contentByHeight + .euiDataGridRowCell__expandActions {
  padding: 2px 0; }

.euiDataGrid--fontSizeSmall.euiDataGrid--paddingSmall .euiDataGridRowCell__expandContent + .euiDataGridRowCell__expandActions {
  -webkit-transform: translateY(1px);
          transform: translateY(1px); }

@-webkit-keyframes euiDataGridCellActionsSlideIn {
  from {
    margin-left: 0;
    width: 0; }
  to {
    margin-left: 6px;
    width: 12px; } }

@keyframes euiDataGridCellActionsSlideIn {
  from {
    margin-left: 0;
    width: 0; }
  to {
    margin-left: 6px;
    width: 12px; } }

.euiDataGrid__controls {
  background: #fafbfd;
  position: relative;
  z-index: 2;
  border: 1px solid #D3DAE6;
  padding: 4px 4px 4px 0;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-align-items: center;
          align-items: center; }

.euiDataGrid__rightControls {
  white-space: nowrap; }
  .euiDataGrid__rightControls:only-child {
    margin-left: auto; }
  .euiDataGrid__rightControls > * + * {
    margin-left: 8px; }

.euiDataGrid__leftControls > * + * {
  margin-left: 2px; }

.euiDataGrid__controlBtn--active,
.euiDataGrid__controlBtn--active:focus {
  font-weight: 600; }

.euiDataGrid--bordersNone .euiDataGrid__controls {
  border: none;
  background: #FFF; }

.euiDataGrid--bordersHorizontal .euiDataGrid__controls {
  border-right: none;
  border-left: none;
  border-top: none;
  background: #FFF; }

.euiDataGrid__controlPopoverWithDragDrop {
  -webkit-transform: none !important;
          transform: none !important;
  transition: none !important;
  margin-top: -8px; }

.euiDataGrid__controlScroll {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
          mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
  max-height: 400px;
  padding: 8px;
  margin: -8px; }
  .euiDataGrid__controlScroll::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiDataGrid__controlScroll::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiDataGrid__controlScroll::-webkit-scrollbar-corner, .euiDataGrid__controlScroll::-webkit-scrollbar-track {
    background-color: transparent; }
  .euiDataGrid__controlScroll:focus {
    outline: none;
    /* 1 */ }
  .euiDataGrid__controlScroll[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

.euiDataGridColumnSelector__item {
  padding: 4px; }
  .euiDataGridColumnSelector__item-isDragging {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
    background: #FFF; }

.euiDataGridColumnSelector__columnList {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
          mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
  max-height: 400px;
  margin: 0 -8px; }
  .euiDataGridColumnSelector__columnList::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiDataGridColumnSelector__columnList::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiDataGridColumnSelector__columnList::-webkit-scrollbar-corner, .euiDataGridColumnSelector__columnList::-webkit-scrollbar-track {
    background-color: transparent; }
  .euiDataGridColumnSelector__columnList:focus {
    outline: none;
    /* 1 */ }
  .euiDataGridColumnSelector__columnList[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

.euiDataGridColumnSelector__itemLabel {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem; }

.euiDataGridColumnSorting__item-isDragging {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
  background: #FFF; }

.euiDataGridColumnSorting__fieldList {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
          mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
  padding-top: 4px;
  padding-bottom: 4px;
  max-height: 300px; }
  .euiDataGridColumnSorting__fieldList::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiDataGridColumnSorting__fieldList::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiDataGridColumnSorting__fieldList::-webkit-scrollbar-corner, .euiDataGridColumnSorting__fieldList::-webkit-scrollbar-track {
    background-color: transparent; }
  .euiDataGridColumnSorting__fieldList:focus {
    outline: none;
    /* 1 */ }
  .euiDataGridColumnSorting__fieldList[tabindex='0']:focus:focus-visible {
    outline-style: auto;
    /* 2 */ }

.euiDataGridColumnSorting__field {
  display: block;
  padding: 4px 8px;
  width: 100%;
  outline-offset: -2px; }
  .euiDataGridColumnSorting__field:hover {
    cursor: pointer;
    text-decoration: underline; }
  .euiDataGridColumnSorting__field:focus {
    cursor: pointer;
    text-decoration: underline;
    background-color: rgba(0, 119, 204, 0.1); }
  .euiDataGridColumnSorting__field:disabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #ABB4C4; }

.euiDataGridColumnSorting__orderButtons {
  padding-left: 24px; }
  @media only screen and (max-width: 574px) {
    .euiDataGridColumnSorting__orderButtons {
      padding-left: 4px; } }
  @media only screen and (min-width: 575px) and (max-width: 767px) {
    .euiDataGridColumnSorting__orderButtons {
      padding-left: 4px; } }
  .euiDataGridColumnSorting__orderButtons .euiDataGridColumnSorting__order {
    min-width: 200px;
    border: none; }
    @media only screen and (max-width: 574px) {
      .euiDataGridColumnSorting__orderButtons .euiDataGridColumnSorting__order {
        min-width: unset; } }
    @media only screen and (min-width: 575px) and (max-width: 767px) {
      .euiDataGridColumnSorting__orderButtons .euiDataGridColumnSorting__order {
        min-width: unset; } }
    .euiDataGridColumnSorting__orderButtons .euiDataGridColumnSorting__order button {
      font-size: 12px !important; }

.euiDataGrid__displayPopoverPanel {
  width: 416px; }

.euiDraggable.euiDraggable--isDragging {
  z-index: 9000 !important; }

.euiDraggable.euiDraggable--hasClone:not(.euiDraggable--isDragging) {
  -webkit-transform: none !important;
          transform: none !important; }

.euiDraggable.euiDraggable--withoutDropAnimation {
  transition-duration: .001s !important; }

.euiDraggable:focus > .euiDraggable__item,
.euiDraggable.euiDraggable--hasCustomDragHandle > .euiDraggable__item [data-react-beautiful-dnd-drag-handle]:focus {
  outline: 2px solid currentColor; }
  .euiDraggable:focus > .euiDraggable__item:focus-visible,
  .euiDraggable.euiDraggable--hasCustomDragHandle > .euiDraggable__item [data-react-beautiful-dnd-drag-handle]:focus:focus-visible {
    outline-style: auto; }
  .euiDraggable:focus > .euiDraggable__item:not(:focus-visible),
  .euiDraggable.euiDraggable--hasCustomDragHandle > .euiDraggable__item [data-react-beautiful-dnd-drag-handle]:focus:not(:focus-visible) {
    outline: none; }

.euiDraggable .euiDraggable__item.euiDraggable__item--isDisabled {
  cursor: not-allowed; }

.euiDraggable--s {
  padding: 2px; }

.euiDraggable--m {
  padding: 4px; }

.euiDraggable--l {
  padding: 8px; }

.euiDroppable {
  transition: background-color 500ms ease; }
  .euiDroppable.euiDroppable--isDraggingType:not(.euiDroppable--isDisabled) {
    background-color: rgba(0, 191, 179, 0.1); }
    .euiDroppable.euiDroppable--isDraggingType:not(.euiDroppable--isDisabled).euiDroppable--isDraggingOver {
      background-color: rgba(0, 191, 179, 0.25); }
  .euiDroppable .euiDroppable__placeholder.euiDroppable__placeholder--isHidden {
    display: none !important; }

.euiDroppable--withPanel {
  -webkit-flex-grow: 1;
          flex-grow: 1; }
  .euiDroppable--withPanel.euiDroppable--withPanel--flexGrowZero {
    -webkit-flex-grow: 0;
            flex-grow: 0; }
  .euiDroppable--withPanel.euiDroppable--withPanel--hasShadow {
    box-shadow: 0 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0 2.6px 8px -1px rgba(0, 0, 0, 0.06), 0 5.7px 12px -1px rgba(0, 0, 0, 0.05), 0 15px 15px -1px rgba(0, 0, 0, 0.04); }
  .euiDroppable--withPanel.euiDroppable--withPanel--hasBorder {
    border: 1px solid #D3DAE6;
    box-shadow: none; }
  .euiDroppable--withPanel.euiDroppable--withPanel--isClickable {
    transition: all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
    .euiDroppable--withPanel.euiDroppable--withPanel--isClickable:enabled {
      display: block;
      width: 100%;
      text-align: left; }
    .euiDroppable--withPanel.euiDroppable--withPanel--isClickable:hover, .euiDroppable--withPanel.euiDroppable--withPanel--isClickable:focus {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
      -webkit-transform: translateY(-2px);
              transform: translateY(-2px);
      cursor: pointer; }
  .euiDroppable--withPanel.euiDroppable--withPanel--borderRadiusNone {
    border-radius: 0; }
  .euiDroppable--withPanel.euiDroppable--withPanel--borderRadiusMedium {
    border-radius: 4px; }
  .euiDroppable--withPanel.euiDroppable--withPanel--transparent {
    background-color: transparent; }
  .euiDroppable--withPanel.euiDroppable--withPanel--plain {
    background-color: #FFF; }
  .euiDroppable--withPanel.euiDroppable--withPanel--subdued {
    background-color: #fafbfd; }
  .euiDroppable--withPanel.euiDroppable--withPanel--accent {
    background-color: #feedf5; }
  .euiDroppable--withPanel.euiDroppable--withPanel--primary {
    background-color: #e6f1fa; }
  .euiDroppable--withPanel.euiDroppable--withPanel--success {
    background-color: #e6f9f7; }
  .euiDroppable--withPanel.euiDroppable--withPanel--warning {
    background-color: #fff9e8; }
  .euiDroppable--withPanel.euiDroppable--withPanel--danger {
    background-color: #f8e9e9; }

.euiDroppable--withPanel {
  box-shadow: 0 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0 2.6px 8px -1px rgba(0, 0, 0, 0.06), 0 5.7px 12px -1px rgba(0, 0, 0, 0.05), 0 15px 15px -1px rgba(0, 0, 0, 0.04);
  border-radius: 6px; }

.euiDroppable--noGrow {
  -webkit-flex-grow: 0;
          flex-grow: 0; }

.euiDroppable--grow {
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.euiDroppable--s {
  padding: 2px; }

.euiDroppable--m {
  padding: 4px; }

.euiDroppable--l {
  padding: 8px; }

.euiEmptyPrompt {
  text-align: center;
  margin: auto; }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .euiEmptyPrompt {
      max-width: -webkit-max-content;
      max-width: -moz-max-content;
      max-width: max-content; } }
  @media only screen and (min-width: 1200px) {
    .euiEmptyPrompt {
      max-width: -webkit-max-content;
      max-width: -moz-max-content;
      max-width: max-content; } }
  .euiEmptyPrompt .euiEmptyPrompt__icon > * {
    -webkit-flex-shrink: 1;
            flex-shrink: 1;
    max-width: 25.71429rem; }
  .euiEmptyPrompt.euiPanel--transparent .euiEmptyPrompt__footer {
    background-color: #fafbfd; }
  .euiEmptyPrompt.euiPanel--transparent:not(.euiPanel--hasBorder) .euiEmptyPrompt__footer {
    border-radius: 6px; }
  .euiEmptyPrompt.euiPanel--transparent.euiPanel--hasBorder .euiEmptyPrompt__footer {
    border-radius: 0 0 6px 6px; }
  .euiEmptyPrompt.euiPanel--plain .euiEmptyPrompt__footer {
    background-color: #fafbfd;
    border-radius: 0 0 6px 6px; }
  .euiEmptyPrompt.euiPanel--subdued .euiEmptyPrompt__footer {
    border-top: 1px solid #D3DAE6;
    border-radius: 0 0 6px 6px; }
  .euiEmptyPrompt.euiPanel--accent .euiEmptyPrompt__footer {
    border-top: 1px solid #fbbdda;
    border-radius: 0 0 6px 6px; }
  .euiEmptyPrompt.euiPanel--primary .euiEmptyPrompt__footer {
    border-top: 1px solid #bcd9f2;
    border-radius: 0 0 6px 6px; }
  .euiEmptyPrompt.euiPanel--success .euiEmptyPrompt__footer {
    border-top: 1px solid #bdefea;
    border-radius: 0 0 6px 6px; }
  .euiEmptyPrompt.euiPanel--warning .euiEmptyPrompt__footer {
    border-top: 1px solid #ffecb5;
    border-radius: 0 0 6px 6px; }
  .euiEmptyPrompt.euiPanel--danger .euiEmptyPrompt__footer {
    border-top: 1px solid #ecc2c2;
    border-radius: 0 0 6px 6px; }

.euiEmptyPrompt--vertical .euiEmptyPrompt__main {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-justify-content: center;
          justify-content: center; }

.euiEmptyPrompt--vertical .euiEmptyPrompt__contentInner {
  max-width: 36em;
  margin: auto; }

.euiEmptyPrompt--vertical .euiEmptyPrompt__icon {
  margin-bottom: 16px; }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiEmptyPrompt--horizontal {
    -webkit-justify-content: flex-start;
            justify-content: flex-start;
    text-align: left; } }

@media only screen and (min-width: 1200px) {
  .euiEmptyPrompt--horizontal {
    -webkit-justify-content: flex-start;
            justify-content: flex-start;
    text-align: left; } }

.euiEmptyPrompt--horizontal .euiEmptyPrompt__main {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: center;
          align-items: center; }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .euiEmptyPrompt--horizontal .euiEmptyPrompt__main {
      -webkit-flex-direction: row-reverse;
              flex-direction: row-reverse; } }
  @media only screen and (min-width: 1200px) {
    .euiEmptyPrompt--horizontal .euiEmptyPrompt__main {
      -webkit-flex-direction: row-reverse;
              flex-direction: row-reverse; } }

.euiEmptyPrompt--horizontal .euiEmptyPrompt__icon {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center; }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .euiEmptyPrompt--horizontal .euiEmptyPrompt__icon {
      min-width: 40%;
      max-width: 50%; } }
  @media only screen and (min-width: 1200px) {
    .euiEmptyPrompt--horizontal .euiEmptyPrompt__icon {
      min-width: 40%;
      max-width: 50%; } }

.euiEmptyPrompt--horizontal .euiEmptyPrompt__content {
  max-width: 36em; }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .euiEmptyPrompt--horizontal .euiEmptyPrompt__content {
      padding: 24px 0; } }
  @media only screen and (min-width: 1200px) {
    .euiEmptyPrompt--horizontal .euiEmptyPrompt__content {
      padding: 24px 0; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiEmptyPrompt--horizontal .euiEmptyPrompt__actions {
    -webkit-justify-content: flex-start;
            justify-content: flex-start; } }

@media only screen and (min-width: 1200px) {
  .euiEmptyPrompt--horizontal .euiEmptyPrompt__actions {
    -webkit-justify-content: flex-start;
            justify-content: flex-start; } }

.euiEmptyPrompt--paddingSmall .euiEmptyPrompt__main,
.euiEmptyPrompt--paddingSmall .euiEmptyPrompt__footer {
  padding: 8px; }

.euiEmptyPrompt--paddingSmall.euiEmptyPrompt--horizontal .euiEmptyPrompt__main {
  gap: 8px; }

.euiEmptyPrompt--paddingMedium .euiEmptyPrompt__main,
.euiEmptyPrompt--paddingMedium .euiEmptyPrompt__footer {
  padding: 16px; }

.euiEmptyPrompt--paddingMedium.euiEmptyPrompt--horizontal .euiEmptyPrompt__main {
  gap: 16px; }

.euiEmptyPrompt--paddingLarge .euiEmptyPrompt__main,
.euiEmptyPrompt--paddingLarge .euiEmptyPrompt__footer {
  padding: 24px; }

.euiEmptyPrompt--paddingLarge.euiEmptyPrompt--horizontal .euiEmptyPrompt__main {
  gap: 24px; }

.euiFilterGroup {
  display: -webkit-inline-flex;
  display: inline-flex;
  max-width: 100%;
  border-right: 1px solid rgba(17, 43, 134, 0.1);
  box-shadow: 0 1px 2px -1px rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.2);
  overflow: hidden; }
  .euiFilterGroup > * {
    -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
    min-width: 48px; }
  .euiFilterGroup > .euiFilterButton--noGrow {
    -webkit-flex-grow: 0;
            flex-grow: 0; }
  .euiFilterGroup > .euiFilterButton-hasNotification {
    min-width: 96px; }
  .euiFilterGroup > .euiFilterButton--hasIcon {
    min-width: 128px; }
  .euiFilterGroup .euiPopover__anchor {
    display: block; }
    .euiFilterGroup .euiPopover__anchor .euiFilterButton {
      width: 100%; }

.euiFilterGroup--fullWidth {
  display: -webkit-flex;
  display: flex; }

.euiFilterGroup__popoverPanel {
  width: 288px; }

@media only screen and (max-width: 574px) {
  .euiFilterGroup {
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiFilterGroup {
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap; } }

@media only screen and (max-width: 574px) {
  .euiFilterGroup {
    display: -webkit-flex;
    display: flex; }
    .euiFilterGroup .euiFilterButton {
      -webkit-flex-grow: 1 !important;
              flex-grow: 1 !important; } }

.euiFilterButton {
  background-color: #fbfcfd;
  height: 40px;
  width: auto;
  border: 1px solid rgba(17, 43, 134, 0.1);
  border-right: none;
  font-size: 14px; }
  .euiFilterButton:disabled {
    color: #ABB4C4;
    pointer-events: none; }
    .euiFilterButton:disabled .euiFilterButton__notification {
      opacity: .5; }
  .euiFilterButton:hover:not(:disabled), .euiFilterButton:focus:not(:disabled) {
    text-decoration: none; }
    .euiFilterButton:hover:not(:disabled) .euiFilterButton__textShift, .euiFilterButton:focus:not(:disabled) .euiFilterButton__textShift {
      text-decoration: underline; }

.euiFilterButton-hasActiveFilters {
  font-weight: 700; }

.euiFilterButton--hasIcon .euiButtonEmpty__content {
  -webkit-justify-content: space-between;
          justify-content: space-between; }

.euiFilterButton--withNext + .euiFilterButton {
  margin-left: -4px;
  border-left: none; }

.euiFilterButton-isSelected {
  background-color: #F5F7FA; }

.euiFilterButton__text-hasNotification {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }

.euiFilterButton__notification {
  margin-left: 8px;
  vertical-align: text-bottom; }

.euiFilterButton__textShift {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  min-width: 48px; }
  .euiFilterButton__textShift::after {
    display: block;
    content: attr(data-text);
    font-weight: 700;
    height: 0;
    overflow: hidden;
    visibility: hidden; }

.euiFilterSelectItem {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  padding: 4px 12px;
  display: block;
  width: 100%;
  text-align: left;
  color: #343741;
  border-bottom: 1px solid #D3DAE6;
  border-color: #eef2f7;
  outline-offset: -2px; }
  .euiFilterSelectItem:hover {
    cursor: pointer;
    text-decoration: underline; }
  .euiFilterSelectItem:focus {
    cursor: pointer;
    text-decoration: underline;
    background-color: rgba(0, 119, 204, 0.1); }
  .euiFilterSelectItem:disabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #ABB4C4; }
  .euiFilterSelectItem:focus, .euiFilterSelectItem-isFocused {
    background-color: rgba(0, 119, 204, 0.1);
    color: #07C; }

.euiFilterSelectItem__content {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important; }

.euiFilterSelect__items {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  overflow-y: auto;
  max-height: 480px; }
  .euiFilterSelect__items::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiFilterSelect__items::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiFilterSelect__items::-webkit-scrollbar-corner, .euiFilterSelect__items::-webkit-scrollbar-track {
    background-color: transparent; }

.euiFilterSelect__note {
  height: 64px;
  text-align: center;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: space-around;
          justify-content: space-around; }

.euiFilterSelect__noteContent {
  color: #69707D;
  font-size: 14px; }

/**
 * 1. Not always needed, but fixes an IE11 issue when flex-groups are nested under display: flex elements.
 * 2. IE requires a unit to grow.
 */
.euiFlexGroup {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
          align-items: stretch;
  -webkit-flex-grow: 1;
          flex-grow: 1;
  /* 1 */ }
  .euiFlexGroup .euiFlexItem {
    -webkit-flex-grow: 1;
            flex-grow: 1;
    -webkit-flex-basis: 0%;
            flex-basis: 0%;
    /* 2 */ }
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
      .euiFlexGroup .euiFlexItem {
        min-width: 1px; } }

.euiFlexGroup--gutterExtraSmall {
  margin: -2px; }
  .euiFlexGroup--gutterExtraSmall > .euiFlexItem {
    margin: 2px; }

.euiFlexGroup--gutterSmall {
  margin: -4px; }
  .euiFlexGroup--gutterSmall > .euiFlexItem {
    margin: 4px; }

.euiFlexGroup--gutterMedium {
  margin: -8px; }
  .euiFlexGroup--gutterMedium > .euiFlexItem {
    margin: 8px; }

.euiFlexGroup--gutterLarge {
  margin: -12px; }
  .euiFlexGroup--gutterLarge > .euiFlexItem {
    margin: 12px; }

.euiFlexGroup--gutterExtraLarge {
  margin: -20px; }
  .euiFlexGroup--gutterExtraLarge > .euiFlexItem {
    margin: 20px; }

.euiFlexGroup--justifyContentSpaceEvenly {
  -webkit-justify-content: space-evenly;
          justify-content: space-evenly; }

.euiFlexGroup--justifyContentSpaceBetween {
  -webkit-justify-content: space-between;
          justify-content: space-between; }

.euiFlexGroup--justifyContentSpaceAround {
  -webkit-justify-content: space-around;
          justify-content: space-around; }

.euiFlexGroup--justifyContentCenter {
  -webkit-justify-content: center;
          justify-content: center; }

.euiFlexGroup--justifyContentFlexEnd {
  -webkit-justify-content: flex-end;
          justify-content: flex-end; }

.euiFlexGroup--alignItemsFlexStart {
  -webkit-align-items: flex-start;
          align-items: flex-start; }

.euiFlexGroup--alignItemsCenter {
  -webkit-align-items: center;
          align-items: center; }

.euiFlexGroup--alignItemsFlexEnd {
  -webkit-align-items: flex-end;
          align-items: flex-end; }

.euiFlexGroup--alignItemsBaseline {
  -webkit-align-items: baseline;
          align-items: baseline; }

.euiFlexGroup--directionRow {
  -webkit-flex-direction: row;
          flex-direction: row; }

.euiFlexGroup--directionRowReverse {
  -webkit-flex-direction: row-reverse;
          flex-direction: row-reverse; }

.euiFlexGroup--directionColumn {
  -webkit-flex-direction: column;
          flex-direction: column; }

.euiFlexGroup--directionColumnReverse {
  -webkit-flex-direction: column-reverse;
          flex-direction: column-reverse; }

.euiFlexGroup--wrap {
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap; }

@media only screen and (max-width: 574px) {
  .euiFlexGroup--responsive {
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiFlexGroup--responsive {
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0; } }

.euiFlexGrid {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-bottom: 0; }
  .euiFlexGrid > .euiFlexItem {
    -webkit-flex-grow: 0;
            flex-grow: 0; }
    .euiFlexGrid > .euiFlexItem.euiFlexItem--flexGrowZero {
      -webkit-flex-grow: 0 !important;
              flex-grow: 0 !important;
      -webkit-flex-basis: auto !important;
              flex-basis: auto !important; }

/**
  * 1. For vertical layouts we use columns instead of flex
  */
.euiFlexGrid--directionColumn {
  display: block;
  /* 1 */
  -webkit-column-gap: 0;
     -moz-column-gap: 0;
          column-gap: 0; }
  .euiFlexGrid--directionColumn > .euiFlexItem {
    display: inline-block;
    /* 1 */
    line-height: initial; }

/**
   * Uncouple the gutter margin from the column widths to support cases where we use a FlexGrid
   * without columns.
   */
.euiFlexGrid--gutterNone {
  margin: 0px;
  -webkit-align-items: stretch;
          align-items: stretch; }
  .euiFlexGrid--gutterNone > .euiFlexItem {
    margin: 0px; }

.euiFlexGrid--gutterNone.euiFlexGrid--fourths > .euiFlexItem {
  -webkit-flex-basis: calc(25% - 0px);
          flex-basis: calc(25% - 0px); }

.euiFlexGrid--gutterNone.euiFlexGrid--fourths.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 4;
     -moz-column-count: 4;
          column-count: 4; }
  .euiFlexGrid--gutterNone.euiFlexGrid--fourths.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 0px); }

.euiFlexGrid--gutterNone.euiFlexGrid--thirds > .euiFlexItem {
  -webkit-flex-basis: calc(33.3% - 0px);
          flex-basis: calc(33.3% - 0px); }

.euiFlexGrid--gutterNone.euiFlexGrid--thirds.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 3;
     -moz-column-count: 3;
          column-count: 3; }
  .euiFlexGrid--gutterNone.euiFlexGrid--thirds.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 0px); }

.euiFlexGrid--gutterNone.euiFlexGrid--halves > .euiFlexItem {
  -webkit-flex-basis: calc(50% - 0px);
          flex-basis: calc(50% - 0px); }

.euiFlexGrid--gutterNone.euiFlexGrid--halves.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2; }
  .euiFlexGrid--gutterNone.euiFlexGrid--halves.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 0px); }

.euiFlexGrid--gutterNone.euiFlexGrid--single > .euiFlexItem {
  -webkit-flex-basis: calc(100% - 0px);
          flex-basis: calc(100% - 0px); }

.euiFlexGrid--gutterNone.euiFlexGrid--single.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 1;
     -moz-column-count: 1;
          column-count: 1; }
  .euiFlexGrid--gutterNone.euiFlexGrid--single.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 0px); }

/**
   * Uncouple the gutter margin from the column widths to support cases where we use a FlexGrid
   * without columns.
   */
.euiFlexGrid--gutterSmall {
  margin: -4px;
  -webkit-align-items: stretch;
          align-items: stretch; }
  .euiFlexGrid--gutterSmall > .euiFlexItem {
    margin: 4px; }

.euiFlexGrid--gutterSmall.euiFlexGrid--fourths > .euiFlexItem {
  -webkit-flex-basis: calc(25% - 8px);
          flex-basis: calc(25% - 8px); }

.euiFlexGrid--gutterSmall.euiFlexGrid--fourths.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 4;
     -moz-column-count: 4;
          column-count: 4; }
  .euiFlexGrid--gutterSmall.euiFlexGrid--fourths.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 8px); }

.euiFlexGrid--gutterSmall.euiFlexGrid--thirds > .euiFlexItem {
  -webkit-flex-basis: calc(33.3% - 8px);
          flex-basis: calc(33.3% - 8px); }

.euiFlexGrid--gutterSmall.euiFlexGrid--thirds.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 3;
     -moz-column-count: 3;
          column-count: 3; }
  .euiFlexGrid--gutterSmall.euiFlexGrid--thirds.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 8px); }

.euiFlexGrid--gutterSmall.euiFlexGrid--halves > .euiFlexItem {
  -webkit-flex-basis: calc(50% - 8px);
          flex-basis: calc(50% - 8px); }

.euiFlexGrid--gutterSmall.euiFlexGrid--halves.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2; }
  .euiFlexGrid--gutterSmall.euiFlexGrid--halves.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 8px); }

.euiFlexGrid--gutterSmall.euiFlexGrid--single > .euiFlexItem {
  -webkit-flex-basis: calc(100% - 8px);
          flex-basis: calc(100% - 8px); }

.euiFlexGrid--gutterSmall.euiFlexGrid--single.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 1;
     -moz-column-count: 1;
          column-count: 1; }
  .euiFlexGrid--gutterSmall.euiFlexGrid--single.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 8px); }

/**
   * Uncouple the gutter margin from the column widths to support cases where we use a FlexGrid
   * without columns.
   */
.euiFlexGrid--gutterMedium {
  margin: -8px;
  -webkit-align-items: stretch;
          align-items: stretch; }
  .euiFlexGrid--gutterMedium > .euiFlexItem {
    margin: 8px; }

.euiFlexGrid--gutterMedium.euiFlexGrid--fourths > .euiFlexItem {
  -webkit-flex-basis: calc(25% - 16px);
          flex-basis: calc(25% - 16px); }

.euiFlexGrid--gutterMedium.euiFlexGrid--fourths.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 4;
     -moz-column-count: 4;
          column-count: 4; }
  .euiFlexGrid--gutterMedium.euiFlexGrid--fourths.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 16px); }

.euiFlexGrid--gutterMedium.euiFlexGrid--thirds > .euiFlexItem {
  -webkit-flex-basis: calc(33.3% - 16px);
          flex-basis: calc(33.3% - 16px); }

.euiFlexGrid--gutterMedium.euiFlexGrid--thirds.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 3;
     -moz-column-count: 3;
          column-count: 3; }
  .euiFlexGrid--gutterMedium.euiFlexGrid--thirds.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 16px); }

.euiFlexGrid--gutterMedium.euiFlexGrid--halves > .euiFlexItem {
  -webkit-flex-basis: calc(50% - 16px);
          flex-basis: calc(50% - 16px); }

.euiFlexGrid--gutterMedium.euiFlexGrid--halves.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2; }
  .euiFlexGrid--gutterMedium.euiFlexGrid--halves.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 16px); }

.euiFlexGrid--gutterMedium.euiFlexGrid--single > .euiFlexItem {
  -webkit-flex-basis: calc(100% - 16px);
          flex-basis: calc(100% - 16px); }

.euiFlexGrid--gutterMedium.euiFlexGrid--single.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 1;
     -moz-column-count: 1;
          column-count: 1; }
  .euiFlexGrid--gutterMedium.euiFlexGrid--single.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 16px); }

/**
   * Uncouple the gutter margin from the column widths to support cases where we use a FlexGrid
   * without columns.
   */
.euiFlexGrid--gutterLarge {
  margin: -12px;
  -webkit-align-items: stretch;
          align-items: stretch; }
  .euiFlexGrid--gutterLarge > .euiFlexItem {
    margin: 12px; }

.euiFlexGrid--gutterLarge.euiFlexGrid--fourths > .euiFlexItem {
  -webkit-flex-basis: calc(25% - 24px);
          flex-basis: calc(25% - 24px); }

.euiFlexGrid--gutterLarge.euiFlexGrid--fourths.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 4;
     -moz-column-count: 4;
          column-count: 4; }
  .euiFlexGrid--gutterLarge.euiFlexGrid--fourths.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 24px); }

.euiFlexGrid--gutterLarge.euiFlexGrid--thirds > .euiFlexItem {
  -webkit-flex-basis: calc(33.3% - 24px);
          flex-basis: calc(33.3% - 24px); }

.euiFlexGrid--gutterLarge.euiFlexGrid--thirds.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 3;
     -moz-column-count: 3;
          column-count: 3; }
  .euiFlexGrid--gutterLarge.euiFlexGrid--thirds.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 24px); }

.euiFlexGrid--gutterLarge.euiFlexGrid--halves > .euiFlexItem {
  -webkit-flex-basis: calc(50% - 24px);
          flex-basis: calc(50% - 24px); }

.euiFlexGrid--gutterLarge.euiFlexGrid--halves.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2; }
  .euiFlexGrid--gutterLarge.euiFlexGrid--halves.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 24px); }

.euiFlexGrid--gutterLarge.euiFlexGrid--single > .euiFlexItem {
  -webkit-flex-basis: calc(100% - 24px);
          flex-basis: calc(100% - 24px); }

.euiFlexGrid--gutterLarge.euiFlexGrid--single.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 1;
     -moz-column-count: 1;
          column-count: 1; }
  .euiFlexGrid--gutterLarge.euiFlexGrid--single.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 24px); }

/**
   * Uncouple the gutter margin from the column widths to support cases where we use a FlexGrid
   * without columns.
   */
.euiFlexGrid--gutterXLarge {
  margin: -16px;
  -webkit-align-items: stretch;
          align-items: stretch; }
  .euiFlexGrid--gutterXLarge > .euiFlexItem {
    margin: 16px; }

.euiFlexGrid--gutterXLarge.euiFlexGrid--fourths > .euiFlexItem {
  -webkit-flex-basis: calc(25% - 32px);
          flex-basis: calc(25% - 32px); }

.euiFlexGrid--gutterXLarge.euiFlexGrid--fourths.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 4;
     -moz-column-count: 4;
          column-count: 4; }
  .euiFlexGrid--gutterXLarge.euiFlexGrid--fourths.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 32px); }

.euiFlexGrid--gutterXLarge.euiFlexGrid--thirds > .euiFlexItem {
  -webkit-flex-basis: calc(33.3% - 32px);
          flex-basis: calc(33.3% - 32px); }

.euiFlexGrid--gutterXLarge.euiFlexGrid--thirds.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 3;
     -moz-column-count: 3;
          column-count: 3; }
  .euiFlexGrid--gutterXLarge.euiFlexGrid--thirds.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 32px); }

.euiFlexGrid--gutterXLarge.euiFlexGrid--halves > .euiFlexItem {
  -webkit-flex-basis: calc(50% - 32px);
          flex-basis: calc(50% - 32px); }

.euiFlexGrid--gutterXLarge.euiFlexGrid--halves.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2; }
  .euiFlexGrid--gutterXLarge.euiFlexGrid--halves.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 32px); }

.euiFlexGrid--gutterXLarge.euiFlexGrid--single > .euiFlexItem {
  -webkit-flex-basis: calc(100% - 32px);
          flex-basis: calc(100% - 32px); }

.euiFlexGrid--gutterXLarge.euiFlexGrid--single.euiFlexGrid--directionColumn {
  /* 1 */
  -webkit-column-count: 1;
     -moz-column-count: 1;
          column-count: 1; }
  .euiFlexGrid--gutterXLarge.euiFlexGrid--single.euiFlexGrid--directionColumn > .euiFlexItem {
    width: calc(100% - 32px); }

@media only screen and (max-width: 574px) {
  .euiFlexGrid.euiFlexGrid--responsive {
    margin-left: 0 !important;
    margin-right: 0 !important;
    -webkit-column-count: 1 !important;
       -moz-column-count: 1 !important;
            column-count: 1 !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiFlexGrid.euiFlexGrid--responsive {
    margin-left: 0 !important;
    margin-right: 0 !important;
    -webkit-column-count: 1 !important;
       -moz-column-count: 1 !important;
            column-count: 1 !important; } }

/**
 * 1. Allow EuiPanels to expand to fill the item.
 * 2. IE11 hack forces inner content of flex items to respect a higher parent's width (mostly) and
 *    not cause weird wrapping issues.
 */
.euiFlexItem {
  display: -webkit-flex;
  display: flex;
  /* 1 */
  -webkit-flex-direction: column;
          flex-direction: column;
  /* 1 */
  /*
   * 1. We need the extra specificity here to override the FlexGroup > FlexItem styles.
   * 2. FlexItem can be manually set to not grow if needed.
   */ }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiFlexItem {
      min-width: 1px;
      /* 2 */ } }
  .euiFlexItem.euiFlexItem--flexGrowZero {
    /* 1 */
    -webkit-flex-grow: 0;
            flex-grow: 0;
    /* 2 */
    -webkit-flex-basis: auto;
            flex-basis: auto;
    /* 2 */ }
  .euiFlexItem.euiFlexItem--flexGrow1 {
    -webkit-flex-grow: 1;
            flex-grow: 1; }
  .euiFlexItem.euiFlexItem--flexGrow2 {
    -webkit-flex-grow: 2;
            flex-grow: 2; }
  .euiFlexItem.euiFlexItem--flexGrow3 {
    -webkit-flex-grow: 3;
            flex-grow: 3; }
  .euiFlexItem.euiFlexItem--flexGrow4 {
    -webkit-flex-grow: 4;
            flex-grow: 4; }
  .euiFlexItem.euiFlexItem--flexGrow5 {
    -webkit-flex-grow: 5;
            flex-grow: 5; }
  .euiFlexItem.euiFlexItem--flexGrow6 {
    -webkit-flex-grow: 6;
            flex-grow: 6; }
  .euiFlexItem.euiFlexItem--flexGrow7 {
    -webkit-flex-grow: 7;
            flex-grow: 7; }
  .euiFlexItem.euiFlexItem--flexGrow8 {
    -webkit-flex-grow: 8;
            flex-grow: 8; }
  .euiFlexItem.euiFlexItem--flexGrow9 {
    -webkit-flex-grow: 9;
            flex-grow: 9; }
  .euiFlexItem.euiFlexItem--flexGrow10 {
    -webkit-flex-grow: 10;
            flex-grow: 10; }

@media only screen and (max-width: 574px) {
  .euiFlexGroup--responsive > .euiFlexItem,
  .euiFlexGrid--responsive > .euiFlexItem {
    width: 100% !important;
    -webkit-flex-basis: 100% !important;
            flex-basis: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 16px !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiFlexGroup--responsive > .euiFlexItem,
  .euiFlexGrid--responsive > .euiFlexItem {
    width: 100% !important;
    -webkit-flex-basis: 100% !important;
            flex-basis: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 16px !important; } }

.euiFlyout {
  border-left: none;
  box-shadow: 0 2.7px 9px rgba(0, 0, 0, 0.13), 0 9.4px 24px rgba(0, 0, 0, 0.09), 0 21.8px 43px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 1000;
  background: #FFF;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: stretch;
          align-items: stretch;
  -webkit-clip-path: polygon(-50% 0, 100% 0, 100% 100%, -50% 100%);
          clip-path: polygon(-50% 0, 100% 0, 100% 100%, -50% 100%);
  -webkit-animation: euiFlyout 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
          animation: euiFlyout 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiFlyout:focus {
    outline: none; }

.euiFlyout__closeButton {
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 3; }
  .euiFlyout__closeButton--outside {
    box-shadow: 0 2.7px 9px rgba(0, 0, 0, 0.13), 0 9.4px 24px rgba(0, 0, 0, 0.09), 0 21.8px 43px rgba(0, 0, 0, 0.08);
    right: auto;
    left: 0;
    -webkit-transform: translateX(calc(-100% - 24px)) !important;
            transform: translateX(calc(-100% - 24px)) !important;
    -webkit-animation: none !important;
            animation: none !important; }
    .euiFlyout--left .euiFlyout__closeButton--outside {
      left: auto;
      right: 0;
      -webkit-transform: translateX(calc(100% + 24px)) !important;
              transform: translateX(calc(100% + 24px)) !important; }

.euiFlyoutBody__banner {
  overflow-x: hidden; }

/**
 * 1. Calculating the minimum width based on the screen takeover breakpoint
 */
.euiFlyout--small {
  min-width: 384px;
  width: 25vw; }
  .euiFlyout--small.euiFlyout--maxWidth-default {
    max-width: 403px; }

.euiFlyout--medium {
  min-width: 424px;
  width: 50vw; }
  .euiFlyout--medium.euiFlyout--maxWidth-default {
    max-width: 768px; }

.euiFlyout--large {
  min-width: 691px;
  width: 75vw; }
  .euiFlyout--large.euiFlyout--maxWidth-default {
    max-width: 992px; }

.euiFlyout--paddingNone .euiFlyoutHeader {
  padding: 0 0 0; }

.euiFlyout--paddingNone .euiFlyoutHeader--hasBorder {
  padding-bottom: 0; }

.euiFlyout--paddingNone .euiFlyoutBody__overflowContent {
  padding: 0; }

.euiFlyout--paddingNone .euiFlyoutBody__banner .euiCallOut {
  padding-left: 0;
  padding-right: 0; }

.euiFlyout--paddingNone .euiFlyoutFooter {
  padding: 0; }

.euiFlyout--paddingSmall .euiFlyoutHeader {
  padding: 8px 8px 0; }

.euiFlyout--paddingSmall .euiFlyoutHeader--hasBorder {
  padding-bottom: 8px; }

.euiFlyout--paddingSmall .euiFlyoutBody__overflowContent {
  padding: 8px; }

.euiFlyout--paddingSmall .euiFlyoutBody__banner .euiCallOut {
  padding-left: 8px;
  padding-right: 8px; }

.euiFlyout--paddingSmall .euiFlyoutFooter {
  padding: 8px; }

.euiFlyout--paddingMedium .euiFlyoutHeader {
  padding: 16px 16px 0; }

.euiFlyout--paddingMedium .euiFlyoutHeader--hasBorder {
  padding-bottom: 16px; }

.euiFlyout--paddingMedium .euiFlyoutBody__overflowContent {
  padding: 16px; }

.euiFlyout--paddingMedium .euiFlyoutBody__banner .euiCallOut {
  padding-left: 16px;
  padding-right: 16px; }

.euiFlyout--paddingMedium .euiFlyoutFooter {
  padding: 12px 16px; }

.euiFlyout--paddingLarge .euiFlyoutHeader {
  padding: 24px 24px 0; }

.euiFlyout--paddingLarge .euiFlyoutHeader--hasBorder {
  padding-bottom: 24px; }

.euiFlyout--paddingLarge .euiFlyoutBody__overflowContent {
  padding: 24px; }

.euiFlyout--paddingLarge .euiFlyoutBody__banner .euiCallOut {
  padding-left: 24px;
  padding-right: 24px; }

.euiFlyout--paddingLarge .euiFlyoutFooter {
  padding: 16px 24px; }

@-webkit-keyframes euiFlyout {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  75% {
    opacity: 1;
    -webkit-transform: translateX(0%);
            transform: translateX(0%); } }

@keyframes euiFlyout {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%);
            transform: translateX(100%); }
  75% {
    opacity: 1;
    -webkit-transform: translateX(0%);
            transform: translateX(0%); } }

/**
 * 1. Leave only a small sliver exposed on small screens so users understand that this is not a new page
 * 2. If a custom maxWidth is set, we need to override it.
 */
@media only screen and (max-width: 574px) {
  .euiFlyout {
    max-width: 90vw !important;
    /* 1, 2 */ }
  .euiFlyout--small {
    min-width: 0;
    width: 384px; }
  .euiFlyout--medium {
    min-width: 0;
    width: 424px; }
  .euiFlyout--large {
    min-width: 0;
    width: 691px; }
  .euiFlyout__closeButton--outside {
    -webkit-transform: translateX(calc(-100% - 4px)) !important;
            transform: translateX(calc(-100% - 4px)) !important; }
    .euiFlyout--left .euiFlyout__closeButton--outside {
      -webkit-transform: translateX(calc(100% + 4px)) !important;
              transform: translateX(calc(100% + 4px)) !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiFlyout {
    max-width: 90vw !important;
    /* 1, 2 */ }
  .euiFlyout--small {
    min-width: 0;
    width: 384px; }
  .euiFlyout--medium {
    min-width: 0;
    width: 424px; }
  .euiFlyout--large {
    min-width: 0;
    width: 691px; }
  .euiFlyout__closeButton--outside {
    -webkit-transform: translateX(calc(-100% - 4px)) !important;
            transform: translateX(calc(-100% - 4px)) !important; }
    .euiFlyout--left .euiFlyout__closeButton--outside {
      -webkit-transform: translateX(calc(100% + 4px)) !important;
              transform: translateX(calc(100% + 4px)) !important; } }

/**
 * Left side flyout (should only be used for navigation)
 */
.euiFlyout--left {
  border-right: none;
  border-left: none;
  right: auto;
  left: 0;
  -webkit-clip-path: polygon(0 0, 150% 0, 150% 100%, 0 100%);
          clip-path: polygon(0 0, 150% 0, 150% 100%, 0 100%);
  -webkit-animation-name: euiFlyoutLeft;
          animation-name: euiFlyoutLeft; }

@-webkit-keyframes euiFlyoutLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%); }
  75% {
    opacity: 1;
    -webkit-transform: translateX(0%);
            transform: translateX(0%); } }

@keyframes euiFlyoutLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%); }
  75% {
    opacity: 1;
    -webkit-transform: translateX(0%);
            transform: translateX(0%); } }

/**
 * Pushed style (inside body)
 */
.euiFlyout.euiFlyout--push {
  box-shadow: none;
  -webkit-clip-path: none;
          clip-path: none;
  -webkit-animation-duration: 0s;
          animation-duration: 0s;
  border-left: 2px solid #D3DAE6;
  z-index: 999; }
  .euiFlyout.euiFlyout--push.euiFlyout--left {
    border-left: none;
    border-right: 2px solid #D3DAE6; }

.euiFlyoutBody {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  overflow-y: hidden;
  height: 100%; }
  .euiFlyoutBody .euiFlyoutBody__overflow {
    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
    scrollbar-width: thin;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
            mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%); }
    .euiFlyoutBody .euiFlyoutBody__overflow::-webkit-scrollbar {
      width: 16px;
      height: 16px; }
    .euiFlyoutBody .euiFlyoutBody__overflow::-webkit-scrollbar-thumb {
      background-color: rgba(105, 112, 125, 0.5);
      background-clip: content-box;
      border-radius: 16px;
      border: 6px solid transparent; }
    .euiFlyoutBody .euiFlyoutBody__overflow::-webkit-scrollbar-corner, .euiFlyoutBody .euiFlyoutBody__overflow::-webkit-scrollbar-track {
      background-color: transparent; }
    .euiFlyoutBody .euiFlyoutBody__overflow:focus {
      outline: none;
      /* 1 */ }
    .euiFlyoutBody .euiFlyoutBody__overflow[tabindex='0']:focus:focus-visible {
      outline-style: auto;
      /* 2 */ }
    .euiFlyoutBody .euiFlyoutBody__overflow.euiFlyoutBody__overflow--hasBanner {
      -webkit-mask-image: linear-gradient(to bottom, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
              mask-image: linear-gradient(to bottom, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%); }
  .euiFlyoutBody .euiFlyoutBody__banner .euiCallOut {
    border: none;
    border-radius: 0; }

.euiFlyoutFooter {
  background: #F5F7FA;
  -webkit-flex-grow: 0;
          flex-grow: 0; }

.euiFlyoutHeader {
  -webkit-flex-grow: 0;
          flex-grow: 0; }

.euiFlyoutHeader--hasBorder {
  border-bottom: 1px solid #D3DAE6; }

/**
  * 1. Float above the visual radio and match its dimension, so that when users try to click it
  *    they actually click this input.
  */
.euiCheckbox {
  position: relative; }
  .euiCheckbox .euiCheckbox__input {
    width: 16px;
    height: 16px;
    top: 3px;
    cursor: pointer;
    position: absolute;
    /* 1 */
    opacity: 0;
    /* 1 */
    z-index: 1;
    /* 1 */ }
    .euiCheckbox .euiCheckbox__input ~ .euiCheckbox__label {
      display: inline-block;
      padding-left: 24px;
      line-height: 24px;
      font-size: 14px;
      position: relative;
      z-index: 2;
      cursor: pointer; }
    .euiCheckbox .euiCheckbox__input + .euiCheckbox__square {
      padding: 7px;
      border: 1px solid #c9cbcd;
      background: #FFF no-repeat center;
      border-radius: 4px;
      transition: background-color 150ms ease-in, border-color 150ms ease-in;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 3px; }
    .euiCheckbox .euiCheckbox__input:checked + .euiCheckbox__square {
      border-color: #07C;
      background-color: #07C;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 10 8'%3E%3Cpath d='M.375 2.625L3.375 5.625M3.375 5.625L8.625.375' fill='none' fill-rule='evenodd' stroke='rgb%28255, 255, 255%29' stroke-linecap='round' stroke-width='1.5' transform='translate(.5 1)'/%3E%3C/svg%3E"); }
    .euiCheckbox .euiCheckbox__input:indeterminate + .euiCheckbox__square {
      border-color: #07C;
      background-color: #07C;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Crect width='6' height='6' fill='rgb%28255, 255, 255%29' fill-rule='evenodd'/%3E%3C/svg%3E"); }
    .euiCheckbox .euiCheckbox__input[disabled] {
      cursor: not-allowed !important; }
      .euiCheckbox .euiCheckbox__input[disabled] ~ .euiCheckbox__label {
        color: #98A2B3;
        cursor: not-allowed !important; }
      .euiCheckbox .euiCheckbox__input[disabled] + .euiCheckbox__square {
        border-color: #D3DAE6;
        background-color: #D3DAE6;
        box-shadow: none; }
    .euiCheckbox .euiCheckbox__input:checked[disabled] + .euiCheckbox__square {
      border-color: #D3DAE6;
      background-color: #D3DAE6;
      box-shadow: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 10 8'%3E%3Cpath d='M.375 2.625L3.375 5.625M3.375 5.625L8.625.375' fill='none' fill-rule='evenodd' stroke='rgb%2894, 100, 111%29' stroke-linecap='round' stroke-width='1.5' transform='translate(.5 1)'/%3E%3C/svg%3E"); }
    .euiCheckbox .euiCheckbox__input:indeterminate[disabled] + .euiCheckbox__square {
      border-color: #D3DAE6;
      background-color: #D3DAE6;
      box-shadow: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Crect width='6' height='6' fill='rgb%2894, 100, 111%29' fill-rule='evenodd'/%3E%3C/svg%3E"); }
    .euiCheckbox .euiCheckbox__input:focus + .euiCheckbox__square {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      border-color: #07C; }
      .euiCheckbox .euiCheckbox__input:focus + .euiCheckbox__square:focus-visible {
        outline-style: auto; }
      .euiCheckbox .euiCheckbox__input:focus + .euiCheckbox__square:not(:focus-visible) {
        outline: none; }
  .euiCheckbox.euiCheckbox--inList, .euiCheckbox.euiCheckbox--noLabel {
    min-height: 16px;
    min-width: 16px; }
    .euiCheckbox.euiCheckbox--inList .euiCheckbox__input,
    .euiCheckbox.euiCheckbox--inList .euiCheckbox__square, .euiCheckbox.euiCheckbox--noLabel .euiCheckbox__input,
    .euiCheckbox.euiCheckbox--noLabel .euiCheckbox__square {
      top: 0; }
    .euiCheckbox.euiCheckbox--inList .euiCheckbox__input, .euiCheckbox.euiCheckbox--noLabel .euiCheckbox__input {
      margin: 0; }

.euiCheckboxGroup__item + .euiCheckboxGroup__item {
  margin-top: 4px; }
  .euiCheckboxGroup__item + .euiCheckboxGroup__item.euiCheckbox--compressed {
    margin-top: 0; }

.euiDescribedFormGroup {
  max-width: 800px; }
  .euiDescribedFormGroup + * {
    margin-top: 24px; }
  .euiDescribedFormGroup.euiDescribedFormGroup--fullWidth {
    max-width: 100%; }
  .euiDescribedFormGroup .euiDescribedFormGroup__description {
    padding-top: 8px; }
  .euiDescribedFormGroup .euiDescribedFormGroup__fields {
    min-width: 0; }
  .euiDescribedFormGroup .euiDescribedFormGroup__fields > .euiFormRow--hasEmptyLabelSpace:first-child,
  .euiDescribedFormGroup .euiDescribedFormGroup__fields > .euiFormRow:first-child:not(.euiFormRow--hasLabel) {
    margin-top: 0; }
    .euiDescribedFormGroup .euiDescribedFormGroup__fields > .euiFormRow--hasEmptyLabelSpace:first-child::before,
    .euiDescribedFormGroup .euiDescribedFormGroup__fields > .euiFormRow:first-child:not(.euiFormRow--hasLabel)::before {
      content: ''; }

.euiDescribedFormGroup__descriptionColumn {
  min-width: MIN(20rem, 50%); }

.euiFieldNumber {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px; }
  .euiFieldNumber--fullWidth {
    max-width: 100%; }
  .euiFieldNumber--compressed {
    height: 32px; }
  .euiFieldNumber--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiFieldNumber {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiFieldNumber {
      line-height: 1em; } }
  .euiFieldNumber::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldNumber::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldNumber::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldNumber:invalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiFieldNumber:focus {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldNumber:disabled {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldNumber:disabled::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldNumber:disabled::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldNumber:disabled::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiFieldNumber[readOnly] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldNumber:-webkit-autofill {
    -webkit-text-fill-color: #343741; }
    .euiFieldNumber:-webkit-autofill ~ .euiFormControlLayoutIcons {
      color: #343741; }
  .euiFieldNumber--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiFieldNumber--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiFieldNumber--compressed:invalid {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
      background-size: 100%; }
    .euiFieldNumber--compressed:focus {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldNumber--compressed:disabled {
      color: #98A2B3;
      -webkit-text-fill-color: #98A2B3;
      cursor: not-allowed;
      background: #eef2f7;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
      .euiFieldNumber--compressed:disabled::-webkit-input-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldNumber--compressed:disabled::-moz-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldNumber--compressed:disabled::placeholder {
        color: #98A2B3;
        opacity: 1; }
    .euiFieldNumber--compressed[readOnly] {
      cursor: default;
      color: #343741;
      -webkit-text-fill-color: #343741;
      background: #FFF;
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldNumber--inGroup {
    box-shadow: none !important;
    border-radius: 0; }
  .euiFieldNumber--withIcon {
    padding-left: 40px; }

.euiFieldNumber--withIcon.euiFieldNumber--compressed {
  padding-left: 32px; }

.euiFieldPassword {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px;
  padding-left: 40px; }
  .euiFieldPassword--fullWidth {
    max-width: 100%; }
  .euiFieldPassword--compressed {
    height: 32px; }
  .euiFieldPassword--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiFieldPassword {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiFieldPassword {
      line-height: 1em; } }
  .euiFieldPassword::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldPassword::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldPassword::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldPassword:invalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiFieldPassword:focus {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldPassword:disabled {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldPassword:disabled::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldPassword:disabled::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldPassword:disabled::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiFieldPassword[readOnly] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldPassword:-webkit-autofill {
    -webkit-text-fill-color: #343741; }
    .euiFieldPassword:-webkit-autofill ~ .euiFormControlLayoutIcons {
      color: #343741; }
  .euiFieldPassword--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiFieldPassword--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiFieldPassword--compressed:invalid {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
      background-size: 100%; }
    .euiFieldPassword--compressed:focus {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldPassword--compressed:disabled {
      color: #98A2B3;
      -webkit-text-fill-color: #98A2B3;
      cursor: not-allowed;
      background: #eef2f7;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
      .euiFieldPassword--compressed:disabled::-webkit-input-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldPassword--compressed:disabled::-moz-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldPassword--compressed:disabled::placeholder {
        color: #98A2B3;
        opacity: 1; }
    .euiFieldPassword--compressed[readOnly] {
      cursor: default;
      color: #343741;
      -webkit-text-fill-color: #343741;
      background: #FFF;
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldPassword--inGroup {
    box-shadow: none !important;
    border-radius: 0; }
  .euiFieldPassword.euiFieldPassword--compressed {
    padding-left: 32px; }

.euiFieldPassword--withToggle::-ms-reveal {
  display: none; }

/*
 * 1. Fix for Safari to ensure that it renders like a normal text input
 *    and doesn't add extra spacing around text
 * 2. Remove the X clear button from input type search in Chrome and IE
*/
.euiFieldSearch {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px;
  padding-left: 40px;
  -webkit-appearance: textfield;
  /* 1 */ }
  .euiFieldSearch--fullWidth {
    max-width: 100%; }
  .euiFieldSearch--compressed {
    height: 32px; }
  .euiFieldSearch--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiFieldSearch {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiFieldSearch {
      line-height: 1em; } }
  .euiFieldSearch::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldSearch::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldSearch::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldSearch:invalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiFieldSearch:focus {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldSearch:disabled {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldSearch:disabled::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldSearch:disabled::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldSearch:disabled::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiFieldSearch[readOnly] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldSearch:-webkit-autofill {
    -webkit-text-fill-color: #343741; }
    .euiFieldSearch:-webkit-autofill ~ .euiFormControlLayoutIcons {
      color: #343741; }
  .euiFieldSearch--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiFieldSearch--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiFieldSearch--compressed:invalid {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
      background-size: 100%; }
    .euiFieldSearch--compressed:focus {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldSearch--compressed:disabled {
      color: #98A2B3;
      -webkit-text-fill-color: #98A2B3;
      cursor: not-allowed;
      background: #eef2f7;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
      .euiFieldSearch--compressed:disabled::-webkit-input-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldSearch--compressed:disabled::-moz-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldSearch--compressed:disabled::placeholder {
        color: #98A2B3;
        opacity: 1; }
    .euiFieldSearch--compressed[readOnly] {
      cursor: default;
      color: #343741;
      -webkit-text-fill-color: #343741;
      background: #FFF;
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldSearch--inGroup {
    box-shadow: none !important;
    border-radius: 0; }
  .euiFieldSearch-isLoading {
    padding-right: 40px; }
  .euiFieldSearch-isLoading.euiFieldSearch--compressed {
    padding-right: 32px; }
  .euiFieldSearch::-webkit-search-decoration, .euiFieldSearch::-webkit-search-cancel-button {
    -webkit-appearance: none;
    /* 1, 2 */ }
  .euiFieldSearch::-ms-clear {
    display: none;
    /* 2 */ }

.euiFieldSearch--compressed {
  padding-left: 32px; }

.euiFieldText {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px;
  /* Invalid state normally comes from :invalid, but several components
  /* like EuiDatePicker need it toggled through an extra class.
  */ }
  .euiFieldText--fullWidth {
    max-width: 100%; }
  .euiFieldText--compressed {
    height: 32px; }
  .euiFieldText--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiFieldText {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiFieldText {
      line-height: 1em; } }
  .euiFieldText::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldText::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldText::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiFieldText:invalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiFieldText:focus {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldText:disabled {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldText:disabled::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldText:disabled::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFieldText:disabled::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiFieldText[readOnly] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldText:-webkit-autofill {
    -webkit-text-fill-color: #343741; }
    .euiFieldText:-webkit-autofill ~ .euiFormControlLayoutIcons {
      color: #343741; }
  .euiFieldText--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiFieldText--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiFieldText--compressed:invalid {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
      background-size: 100%; }
    .euiFieldText--compressed:focus {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFieldText--compressed:disabled {
      color: #98A2B3;
      -webkit-text-fill-color: #98A2B3;
      cursor: not-allowed;
      background: #eef2f7;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
      .euiFieldText--compressed:disabled::-webkit-input-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldText--compressed:disabled::-moz-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiFieldText--compressed:disabled::placeholder {
        color: #98A2B3;
        opacity: 1; }
    .euiFieldText--compressed[readOnly] {
      cursor: default;
      color: #343741;
      -webkit-text-fill-color: #343741;
      background: #FFF;
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFieldText--inGroup {
    box-shadow: none !important;
    border-radius: 0; }
  .euiFieldText--withIcon {
    padding-left: 40px; }
  .euiFieldText.euiFieldText-isInvalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }

.euiFieldText--withIcon.euiFieldText--compressed {
  padding-left: 32px; }

/**
  * REMEMBER: --large modifiers must come last to override --compressed
  */
.euiFilePicker {
  max-width: 400px;
  width: 100%;
  height: 40px;
  position: relative; }
  .euiFilePicker--fullWidth {
    max-width: 100%; }
  .euiFilePicker--compressed {
    height: 32px; }
  .euiFilePicker--inGroup {
    height: 100%; }
  .euiFilePicker.euiFilePicker--large {
    border-radius: 6px;
    overflow: hidden;
    height: auto; }
  .euiFilePicker.euiFilePicker--large.euiFilePicker--compressed {
    border-radius: 4px; }

.euiFilePicker__input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden; }
  .euiFilePicker__input:hover {
    cursor: pointer; }
  .euiFilePicker__input:hover:disabled {
    cursor: not-allowed; }
  .euiFilePicker__input:disabled {
    opacity: 0; }
  .euiFilePicker__input:disabled ~ .euiFilePicker__prompt {
    color: #98A2B3; }

.euiFilePicker__icon {
  position: absolute;
  left: 12px;
  top: 12px;
  transition: -webkit-transform 150ms cubic-bezier(0.694, 0.0482, 0.335, 1);
  transition: transform 150ms cubic-bezier(0.694, 0.0482, 0.335, 1);
  transition: transform 150ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 150ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiFilePicker--compressed .euiFilePicker__icon {
    top: 8px;
    left: 8px; }
  .euiFilePicker--large .euiFilePicker__icon {
    position: static;
    margin-bottom: 16px; }

/**
  * 1. Don't block the user from dropping files onto the filepicker.
  * 2. Ensure space for import icon, loading spinner, and clear button (only if it has files)
  * 3. Delay focus gradient or else it will only partially transition while file chooser opens
  * 4. Static height so that it doesn't shift its surrounding contents around
  */
.euiFilePicker__prompt {
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  padding-left: 40px;
  /* 2 */
  height: 40px;
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  pointer-events: none;
  /* 1 */
  border-radius: 6px;
  transition: box-shadow 150ms ease-in, background-color 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in 150ms;
  /* 3 */ }
  @supports (-moz-appearance: none) {
    .euiFilePicker__prompt {
      transition-property: box-shadow, background-image, background-size; } }
  .euiFilePicker--compressed .euiFilePicker__prompt {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px;
    padding-left: 32px;
    /* 2 */
    height: 32px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiFilePicker--compressed .euiFilePicker__prompt {
        transition-property: box-shadow, background-image, background-size; } }
  .euiFilePicker--large .euiFilePicker__prompt {
    height: 128px;
    /* 4 */
    padding: 0 24px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
            flex-direction: column;
    -webkit-align-items: center;
            align-items: center;
    -webkit-justify-content: center;
            justify-content: center; }
  .euiFilePicker--large.euiFilePicker--compressed .euiFilePicker__prompt {
    height: 104px;
    /* 4 */ }
  .euiFilePicker-isInvalid .euiFilePicker__prompt {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }

.euiFilePicker__promptText {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  line-height: 16px; }
  .euiFilePicker:not(.euiFilePicker--large):not(.euiFilePicker-hasFiles) .euiFilePicker__promptText {
    color: #98A2B3; }

.euiFilePicker__clearButton,
.euiFilePicker__loadingSpinner {
  position: absolute;
  right: 12px;
  top: 12px; }
  .euiFilePicker--compressed .euiFilePicker__clearButton, .euiFilePicker--compressed
  .euiFilePicker__loadingSpinner {
    top: 8px; }

/**
  * 1. Undo the pointer-events: none applied to the enclosing prompt.
  */
.euiFilePicker__clearButton {
  pointer-events: auto;
  /* 1 */ }
  .euiFilePicker:not(.euiFilePicker--large) .euiFilePicker__clearButton {
    width: 16px;
    height: 16px;
    pointer-events: all;
    background-color: #98A2B3;
    border-radius: 16px;
    line-height: 0; }
    .euiFilePicker:not(.euiFilePicker--large) .euiFilePicker__clearButton:focus {
      outline: 2px solid currentColor; }
      .euiFilePicker:not(.euiFilePicker--large) .euiFilePicker__clearButton:focus:focus-visible {
        outline-style: auto; }
      .euiFilePicker:not(.euiFilePicker--large) .euiFilePicker__clearButton:focus:not(:focus-visible) {
        outline: none; }
    .euiFilePicker:not(.euiFilePicker--large) .euiFilePicker__clearButton .euiFilePicker__clearIcon {
      width: 8px;
      height: 8px;
      fill: #FFF;
      stroke: #FFF;
      stroke-width: 2px; }
  .euiFilePicker--large .euiFilePicker__clearButton {
    position: relative;
    top: 0;
    right: 0; }

.euiFilePicker__showDrop .euiFilePicker__prompt,
.euiFilePicker__input:focus + .euiFilePicker__prompt {
  background-color: white;
  background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
  background-size: 100% 100%;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFilePicker--compressed .euiFilePicker__showDrop .euiFilePicker__prompt, .euiFilePicker--compressed
  .euiFilePicker__input:focus + .euiFilePicker__prompt {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }

.euiFilePicker__input:disabled + .euiFilePicker__prompt {
  color: #98A2B3;
  -webkit-text-fill-color: #98A2B3;
  cursor: not-allowed;
  background: #eef2f7;
  box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiFilePicker__input:disabled + .euiFilePicker__prompt::-webkit-input-placeholder {
    color: #98A2B3;
    opacity: 1; }
  .euiFilePicker__input:disabled + .euiFilePicker__prompt::-moz-placeholder {
    color: #98A2B3;
    opacity: 1; }
  .euiFilePicker__input:disabled + .euiFilePicker__prompt::placeholder {
    color: #98A2B3;
    opacity: 1; }

.euiFilePicker:not(.euiFilePicker--large).euiFilePicker-isLoading .euiFilePicker__prompt,
.euiFilePicker:not(.euiFilePicker--large).euiFilePicker-hasFiles .euiFilePicker__prompt {
  padding-right: 40px;
  /* 2 */ }

.euiFilePicker-hasFiles .euiFilePicker__promptText {
  color: #343741; }

.euiFilePicker--large .euiFilePicker__input:hover:not(:disabled) + .euiFilePicker__prompt .euiFilePicker__promptText,
.euiFilePicker--large .euiFilePicker__input:focus + .euiFilePicker__prompt .euiFilePicker__promptText {
  text-decoration: underline; }

.euiFilePicker--large .euiFilePicker__input:hover:not(:disabled) + .euiFilePicker__prompt .euiFilePicker__icon,
.euiFilePicker--large .euiFilePicker__input:focus + .euiFilePicker__prompt .euiFilePicker__icon {
  -webkit-transform: scale(1.1);
          transform: scale(1.1); }

.euiFilePicker--large.euiFilePicker__showDrop .euiFilePicker__prompt .euiFilePicker__promptText {
  text-decoration: underline; }

.euiFilePicker--large.euiFilePicker__showDrop .euiFilePicker__prompt .euiFilePicker__icon {
  -webkit-transform: scale(1.1);
          transform: scale(1.1); }

.euiFilePicker--large.euiFilePicker-hasFiles .euiFilePicker__promptText {
  font-weight: 700; }

.euiForm__error {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  list-style: disc; }

.euiForm__errors {
  margin-bottom: 16px; }

/**
 * 1. Ensure the descenders don't get cut off
 */
.euiSelect {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  line-height: 40px;
  /* 1 */
  padding-top: 0;
  /* 1 */
  padding-bottom: 0;
  /* 1 */ }
  .euiSelect--fullWidth {
    max-width: 100%; }
  .euiSelect--compressed {
    height: 32px; }
  .euiSelect--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiSelect {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiSelect {
      line-height: 1em; } }
  .euiSelect::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSelect::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSelect::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSelect:invalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiSelect:focus {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiSelect:disabled {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiSelect:disabled::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiSelect:disabled::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiSelect:disabled::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiSelect[readOnly] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiSelect:-webkit-autofill {
    -webkit-text-fill-color: #343741; }
    .euiSelect:-webkit-autofill ~ .euiFormControlLayoutIcons {
      color: #343741; }
  .euiSelect--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiSelect--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiSelect--compressed:invalid {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
      background-size: 100%; }
    .euiSelect--compressed:focus {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiSelect--compressed:disabled {
      color: #98A2B3;
      -webkit-text-fill-color: #98A2B3;
      cursor: not-allowed;
      background: #eef2f7;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
      .euiSelect--compressed:disabled::-webkit-input-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiSelect--compressed:disabled::-moz-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiSelect--compressed:disabled::placeholder {
        color: #98A2B3;
        opacity: 1; }
    .euiSelect--compressed[readOnly] {
      cursor: default;
      color: #343741;
      -webkit-text-fill-color: #343741;
      background: #FFF;
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiSelect--inGroup {
    box-shadow: none !important;
    border-radius: 0; }
  .euiSelect--compressed {
    line-height: 32px;
    /* 1 */
    padding-top: 0;
    /* 1 */
    padding-bottom: 0;
    /* 1 */ }
  .euiSelect--inGroup {
    line-height: 38px;
    /* 1 */ }
  .euiSelect--inGroup.euiSelect--compressed {
    line-height: 30px;
    /* 1 */ }
  .euiSelect::-ms-expand {
    display: none; }
  .euiSelect:focus::-ms-value {
    color: #343741;
    background: transparent; }
  .euiSelect:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #343741; }

.euiSuperSelect__listbox {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  max-height: 300px;
  overflow: hidden;
  overflow-y: auto; }
  .euiSuperSelect__listbox::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiSuperSelect__listbox::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiSuperSelect__listbox::-webkit-scrollbar-corner, .euiSuperSelect__listbox::-webkit-scrollbar-track {
    background-color: transparent; }

.euiSuperSelect__item {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  padding: 8px; }
  .euiSuperSelect__item:hover {
    cursor: pointer;
    text-decoration: underline; }
  .euiSuperSelect__item:focus {
    cursor: pointer;
    text-decoration: underline;
    background-color: rgba(0, 119, 204, 0.1); }
  .euiSuperSelect__item:disabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #ABB4C4; }

.euiSuperSelect__item--hasDividers:not(:last-of-type) {
  border-bottom: 1px solid #D3DAE6; }

/**
 * 1. Ensure the descenders don't get cut off
 * 2. Makes sure the height is correct when there's no selection
 */
.euiSuperSelectControl {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px;
  display: block;
  /* 2 */
  text-align: left;
  line-height: 40px;
  /* 1 */
  padding-top: 0;
  /* 1 */
  padding-bottom: 0;
  /* 1 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }
  .euiSuperSelectControl--fullWidth {
    max-width: 100%; }
  .euiSuperSelectControl--compressed {
    height: 32px; }
  .euiSuperSelectControl--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiSuperSelectControl {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiSuperSelectControl {
      line-height: 1em; } }
  .euiSuperSelectControl::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSuperSelectControl::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSuperSelectControl::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiSuperSelectControl:invalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiSuperSelectControl:focus {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiSuperSelectControl:disabled {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiSuperSelectControl:disabled::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiSuperSelectControl:disabled::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiSuperSelectControl:disabled::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiSuperSelectControl[readOnly] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiSuperSelectControl:-webkit-autofill {
    -webkit-text-fill-color: #343741; }
    .euiSuperSelectControl:-webkit-autofill ~ .euiFormControlLayoutIcons {
      color: #343741; }
  .euiSuperSelectControl--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiSuperSelectControl--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiSuperSelectControl--compressed:invalid {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
      background-size: 100%; }
    .euiSuperSelectControl--compressed:focus {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiSuperSelectControl--compressed:disabled {
      color: #98A2B3;
      -webkit-text-fill-color: #98A2B3;
      cursor: not-allowed;
      background: #eef2f7;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
      .euiSuperSelectControl--compressed:disabled::-webkit-input-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiSuperSelectControl--compressed:disabled::-moz-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiSuperSelectControl--compressed:disabled::placeholder {
        color: #98A2B3;
        opacity: 1; }
    .euiSuperSelectControl--compressed[readOnly] {
      cursor: default;
      color: #343741;
      -webkit-text-fill-color: #343741;
      background: #FFF;
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiSuperSelectControl--inGroup {
    box-shadow: none !important;
    border-radius: 0; }
  .euiSuperSelectControl-isInvalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiSuperSelectControl--compressed {
    line-height: 32px;
    /* 1 */
    padding-top: 0;
    /* 1 */
    padding-bottom: 0;
    /* 1 */ }
  .euiSuperSelectControl.euiSuperSelect--isOpen__button {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }

.euiFormControlLayout {
  max-width: 400px;
  width: 100%;
  height: 40px; }
  .euiFormControlLayout--fullWidth {
    max-width: 100%; }
  .euiFormControlLayout--compressed {
    height: 32px; }
  .euiFormControlLayout--inGroup {
    height: 100%; }
  .euiFormControlLayout--1icons {
    padding-right: 34px; }
    .euiFormControlLayout--1icons[class*='compressed'] {
      padding-right: 26px; }
  .euiFormControlLayout--2icons {
    padding-right: 56px; }
    .euiFormControlLayout--2icons[class*='compressed'] {
      padding-right: 44px; }
  .euiFormControlLayout--3icons {
    padding-right: 78px; }
    .euiFormControlLayout--3icons[class*='compressed'] {
      padding-right: 62px; }
  .euiFormControlLayout--4icons {
    padding-right: 100px; }
    .euiFormControlLayout--4icons[class*='compressed'] {
      padding-right: 80px; }
  .euiFormControlLayout--5icons {
    padding-right: 122px; }
    .euiFormControlLayout--5icons[class*='compressed'] {
      padding-right: 98px; }

.euiFormControlLayout__childrenWrapper {
  position: relative; }

/**
 * 1. Account for inner box-shadow style border
 * 2. Ensure truncation works in children elements
 */
.euiFormControlLayout--group {
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
          align-items: stretch;
  padding: 1px;
  /* 1 */ }
  @supports (-moz-appearance: none) {
    .euiFormControlLayout--group {
      transition-property: box-shadow, background-image, background-size; } }
  .euiFormControlLayout--group > *,
  .euiFormControlLayout--group .euiPopover__anchor,
  .euiFormControlLayout--group .euiButtonEmpty,
  .euiFormControlLayout--group .euiText,
  .euiFormControlLayout--group .euiFormLabel,
  .euiFormControlLayout--group .euiButtonIcon {
    height: 100%; }
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper {
    -webkit-flex-grow: 1;
            flex-grow: 1;
    overflow: hidden;
    /* 2 */ }
  .euiFormControlLayout--group .euiFormControlLayout__prepend,
  .euiFormControlLayout--group .euiFormControlLayout__append {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    -webkit-flex-shrink: 0;
            flex-shrink: 0;
    height: 100%;
    border-radius: 0; }
    .euiFormControlLayout--group .euiFormControlLayout__prepend.euiIcon,
    .euiFormControlLayout--group .euiFormControlLayout__prepend .euiIcon,
    .euiFormControlLayout--group .euiFormControlLayout__append.euiIcon,
    .euiFormControlLayout--group .euiFormControlLayout__append .euiIcon {
      padding: 0 8px;
      width: 32px;
      border-radius: 0;
      background-color: #e9edf3; }
    .euiFormControlLayout--group .euiFormControlLayout__prepend.euiButtonIcon, .euiFormControlLayout--group .euiFormControlLayout__prepend.euiButtonEmpty,
    .euiFormControlLayout--group .euiFormControlLayout__prepend .euiButtonIcon,
    .euiFormControlLayout--group .euiFormControlLayout__prepend .euiButtonEmpty,
    .euiFormControlLayout--group .euiFormControlLayout__append.euiButtonIcon,
    .euiFormControlLayout--group .euiFormControlLayout__append.euiButtonEmpty,
    .euiFormControlLayout--group .euiFormControlLayout__append .euiButtonIcon,
    .euiFormControlLayout--group .euiFormControlLayout__append .euiButtonEmpty {
      -webkit-transform: none !important;
              transform: none !important; }
      .euiFormControlLayout--group .euiFormControlLayout__prepend.euiButtonIcon .euiIcon, .euiFormControlLayout--group .euiFormControlLayout__prepend.euiButtonEmpty .euiIcon,
      .euiFormControlLayout--group .euiFormControlLayout__prepend .euiButtonIcon .euiIcon,
      .euiFormControlLayout--group .euiFormControlLayout__prepend .euiButtonEmpty .euiIcon,
      .euiFormControlLayout--group .euiFormControlLayout__append.euiButtonIcon .euiIcon,
      .euiFormControlLayout--group .euiFormControlLayout__append.euiButtonEmpty .euiIcon,
      .euiFormControlLayout--group .euiFormControlLayout__append .euiButtonIcon .euiIcon,
      .euiFormControlLayout--group .euiFormControlLayout__append .euiButtonEmpty .euiIcon {
        background: none !important;
        padding: 0;
        width: 16px; }
  .euiFormControlLayout--group .euiButtonIcon {
    padding: 0 8px;
    width: 32px;
    border-radius: 0; }
    .euiFormControlLayout--group .euiButtonIcon:not(:focus) {
      background-color: #e9edf3; }
    .euiFormControlLayout--group .euiButtonIcon:focus-visible {
      outline: 2px solid #0071c2;
      outline-offset: -2px; }
  .euiFormControlLayout--group .euiToolTipAnchor > .euiIcon {
    height: 100%;
    background-color: #e9edf3;
    padding: 0 8px;
    width: 32px;
    border-radius: 0; }
  .euiFormControlLayout--group > .euiFormControlLayout__prepend,
  .euiFormControlLayout--group > .euiFormControlLayout__append {
    max-width: 50%; }
  .euiFormControlLayout--group .euiFormLabel,
  .euiFormControlLayout--group .euiText {
    background-color: #e9edf3;
    padding: 12px;
    line-height: 16px !important;
    cursor: default !important; }
    .euiFormControlLayout--group .euiFormLabel + *:not(.euiFormControlLayout__childrenWrapper):not(input),
    .euiFormControlLayout--group .euiText + *:not(.euiFormControlLayout__childrenWrapper):not(input) {
      margin-left: -12px; }
  .euiFormControlLayout--group > *:not(.euiFormControlLayout__childrenWrapper) + .euiFormLabel,
  .euiFormControlLayout--group > *:not(.euiFormControlLayout__childrenWrapper) + .euiText {
    margin-left: -12px; }
  .euiFormControlLayout--group .euiButtonEmpty {
    border-right: none; }
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper ~ .euiButtonEmpty,
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper ~ * .euiButtonEmpty {
    border-right: none;
    border-left: none; }
  .euiFormControlLayout--group.euiFormControlLayout--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    border-radius: 3px;
    overflow: hidden; }
    @supports (-moz-appearance: none) {
      .euiFormControlLayout--group.euiFormControlLayout--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormLabel,
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiText {
      padding: 8px; }
      .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormLabel + *:not(.euiFormControlLayout__childrenWrapper),
      .euiFormControlLayout--group.euiFormControlLayout--compressed .euiText + *:not(.euiFormControlLayout__childrenWrapper) {
        margin-left: -8px; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed > *:not(.euiFormControlLayout__childrenWrapper) + .euiFormLabel,
    .euiFormControlLayout--group.euiFormControlLayout--compressed > *:not(.euiFormControlLayout__childrenWrapper) + .euiText {
      margin-left: -8px; }
  .euiFormControlLayout--group.euiFormControlLayout--readOnly {
    cursor: default;
    background: #e9edf3;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px #e9edf3; }
    .euiFormControlLayout--group.euiFormControlLayout--readOnly input {
      background-color: #FFF; }

.euiFormControlLayoutDelimited {
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
          align-items: stretch;
  padding: 1px;
  /* 1 */ }
  @supports (-moz-appearance: none) {
    .euiFormControlLayoutDelimited {
      transition-property: box-shadow, background-image, background-size; } }
  .euiFormControlLayoutDelimited .euiFormControlLayoutDelimited__delimeter {
    background-color: #fbfcfd; }
  .euiFormControlLayoutDelimited > .euiFormControlLayout__childrenWrapper {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
            align-items: center;
    width: 100%; }
  .euiFormControlLayoutDelimited[class*='--compressed'] {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    border-radius: 3px; }
    @supports (-moz-appearance: none) {
      .euiFormControlLayoutDelimited[class*='--compressed'] {
        transition-property: box-shadow, background-image, background-size; } }
    .euiFormControlLayoutDelimited[class*='--compressed'] .euiFormControlLayoutDelimited__input {
      height: 100%;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 8px;
      padding-right: 8px; }
    .euiFormControlLayoutDelimited[class*='--compressed'] .euiFormControlLayoutIcons {
      padding-left: 8px;
      padding-right: 8px; }
  .euiFormControlLayoutDelimited[class*='--fullWidth'] .euiFormControlLayout__childrenWrapper,
  .euiFormControlLayoutDelimited[class*='--fullWidth'] input {
    width: 100%;
    max-width: none; }
  .euiFormControlLayoutDelimited[class*='-isDisabled'] {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFormControlLayoutDelimited[class*='-isDisabled']::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFormControlLayoutDelimited[class*='-isDisabled']::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFormControlLayoutDelimited[class*='-isDisabled']::placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiFormControlLayoutDelimited[class*='-isDisabled'] .euiFormControlLayoutDelimited__delimeter {
      background-color: #eef2f7; }
  .euiFormControlLayoutDelimited[class*='--readOnly'] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiFormControlLayoutDelimited[class*='--readOnly'] input,
    .euiFormControlLayoutDelimited[class*='--readOnly'] .euiFormControlLayoutDelimited__delimeter {
      background-color: #FFF; }
  .euiFormControlLayoutDelimited .euiFormControlLayoutIcons {
    position: static;
    padding-left: 12px;
    padding-right: 12px;
    -webkit-flex-shrink: 0;
            flex-shrink: 0; }
    .euiFormControlLayoutDelimited .euiFormControlLayoutIcons:not(.euiFormControlLayoutIcons--right) {
      -webkit-order: -1;
              order: -1; }

.euiFormControlLayoutDelimited__input {
  box-shadow: none !important;
  border-radius: 0 !important;
  text-align: center;
  height: 100%;
  min-width: 0; }
  .euiFormControlLayoutDelimited[class*='--compressed'] .euiFormControlLayoutDelimited__input {
    max-width: none; }

.euiFormControlLayoutDelimited__delimeter {
  line-height: 1 !important;
  -webkit-flex: 0 0 auto;
          flex: 0 0 auto;
  padding-left: 6px;
  padding-right: 6px; }

.euiFormControlLayoutIcons {
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }
  .euiFormControlLayoutIcons > * + * {
    margin-left: 6px; }
  .euiFormControlLayout--compressed .euiFormControlLayoutIcons {
    left: 8px; }

.euiFormControlLayoutIcons--right {
  left: auto;
  right: 12px; }
  .euiFormControlLayout--compressed .euiFormControlLayoutIcons--right {
    left: auto;
    right: 8px; }

*:disabled + .euiFormControlLayoutIcons {
  cursor: not-allowed;
  color: #98A2B3; }

.euiFormControlLayoutClearButton {
  width: 16px;
  height: 16px;
  pointer-events: all;
  background-color: #98A2B3;
  border-radius: 16px;
  line-height: 0; }
  .euiFormControlLayoutClearButton:focus {
    outline: 2px solid currentColor; }
    .euiFormControlLayoutClearButton:focus:focus-visible {
      outline-style: auto; }
    .euiFormControlLayoutClearButton:focus:not(:focus-visible) {
      outline: none; }
  .euiFormControlLayoutClearButton .euiFormControlLayoutClearButton__icon {
    width: 8px;
    height: 8px;
    fill: #FFF;
    stroke: #FFF;
    stroke-width: 2px; }

.euiFormControlLayoutClearButton--small {
  width: 12px;
  height: 12px;
  pointer-events: all;
  background-color: #98A2B3;
  border-radius: 12px;
  line-height: 0; }
  .euiFormControlLayoutClearButton--small:focus {
    outline: 2px solid currentColor; }
    .euiFormControlLayoutClearButton--small:focus:focus-visible {
      outline-style: auto; }
    .euiFormControlLayoutClearButton--small:focus:not(:focus-visible) {
      outline: none; }
  .euiFormControlLayoutClearButton--small .euiFormControlLayoutClearButton__icon {
    width: 6px;
    height: 6px;
    fill: #FFF;
    stroke: #FFF;
    stroke-width: 4px; }

.euiFormControlLayoutCustomIcon {
  pointer-events: none;
  font-size: 0; }

.euiFormControlLayoutCustomIcon--clickable {
  width: 16px;
  height: 16px;
  pointer-events: all; }
  .euiFormControlLayoutCustomIcon--clickable .euiFormControlLayoutCustomIcon__icon {
    vertical-align: baseline;
    -webkit-transform: none;
            transform: none; }
  .euiFormControlLayoutCustomIcon--clickable:focus {
    outline: 2px solid currentColor; }
    .euiFormControlLayoutCustomIcon--clickable:focus:focus-visible {
      outline-style: auto; }
    .euiFormControlLayoutCustomIcon--clickable:focus:not(:focus-visible) {
      outline: none; }
  .euiFormControlLayoutCustomIcon--clickable:disabled {
    cursor: not-allowed;
    color: #98A2B3; }

.euiFormErrorText {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem;
  padding-top: 4px;
  color: #BD271E; }

.euiFormLegend {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-weight: 600; }
  .euiFormLegend:not(.euiFormLegend-isHidden) {
    margin-bottom: 8px; }
    .euiFormLegend:not(.euiFormLegend-isHidden).euiFormLegend--compressed {
      margin-bottom: 4px; }

.euiFormHelpText {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem;
  padding-top: 4px;
  color: #69707D; }

/**
 * 1. Focused state overrides invalid state.
 * 2. Disabled state overrides pointer.
 */
.euiFormLabel {
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-weight: 600;
  display: inline-block;
  transition: all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiFormLabel.euiFormLabel-isInvalid {
    color: #BD271E;
    /* 1 */ }
  .euiFormLabel.euiFormLabel-isFocused {
    color: #07C;
    /* 1 */ }
  .euiFormLabel[for] {
    cursor: pointer;
    /* 2 */ }
  .euiFormLabel[for].euiFormLabel-isDisabled {
    cursor: default;
    /* 2 */ }

/**
 * 1. Coerce inline form elements to behave as block-level elements.
 * 2. For inline forms, we need to add margin if the label doesn't exist.
 */
.euiFormRow {
  display: -webkit-flex;
  display: flex;
  /* 1 */
  -webkit-flex-direction: column;
          flex-direction: column;
  /* 1 */
  max-width: 400px; }
  .euiFormRow + .euiFormRow,
  .euiFormRow + .euiButton {
    margin-top: 16px; }

.euiFormRow--fullWidth {
  max-width: 100%; }

.euiFormRow--hasEmptyLabelSpace {
  margin-top: 20px;
  /* 2 */
  min-height: 40px;
  padding-bottom: 0;
  -webkit-justify-content: center;
          justify-content: center; }

.euiFormRow__labelWrapper {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  margin-bottom: 4px; }

.euiFormRow--horizontal {
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: stretch;
          align-items: stretch; }
  .euiFormRow--horizontal .euiFormRow__label {
    -webkit-hyphens: auto;
            hyphens: auto;
    max-width: 100%; }
  .euiFormRow--horizontal .euiFormRow__labelWrapper {
    display: block;
    line-height: 31px;
    width: calc(33% - 8px);
    margin-right: 8px;
    margin-bottom: 0; }
  .euiFormRow--horizontal .euiFormRow__fieldWrapper {
    width: 67%; }
  .euiFormRow--horizontal + .euiFormRow--horizontal {
    margin-top: 8px; }
  .euiFormRow--horizontal + .euiFormRow--horizontal.euiFormRow--hasSwitch {
    margin-top: 12px; }
  .euiFormRow--horizontal.euiFormRow--hasSwitch .euiFormRow__labelWrapper {
    line-height: 19px;
    width: auto;
    min-width: calc(33% - 8px); }
  .euiFormRow--horizontal.euiFormRow--hasSwitch .euiFormRow__fieldWrapper {
    width: auto; }
    .euiFormRow--horizontal.euiFormRow--hasSwitch .euiFormRow__fieldWrapper .euiSwitch--compressed {
      margin-top: 2px; }
  .euiFormRow--horizontal.euiFormRow--hasSwitch + .euiFormRow--horizontal {
    margin-top: 12px; }

.euiFormRow__fieldWrapperDisplayOnly {
  min-height: 40px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }

.euiFormRow--compressed.euiFormRow--hasEmptyLabelSpace {
  min-height: 32px; }

.euiFormRow--compressed .euiFormRow__fieldWrapperDisplayOnly {
  min-height: 32px; }

/**
  * 1. Float above the visual radio and match its dimension, so that when users try to click it
  *    they actually click this input.
  */
.euiRadio {
  position: relative; }
  .euiRadio .euiRadio__input {
    width: 16px;
    height: 16px;
    top: 3px;
    cursor: pointer;
    position: absolute;
    /* 1 */
    opacity: 0;
    /* 1 */
    z-index: 1;
    /* 1 */ }
    .euiRadio .euiRadio__input ~ .euiRadio__label {
      display: inline-block;
      padding-left: 24px;
      line-height: 24px;
      font-size: 14px;
      position: relative;
      z-index: 2;
      cursor: pointer; }
    .euiRadio .euiRadio__input + .euiRadio__circle {
      padding: 7px;
      border: 1px solid #c9cbcd;
      background: #FFF no-repeat center;
      border-radius: 14px;
      transition: background-color 150ms ease-in, border-color 150ms ease-in;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 3px; }
    .euiRadio .euiRadio__input:checked + .euiRadio__circle {
      border-color: #07C;
      background-color: #07C;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Ccircle cx='8' cy='11' r='3' fill='rgb%28255, 255, 255%29' fill-rule='evenodd' transform='translate(-5 -8)'/%3E%3C/svg%3E"); }
    .euiRadio .euiRadio__input[disabled] {
      cursor: not-allowed !important; }
      .euiRadio .euiRadio__input[disabled] ~ .euiRadio__label {
        color: #98A2B3;
        cursor: not-allowed !important; }
      .euiRadio .euiRadio__input[disabled] + .euiRadio__circle {
        border-color: #D3DAE6;
        background-color: #D3DAE6;
        box-shadow: none; }
    .euiRadio .euiRadio__input:checked[disabled] + .euiRadio__circle {
      border-color: #D3DAE6;
      background-color: #D3DAE6;
      box-shadow: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Ccircle cx='8' cy='11' r='3' fill='rgb%2894, 100, 111%29' fill-rule='evenodd' transform='translate(-5 -8)'/%3E%3C/svg%3E"); }
    .euiRadio .euiRadio__input:focus + .euiRadio__circle {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      border-color: #07C; }
      .euiRadio .euiRadio__input:focus + .euiRadio__circle:focus-visible {
        outline-style: auto; }
      .euiRadio .euiRadio__input:focus + .euiRadio__circle:not(:focus-visible) {
        outline: none; }
  .euiRadio.euiRadio--inList, .euiRadio.euiRadio--noLabel {
    min-height: 16px;
    min-width: 16px; }
    .euiRadio.euiRadio--inList .euiRadio__input,
    .euiRadio.euiRadio--inList .euiRadio__circle, .euiRadio.euiRadio--noLabel .euiRadio__input,
    .euiRadio.euiRadio--noLabel .euiRadio__circle {
      top: 0; }
    .euiRadio.euiRadio--inList .euiRadio__input, .euiRadio.euiRadio--noLabel .euiRadio__input {
      margin: 0; }

.euiRadioGroup__item + .euiRadioGroup__item {
  margin-top: 4px; }
  .euiRadioGroup__item + .euiRadioGroup__item.euiRadio--compressed {
    margin-top: 0; }

.euiRange__horizontalSpacer {
  width: 16px; }

.euiRange__slimHorizontalSpacer {
  width: 8px; }

.euiRangeDraggable {
  height: 20px;
  position: absolute;
  top: 10px;
  pointer-events: none;
  z-index: 2; }
  .euiRangeDraggable.euiRangeDraggable--compressed {
    height: 16px;
    top: 8px; }
  .euiRangeDraggable.euiRangeDraggable--hasTicks {
    top: 0; }
  .euiRangeDraggable .euiRangeDraggle__inner {
    position: absolute;
    left: 16px;
    right: 16px;
    top: 0;
    bottom: 0; }
  .euiRangeDraggable:not(.euiRangeDraggable--disabled) .euiRangeDraggle__inner {
    cursor: -webkit-grab;
    cursor: grab;
    pointer-events: all; }
    .euiRangeDraggable:not(.euiRangeDraggable--disabled) .euiRangeDraggle__inner:active {
      cursor: -webkit-grabbing;
      cursor: grabbing; }

.euiRangeHighlight {
  position: absolute;
  left: 0;
  width: 100%;
  top: calc(50% - 3px);
  overflow: hidden; }
  .euiRangeHighlight__progress {
    height: 6px;
    border-radius: 6px;
    background-color: #D3DAE6; }
    .euiRangeHighlight__progress--hasFocus {
      background-color: #07C; }
  .euiRangeHighlight--hasTicks {
    top: 7px; }
  .euiRangeHighlight--hasTicks.euiRangeHighlight--compressed {
    top: 5px; }

.euiRangeInput {
  width: auto;
  min-width: 64px; }
  .euiRange__popover .euiRangeInput {
    margin: 0 !important;
    width: 100%; }

.euiRangeLabel--min, .euiRangeLabel--max {
  font-size: 12px; }

.euiRangeLabel--min {
  margin-right: 8px; }

.euiRangeLabel--max {
  margin-left: 8px; }

.euiRangeLabel--isDisabled {
  opacity: 0.25; }

.euiRangeLevels {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: stretch;
          justify-content: stretch;
  position: absolute;
  left: 0;
  right: 0;
  top: 22px; }
  .euiRangeLevels--hasTicks {
    top: 12px; }
  .euiRangeLevels--compressed {
    top: 18px; }
    .euiRangeLevels--compressed.euiRangeLevels--hasTicks {
      top: 10px; }

.euiRangeLevel {
  display: block;
  position: absolute;
  height: 6px;
  border-radius: 6px;
  margin: 2px; }

.euiRangeLevel--primary {
  background-color: rgba(0, 119, 204, 0.3); }

.euiRangeLevel--success {
  background-color: rgba(0, 191, 179, 0.3); }

.euiRangeLevel--warning {
  background-color: rgba(254, 197, 20, 0.3); }

.euiRangeLevel--danger {
  background-color: rgba(189, 39, 30, 0.3); }

/*
 *  Input Range Customization by browser
 */
.euiRangeSlider {
  height: 40px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: transparent;
  width: 100%;
  position: relative;
  cursor: pointer;
  z-index: 1; }
  .euiRangeSlider:disabled {
    cursor: not-allowed; }
    .euiRangeSlider:disabled::-webkit-slider-thumb {
      cursor: not-allowed;
      border-color: #FFF;
      background-color: #FFF;
      box-shadow: none; }
    .euiRangeSlider:disabled::-moz-range-thumb {
      cursor: not-allowed;
      border-color: #FFF;
      background-color: #FFF;
      box-shadow: none; }
    .euiRangeSlider:disabled::-ms-thumb {
      cursor: not-allowed;
      border-color: #FFF;
      background-color: #FFF;
      box-shadow: none; }
    .euiRangeSlider:disabled ~ .euiRangeThumb {
      cursor: not-allowed;
      border-color: #FFF;
      background-color: #FFF;
      box-shadow: none; }
  .euiRangeSlider::-webkit-slider-thumb {
    padding: 7px;
    border: 1px solid #c9cbcd;
    background: #FFF no-repeat center;
    border-radius: 14px;
    -webkit-transition: background-color 150ms ease-in, border-color 150ms ease-in;
    transition: background-color 150ms ease-in, border-color 150ms ease-in;
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    border: 2px solid #FFF;
    cursor: pointer;
    background-color: #69707D;
    padding: 0;
    height: 16px;
    width: 16px;
    box-sizing: border-box; }
  .euiRangeSlider::-moz-range-thumb {
    padding: 7px;
    border: 1px solid #c9cbcd;
    background: #FFF no-repeat center;
    border-radius: 14px;
    -moz-transition: background-color 150ms ease-in, border-color 150ms ease-in;
    transition: background-color 150ms ease-in, border-color 150ms ease-in;
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    border: 2px solid #FFF;
    cursor: pointer;
    background-color: #69707D;
    padding: 0;
    height: 16px;
    width: 16px;
    box-sizing: border-box; }
  .euiRangeSlider::-ms-thumb {
    padding: 7px;
    border: 1px solid #c9cbcd;
    background: #FFF no-repeat center;
    border-radius: 14px;
    -ms-transition: background-color 150ms ease-in, border-color 150ms ease-in;
    transition: background-color 150ms ease-in, border-color 150ms ease-in;
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    border: 2px solid #FFF;
    cursor: pointer;
    background-color: #69707D;
    padding: 0;
    height: 16px;
    width: 16px;
    box-sizing: border-box; }
  .euiRangeSlider::-webkit-slider-runnable-track {
    height: 6px;
    width: 100%;
    background: #D3DAE6;
    border: 0 solid #69707D;
    border-radius: 4px; }
  .euiRangeSlider::-moz-range-track {
    height: 6px;
    width: 100%;
    background: #D3DAE6;
    border: 0 solid #69707D;
    border-radius: 4px; }
  .euiRangeSlider::-ms-fill-lower {
    height: 6px;
    width: 100%;
    background: #D3DAE6;
    border: 0 solid #69707D;
    border-radius: 4px; }
  .euiRangeSlider::-ms-fill-upper {
    height: 6px;
    width: 100%;
    background: #D3DAE6;
    border: 0 solid #69707D;
    border-radius: 4px; }
  .euiRangeSlider:focus {
    outline: none; }
  .euiRangeSlider:focus-visible::-webkit-slider-thumb, .euiRangeSlider--hasFocus::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px #0071c2; }
  .euiRangeSlider:focus-visible::-moz-range-thumb, .euiRangeSlider--hasFocus::-moz-range-thumb {
    box-shadow: 0 0 0 2px #0071c2; }
  .euiRangeSlider:focus-visible::-ms-thumb, .euiRangeSlider--hasFocus::-ms-thumb {
    box-shadow: 0 0 0 2px #0071c2; }
  .euiRangeSlider:focus-visible ~ .euiRangeThumb, .euiRangeSlider--hasFocus ~ .euiRangeThumb {
    border-color: #FFF; }
  .euiRangeSlider:focus-visible::-webkit-slider-runnable-track, .euiRangeSlider--hasFocus::-webkit-slider-runnable-track {
    background-color: #07C;
    border-color: #07C; }
  .euiRangeSlider:focus-visible::-moz-range-track, .euiRangeSlider--hasFocus::-moz-range-track {
    background-color: #07C;
    border-color: #07C; }
  .euiRangeSlider:focus-visible::-ms-fill-lower, .euiRangeSlider--hasFocus::-ms-fill-lower {
    background-color: #07C;
    border-color: #07C; }
  .euiRangeSlider:focus-visible::-ms-fill-upper, .euiRangeSlider--hasFocus::-ms-fill-upper {
    background-color: #07C;
    border-color: #07C; }
  .euiRangeSlider:focus-visible ~ .euiRangeHighlight .euiRangeHighlight__progress, .euiRangeSlider--hasFocus ~ .euiRangeHighlight .euiRangeHighlight__progress {
    background-color: #07C; }
  .euiRangeSlider:focus-visible ~ .euiRangeTooltip .euiRangeTooltip__value, .euiRangeSlider--hasFocus ~ .euiRangeTooltip .euiRangeTooltip__value {
    box-shadow: 0 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0 2.6px 8px -1px rgba(0, 0, 0, 0.06), 0 5.7px 12px -1px rgba(0, 0, 0, 0.05), 0 15px 15px -1px rgba(0, 0, 0, 0.04); }
    .euiRangeSlider:focus-visible ~ .euiRangeTooltip .euiRangeTooltip__value.euiRangeTooltip__value--right, .euiRangeSlider:focus-visible ~ .euiRangeTooltip .euiRangeTooltip__value.euiRangeTooltip__value--left, .euiRangeSlider--hasFocus ~ .euiRangeTooltip .euiRangeTooltip__value.euiRangeTooltip__value--right, .euiRangeSlider--hasFocus ~ .euiRangeTooltip .euiRangeTooltip__value.euiRangeTooltip__value--left {
      -webkit-transform: translateX(0) translateY(-50%) scale(1.1);
              transform: translateX(0) translateY(-50%) scale(1.1); }
  .euiRangeSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -5px; }
  .euiRangeSlider::-ms-thumb {
    margin-top: 0; }
  .euiRangeSlider::-moz-focus-outer {
    border: none; }
  .euiRangeSlider::-ms-track {
    height: 6px;
    width: 100%;
    background: transparent;
    border-color: transparent;
    border-width: 8px 0;
    color: transparent; }
  .euiRangeSlider--hasTicks {
    height: 20px; }
  .euiRangeSlider--compressed {
    height: 32px; }
    .euiRangeSlider--compressed.euiRangeSlider--hasTicks {
      height: 16px; }

.euiRangeSlider--hasRange::-webkit-slider-runnable-track {
  background-color: rgba(211, 218, 230, 0.4);
  border-color: rgba(105, 112, 125, 0.4); }

.euiRangeSlider--hasRange::-moz-range-track {
  background-color: rgba(211, 218, 230, 0.4);
  border-color: rgba(105, 112, 125, 0.4); }

.euiRangeSlider--hasRange::-ms-fill-lower {
  background-color: rgba(211, 218, 230, 0.4);
  border-color: rgba(105, 112, 125, 0.4); }

.euiRangeSlider--hasRange::-ms-fill-upper {
  background-color: rgba(211, 218, 230, 0.4);
  border-color: rgba(105, 112, 125, 0.4); }

.euiRangeThumb {
  padding: 7px;
  border: 1px solid #c9cbcd;
  background: #FFF no-repeat center;
  border-radius: 14px;
  transition: background-color 150ms ease-in, border-color 150ms ease-in;
  box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
  border: 2px solid #FFF;
  cursor: pointer;
  background-color: #69707D;
  padding: 0;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -8px;
  pointer-events: none;
  z-index: 1; }
  .euiRangeThumb:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-color: #07C; }
    .euiRangeThumb:focus:focus-visible {
      outline-style: auto; }
    .euiRangeThumb:focus:not(:focus-visible) {
      outline: none; }
  .euiRangeThumb--hasTicks {
    top: 25%; }

.euiRangeTicks {
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  display: -webkit-flex;
  display: flex; }
  .euiRangeTicks--isCustom {
    left: 2px;
    right: 2px; }

.euiRangeTick {
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  position: absolute;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  padding-top: 16px; }
  .euiRangeTick:not(.euiRangeTick--hasTickMark)::before {
    width: 4px;
    height: 4px;
    background-color: #69707D;
    border-radius: 100%;
    position: absolute;
    top: 0;
    content: '';
    left: calc(50% - 2px); }
  .euiRangeTick .euiRangeTick__pseudo {
    width: 4px;
    height: 4px;
    background-color: #69707D;
    border-radius: 100%;
    position: absolute;
    top: 0; }
  .euiRangeTick--isCustom {
    overflow-x: visible; }
  .euiRangeTick--isMin, .euiRangeTick--isMax {
    -webkit-transform: translateX(0);
            transform: translateX(0); }
  .euiRangeTick--isMin .euiRangeTick__pseudo {
    left: 0; }
  .euiRangeTick--isMax .euiRangeTick__pseudo {
    right: 0; }
  .euiRangeTick:enabled:hover, .euiRangeTick:focus, .euiRangeTick--selected {
    color: #07C; }
  .euiRangeTick--selected {
    font-weight: 500; }
  .euiRangeTick:disabled {
    cursor: not-allowed; }

.euiRangeTicks--compressed {
  top: 6px; }
  .euiRangeTicks--compressed .euiRangeTick {
    padding-top: 14px; }

.euiRangeTick__label {
  pointer-events: none; }

.euiRangeTooltip {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: calc(100% - 16px);
  margin-left: 8px;
  pointer-events: none;
  z-index: 2; }

.euiRangeTooltip__value {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  border: 1px solid #404040;
  position: absolute;
  border-radius: 6px;
  padding: 2px 8px;
  background-color: #404040;
  color: #FFF;
  max-width: 256px;
  top: 50%;
  transition: box-shadow 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
  transition: box-shadow 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
  transition: box-shadow 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
  .euiRangeTooltip__value::after, .euiRangeTooltip__value::before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    -webkit-transform-origin: center;
            transform-origin: center;
    background-color: #404040;
    width: 12px;
    height: 12px;
    border-radius: 2px; }
  .euiRangeTooltip__value::before {
    background-color: #404040; }
  .euiRangeTooltip__value.euiRangeTooltip__value--right {
    margin-left: 24px; }
    .euiRangeTooltip__value.euiRangeTooltip__value--right:before, .euiRangeTooltip__value.euiRangeTooltip__value--right:after {
      left: -5px; }
    .euiRangeTooltip__value.euiRangeTooltip__value--right::before {
      margin-left: -1px; }
  .euiRangeTooltip__value.euiRangeTooltip__value--left {
    margin-right: 24px; }
    .euiRangeTooltip__value.euiRangeTooltip__value--left:before, .euiRangeTooltip__value.euiRangeTooltip__value--left:after {
      left: auto;
      right: -5px; }
    .euiRangeTooltip__value.euiRangeTooltip__value--left::before {
      margin-right: -1px; }
  .euiRangeTooltip__value.euiRangeTooltip__value--right, .euiRangeTooltip__value.euiRangeTooltip__value--left {
    -webkit-transform: translateX(0) translateY(-50%);
            transform: translateX(0) translateY(-50%); }
    .euiRangeTooltip__value.euiRangeTooltip__value--right:before, .euiRangeTooltip__value.euiRangeTooltip__value--right:after, .euiRangeTooltip__value.euiRangeTooltip__value--left:before, .euiRangeTooltip__value.euiRangeTooltip__value--left:after {
      bottom: 50%;
      -webkit-transform: translateY(50%) rotateZ(45deg);
              transform: translateY(50%) rotateZ(45deg); }
  .euiRangeTooltip__value--hasTicks {
    top: 10px; }
    .euiRangeTooltip--compressed .euiRangeTooltip__value--hasTicks {
      top: 8px; }

.euiRangeTrack {
  height: 100%;
  -webkit-flex-grow: 1;
          flex-grow: 1;
  position: relative;
  -webkit-align-self: flex-start;
          align-self: flex-start; }
  .euiRangeTrack--hasTicks {
    margin-left: 1em;
    margin-right: 1em; }
  .euiRangeTrack--disabled {
    opacity: 0.25; }

/*
 * 1. There's no way to target the layout of the extra input, so we must
 *    use the descendant selector to allow the width to shrink.
 *
 * 2. Prevent the prepend/append label from extending outside the parent element
 */
.euiRangeWrapper {
  max-width: 400px;
  width: 100%;
  height: 40px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }
  .euiRangeWrapper--fullWidth {
    max-width: 100%; }
  .euiRangeWrapper--compressed {
    height: 32px; }
  .euiRangeWrapper--inGroup {
    height: 100%; }
  .euiRangeWrapper > .euiFormControlLayout {
    /* 1 */
    width: auto; }
    .euiRangeWrapper > .euiFormControlLayout.euiFormControlLayout--group {
      -webkit-flex-shrink: 0;
              flex-shrink: 0;
      /* 2 */ }

.euiDualRange__slider::-webkit-slider-thumb {
  visibility: hidden; }

.euiDualRange__slider::-moz-range-thumb {
  visibility: hidden; }

.euiDualRange__slider::-ms-thumb {
  visibility: hidden; }

.euiSwitch {
  position: relative;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-align-items: flex-start;
          align-items: flex-start;
  min-height: 20px; }
  .euiSwitch .euiSwitch__label {
    cursor: pointer;
    padding-left: 8px;
    line-height: 20px;
    font-size: 14px;
    vertical-align: middle;
    display: inline-block; }
  .euiSwitch .euiSwitch__button {
    -webkit-flex-shrink: 0;
            flex-shrink: 0;
    line-height: 0; }
    .euiSwitch .euiSwitch__button:focus .euiSwitch__track {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      border-color: #07C; }
      .euiSwitch .euiSwitch__button:focus .euiSwitch__track:focus-visible {
        outline-style: auto; }
      .euiSwitch .euiSwitch__button:focus .euiSwitch__track:not(:focus-visible) {
        outline: none; }
    .euiSwitch .euiSwitch__button:disabled:hover,
    .euiSwitch .euiSwitch__button:disabled ~ .euiSwitch__label:hover {
      cursor: not-allowed; }
    .euiSwitch .euiSwitch__button:disabled .euiSwitch__body {
      background-color: rgba(152, 162, 179, 0.2); }
    .euiSwitch .euiSwitch__button:disabled .euiSwitch__thumb {
      border-color: #D3DAE6;
      background-color: #D3DAE6;
      box-shadow: none;
      background-color: rgba(152, 162, 179, 0.2); }
    .euiSwitch .euiSwitch__button:disabled .euiSwitch__icon {
      fill: #5e646f; }
    .euiSwitch .euiSwitch__button:disabled + .euiSwitch__label {
      color: #98A2B3; }
    .euiSwitch .euiSwitch__button[aria-checked='false'] .euiSwitch__body {
      background-color: rgba(152, 162, 179, 0.2); }
    .euiSwitch .euiSwitch__button[aria-checked='false'] .euiSwitch__thumb {
      left: 0; }
    .euiSwitch .euiSwitch__button[aria-checked='false'] .euiSwitch__icon {
      right: -8px; }
      .euiSwitch .euiSwitch__button[aria-checked='false'] .euiSwitch__icon.euiSwitch__icon--checked {
        right: auto;
        left: -34px; }
  .euiSwitch .euiSwitch__body {
    pointer-events: none;
    width: 44px;
    height: 20px;
    background-color: #07C;
    display: inline-block;
    position: relative;
    border-radius: 20px;
    vertical-align: middle; }
  .euiSwitch .euiSwitch__thumb {
    padding: 9px;
    border: 1px solid #c9cbcd;
    background: #FFF no-repeat center;
    border-radius: 18px;
    transition: background-color 150ms ease-in, border-color 150ms ease-in;
    position: absolute;
    display: inline-block;
    left: 24px;
    transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
    transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
    transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1), -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1); }
  .euiSwitch .euiSwitch__track {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    border-radius: 20px; }
  .euiSwitch .euiSwitch__icon {
    position: absolute;
    right: -34px;
    top: 2px;
    bottom: 0;
    width: 42px;
    height: 16px;
    transition: left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), right 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
    fill: #343741; }
  .euiSwitch .euiSwitch__icon--checked {
    right: auto;
    left: -8px;
    fill: #FFF; }
  .euiSwitch:hover .euiSwitch__button:not(:disabled) .euiSwitch__thumb {
    -webkit-transform: scale(1.05);
            transform: scale(1.05); }
  .euiSwitch:hover .euiSwitch__button:active .euiSwitch__thumb {
    -webkit-transform: scale(0.95);
            transform: scale(0.95); }
  .euiSwitch.euiSwitch--compressed {
    min-height: 16px; }
    .euiSwitch.euiSwitch--compressed .euiSwitch__label {
      line-height: 16px; }
    .euiSwitch.euiSwitch--compressed .euiSwitch__body {
      width: 28px;
      height: 16px;
      border-radius: 16px; }
    .euiSwitch.euiSwitch--compressed .euiSwitch__thumb {
      padding: 6px;
      border: 1px solid #c9cbcd;
      background: #FFF no-repeat center;
      border-radius: 12px;
      transition: background-color 150ms ease-in, border-color 150ms ease-in;
      left: 13px;
      top: 1px;
      transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
      transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
      transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1), -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1); }
    .euiSwitch.euiSwitch--compressed .euiSwitch__track {
      border-radius: 16px; }
  .euiSwitch.euiSwitch--mini {
    min-height: 10px; }
    .euiSwitch.euiSwitch--mini .euiSwitch__label {
      line-height: 10px;
      font-size: 12px; }
    .euiSwitch.euiSwitch--mini .euiSwitch__body {
      width: 22px;
      height: 10px;
      border-radius: 10px; }
    .euiSwitch.euiSwitch--mini .euiSwitch__thumb {
      padding: 3px;
      border: 1px solid #c9cbcd;
      background: #FFF no-repeat center;
      border-radius: 6px;
      transition: background-color 150ms ease-in, border-color 150ms ease-in;
      left: 13px;
      top: 1px;
      transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
      transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
      transition: border-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), background-color 250ms cubic-bezier(0.34, 1.61, 0.7, 1), left 250ms cubic-bezier(0.34, 1.61, 0.7, 1), transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1), -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1); }
    .euiSwitch.euiSwitch--mini .euiSwitch__track {
      border-radius: 10px; }
  .euiSwitch.euiSwitch--compressed .euiSwitch__button[aria-checked='false'] .euiSwitch__thumb, .euiSwitch.euiSwitch--mini .euiSwitch__button[aria-checked='false'] .euiSwitch__thumb {
    left: 1px; }
  .euiSwitch.euiSwitch--compressed .euiSwitch__button[aria-checked='false'] .euiSwitch__thumb,
  .euiSwitch.euiSwitch--compressed .euiSwitch__button[aria-checked='true']:disabled .euiSwitch__thumb, .euiSwitch.euiSwitch--mini .euiSwitch__button[aria-checked='false'] .euiSwitch__thumb,
  .euiSwitch.euiSwitch--mini .euiSwitch__button[aria-checked='true']:disabled .euiSwitch__thumb {
    border-color: #c9cbcd; }
  .euiSwitch.euiSwitch--compressed .euiSwitch__button[aria-checked='true'] .euiSwitch__thumb, .euiSwitch.euiSwitch--mini .euiSwitch__button[aria-checked='true'] .euiSwitch__thumb {
    border-color: #07C; }

.euiTextArea {
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  box-shadow: 0 0 transparent, inset 0 0 0 1px rgba(17, 43, 134, 0.1);
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  border: none;
  border-radius: 6px;
  padding: 12px;
  line-height: 1.5; }
  .euiTextArea--fullWidth {
    max-width: 100%; }
  .euiTextArea--compressed {
    height: 32px; }
  .euiTextArea--inGroup {
    height: 100%; }
  @supports (-moz-appearance: none) {
    .euiTextArea {
      transition-property: box-shadow, background-image, background-size; } }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiTextArea {
      line-height: 1em; } }
  .euiTextArea::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiTextArea::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiTextArea::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiTextArea:invalid {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
    background-size: 100%; }
  .euiTextArea:focus {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiTextArea:disabled {
    color: #98A2B3;
    -webkit-text-fill-color: #98A2B3;
    cursor: not-allowed;
    background: #eef2f7;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiTextArea:disabled::-webkit-input-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiTextArea:disabled::-moz-placeholder {
      color: #98A2B3;
      opacity: 1; }
    .euiTextArea:disabled::placeholder {
      color: #98A2B3;
      opacity: 1; }
  .euiTextArea[readOnly] {
    cursor: default;
    color: #343741;
    -webkit-text-fill-color: #343741;
    background: #FFF;
    border-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiTextArea:-webkit-autofill {
    -webkit-text-fill-color: #343741; }
    .euiTextArea:-webkit-autofill ~ .euiFormControlLayoutIcons {
      color: #343741; }
  .euiTextArea--compressed {
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1);
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    padding: 8px;
    border-radius: 4px; }
    @supports (-moz-appearance: none) {
      .euiTextArea--compressed {
        transition-property: box-shadow, background-image, background-size; } }
    .euiTextArea--compressed:invalid {
      background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%);
      background-size: 100%; }
    .euiTextArea--compressed:focus {
      background-color: white;
      background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
    .euiTextArea--compressed:disabled {
      color: #98A2B3;
      -webkit-text-fill-color: #98A2B3;
      cursor: not-allowed;
      background: #eef2f7;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
      .euiTextArea--compressed:disabled::-webkit-input-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiTextArea--compressed:disabled::-moz-placeholder {
        color: #98A2B3;
        opacity: 1; }
      .euiTextArea--compressed:disabled::placeholder {
        color: #98A2B3;
        opacity: 1; }
    .euiTextArea--compressed[readOnly] {
      cursor: default;
      color: #343741;
      -webkit-text-fill-color: #343741;
      background: #FFF;
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }
  .euiTextArea--inGroup {
    box-shadow: none !important;
    border-radius: 0; }
  .euiTextArea, .euiTextArea--compressed {
    height: auto; }

.euiTextArea--resizeVertical {
  resize: vertical; }

.euiTextArea--resizeHorizontal {
  resize: horizontal; }

.euiTextArea--resizeBoth {
  resize: both; }

.euiTextArea--resizeNone {
  resize: none; }

.euiHeader {
  box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05);
  height: 49px;
  position: relative;
  z-index: 999;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  background: #FFF;
  border-bottom: 1px solid #cdd3df; }
  .euiHeader--fixed {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; }

.euiHeader--fixed + .euiHeader--fixed {
  top: 48px; }

.euiHeader--dark {
  background-color: #25282f;
  border-bottom-color: #25282f; }
  .euiHeader--dark .euiHeaderLogo__text,
  .euiHeader--dark .euiHeaderLink,
  .euiHeader--dark .euiHeaderSectionItemButton {
    color: #FFF; }
  .euiHeader--dark .euiHeaderLink-isActive {
    color: #3a96d7; }
  .euiHeader--dark .euiHeaderSectionItem:after {
    background: #69707D; }
  .euiHeader--dark .euiHeaderLogo:focus,
  .euiHeader--dark .euiHeaderLink:focus,
  .euiHeader--dark .euiHeaderSectionItemButton:focus {
    background: #003c66; }
  .euiHeader--dark .euiHeaderSectionItemButton__notification--badge {
    box-shadow: 0 0 0 1px #25282f; }
  .euiHeader--dark .euiHeaderSectionItemButton__notification--dot {
    stroke: #25282f; }

.euiHeaderProfile {
  padding: 16px; }

.euiHeaderLinks {
  display: -webkit-flex;
  display: flex; }

.euiHeaderLinks__list {
  white-space: nowrap;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }

.euiHeaderLinks__list--gutterXS > * {
  margin: 0 4px; }

.euiHeaderLinks__list--gutterS > * {
  margin: 0 8px; }

.euiHeaderLinks__list--gutterM > * {
  margin: 0 12px; }

.euiHeaderLinks__list--gutterL > * {
  margin: 0 24px; }

.euiHeaderLinks__mobileList .euiHeaderLink {
  display: block;
  width: 100%;
  padding: 8px; }
  .euiHeaderLinks__mobileList .euiHeaderLink > span {
    -webkit-justify-content: flex-start;
            justify-content: flex-start; }

.euiHeaderLogo {
  text-align: left;
  font-weight: 500;
  position: relative;
  height: 40px;
  line-height: 40px;
  min-width: 41px;
  padding: 0 13px 0 12px;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-align-items: center;
          align-items: center;
  vertical-align: middle;
  white-space: nowrap; }
  .euiHeaderLogo:hover {
    text-decoration: underline; }
  .euiHeaderLogo:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    text-decoration: underline;
    text-decoration-thickness: 2px !important; }
    .euiHeaderLogo:focus:focus-visible {
      outline-style: auto; }
    .euiHeaderLogo:focus:not(:focus-visible) {
      outline: none; }
  .euiHeaderLogo:focus, .euiHeaderLogo:hover {
    text-decoration: none; }

.euiHeaderLogo__text {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 22px;
  font-size: 1.57143rem;
  line-height: 2.28571rem;
  font-weight: 700;
  padding-left: 16px;
  font-weight: 300; }

@media only screen and (max-width: 574px) {
  .euiHeaderLogo {
    padding: 0 12px; }
  .euiHeaderLogo__icon.euiIcon--xLarge {
    width: 24px;
    height: 24px; }
  .euiHeaderLogo__text {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word;
    color: #1a1c21;
    font-size: 16px;
    font-size: 1.14286rem;
    line-height: 1.71429rem;
    font-weight: 700;
    font-weight: 400; } }

.euiHeaderAlert {
  min-width: 300px;
  position: relative;
  margin-bottom: 24px;
  padding: 0 8px 24px;
  border-bottom: 1px solid #D3DAE6;
  border-top: none; }
  .euiHeaderAlert .euiHeaderAlert__dismiss {
    opacity: 0;
    position: absolute;
    right: 12px;
    top: 12px;
    transition: opacity 250ms ease-in; }
  .euiHeaderAlert:hover .euiHeaderAlert__dismiss,
  .euiHeaderAlert .euiHeaderAlert__dismiss:focus {
    opacity: 1; }
  .euiHeaderAlert .euiHeaderAlert__title {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word;
    color: #1a1c21;
    font-size: 16px;
    font-size: 1.14286rem;
    line-height: 1.71429rem;
    font-weight: 700;
    margin-bottom: 8px; }
  .euiHeaderAlert .euiHeaderAlert__text {
    font-size: 14px;
    font-size: 1rem;
    line-height: 1.71429rem;
    margin-bottom: 16px; }
  .euiHeaderAlert .euiHeaderAlert__action {
    font-size: 14px;
    font-size: 1rem;
    line-height: 1.71429rem; }
  .euiHeaderAlert .euiHeaderAlert__date {
    font-size: 12px;
    font-size: 0.85714rem;
    line-height: 1.14286rem;
    color: #69707D; }

.euiHeaderSection {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }

.euiHeaderSection--grow,
.euiHeaderSection--left {
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.euiHeaderSection--dontGrow {
  -webkit-flex-grow: 0;
          flex-grow: 0; }

.euiHeaderSectionItem {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }
  .euiHeaderSectionItem:after {
    position: absolute;
    content: '';
    top: 16px;
    bottom: 0;
    background: #D3DAE6;
    left: 0; }

.euiHeaderSectionItem--borderLeft:after {
  left: 0;
  width: 1px; }

.euiHeaderSectionItem--borderRight:after {
  width: 1px;
  left: auto;
  right: 0; }

@media only screen and (max-width: 574px) {
  .euiHeaderSectionItem {
    min-width: 30px; }
  .euiHeaderSectionItem--borderLeft:after,
  .euiHeaderSectionItem--borderRight:after {
    display: none; } }

.euiHeaderSectionItemButton {
  position: relative;
  height: 40px;
  min-width: 40px;
  text-align: center;
  font-size: 0; }

.euiHeaderSectionItemButton__notification {
  position: absolute; }
  .euiHeaderSectionItemButton__notification--dot {
    top: 0;
    right: 0;
    stroke: #FFF; }
  .euiHeaderSectionItemButton__notification--badge {
    top: 9%;
    right: 9%;
    box-shadow: 0 0 0 1px #FFF; }

.euiHeaderSectionItemButton__content {
  display: inline-block; }

@media only screen and (max-width: 574px) {
  .euiHeaderSectionItemButton {
    min-width: 30px; }
  .euiHeaderSectionItemButton__notification.euiHeaderSectionItemButton__notification--dot {
    width: 16px;
    height: 16px;
    top: 9%; } }

/**
 * 1. Default to grid of 3
 */
.euiKeyPadMenu {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  width: 300px;
  max-width: 100%;
  margin-bottom: -4px;
  margin-right: -4px; }
  .euiKeyPadMenu legend {
    margin-bottom: 8px; }
  .euiKeyPadMenu > *:not(legend) {
    margin-bottom: 4px;
    margin-right: 4px; }

/**
 * 1. If this class is applied to a button, we need to override the Chrome default font.
 * 2. If it has a BetaBadge, make sure only the first letter shows
 */
.euiKeyPadMenuItem {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  /* 1 */
  display: block;
  padding: 4px;
  height: 96px;
  width: 96px;
  border: 1px solid #D3DAE6;
  border-color: transparent;
  border-radius: 6px;
  color: #343741; }
  @media screen and (prefers-reduced-motion: no-preference) {
    .euiKeyPadMenuItem {
      transition: background-color 150ms ease-in, border-color 150ms ease-in, box-shadow 150ms ease-in; } }
  .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):hover, .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus, .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus-within {
    cursor: pointer;
    text-decoration: underline;
    box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
    border-color: #D3DAE6; }
    @media screen and (prefers-reduced-motion: no-preference) {
      .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):hover .euiKeyPadMenuItem__icon, .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus .euiKeyPadMenuItem__icon, .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus-within .euiKeyPadMenuItem__icon {
        -webkit-transform: translateY(0);
                transform: translateY(0); } }
  .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus {
    cursor: pointer;
    text-decoration: underline;
    background-color: rgba(0, 119, 204, 0.1); }
  .euiKeyPadMenuItem.euiKeyPadMenuItem-isDisabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #ABB4C4; }
    .euiKeyPadMenuItem.euiKeyPadMenuItem-isDisabled .euiKeyPadMenuItem__icon {
      -webkit-filter: grayscale(100%);
              filter: grayscale(100%); }
      .euiKeyPadMenuItem.euiKeyPadMenuItem-isDisabled .euiKeyPadMenuItem__icon svg * {
        fill: #ABB4C4; }
  .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled) {
    box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
    color: #1a1c21; }
  .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected {
    border-color: #D3DAE6; }
  .euiKeyPadMenuItem:not(:hover):not(:focus):not(:focus-within):not(.euiKeyPadMenuItem-isSelected) .euiKeyPadMenuItem__checkableInput, .euiKeyPadMenuItem.euiKeyPadMenuItem-isDisabled:not(.euiKeyPadMenuItem-isSelected) .euiKeyPadMenuItem__checkableInput {
    position: absolute;
    top: auto;
    left: -10000px;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(50%);
            clip-path: inset(50%);
    overflow: hidden;
    margin: -1px; }

.euiKeyPadMenuItem__inner {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
  position: relative; }
  .euiKeyPadMenuItem__inner .euiKeyPadMenuItem__checkableInput {
    -webkit-transform: scale(0.75);
            transform: scale(0.75);
    -webkit-transform-origin: top right;
            transform-origin: top right; }
  .euiKeyPadMenuItem__inner .euiKeyPadMenuItem__checkableInput,
  .euiKeyPadMenuItem__inner .euiKeyPadMenuItem__betaBadge {
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 3; }

.euiKeyPadMenuItem__icon {
  transition: -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
  transition: transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
  transition: transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1), -webkit-transform 250ms cubic-bezier(0.34, 1.61, 0.7, 1);
  margin-bottom: 12px;
  -webkit-transform: translateY(2px);
          transform: translateY(2px); }

.euiKeyPadMenuItem__label {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center; }

.euiKeyPadMenuItem--checkable.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled), .euiKeyPadMenuItem--checkable.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled):hover, .euiKeyPadMenuItem--checkable.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled):focus, .euiKeyPadMenuItem--checkable.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled):focus-within {
  background-color: rgba(0, 119, 204, 0.1);
  color: #0071c2;
  border-color: #0071c2; }

/**
 * The List Group component provides neatly styled lists containing plain text
 * or links. The outer container can be bordered, with padding, or borderless
 * with links flush to the sides.
 */
.euiListGroup.euiListGroup-flush {
  padding: 0;
  border: none; }

.euiListGroup.euiListGroup-bordered {
  border-radius: 6px;
  border: 1px solid #D3DAE6; }

.euiListGroup-maxWidthDefault {
  max-width: 400px; }

.euiListGroup--gutterSmall {
  padding: 8px; }
  .euiListGroup--gutterSmall .euiListGroupItem:not(:first-of-type) {
    margin-top: 8px; }

.euiListGroup--gutterMedium {
  padding: 16px; }
  .euiListGroup--gutterMedium .euiListGroupItem:not(:first-of-type) {
    margin-top: 16px; }

.euiListGroupItem {
  padding: 0;
  border-radius: 6px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  transition: background-color 150ms;
  position: relative; }
  .euiListGroupItem.euiListGroupItem-isActive, .euiListGroupItem.euiListGroupItem-isClickable:hover {
    background-color: rgba(211, 218, 230, 0.25); }
  .euiListGroupItem.euiListGroupItem-isClickable:focus-within {
    background-color: rgba(211, 218, 230, 0.25); }
  .euiListGroupItem.euiListGroupItem--ghost.euiListGroupItem-isClickable:hover {
    background-color: rgba(255, 255, 255, 0.1); }
  .euiListGroupItem.euiListGroupItem--ghost.euiListGroupItem-isClickable:focus-within {
    background-color: rgba(255, 255, 255, 0.1); }
  .euiListGroupItem.euiListGroupItem-isClickable:hover .euiListGroupItem__button,
  .euiListGroupItem .euiListGroupItem__button:hover,
  .euiListGroupItem .euiListGroupItem__button:focus {
    text-decoration: underline; }
  .euiListGroupItem.euiListGroupItem-isDisabled, .euiListGroupItem.euiListGroupItem-isDisabled:hover, .euiListGroupItem.euiListGroupItem-isDisabled:focus,
  .euiListGroupItem.euiListGroupItem-isDisabled .euiListGroupItem__button:hover,
  .euiListGroupItem.euiListGroupItem-isDisabled .euiListGroupItem__button:focus {
    color: #ABB4C4;
    cursor: not-allowed;
    background-color: transparent;
    text-decoration: none; }

@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .euiListGroupItem__button:hover,
  .euiListGroupItem__button:focus {
    background-color: rgba(211, 218, 230, 0.25);
    border-radius: 6px; }
    .euiListGroupItem__button:hover .euiListGroupItem--ghost .euiListGroupItem__button:hover,
    .euiListGroupItem__button:hover .euiListGroupItem--ghost .euiListGroupItem__button:focus,
    .euiListGroupItem__button:focus .euiListGroupItem--ghost .euiListGroupItem__button:hover,
    .euiListGroupItem__button:focus .euiListGroupItem--ghost .euiListGroupItem__button:focus {
      background-color: rgba(255, 255, 255, 0.1); } }

.euiListGroupItem__text,
.euiListGroupItem__button {
  line-height: 24px;
  padding: 4px 8px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-flex: 1 0 auto;
          flex: 1 0 auto;
  text-align: left;
  max-width: 100%;
  font-weight: inherit; }
  .euiListGroupItem-hasExtraAction .euiListGroupItem__text, .euiListGroupItem-hasExtraAction
  .euiListGroupItem__button {
    max-width: calc(100% - 32px); }
  .euiListGroupItem--primary .euiListGroupItem__text:not(:disabled), .euiListGroupItem--primary
  .euiListGroupItem__button:not(:disabled) {
    color: #0071c2; }
  .euiListGroupItem--text .euiListGroupItem__text:not(:disabled), .euiListGroupItem--text
  .euiListGroupItem__button:not(:disabled) {
    color: #343741; }
  .euiListGroupItem--subdued .euiListGroupItem__text:not(:disabled), .euiListGroupItem--subdued
  .euiListGroupItem__button:not(:disabled) {
    color: #69707D; }
  .euiListGroupItem--ghost .euiListGroupItem__text:not(:disabled), .euiListGroupItem--ghost
  .euiListGroupItem__button:not(:disabled) {
    color: #FFF; }
  .euiListGroupItem-isActive:not(.euiListGroupItem--ghost) .euiListGroupItem__text, .euiListGroupItem-isActive:not(.euiListGroupItem--ghost)
  .euiListGroupItem__button {
    color: #343741; }

.euiListGroupItem__label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; }

.euiListGroupItem__extraAction {
  opacity: 0;
  margin-right: 8px;
  transition: opacity 150ms; }
  .euiListGroupItem:not(.euiListGroupItem-isDisabled):focus .euiListGroupItem__extraAction,
  .euiListGroupItem:not(.euiListGroupItem-isDisabled):hover .euiListGroupItem__extraAction, .euiListGroupItem__extraAction.euiListGroupItem__extraAction-alwaysShow, .euiListGroupItem__extraAction:focus {
    opacity: 1; }

.euiListGroupItem__icon {
  margin-right: 12px;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }

.euiListGroupItem--xSmall {
  font-size: 12px; }

.euiListGroupItem--small {
  font-size: 14px; }

.euiListGroupItem--medium {
  font-size: 14px; }

.euiListGroupItem--large {
  font-size: 22px; }

.euiListGroupItem--xSmall,
.euiListGroupItem--small {
  font-weight: 500;
  letter-spacing: 0; }

.euiListGroupItem--xSmall .euiListGroupItem__button,
.euiListGroupItem--xSmall .euiListGroupItem__text {
  line-height: 16px; }

.euiListGroupItem--large .euiListGroupItem__button,
.euiListGroupItem--large .euiListGroupItem__text {
  line-height: 32px; }

.euiListGroupItem--wrapText .euiListGroupItem__button,
.euiListGroupItem--wrapText .euiListGroupItem__text {
  width: 100%;
  word-break: break-word; }

.euiListGroupItem--wrapText .euiListGroupItem__label {
  white-space: inherit; }

.euiListGroup-flush .euiListGroupItem {
  border-radius: 0; }

.euiListGroup-bordered .euiListGroupItem:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px; }

.euiListGroup-bordered .euiListGroupItem:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px; }

.euiListGroupItem__tooltip {
  width: 100%; }

.euiPinnableListGroup__itemExtraAction svg {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg); }

.euiPinnableListGroup__itemExtraAction-pinned:not(:hover):not(:focus) {
  color: #8c919a; }

.euiMarkdownEditor {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column; }
  .euiMarkdownEditor--isPreviewing .euiMarkdownEditor__toggleContainer {
    display: none; }
  .euiMarkdownEditor--fullHeight {
    height: 100%; }
    .euiMarkdownEditor--fullHeight .euiMarkdownEditorTextArea {
      resize: none; }
    .euiMarkdownEditor--fullHeight .euiMarkdownEditorDropZone {
      height: 100%; }

.euiMarkdownEditorDropZone {
  display: -webkit-flex;
  display: flex;
  position: relative;
  -webkit-flex-direction: column;
          flex-direction: column;
  min-height: "150px"; }
  .euiMarkdownEditorDropZone__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden; }
    .euiMarkdownEditorDropZone__input:hover {
      cursor: pointer; }
    .euiMarkdownEditorDropZone__input:hover:disabled {
      cursor: not-allowed; }
  .euiMarkdownEditorDropZone--isDragging .euiMarkdownEditorFooter,
  .euiMarkdownEditorDropZone--isDragging .euiMarkdownEditorTextArea,
  .euiMarkdownEditorDropZone--isDragging .euiMarkdownEditorTextArea:focus,
  .euiMarkdownEditorDropZone--isDragging .euiMarkdownEditor:focus-within .euiMarkdownEditorTextArea {
    background-color: rgba(0, 119, 204, 0.1) !important; }
  .euiMarkdownEditorDropZone--isDragging .euiMarkdownEditorTextArea,
  .euiMarkdownEditorDropZone--isDragging .euiMarkdownEditorTextArea:focus {
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%) !important; }
  .euiMarkdownEditorDropZone--isDraggingError .euiMarkdownEditorFooter,
  .euiMarkdownEditorDropZone--isDraggingError .euiMarkdownEditorTextArea,
  .euiMarkdownEditorDropZone--isDraggingError .euiMarkdownEditorTextArea:focus,
  .euiMarkdownEditorDropZone--isDraggingError .euiMarkdownEditor:focus-within .euiMarkdownEditorTextArea {
    background-color: rgba(189, 39, 30, 0.1) !important; }
  .euiMarkdownEditorDropZone--hasError .euiMarkdownEditorTextArea,
  .euiMarkdownEditorDropZone--hasError .euiMarkdownEditorTextArea:focus {
    background-image: linear-gradient(to top, #BD271E, #BD271E 2px, transparent 2px, transparent 100%) !important; }

.euiMarkdownFormat[class*='euiTextColor-default'] .euiMarkdownFormat__blockquote {
  border-left-color: rgba(0, 0, 0, 0.15); }

.euiMarkdownFormat[class*='euiTextColor-default'] .euiHorizontalRule {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.15); }

.euiMarkdownFormat[class*='euiTextColor-default'] .euiMarkdownFormat__table {
  border-left: 1px solid rgba(0, 0, 0, 0.15); }

.euiMarkdownFormat[class*='euiTextColor-default'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-default'] .euiMarkdownFormat__table td {
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15); }
  .euiMarkdownFormat[class*='euiTextColor-default'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-default'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid rgba(0, 0, 0, 0.15); }

.euiMarkdownFormat[class*='euiTextColor-default'] .euiMarkdownFormat__table tr {
  border-top: 1px solid rgba(0, 0, 0, 0.15); }

.euiMarkdownFormat[class*='euiTextColor-subdued'] .euiMarkdownFormat__blockquote {
  border-left-color: #69707D; }

.euiMarkdownFormat[class*='euiTextColor-subdued'] .euiHorizontalRule {
  background-color: #69707D;
  color: #69707D; }

.euiMarkdownFormat[class*='euiTextColor-subdued'] .euiMarkdownFormat__table {
  border-left: 1px solid #69707D; }

.euiMarkdownFormat[class*='euiTextColor-subdued'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-subdued'] .euiMarkdownFormat__table td {
  border-top: 1px solid #69707D;
  border-bottom: 1px solid #69707D; }
  .euiMarkdownFormat[class*='euiTextColor-subdued'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-subdued'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid #69707D; }

.euiMarkdownFormat[class*='euiTextColor-subdued'] .euiMarkdownFormat__table tr {
  border-top: 1px solid #69707D; }

.euiMarkdownFormat[class*='euiTextColor-success'] .euiMarkdownFormat__blockquote {
  border-left-color: #00BFB3; }

.euiMarkdownFormat[class*='euiTextColor-success'] .euiHorizontalRule {
  background-color: #00BFB3;
  color: #00BFB3; }

.euiMarkdownFormat[class*='euiTextColor-success'] .euiMarkdownFormat__table {
  border-left: 1px solid #00BFB3; }

.euiMarkdownFormat[class*='euiTextColor-success'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-success'] .euiMarkdownFormat__table td {
  border-top: 1px solid #00BFB3;
  border-bottom: 1px solid #00BFB3; }
  .euiMarkdownFormat[class*='euiTextColor-success'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-success'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid #00BFB3; }

.euiMarkdownFormat[class*='euiTextColor-success'] .euiMarkdownFormat__table tr {
  border-top: 1px solid #00BFB3; }

.euiMarkdownFormat[class*='euiTextColor-accent'] .euiMarkdownFormat__blockquote {
  border-left-color: #F04E98; }

.euiMarkdownFormat[class*='euiTextColor-accent'] .euiHorizontalRule {
  background-color: #F04E98;
  color: #F04E98; }

.euiMarkdownFormat[class*='euiTextColor-accent'] .euiMarkdownFormat__table {
  border-left: 1px solid #F04E98; }

.euiMarkdownFormat[class*='euiTextColor-accent'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-accent'] .euiMarkdownFormat__table td {
  border-top: 1px solid #F04E98;
  border-bottom: 1px solid #F04E98; }
  .euiMarkdownFormat[class*='euiTextColor-accent'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-accent'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid #F04E98; }

.euiMarkdownFormat[class*='euiTextColor-accent'] .euiMarkdownFormat__table tr {
  border-top: 1px solid #F04E98; }

.euiMarkdownFormat[class*='euiTextColor-warning'] .euiMarkdownFormat__blockquote {
  border-left-color: #FEC514; }

.euiMarkdownFormat[class*='euiTextColor-warning'] .euiHorizontalRule {
  background-color: #FEC514;
  color: #FEC514; }

.euiMarkdownFormat[class*='euiTextColor-warning'] .euiMarkdownFormat__table {
  border-left: 1px solid #FEC514; }

.euiMarkdownFormat[class*='euiTextColor-warning'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-warning'] .euiMarkdownFormat__table td {
  border-top: 1px solid #FEC514;
  border-bottom: 1px solid #FEC514; }
  .euiMarkdownFormat[class*='euiTextColor-warning'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-warning'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid #FEC514; }

.euiMarkdownFormat[class*='euiTextColor-warning'] .euiMarkdownFormat__table tr {
  border-top: 1px solid #FEC514; }

.euiMarkdownFormat[class*='euiTextColor-danger'] .euiMarkdownFormat__blockquote {
  border-left-color: #BD271E; }

.euiMarkdownFormat[class*='euiTextColor-danger'] .euiHorizontalRule {
  background-color: #BD271E;
  color: #BD271E; }

.euiMarkdownFormat[class*='euiTextColor-danger'] .euiMarkdownFormat__table {
  border-left: 1px solid #BD271E; }

.euiMarkdownFormat[class*='euiTextColor-danger'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-danger'] .euiMarkdownFormat__table td {
  border-top: 1px solid #BD271E;
  border-bottom: 1px solid #BD271E; }
  .euiMarkdownFormat[class*='euiTextColor-danger'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-danger'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid #BD271E; }

.euiMarkdownFormat[class*='euiTextColor-danger'] .euiMarkdownFormat__table tr {
  border-top: 1px solid #BD271E; }

.euiMarkdownFormat[class*='euiTextColor-ghost'] .euiMarkdownFormat__blockquote {
  border-left-color: #FFF; }

.euiMarkdownFormat[class*='euiTextColor-ghost'] .euiHorizontalRule {
  background-color: #FFF;
  color: #FFF; }

.euiMarkdownFormat[class*='euiTextColor-ghost'] .euiMarkdownFormat__table {
  border-left: 1px solid #FFF; }

.euiMarkdownFormat[class*='euiTextColor-ghost'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-ghost'] .euiMarkdownFormat__table td {
  border-top: 1px solid #FFF;
  border-bottom: 1px solid #FFF; }
  .euiMarkdownFormat[class*='euiTextColor-ghost'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-ghost'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid #FFF; }

.euiMarkdownFormat[class*='euiTextColor-ghost'] .euiMarkdownFormat__table tr {
  border-top: 1px solid #FFF; }

.euiMarkdownFormat[class*='euiTextColor-inherit'] .euiMarkdownFormat__blockquote {
  border-left-color: currentColor; }

.euiMarkdownFormat[class*='euiTextColor-inherit'] .euiHorizontalRule {
  background-color: currentColor;
  color: currentColor; }

.euiMarkdownFormat[class*='euiTextColor-inherit'] .euiMarkdownFormat__table {
  border-left: 1px solid currentColor; }

.euiMarkdownFormat[class*='euiTextColor-inherit'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-inherit'] .euiMarkdownFormat__table td {
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor; }
  .euiMarkdownFormat[class*='euiTextColor-inherit'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-inherit'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid currentColor; }

.euiMarkdownFormat[class*='euiTextColor-inherit'] .euiMarkdownFormat__table tr {
  border-top: 1px solid currentColor; }

.euiMarkdownFormat[class*='euiTextColor-custom'] .euiMarkdownFormat__blockquote {
  border-left-color: currentColor; }

.euiMarkdownFormat[class*='euiTextColor-custom'] .euiHorizontalRule {
  background-color: currentColor;
  color: currentColor; }

.euiMarkdownFormat[class*='euiTextColor-custom'] .euiMarkdownFormat__table {
  border-left: 1px solid currentColor; }

.euiMarkdownFormat[class*='euiTextColor-custom'] .euiMarkdownFormat__table th,
.euiMarkdownFormat[class*='euiTextColor-custom'] .euiMarkdownFormat__table td {
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor; }
  .euiMarkdownFormat[class*='euiTextColor-custom'] .euiMarkdownFormat__table th:last-child,
  .euiMarkdownFormat[class*='euiTextColor-custom'] .euiMarkdownFormat__table td:last-child {
    border-right: 1px solid currentColor; }

.euiMarkdownFormat[class*='euiTextColor-custom'] .euiMarkdownFormat__table tr {
  border-top: 1px solid currentColor; }

.euiMarkdownFormat .euiMarkdownFormat__blockquote {
  border-left-style: solid; }

.euiMarkdownFormat .euiCheckbox {
  margin-bottom: 0 !important; }

.euiMarkdownFormat .euiCheckbox .euiCheckbox__input + .euiCheckbox__square {
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%); }

.euiMarkdownFormat .euiMarkdownFormat__table {
  display: block;
  width: 100%;
  overflow: auto;
  border-spacing: 0;
  border-collapse: collapse; }

.euiMarkdownEditorFooter {
  display: -webkit-inline-flex;
  display: inline-flex;
  padding: 4px;
  border: 1px solid #D3DAE6;
  -webkit-align-items: center;
          align-items: center;
  background: #fafbfd; }

.euiMarkdownEditorFooter__popover {
  width: 300px; }

.euiMarkdownEditorFooter__actions {
  -webkit-flex: 1;
          flex: 1;
  display: -webkit-inline-flex;
  display: inline-flex; }
  .euiMarkdownEditorFooter__actions > button,
  .euiMarkdownEditorFooter__actions > span {
    margin-right: 4px;
    -webkit-align-self: center;
            align-self: center; }
  .euiMarkdownEditorFooter__actions .euiMarkdownEditorFooter__uploadError {
    position: relative;
    left: -1px;
    line-height: 1;
    border-radius: 6px; }
    .euiMarkdownEditorFooter__actions .euiMarkdownEditorFooter__uploadError > span {
      padding: 0 4px; }

.euiMarkdownEditorFooter__helpButton > svg {
  width: 26px; }

.euiMarkdownEditorPreview {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  background: #FFF;
  min-height: "150px";
  overflow-y: auto;
  border: 1px solid #D3DAE6;
  padding: 12px; }
  .euiMarkdownEditorPreview::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiMarkdownEditorPreview::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiMarkdownEditorPreview::-webkit-scrollbar-corner, .euiMarkdownEditorPreview::-webkit-scrollbar-track {
    background-color: transparent; }

.euiMarkdownEditorPreview-isReadOnly .euiCheckbox__input ~ .euiCheckbox__label {
  cursor: default; }

.euiMarkdownEditorPreview-isReadOnly .euiCheckbox__input:focus:not(:checked) + .euiCheckbox__square {
  border-color: #c9cbcd; }

.euiMarkdownEditorTextArea {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  letter-spacing: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-kerning: normal;
          font-kerning: normal;
  font-size: 14px;
  color: #343741;
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  width: 100%;
  height: 100%;
  min-height: "150px";
  padding: 12px;
  border: 1px solid #D3DAE6;
  border-bottom: none;
  line-height: 1.5;
  resize: vertical;
  background-color: #fbfcfd;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  margin: 0;
  transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in; }
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .euiMarkdownEditorTextArea {
      line-height: 1em; } }
  .euiMarkdownEditorTextArea::-webkit-input-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiMarkdownEditorTextArea::-moz-placeholder {
    color: #69707D;
    opacity: 1; }
  .euiMarkdownEditorTextArea::placeholder {
    color: #69707D;
    opacity: 1; }
  .euiMarkdownEditorTextArea::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiMarkdownEditorTextArea::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiMarkdownEditorTextArea::-webkit-scrollbar-corner, .euiMarkdownEditorTextArea::-webkit-scrollbar-track {
    background-color: transparent; }
  .euiMarkdownEditorTextArea:focus,
  .euiMarkdownEditor:focus-within .euiMarkdownEditorTextArea {
    background-color: white;
    background-image: linear-gradient(to top, #07C, #07C 2px, transparent 2px, transparent 100%);
    background-size: 100% 100%; }

.euiMarkdownEditorTextArea-isReadOnly {
  background: #FFF;
  cursor: unset; }
  .euiMarkdownEditorTextArea-isReadOnly:focus,
  .euiMarkdownEditor:focus-within .euiMarkdownEditorTextArea-isReadOnly {
    background: none; }

.euiMarkdownEditorToolbar {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  background: #F5F7FA;
  border: 1px solid #D3DAE6;
  border-color: #D3DAE6;
  border-bottom: none;
  padding: 4px; }
  .euiMarkdownEditorToolbar__buttons {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
    -webkit-flex: 1;
            flex: 1;
    -webkit-align-items: center;
            align-items: center; }
    .euiMarkdownEditorToolbar__buttons > * {
      margin-right: 4px; }
  .euiMarkdownEditorToolbar__divider {
    content: '';
    height: 24px;
    display: block;
    margin-left: 4px;
    padding-right: 4px;
    border-left: 1px solid #D3DAE6; }

.euiMarkdownTooltip__icon {
  -webkit-transform: translateY(-1px);
          transform: translateY(-1px); }

/**
 * 1. Fix IE overflow issue (min-height) by adding a separate wrapper for the
 *    flex display. https://github.com/philipwalton/flexbugs#flexbug-3
 * 2. IE has trouble with min-widths on flex elements. Use the pixel value
 *    from our forms since that's usually the smallest we want them.
 */
.euiModal {
  border: 1px solid #D3DAE6;
  box-shadow: 0 2.7px 9px rgba(0, 0, 0, 0.13), 0 9.4px 24px rgba(0, 0, 0, 0.09), 0 21.8px 43px rgba(0, 0, 0, 0.08);
  display: -webkit-flex;
  display: flex;
  /* 1 */
  position: relative;
  background-color: #FFF;
  border-radius: 6px;
  z-index: 8000;
  min-width: 400px;
  -webkit-animation: euiModal 350ms cubic-bezier(0.34, 1.61, 0.7, 1);
          animation: euiModal 350ms cubic-bezier(0.34, 1.61, 0.7, 1);
  max-width: calc(100vw - 16px); }
  .euiModal:focus {
    outline: none; }
  .euiModal .euiModal__flex {
    /* 1 */
    -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
            flex-direction: column;
    max-height: 75vh;
    overflow: hidden; }

.euiModal--maxWidth-default {
  max-width: MIN(768px, calc(100vw - 16px)); }

.euiModal--confirmation {
  min-width: 400px; }

.euiModalHeader {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-align-items: center;
          align-items: center;
  padding: 24px 40px 16px 24px;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }

.euiModalHeader__title {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 27px;
  font-size: 1.92857rem;
  line-height: 2.28571rem;
  font-weight: 700; }

.euiModalBody {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column; }
  .euiModalBody .euiModalBody__overflow {
    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
    scrollbar-width: thin;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
            mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
    padding: 8px 24px; }
    .euiModalBody .euiModalBody__overflow::-webkit-scrollbar {
      width: 16px;
      height: 16px; }
    .euiModalBody .euiModalBody__overflow::-webkit-scrollbar-thumb {
      background-color: rgba(105, 112, 125, 0.5);
      background-clip: content-box;
      border-radius: 16px;
      border: 6px solid transparent; }
    .euiModalBody .euiModalBody__overflow::-webkit-scrollbar-corner, .euiModalBody .euiModalBody__overflow::-webkit-scrollbar-track {
      background-color: transparent; }
    .euiModalBody .euiModalBody__overflow:focus {
      outline: none;
      /* 1 */ }
    .euiModalBody .euiModalBody__overflow[tabindex='0']:focus:focus-visible {
      outline-style: auto;
      /* 2 */ }

.euiModalFooter {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-end;
          justify-content: flex-end;
  padding: 16px 24px 24px;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }
  .euiModalFooter > * + * {
    margin-left: 16px; }

.euiModalHeader + .euiModalFooter {
  padding-top: 8px; }

.euiModalBody:last-of-type .euiModalBody__overflow {
  padding-bottom: 24px; }

.euiModal__closeIcon {
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 3; }

@-webkit-keyframes euiModal {
  0% {
    opacity: 0;
    -webkit-transform: translateY(32px);
            transform: translateY(32px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes euiModal {
  0% {
    opacity: 0;
    -webkit-transform: translateY(32px);
            transform: translateY(32px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@media only screen and (max-width: 574px) {
  .euiModal {
    position: fixed;
    width: 100vw !important;
    max-width: none !important;
    min-width: 0 !important;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 0;
    border: none; }
    .euiModal.euiModal--confirmation {
      box-shadow: 0 -2.7px 9px rgba(0, 0, 0, 0.13), 0 -9.4px 24px rgba(0, 0, 0, 0.09), 0 -21.8px 43px rgba(0, 0, 0, 0.08);
      top: auto; }
    .euiModal .euiModal__flex {
      /* 1 */
      max-height: 100vh; }
  .euiModalHeader {
    width: 100%; }
  .euiModalFooter {
    width: 100%;
    background: #F5F7FA;
    padding: 12px 24px !important;
    -webkit-justify-content: stretch;
            justify-content: stretch; }
    .euiModalFooter > * {
      -webkit-flex: 1;
              flex: 1; }
      .euiModalFooter > * + * {
        margin-left: 0; }
  .euiModalBody {
    width: 100%; }
    .euiModalBody .euiModalBody__overflow {
      padding-bottom: 24px; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiModal {
    position: fixed;
    width: 100vw !important;
    max-width: none !important;
    min-width: 0 !important;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 0;
    border: none; }
    .euiModal.euiModal--confirmation {
      box-shadow: 0 -2.7px 9px rgba(0, 0, 0, 0.13), 0 -9.4px 24px rgba(0, 0, 0, 0.09), 0 -21.8px 43px rgba(0, 0, 0, 0.08);
      top: auto; }
    .euiModal .euiModal__flex {
      /* 1 */
      max-height: 100vh; }
  .euiModalHeader {
    width: 100%; }
  .euiModalFooter {
    width: 100%;
    background: #F5F7FA;
    padding: 12px 24px !important;
    -webkit-justify-content: stretch;
            justify-content: stretch; }
    .euiModalFooter > * {
      -webkit-flex: 1;
              flex: 1; }
      .euiModalFooter > * + * {
        margin-left: 0; }
  .euiModalBody {
    width: 100%; }
    .euiModalBody .euiModalBody__overflow {
      padding-bottom: 24px; } }

.euiNotificationEvent {
  display: -webkit-flex;
  display: flex;
  padding: 12px 0 12px 12px;
  border-bottom: 1px solid #D3DAE6; }
  .euiNotificationEvent:last-child {
    border-bottom: none; }
  .euiNotificationEvent--withReadState {
    padding: 12px 0 12px 8px; }

.euiNotificationEvent__title {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 16px;
  font-size: 1.14286rem;
  line-height: 1.71429rem;
  font-weight: 700;
  display: -webkit-flex;
  display: flex; }
  .euiNotificationEvent__title.euiLink {
    color: #0071c2; }
  .euiNotificationEvent__title--isRead {
    color: #69707D !important; }

.euiNotificationEvent__readButton {
  margin-right: 8px; }

.euiNotificationEvent__content {
  -webkit-flex: 1;
          flex: 1; }
  .euiNotificationEvent__content > * + * {
    margin-top: 8px;
    margin-right: 12px; }

.euiNotificationEventMeta {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-align-items: center;
          align-items: center;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: 4px;
  min-height: 24px; }
  .euiNotificationEventMeta--hasContextMenu {
    padding-right: 24px; }
  .euiNotificationEventMeta__contextMenuWrapper {
    position: absolute;
    top: 0;
    right: 0; }
  .euiNotificationEventMeta__section {
    margin-right: 8px; }
    .euiNotificationEventMeta__section:first-child {
      display: -webkit-flex;
      display: flex;
      -webkit-flex: 1;
              flex: 1;
      -webkit-align-items: center;
              align-items: center; }
  .euiNotificationEventMeta__icon {
    margin-right: 8px; }
  .euiNotificationEventMeta__badge {
    max-width: 100%;
    display: inline-grid; }
  .euiNotificationEventMeta__time {
    font-size: 12px;
    color: #69707D; }

.euiNotificationEventMessages {
  font-size: 14px; }
  .euiNotificationEventMessages__accordion {
    color: #69707D; }
  .euiNotificationEventMessages__accordionButton {
    color: #0071c2; }
  .euiNotificationEventMessages__accordionContent > * {
    padding-top: 8px; }

.euiNotificationEventReadButton--isRead svg {
  fill: transparent;
  stroke-width: 1px;
  stroke: #D3DAE6; }

.euiNotificationEventReadIcon {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  height: 24px;
  margin: 0 4px; }

.euiNotificationEventReadIcon--isRead svg {
  fill: transparent;
  stroke-width: 1px;
  stroke: #D3DAE6; }

.euiOverlayMask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
  padding-bottom: 10vh;
  -webkit-animation: euiAnimFadeIn 150ms ease-in;
          animation: euiAnimFadeIn 150ms ease-in;
  background: rgba(255, 255, 255, 0.8); }

.euiBody-hasOverlayMask {
  overflow: hidden; }

.euiOverlayMask--aboveHeader {
  z-index: 6000; }

.euiOverlayMask--belowHeader {
  z-index: 1000; }

.euiPagination {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  overflow-y: hidden;
  overflow-x: auto; }
  .euiPagination::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiPagination::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiPagination::-webkit-scrollbar-corner, .euiPagination::-webkit-scrollbar-track {
    background-color: transparent; }
  .euiPagination__compressedText {
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-align-items: center;
            align-items: center;
    line-height: 1 !important; }
    .euiPagination__compressedText > span {
      margin-right: 8px;
      margin-left: 8px;
      font-weight: 600; }
      .euiPagination__compressedText > span:first-of-type {
        color: #0071c2; }

.euiPagination__list {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: baseline;
          align-items: baseline; }

.euiPaginationButton {
  font-size: 14px;
  padding: 0;
  text-align: center;
  border-radius: 6px;
  outline-offset: -2px; }

.euiPaginationButton-isActive {
  font-weight: 700; }
  .euiPaginationButton-isActive.euiPaginationButton-isActive {
    color: #07C; }
    .euiPaginationButton-isActive.euiPaginationButton-isActive .euiButtonEmpty__content {
      cursor: default; }
    .euiPaginationButton-isActive.euiPaginationButton-isActive, .euiPaginationButton-isActive.euiPaginationButton-isActive:hover {
      text-decoration: underline; }

.euiPaginationArrowButton {
  outline-offset: -2px; }

.euiPaginationButton-isPlaceholder {
  -webkit-align-items: baseline;
          align-items: baseline;
  color: #ABB4C4;
  font-size: 14px;
  padding: 0 8px;
  height: 24px;
  padding-top: 6px; }

.euiSplitPanel {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  min-width: 0;
  overflow: hidden; }
  .euiSplitPanel .euiSplitPanel__inner {
    -webkit-flex-basis: 0%;
            flex-basis: 0%;
    -webkit-transform: none !important;
            transform: none !important;
    box-shadow: none !important; }

.euiSplitPanel--row {
  -webkit-flex-direction: row;
          flex-direction: row; }
  .euiSplitPanel--row.euiSplitPanel-isResponsive {
    -webkit-flex-direction: column;
            flex-direction: column; }

.euiPage {
  display: -webkit-flex;
  display: flex;
  background-color: #fafbfd;
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  max-width: 100%; }
  .euiPage--restrictWidth-default, .euiPage--restrictWidth-custom {
    margin-left: auto;
    margin-right: auto;
    width: 100%; }
  .euiPage--restrictWidth-default {
    max-width: 1200px; }
  .euiPage--grow {
    -webkit-flex-grow: 1;
            flex-grow: 1; }
  .euiPage--column {
    -webkit-flex-direction: column;
            flex-direction: column; }
  @media only screen and (max-width: 574px) {
    .euiPage {
      -webkit-flex-direction: column;
              flex-direction: column; } }
  @media only screen and (min-width: 575px) and (max-width: 767px) {
    .euiPage {
      -webkit-flex-direction: column;
              flex-direction: column; } }

.euiPage--paddingSmall {
  padding: 8px; }
  .euiPage--paddingSmall .euiPageSideBar {
    min-width: 192px;
    margin-right: 8px; }
    @media only screen and (max-width: 574px) {
      .euiPage--paddingSmall .euiPageSideBar {
        margin-right: 0;
        margin-bottom: 8px; } }
    @media only screen and (min-width: 575px) and (max-width: 767px) {
      .euiPage--paddingSmall .euiPageSideBar {
        margin-right: 0;
        margin-bottom: 8px; } }
  .euiPage--paddingSmall .euiPageBody > .euiPageHeader {
    margin-bottom: 8px; }

.euiPage--paddingMedium {
  padding: 16px; }
  .euiPage--paddingMedium .euiPageSideBar {
    min-width: 192px;
    margin-right: 16px; }
    @media only screen and (max-width: 574px) {
      .euiPage--paddingMedium .euiPageSideBar {
        margin-right: 0;
        margin-bottom: 16px; } }
    @media only screen and (min-width: 575px) and (max-width: 767px) {
      .euiPage--paddingMedium .euiPageSideBar {
        margin-right: 0;
        margin-bottom: 16px; } }
  .euiPage--paddingMedium .euiPageBody > .euiPageHeader {
    margin-bottom: 16px; }

.euiPage--paddingLarge {
  padding: 24px; }
  .euiPage--paddingLarge .euiPageSideBar {
    min-width: 192px;
    margin-right: 24px; }
    @media only screen and (max-width: 574px) {
      .euiPage--paddingLarge .euiPageSideBar {
        margin-right: 0;
        margin-bottom: 24px; } }
    @media only screen and (min-width: 575px) and (max-width: 767px) {
      .euiPage--paddingLarge .euiPageSideBar {
        margin-right: 0;
        margin-bottom: 24px; } }
  .euiPage--paddingLarge .euiPageBody > .euiPageHeader {
    margin-bottom: 24px; }

.euiPageBody {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: stretch;
          align-items: stretch;
  -webkit-flex: 1 1 100%;
          flex: 1 1 100%;
  max-width: 100%;
  min-width: 0; }
  .euiPageBody--restrictWidth-default, .euiPageBody--restrictWidth-custom {
    margin-left: auto;
    margin-right: auto;
    width: 100%; }
  .euiPageBody--restrictWidth-default {
    max-width: 1200px; }
  .euiPageBody.euiPageBody--borderRadiusNone {
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0; }

.euiPageBody--paddingSmall {
  padding: 8px; }
  .euiPageBody--paddingSmall > .euiPageHeader:not([class*='--padding']) {
    margin-bottom: 8px;
    border-bottom: 1px solid #D3DAE6; }
    .euiPageBody--paddingSmall > .euiPageHeader:not([class*='--padding']):not(.euiPageHeader--tabsAtBottom):not(.euiPageHeader--onlyTabs) {
      padding-bottom: 8px; }
  .euiPageBody--paddingSmall > .euiPageHeader.euiPageHeader--onlyTabs {
    padding-top: 0; }

.euiPageBody--paddingMedium {
  padding: 16px; }
  .euiPageBody--paddingMedium > .euiPageHeader:not([class*='--padding']) {
    margin-bottom: 16px;
    border-bottom: 1px solid #D3DAE6; }
    .euiPageBody--paddingMedium > .euiPageHeader:not([class*='--padding']):not(.euiPageHeader--tabsAtBottom):not(.euiPageHeader--onlyTabs) {
      padding-bottom: 16px; }
  .euiPageBody--paddingMedium > .euiPageHeader.euiPageHeader--onlyTabs {
    padding-top: 0; }

.euiPageBody--paddingLarge {
  padding: 24px; }
  .euiPageBody--paddingLarge > .euiPageHeader:not([class*='--padding']) {
    margin-bottom: 24px;
    border-bottom: 1px solid #D3DAE6; }
    .euiPageBody--paddingLarge > .euiPageHeader:not([class*='--padding']):not(.euiPageHeader--tabsAtBottom):not(.euiPageHeader--onlyTabs) {
      padding-bottom: 24px; }
  .euiPageBody--paddingLarge > .euiPageHeader.euiPageHeader--onlyTabs {
    padding-top: 0; }

.euiPageContent {
  width: 100%;
  min-width: 0; }
  .euiPageContent.euiPageContent--borderRadiusNone {
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0; }
  .euiPageContent.euiPageContent--verticalCenter {
    -webkit-align-self: center;
            align-self: center;
    margin-top: auto;
    margin-bottom: auto;
    -webkit-flex-grow: 0;
            flex-grow: 0; }
  .euiPageContent.euiPageContent--horizontalCenter {
    width: auto;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    -webkit-flex-grow: 0;
            flex-grow: 0; }

.euiPageContentBody--restrictWidth-default, .euiPageContentBody--restrictWidth-custom {
  margin-left: auto;
  margin-right: auto;
  width: 100%; }

.euiPageContentBody--restrictWidth-default {
  max-width: 1200px; }

.euiPageContentBody--paddingSmall {
  padding: 8px; }

.euiPageContentBody--paddingMedium {
  padding: 16px; }

.euiPageContentBody--paddingLarge {
  padding: 24px; }

.euiPageContentHeader {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-align-items: center;
          align-items: center; }
  .euiPageContent[class*='paddingSmall'] .euiPageContentHeader {
    margin-bottom: 8px; }
  .euiPageContent[class*='paddingMedium'] .euiPageContentHeader {
    margin-bottom: 16px; }
  .euiPageContent[class*='paddingLarge'] .euiPageContentHeader {
    margin-bottom: 24px; }

@media only screen and (max-width: 574px) {
  .euiPageContentHeader--responsive {
    -webkit-flex-direction: column;
            flex-direction: column;
    -webkit-align-items: flex-start;
            align-items: flex-start; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiPageContentHeader--responsive {
    -webkit-flex-direction: column;
            flex-direction: column;
    -webkit-align-items: flex-start;
            align-items: flex-start; } }

.euiPageContentHeaderSection + .euiPageContentHeaderSection {
  margin-left: 32px; }

@media only screen and (max-width: 574px) {
  .euiPageContent[class*='paddingSmall'] .euiPageContentHeader--responsive .euiPageContentHeaderSection + .euiPageContentHeaderSection {
    margin-left: 0;
    margin-top: 4px; }
  .euiPageContent[class*='paddingMedium'] .euiPageContentHeader--responsive .euiPageContentHeaderSection + .euiPageContentHeaderSection {
    margin-left: 0;
    margin-top: 8px; }
  .euiPageContent[class*='paddingLarge'] .euiPageContentHeader--responsive .euiPageContentHeaderSection + .euiPageContentHeaderSection {
    margin-left: 0;
    margin-top: 12px; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiPageContent[class*='paddingSmall'] .euiPageContentHeader--responsive .euiPageContentHeaderSection + .euiPageContentHeaderSection {
    margin-left: 0;
    margin-top: 4px; }
  .euiPageContent[class*='paddingMedium'] .euiPageContentHeader--responsive .euiPageContentHeaderSection + .euiPageContentHeaderSection {
    margin-left: 0;
    margin-top: 8px; }
  .euiPageContent[class*='paddingLarge'] .euiPageContentHeader--responsive .euiPageContentHeaderSection + .euiPageContentHeaderSection {
    margin-left: 0;
    margin-top: 12px; } }

/**
 * Note: Margin is added in _page.scss when EuiPage has paddingSize
 * 1. Prevent side bar width from changing when content width changes.
 */
.euiPageSideBar {
  min-width: 240px;
  -webkit-flex: 0 1 0%;
          flex: 0 1 0%;
  /* 1 */ }

.euiPageSideBar--paddingSmall {
  padding: 8px; }

.euiPageSideBar--paddingMedium {
  padding: 16px; }

.euiPageSideBar--paddingLarge {
  padding: 24px; }

@media only screen and (max-width: 574px) {
  .euiPageSideBar {
    width: 100%; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiPageSideBar {
    width: 100%; } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .euiPageSideBar--sticky {
    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
    scrollbar-width: thin;
    overflow-y: auto;
    -webkit-flex-grow: 1;
            flex-grow: 1;
    position: -webkit-sticky;
    position: sticky;
    max-height: 100vh;
    top: 0; }
    .euiPageSideBar--sticky::-webkit-scrollbar {
      width: 16px;
      height: 16px; }
    .euiPageSideBar--sticky::-webkit-scrollbar-thumb {
      background-color: rgba(105, 112, 125, 0.5);
      background-clip: content-box;
      border-radius: 16px;
      border: 6px solid transparent; }
    .euiPageSideBar--sticky::-webkit-scrollbar-corner, .euiPageSideBar--sticky::-webkit-scrollbar-track {
      background-color: transparent; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiPageSideBar--sticky {
    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
    scrollbar-width: thin;
    overflow-y: auto;
    -webkit-flex-grow: 1;
            flex-grow: 1;
    position: -webkit-sticky;
    position: sticky;
    max-height: 100vh;
    top: 0; }
    .euiPageSideBar--sticky::-webkit-scrollbar {
      width: 16px;
      height: 16px; }
    .euiPageSideBar--sticky::-webkit-scrollbar-thumb {
      background-color: rgba(105, 112, 125, 0.5);
      background-clip: content-box;
      border-radius: 16px;
      border: 6px solid transparent; }
    .euiPageSideBar--sticky::-webkit-scrollbar-corner, .euiPageSideBar--sticky::-webkit-scrollbar-track {
      background-color: transparent; } }

@media only screen and (min-width: 1200px) {
  .euiPageSideBar--sticky {
    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
    scrollbar-width: thin;
    overflow-y: auto;
    -webkit-flex-grow: 1;
            flex-grow: 1;
    position: -webkit-sticky;
    position: sticky;
    max-height: 100vh;
    top: 0; }
    .euiPageSideBar--sticky::-webkit-scrollbar {
      width: 16px;
      height: 16px; }
    .euiPageSideBar--sticky::-webkit-scrollbar-thumb {
      background-color: rgba(105, 112, 125, 0.5);
      background-clip: content-box;
      border-radius: 16px;
      border: 6px solid transparent; }
    .euiPageSideBar--sticky::-webkit-scrollbar-corner, .euiPageSideBar--sticky::-webkit-scrollbar-track {
      background-color: transparent; } }

/**
 * Note: Bottom margin is added in _page.scss when EuiPage has paddingSize
 *       Or it's added in _page_body.scss when EuiPageBody has paddingSize
 */
.euiPageHeader {
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-align-items: center;
          align-items: center;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }
  .euiPageHeader--restrictWidth-default, .euiPageHeader--restrictWidth-custom {
    margin-left: auto;
    margin-right: auto;
    width: 100%; }
  .euiPageHeader--restrictWidth-default {
    max-width: 1200px; }

.euiPageHeader--bottomBorder {
  border-bottom: 1px solid #D3DAE6; }
  .euiPageHeader--bottomBorder:not(.euiPageHeader--tabsAtBottom):not(.euiPageHeader--onlyTabs) {
    padding-bottom: 24px; }

.euiPageHeader--onlyTabs {
  padding-top: 8px; }
  .euiPageHeader--onlyTabs .euiTabs--xlarge .euiTab {
    line-height: 72px;
    height: 72px; }

.euiPageHeader--paddingSmall {
  padding: 8px; }
  .euiPageHeader--paddingSmall.euiPageHeader--tabsAtBottom, .euiPageHeader--paddingSmall.euiPageHeader--onlyTabs {
    padding-bottom: 0; }
  .euiPageHeader--paddingSmall.euiPageHeader--onlyTabs {
    padding-top: 8px; }
  .euiPageHeader--paddingSmall.euiPageHeader--tabsAtBottom.euiPageHeader--bottomBorder, .euiPageHeader--paddingSmall.euiPageHeader--onlyTabs.euiPageHeader--bottomBorder {
    margin-bottom: 8px; }

.euiPageHeader--paddingMedium {
  padding: 16px; }
  .euiPageHeader--paddingMedium.euiPageHeader--tabsAtBottom, .euiPageHeader--paddingMedium.euiPageHeader--onlyTabs {
    padding-bottom: 0; }
  .euiPageHeader--paddingMedium.euiPageHeader--onlyTabs {
    padding-top: 8px; }
  .euiPageHeader--paddingMedium.euiPageHeader--tabsAtBottom.euiPageHeader--bottomBorder, .euiPageHeader--paddingMedium.euiPageHeader--onlyTabs.euiPageHeader--bottomBorder {
    margin-bottom: 16px; }

.euiPageHeader--paddingLarge {
  padding: 24px; }
  .euiPageHeader--paddingLarge.euiPageHeader--tabsAtBottom, .euiPageHeader--paddingLarge.euiPageHeader--onlyTabs {
    padding-bottom: 0; }
  .euiPageHeader--paddingLarge.euiPageHeader--onlyTabs {
    padding-top: 8px; }
  .euiPageHeader--paddingLarge.euiPageHeader--tabsAtBottom.euiPageHeader--bottomBorder, .euiPageHeader--paddingLarge.euiPageHeader--onlyTabs.euiPageHeader--bottomBorder {
    margin-bottom: 24px; }

.euiPageHeader--top {
  -webkit-align-items: flex-start;
          align-items: flex-start; }

.euiPageHeader--bottom {
  -webkit-align-items: flex-end;
          align-items: flex-end; }

.euiPageHeader--stretch {
  -webkit-align-items: stretch;
          align-items: stretch; }

@media only screen and (max-width: 574px) {
  .euiPageHeader--responsive {
    -webkit-flex-direction: column;
            flex-direction: column; }
  .euiPageHeader--responsiveReverse {
    -webkit-flex-direction: column-reverse;
            flex-direction: column-reverse; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiPageHeader--responsive {
    -webkit-flex-direction: column;
            flex-direction: column; }
  .euiPageHeader--responsiveReverse {
    -webkit-flex-direction: column-reverse;
            flex-direction: column-reverse; } }

.euiPageHeader .euiPageHeaderContent {
  width: 100%; }

.euiPageHeaderContent__titleIcon {
  top: -4px;
  position: relative;
  margin-right: 16px; }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .euiPageHeaderContent__rightSideItems {
    -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiPageHeaderContent__rightSideItems {
    -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse; } }

@media only screen and (min-width: 1200px) {
  .euiPageHeaderContent__rightSideItems {
    -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse; } }

.euiPageHeaderSection:not(:first-of-type) {
  margin-left: 32px; }

@media only screen and (max-width: 574px) {
  .euiPageHeader--responsive .euiPageHeaderSection {
    width: 100%; }
    .euiPageHeader--responsive .euiPageHeaderSection:not(:first-of-type) {
      margin-left: 0;
      margin-top: 16px; }
  .euiPageHeader--responsiveReverse .euiPageHeaderSection {
    width: 100%; }
    .euiPageHeader--responsiveReverse .euiPageHeaderSection:not(:first-of-type) {
      margin-left: 0; }
    .euiPageHeader--responsiveReverse .euiPageHeaderSection:not(:last-of-type) {
      margin-top: 16px; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiPageHeader--responsive .euiPageHeaderSection {
    width: 100%; }
    .euiPageHeader--responsive .euiPageHeaderSection:not(:first-of-type) {
      margin-left: 0;
      margin-top: 16px; }
  .euiPageHeader--responsiveReverse .euiPageHeaderSection {
    width: 100%; }
    .euiPageHeader--responsiveReverse .euiPageHeaderSection:not(:first-of-type) {
      margin-left: 0; }
    .euiPageHeader--responsiveReverse .euiPageHeaderSection:not(:last-of-type) {
      margin-top: 16px; } }

.euiTreeView__wrapper .euiTreeView {
  margin: 0;
  list-style-type: none; }

.euiTreeView .euiTreeView {
  padding-left: 24px; }

.euiTreeView__node {
  max-height: 32px;
  line-height: 32px; }

.euiTreeView__node--expanded {
  max-height: 100vh; }

.euiTreeView__nodeInner {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  padding-left: 8px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: center;
          align-items: center;
  height: 32px;
  border-radius: 6px;
  width: 100%;
  -moz-text-align-last: left;
       text-align-last: left; }
  .euiTreeView__nodeInner:focus {
    outline: 2px solid currentColor;
    outline-offset: -2px; }
    .euiTreeView__nodeInner:focus:focus-visible {
      outline-style: auto; }
    .euiTreeView__nodeInner:focus:not(:focus-visible) {
      outline: none; }
  .euiTreeView__nodeInner:hover, .euiTreeView__nodeInner:active, .euiTreeView__nodeInner:focus {
    background-color: rgba(52, 55, 65, 0.1); }
  .euiTreeView__nodeInner .euiTreeView__iconPlaceholder {
    width: 32px; }

.euiTreeView__nodeLabel {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important; }

.euiTreeView__iconWrapper {
  margin-top: -2px;
  margin-right: 8px; }
  .euiTreeView__iconWrapper .euiToken {
    margin-top: 2px; }

.euiTreeView--compressed .euiTreeView__node {
  max-height: 24px;
  line-height: 24px; }
  .euiTreeView--compressed .euiTreeView__node .euiTreeView__nodeInner {
    height: 24px; }
  .euiTreeView--compressed .euiTreeView__node .euiTreeView__iconWrapper {
    margin: 0 6px 0 0; }
  .euiTreeView--compressed .euiTreeView__node .euiTreeView__nodeLabel {
    margin-top: -1px; }
  .euiTreeView--compressed .euiTreeView__node .euiTreeView__iconPlaceholder {
    width: 24px; }

.euiTreeView--compressed .euiTreeView__node--expanded {
  max-height: 100vh; }

.euiTreeView--withArrows .euiTreeView__expansionArrow {
  margin-right: 4px; }

.euiTreeView--withArrows.euiTreeView .euiTreeView__nodeInner--withArrows .euiTreeView__iconWrapper {
  margin-left: 0; }

.euiTreeView--withArrows.euiTreeView .euiTreeView__iconWrapper {
  margin-left: 20px; }

.euiTreeView--withArrows.euiTreeView--compressed .euiTreeView__nodeInner--withArrows .euiTreeView__iconWrapper {
  margin-left: 0; }

.euiTreeView--withArrows.euiTreeView--compressed .euiTreeView__iconWrapper {
  margin-left: 16px; }

.euiResizableButton {
  position: relative;
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  z-index: 1; }
  .euiResizableButton:before, .euiResizableButton:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #343741;
    transition: width 150ms ease, height 150ms ease, background-color 150ms ease, -webkit-transform 150ms ease;
    transition: width 150ms ease, height 150ms ease, transform 150ms ease, background-color 150ms ease;
    transition: width 150ms ease, height 150ms ease, transform 150ms ease, background-color 150ms ease, -webkit-transform 150ms ease; }
  .euiResizableButton.euiResizableButton--horizontal {
    cursor: col-resize;
    width: 16px;
    margin-left: -8px;
    margin-right: -8px; }
    .euiResizableButton.euiResizableButton--horizontal:before, .euiResizableButton.euiResizableButton--horizontal:after {
      width: 1px;
      height: 12px; }
    .euiResizableButton.euiResizableButton--horizontal:before {
      -webkit-transform: translate(-2px, -50%);
              transform: translate(-2px, -50%); }
    .euiResizableButton.euiResizableButton--horizontal:after {
      -webkit-transform: translate(1px, -50%);
              transform: translate(1px, -50%); }
  .euiResizableButton.euiResizableButton--vertical {
    cursor: row-resize;
    height: 16px;
    margin-top: -8px;
    margin-bottom: -8px; }
    .euiResizableButton.euiResizableButton--vertical:before, .euiResizableButton.euiResizableButton--vertical:after {
      width: 12px;
      height: 1px; }
    .euiResizableButton.euiResizableButton--vertical:before {
      -webkit-transform: translate(-50%, -2px);
              transform: translate(-50%, -2px); }
    .euiResizableButton.euiResizableButton--vertical:after {
      -webkit-transform: translate(-50%, 1px);
              transform: translate(-50%, 1px); }
  .euiResizableButton:hover:not(:disabled):before, .euiResizableButton:hover:not(:disabled):after {
    background-color: #98A2B3;
    transition-delay: 150ms; }
  .euiResizableButton:focus:not(:disabled) {
    background-color: rgba(0, 119, 204, 0.1); }
    .euiResizableButton:focus:not(:disabled):before, .euiResizableButton:focus:not(:disabled):after {
      background-color: #07C;
      transition: width 150ms ease, height 150ms ease, -webkit-transform 150ms ease;
      transition: width 150ms ease, height 150ms ease, transform 150ms ease;
      transition: width 150ms ease, height 150ms ease, transform 150ms ease, -webkit-transform 150ms ease;
      transition-delay: 75ms; }
  .euiResizableButton:hover:not(:disabled).euiResizableButton--horizontal:before, .euiResizableButton:hover:not(:disabled).euiResizableButton--horizontal:after, .euiResizableButton:focus:not(:disabled).euiResizableButton--horizontal:before, .euiResizableButton:focus:not(:disabled).euiResizableButton--horizontal:after {
    height: 100%; }
  .euiResizableButton:hover:not(:disabled).euiResizableButton--horizontal:before, .euiResizableButton:focus:not(:disabled).euiResizableButton--horizontal:before {
    -webkit-transform: translate(-1px, -50%);
            transform: translate(-1px, -50%); }
  .euiResizableButton:hover:not(:disabled).euiResizableButton--horizontal:after, .euiResizableButton:focus:not(:disabled).euiResizableButton--horizontal:after {
    -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%); }
  .euiResizableButton:hover:not(:disabled).euiResizableButton--vertical:before, .euiResizableButton:hover:not(:disabled).euiResizableButton--vertical:after, .euiResizableButton:focus:not(:disabled).euiResizableButton--vertical:before, .euiResizableButton:focus:not(:disabled).euiResizableButton--vertical:after {
    width: 100%; }
  .euiResizableButton:hover:not(:disabled).euiResizableButton--vertical:before, .euiResizableButton:focus:not(:disabled).euiResizableButton--vertical:before {
    -webkit-transform: translate(-50%, -1px);
            transform: translate(-50%, -1px); }
  .euiResizableButton:hover:not(:disabled).euiResizableButton--vertical:after, .euiResizableButton:focus:not(:disabled).euiResizableButton--vertical:after {
    -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0); }
  .euiResizableButton:disabled {
    display: none !important; }

/**
 * 1. The default position of the button should always be middle, so
 *    those position styles aren't restricted to a class
 * 2. When collpsed, the button itself is the full collapsed area and we use
 *    flex to align the icon within
 */
.euiResizableToggleButton {
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.04), 0 2.3px 2px rgba(0, 0, 0, 0.03);
  position: absolute;
  z-index: 2;
  -webkit-animation: none !important;
          animation: none !important;
  transition-property: background, box-shadow; }
  .euiResizableToggleButton:focus {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05); }
  .euiResizableToggleButton-isCollapsed {
    box-shadow: none;
    background: transparent;
    border-radius: 0; }
  .euiResizableToggleButton:not(:focus):not(:active):not(.euiResizableToggleButton-isVisible):not(.euiResizableToggleButton-isCollapsed) {
    position: absolute;
    top: auto;
    left: -10000px;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(50%);
            clip-path: inset(50%);
    overflow: hidden;
    margin: -1px; }

.euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton--after {
  right: 0;
  top: 50%;
  /* 1 */
  -webkit-transform: translate(50%, -50%);
          transform: translate(50%, -50%);
  /* 1 */ }
  .euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton--after.euiResizableToggleButton--top {
    top: 0;
    -webkit-transform: translate(50%, 16px);
            transform: translate(50%, 16px); }
  .euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton--after.euiResizableToggleButton--bottom {
    top: auto;
    bottom: 0;
    -webkit-transform: translate(50%, -16px);
            transform: translate(50%, -16px); }

.euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton--before {
  left: 0;
  top: 50%;
  /* 1 */
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  /* 1 */ }
  .euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton--before.euiResizableToggleButton--top {
    top: 0;
    -webkit-transform: translate(-50%, 16px);
            transform: translate(-50%, 16px); }
  .euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton--before.euiResizableToggleButton--bottom {
    top: auto;
    bottom: 0;
    -webkit-transform: translate(-50%, -16px);
            transform: translate(-50%, -16px); }

.euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton-isCollapsed {
  top: 0 !important;
  bottom: 0 !important;
  -webkit-transform: none !important;
          transform: none !important;
  height: 100%; }
  .euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton-isCollapsed.euiResizableToggleButton--top {
    padding-top: 16px;
    -webkit-align-items: flex-start;
            align-items: flex-start;
    /* 2 */ }
  .euiResizableToggleButton--horizontal.euiResizableToggleButton.euiResizableToggleButton-isCollapsed.euiResizableToggleButton--bottom {
    padding-bottom: 16px;
    -webkit-align-items: flex-end;
            align-items: flex-end;
    /* 2 */ }

.euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton--after {
  top: 100%;
  left: 50%;
  /* 1 */
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  /* 1 */ }
  .euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton--after.euiResizableToggleButton--left {
    left: 0;
    -webkit-transform: translate(16px, -50%);
            transform: translate(16px, -50%); }
  .euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton--after.euiResizableToggleButton--right {
    left: auto;
    right: 0;
    -webkit-transform: translate(-16px, -50%);
            transform: translate(-16px, -50%); }

.euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton--before {
  bottom: 100%;
  left: 50%;
  /* 1 */
  -webkit-transform: translate(-50%, 50%);
          transform: translate(-50%, 50%);
  /* 1 */ }
  .euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton--before.euiResizableToggleButton--left {
    left: 0;
    -webkit-transform: translate(16px, 50%);
            transform: translate(16px, 50%); }
  .euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton--before.euiResizableToggleButton--right {
    left: auto;
    right: 0;
    -webkit-transform: translate(-16px, 50%);
            transform: translate(-16px, 50%); }

.euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton-isCollapsed {
  top: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  -webkit-transform: none !important;
          transform: none !important;
  width: 100%; }
  .euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton-isCollapsed.euiResizableToggleButton--left {
    padding-left: 16px;
    -webkit-justify-content: flex-start;
            justify-content: flex-start;
    /* 2 */ }
  .euiResizableToggleButton--vertical.euiResizableToggleButton.euiResizableToggleButton-isCollapsed.euiResizableToggleButton--right {
    padding-right: 16px;
    -webkit-justify-content: flex-end;
            justify-content: flex-end;
    /* 2 */ }

.euiResizableContainer {
  display: -webkit-flex;
  display: flex;
  width: 100%; }
  .euiResizableContainer--vertical {
    -webkit-flex-direction: column;
            flex-direction: column; }

.euiResizablePanel {
  position: relative; }

.euiResizablePanel--paddingSmall {
  padding: 8px; }

.euiResizablePanel--paddingMedium {
  padding: 16px; }

.euiResizablePanel--paddingLarge {
  padding: 24px; }

.euiResizablePanel__content {
  height: 100%; }
  .euiResizablePanel__content:not([class*='plain']) {
    border-width: 0; }

.euiResizablePanel__content--scrollable {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  overflow-y: auto; }
  .euiResizablePanel__content--scrollable::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiResizablePanel__content--scrollable::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiResizablePanel__content--scrollable::-webkit-scrollbar-corner, .euiResizablePanel__content--scrollable::-webkit-scrollbar-track {
    background-color: transparent; }

.euiResizablePanel-isCollapsed {
  overflow: hidden; }
  .euiResizablePanel-isCollapsed .euiResizablePanel__content * {
    display: none; }

.euiResizableContainer--horizontal .euiResizablePanel-isCollapsed {
  min-width: 0 !important; }

.euiResizableContainer--horizontal .euiResizablePanel--collapsible.euiResizablePanel-isCollapsed {
  min-width: 24px !important; }

.euiResizableContainer--vertical .euiResizablePanel-isCollapsed {
  min-height: 0 !important; }

.euiResizableContainer--vertical .euiResizablePanel--collapsible.euiResizablePanel-isCollapsed {
  min-height: 24px !important; }

.euiSideNav__mobileToggle {
  height: auto;
  border-bottom: 1px solid #D3DAE6;
  width: 100%;
  text-align: left;
  border-radius: 0 !important;
  font-size: 16px;
  padding: 0 16px; }
  .euiSideNav__mobileToggle .euiSideNav__mobileToggleText {
    padding: 16px 0; }
  .euiSideNav__mobileToggle .euiSideNav__mobileToggleContent {
    -webkit-justify-content: space-between;
            justify-content: space-between; }

.euiSideNav__heading {
  margin-bottom: 24px; }

@media only screen and (max-width: 574px) {
  .euiSideNav__contentMobile-xs {
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding: 0 24px; }
    .euiSideNav-isOpenMobile .euiSideNav__contentMobile-xs {
      visibility: visible;
      opacity: 1;
      padding: 24px;
      max-height: 5000px;
      /* 1 */ } }
    @media only screen and (max-width: 574px) and (prefers-reduced-motion: no-preference) {
      .euiSideNav-isOpenMobile .euiSideNav__contentMobile-xs {
        transition: all 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiSideNav__contentMobile-s {
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding: 0 24px; }
    .euiSideNav-isOpenMobile .euiSideNav__contentMobile-s {
      visibility: visible;
      opacity: 1;
      padding: 24px;
      max-height: 5000px;
      /* 1 */ } }
    @media only screen and (min-width: 575px) and (max-width: 767px) and (prefers-reduced-motion: no-preference) {
      .euiSideNav-isOpenMobile .euiSideNav__contentMobile-s {
        transition: all 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .euiSideNav__contentMobile-m {
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding: 0 24px; }
    .euiSideNav-isOpenMobile .euiSideNav__contentMobile-m {
      visibility: visible;
      opacity: 1;
      padding: 24px;
      max-height: 5000px;
      /* 1 */ } }
    @media only screen and (min-width: 768px) and (max-width: 991px) and (prefers-reduced-motion: no-preference) {
      .euiSideNav-isOpenMobile .euiSideNav__contentMobile-m {
        transition: all 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiSideNav__contentMobile-l {
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding: 0 24px; }
    .euiSideNav-isOpenMobile .euiSideNav__contentMobile-l {
      visibility: visible;
      opacity: 1;
      padding: 24px;
      max-height: 5000px;
      /* 1 */ } }
    @media only screen and (min-width: 992px) and (max-width: 1199px) and (prefers-reduced-motion: no-preference) {
      .euiSideNav-isOpenMobile .euiSideNav__contentMobile-l {
        transition: all 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); } }

@media only screen and (min-width: 1200px) {
  .euiSideNav__contentMobile-xl {
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding: 0 24px; }
    .euiSideNav-isOpenMobile .euiSideNav__contentMobile-xl {
      visibility: visible;
      opacity: 1;
      padding: 24px;
      max-height: 5000px;
      /* 1 */ } }
    @media only screen and (min-width: 1200px) and (prefers-reduced-motion: no-preference) {
      .euiSideNav-isOpenMobile .euiSideNav__contentMobile-xl {
        transition: all 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); } }

/**
 * 1. Text-align defaults to center, so we have to override that.
 * 2. Color the text at the item level and then have the button inherit so overrides are easier
 * 3. Enable ellipsis overflow to work (https://css-tricks.com/flexbox-truncated-text/)
 * 4. Restrict the underline to the button __label so it doesn't affect other components that might live within
 */
.euiSideNavItemButton {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  text-align: left;
  /* 1 */
  display: block;
  width: 100%;
  padding: 2px 0;
  color: inherit;
  /* 2 */ }
  .euiSideNavItemButton.euiSideNavItemButton--isClickable:not(:disabled):hover {
    cursor: pointer; }
  .euiSideNavItemButton.euiSideNavItemButton--isClickable:not(:disabled):hover .euiSideNavItemButton__label, .euiSideNavItemButton.euiSideNavItemButton--isClickable:not(:disabled):focus .euiSideNavItemButton__label {
    text-decoration: underline;
    /* 4 */ }
  .euiSideNavItemButton.euiSideNavItemButton-isSelected {
    color: #006bb8;
    font-weight: 700; }
    .euiSideNavItemButton.euiSideNavItemButton-isSelected .euiSideNavItemButton__label {
      text-decoration: underline;
      /* 4 */ }
  .euiSideNavItemButton:disabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #a2abba; }

.euiSideNavItemButton__content {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }

.euiSideNavItemButton__icon {
  margin-right: 8px; }

.euiSideNavItemButton__labelContainer {
  min-width: 0;
  /* 3 */ }

.euiSideNavItemButton__label {
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.euiSideNavItemButton__label--truncated {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important; }

.euiSideNavItem--root {
  /**
   * 1. Create padding around focus area without indenting the item itself.
   */ }
  .euiSideNavItem--root.euiSideNavItem--rootIcon > .euiSideNavItem__items {
    margin-left: 24px; }
  .euiSideNavItem--root > .euiSideNavItemButton {
    margin-bottom: 8px;
    padding: 0;
    padding-left: 8px;
    /* 1 */
    padding-right: 8px;
    /* 1 */
    margin-left: -8px;
    /* 1 */
    width: calc(100% + 16px);
    /* 1 */ }
    .euiSideNavItem--root > .euiSideNavItemButton .euiSideNavItemButton__label {
      overflow-wrap: break-word !important;
      word-wrap: break-word !important;
      word-break: break-word;
      color: #1a1c21;
      font-size: 16px;
      font-size: 1.14286rem;
      line-height: 1.71429rem;
      font-weight: 700;
      color: inherit; }
  .euiSideNavItem--root > .euiSideNavItem__items {
    position: static;
    margin-left: 0; }
    .euiSideNavItem--root > .euiSideNavItem__items:after {
      display: none; }
  .euiSideNavItem--root + .euiSideNavItem--root {
    margin-top: 32px; }

.euiSideNavItem--trunk {
  color: #1a1c21;
  /* 2 */
  /**
   * 1. Create padding around focus area without indenting the item itself.
   */ }
  .euiSideNavItem--trunk > .euiSideNavItemButton {
    padding-left: 8px;
    /* 1 */
    padding-right: 8px;
    /* 1 */
    margin-left: -8px;
    /* 1 */
    width: calc(100% + 16px);
    /* 1 */ }
  .euiSideNavItem--trunk > .euiSideNavItem__items {
    margin-left: 8px;
    width: 100%; }

.euiSideNavItem--branch {
  /**
  * 1. Draw the vertical line to group an expanded item's child items together.
  */
  position: relative;
  color: #646a77;
  /* 2 */
  /**
   * 2. Absolutely position the horizontal tick connecting the item to the vertical line.
   */ }
  .euiSideNavItem--branch::after {
    /* 1 */
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    width: 1px;
    background: #D3DAE6;
    left: 0; }
  .euiSideNavItem--branch:last-of-type::after {
    height: 12px; }
  .euiSideNavItem--branch > .euiSideNavItemButton {
    position: relative;
    /* 2 */
    padding-left: 8px;
    padding-right: 8px;
    /* 2 */ }
    .euiSideNavItem--branch > .euiSideNavItemButton:after {
      position: absolute;
      /* 2 */
      content: '';
      top: 12px;
      left: 0;
      width: 4px;
      height: 1px;
      background: #D3DAE6; }
  .euiSideNavItem--branch > .euiSideNavItem__items {
    margin-left: 16px; }

.euiSideNavItem--emphasized {
  background: rgba(211, 218, 230, 0.3);
  color: #1a1c21;
  box-shadow: 100px 0 0 0 rgba(211, 218, 230, 0.3), -100px 0 0 0 rgba(211, 218, 230, 0.3); }
  .euiSideNavItem--emphasized > .euiSideNavItemButton {
    font-weight: 700; }
  .euiSideNavItem--emphasized .euiSideNavItem--emphasized {
    background: transparent;
    box-shadow: none; }

.euiSearchBar__searchHolder {
  min-width: 200px; }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .euiSearchBar__filtersHolder {
    max-width: calc(100% - 16px); } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiSearchBar__filtersHolder {
    max-width: calc(100% - 16px); } }

@media only screen and (min-width: 1200px) {
  .euiSearchBar__filtersHolder {
    max-width: calc(100% - 16px); } }

.euiSelectable {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column; }

.euiSelectable-fullHeight {
  height: 100%; }

.euiSelectableList:focus-within {
  outline: 2px solid currentColor; }
  .euiSelectableList:focus-within:focus-visible {
    outline-style: auto; }
  .euiSelectableList:focus-within:not(:focus-visible) {
    outline: none; }

.euiSelectableList-fullHeight {
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.euiSelectableList-bordered {
  overflow: hidden;
  border: 1px solid #D3DAE6;
  border-radius: 6px; }

.euiSelectableList__list {
  -webkit-mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
          mask-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin; }
  .euiSelectableList__list::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiSelectableList__list::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiSelectableList__list::-webkit-scrollbar-corner, .euiSelectableList__list::-webkit-scrollbar-track {
    background-color: transparent; }

.euiSelectableList__groupLabel {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 12px;
  font-size: 0.85714rem;
  line-height: 1.14286rem;
  font-weight: 700;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  border-bottom: 1px solid #eef2f7;
  padding: 4px 12px; }

.euiSelectableListItem {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  display: -webkit-inline-flex;
  display: inline-flex;
  width: 100%;
  text-align: left;
  cursor: pointer;
  overflow: hidden; }
  .euiSelectableListItem:not(:last-of-type) {
    border-bottom: 1px solid #eef2f7; }
  .euiSelectableListItem-isFocused:not([aria-disabled='true']), .euiSelectableListItem:hover:not([aria-disabled='true']) {
    color: #0071c2;
    background-color: rgba(0, 119, 204, 0.1); }
    .euiSelectableListItem-isFocused:not([aria-disabled='true']) .euiSelectableListItem__text, .euiSelectableListItem:hover:not([aria-disabled='true']) .euiSelectableListItem__text {
      text-decoration: underline; }
  .euiSelectableListItem[aria-disabled='true'] {
    color: #98A2B3;
    cursor: not-allowed; }
  .euiSelectableListItem--paddingSmall .euiSelectableListItem__content {
    padding: 4px 12px; }

.euiSelectableListItem__content {
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center; }

.euiSelectableListItem__icon,
.euiSelectableListItem__prepend {
  margin-right: 12px;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }

.euiSelectableListItem__append {
  margin-left: 12px;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }

.euiSelectableListItem__text {
  -webkit-flex-grow: 1;
          flex-grow: 1; }
  .euiSelectableListItem__text--truncate {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important; }

/**
  * 1. Prevent really long input from overflowing the container.
  */
.euiSelectableMessage {
  padding: 8px;
  text-align: center;
  word-wrap: break-word;
  /* 1 */
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: center;
          align-items: center; }

.euiSelectableMessage--bordered {
  overflow: hidden;
  border: 1px solid #D3DAE6;
  border-radius: 6px; }

.euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout {
  background-color: transparent; }
  .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout--group,
  .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout input {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3); }
  .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout:not(:focus-within) {
    color: #FFF; }
    .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout:not(:focus-within) input {
      color: inherit;
      background-color: transparent; }
      .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout:not(:focus-within) input::-webkit-input-placeholder {
        color: #bdc0c6;
        opacity: 1; }
      .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout:not(:focus-within) input::-moz-placeholder {
        color: #bdc0c6;
        opacity: 1; }
      .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout:not(:focus-within) input::placeholder {
        color: #bdc0c6;
        opacity: 1; }
    .euiHeader--dark .euiSelectableTemplateSitewide .euiFormControlLayout:not(:focus-within) .euiFormControlLayout__append {
      background-color: transparent;
      color: inherit; }

.euiSelectableTemplateSitewide__listItem .euiSelectableListItem__text {
  text-decoration: none !important; }

.euiSelectableTemplateSitewide__listItem[class*='-isFocused']:not([aria-disabled='true']) .euiSelectableTemplateSitewide__listItemTitle, .euiSelectableTemplateSitewide__listItem:hover:not([aria-disabled='true']) .euiSelectableTemplateSitewide__listItemTitle {
  text-decoration: underline; }

.euiSelectableTemplateSitewide__optionMetasList {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #69707D; }

.euiSelectableTemplateSitewide__optionMeta:not(:last-of-type)::after {
  content: '•';
  margin: 0 4px;
  color: #69707D; }

.euiSelectableTemplateSitewide__optionMeta--application {
  color: #4e779c;
  font-weight: 500; }

.euiSelectableTemplateSitewide__optionMeta--deployment {
  color: #3b7d6a;
  font-weight: 500; }

.euiSelectableTemplateSitewide__optionMeta--article {
  color: #8365a6;
  font-weight: 500; }

.euiSelectableTemplateSitewide__optionMeta--case {
  color: #bc533e;
  font-weight: 500; }

.euiSelectableTemplateSitewide__optionMeta--platform {
  color: #807234;
  font-weight: 500; }

.euiStepNumber {
  width: 32px;
  height: 32px;
  display: inline-block;
  line-height: 32px;
  border-radius: 32px;
  text-align: center;
  color: #FFF;
  background-color: #07C;
  font-size: 14px;
  font-weight: 500; }
  .euiStepNumber .euiStepNumber__icon {
    vertical-align: middle;
    position: relative;
    top: -2px; }
  .euiStepNumber--small {
    width: 24px;
    height: 24px;
    display: inline-block;
    line-height: 24px;
    border-radius: 24px;
    text-align: center;
    color: #FFF;
    background-color: #07C;
    font-size: 12px;
    font-weight: 500; }
    .euiStepNumber--small .euiStepNumber__icon {
      top: -1px; }
  .euiStepNumber--complete .euiStepNumber__icon {
    stroke: currentColor;
    stroke-width: .5px; }
  @media screen and (prefers-reduced-motion: no-preference) {
    .euiStepNumber--complete, .euiStepNumber--warning, .euiStepNumber--danger {
      -webkit-animation: euiGrow 150ms cubic-bezier(0.34, 1.61, 0.7, 1);
              animation: euiGrow 150ms cubic-bezier(0.34, 1.61, 0.7, 1); } }
  .euiStepNumber--loading {
    background: transparent; }
  .euiStepNumber--warning {
    color: #8a6a0a;
    background-color: #fff9e8; }
  .euiStepNumber--danger {
    color: #BD271E;
    background-color: #f8e9e9; }
  .euiStepNumber--disabled {
    color: #646a77;
    background-color: #f0f1f2; }
  .euiStepNumber--incomplete {
    color: #646a77;
    background-color: #f0f1f2; }

/**
 * 1. Ensure that the step number vertically aligns with the title text
 */
.euiStep:not(:last-of-type) {
  background-image: linear-gradient(to right, transparent 0, transparent 15px, #D3DAE6 15px, #D3DAE6 17px, transparent 17px, transparent 100%);
  background-repeat: no-repeat;
  background-position: left 40px; }

.euiStep--small:not(:last-of-type) {
  background-position: left -4px top 32px; }

.euiStep--small .euiStep__content {
  padding-left: 28px;
  margin-left: 12px; }

.euiStep__titleWrapper {
  display: -webkit-flex;
  display: flex; }

.euiStep__circle {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  margin-right: 16px;
  vertical-align: top;
  /* 1 */ }

.euiStep__content {
  padding: 16px 16px 32px;
  margin: 8px 0;
  padding-left: 32px;
  margin-left: 16px; }

.euiSubSteps {
  padding: 16px;
  background-color: #F5F7FA;
  margin-bottom: 16px; }
  .euiSubSteps > *:last-child {
    margin-bottom: 0; }
  .euiText .euiSubSteps ol,
  .euiSubSteps ol {
    list-style-type: lower-alpha; }

/**
 * 1. Ensure the connecting lines stays behind the number
 * 2. Make each step the same width
 * 3. Make the content of each step align to the top, even if the steps are of varying heights,
 *    e.g. due to some of their titles wrapping to multiple lines
 */
.euiStepsHorizontal {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
          align-items: stretch;
  background: rgba(245, 247, 250, 0.5); }

.euiStepHorizontal__item {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  /* 2 */
  -webkit-flex-basis: 0%;
          flex-basis: 0%;
  /* 2 */ }
  .euiStepHorizontal__item:first-of-type > .euiStepHorizontal::before,
  .euiStepHorizontal__item:last-of-type > .euiStepHorizontal::after {
    display: none; }

.euiStepHorizontal {
  padding: 24px 16px 16px;
  display: -webkit-flex;
  display: flex;
  /* 3 */
  -webkit-flex-direction: column;
          flex-direction: column;
  /* 3 */
  -webkit-align-items: center;
          align-items: center;
  /* 3 */
  -webkit-justify-content: flex-start;
          justify-content: flex-start;
  /* 3 */
  cursor: pointer;
  position: relative;
  width: 100%; }
  .euiStepHorizontal:focus:not(.euiStepHorizontal-isDisabled) .euiStepHorizontal__title, .euiStepHorizontal:hover:not(.euiStepHorizontal-isDisabled) .euiStepHorizontal__title {
    text-decoration: underline; }
  .euiStepHorizontal:focus:not(.euiStepHorizontal-isDisabled) {
    outline: none; }
    .euiStepHorizontal:focus:not(.euiStepHorizontal-isDisabled) .euiStepHorizontal__number {
      outline: 2px solid currentColor; }
      .euiStepHorizontal:focus:not(.euiStepHorizontal-isDisabled) .euiStepHorizontal__number:focus-visible {
        outline-style: auto; }
      .euiStepHorizontal:focus:not(.euiStepHorizontal-isDisabled) .euiStepHorizontal__number:not(:focus-visible) {
        outline: none; }
  .euiStepHorizontal.euiStepHorizontal-isDisabled {
    cursor: not-allowed; }
  .euiStepHorizontal::before, .euiStepHorizontal::after {
    content: '';
    position: absolute;
    width: calc(50% - 16px);
    height: 1px;
    top: 40px;
    background-color: #D3DAE6;
    z-index: 0;
    /* 1 */ }
  .euiStepHorizontal::before {
    left: 0; }
  .euiStepHorizontal::after {
    right: 0; }

.euiStepHorizontal__number {
  position: relative;
  /* 1 */
  z-index: 1;
  /* 1 */
  transition: all 150ms ease-in-out; }

.euiStepHorizontal__title {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 16px;
  font-size: 1.14286rem;
  line-height: 1.71429rem;
  font-weight: 700;
  margin-top: 8px;
  font-weight: 400;
  text-align: center; }
  .euiStepHorizontal-isDisabled .euiStepHorizontal__title {
    color: #69707D; }

.euiStepHorizontal-isComplete::before, .euiStepHorizontal-isComplete::after {
  height: 2px;
  background-color: #07C; }

.euiStepHorizontal-isSelected .euiStepHorizontal__number:not([class*='danger']):not([class*='warning']):not([class*='loading']) {
  box-shadow: 0 0.8px 0.8px rgba(20, 116, 184, 0.04), 0 2.3px 2px rgba(20, 116, 184, 0.03); }

.euiStepHorizontal-isSelected::before {
  height: 2px;
  background-color: #07C; }

@media only screen and (max-width: 574px) {
  .euiStepHorizontal {
    padding-top: 16px; }
    .euiStepHorizontal::before, .euiStepHorizontal::after {
      top: 32px; }
  .euiStepHorizontal__title {
    display: none; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiStepHorizontal {
    padding-top: 16px; }
    .euiStepHorizontal::before, .euiStepHorizontal::after {
      top: 32px; }
  .euiStepHorizontal__title {
    display: none; } }

.euiSuggestItem {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-start;
          align-items: flex-start;
  font-size: 12px;
  line-height: 16px;
  color: #343741;
  -webkit-flex: 1 1 100%;
          flex: 1 1 100%;
  max-width: 100%; }
  .euiSuggestItem--truncate .euiSuggestItem__label,
  .euiSuggestItem--truncate .euiSuggestItem__description {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important; }

button.euiSuggestItem {
  width: 100%;
  text-align: left; }
  button.euiSuggestItem:hover, button.euiSuggestItem:focus {
    cursor: pointer;
    background-color: rgba(0, 119, 204, 0.1); }
    button.euiSuggestItem:hover .euiSuggestItem__label, button.euiSuggestItem:focus .euiSuggestItem__label {
      text-decoration: underline; }

.euiSuggestItem__type--tint0 {
  background-color: #e0f1ed;
  color: #357160; }

.euiSuggestItem__type--tint1 {
  background-color: #e2ebf4;
  color: #466b8d; }

.euiSuggestItem__type--tint2 {
  background-color: #f7e2e9;
  color: #a34a68; }

.euiSuggestItem__type--tint3 {
  background-color: #ebe5f2;
  color: #765b96; }

.euiSuggestItem__type--tint4 {
  background-color: #f5ebf0;
  color: #865f74; }

.euiSuggestItem__type--tint5 {
  background-color: #f8f3e1;
  color: #7a6c31; }

.euiSuggestItem__type--tint6 {
  background-color: #f2efea;
  color: #756a56; }

.euiSuggestItem__type--tint7 {
  background-color: #f8eade;
  color: #915c2e; }

.euiSuggestItem__type--tint8 {
  background-color: #f0e3e1;
  color: #92564a; }

.euiSuggestItem__type--tint9 {
  background-color: #fbe3df;
  color: #aa4b38; }

.euiSuggestItem__type--tint10 {
  background-color: #e4e5e8;
  color: #5f6571; }

.euiSuggestItem__type {
  display: -webkit-flex;
  display: flex;
  -webkit-flex: 0 0 auto;
          flex: 0 0 auto;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: flex-start;
          align-items: flex-start;
  padding-top: 8px;
  width: 32px;
  min-height: 32px;
  -webkit-align-self: stretch;
          align-self: stretch; }

.euiSuggestItem__label,
.euiSuggestItem__description {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  display: inline-block;
  padding: 8px;
  -webkit-flex-grow: 1;
          flex-grow: 1; }

.euiSuggestItem__label {
  font-family: "Roboto Mono", Consolas, Menlo, Courier, monospace; }
  .euiSuggestItem__label.euiSuggestItem__label--width20 {
    -webkit-flex-basis: calc(20% - 16px);
            flex-basis: calc(20% - 16px);
    min-width: calc(20% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width21 {
    -webkit-flex-basis: calc(21% - 16px);
            flex-basis: calc(21% - 16px);
    min-width: calc(21% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width22 {
    -webkit-flex-basis: calc(22% - 16px);
            flex-basis: calc(22% - 16px);
    min-width: calc(22% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width23 {
    -webkit-flex-basis: calc(23% - 16px);
            flex-basis: calc(23% - 16px);
    min-width: calc(23% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width24 {
    -webkit-flex-basis: calc(24% - 16px);
            flex-basis: calc(24% - 16px);
    min-width: calc(24% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width25 {
    -webkit-flex-basis: calc(25% - 16px);
            flex-basis: calc(25% - 16px);
    min-width: calc(25% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width26 {
    -webkit-flex-basis: calc(26% - 16px);
            flex-basis: calc(26% - 16px);
    min-width: calc(26% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width27 {
    -webkit-flex-basis: calc(27% - 16px);
            flex-basis: calc(27% - 16px);
    min-width: calc(27% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width28 {
    -webkit-flex-basis: calc(28% - 16px);
            flex-basis: calc(28% - 16px);
    min-width: calc(28% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width29 {
    -webkit-flex-basis: calc(29% - 16px);
            flex-basis: calc(29% - 16px);
    min-width: calc(29% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width30 {
    -webkit-flex-basis: calc(30% - 16px);
            flex-basis: calc(30% - 16px);
    min-width: calc(30% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width31 {
    -webkit-flex-basis: calc(31% - 16px);
            flex-basis: calc(31% - 16px);
    min-width: calc(31% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width32 {
    -webkit-flex-basis: calc(32% - 16px);
            flex-basis: calc(32% - 16px);
    min-width: calc(32% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width33 {
    -webkit-flex-basis: calc(33% - 16px);
            flex-basis: calc(33% - 16px);
    min-width: calc(33% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width34 {
    -webkit-flex-basis: calc(34% - 16px);
            flex-basis: calc(34% - 16px);
    min-width: calc(34% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width35 {
    -webkit-flex-basis: calc(35% - 16px);
            flex-basis: calc(35% - 16px);
    min-width: calc(35% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width36 {
    -webkit-flex-basis: calc(36% - 16px);
            flex-basis: calc(36% - 16px);
    min-width: calc(36% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width37 {
    -webkit-flex-basis: calc(37% - 16px);
            flex-basis: calc(37% - 16px);
    min-width: calc(37% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width38 {
    -webkit-flex-basis: calc(38% - 16px);
            flex-basis: calc(38% - 16px);
    min-width: calc(38% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width39 {
    -webkit-flex-basis: calc(39% - 16px);
            flex-basis: calc(39% - 16px);
    min-width: calc(39% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width40 {
    -webkit-flex-basis: calc(40% - 16px);
            flex-basis: calc(40% - 16px);
    min-width: calc(40% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width41 {
    -webkit-flex-basis: calc(41% - 16px);
            flex-basis: calc(41% - 16px);
    min-width: calc(41% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width42 {
    -webkit-flex-basis: calc(42% - 16px);
            flex-basis: calc(42% - 16px);
    min-width: calc(42% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width43 {
    -webkit-flex-basis: calc(43% - 16px);
            flex-basis: calc(43% - 16px);
    min-width: calc(43% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width44 {
    -webkit-flex-basis: calc(44% - 16px);
            flex-basis: calc(44% - 16px);
    min-width: calc(44% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width45 {
    -webkit-flex-basis: calc(45% - 16px);
            flex-basis: calc(45% - 16px);
    min-width: calc(45% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width46 {
    -webkit-flex-basis: calc(46% - 16px);
            flex-basis: calc(46% - 16px);
    min-width: calc(46% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width47 {
    -webkit-flex-basis: calc(47% - 16px);
            flex-basis: calc(47% - 16px);
    min-width: calc(47% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width48 {
    -webkit-flex-basis: calc(48% - 16px);
            flex-basis: calc(48% - 16px);
    min-width: calc(48% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width49 {
    -webkit-flex-basis: calc(49% - 16px);
            flex-basis: calc(49% - 16px);
    min-width: calc(49% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width50 {
    -webkit-flex-basis: calc(50% - 16px);
            flex-basis: calc(50% - 16px);
    min-width: calc(50% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width51 {
    -webkit-flex-basis: calc(51% - 16px);
            flex-basis: calc(51% - 16px);
    min-width: calc(51% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width52 {
    -webkit-flex-basis: calc(52% - 16px);
            flex-basis: calc(52% - 16px);
    min-width: calc(52% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width53 {
    -webkit-flex-basis: calc(53% - 16px);
            flex-basis: calc(53% - 16px);
    min-width: calc(53% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width54 {
    -webkit-flex-basis: calc(54% - 16px);
            flex-basis: calc(54% - 16px);
    min-width: calc(54% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width55 {
    -webkit-flex-basis: calc(55% - 16px);
            flex-basis: calc(55% - 16px);
    min-width: calc(55% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width56 {
    -webkit-flex-basis: calc(56% - 16px);
            flex-basis: calc(56% - 16px);
    min-width: calc(56% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width57 {
    -webkit-flex-basis: calc(57% - 16px);
            flex-basis: calc(57% - 16px);
    min-width: calc(57% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width58 {
    -webkit-flex-basis: calc(58% - 16px);
            flex-basis: calc(58% - 16px);
    min-width: calc(58% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width59 {
    -webkit-flex-basis: calc(59% - 16px);
            flex-basis: calc(59% - 16px);
    min-width: calc(59% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width60 {
    -webkit-flex-basis: calc(60% - 16px);
            flex-basis: calc(60% - 16px);
    min-width: calc(60% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width61 {
    -webkit-flex-basis: calc(61% - 16px);
            flex-basis: calc(61% - 16px);
    min-width: calc(61% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width62 {
    -webkit-flex-basis: calc(62% - 16px);
            flex-basis: calc(62% - 16px);
    min-width: calc(62% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width63 {
    -webkit-flex-basis: calc(63% - 16px);
            flex-basis: calc(63% - 16px);
    min-width: calc(63% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width64 {
    -webkit-flex-basis: calc(64% - 16px);
            flex-basis: calc(64% - 16px);
    min-width: calc(64% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width65 {
    -webkit-flex-basis: calc(65% - 16px);
            flex-basis: calc(65% - 16px);
    min-width: calc(65% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width66 {
    -webkit-flex-basis: calc(66% - 16px);
            flex-basis: calc(66% - 16px);
    min-width: calc(66% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width67 {
    -webkit-flex-basis: calc(67% - 16px);
            flex-basis: calc(67% - 16px);
    min-width: calc(67% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width68 {
    -webkit-flex-basis: calc(68% - 16px);
            flex-basis: calc(68% - 16px);
    min-width: calc(68% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width69 {
    -webkit-flex-basis: calc(69% - 16px);
            flex-basis: calc(69% - 16px);
    min-width: calc(69% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width70 {
    -webkit-flex-basis: calc(70% - 16px);
            flex-basis: calc(70% - 16px);
    min-width: calc(70% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width71 {
    -webkit-flex-basis: calc(71% - 16px);
            flex-basis: calc(71% - 16px);
    min-width: calc(71% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width72 {
    -webkit-flex-basis: calc(72% - 16px);
            flex-basis: calc(72% - 16px);
    min-width: calc(72% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width73 {
    -webkit-flex-basis: calc(73% - 16px);
            flex-basis: calc(73% - 16px);
    min-width: calc(73% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width74 {
    -webkit-flex-basis: calc(74% - 16px);
            flex-basis: calc(74% - 16px);
    min-width: calc(74% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width75 {
    -webkit-flex-basis: calc(75% - 16px);
            flex-basis: calc(75% - 16px);
    min-width: calc(75% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width76 {
    -webkit-flex-basis: calc(76% - 16px);
            flex-basis: calc(76% - 16px);
    min-width: calc(76% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width77 {
    -webkit-flex-basis: calc(77% - 16px);
            flex-basis: calc(77% - 16px);
    min-width: calc(77% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width78 {
    -webkit-flex-basis: calc(78% - 16px);
            flex-basis: calc(78% - 16px);
    min-width: calc(78% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width79 {
    -webkit-flex-basis: calc(79% - 16px);
            flex-basis: calc(79% - 16px);
    min-width: calc(79% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width80 {
    -webkit-flex-basis: calc(80% - 16px);
            flex-basis: calc(80% - 16px);
    min-width: calc(80% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width81 {
    -webkit-flex-basis: calc(81% - 16px);
            flex-basis: calc(81% - 16px);
    min-width: calc(81% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width82 {
    -webkit-flex-basis: calc(82% - 16px);
            flex-basis: calc(82% - 16px);
    min-width: calc(82% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width83 {
    -webkit-flex-basis: calc(83% - 16px);
            flex-basis: calc(83% - 16px);
    min-width: calc(83% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width84 {
    -webkit-flex-basis: calc(84% - 16px);
            flex-basis: calc(84% - 16px);
    min-width: calc(84% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width85 {
    -webkit-flex-basis: calc(85% - 16px);
            flex-basis: calc(85% - 16px);
    min-width: calc(85% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width86 {
    -webkit-flex-basis: calc(86% - 16px);
            flex-basis: calc(86% - 16px);
    min-width: calc(86% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width87 {
    -webkit-flex-basis: calc(87% - 16px);
            flex-basis: calc(87% - 16px);
    min-width: calc(87% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width88 {
    -webkit-flex-basis: calc(88% - 16px);
            flex-basis: calc(88% - 16px);
    min-width: calc(88% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width89 {
    -webkit-flex-basis: calc(89% - 16px);
            flex-basis: calc(89% - 16px);
    min-width: calc(89% - 16px); }
  .euiSuggestItem__label.euiSuggestItem__label--width90 {
    -webkit-flex-basis: calc(90% - 16px);
            flex-basis: calc(90% - 16px);
    min-width: calc(90% - 16px); }
  .euiSuggestItem__label--expand {
    -webkit-flex-basis: auto;
            flex-basis: auto; }

.euiSuggestItem__description {
  color: #69707D;
  padding-top: 9px;
  -webkit-flex-basis: auto;
          flex-basis: auto;
  -webkit-align-self: baseline;
          align-self: baseline; }
  .euiSuggestItem__description.euiSuggestItem__description--wrap {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word;
    white-space: normal !important; }

.euiSuggestItemOption[class*='isFocused'] .euiSuggestItem__label, .euiSuggestItemOption:hover:not([aria-disabled='true']) .euiSuggestItem__label, .euiSuggestItemOption:focus .euiSuggestItem__label {
  text-decoration: underline; }

.euiSuggestInput__statusIcon {
  background-color: transparent !important; }

/**
 * NOTE: table-layout: fixed causes a bug in IE11 and Edge (see #9929). It also prevents us from
 * specifying a column width, e.g. the checkbox column.
 */
.euiTable {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-feature-settings: "calt" 1, "kern" 1, "liga" 1, "tnum" 1;
  width: 100%;
  table-layout: fixed;
  border: none;
  border-collapse: collapse;
  background-color: #FFF; }
  .euiTable.euiTable--auto {
    table-layout: auto; }

.euiTableCaption {
  position: relative; }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .euiTable--compressed .euiTableCellContent {
    font-size: 12px;
    font-size: 0.85714rem;
    line-height: 1.14286rem;
    padding: 4px; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiTable--compressed .euiTableCellContent {
    font-size: 12px;
    font-size: 0.85714rem;
    line-height: 1.14286rem;
    padding: 4px; } }

@media only screen and (min-width: 1200px) {
  .euiTable--compressed .euiTableCellContent {
    font-size: 12px;
    font-size: 0.85714rem;
    line-height: 1.14286rem;
    padding: 4px; } }

.euiTableFooterCell,
.euiTableHeaderCell {
  vertical-align: middle;
  border-top: 1px solid #D3DAE6;
  border-bottom: 1px solid #D3DAE6;
  font-weight: inherit;
  text-align: left;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 700;
  font-weight: 500;
  border: none; }
  .euiTableFooterCell .euiTableHeaderButton,
  .euiTableHeaderCell .euiTableHeaderButton {
    text-align: left;
    font-weight: 500; }
  .euiTableFooterCell .euiTableCellContent__text,
  .euiTableHeaderCell .euiTableCellContent__text {
    font-size: 12px;
    font-size: 0.85714rem;
    line-height: 1.14286rem;
    font-weight: 600; }

.euiTableHeaderButton {
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  color: inherit;
  width: 100%; }
  .euiTableHeaderButton:hover .euiTableCellContent__text, .euiTableHeaderButton:focus .euiTableCellContent__text {
    text-decoration: underline;
    color: #07C; }
  .euiTableHeaderButton:hover .euiTableSortIcon, .euiTableHeaderButton:focus .euiTableSortIcon {
    fill: #07C; }

.euiTableSortIcon {
  margin-left: 4px;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }
  .euiTableHeaderButton-isSorted .euiTableSortIcon {
    fill: #1a1c21; }

.euiTableHeaderCellCheckbox {
  vertical-align: middle;
  border-top: 1px solid #D3DAE6;
  border-bottom: 1px solid #D3DAE6;
  font-weight: inherit;
  text-align: left;
  width: 32px;
  vertical-align: middle;
  border: none; }

.euiTableRow:hover {
  background-color: #fafbfd; }

.euiTableRow.euiTableRow-isClickable:hover {
  background-color: rgba(0, 119, 204, 0.05);
  cursor: pointer; }

.euiTableRow.euiTableRow-isClickable:focus {
  background-color: rgba(0, 119, 204, 0.1); }

.euiTableRow.euiTableRow-isExpandedRow {
  background-color: #fafbfd; }
  .euiTableRow.euiTableRow-isExpandedRow.euiTableRow-isSelectable .euiTableCellContent {
    padding-left: 40px; }

.euiTableRow.euiTableRow-isSelected {
  background-color: rgba(227, 240, 249, 0.37); }
  .euiTableRow.euiTableRow-isSelected + .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell {
    background-color: rgba(227, 240, 249, 0.37); }
  .euiTableRow.euiTableRow-isSelected:hover,
  .euiTableRow.euiTableRow-isSelected:hover + .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell {
    background-color: rgba(0, 119, 204, 0.1); }

.euiTableRowCell {
  vertical-align: middle;
  border-top: 1px solid #D3DAE6;
  border-bottom: 1px solid #D3DAE6;
  font-weight: inherit;
  text-align: left;
  color: #343741; }
  .euiTableRowCell--top {
    vertical-align: top; }
  .euiTableRowCell--bottom {
    vertical-align: bottom; }
  .euiTableRowCell--baseline {
    vertical-align: baseline; }
  .euiTableRowCell.euiTableRowCell--isMobileHeader {
    display: none; }

.euiTableRowCellCheckbox {
  vertical-align: middle;
  border-top: 1px solid #D3DAE6;
  border-bottom: 1px solid #D3DAE6;
  font-weight: inherit;
  text-align: left;
  width: 32px;
  vertical-align: middle; }

.euiTableFooterCell {
  background-color: #F5F7FA; }

/**
 * 1. Vertically align all children.
 * 2. The padding on this div allows the ellipsis to show if the content is truncated. If
 *    the padding was on the cell, the ellipsis would be cropped.
 * 4. Prevent very long single words (e.g. the name of a field in a document) from overflowing
 *    the cell.
 */
.euiTableCellContent {
  overflow: hidden;
  /* 4 */
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  /* 1 */
  padding: 8px;
  /* 2 */ }

.euiTableCellContent__text {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  /* 4 */
  min-width: 0;
  text-overflow: ellipsis; }

.euiTableCellContent--alignRight {
  -webkit-justify-content: flex-end;
          justify-content: flex-end;
  text-align: right; }

.euiTableCellContent--alignCenter {
  -webkit-justify-content: center;
          justify-content: center;
  text-align: center; }

.euiTableHeaderCell,
.euiTableFooterCell,
.euiTableCellContent--truncateText {
  max-width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  word-wrap: normal !important; }
  .euiTableHeaderCell .euiTableCellContent__text,
  .euiTableFooterCell .euiTableCellContent__text,
  .euiTableCellContent--truncateText .euiTableCellContent__text {
    overflow: hidden; }

.euiTableCellContent--overflowingContent {
  overflow: visible;
  white-space: normal;
  word-break: break-all;
  word-break: break-word; }

.euiTableCellContent--showOnHover > *:not(:first-child) {
  margin-left: 8px; }

.euiTableRow-hasActions .euiTableCellContent--showOnHover .euiTableCellContent__hoverItem {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  opacity: .7;
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
  transition: opacity 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-filter 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
  transition: opacity 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), filter 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);
  transition: opacity 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), filter 250ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-filter 250ms cubic-bezier(0.694, 0.0482, 0.335, 1); }

.euiTableRow-hasActions .euiTableCellContent--showOnHover .expandedItemActions__completelyHide,
.euiTableRow-hasActions .euiTableCellContent--showOnHover .expandedItemActions__completelyHide:disabled,
.euiTableRow-hasActions .euiTableCellContent--showOnHover .expandedItemActions__completelyHide:disabled:hover,
.euiTableRow-hasActions .euiTableCellContent--showOnHover .expandedItemActions__completelyHide:disabled:focus,
.euiTableRow:hover .euiTableRow-hasActions .euiTableCellContent--showOnHover .expandedItemActions__completelyHide:disabled {
  -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
  opacity: 0; }

.euiTableRow-hasActions:hover .euiTableCellContent--showOnHover .euiTableCellContent__hoverItem:not(:disabled), .euiTableRow-hasActions:hover .euiTableCellContent--showOnHover .euiTableCellContent__hoverItem:not(:disabled):hover, .euiTableRow-hasActions:hover .euiTableCellContent--showOnHover .euiTableCellContent__hoverItem:not(:disabled):focus {
  opacity: 1;
  -webkit-filter: grayscale(0%);
          filter: grayscale(0%); }

.euiTableRow-isExpandedRow .euiTableCellContent {
  overflow: hidden;
  -webkit-animation: 250ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards growExpandedRow;
          animation: 250ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards growExpandedRow; }

@-webkit-keyframes growExpandedRow {
  0% {
    max-height: 0; }
  99% {
    max-height: 100vh; }
  100% {
    max-height: unset; } }

@keyframes growExpandedRow {
  0% {
    max-height: 0; }
  99% {
    max-height: 100vh; }
  100% {
    max-height: unset; } }

.euiTableRowCell__mobileHeader {
  display: none; }

@media only screen and (max-width: 574px) {
  .euiTableRowCell--hideForMobile {
    display: none !important; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiTableRowCell--hideForMobile {
    display: none !important; } }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .euiTableRowCell--hideForDesktop {
    display: none !important; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .euiTableRowCell--hideForDesktop {
    display: none !important; } }

@media only screen and (min-width: 1200px) {
  .euiTableRowCell--hideForDesktop {
    display: none !important; } }

@media only screen and (max-width: 574px) {
  .euiTable.euiTable--responsive thead {
    display: none; }
  .euiTable.euiTable--responsive tfoot {
    display: none; }
  .euiTable.euiTable--responsive .euiTableRowCell__mobileHeader {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    font-size: 9.625px;
    font-size: 0.6875rem;
    display: block;
    color: #69707D;
    padding: 8px;
    padding-bottom: 0;
    margin-bottom: -8px;
    min-height: 24px; }
    .euiTableRowCell:only-child .euiTable.euiTable--responsive .euiTableRowCell__mobileHeader {
      min-height: 0; }
  .euiTable.euiTable--responsive .euiTableRowCell--enlargeForMobile {
    font-size: 16px;
    font-size: 1.14286rem;
    line-height: 1.71429rem; }
  .euiTable.euiTable--responsive .euiTableRow {
    -webkit-flex-grow: 1;
            flex-grow: 1; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--flexGrowZero {
      -webkit-flex-grow: 0;
              flex-grow: 0; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--hasShadow {
      box-shadow: 0 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0 2.6px 8px -1px rgba(0, 0, 0, 0.06), 0 5.7px 12px -1px rgba(0, 0, 0, 0.05), 0 15px 15px -1px rgba(0, 0, 0, 0.04); }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--hasBorder {
      border: 1px solid #D3DAE6;
      box-shadow: none; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable {
      transition: all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable:enabled {
        display: block;
        width: 100%;
        text-align: left; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable:hover, .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable:focus {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
        -webkit-transform: translateY(-2px);
                transform: translateY(-2px);
        cursor: pointer; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--borderRadiusNone {
      border-radius: 0; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--borderRadiusMedium {
      border-radius: 4px; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--transparent {
      background-color: transparent; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--plain {
      background-color: #FFF; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--subdued {
      background-color: #fafbfd; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--accent {
      background-color: #feedf5; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--primary {
      background-color: #e6f1fa; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--success {
      background-color: #e6f9f7; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--warning {
      background-color: #fff9e8; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--danger {
      background-color: #f8e9e9; }
  .euiTable.euiTable--responsive .euiTableRow {
    box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05);
    background-color: #FFF;
    border-radius: 6px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
    padding: 8px;
    margin-bottom: 8px; }
    .euiTable.euiTable--responsive .euiTableRow:hover {
      background-color: #FFF; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable, .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions {
      background-image: linear-gradient(to right, rgba(152, 162, 179, 0.1) 0, rgba(152, 162, 179, 0.1) 1px, transparent 1px, transparent 100%);
      background-size: 40px 100%;
      background-position-x: right;
      background-repeat: no-repeat;
      padding-right: 40px;
      position: relative; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander,
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions {
      min-width: 0;
      width: 24px;
      position: absolute;
      top: 16px;
      right: 8px; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander::before,
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions::before {
        display: none; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander .euiTableCellContent,
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions .euiTableCellContent {
        -webkit-flex-direction: column;
                flex-direction: column;
        padding: 0; }
        .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander .euiTableCellContent .euiLink,
        .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions .euiTableCellContent .euiLink {
          padding: 4px; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions.euiTableRow-isExpandable .euiTableRowCell--isExpander {
      top: auto;
      bottom: 16px;
      right: 0; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelectable {
      padding-left: 36px;
      position: relative; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelectable .euiTableRowCellCheckbox {
        position: absolute;
        left: 4px;
        top: 8px; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected, .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected:hover,
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected + .euiTableRow.euiTableRow-isExpandedRow,
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected:hover + .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell {
      background-color: rgba(227, 240, 249, 0.37); }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow {
      background-image: linear-gradient(to right, rgba(152, 162, 179, 0.1) 0, rgba(152, 162, 179, 0.1) 1px, transparent 1px, transparent 100%);
      background-size: 40px 100%;
      background-position-x: right;
      background-repeat: no-repeat;
      box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05);
      margin-top: -16px;
      position: relative;
      z-index: 2;
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding-left: 8px; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow:hover {
        background-color: #FFF; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell {
        width: calc(100% - 40px); }
        .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell::before {
          display: none; }
  .euiTable.euiTable--responsive .euiTableRowCell {
    display: block;
    /* IE requires block to grow and wrap. */
    min-width: 50%;
    border: none; }
  .euiTable.euiTable--responsive .euiTableRowCellCheckbox {
    border: none; }
  .euiTable.euiTable--responsive .euiTableRow-hasActions .euiTableCellContent--showOnHover > * {
    margin-left: 0; }
  .euiTable.euiTable--responsive .euiTableRow-hasActions .euiTableCellContent--showOnHover .expandedItemActions__completelyHide {
    display: none; }
  .euiTable.euiTable--responsive .euiTableRow-hasActions .euiTableCellContent--showOnHover .euiTableCellContent__hoverItem {
    opacity: 1;
    -webkit-filter: none;
            filter: none;
    margin-left: 0;
    margin-bottom: 8px; }
  .euiTable.euiTable--responsive .euiTableCellContent--alignRight {
    -webkit-justify-content: flex-start;
            justify-content: flex-start; }
  .euiTable.euiTable--responsive .euiTableCellContent--alignCenter {
    -webkit-justify-content: flex-start;
            justify-content: flex-start; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiTable.euiTable--responsive thead {
    display: none; }
  .euiTable.euiTable--responsive tfoot {
    display: none; }
  .euiTable.euiTable--responsive .euiTableRowCell__mobileHeader {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    font-size: 9.625px;
    font-size: 0.6875rem;
    display: block;
    color: #69707D;
    padding: 8px;
    padding-bottom: 0;
    margin-bottom: -8px;
    min-height: 24px; }
    .euiTableRowCell:only-child .euiTable.euiTable--responsive .euiTableRowCell__mobileHeader {
      min-height: 0; }
  .euiTable.euiTable--responsive .euiTableRowCell--enlargeForMobile {
    font-size: 16px;
    font-size: 1.14286rem;
    line-height: 1.71429rem; }
  .euiTable.euiTable--responsive .euiTableRow {
    -webkit-flex-grow: 1;
            flex-grow: 1; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--flexGrowZero {
      -webkit-flex-grow: 0;
              flex-grow: 0; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--hasShadow {
      box-shadow: 0 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0 2.6px 8px -1px rgba(0, 0, 0, 0.06), 0 5.7px 12px -1px rgba(0, 0, 0, 0.05), 0 15px 15px -1px rgba(0, 0, 0, 0.04); }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--hasBorder {
      border: 1px solid #D3DAE6;
      box-shadow: none; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable {
      transition: all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1); }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable:enabled {
        display: block;
        width: 100%;
        text-align: left; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable:hover, .euiTable.euiTable--responsive .euiTableRow.euiTableRow--isClickable:focus {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
        -webkit-transform: translateY(-2px);
                transform: translateY(-2px);
        cursor: pointer; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--borderRadiusNone {
      border-radius: 0; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--borderRadiusMedium {
      border-radius: 4px; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--transparent {
      background-color: transparent; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--plain {
      background-color: #FFF; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--subdued {
      background-color: #fafbfd; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--accent {
      background-color: #feedf5; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--primary {
      background-color: #e6f1fa; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--success {
      background-color: #e6f9f7; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--warning {
      background-color: #fff9e8; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow--danger {
      background-color: #f8e9e9; }
  .euiTable.euiTable--responsive .euiTableRow {
    box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05);
    background-color: #FFF;
    border-radius: 6px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
    padding: 8px;
    margin-bottom: 8px; }
    .euiTable.euiTable--responsive .euiTableRow:hover {
      background-color: #FFF; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable, .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions {
      background-image: linear-gradient(to right, rgba(152, 162, 179, 0.1) 0, rgba(152, 162, 179, 0.1) 1px, transparent 1px, transparent 100%);
      background-size: 40px 100%;
      background-position-x: right;
      background-repeat: no-repeat;
      padding-right: 40px;
      position: relative; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander,
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions {
      min-width: 0;
      width: 24px;
      position: absolute;
      top: 16px;
      right: 8px; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander::before,
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions::before {
        display: none; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander .euiTableCellContent,
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions .euiTableCellContent {
        -webkit-flex-direction: column;
                flex-direction: column;
        padding: 0; }
        .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandable .euiTableRowCell--isExpander .euiTableCellContent .euiLink,
        .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions .euiTableRowCell--hasActions .euiTableCellContent .euiLink {
          padding: 4px; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-hasActions.euiTableRow-isExpandable .euiTableRowCell--isExpander {
      top: auto;
      bottom: 16px;
      right: 0; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelectable {
      padding-left: 36px;
      position: relative; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelectable .euiTableRowCellCheckbox {
        position: absolute;
        left: 4px;
        top: 8px; }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected, .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected:hover,
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected + .euiTableRow.euiTableRow-isExpandedRow,
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isSelected:hover + .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell {
      background-color: rgba(227, 240, 249, 0.37); }
    .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow {
      background-image: linear-gradient(to right, rgba(152, 162, 179, 0.1) 0, rgba(152, 162, 179, 0.1) 1px, transparent 1px, transparent 100%);
      background-size: 40px 100%;
      background-position-x: right;
      background-repeat: no-repeat;
      box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05);
      margin-top: -16px;
      position: relative;
      z-index: 2;
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding-left: 8px; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow:hover {
        background-color: #FFF; }
      .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell {
        width: calc(100% - 40px); }
        .euiTable.euiTable--responsive .euiTableRow.euiTableRow-isExpandedRow .euiTableRowCell::before {
          display: none; }
  .euiTable.euiTable--responsive .euiTableRowCell {
    display: block;
    /* IE requires block to grow and wrap. */
    min-width: 50%;
    border: none; }
  .euiTable.euiTable--responsive .euiTableRowCellCheckbox {
    border: none; }
  .euiTable.euiTable--responsive .euiTableRow-hasActions .euiTableCellContent--showOnHover > * {
    margin-left: 0; }
  .euiTable.euiTable--responsive .euiTableRow-hasActions .euiTableCellContent--showOnHover .expandedItemActions__completelyHide {
    display: none; }
  .euiTable.euiTable--responsive .euiTableRow-hasActions .euiTableCellContent--showOnHover .euiTableCellContent__hoverItem {
    opacity: 1;
    -webkit-filter: none;
            filter: none;
    margin-left: 0;
    margin-bottom: 8px; }
  .euiTable.euiTable--responsive .euiTableCellContent--alignRight {
    -webkit-justify-content: flex-start;
            justify-content: flex-start; }
  .euiTable.euiTable--responsive .euiTableCellContent--alignCenter {
    -webkit-justify-content: flex-start;
            justify-content: flex-start; } }

.euiTableHeaderMobile,
.euiTableHeaderCell--hideForDesktop {
  display: none; }

@media only screen and (max-width: 574px) {
  .euiTableHeaderMobile {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-end;
            justify-content: flex-end;
    padding: 8px 0; }
  .euiTableSortMobile {
    display: block; } }

@media only screen and (min-width: 575px) and (max-width: 767px) {
  .euiTableHeaderMobile {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-end;
            justify-content: flex-end;
    padding: 8px 0; }
  .euiTableSortMobile {
    display: block; } }

.euiTabs {
  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;
  scrollbar-width: thin;
  display: -webkit-flex;
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  -webkit-flex-shrink: 0;
          flex-shrink: 0; }
  .euiTabs::-webkit-scrollbar {
    width: 16px;
    height: 16px; }
  .euiTabs::-webkit-scrollbar-thumb {
    background-color: rgba(105, 112, 125, 0.5);
    background-clip: content-box;
    border-radius: 16px;
    border: 6px solid transparent; }
  .euiTabs::-webkit-scrollbar-corner, .euiTabs::-webkit-scrollbar-track {
    background-color: transparent; }
  .euiTabs--bottomBorder {
    box-shadow: inset 0 -1px 0 #D3DAE6; }
  .euiTabs::-webkit-scrollbar {
    height: 2px; }

.euiTab {
  color: #343741;
  padding: 12px 16px;
  cursor: pointer;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: center;
          align-items: center; }
  .euiTab .euiTab__content {
    max-width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    word-wrap: normal !important;
    font-size: 14px;
    font-size: 1rem;
    line-height: 1.71429rem;
    color: #343741;
    line-height: 1.5;
    display: block; }
  .euiTab:not(.euiTab-isDisabled):hover .euiTab__content,
  .euiTab:not(.euiTab-isDisabled):focus .euiTab__content {
    text-decoration: underline; }
  .euiTab:focus {
    background-color: rgba(0, 119, 204, 0.1);
    outline-offset: -2px; }
  .euiTab.euiTab-isSelected {
    box-shadow: inset 0 -2px 0 #0071c2; }
    .euiTab.euiTab-isSelected,
    .euiTab.euiTab-isSelected .euiTab__content {
      color: #0071c2 !important; }
  .euiTab.euiTab-isDisabled,
  .euiTab.euiTab-isDisabled .euiTab__content {
    color: #ABB4C4 !important; }
  .euiTab.euiTab-isDisabled:hover {
    cursor: not-allowed; }
  .euiTab.euiTab-isDisabled.euiTab-isSelected {
    box-shadow: inset 0 -2px 0 #ABB4C4; }
  .euiTabs--small .euiTab {
    padding: 8px; }
    .euiTabs--small .euiTab .euiTab__content {
      font-size: 14px;
      font-size: 1rem;
      line-height: 1.71429rem; }
  .euiTabs--large .euiTab {
    padding: 12px 16px; }
  .euiTabs--xlarge .euiTab {
    padding: 8px 24px; }
    .euiTabs--xlarge .euiTab .euiTab__content {
      font-size: 22px;
      font-size: 1.57143rem;
      line-height: 2.28571rem; }
  .euiTabs--expand .euiTab {
    -webkit-flex-basis: 0%;
            flex-basis: 0%;
    -webkit-flex-grow: 1;
            flex-grow: 1;
    -webkit-justify-content: center;
            justify-content: center; }

.euiTab__prepend {
  margin-right: 8px; }

.euiTab__append {
  margin-left: 8px; }

/*
 * 1. Shift arrow 1px more than half its size to account for border radius
 */
.euiToolTip {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3.6px 13px rgba(0, 0, 0, 0.07), 0 8.4px 23px rgba(0, 0, 0, 0.06), 0 23px 35px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  background-color: #404040;
  color: #FFF;
  z-index: 9000;
  max-width: 256px;
  overflow-wrap: break-word;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  padding: 12px;
  -webkit-animation: euiToolTipTop 350ms ease-out 0s forwards;
          animation: euiToolTipTop 350ms ease-out 0s forwards;
  position: absolute;
  opacity: 0;
  /* 1 */
  /* 1 */ }
  .euiToolTip .euiToolTip__arrow {
    content: '';
    position: absolute;
    -webkit-transform-origin: center;
            transform-origin: center;
    border-radius: 2px;
    background-color: #404040;
    width: 12px;
    height: 12px;
    -webkit-transform: translateY(-7px) rotateZ(45deg);
            transform: translateY(-7px) rotateZ(45deg);
    /* 1 */ }
  .euiToolTip.euiToolTip--right {
    -webkit-animation-name: euiToolTipRight;
            animation-name: euiToolTipRight; }
    .euiToolTip.euiToolTip--right .euiToolTip__arrow {
      -webkit-transform: translateX(-5px) rotateZ(45deg);
              transform: translateX(-5px) rotateZ(45deg);
      /* 1 */ }
  .euiToolTip.euiToolTip--bottom {
    -webkit-animation-name: euiToolTipBottom;
            animation-name: euiToolTipBottom; }
    .euiToolTip.euiToolTip--bottom .euiToolTip__arrow {
      -webkit-transform: translateY(-5px) rotateZ(45deg);
              transform: translateY(-5px) rotateZ(45deg);
      /* 1 */ }
  .euiToolTip.euiToolTip--left {
    -webkit-animation-name: euiToolTipLeft;
            animation-name: euiToolTipLeft; }
    .euiToolTip.euiToolTip--left .euiToolTip__arrow {
      -webkit-transform: translateX(-7px) rotateZ(45deg);
              transform: translateX(-7px) rotateZ(45deg);
      /* 1 */ }
  .euiToolTip .euiToolTip__title {
    font-weight: 700;
    border-bottom: solid 1px #595959;
    padding-bottom: 4px;
    margin-bottom: 4px; }

.euiToolTipAnchor {
  display: inline-block; }
  .euiToolTipAnchor *[disabled] {
    pointer-events: none; }
  .euiToolTipAnchor.euiToolTipAnchor--displayBlock {
    display: block; }

@-webkit-keyframes euiToolTipTop {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-16px);
            transform: translateY(-16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes euiToolTipTop {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-16px);
            transform: translateY(-16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@-webkit-keyframes euiToolTipBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(16px);
            transform: translateY(16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes euiToolTipBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(16px);
            transform: translateY(16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@-webkit-keyframes euiToolTipLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-16px);
            transform: translateX(-16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes euiToolTipLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-16px);
            transform: translateX(-16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@-webkit-keyframes euiToolTipRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(16px);
            transform: translateX(16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes euiToolTipRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(16px);
            transform: translateX(16px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

.euiTourHeader {
  border-bottom: none;
  margin-bottom: 8px !important; }
  .euiTourHeader .euiTourHeader__title {
    margin-top: 0; }

.euiTourHeader__subtitle {
  color: #69707D; }

.euiTourFooter {
  background-color: #fafbfd;
  border-radius: 0 0 6px 6px; }

.euiTour .euiTour__beacon {
  pointer-events: none;
  position: absolute;
  opacity: 0;
  transition: opacity 0s 350ms; }

.euiTour[data-popover-open='true'] .euiTour__beacon {
  opacity: 1; }

.euiTour [data-popover-arrow='right'] .euiTour__beacon {
  top: 6px;
  left: -24px; }

.euiTour [data-popover-arrow='left'] .euiTour__beacon {
  top: 6px;
  left: 12px; }

.euiTour [data-popover-arrow='top']:before {
  border-top-color: #fafbfd; }

.euiTour [data-popover-arrow='top'] .euiTour__beacon {
  top: 12px;
  left: 6px; }

.euiTour [data-popover-arrow='bottom'] .euiTour__beacon {
  top: -24px;
  left: 6px; }

.euiTourStepIndicator {
  display: inline-block; }

.euiButton,
.euiButtonIcon {
  box-shadow: none !important; }

.euiButton.euiButton-isDisabled:not(.euiButton--ghost), .euiButton.euiButton-isDisabled:not(.euiButton--ghost):hover,
.euiButtonIcon.euiButtonIcon-isDisabled:not(.euiButtonIcon--ghost),
.euiButtonIcon.euiButtonIcon-isDisabled:not(.euiButtonIcon--ghost):hover {
  background-color: rgba(171, 180, 196, 0.1);
  color: #a2abba; }

.euiButtonIcon--empty.euiButtonIcon-isDisabled:not(.euiButtonIcon--ghost), .euiButtonIcon--empty.euiButtonIcon-isDisabled:not(.euiButtonIcon--ghost):hover {
  background-color: transparent;
  color: #ABB4C4; }

.euiButton--small,
.euiButtonIcon--small,
.euiButtonIcon--xSmall {
  border-radius: 4px; }

.euiButton--primary {
  color: #0061a6;
  background-color: rgba(0, 119, 204, 0.2); }
  .euiButton--primary:not([class*='isDisabled']):hover, .euiButton--primary:not([class*='isDisabled']):focus {
    background-color: rgba(0, 119, 204, 0.2); }
  .euiButton--primary.euiButton--fill:focus {
    outline-color: #000; }
  .euiButton--primary.euiButton--fill:not([class*='isDisabled']) {
    color: #FFF; }
    .euiButton--primary.euiButton--fill:not([class*='isDisabled']), .euiButton--primary.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--primary.euiButton--fill:not([class*='isDisabled']):focus {
      background-color: #07C; }

.euiButton--accent {
  color: #a8376a;
  background-color: rgba(240, 78, 152, 0.2); }
  .euiButton--accent:not([class*='isDisabled']):hover, .euiButton--accent:not([class*='isDisabled']):focus {
    background-color: rgba(240, 78, 152, 0.2); }
  .euiButton--accent.euiButton--fill:focus {
    outline-color: #000; }
  .euiButton--accent.euiButton--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButton--accent.euiButton--fill:not([class*='isDisabled']), .euiButton--accent.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--accent.euiButton--fill:not([class*='isDisabled']):focus {
      background-color: #F04E98; }

.euiButton--success {
  color: #00726b;
  background-color: rgba(0, 191, 179, 0.2); }
  .euiButton--success:not([class*='isDisabled']):hover, .euiButton--success:not([class*='isDisabled']):focus {
    background-color: rgba(0, 191, 179, 0.2); }
  .euiButton--success.euiButton--fill:focus {
    outline-color: #000; }
  .euiButton--success.euiButton--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButton--success.euiButton--fill:not([class*='isDisabled']), .euiButton--success.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--success.euiButton--fill:not([class*='isDisabled']):focus {
      background-color: #00BFB3; }

.euiButton--warning {
  color: #83650a;
  background-color: rgba(254, 197, 20, 0.2); }
  .euiButton--warning:not([class*='isDisabled']):hover, .euiButton--warning:not([class*='isDisabled']):focus {
    background-color: rgba(254, 197, 20, 0.2); }
  .euiButton--warning.euiButton--fill:focus {
    outline-color: #000; }
  .euiButton--warning.euiButton--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButton--warning.euiButton--fill:not([class*='isDisabled']), .euiButton--warning.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--warning.euiButton--fill:not([class*='isDisabled']):focus {
      background-color: #FEC514; }

.euiButton--danger {
  color: #b4251d;
  background-color: rgba(189, 39, 30, 0.2); }
  .euiButton--danger:not([class*='isDisabled']):hover, .euiButton--danger:not([class*='isDisabled']):focus {
    background-color: rgba(189, 39, 30, 0.2); }
  .euiButton--danger.euiButton--fill:focus {
    outline-color: #000; }
  .euiButton--danger.euiButton--fill:not([class*='isDisabled']) {
    color: #FFF; }
    .euiButton--danger.euiButton--fill:not([class*='isDisabled']), .euiButton--danger.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--danger.euiButton--fill:not([class*='isDisabled']):focus {
      background-color: #BD271E; }

.euiButton--ghost {
  color: #717171;
  background-color: rgba(255, 255, 255, 0.2);
  color: #FFF; }
  .euiButton--ghost:not([class*='isDisabled']):hover, .euiButton--ghost:not([class*='isDisabled']):focus {
    background-color: rgba(255, 255, 255, 0.2); }
  .euiButton--ghost.euiButton--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButton--ghost.euiButton--fill:not([class*='isDisabled']), .euiButton--ghost.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--ghost.euiButton--fill:not([class*='isDisabled']):focus {
      background-color: #FFF; }

.euiButton--text {
  color: #5a606b;
  background-color: rgba(105, 112, 125, 0.2);
  color: #343741; }
  .euiButton--text:not([class*='isDisabled']):hover, .euiButton--text:not([class*='isDisabled']):focus {
    background-color: rgba(105, 112, 125, 0.2); }
  .euiButton--text.euiButton--fill:not([class*='isDisabled']) {
    color: #FFF; }
    .euiButton--text.euiButton--fill:not([class*='isDisabled']), .euiButton--text.euiButton--fill:not([class*='isDisabled']):hover, .euiButton--text.euiButton--fill:not([class*='isDisabled']):focus {
      background-color: #69707D; }

.euiButton.euiButton-isDisabled.euiButton--ghost, .euiButton.euiButton-isDisabled.euiButton--ghost:focus,
.euiButton.euiButton-isDisabled.euiButton--ghost.euiButton--fill,
.euiButton.euiButton-isDisabled.euiButton--ghost.euiButton--fill:focus {
  color: #69707D;
  background-color: rgba(105, 112, 125, 0.1); }

.euiButtonIcon--primary:not(.euiButtonIcon--empty) {
  color: #0061a6;
  background-color: rgba(0, 119, 204, 0.2); }
  .euiButtonIcon--primary:not(.euiButtonIcon--empty):not([class*='isDisabled']):hover, .euiButtonIcon--primary:not(.euiButtonIcon--empty):not([class*='isDisabled']):focus {
    background-color: rgba(0, 119, 204, 0.2); }
  .euiButtonIcon--primary:not(.euiButtonIcon--empty).euiButtonIcon--fill:focus {
    outline-color: #000; }
  .euiButtonIcon--primary:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']) {
    color: #FFF; }
    .euiButtonIcon--primary:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']), .euiButtonIcon--primary:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--primary:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):focus {
      background-color: #07C; }

.euiButtonIcon--accent:not(.euiButtonIcon--empty) {
  color: #a8376a;
  background-color: rgba(240, 78, 152, 0.2); }
  .euiButtonIcon--accent:not(.euiButtonIcon--empty):not([class*='isDisabled']):hover, .euiButtonIcon--accent:not(.euiButtonIcon--empty):not([class*='isDisabled']):focus {
    background-color: rgba(240, 78, 152, 0.2); }
  .euiButtonIcon--accent:not(.euiButtonIcon--empty).euiButtonIcon--fill:focus {
    outline-color: #000; }
  .euiButtonIcon--accent:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButtonIcon--accent:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']), .euiButtonIcon--accent:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--accent:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):focus {
      background-color: #F04E98; }

.euiButtonIcon--success:not(.euiButtonIcon--empty) {
  color: #00726b;
  background-color: rgba(0, 191, 179, 0.2); }
  .euiButtonIcon--success:not(.euiButtonIcon--empty):not([class*='isDisabled']):hover, .euiButtonIcon--success:not(.euiButtonIcon--empty):not([class*='isDisabled']):focus {
    background-color: rgba(0, 191, 179, 0.2); }
  .euiButtonIcon--success:not(.euiButtonIcon--empty).euiButtonIcon--fill:focus {
    outline-color: #000; }
  .euiButtonIcon--success:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButtonIcon--success:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']), .euiButtonIcon--success:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--success:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):focus {
      background-color: #00BFB3; }

.euiButtonIcon--warning:not(.euiButtonIcon--empty) {
  color: #83650a;
  background-color: rgba(254, 197, 20, 0.2); }
  .euiButtonIcon--warning:not(.euiButtonIcon--empty):not([class*='isDisabled']):hover, .euiButtonIcon--warning:not(.euiButtonIcon--empty):not([class*='isDisabled']):focus {
    background-color: rgba(254, 197, 20, 0.2); }
  .euiButtonIcon--warning:not(.euiButtonIcon--empty).euiButtonIcon--fill:focus {
    outline-color: #000; }
  .euiButtonIcon--warning:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButtonIcon--warning:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']), .euiButtonIcon--warning:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--warning:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):focus {
      background-color: #FEC514; }

.euiButtonIcon--danger:not(.euiButtonIcon--empty) {
  color: #b4251d;
  background-color: rgba(189, 39, 30, 0.2); }
  .euiButtonIcon--danger:not(.euiButtonIcon--empty):not([class*='isDisabled']):hover, .euiButtonIcon--danger:not(.euiButtonIcon--empty):not([class*='isDisabled']):focus {
    background-color: rgba(189, 39, 30, 0.2); }
  .euiButtonIcon--danger:not(.euiButtonIcon--empty).euiButtonIcon--fill:focus {
    outline-color: #000; }
  .euiButtonIcon--danger:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']) {
    color: #FFF; }
    .euiButtonIcon--danger:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']), .euiButtonIcon--danger:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--danger:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):focus {
      background-color: #BD271E; }

.euiButtonIcon--ghost:not(.euiButtonIcon--empty) {
  color: #717171;
  background-color: rgba(255, 255, 255, 0.2);
  color: #FFF; }
  .euiButtonIcon--ghost:not(.euiButtonIcon--empty):not([class*='isDisabled']):hover, .euiButtonIcon--ghost:not(.euiButtonIcon--empty):not([class*='isDisabled']):focus {
    background-color: rgba(255, 255, 255, 0.2); }
  .euiButtonIcon--ghost:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']) {
    color: #000; }
    .euiButtonIcon--ghost:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']), .euiButtonIcon--ghost:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--ghost:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):focus {
      background-color: #FFF; }

.euiButtonIcon--text:not(.euiButtonIcon--empty) {
  color: #5a606b;
  background-color: rgba(105, 112, 125, 0.2);
  color: #343741; }
  .euiButtonIcon--text:not(.euiButtonIcon--empty):not([class*='isDisabled']):hover, .euiButtonIcon--text:not(.euiButtonIcon--empty):not([class*='isDisabled']):focus {
    background-color: rgba(105, 112, 125, 0.2); }
  .euiButtonIcon--text:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']) {
    color: #FFF; }
    .euiButtonIcon--text:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']), .euiButtonIcon--text:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):hover, .euiButtonIcon--text:not(.euiButtonIcon--empty).euiButtonIcon--fill:not([class*='isDisabled']):focus {
      background-color: #69707D; }

.euiButtonIcon:not(.euiButtonIcon--empty).euiButtonIcon-isDisabled.euiButtonIcon--ghost, .euiButtonIcon:not(.euiButtonIcon--empty).euiButtonIcon-isDisabled.euiButtonIcon--ghost:focus,
.euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--ghost.euiButtonIcon--fill,
.euiButtonIcon.euiButtonIcon-isDisabled.euiButtonIcon--ghost.euiButtonIcon--fill:focus {
  color: #69707D;
  background-color: rgba(105, 112, 125, 0.1); }

.euiButtonEmpty {
  border-radius: 6px; }
  .euiButtonEmpty.euiButtonEmpty--small, .euiButtonEmpty.euiButtonEmpty--xSmall {
    border-radius: 4.002px; }
  .euiButtonEmpty.euiButtonEmpty--xSmall {
    font-size: 12px; }

.euiButtonEmpty--primary:enabled:focus {
  background-color: rgba(0, 119, 204, 0.1); }

.euiButtonEmpty--accent:enabled:focus {
  background-color: rgba(240, 78, 152, 0.1); }

.euiButtonEmpty--success:enabled:focus {
  background-color: rgba(0, 191, 179, 0.1); }

.euiButtonEmpty--warning:enabled:focus {
  background-color: rgba(254, 197, 20, 0.1); }

.euiButtonEmpty--danger:enabled:focus {
  background-color: rgba(189, 39, 30, 0.1); }

.euiButtonEmpty--ghost:enabled:focus {
  background-color: rgba(255, 255, 255, 0.1); }

.euiButtonEmpty--text:enabled:focus {
  background-color: rgba(105, 112, 125, 0.1); }

.euiButtonGroup__buttons {
  box-shadow: none !important; }

.euiButtonGroup--medium .euiButtonGroupButton,
.euiButtonGroup--small .euiButtonGroupButton {
  border: none !important;
  border-radius: 0 !important;
  font-weight: 500; }
  .euiButtonGroup--medium .euiButtonGroupButton:focus, .euiButtonGroup--medium .euiButtonGroupButton:focus-within,
  .euiButtonGroup--small .euiButtonGroupButton:focus,
  .euiButtonGroup--small .euiButtonGroupButton:focus-within {
    outline-style: solid;
    outline-color: #000;
    outline-offset: -2px; }
    .euiButtonGroup--medium .euiButtonGroupButton:focus:focus-visible, .euiButtonGroup--medium .euiButtonGroupButton:focus-within:focus-visible,
    .euiButtonGroup--small .euiButtonGroupButton:focus:focus-visible,
    .euiButtonGroup--small .euiButtonGroupButton:focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--medium .euiButtonGroupButton:focus:not(:focus-visible),
  .euiButtonGroup--small .euiButtonGroupButton:focus:not(:focus-visible) {
    outline: none; }

.euiButtonGroup--medium .euiButtonGroupButton-isDisabled:not(.euiButtonGroupButton--ghost):not(.euiButtonGroupButton-isSelected),
.euiButtonGroup--small .euiButtonGroupButton-isDisabled:not(.euiButtonGroupButton--ghost):not(.euiButtonGroupButton-isSelected) {
  background-color: rgba(171, 180, 196, 0.3);
  color: #9aa2b1; }

.euiButtonGroup--medium .euiButtonGroupButton--primary,
.euiButtonGroup--small .euiButtonGroupButton--primary {
  color: #0061a6;
  background-color: rgba(0, 119, 204, 0.2); }
  .euiButtonGroup--medium .euiButtonGroupButton--primary:not([class*='isDisabled']):hover, .euiButtonGroup--medium .euiButtonGroupButton--primary:not([class*='isDisabled']):focus,
  .euiButtonGroup--small .euiButtonGroupButton--primary:not([class*='isDisabled']):hover,
  .euiButtonGroup--small .euiButtonGroupButton--primary:not([class*='isDisabled']):focus {
    background-color: rgba(0, 119, 204, 0.2); }

.euiButtonGroup--medium .euiButtonGroupButton--accent,
.euiButtonGroup--small .euiButtonGroupButton--accent {
  color: #a8376a;
  background-color: rgba(240, 78, 152, 0.2); }
  .euiButtonGroup--medium .euiButtonGroupButton--accent:not([class*='isDisabled']):hover, .euiButtonGroup--medium .euiButtonGroupButton--accent:not([class*='isDisabled']):focus,
  .euiButtonGroup--small .euiButtonGroupButton--accent:not([class*='isDisabled']):hover,
  .euiButtonGroup--small .euiButtonGroupButton--accent:not([class*='isDisabled']):focus {
    background-color: rgba(240, 78, 152, 0.2); }

.euiButtonGroup--medium .euiButtonGroupButton--success,
.euiButtonGroup--small .euiButtonGroupButton--success {
  color: #00726b;
  background-color: rgba(0, 191, 179, 0.2); }
  .euiButtonGroup--medium .euiButtonGroupButton--success:not([class*='isDisabled']):hover, .euiButtonGroup--medium .euiButtonGroupButton--success:not([class*='isDisabled']):focus,
  .euiButtonGroup--small .euiButtonGroupButton--success:not([class*='isDisabled']):hover,
  .euiButtonGroup--small .euiButtonGroupButton--success:not([class*='isDisabled']):focus {
    background-color: rgba(0, 191, 179, 0.2); }

.euiButtonGroup--medium .euiButtonGroupButton--warning,
.euiButtonGroup--small .euiButtonGroupButton--warning {
  color: #83650a;
  background-color: rgba(254, 197, 20, 0.2); }
  .euiButtonGroup--medium .euiButtonGroupButton--warning:not([class*='isDisabled']):hover, .euiButtonGroup--medium .euiButtonGroupButton--warning:not([class*='isDisabled']):focus,
  .euiButtonGroup--small .euiButtonGroupButton--warning:not([class*='isDisabled']):hover,
  .euiButtonGroup--small .euiButtonGroupButton--warning:not([class*='isDisabled']):focus {
    background-color: rgba(254, 197, 20, 0.2); }

.euiButtonGroup--medium .euiButtonGroupButton--danger,
.euiButtonGroup--small .euiButtonGroupButton--danger {
  color: #b4251d;
  background-color: rgba(189, 39, 30, 0.2); }
  .euiButtonGroup--medium .euiButtonGroupButton--danger:not([class*='isDisabled']):hover, .euiButtonGroup--medium .euiButtonGroupButton--danger:not([class*='isDisabled']):focus,
  .euiButtonGroup--small .euiButtonGroupButton--danger:not([class*='isDisabled']):hover,
  .euiButtonGroup--small .euiButtonGroupButton--danger:not([class*='isDisabled']):focus {
    background-color: rgba(189, 39, 30, 0.2); }

.euiButtonGroup--medium .euiButtonGroupButton--ghost,
.euiButtonGroup--small .euiButtonGroupButton--ghost {
  color: #717171;
  background-color: rgba(255, 255, 255, 0.2);
  color: #FFF; }
  .euiButtonGroup--medium .euiButtonGroupButton--ghost:not([class*='isDisabled']):hover, .euiButtonGroup--medium .euiButtonGroupButton--ghost:not([class*='isDisabled']):focus,
  .euiButtonGroup--small .euiButtonGroupButton--ghost:not([class*='isDisabled']):hover,
  .euiButtonGroup--small .euiButtonGroupButton--ghost:not([class*='isDisabled']):focus {
    background-color: rgba(255, 255, 255, 0.2); }

.euiButtonGroup--medium .euiButtonGroupButton--text,
.euiButtonGroup--small .euiButtonGroupButton--text {
  color: #5a606b;
  background-color: rgba(105, 112, 125, 0.2); }
  .euiButtonGroup--medium .euiButtonGroupButton--text:not([class*='isDisabled']):hover, .euiButtonGroup--medium .euiButtonGroupButton--text:not([class*='isDisabled']):focus,
  .euiButtonGroup--small .euiButtonGroupButton--text:not([class*='isDisabled']):hover,
  .euiButtonGroup--small .euiButtonGroupButton--text:not([class*='isDisabled']):focus {
    background-color: rgba(105, 112, 125, 0.2); }

.euiButtonGroup--medium .euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:not(.euiButtonGroupButton-isSelected), .euiButtonGroup--medium .euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:not(.euiButtonGroupButton-isSelected):hover, .euiButtonGroup--medium .euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:not(.euiButtonGroupButton-isSelected):focus,
.euiButtonGroup--small .euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:not(.euiButtonGroupButton-isSelected),
.euiButtonGroup--small .euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:not(.euiButtonGroupButton-isSelected):hover,
.euiButtonGroup--small .euiButtonGroupButton-isDisabled.euiButtonGroupButton--ghost:not(.euiButtonGroupButton-isSelected):focus {
  background-color: rgba(105, 112, 125, 0.3); }

.euiButtonGroup--small .euiButtonGroup__buttons {
  border-radius: 4px; }

.euiButtonGroup--compressed .euiButtonGroupButton {
  border-radius: 5px; }
  .euiButtonGroup--compressed .euiButtonGroupButton--primary:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton--primary:not([class*='isDisabled']):focus-within {
    outline-color: #07C; }
    .euiButtonGroup--compressed .euiButtonGroupButton--primary:not([class*='isDisabled']):focus:focus-visible, .euiButtonGroup--compressed .euiButtonGroupButton--primary:not([class*='isDisabled']):focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--compressed .euiButtonGroupButton--primary:not([class*='isDisabled']):focus:not(:focus-visible) {
    outline: none; }
  .euiButtonGroup--compressed .euiButtonGroupButton--accent:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton--accent:not([class*='isDisabled']):focus-within {
    outline-color: #F04E98; }
    .euiButtonGroup--compressed .euiButtonGroupButton--accent:not([class*='isDisabled']):focus:focus-visible, .euiButtonGroup--compressed .euiButtonGroupButton--accent:not([class*='isDisabled']):focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--compressed .euiButtonGroupButton--accent:not([class*='isDisabled']):focus:not(:focus-visible) {
    outline: none; }
  .euiButtonGroup--compressed .euiButtonGroupButton--success:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton--success:not([class*='isDisabled']):focus-within {
    outline-color: #00BFB3; }
    .euiButtonGroup--compressed .euiButtonGroupButton--success:not([class*='isDisabled']):focus:focus-visible, .euiButtonGroup--compressed .euiButtonGroupButton--success:not([class*='isDisabled']):focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--compressed .euiButtonGroupButton--success:not([class*='isDisabled']):focus:not(:focus-visible) {
    outline: none; }
  .euiButtonGroup--compressed .euiButtonGroupButton--warning:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton--warning:not([class*='isDisabled']):focus-within {
    outline-color: #FEC514; }
    .euiButtonGroup--compressed .euiButtonGroupButton--warning:not([class*='isDisabled']):focus:focus-visible, .euiButtonGroup--compressed .euiButtonGroupButton--warning:not([class*='isDisabled']):focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--compressed .euiButtonGroupButton--warning:not([class*='isDisabled']):focus:not(:focus-visible) {
    outline: none; }
  .euiButtonGroup--compressed .euiButtonGroupButton--danger:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton--danger:not([class*='isDisabled']):focus-within {
    outline-color: #BD271E; }
    .euiButtonGroup--compressed .euiButtonGroupButton--danger:not([class*='isDisabled']):focus:focus-visible, .euiButtonGroup--compressed .euiButtonGroupButton--danger:not([class*='isDisabled']):focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--compressed .euiButtonGroupButton--danger:not([class*='isDisabled']):focus:not(:focus-visible) {
    outline: none; }
  .euiButtonGroup--compressed .euiButtonGroupButton--ghost:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton--ghost:not([class*='isDisabled']):focus-within {
    outline-color: #FFF; }
    .euiButtonGroup--compressed .euiButtonGroupButton--ghost:not([class*='isDisabled']):focus:focus-visible, .euiButtonGroup--compressed .euiButtonGroupButton--ghost:not([class*='isDisabled']):focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--compressed .euiButtonGroupButton--ghost:not([class*='isDisabled']):focus:not(:focus-visible) {
    outline: none; }
  .euiButtonGroup--compressed .euiButtonGroupButton--text:not([class*='isDisabled']):focus, .euiButtonGroup--compressed .euiButtonGroupButton--text:not([class*='isDisabled']):focus-within {
    outline-color: #69707D; }
    .euiButtonGroup--compressed .euiButtonGroupButton--text:not([class*='isDisabled']):focus:focus-visible, .euiButtonGroup--compressed .euiButtonGroupButton--text:not([class*='isDisabled']):focus-within:focus-visible {
      outline-style: auto; }
  .euiButtonGroup--compressed .euiButtonGroupButton--text:not([class*='isDisabled']):focus:not(:focus-visible) {
    outline: none; }

.euiCard .euiCardSelect {
  border-top-left-radius: 0;
  border-top-right-radius: 0; }

.euiCode {
  border-radius: 4px;
  font-weight: 700;
  color: #7c609e; }

.euiCodeBlock.euiCodeBlock--fontLarge {
  font-size: 16px; }

.euiColorStops__addTarget,
.euiColorStops__addContainer {
  z-index: 1; }

.euiColorStops__addTarget {
  border: 1px solid #69707D;
  box-shadow: none; }

.euiColorStopThumb.euiRangeThumb:not(:disabled) {
  border: 2px solid #FFF;
  box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2); }
  .euiColorStopThumb.euiRangeThumb:not(:disabled):focus {
    box-shadow: 0 0 0 2px #0071c2;
    outline: none; }
  .euiColorStopThumb.euiRangeThumb:not(:disabled):focus:not(:focus-visible) {
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    outline: none; }

.euiColorStops:not(.euiColorStops-isDisabled) .euiRangeTrack::after {
  transition-property: box-shadow;
  transition-delay: 90ms; }

.euiColorStops:not(.euiColorStops-isDisabled):focus {
  outline: none; }
  .euiColorStops:not(.euiColorStops-isDisabled):focus .euiRangeTrack::after {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8), 0 0 0 3px #0071c2; }

.euiColorStops:not(.euiColorStops-isDisabled):focus:not(:focus-visible) .euiRangeTrack::after {
  box-shadow: none; }

.euiColorStops__highlight {
  color: #D3DAE6; }
  .euiColorStops__highlight .euiRangeHighlight__progress {
    background-color: #D3DAE6; }

.euiComboBox--appended .euiFormControlLayout__childrenWrapper {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px; }

.euiComboBox--appended .euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px; }

.euiComboBox--appended.euiComboBox--prepended .euiFormControlLayout__childrenWrapper {
  border-radius: 0; }

.euiComboBox--appended.euiComboBox--prepended .euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper {
  border-radius: 0; }

.euiComboBox--prepended .euiFormControlLayout__childrenWrapper {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px; }

.euiComboBox--prepended .euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px; }

.euiDataGrid--fontSizeLarge .euiDataGridRowCell {
  font-size: 16px;
  font-size: 1.14286rem;
  line-height: 1.71429rem; }

.euiDatePicker.euiDatePicker--shadow .react-datepicker-popper,
.euiDatePicker.euiDatePicker--shadow .react-datepicker-popper[data-placement^='top'] {
  border: none;
  border-radius: 6px; }

.euiDatePickerRange {
  border-radius: 6px; }

.euiDatePicker.euiDatePicker--shadow.euiDatePicker--inline .react-datepicker {
  border: none; }

.euiSuperDatePicker__prettyFormat {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px; }

.euiFormControlLayout--compressed.euiSuperDatePicker .euiSuperDatePicker__prettyFormat {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px; }

.euiDatePopoverButton--start {
  text-align: center; }

.euiDatePopoverButton--end {
  text-align: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px; }
  .euiDatePopoverButton--end.euiDatePopoverButton--compressed {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px; }

.euiDescriptionList.euiDescriptionList--inline.euiDescriptionList--compressed .euiDescriptionList__title {
  line-height: 1.5; }

.euiFilterGroup {
  border: none;
  border-radius: 6px;
  background-color: #fbfcfd;
  box-shadow: inset 0 0 0 1px rgba(17, 43, 134, 0.1); }

.euiFilterGroup--compressed {
  border-radius: 4px; }
  .euiFilterGroup--compressed .euiFilterButton {
    height: 32px; }

.euiFilterButton {
  border-radius: 0;
  border: none;
  background-color: transparent;
  box-shadow: 0 1px 0 0 rgba(17, 43, 134, 0.1), -1px 0 0 0 rgba(17, 43, 134, 0.1); }
  .euiFilterButton--withNext + .euiFilterButton {
    box-shadow: 0 1px 0 0 rgba(17, 43, 134, 0.1); }

.euiFormControlLayout--group {
  border-radius: 6px;
  background-color: #e9edf3; }
  .euiFormControlLayout--group .euiFormControlLayout__prepend:first-child {
    border-radius: 5px 0 0 5px; }
    .euiFormControlLayout--group .euiFormControlLayout__prepend:first-child [class*='euiButton'] {
      border-radius: 5px 0 0 5px; }
  .euiFormControlLayout--group .euiFormControlLayout__append:last-child {
    border-radius: 0 5px 5px 0; }
    .euiFormControlLayout--group .euiFormControlLayout__append:last-child [class*='euiButton'] {
      border-radius: 0 5px 5px 0; }
  .euiFormControlLayout--group [class*='euiButton']:focus {
    outline: 2px solid currentColor;
    outline-offset: -2px; }
    .euiFormControlLayout--group [class*='euiButton']:focus:focus-visible {
      outline-style: auto; }
    .euiFormControlLayout--group [class*='euiButton']:focus:not(:focus-visible) {
      outline: none; }
  .euiFormControlLayout--group .euiToolTipAnchor > .euiIcon {
    border-radius: 0 5px 5px 0; }
  .euiFormControlLayout--group .euiToolTipAnchor:first-child [class*='euiButton'] {
    border-radius: 5px 0 0 5px; }
  .euiFormControlLayout--group .euiToolTipAnchor:last-child [class*='euiButton'],
  .euiFormControlLayout--group .euiToolTipAnchor:last-child .euiText {
    border-radius: 0 5px 5px 0; }
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:nth-child(2) [class*='euiField'],
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:nth-child(3) [class*='euiField'] {
    border-radius: 0; }
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:first-child .euiSelect,
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:first-child .euiSuperSelectControl,
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:first-child [class*='euiField'] {
    border-radius: 6px 0 0 6px; }
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:last-child .euiSelect,
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:last-child .euiSuperSelectControl,
  .euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:last-child [class*='euiField'] {
    border-radius: 0 6px 6px 0; }
  .euiFormControlLayout--group.euiFormControlLayout--compressed {
    border-radius: 4px;
    background-color: #e9edf3; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed.euiFormControlLayout--readOnly input {
      background-color: #FFF; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__prepend:first-child {
      border-radius: 3px 0 0 3px; }
      .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__prepend:first-child [class*='euiButton'] {
        border-radius: 4px 0 0 4px; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__append:last-child {
      border-radius: 0 3px 3px 0; }
      .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__append:last-child [class*='euiButton'] {
        border-radius: 0 3px 3px 0; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiToolTipAnchor > .euiIcon {
      border-radius: 0 3px 3px 0; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiToolTipAnchor:first-child [class*='euiButton'] {
      border-radius: 3px 0 0 3px; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiToolTipAnchor:last-child [class*='euiButton'],
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiToolTipAnchor:last-child .euiText {
      border-radius: 0 3px 3px 0; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper:nth-child(2) [class*='euiField'],
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper:nth-child(3) [class*='euiField'] {
      border-radius: 0; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper:first-child .euiSelect,
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper:first-child [class*='euiField'] {
      border-radius: 3px 0 0 3px; }
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper:last-child .euiSelect,
    .euiFormControlLayout--group.euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper:last-child [class*='euiField'] {
      border-radius: 0 3px 3px 0; }

.euiFormControlLayoutDelimited {
  border-radius: 6px; }
  .euiFormControlLayoutDelimited.euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:first-child {
    border-radius: 6px 0 0 6px; }
  .euiFormControlLayoutDelimited .euiFormControlLayout__childrenWrapper:only-child {
    border-radius: 6px;
    overflow: hidden; }
  .euiFormControlLayoutDelimited .euiFormControlLayout__prepend +
.euiFormControlLayout__childrenWrapper:last-child {
    border-radius: 0 6px 6px 0; }
  .euiFormControlLayoutDelimited.euiFormControlLayout--compressed.euiFormControlLayout--group .euiFormControlLayout__childrenWrapper:first-child {
    border-radius: 4px 0 0 4px; }
  .euiFormControlLayoutDelimited.euiFormControlLayout--compressed .euiFormControlLayout__childrenWrapper:only-child {
    border-radius: 4px;
    overflow: hidden; }
  .euiFormControlLayoutDelimited.euiFormControlLayout--compressed .euiFormControlLayout__prepend +
.euiFormControlLayout__childrenWrapper:last-child {
    border-radius: 0 4px 4px 0; }

.euiRadio .euiRadio__input:focus + .euiRadio__circle {
  outline: 2px solid #0071c2;
  outline-offset: 2px; }

.euiRadio .euiRadio__input:focus:focus-visible + .euiRadio__circle {
  outline: 2px solid #0071c2;
  outline-offset: 2px; }

.euiRadio .euiRadio__input:focus:not(:focus-visible) + .euiRadio__circle {
  outline: none; }

.euiCheckbox .euiCheckbox__input:focus + .euiCheckbox__square {
  outline: 2px solid #0071c2;
  outline-offset: 2px; }

.euiCheckbox .euiCheckbox__input:focus:focus-visible + .euiCheckbox__square {
  outline: 2px solid #0071c2;
  outline-offset: 2px; }

.euiCheckbox .euiCheckbox__input:focus:not(:focus-visible) + .euiCheckbox__square {
  outline: none; }

.euiSwitch .euiSwitch__button:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px; }
  .euiSwitch .euiSwitch__button:focus:focus-visible {
    outline-style: auto; }
  .euiSwitch .euiSwitch__button:focus:not(:focus-visible) {
    outline: none; }
  .euiSwitch .euiSwitch__button:focus .euiSwitch__track {
    outline: none; }

/*
 * Creates the Amsterdam style of button with a transparent background
 */
/*
 * Creates the Amsterdam style of fill button
 */
.euiHeader {
  height: 48px;
  padding-left: 8px;
  padding-right: 8px; }

.euiHeaderSectionItem:after {
  display: none !important; }

.euiHeaderLogo {
  padding-left: 8px;
  padding-right: 8px;
  min-width: 40px; }
  @media only screen and (max-width: 574px) {
    .euiHeaderLogo {
      padding-left: 4px; } }

.euiHeaderLogo__text {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word;
  color: #1a1c21;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.71429rem;
  font-weight: 700; }

.euiHeader--default + .euiHeader--default {
  border-top: 1px solid #D3DAE6; }

.euiHue {
  position: relative;
  height: 12px;
  border-radius: 12px;
  margin: 8px 0; }
  .euiHue::before, .euiHue::after {
    display: none; }
  .euiHue__range {
    top: -6px; }
    .euiHue__range::-webkit-slider-thumb {
      border: 3px solid #FFF;
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
      background-color: inherit; }
    .euiHue__range::-moz-range-thumb {
      border: 3px solid #FFF;
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
      background-color: inherit; }
    .euiHue__range::-ms-thumb {
      border: 3px solid #FFF;
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
      background-color: inherit; }
    .euiHue__range:focus {
      outline: none; }
      .euiHue__range:focus::-webkit-slider-thumb {
        box-shadow: 0 0 0 2px #0071c2;
        border: 3px solid #FFF; }
      .euiHue__range:focus::-moz-range-thumb {
        box-shadow: 0 0 0 2px #0071c2;
        border: 3px solid #FFF; }
      .euiHue__range:focus::-ms-thumb {
        box-shadow: 0 0 0 2px #0071c2;
        border: 3px solid #FFF; }
    .euiHue__range:focus:not(:focus-visible)::-webkit-slider-thumb {
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2); }
    .euiHue__range:focus:not(:focus-visible)::-moz-range-thumb {
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2); }
    .euiHue__range:focus:not(:focus-visible)::-ms-thumb {
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2); }
    .euiHue__range:focus:focus-visible {
      outline: none; }

.euiListGroupItem--medium {
  font-size: 16px; }

.euiKeyPadMenuItem {
  border: none !important;
  box-shadow: none; }
  .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):hover, .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus:hover, .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus-within {
    box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05); }
  .euiKeyPadMenuItem:not(.euiKeyPadMenuItem-isDisabled):focus {
    box-shadow: none; }
  .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled) {
    box-shadow: none; }
    .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled):hover {
      box-shadow: 0 0.7px 1.4px rgba(0, 0, 0, 0.07), 0 1.9px 4px rgba(0, 0, 0, 0.05), 0 4.5px 10px rgba(0, 0, 0, 0.05); }
    .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled), .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled):hover, .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled):focus, .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected:not(.euiKeyPadMenuItem-isDisabled):focus-within {
      background-color: rgba(0, 119, 204, 0.1);
      color: #006bb8; }
  .euiKeyPadMenuItem.euiKeyPadMenuItem-isSelected.euiKeyPadMenuItem-isDisabled {
    background-color: rgba(171, 180, 196, 0.1);
    color: #a2abba; }

.euiKeyPadMenuItem__label {
  font-weight: 600; }

.euiMarkdownEditorToolbar {
  border-radius: 6px 6px 0 0; }

.euiMarkdownEditorTextArea:focus {
  outline: none; }

.euiMarkdownEditorTextArea:focus:focus-visible {
  outline-style: none; }

.euiMarkdownEditorPreview,
.euiMarkdownEditorFooter {
  border-radius: 0 0 6px 6px; }

.euiModal {
  border: none; }

.euiNotificationBadge {
  font-feature-settings: "calt" 1, "kern" 1, "liga" 1, "tnum" 1;
  border-radius: 4px; }

.euiOverlayMask {
  background: rgba(0, 0, 0, 0.5); }

.euiRangeTooltip__value {
  border-radius: 4px; }

.euiRangeDraggable:focus {
  outline: none; }
  .euiRangeDraggable:focus ~ .euiRangeThumb {
    border: 2px solid #FFF;
    box-shadow: 0 0 0 2px #0071c2;
    background-color: #07C; }

.euiRangeDraggable:focus:not(:focus-visible) ~ .euiRangeThumb {
  box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
  outline: none; }

.euiRangeDraggable:focus-visible {
  outline: none; }
  .euiRangeDraggable:focus-visible ~ .euiRangeThumb {
    border: 2px solid #FFF;
    box-shadow: 0 0 0 2px #0071c2;
    background-color: #07C; }

.euiRangeHighlight {
  z-index: 1;
  pointer-events: none; }
  .euiRangeHighlight__progress {
    background-color: #69707D;
    border-color: #69707D; }
    .euiRangeHighlight__progress--hasFocus {
      background-color: #07C; }
  .euiRangeHighlight--compressed {
    top: calc(50% - 2px); }
    .euiRangeHighlight--compressed .euiRangeHighlight__progress {
      height: 4px; }
    .euiRangeHighlight--compressed.euiRangeHighlight--hasTicks {
      top: 6px; }
  .euiRangeHighlight:not(.euiRangeHighlight--compressed).euiRangeHighlight--hasTicks {
    top: 5px; }

.euiRangeLevels .euiRangeLevel {
  margin-top: 0;
  margin-bottom: 0; }
  .euiRangeLevels .euiRangeLevel:first-child {
    margin-left: 0; }
  .euiRangeLevels .euiRangeLevel:last-child {
    margin-right: 0; }

.euiRangeLevels--compressed .euiRangeLevel {
  height: 4px; }
  .euiRangeLevels--compressed .euiRangeLevel:first-child {
    margin-left: 0; }
  .euiRangeLevels--compressed .euiRangeLevel:last-child {
    margin-right: 0; }

.euiRangeLevels--compressed .euiRangeThumb--hasTicks {
  top: 0; }

.euiRangeSlider {
  z-index: 2; }
  .euiRangeSlider::-webkit-slider-runnable-track {
    background-color: transparent; }
  .euiRangeSlider::-moz-range-track {
    background-color: transparent; }
  .euiRangeSlider::-ms-fill-lower {
    background-color: transparent; }
  .euiRangeSlider::-ms-fill-upper {
    background-color: transparent; }
  .euiRangeSlider--hasTicks {
    height: 16px; }
  .euiRangeSlider:focus {
    outline: none; }
    .euiRangeSlider:focus::-webkit-slider-thumb {
      border: 2px solid #FFF;
      box-shadow: 0 0 0 2px #0071c2;
      background-color: #07C; }
    .euiRangeSlider:focus::-moz-range-thumb {
      border: 2px solid #FFF;
      box-shadow: 0 0 0 2px #0071c2;
      background-color: #07C; }
    .euiRangeSlider:focus::-ms-thumb {
      border: 2px solid #FFF;
      box-shadow: 0 0 0 2px #0071c2;
      background-color: #07C; }
    .euiRangeSlider:focus::-webkit-slider-runnable-track {
      background-color: transparent; }
    .euiRangeSlider:focus::-moz-range-track {
      background-color: transparent; }
    .euiRangeSlider:focus::-ms-fill-lower {
      background-color: transparent; }
    .euiRangeSlider:focus::-ms-fill-upper {
      background-color: transparent; }
    .euiRangeSlider:focus ~ .euiRangeHighlight .euiRangeHighlight__progress {
      background-color: #07C; }
  .euiRangeSlider:focus:not(:focus-visible)::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    background-color: #69707D; }
  .euiRangeSlider:focus:not(:focus-visible)::-moz-range-thumb {
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    background-color: #69707D; }
  .euiRangeSlider:focus:not(:focus-visible)::-ms-thumb {
    box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
    background-color: #69707D; }
  .euiRangeSlider:focus:not(:focus-visible) ~ .euiRangeHighlight .euiRangeHighlight__progress {
    background-color: #69707D; }
  .euiRangeSlider:disabled::-webkit-slider-thumb {
    background-color: #69707D; }
  .euiRangeSlider:disabled::-moz-range-thumb {
    background-color: #69707D; }
  .euiRangeSlider:disabled::-ms-thumb {
    background-color: #69707D; }
  .euiRangeSlider:disabled ~ .euiRangeThumb {
    background-color: #69707D; }

.euiRangeThumb {
  box-shadow: 0 0 0 1px #FFF, 0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.2);
  border: 2px solid #FFF;
  background-color: #69707D;
  z-index: 2;
  pointer-events: none; }
  .euiRangeThumb--hasTicks {
    top: 0;
    margin-top: 0; }
  .euiRangeThumb:focus {
    border: 2px solid #FFF;
    box-shadow: 0 0 0 2px #0071c2;
    background-color: #07C;
    outline: none; }
  .euiRangeThumb:focus:focus-visible {
    outline: none; }

.euiRangeTicks:not(.euiRangeTicks--compressed) .euiRangeTick {
  padding-top: 0; }

.euiRangeTicks:not(.euiRangeTicks--compressed) .euiRangeTick:not(.euiRangeTick--hasTickMark)::before,
.euiRangeTicks:not(.euiRangeTicks--compressed) .euiRangeTick__pseudo {
  width: 4px;
  height: 6px;
  background-color: #D3DAE6;
  border-radius: 4px; }

.euiRangeTicks--compressed .euiRangeTick {
  padding-top: 14px; }
  .euiRangeTicks--compressed .euiRangeTick::before,
  .euiRangeTicks--compressed .euiRangeTick .euiRangeTick__pseudo {
    background-color: #D3DAE6;
    border-radius: 4px; }

.euiRangeTick::before {
  background-color: #D3DAE6;
  border-radius: 4px; }

.euiRangeTick:enabled:hover, .euiRangeTick:focus, .euiRangeTick--selected {
  color: #07C; }

.euiRangeTick--selected {
  font-weight: 500; }

.euiRangeTrack::after {
  content: '';
  display: block;
  background: #D3DAE6;
  border: 0 solid #69707D;
  border-radius: 4px;
  position: absolute;
  left: 0; }

.euiRangeTrack:not(.euiRangeTrack--compressed)::after {
  height: 6px;
  width: 100%; }

.euiRangeTrack--compressed::after {
  height: 6px;
  width: 100%;
  height: 4px; }

.euiRangeTrack--compressed.euiRangeTrack--hasLevels .euiRangeTicks {
  height: 18px;
  top: 16px; }

.euiRangeTrack--compressed.euiRangeTrack--hasLevels .euiRangeTick {
  padding-top: 4px; }

.euiRangeTrack--compressed:not(.euiRangeTrack--hasLevels) .euiRangeTicks {
  height: 20px;
  top: 12px; }

.euiRangeTrack--compressed:not(.euiRangeTrack--hasLevels) .euiRangeTick {
  padding-top: 6px; }

.euiRangeTrack--compressed.euiRangeTrack--hasTicks::after {
  top: 6px; }

.euiRangeTrack--compressed:not(.euiRangeTrack--hasTicks)::after {
  top: calc(50% - 2px); }

.euiRangeTrack--compressed .euiRangeThumb--hasTicks {
  top: 0; }

.euiRangeTrack--compressed .euiRangeLevels:not(.euiRangeLevels--hasTicks) {
  top: 19px; }

.euiRangeTrack--compressed .euiRangeLevels--hasTicks {
  top: 11px; }

.euiRangeTrack:not(.euiRangeTrack--compressed).euiRangeTrack--hasLevels .euiRangeTicks {
  height: 20px;
  top: 20px; }

.euiRangeTrack:not(.euiRangeTrack--compressed).euiRangeTrack--hasLevels .euiRangeTick {
  padding-top: 6px; }

.euiRangeTrack:not(.euiRangeTrack--compressed):not(.euiRangeTrack--hasLevels) .euiRangeTicks {
  height: 24px;
  top: 16px; }

.euiRangeTrack:not(.euiRangeTrack--compressed):not(.euiRangeTrack--hasLevels) .euiRangeTick {
  padding-top: 11px; }

.euiRangeTrack:not(.euiRangeTrack--compressed).euiRangeTrack--hasTicks .euiRangeTooltip {
  top: -2px; }

.euiRangeTrack:not(.euiRangeTrack--compressed).euiRangeTrack--hasTicks::after {
  top: 5px; }

.euiRangeTrack:not(.euiRangeTrack--compressed):not(.euiRangeTrack--hasTicks)::after {
  top: calc(50% - 3px); }

.euiRangeTrack:not(.euiRangeTrack--compressed) .euiRangeLevels:not(.euiRangeLevels--hasTicks) {
  top: 24px; }

.euiRangeTrack:not(.euiRangeTrack--compressed) .euiRangeLevels--hasTicks {
  top: 12px; }

.euiRangeTooltip {
  z-index: 3; }

.euiSideNavItem--root {
  padding-bottom: 8px; }
  .euiSideNavItem--root + .euiSideNavItem--root {
    padding-top: 8px;
    margin-top: 8px; }
  .euiSideNavItem--root > .euiSideNavItemButton {
    margin-bottom: 4px; }
    .euiSideNavItem--root > .euiSideNavItemButton .euiSideNavItemButton__label {
      overflow-wrap: break-word !important;
      word-wrap: break-word !important;
      word-break: break-word;
      color: #1a1c21;
      font-size: 14px;
      font-size: 1rem;
      line-height: 1.71429rem;
      font-weight: 700;
      color: inherit; }

.euiStepHorizontal-isDisabled .euiStepHorizontal__title,
.euiStep-isDisabled .euiStep__title {
  color: #ABB4C4; }

.euiStepNumber {
  outline-color: #07C; }
  .euiStepNumber .euiStepNumber__icon {
    position: relative;
    top: -1px; }
  .euiStepNumber--small .euiStepNumber__icon {
    top: -1px; }
  .euiStepNumber--complete .euiStepNumber__icon, .euiStepNumber--danger .euiStepNumber__icon {
    stroke: currentColor;
    stroke-width: .5px; }
  .euiStepNumber--default {
    background-color: #07C;
    color: #FFF;
    outline-color: #000 !important; }
  .euiStepNumber--complete {
    background-color: #00BFB3;
    color: #000;
    outline-color: #000 !important; }
  .euiStepNumber--warning {
    background-color: #FEC514;
    color: #000;
    outline-color: #000 !important; }
  .euiStepNumber--danger {
    background-color: #BD271E;
    color: #FFF;
    outline-color: #000 !important; }
  .euiStepNumber.euiStepNumber--incomplete {
    background-color: transparent;
    color: #343741;
    border: 2px solid #D3DAE6; }
    .euiStepNumber.euiStepNumber--incomplete .euiStepNumber__number {
      display: unset;
      position: relative;
      top: -2px; }

.euiStepNumber--disabled {
  background-color: rgba(171, 180, 196, 0.1);
  color: #a2abba; }

.euiStepHorizontal__title {
  font-weight: 700; }

.euiStepHorizontal::before, .euiStepHorizontal::after {
  height: 2px;
  background-color: #07C;
  background-color: #D3DAE6; }

.euiStep:not(:last-of-type) {
  background-position: left 32px; }

.euiStep--small:not(:last-of-type) {
  background-position: -4px 24px; }

.euiStep__content {
  padding-bottom: 40px;
  margin-bottom: 0; }

.euiStepsHorizontal {
  background: none; }

.euiStepHorizontal:focus:not(.euiStepHorizontal-isDisabled) .euiStepHorizontal__number:not(:focus-visible) {
  outline: 2px solid #07C; }

.euiTab,
.euiTabs--condensed .euiTab {
  padding: 0 4px; }
  .euiTab .euiTab__content,
  .euiTabs--condensed .euiTab .euiTab__content {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word;
    color: #1a1c21;
    font-size: 14px;
    font-size: 1rem;
    line-height: 1.71429rem;
    font-weight: 700;
    line-height: 40px; }
  .euiTab + .euiTab,
  .euiTabs--condensed .euiTab + .euiTab {
    margin-left: 16px; }
  .euiTab:focus,
  .euiTabs--condensed .euiTab:focus {
    background-color: transparent; }

.euiTabs--small .euiTab,
.euiTabs--condensed.euiTabs--small .euiTab {
  padding: 0 4px; }
  .euiTabs--small .euiTab .euiTab__content,
  .euiTabs--condensed.euiTabs--small .euiTab .euiTab__content {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word;
    color: #1a1c21;
    font-size: 12px;
    font-size: 0.85714rem;
    line-height: 1.14286rem;
    font-weight: 700;
    line-height: 32px; }
  .euiTabs--small .euiTab + .euiTab,
  .euiTabs--condensed.euiTabs--small .euiTab + .euiTab {
    margin-left: 12px; }

.euiTabs--large .euiTab,
.euiTabs--condensed.euiTabs--large .euiTab {
  padding: 0 4px; }
  .euiTabs--large .euiTab .euiTab__content,
  .euiTabs--condensed.euiTabs--large .euiTab .euiTab__content {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word;
    color: #1a1c21;
    font-size: 16px;
    font-size: 1.14286rem;
    line-height: 1.71429rem;
    font-weight: 700;
    line-height: 48px; }
  .euiTabs--large .euiTab + .euiTab,
  .euiTabs--condensed.euiTabs--large .euiTab + .euiTab {
    margin-left: 24px; }

.euiTabs--xlarge .euiTab,
.euiTabs--condensed.euiTabs--xlarge .euiTab {
  padding: 0 4px; }
  .euiTabs--xlarge .euiTab .euiTab__content,
  .euiTabs--condensed.euiTabs--xlarge .euiTab .euiTab__content {
    font-size: 20px;
    font-size: 1.42857rem;
    line-height: 48px; }
  .euiTabs--xlarge .euiTab + .euiTab,
  .euiTabs--condensed.euiTabs--xlarge .euiTab + .euiTab {
    margin-left: 32px; }

.euiTabs .euiTab-isSelected,
.euiTabs--condensed.euiTabs .euiTab-isSelected {
  color: #0071c2; }
  .euiTabs .euiTab-isSelected:hover, .euiTabs .euiTab-isSelected:focus,
  .euiTabs--condensed.euiTabs .euiTab-isSelected:hover,
  .euiTabs--condensed.euiTabs .euiTab-isSelected:focus {
    text-decoration: underline;
    cursor: pointer; }
  .euiTabs .euiTab-isSelected:focus-visible,
  .euiTabs--condensed.euiTabs .euiTab-isSelected:focus-visible {
    box-shadow: none; }

.euiToolTip {
  padding: 8px; }
  .euiToolTip .euiHorizontalRule {
    background-color: #595959; }





`;
