"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxService = void 0;
const BoxGenerator_1 = require("../themes/BoxGenerator");
const ThemeType_1 = require("../themes/ThemeType");
class BoxService {
    static generateBox(params) {
        const { link = '', title = '', date = '', author = '', theme = 'default' } = params;
        switch (theme) {
            case ThemeType_1.Theme.TISTORY:
                return (0, BoxGenerator_1.getTistoryBox)({ link, title, date, author });
            case ThemeType_1.Theme.BRUNCH:
                return (0, BoxGenerator_1.getBrunchBox)({ link, title, date, author });
            case ThemeType_1.Theme.LINKED:
                return (0, BoxGenerator_1.getLinkedBox)({ link, title, date, author });
            case ThemeType_1.Theme.INSTA:
                return (0, BoxGenerator_1.getInstaBox)({ link, title, date, author });
            default:
                return (0, BoxGenerator_1.getDefaultBox)({ link, title, date, author });
        }
    }
}
exports.BoxService = BoxService;
