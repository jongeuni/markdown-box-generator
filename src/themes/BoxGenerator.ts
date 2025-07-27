import { tistoryStyle } from "./templates/TistoryStyle";
import { BoxSize, TextPosition } from "./BoxConstants";
import { defaultStyle } from "./templates/DefaultStyle";
import { BoxStyle } from "./BoxStyleType";
import { svgGradients } from "./templates/gradients";
import { brunchStyle } from "./templates/BrunchStyle";
import { instaStyle } from "./templates/InstaStyle";
import { linkedStyle } from "./templates/LinkedStyle";

export interface BoxStyleDto {
  name: string;
  boxStyles: string;
  titleStyles: string;
  metaStyles: string;
  customElements?: string;
  iconSVG?: string; // 추가
}

export interface Box {
  title: string;
  link?: string;
  author?: string;
  date?: string;
  isIconToggle: boolean;
}

export function getDefaultBox(box: Box): string {
  return generateBoxSVG(box, defaultStyle);
}

export function getTistoryBox(box: Box): string {
  return generateBoxSVG(box, tistoryStyle);
}

export function getBrunchBox(box: Box): string {
  return generateBoxSVG(box, brunchStyle);
}

export function getLinkedBox(box: Box): string {
  return generateBoxSVG(box, linkedStyle);
}

export function getInstaBox(box: Box): string {
  return generateBoxSVG(box, instaStyle);
}

export function spaceChangeTitle(title: string): string {
  return title.replace(/_/g, " ");
}

function generateBoxSVG(box: Box, style: BoxStyleDto): string {
  const metaText = [box.author, box.date].filter(Boolean).join(' · ');

  const maxTitleLength = 16;
  const isLongTitle = box.title.length > maxTitleLength;
  const convertedTitle = spaceChangeTitle(box.title);
  const title = isLongTitle ? convertedTitle.slice(0, maxTitleLength) + "..." : convertedTitle;
  const needsScroll = convertedTitle.length > 16;

  let animatedText;

  const ICON_WIDTH = 30; // 아이콘 가로 크기 (iconSVG width와 맞추세요)
  const ICON_GAP = 2;    // 아이콘과 제목 사이 간격
  // 아이콘이 있으면 오른쪽으로, 없으면 원래 위치
  const hasIcon = box.isIconToggle && !!style.iconSVG;
  const TITLE_X = hasIcon ? (TextPosition.x + ICON_WIDTH + ICON_GAP) : TextPosition.x;

  if (needsScroll) {
    const textWidthEstimate = convertedTitle.length * 10; // 글자폭 대략
    const clipWidth = 200;                           // 보여줄 영역 너비
    const speed = 50;                                 // px/sec
    const dur = (textWidthEstimate + clipWidth) / speed;

    animatedText = `
      <g clip-path="url(#textClip)">
        <text x="${TITLE_X}" y="${TextPosition.y}" class="title">
          ${convertedTitle}
          <animate attributeName="x" from="${TITLE_X}" to="${TITLE_X - textWidthEstimate}" dur="${dur}s" repeatCount="indefinite" />
        </text>
        <text x="${TITLE_X + textWidthEstimate}" y="${TextPosition.y}" class="title">
          ${convertedTitle}
          <animate attributeName="x" from="${TITLE_X + textWidthEstimate}" to="${TITLE_X}" dur="${dur}s" repeatCount="indefinite" />
        </text>
      </g>
    `;
  } else {
    animatedText = `<text x="${TITLE_X}" y="${TextPosition.y}" class="title">${title}</text>`;
  }



  return `
  <svg width="${BoxSize.width} + 30" height="${BoxSize.height} + 20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      ${svgGradients}
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.1)"/>
      </filter>
      <clipPath id="textClip">
  <rect x="${TITLE_X}" y="${TextPosition.y - 16}" width="200" height="20" />
</clipPath>

    </defs>
    <style>
      ${style.titleStyles}
      ${style.metaStyles}
      ${style.boxStyles}
    </style>
    <rect x="0" y="0" width="${BoxSize.width}" height="${BoxSize.height}" class="box" filter="url(#shadow)"/>
    ${box.isIconToggle && style.iconSVG ? style.iconSVG : ""}
    ${style.customElements || ''}
    ${animatedText}
    <text x="${TextPosition.x}" y="${TextPosition.y + 25}" class="meta">${metaText}</text>
  </svg>
  `;
}
