import{bD as a,c0 as c,a as t}from"./storyArgs-CoCupxjt.js";var i=function(n){var e=n.euiTheme;return`
    font-weight: `.concat(e.font.weight.medium,`;
    `).concat(a("left"),`

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      `).concat(c(n,"outset"),`
      text-decoration: underline;
      text-decoration-thickness: `).concat(e.border.width.thick,`;
    }
  `)},l={name:"9njbi5-disabled",styles:"font-weight:inherit;&:hover{cursor:auto;}&:hover,&:focus,&:target{text-decoration:none;};label:disabled;"},u=function(n){var e=n.euiTheme;return{euiLink:t(i(n)," user-select:text;&[target='_blank']{position:relative;};label:euiLink;"),disabled:l,primary:t(r(e.colors.textPrimary),";label:primary;"),subdued:t(r(e.colors.textSubdued),";label:subdued;"),success:t(r(e.colors.textSuccess),";label:success;"),accent:t(r(e.colors.textAccent),";label:accent;"),danger:t(r(e.colors.textDanger),";label:danger;"),warning:t(r(e.colors.textWarning),";label:warning;"),ghost:t(r(e.colors.ghost),";label:ghost;"),text:t(r(e.colors.textParagraph),";label:text;")}},r=function(n){return`
    color: `.concat(n,`;

    &:target {
      color: darken(`).concat(n,`, 10%);
    }
  `)};export{i as a,u as e};
