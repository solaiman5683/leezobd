import { Headertoken, HTTP } from "@/lib/axios";

export function postAddToCart(formdata) {
    return HTTP.post('/carts/add', formdata, Headertoken());
}

export function getCart(data) {
    return HTTP.post('/carts', data, Headertoken());
}

export function getCartCount(data) {
    return HTTP.post('/cart-count', data, Headertoken());
}

export function postChangeQuantity(data) {
    return HTTP.post('/carts/change-quantity', data, Headertoken());
}

export function postRemoveFromCart(id) {
    return HTTP.delete(`/carts/${id}`, Headertoken());
}

export function postCartProcess(data) {
    return HTTP.post('/carts/process', data, Headertoken());
}

export function getCartSummary(data) {
    return HTTP.post('/cart-summary', data, Headertoken());
}


