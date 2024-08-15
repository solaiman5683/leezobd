import { Headertoken, HTTP } from "@/lib/axios";

export function purchaseHistory() {
    return HTTP.get('purchase-history', Headertoken());
}

export function getUserWishlist(id) {
    return HTTP.get(`wishlists/${id}`, Headertoken());
}