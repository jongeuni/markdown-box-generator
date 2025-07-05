import { defaultTheme } from "./DefaultTheme";
import { tistoryTheme } from "./TistoryTheme";

export interface BoxTheme {
    name: string;
    boxStyles: string;
    titleStyles: string;
    metaStyles: string;
    customElements?: string;
}

export interface Box {
    title: string;
    link?: string;
    author?: string;
    date?: string;
}

export function getDefaultBox(box: Box): string {
    return generateBoxSVG(box, defaultTheme);
}

export function getTistoryBox(box: Box): string {
    return generateBoxSVG(box, tistoryTheme);
}

export function getBrunchBox(box: Box): string {
    return generateBoxSVG(box, tistoryTheme);
}

export function getLinkedBox(box: Box): string {
    return generateBoxSVG(box, tistoryTheme);
}

export function getInstaBox(box: Box): string {
    return generateBoxSVG(box, tistoryTheme);
}

function generateBoxSVG(box: Box, theme: BoxTheme): string {
    const metaText = [box.author, box.date].filter(Boolean).join(' · ');

    return `
    <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="tistoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ff9a56;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ffad56;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.1)"/>
        </filter>
      </defs>
      <style>
        ${theme.titleStyles}
        ${theme.metaStyles}
        ${theme.boxStyles}
      </style>
      <rect x="0" y="0" width="400" height="120" class="box" filter="url(#shadow)"/>
      ${theme.customElements || ''}
      <text x="20" y="40" class="title">${box.title}</text>
      <text x="20" y="70" class="meta">${metaText}</text>
    </svg>
    `;
}