import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const defaultStyle: BoxStyleDto = {
  name: 'default',
  boxStyles: `
    .box { 
      rx: 30; 
      ry: 30; 
      fill: url(#defaultGradient);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    }
  `,
  titleStyles: `
    .title { 
      font: bold 16px 'Segoe UI', system-ui, sans-serif; 
      fill: white; 
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
  `,
  metaStyles: `
    .meta { 
      font: 12px 'Segoe UI', system-ui, sans-serif; 
      fill: rgba(255,255,255,0.8); 
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
  `,
  iconSVG: `
   <image href="/static/code-icon.svg" x="${TextPosition.x }" y="${TextPosition.y - 15}" width="20" height="20" />
  `
};