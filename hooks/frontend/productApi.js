import { HTTP } from "@/lib/axios";

export function getFlashDeals() {
    return HTTP.get('/flash-deal-products/2');
}

export function getBundleDeals() {
    return HTTP.get('/flash-deal-products/3');
}

export function getBestSellingProducts() {
    return HTTP.get('/products/best-seller');
}

export function getTodayDeals() {
    return HTTP.get('/products/todays-deal');
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

