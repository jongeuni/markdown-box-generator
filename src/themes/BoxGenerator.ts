import { TistoryStyle } from "./templates/TistoryStyle";
import { BoxSize, TextPosition } from "./BoxConstants";
import { defaultStyle } from "./templates/DefaultStyle";
import { BoxStyle } from "./BoxStyleType";

export interface BoxStyleDto {
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
    return generateBoxSVG(box, defaultStyle);
}

export function getTistoryBox(box: Box): string {
    return generateBoxSVG(box, TistoryStyle);
}

export function getBrunchBox(box: Box): string {
    return generateBoxSVG(box, defaultStyle);
}

export function getLinkedBox(box: Box): string {
    return generateBoxSVG(box, defaultStyle);
}

export function getInstaBox(box: Box): string {
    return generateBoxSVG(box, defaultStyle);
}

function generateBoxSVG(box: Box, style: BoxStyleDto): string {
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
        ${style.titleStyles}
        ${style.metaStyles}
        ${style.boxStyles}
      </style>
      <rect x="0" y="0" width="${BoxSize.width}" height="${BoxSize.height}" class="box" filter="url(#shadow)"/>
      ${style.customElements || ''}
      <text x="${TextPosition.x}" y="${TextPosition.y}" class="title">${box.title}</text>
      <text x="${TextPosition.x}" y="${TextPosition.y + 25}" class="meta">${metaText}</text>
    </svg>
    `;
}