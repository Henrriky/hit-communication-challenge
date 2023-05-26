import { api } from "./api"

export const getCalls = async (token: String) => {

    let toStringToken = token.toString();

    const headers = {
        'authorization-token': toStringToken,
    }

    const response = await api.get('/calls/tickets', { 
                                        headers 
                                    })
                                    .then(response => response)
                                    .catch(error => error.response);

    const { data, status } = await response;

    if(status !== 200) {
        return [{ticket: "Não foi possível encontrar tickets"}];
    }   

    return data;
}