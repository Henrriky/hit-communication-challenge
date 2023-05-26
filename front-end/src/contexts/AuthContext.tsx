import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface AuthContextProps {
    children: ReactNode,
}

type AuthContextType = {
    token: String,
    setToken: Dispatch<SetStateAction<string>>;
}

const initialValue = {
    token: "",
    setToken: () => {},
}

export const AuthContext = createContext<AuthContextType>(initialValue);


function AuthContextProvider({ children }: AuthContextProps) {

    const [token, setToken] = useState(initialValue.token);

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider