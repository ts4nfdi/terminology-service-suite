import{aU as o,aY as c,aK as t}from"./QueryClientProvider-Cv6DMAwY.js";var i=function(n){var e=n.euiTheme;return`
    font-weight: `.concat(e.font.weight.medium,`;
    `).concat(o("left"),`

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      `).concat(c(n,"outset"),`
      text-decoration: underline;
      text-decoration-thickness: `).concat(e.border.width.thick,`;
    }
  `)},l={name:"9njbi5-disabled",styles:"font-weight:inherit;&:hover{cursor:auto;}&:hover,&:focus,&:target{text-decoration:none;};label:disabled;"},u=function(n){var e=n.euiTheme;return{euiLink:t(i(n)," user-select:text;&[target='_blank']{position:relative;};label:euiLink;"),disabled:l,primary:t(a(e.colors.textPrimary),";label:primary;"),subdued:t(a(e.colors.textSubdued),";label:subdued;"),success:t(a(e.colors.textSuccess),";label:success;"),accent:t(a(e.colors.textAccent),";label:accent;"),danger:t(a(e.colors.textDanger),";label:danger;"),warning:t(a(e.colors.textWarning),";label:warning;"),ghost:t(a(e.colors.ghost),";label:ghost;"),text:t(a(e.colors.textParagraph),";label:text;")}},a=function(n){return`
    color: `.concat(n,`;

    &:target {
      color: darken(`).concat(n,`, 10%);
    }
  `)};export{i as a,u as e};
