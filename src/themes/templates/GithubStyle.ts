import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const githubStyle: BoxStyleDto = {
  name: 'github',
  boxStyles: `
    .box {
      rx: 30;
      ry: 30;
      fill: url(#githubGradient);
    }
  `,
  titleStyles: `
    .title {
      font: bold 15px 'Consolas', 'Courier New', monospace;
      fill: rgb(230, 237, 243);
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
  `,
  metaStyles: `
    .meta {
      font: 12px 'Consolas', 'Courier New', monospace;
      fill: rgb(125, 133, 144);
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
  `,
  iconSVG: `
  <text x="${TextPosition.x}" y="${TextPosition.y}" font-family="'Consolas', 'Courier New', monospace" font-weight="700" font-size="20" fill="rgb(63, 185, 80)">&gt;</text>
`
};
