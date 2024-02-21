const _material_color_utilities = import("@material/material-color-utilities");

const loadModule = async () => await _material_color_utilities;

const convertColor = async (color, to) => {
  switch (to) {
    case "rgb":
      return await convertToRGB(color);
    case "hex":
      return await convertToHex(color);
    default:
      return color;
  }
};

const convertToRGB = async (color) => {
  const module = await loadModule();

  if (typeof color === "string" || typeof color === "number") {
    return module.rgbaFromArgb(color);
  } else if (typeof color === "object" && !Array.isArray(color)) {
    const convertedColor = {};

    for (const key in color) {
      convertedColor[key] = await convertToRGB(color[key]);
    }

    return convertedColor;
  }
};

const convertToHex = async (color) => {
  const module = await loadModule();

  if (typeof color === "string" || typeof color === "number") {
    return module.hexFromArgb(color);
  } else if (typeof color === "object" && !Array.isArray(color)) {
    const convertedColor = {};

    for (const key in color) {
      convertedColor[key] = await convertToHex(color[key]);
    }

    return convertedColor;
  }
};

module.exports = {
  convertColor,
  convertToRGB,
  convertToHex,
};
