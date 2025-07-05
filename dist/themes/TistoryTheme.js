"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tistoryTheme = void 0;
exports.tistoryTheme = {
    name: 'tistory',
    boxStyles: `
    .box { 
      fill: url(#tistoryGradient); 
      stroke: none; 
      rx: 12; 
      ry: 12; 
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
    <rect x="350" y="85" width="30" height="20" rx="10" fill="rgba(255,255,255,0.2)" />
    <text x="365" y="97" font="10px sans-serif" fill="rgba(255,255,255,0.8)" text-anchor="middle">T</text>
  `
};
