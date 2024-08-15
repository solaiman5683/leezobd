import { Headertoken, HTTP } from "@/lib/axios";
import { getToken } from "../auth/useAuth";

export function getUserByToken() {
    return HTTP.post('get-user-by-access_token', { access_token: getToken() }, Headertoken());
}

export function postUpdateProfile(formdata) {
    return HTTP.post('profile/update', formdata, Headertoken());
}

export function postUpdateProfileImage(formdata) {
    return HTTP.post('profile/update-image-form', formdata, Headertoken());
}