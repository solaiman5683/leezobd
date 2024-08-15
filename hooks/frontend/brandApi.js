import { HTTP } from "@/lib/axios";

export function getTopBrands() {
    return HTTP.get('/brands/top');
}
