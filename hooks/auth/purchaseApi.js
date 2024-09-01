import { Headertoken, HTTP } from "@/lib/axios";

export function purchaseHistory() {
    return HTTP.get('purchase-history', Headertoken());
}

export function getUserWishlist() {
    return HTTP.get(`wishlists`, Headertoken());
}

export function removeUserWishlist(id) {
    return HTTP.delete(`wishlists/${id}`, Headertoken());
}