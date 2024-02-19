import { convertToHex } from "./hex";
import { convertToRGB } from "./rgb";

export const convertColor = (color, to) => {
  switch (to) {
    case "rgb":
      return convertToRGB(color);
    case "hex":
      return convertToHex(color);
    default:
      return color;
  }
};
