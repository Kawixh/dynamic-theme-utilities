const colorUtils = require("./color.js");

const convertScheme = async (scheme, to) => {
  const { convertToRGB, convertToHex } = colorUtils;
  switch (to) {
    case "rgb":
      return await convertToRGB(scheme);
    case "hex":
      return await convertToHex(scheme);
  }
};

module.exports = {
  convertScheme,
};
