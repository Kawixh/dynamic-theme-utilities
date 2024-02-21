# Dynamic Theme Utilities

This package is built using [@material/material-color-utilities](https://www.npmjs.com/package/%40material%2Fmaterial-color-utilities). It's only purpose right now (Feb 19th, 2024) is to create a basic easy to use interface for [@material](https://www.npmjs.com/package/%40material%2Fmaterial-color-utilities).

## Installation

### Install using npm

```bash
npm install dynamic-theme-utilities
```

### Install using yarn

```bash
yarn add dynamic-theme-utilities
```

### Initialize using CLI

```bash
npx dynamic-theme-utilities generate_css '{HEX_COLOR}'
```

## Documentation

### Generate dynamic theme

To generate theme from image you can use the following `generateThemeFromImage` function

```javascript
import { generateThemeFromImage } from "dynamic-theme-utilities";

const themeGenerator = async () => {
  const img = new Image();
  img.src = src;
  img.crossOrigin = "Anonymous";

  const theme = await generateThemeFromImage(img);
}
```

### Apply the newly generated theme

You can apply the newly generated theme as CSS tokens (variables) by calling the function `applyTheme(theme)`. This function takes in an argument of the theme object - which is returned by `generateThemeFromImage(image).` This function will extract cssTokens from `theme` and append those tokens in a new `.dtu__cssTokens` class and append this class to the `head` tag. It creates a style element with the id `dtu__cssTokens.`

```javascript
import { applyTheme } from "dynamic-theme-utilities/utils/apply";

const themeGenerator = async () => {
  // generate theme

  applyTheme(theme);
}
```

## Generate custom CSS styling for your color using CLI

You can generate a new CSS file named `dtu__css_tokens.css` in the root of your project by giving a `HEX_COLOR` syntax for generating this file:

```bash
npx dynamic-theme-utilities generate_css '{HEX_COLOR}'
```

```bash
#EXAMPLE

npx dynamic-theme-utilities generate_css 'A4A3A2'
```


## Features

- Light/dark mode themes
- Generate themes from only images
- Apply themes to DOM by calling `applyTheme`
- Support all JS frameworks + vanilla JS support
- Generate `dtu__css_tokens.css` file using `npx dynamic-theme-utilities generate_css '{HEX_VALUE}'`


## Roadmap

- Add comments
- ~~Add ability to generate file using bash command so you can populate CSS variables before hand~~
- Add more integrations
