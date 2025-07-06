![box](http://localhost:3001/box?title=My%20Post&date=2025-06-04&name=John&link=https%3A%2F%2Fexample.com&theme=tistory)

## markdown-box-generator
It is simple service that makes a box contaning my information.

<br>

## How to use
[![box-generator](http://localhost:3000/badge?name=JohnDoe&title=My%20Blog%20Post&date=2025-05-30&link=https://example.com&theme=tistory)](https://github.com/jongeuni/markdown-box-generator/settings)
param
<각 파람에 해당하는 사진 첨부> <br>
- title(required)
- name(nullabel)
- date(nullabel)
- style(nullabel)

>Important
>If the value is not passed, the default value is entered.

>Caution
> If you need spaces in the request, please enter _
> ex: ?title=nice_to_meet_you or ?title=nice%20to%20meet%20you

<br>

## Style Information
The style type is defined in `src/themes/BoxStyleType.ts`

(아래는 테이블)
Style	Type
Tistory Style(Orange)	TISTORY
Brunch Style(White)	BRUNCH
Instgrame Style(Purple)	INSTA
LinkedIn Style(Blue)	LIINKED
Default Style(Black)	DEFAULT

### Tistory Style (TISTORY)
[![box-generator](http://localhost:3000/badge?name=jongeun&title=내 삶의 지도&date=2025-05-30&link=https://example.com&theme=tistory)](https://github.com/jongeuni/markdown-box-generator/settings)
box-generator
