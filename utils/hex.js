import { hexFromArgb } from "@material/material-color-utilities";

export const convertToHex = (color) => {
  if (typeof color === "string" || typeof color === "number") {
    return hexFromArgb(color);
  } else if (typeof color === "object" && !Array.isArray(color)) {
    const convertedColor = {};

    for (const key in color) {
      convertedColor[key] = convertToHex(color[key]);
    }

    return convertedColor;
  }
};
