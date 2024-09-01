import { getToken } from "../auth/useAuth";

export function getCartHash() {
    const local_storage = localStorage.getItem('cart_hash');
    const token = getToken();

    if (token) {
        return undefined;
    }

    if (local_storage == 'null') {
        localStorage.removeItem('cart_hash');
        return undefined;
    } else if (local_storage) {
        return JSON.parse(local_storage);
    } else {
        return undefined;
    }
}


export function setCartHash(hash) {
    localStorage.setItem('cart_hash', JSON.stringify(hash));
}