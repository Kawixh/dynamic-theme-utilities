import { convertToRGB } from "./rgb";
import { convertToHex } from "./hex";

export const convertScheme = (scheme, to) => {
  switch (to) {
    case "rgb":
      return convertToRGB(scheme);
    case "hex":
      return convertToHex(scheme);
  }
};
