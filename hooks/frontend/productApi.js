import { HTTP } from "@/lib/axios";

export function getAllFlashDeals() {
    return HTTP.get('/flash-deals');
}

export function getFlashDealProducts({ id }) {
    return HTTP.get(`/flash-deal-products/${id}`);
}

export function getFlashDeals() {
    return HTTP.get('/flash-deal-products/2');
}

export function getBundleDeals() {
    return HTTP.get('/flash-deal-products/3');
}

export function getBestSellingProducts() {
    return HTTP.get('/products/best-seller');
}

export function getTodayDeals({ count = 10 }) {
    return HTTP.get('/products/todays-deal?limit=' + count);
}

export function getSingleProduct(id) {
    return HTTP.get(`/products/${id}`);
}

export function getAllProduct() {
    return HTTP.get(`/products`);
}

export function getProductReview(id) {
    return HTTP.get(`/reviews/product/${id}`);
}


export function getSearchProducts({ query }) {
    return HTTP.get(`/products/search?${query}`);
}