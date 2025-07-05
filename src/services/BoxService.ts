import { getBrunchBox, getDefaultBox, getInstaBox, getLinkedBox, getTistoryBox } from '../themes/BoxGenerator';
import { Theme } from '../themes/ThemeType';

interface BoxParams {
  link?: string;
  title?: string;
  date?: string;
  author?: string;
  theme?: string;
}

export class BoxService {
  static generateBox(params: BoxParams): string {
    const { link = '', title = '', date = '', author = '', theme = 'default' } = params;

    switch (theme) {
      case Theme.TISTORY:
        return getTistoryBox({ link, title, date, author });
      case Theme.BRUNCH:
        return getBrunchBox({ link, title, date, author });
      case Theme.LINKED:
        return getLinkedBox({ link, title, date, author });
      case Theme.INSTA:
        return getInstaBox({ link, title, date, author });
      default:
        return getDefaultBox({ link, title, date, author });
    }
  }
}

