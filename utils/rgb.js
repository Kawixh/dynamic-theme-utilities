import { rgbaFromArgb } from "@material/material-color-utilities";

export const convertToRGB = (color) => {
  if (typeof color === "string" || typeof color === "number") {
    return rgbaFromArgb(color);
  } else if (typeof color === "object" && !Array.isArray(color)) {
    const convertedColor = {};

    for (const key in color) {
      convertedColor[key] = convertToRGB(color[key]);
    }

    return convertedColor;
  }
};
