import CryptoJS from "crypto-js";

export const timestamp = Number(new Date());

export const hash = CryptoJS.MD5(
  timestamp +
    process.env.REACT_APP_KEY_PRIVATE_MARVEL_API +
    process.env.REACT_APP_KEY_PUBLIC_MARVEL_API
);
