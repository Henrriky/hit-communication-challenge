import jwtDecode from "jwt-decode"

interface TokenUser {
    name: string, 
    email: string, 
    exp: number,
    iat: number,
    id: number,    
}

export const verifyExpireToken = () => {

    let storagedToken = localStorage.getItem('token');

    if (!storagedToken) {
        return true;
    } 

    const tokenDecoded: TokenUser = jwtDecode(storagedToken);
    const currentTime = Date.now()/1000;

    if(tokenDecoded.exp > currentTime) {
        return false;
    }

    return true;
    
}