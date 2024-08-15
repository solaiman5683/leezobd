import { Headertoken, HTTP } from "@/lib/axios"

export function shippingAddress() {
    return HTTP.get('user/shipping/address', Headertoken());
}

export function createShippingAddress(data) {
    return HTTP.post('user/shipping/create', data, Headertoken());
}

export function updateShippingAddress(data) {
    return HTTP.post('user/shipping/update', data, Headertoken());
}

export function makeDefaultShippingAddress(data) {
    return HTTP.post(`user/shipping/make_default`, data, Headertoken());
}

export function deleteShippingAddress(id) {
    return HTTP.delete(`user/shipping/delete/${id}`, Headertoken());
}

export function updateShippingAddressInCart(data) {
    return HTTP.post(`update-address-in-cart`, data, Headertoken());
}

export function getCountries() {
    return HTTP.get(`countries`, Headertoken());
}

export function getStates(id) {
    return HTTP.get(`states`, Headertoken());
}

export function getCities(id) {
    return HTTP.get(`cities`, Headertoken());
}

export function getStatesByCountry(id) {
    return HTTP.get(`states-by-country/${id}`, Headertoken());
}

export function getCitiesByState(id) {
    return HTTP.get(`cities-by-state/${id}`, Headertoken());
}