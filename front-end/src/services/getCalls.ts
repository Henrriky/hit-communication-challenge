import { api } from "./api"

export const getCalls = async (email: String, password: String) => {

    const callsResponse = await api.post('/auth/calls', {
        email,
        password,
    })

    const { token } = callsResponse.data;

    return token
}