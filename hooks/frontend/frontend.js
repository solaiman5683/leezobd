import { HTTP } from "@/lib/axios";

export function getBanners() {
    return HTTP.get('/banners');
}

export function getSliders() {
    return HTTP.get('/sliders');
}