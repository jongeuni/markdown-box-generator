import { Box } from "./DefaultTheme";

  
  export function getTistoryBox(box: Box): string {
    return `
    <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
      <style>
        .title { font: bold 16px sans-serif; fill: black; }
        .meta { font: 12px sans-serif; fill: gray; }
        .box { fill: #fffaf0; stroke: #eb984e; stroke-width: 2; rx: 10; ry: 10; }
      </style>
      <rect x="0" y="0" width="400" height="120" class="box"/>
      <text x="20" y="40" class="title">${box.title}</text>
      <text x="20" y="70" class="meta">${box.name} · ${box.date}</text>
    </svg>
    `;
  }
  