import { BoxStyleDto } from "../BoxGenerator";

export const defaultStyle: BoxStyleDto = {
  name: 'default',
  boxStyles: `
    .box { 
      fill: url(#defaultGradient); 
      stroke: none; 
      rx: 16; 
      ry: 16; 
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
  customElements: `
    <circle cx="360" cy="30" r="20" fill="rgba(255,255,255,0.1)" />
    <path d="M 350 30 L 360 25 L 370 30 L 360 35 Z" fill="rgba(255,255,255,0.3)" />
  `
};