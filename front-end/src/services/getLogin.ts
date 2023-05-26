import { api } from "./api"

export const getLogin = async (email: String, password: String) => {


        const { data, status } = await api.post('/auth/login', {
            email,
            password,
        }).then(response => response)
            .catch(error => error.response);

        if (status === 404) {
            return "";
        }

        const { authorizationToken } = data;
        return authorizationToken;

}