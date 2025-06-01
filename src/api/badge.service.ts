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
}
