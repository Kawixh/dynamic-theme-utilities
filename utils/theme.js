import { themeFromImage } from "@material/material-color-utilities";
import { generateTonalPallete } from "./tonal_pallete";
import { convertColor } from "./color";
import { convertScheme } from "./scheme";
import { generateCssVariables } from "./css_variables";

export const generateTheme = async (image, options) => {
  const theme = await themeFromImage(image, options);

  const modifiedTheme = {
    rgb: modifyTheme(theme, "rgb"),
    hex: modifyTheme(theme, "hex"),
  };

  modifiedTheme["cssTokens"] = generateCssVariables(modifiedTheme);

  return modifiedTheme;
};

const modifyTheme = (theme, to = "rgb") => {
  return {
    object: {
      source: convertColor(theme.source, to),
      primaryPalette: generateTonalPallete(theme.palettes.primary, to),
      secondaryPalette: generateTonalPallete(theme.palettes.secondary, to),
      tertiaryPalette: generateTonalPallete(theme.palettes.tertiary, to),
      neutralPalette: generateTonalPallete(theme.palettes.neutral, to),
      neutralVariantPalette: generateTonalPallete(
        theme.palettes.neutralVariant,
        to,
      ),
      errorPalette: generateTonalPallete(theme.palettes.error, to),
      schemes: {
        light: convertScheme(theme.schemes.light, to).props,
        dark: convertScheme(theme.schemes.dark, to).props,
      },
    },
  };
};
