import { Headertoken, HTTP } from "@/lib/axios";

export function placeOrder(data) {
    return HTTP.post('order/store', data, Headertoken());
}