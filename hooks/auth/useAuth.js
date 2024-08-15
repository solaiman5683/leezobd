import { CRYPTO_SECRET } from "@/config/app";
import CryptoJS, { AES } from "crypto-js";



export const getToken = () => {
    const encryptedToken = window.localStorage.getItem("_token_accessable");
    if (!encryptedToken) {
        return null;
    }
    const bytes = AES.decrypt(encryptedToken, CRYPTO_SECRET);
    const token = bytes.toString(CryptoJS.enc.Utf8);
    return token;
}

export const setToken = (token) => {
    const encryptedToken = AES.encrypt(
        token,
        CRYPTO_SECRET
    ).toString();
    window.localStorage.setItem("_token_accessable", encryptedToken);
}

export const removeToken = () => {
    window.localStorage.removeItem("_token_accessable");
}

export const getUser = () => {
    return JSON.parse(window.localStorage.getItem("user"));
}
