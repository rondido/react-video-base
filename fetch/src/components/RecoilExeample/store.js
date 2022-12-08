//atom 선언

import { atom, selector } from "recoil";

export const fontSizeState = atom({
  key: "fontSzieState",
  default: 14,
});

export const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  },
});
