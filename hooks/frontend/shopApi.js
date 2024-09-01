import { HTTP } from "@/lib/axios";

export function getShopDetails(id) {
    return HTTP.get(`shops/details/${id}`);
}

export function getShopTopProducts(id) {
    return HTTP.get(`shops/products/top/${id}`);
}