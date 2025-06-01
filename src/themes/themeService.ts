import { Box } from '../models/box';
import { Theme } from './theme.type';

export class ThemeService {
  static getThemeHtml(theme: Theme, box: Box): string {
    console.log('테마 요청 진입합니다');
    switch (theme) {
      case 'tistory':
        return this.generateTistoryBox(box);
      case 'brunch':
        return this.generateBrunchBox(box);
      case 'instagram':
        return this.generateInstagramBox(box);
      default:
        return this.generateDefaultBox(box);
    }
  }

  private static generateTistoryBox(box: Box): string {
    console.log('here');

    return `<div style="border: 1px solid #ccc; padding: 10px;">
              <h3>${box.title}</h3>
              <p>${box.date} by ${box.name}</p>
              <a href="${box.link}">${box.link}</a>
            </div>`;
  }

  private static generateBrunchBox(box: Box): string {
    console.log('brunch 진입');

    return `<div style="border: 1px solid #ddd; padding: 8px;">
              <h3>${box.title}</h3>
              <p>${box.date} by ${box.name}</p>
              <a href="${box.link}">${box.link}</a>
            </div>`;
  }

  private static generateInstagramBox(box: Box): string {
    return `<div style="border: 3px solid #f00; padding: 20px;">
              <h3>${box.title}</h3>
              <p>${box.date} by ${box.name}</p>
              <a href="${box.link}">${box.link}</a>
            </div>`;
  }

  private static generateDefaultBox(box: Box): string {
    console.log('default');
    
    return `<div style="border: 1px solid #ddd; padding: 8px;">
              <h3>${box.title}</h3>
              <p>${box.date} by ${box.name}</p>
              <a href="${box.link}">${box.link}</a>
            </div>`;
  }
}
