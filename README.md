# 📚 블로그 토이 프로젝트

개인 블로그 만들기 토이 프로젝트 입니다😎

<br>

## 💡 Tech Stack

- 주요 개발 언어 및 라이브러리
  - TypeScript
  - React
- 상태 관리

  - React-Query

- 페이지 스타일링

  - TailwindCSS

- etc
  - Prettier, Eslint

<br>
<br>

## 🚀 Git branch

```
main

develop (default)

feature

release: 배포 준비 단계

hotfix: 배포 후 문제 수정
```

<br>

## 🎶 Git Commit Message

| 헤더     | 내용                                                          |
| -------- | ------------------------------------------------------------- |
| feat     | 새로운 기능 추가                                              |
| refactor | 코드 리팩토링                                                 |
| fix      | 버그 수정                                                     |
| style    | 세미 콜론 수정, 줄바꿈, css 변경 등 기능과 무관한 스타일 변경 |
| setting  | 빌드수행, 패키지 설치, 환경 설정 수정 등                      |
| docs     | 주석 추가 및 삭제, readme 작성                                |


```
frontend
├─ .env
├─ .prettierrc
├─ eslint.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ mockServiceWorker.js
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ fonts
│  │     └─ MangoDdobak-R.ttf
│  ├─ components
│  │  ├─ home
│  │  ├─ login
│  │  │  ├─ LoginButton.tsx
│  │  │  ├─ LoginInput.tsx
│  │  │  ├─ LoginInputForm.tsx
│  │  │  └─ LoginLabel.tsx
│  │  └─ signup
│  │     └─ SignupInput.tsx
│  ├─ hooks
│  │  ├─ useInput.ts
│  │  └─ useLogin.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ Home
│  │  │  └─ Home.tsx
│  │  ├─ Login
│  │  │  └─ Login.tsx
│  │  ├─ PasswordEdit
│  │  │  └─ PasswordEdit.tsx
│  │  ├─ Post
│  │  │  ├─ Post.tsx
│  │  │  └─ PostDetail.tsx
│  │  ├─ Profile
│  │  │  └─ Profile.tsx
│  │  └─ Signup
│  │     └─ Signup.tsx
│  ├─ react-app-env.d.ts
│  ├─ setupTests.ts
│  ├─ styles
│  └─ utils
│     └─ token.ts
├─ tailwind.config.js
└─ tsconfig.json

```