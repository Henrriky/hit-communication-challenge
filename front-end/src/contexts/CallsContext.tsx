import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface CallsContextProps {
    children: ReactNode,
}

export interface TicketInterface {
    id: number
    status: string
    unreadMessages: number
    lastMessage: string
    isGroup: boolean
    statusChatEnd: string
    userId: number
    contactId: number
    whatsappId: number
    queueId: number
    createdAt: string
    updatedAt: string
    contact: Contact
    queue: Queue
  }
  
interface Contact {
    id: number
    name: string
    number: string
    profilePicUrl: string
}

interface Queue {
    id: number
    name: string
    color: string
}

type CallsContextType = {
    // tickets: TicketInterface[],
    // setTickets: Dispatch<SetStateAction<TicketInterface[]>>,
    activeStatus: string,
    setActiveStatus:  Dispatch<SetStateAction<string>>
}

const initialValue = {
    // tickets: [{
    //     id: 2,
    //     status: "string",
    //     unreadMessages: 2,
    //     lastMessage: "string",
    //     isGroup: false,
    //     statusChatEnd: "string",
    //     userId: 2,
    //     contactId: 2,
    //     whatsappId: 2,
    //     queueId: 2,
    //     createdAt: "string",
    //     updatedAt: "string",
    //     contact: {
    //         id: 1,
    //         name: "string",
    //         number: "string",
    //         profilePicUrl: "string",
    //     },
    //     queue: {
    //         id: 1,
    //         name: "string",
    //         color: "string",
    //     }
    // }],
    // setTickets: () => {},
    activeStatus: "open",
    setActiveStatus: () => {

    }
}

export const CallsContext = createContext<CallsContextType>(initialValue);


function CallsContextProvider({ children }: CallsContextProps) {

    // const [tickets, setTickets] = useState(initialValue.tickets);
    const [activeStatus, setActiveStatus] = useState(initialValue.activeStatus);

    return (
        <CallsContext.Provider value={{activeStatus, setActiveStatus}}>
            {children}
        </CallsContext.Provider>
    )
}

export default CallsContextProvider