const { HTTP, Headertoken } = require("@/lib/axios")

export function postRegister(data) {
    return HTTP.post('/auth/signup', data, Headertoken());
}