![box](http://localhost:3001/box?title=My%20Post&date=2025-06-04&name=John&link=https%3A%2F%2Fexample.com&theme=tistory)

## markdown-box-generator
You can check the README of English 👉 [Document of English](https://github.com/jongeuni/markdown-box-generator/blob/main/README-EN.md)


내 정보를 담은 박스를 만들어주는 간단한 서비스입니다.<br>
box-generator 아래 사용 방법과 테마 정보를 확인하실 수 있습니다.

<br>

## 사용 방법
[![box-generator](http://localhost:3000/badge?name=JohnDoe&title=My%20Blog%20Post&date=2025-05-30&link=https://example.com&theme=tistory)](https://github.com/jongeuni/markdown-box-generator/settings)
param
<각 파람에 해당하는 사진 첨부> <br>

- name
- title
- date
- link
- theme

>Important
>값을 전달하지 않을 경우 기본 값이 들어갑니다.

>Caution
> 띄어쓰기의 경우 _나 %20을 사용해서 입력해주세요.
> ex: ?title=뱃지_제목_입니다 or ?title=뱃지%20제목%20입니다
> 그냥 띄어쓰기를 하실 경우 요청이 가지 않습니다.

<br>

## 테마 정보
테마 타입은 src/themes/theme.type.ts에 정의되어있습니다.

(아래는 테이블)
제목	요청 타입
티스토리 테마	TISTORY
브런치 테마	BRUNCH
인스타그램 테마	INSTA
링크드인 테마	LIINKED
기본 테마	DEFAULT

### 티스토리 테마 (TISTORY)
[![box-generator](http://localhost:3000/badge?name=jongeun&title=내 삶의 지도&date=2025-05-30&link=https://example.com&theme=tistory)](https://github.com/jongeuni/markdown-box-generator/settings)
box-generator
