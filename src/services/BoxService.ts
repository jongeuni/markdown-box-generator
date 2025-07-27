import { getBrunchBox, getDefaultBox, getInstaBox, getLinkedBox, getTistoryBox } from '../themes/BoxGenerator';
import { BoxStyle } from '../themes/BoxStyleType';

interface BoxParams {
  link?: string;
  title?: string;
  date?: string;
  author?: string;
  style?: BoxStyle;
  isIcon?: boolean | 'true' | 'false';
}

export class BoxService {
  static generateBox(params: BoxParams): string {
    const { link = 'https://github.com/jongeuni/markdown-box-generator', title = 'Default Title', date = '', author = '', style = 'default' } = params;
    const isIconToggle = params.isIcon === false || params.isIcon === 'false'
      ? false
      : true;

    switch (style) {
      case BoxStyle.TISTORY:
        return getTistoryBox({ link, title, date, author, isIconToggle });
      case BoxStyle.BRUNCH:
        return getBrunchBox({ link, title, date, author, isIconToggle });
      case BoxStyle.LINKED:
        return getLinkedBox({ link, title, date, author, isIconToggle });
      case BoxStyle.INSTA:
        return getInstaBox({ link, title, date, author, isIconToggle });
      default:
        return getDefaultBox({ link, title, date, author, isIconToggle });
    }
  }
}

