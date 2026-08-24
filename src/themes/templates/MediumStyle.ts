import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const mediumStyle: BoxStyleDto = {
  name: 'medium',
  boxStyles: `
    .box {
      rx: 30;
      ry: 30;
      fill: url(#mediumGradient);
    }
  `,
  titleStyles: `
    .title {
      font: bold 16px 'Segoe UI', system-ui, sans-serif;
      fill: rgb(26, 26, 26);
      text-shadow: 0 1px 1px rgba(0,0,0,0.08);
    }
  `,
  metaStyles: `
    .meta {
      font: 12px 'Segoe UI', system-ui, sans-serif;
      fill: rgba(26, 26, 26, 0.6);
      text-shadow: 0 1px 1px rgba(0,0,0,0.08);
    }
  `,
  iconSVG: `
  <text x="${TextPosition.x}" y="${TextPosition.y - 4}" font-family="Georgia, serif" font-weight="700" font-size="22" fill="rgb(26, 26, 26)">M</text>
`
};
