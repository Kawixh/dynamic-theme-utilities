const colorUtils = require("./color.js");

const generateTonalPallete = async (color, to = "rgb") => {
  const { convertColor } = await colorUtils;

  const palltete = {};

  for (let tone = 0; tone <= 100; tone += 10) {
    palltete[tone] = await convertColor(color.tone(tone), to);
  }

  return palltete;
};

module.exports = {
  generateTonalPallete,
};
