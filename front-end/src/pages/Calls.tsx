import { useEffect } from "react";
import { verifyExpireToken } from '../services/verifyExpireToken';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from "react";
import ContentCalls from '../components/ContentCalls'
import HeaderCalls from '../components/HeaderCalls'
import { redirect } from "react-router-dom";


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
        <div className="min-h-screen bg-background-color">
            <div className="min-h-screen bg-transparent flex max-w-[1440px] mx-auto border-l-2 border-l-login-subtitle-gray border-opacity-20">
                <HeaderCalls />
                <ContentCalls />
            </div>
        </div>
    )
}

export default Calls