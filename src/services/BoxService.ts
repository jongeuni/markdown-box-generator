import { Theme } from '../themes/Theme';
import { getTistoryBox } from '../themes/TistoryTheme';
import { getDefaultBox } from '../themes/DefaultTheme';

interface BoxParams {
  link?: string;
  title?: string;
  date?: string;
  name?: string;
  theme?: string;
}

export class BoxService {
  static generateBox(params: BoxParams): string {
    const { link = '', title = '', date = '', name = '', theme = 'default' } = params;

    switch (theme) {
      case Theme.TISTORY:
        return getTistoryBox({ link, title, date, name });
      default:
        return getDefaultBox({ link, title, date, name });
    }
  }
}
