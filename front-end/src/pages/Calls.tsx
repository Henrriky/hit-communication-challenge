import { useEffect } from "react";
import { verifyExpireToken } from '../services/verifyExpireToken';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from "react";
import CallsContextProvider from "../contexts/CallsContext";
import CallsContent from "../components/CallsContent";


function Calls() {

    const { token, setToken } = useContext(AuthContext);

    useEffect(() => {

        const tokenIsInvalid = verifyExpireToken();


        if (!tokenIsInvalid) {
            let storageToken = localStorage.getItem("token");
            if (!storageToken) {
                storageToken = ""
            }
            setToken(storageToken);
        }

        if (tokenIsInvalid) {
            setToken("");
            localStorage.setItem("token", "");
        }
    }, [])



    return (
        <CallsContextProvider>
            <CallsContent/>
        </CallsContextProvider>
    )
}

export default Calls