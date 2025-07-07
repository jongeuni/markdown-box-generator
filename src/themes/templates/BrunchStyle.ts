import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const brunchStyle: BoxStyleDto = {
  name: 'brunch',
  boxStyles: `
    .box { 
      rx: 30; 
      ry: 30; 
      fill: url(#brunchGradient); 
   
    }
  `,
  titleStyles: `
    .title { 
      font: bold 16px 'Georgia', system-ui, serif; 
      fill: black; 
      text-shadow: 0 0.5px 0.5px rgba(0,0,0,0.3);
    }
  `,
  metaStyles: `
    .meta { 
      font: 12px 'Georgia', system-ui, serif; 
      fill: rgba(0, 0, 0, 0.8); 
      text-shadow: 0 0.5px 0.5px rgba(0,0,0,0.3);
    }
  `,
  iconSVG: `
   <image href="/static/pen-icon.svg" x="${TextPosition.x }" y="${TextPosition.y - 15}" width="20" height="20" />
  `
};
