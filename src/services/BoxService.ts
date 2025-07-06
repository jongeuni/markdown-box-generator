import { getBrunchBox, getDefaultBox, getInstaBox, getLinkedBox, getTistoryBox } from '../themes/BoxGenerator';
import { BoxStyle} from '../themes/BoxStyleType';

interface BoxParams {
  link?: string;
  title?: string;
  date?: string;
  author?: string;
  style?: BoxStyle;
}

export class BoxService {
  static generateBox(params: BoxParams): string {
    const { link = '', title = '', date = '', author = '', style = 'default' } = params;
    
    switch (style) {
      case BoxStyle.TISTORY:
        return getTistoryBox({ link, title, date, author });
      case BoxStyle.BRUNCH:
        return getBrunchBox({ link, title, date, author });
      case BoxStyle.LINKED:
        return getLinkedBox({ link, title, date, author });
      case BoxStyle.INSTA:
        return getInstaBox({ link, title, date, author });
      default:
        return getDefaultBox({ link, title, date, author });
    }
  }
}

