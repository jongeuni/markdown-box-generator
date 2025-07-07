import { tistoryStyle } from "./templates/TistoryStyle";
import { BoxSize, TextPosition } from "./BoxConstants";
import { defaultStyle } from "./templates/DefaultStyle";
import { BoxStyle } from "./BoxStyleType";
import { svgGradients } from "./templates/\bgradients";

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
  return generateBoxSVG(box, tistoryStyle);
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

export function spaceChangeTitle(title: string): string {
  return title.replace(/_/g, " ");
}

function generateBoxSVG(box: Box, style: BoxStyleDto): string {
  const metaText = [box.author, box.date].filter(Boolean).join(' · ');

  const maxTitleLength = 20;
  const isLongTitle = box.title.length > maxTitleLength;
  const convertedTitle = spaceChangeTitle(box.title);
  const title = isLongTitle ? convertedTitle.slice(0, maxTitleLength) + "..." : convertedTitle;
  const needsScroll = convertedTitle.length > 30;

  let animatedText;

  if (needsScroll) {
    const textWidthEstimate = convertedTitle.length * 10; // 글자폭 대략
    const clipWidth = 200;                           // 보여줄 영역 너비
    const speed = 50;                                 // px/sec
    const dur = (textWidthEstimate + clipWidth) / speed;

    animatedText = `
      <g clip-path="url(#textClip)">
        <text x="0" y="${TextPosition.y}" class="title">
          ${box.title}
          <animate attributeName="x" from="0" to="-${textWidthEstimate}" dur="${dur}s" repeatCount="indefinite" />
        </text>
        <text x="${textWidthEstimate}" y="${TextPosition.y}" class="title">
          ${box.title}
          <animate attributeName="x" from="${textWidthEstimate}" to="0" dur="${dur}s" repeatCount="indefinite" />
        </text>
      </g>
    `;
  } else {
    animatedText = `<text x="${TextPosition.x}" y="${TextPosition.y}" class="title">${title}</text>`;
  }



  return `
  <svg width="${BoxSize.width} + 30" height="${BoxSize.height} + 20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      ${svgGradients}
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.1)"/>
      </filter>
      <clipPath id="textClip">
  <rect x="${TextPosition.x}" y="${TextPosition.y - 16}" width="200" height="20" />
</clipPath>

    </defs>
    <style>
      ${style.titleStyles}
      ${style.metaStyles}
      ${style.boxStyles}
    </style>
    <rect x="0" y="0" width="${BoxSize.width}" height="${BoxSize.height}" class="box" filter="url(#shadow)"/>
    ${style.customElements || ''}
    ${animatedText}
    <text x="${TextPosition.x}" y="${TextPosition.y + 25}" class="meta">${metaText}</text>
  </svg>
  `;
}
