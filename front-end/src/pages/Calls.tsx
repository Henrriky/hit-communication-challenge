import { useEffect } from "react";
import { verifyExpireToken } from '../services/verifyExpireToken';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from "react";
import ContentCalls from '../components/ContentCalls'
import HeaderCalls from '../components/HeaderCalls'
import CallsContextProvider, { CallsContext } from "../contexts/CallsContext";
import { getCalls } from "../services/getCalls";
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
            console.log("")
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