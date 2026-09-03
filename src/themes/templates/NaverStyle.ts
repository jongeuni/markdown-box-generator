import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const naverStyle: BoxStyleDto = {
  name: 'naver',
  boxStyles: `
    .box {
      rx: 30;
      ry: 30;
      fill: url(#naverGradient);
    }
  `,
  titleStyles: `
    .title {
      font: bold 16px 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
      fill: rgb(25, 25, 25);
      text-shadow: 0 1px 1px rgba(0,0,0,0.08);
    }
  `,
  metaStyles: `
    .meta {
      font: 12px 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
      fill: rgb(102, 102, 102);
      text-shadow: 0 1px 1px rgba(0,0,0,0.08);
    }
  `,
  iconSVG: `
  <text x="${TextPosition.x}" y="${TextPosition.y}" font-family="'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif" font-weight="800" font-size="20" fill="rgb(3, 199, 90)">N</text>
`
};
