const material_color_utilities = import("@material/material-color-utilities");
const colorUtils = require("./color.js");
const schemeUtils = require("./scheme.js");
const paletteUtils = require("./palette.js");

const loadModule = async () => await material_color_utilities;

const generateTheme = async (color) => {
  const { themeFromSourceColor, argbFromHex } = await loadModule();

  color = argbFromHex(color);
  const theme = themeFromSourceColor(color);

  return theme;
};

const modifyTheme = async (theme) => {
  const modifiedTheme = {
    rgb: await modifyThemeJSON(theme, "rgb"),
    hex: await modifyThemeJSON(theme, "hex"),
  };

  modifiedTheme["cssTokens"] = generateCssVariables(modifiedTheme);

  return modifiedTheme;
};

const modifyThemeJSON = async (theme, to = "rgb") => {
  const { convertColor } = await colorUtils;
  const { generateTonalPallete } = paletteUtils;
  const { convertScheme } = schemeUtils;

  return {
    object: {
      source: await convertColor(theme.source, to),
      primaryPalette: await generateTonalPallete(theme.palettes.primary, to),
      secondaryPalette: await generateTonalPallete(
        theme.palettes.secondary,
        to,
      ),
      tertiaryPalette: await generateTonalPallete(theme.palettes.tertiary, to),
      neutralPalette: await generateTonalPallete(theme.palettes.neutral, to),
      neutralVariantPalette: await generateTonalPallete(
        theme.palettes.neutralVariant,
        to,
      ),
      errorPalette: await generateTonalPallete(theme.palettes.error, to),
      schemes: {
        light: (await convertScheme(theme.schemes.light, to)).props,
        dark: (await convertScheme(theme.schemes.light, to)).props,
      },
    },
  };
};

const generateCssVariables = (theme, prefix = "--dtu-sys") => {
  const cssVariables = {};

  for (const key in theme) {
    if (typeof theme[key] === "object" && !Array.isArray(theme[key])) {
      let keys = Object.keys(theme[key]);

      if (
        keys.includes("r") &&
        keys.includes("g") &&
        keys.includes("b") &&
        keys.includes("a")
      ) {
        const rgb = Object.entries(theme[key])
          .filter(([key]) => key !== "a") // Exclude the 'a' key
          .map(([, value]) => value) // Get the values
          .join(" "); // Join them together

        cssVariables[`${prefix}-${key}`] = rgb;
      } else {
        const nestedVariables = generateCssVariables(
          theme[key],
          `${prefix}-${key}`,
        );

        for (const nestedKey in nestedVariables) {
          cssVariables[nestedKey] = nestedVariables[nestedKey];
        }
      }
    } else {
      if (key === "r" || key === "g" || key === "b" || key === "a") {
        continue;
      }

      cssVariables[`${prefix}-${key}`] = theme[key];
    }
  }

  return cssVariables;
};

module.exports = { generateTheme, modifyTheme };
