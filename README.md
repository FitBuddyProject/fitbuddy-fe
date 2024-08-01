## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 폴더구조

```
├─ public
├─ src
│  ├─ api
│  ├─ assets
│  ├─ components
│  ├─ hooks
│  ├─ pages
│  ├─ store
│  ├─ docs
│  ├─ styles
│  ├─ types
│  │
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ service-worker.ts
│  ├─ serviceWorkerRegistration.ts
│   
├─ .env
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ tsconfig.json
└─ README.md 
```

## Naming Convention

| Depth     | 상세               | Convention | e.g.                                               | 비고          |
|-----------|------------------|------------|----------------------------------------------------|-------------|
| directory | 상위 디렉토리          | camelCase  | utils,components,pages                             | 일반적인 파일인 경우 |
| directory | 페이지 디렉토          | PascalCase | pages/ProductCode                                  | 함수파일        |
| file      | 메인컴포넌트 외 파일 (화면) | PascalCase | utils/Utils.js                                     | 자식 컴포넌트     |
| file      | 메인 컴포넌트 파일       | PascalCase | components/ProductCodeHeader/ProductCodeHeader.tsx | 부모 컴포넌트     |
| file      | 메인 컴포넌트          | index.tsx  | pages/ProductCode/index.tsx                        | 자식 컴포넌트     |
| variable  | -                | camelCase  | const isHeader = () =>{}                           | 기본 변수       |
| url       | -                | kebab-case | /search-filter                                     |             |




