import { HTTP } from "@/lib/axios";

export function getCategories() {
    return HTTP.get('/categories');
}

export function getSpecificCategories(id) {
    return HTTP.get(`/products/category/${id}`);
}