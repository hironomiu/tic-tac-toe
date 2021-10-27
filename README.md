# tic-tac-toe

三目並べ

## setup

### React tailwind craco

```
npx create-react-app .
yarn add react-icons
yarn add react-router-dom
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
yarn add @craco/craco
```

`package.json`の script を`craco`で構成する

before

```
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```

after(eject は削除)

```
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
```

`craco.config.js`を作成（touch ではなく VSCode からファイル作成でも良い）

```
touch craco.config.js
```

作成した`craco.config.js`に以下を記述

```
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
```

### tailwind init

`tailwind` の初期化

```
npx tailwindcss init -p
```

`tailwind.config.js`の purge を修正

```
- purge: [],

+ purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
```

`./src/index.css` を tailwind を利用する設定に修正（以下の 3 行に全てを書き換え）

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

--

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
