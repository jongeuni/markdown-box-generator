import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const glowStyle: BoxStyleDto = {
  name: 'glow',
  boxStyles: `
    .box {
      rx: 30;
      ry: 30;
      fill: url(#glowGradient);
    }
  `,
  titleStyles: `
    .title {
      font: bold 16px 'Segoe UI', system-ui, sans-serif;
      fill: white;
      text-shadow: 0 1px 2px rgba(0,0,0,0.4);
    }
  `,
  metaStyles: `
    .meta {
      font: 12px 'Segoe UI', system-ui, sans-serif;
      fill: rgb(184, 184, 200);
      text-shadow: 0 1px 2px rgba(0,0,0,0.4);
    }
  `,
  iconSVG: `
  <g transform="translate(${TextPosition.x},${TextPosition.y - 15}) scale(0.85)">
    <path d="M13 0 L2 15 H10 L8 26 L20 9 H12 Z" fill="url(#glowIconGradient)"/>
  </g>
`
};
