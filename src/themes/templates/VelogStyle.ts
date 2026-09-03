import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const velogStyle: BoxStyleDto = {
  name: 'velog',
  boxStyles: `
    .box {
      rx: 30;
      ry: 30;
      fill: url(#velogGradient);
    }
  `,
  titleStyles: `
    .title {
      font: bold 16px 'Segoe UI', system-ui, sans-serif;
      fill: white;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
  `,
  metaStyles: `
    .meta {
      font: 12px 'Segoe UI', system-ui, sans-serif;
      fill: rgba(255,255,255,0.8);
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
  `,
  iconSVG: `
  <text x="${TextPosition.x}" y="${TextPosition.y}" font-family="'Segoe UI', system-ui, sans-serif" font-weight="800" font-size="22" fill="white">v</text>
`
};
