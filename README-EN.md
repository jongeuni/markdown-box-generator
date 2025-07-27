[![box](https://markdown-box-generator.vercel.app/api/box?title=markdown_box_code_👀&author=jongeui)](https://github.com/jongeuni/markdown-box-generator) [![box](https://markdown-box-generator.vercel.app/api/box?title=markdown_box_code_👀_move_title&author=jongeui&style=brunch)](https://github.com/jongeuni/markdown-box-generator)
<br>
`You can check the README of English` 👉 [Document of English](https://github.com/jongeuni/markdown-box-generator/blob/main/README-EN.md)
<br>
<br>


markdown-box-generator
A simple service that generates a box containing your information.<br>
Check out box-generator below for usage and theme information.

<br>
##How to use
```bash
[![box](https://markdown-box-generator.vercel.app/api/box?title=Default_Title&author=Author&date=2025-7-28&style=default)](https://github.com/jongeuni/markdown-box-generator)
```
🔍 Parameters
- title
- author
- date
- style

> [!IMPORTANT]
> If you don’t provide a value, a default value will be used.

> [!Caution]
> For spaces, use _ or %20.<br>
> `e.g.: ?title=Badge_Title_Here or ?title=Badge%20Title%20Here`<br>
> Using a plain space will prevent the request from working.

<br>
## Box Style Information
Theme style types are defined in `src/themes/BoxStyleType.ts.`


| Style | Request Type |
| ------------- | ------------- |
| Orange Blog Style  | TISTORY |
| Medium Style  | BRUNCH |
| Instagram Style  | INSTA |
| LinkedIn Style  | LIINKED |
| Default Style  | DEFAULT |

- Orange Blog Style (TISTORY)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Tistory_style&author=Author&date=2025-7-28&style=tistory)](https://github.com/jongeuni/markdown-box-generator)

- Medium Style (BRUNCH)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Brunch_style&author=Author&date=2025-7-28&style=brunch)](https://github.com/jongeuni/markdown-box-generator)

- Instagram Style (INSTA)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Insta_style&author=Author&style=insta)](https://github.com/jongeuni/markdown-box-generator)

- LinkedIn Style (LIINKED)
[![box](https://markdown-box-generator.vercel.app/api/box?title=Linked_style&author=Author&style=linked)](https://github.com/jongeuni/markdown-box-generator)

