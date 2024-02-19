import { themeFromImage } from "@material/material-color-utilities";

export const generateTheme = (image, options) => {
  const theme = themeFromImage(image, options);

  const modifiedTheme = [];

  return theme;
};

// Function to convert color to RGB and HEX
function convertToRGBAndHex(color) {
  // Convert color to RGB and HEX here
  // This is a placeholder, replace with actual conversion logic
  return {
    rgb: color,
    hex: color,
  };
}

// Function to convert theme colors
function convertThemeColors(theme) {
  const newTheme = [];
  const rgbTheme = { type: "rgb" };
  const hexTheme = { type: "hex" };

  for (let key in theme) {
    if (typeof theme[key] === "object" && theme[key] !== null) {
      newTheme[key] = convertThemeColors(theme[key]);
    } else {
      const { rgb, hex } = convertToRGBAndHex(theme[key]);
      rgbTheme[key] = rgb;
      hexTheme[key] = hex;
    }
  }
  return newTheme;
}

// Usage
const theme = {
  // Your theme object here
};

const newTheme = convertThemeColors(theme);
