import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface CallsContextProps {
    children: ReactNode,
}

type CallsContextType = {
    tickets: Object,
    setTickets: Dispatch<SetStateAction<Object>>;
}

const initialValue = {
    tickets: {},
    setTickets: () => {},
}

export const CallsContext = createContext<CallsContextType>(initialValue);


function CallsContextProvider({ children }: CallsContextProps) {

    const [tickets, setTickets] = useState(initialValue.tickets);

    return (
        <CallsContext.Provider value={{tickets, setTickets}}>
            {children}
        </CallsContext.Provider>
    )
}

export default CallsContextProvider