import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const linkedStyle: BoxStyleDto = {
  name: 'linked',
  boxStyles: `
    .box { 
      rx: 30; 
      ry: 30; 
      fill: url(#linkedGradient); 
    }
  `,
  titleStyles: `
    .title { 
      font: bold 16px 'Segoe UI', system-ui, sans-serif; 
      fill: white; 
      text-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }
  `,
  metaStyles: `
    .meta { 
      font: 12px 'Segoe UI', system-ui, sans-serif; 
      fill: rgba(255,255,255,0.8); 
      text-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }
  `,
//   customElements: `
//   <image href="/static/tistory-logo.svg" x="${TextPosition.x + 200}" y="${TextPosition.y + 10}" width="30" height="20" />
// `,
};
