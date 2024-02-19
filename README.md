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

### Apply newly generated theme

You can apply newly generated theme as css tokens (variables) by calling function `applyTheme(theme)` this function takes in an argument of theme object - which is returned by `generateThemeFromImage(image)`. This function will extract cssTokens from `theme` and append those tokens in a new `.dtu__cssTokens` class and append this class to `head` tag. It creates a style element with id `dtu__cssTokens`.

```javascript
import { applyTheme } from "dynamic-theme-utilities/utils/apply";

const themeGenerator = async () => {
  // generate theme

  applyTheme(theme);
}
```


## Features

- Light/dark mode themes
- Generate themes from only images
- Apply themes to DOM by calling `applyTheme`
- Support all JS frameworks + vanilla JS support
