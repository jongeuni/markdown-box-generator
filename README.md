[![box](https://markdown-box-generator.vercel.app/api/box?title=markdown_box_code_👀&author=jongeui)](https://github.com/jongeuni/markdown-box-generator)
<br>
`You can check the README of English` 👉 [Document of English](https://github.com/jongeuni/markdown-box-generator/blob/main/README-EN.md)
<br>
<br>

## markdown-box-generator
원하는 정보를 담은 박스를 만들어주는 간단한 서비스입니다.<br>
아래에서 box-generator 사용 방법과 테마 정보를 확인하실 수 있습니다.

<br>

## 사용 방법
```bash
[![box](https://markdown-box-generator.vercel.app/api/box?title=Default_Title&author=Author&date=2025-7-28&style=default)](https://github.com/jongeuni/markdown-box-generator)
```
### 🔍 param
- **title**
- **author**
- **date**
- **style**

> [!IMPORTANT]
> 값을 전달하지 않을 경우 기본 값이 들어갑니다.


> [!Caution]
> **띄어쓰기의 경우 _ 또는 %20을 사용**해 주세요.<br>
> `ex: ?title=뱃지_제목_입니다 or ?title=뱃지%20제목%20입니다.`<br>
> 그냥 띄어쓰기를 하실 경우 요청이 가지 않습니다.

<br>

## 박스 스타일 정보
테마 스타일 타입은 `src/themes/BoxStyleType.ts`에 정의되어있습니다.

| 제목  | 요청 타입 |
| ------------- | ------------- |
| 티스토리 스타일  | TISTORY |
| 브런치 스타일  | BRUNCH |
| 인스타그램 스타일  | INSTA |
| 링크드인 스타일  | LIINKED |
| 기본 스타일  | DEFAULT |


#### - 티스토리 스타일 (TISTORY)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Tistory_style&author=Author&date=2025-7-28&style=tistory)](https://github.com/jongeuni/markdown-box-generator)
#### - 브런치 스타일 (BRUNCH)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Brunch_style&author=Author&date=2025-7-28&style=brunch)](https://github.com/jongeuni/markdown-box-generator)
#### - 인스타그램 스타일 (INSTA)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Insta_style&author=Author&style=insta)](https://github.com/jongeuni/markdown-box-generator)
#### - 링크드인 스타일 (LIINKED)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Linked_style&author=Author&style=linked)](https://github.com/jongeuni/markdown-box-generator)

