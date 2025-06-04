// src/badge/badge.service.ts

import { Injectable } from '@nestjs/common';
import { createCanvas } from 'canvas';
import { Box } from 'src/models/box';
import { Theme } from 'src/themes/theme.type';
import { ThemeService } from 'src/themes/themeService';

@Injectable()
export class BadgeService {
  generateBox(link: string, title: string, date: string, name: string, theme: Theme): string {
    const box: Box = { link, title, date, name };
    const themeHtml = ThemeService.getThemeHtml(theme, box);
    return themeHtml;
  }

  generateSvgBox(link: string, title: string, date: string, name: string, theme: Theme): string {
    const box: Box = { link, title, date, name };
    const html = ThemeService.getThemeHtml(theme, box);
    return this.wrapInSvg(html);
  }
  
  private wrapInSvg(inner: string): string {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: sans-serif; padding: 10px;">
        ${inner}
      </div>
    </foreignObject>
  </svg>
    `.trim();
  }
}
