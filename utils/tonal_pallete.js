import { convertColor } from "./color";

export const generateTonalPallete = (color, to = "rgb") => {
  const palltete = {};

  for (let tone = 0; tone <= 100; tone += 10) {
    palltete[tone] = convertColor(color.tone(tone), to);
  }

  return palltete;
};
