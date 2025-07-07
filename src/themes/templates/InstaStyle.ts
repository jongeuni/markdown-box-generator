import { TextPosition } from "../BoxConstants";
import { BoxStyleDto } from "../BoxGenerator";

export const instaStyle: BoxStyleDto = {
  name: 'insta',
  boxStyles: `
    .box { 
      rx: 30; 
      ry: 30; 
      fill: url(#instaGradient); 
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
  iconSVG: `
   <image href="/static/profile-icon-v2-white.svg" x="${TextPosition.x }" y="${TextPosition.y - 18}" width="25" height="25" />
  `
};
