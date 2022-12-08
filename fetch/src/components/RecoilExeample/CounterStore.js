import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState", //이 아이디는 유니크해야함
  default: "",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
