import { Box } from '../models/box';
import { Theme } from './theme.type';

export class ThemeService {
  static getThemeHtml(theme: Theme, box: Box): string {
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
    return this.generateBoxHtml(box, '1px solid #ccc', 15);
  }

  private static generateBrunchBox(box: Box): string {
    return this.generateBoxHtml(box, '1px solid #ddd', 12);
  }

  private static generateInstagramBox(box: Box): string {
    return this.generateBoxHtml(box, '3px solid #f00', 20);
  }

  private static generateDefaultBox(box: Box): string {
    return this.generateBoxHtml(box, '1px solid #ccc', 15);
  }

  // private static generateBoxHtml(box: Box, borderStyle: string, padding: number): string {
  //   const titleHtml = this.generateTitleHtml(box.title);
  //   return this.generateBoxContainer(box, borderStyle, padding, titleHtml);
  // }
  
  
  private static readonly CSS = `
<style>
.box-container {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 480px;
  height: 120px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: sans-serif;
  padding: 16px;
  border: 1px solid #ccc;
}

.box-title {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 280px;
}

.box-subtext {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 14px;
}

.box-link {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}
</style>
`;

private static generateBoxHtml(box: Box, borderStyle: string, padding: number): string {
  const title = box.title.length > 15 ? box.title.slice(0, 15) + '...' : box.title;

  return `
<div class="box-container">
  <h3 class="box-title">${title}</h3>
  <p class="box-subtext">${box.date} by ${box.name}</p>
  <a href="${box.link}" class="box-link">${box.link}</a>
</div>
${this.CSS}
  `.trim();
}

  
  
}
