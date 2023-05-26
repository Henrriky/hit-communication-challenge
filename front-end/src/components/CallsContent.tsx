import { useEffect, useState } from "react";
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from "react";
import ContentCalls from '../components/ContentCalls'
import HeaderCalls from '../components/HeaderCalls'
import { CallsContext } from "../contexts/CallsContext";
import { getCalls } from "../services/getCalls";
import { TicketInterface } from "../contexts/CallsContext";



function CallsContent() {

    const { token } = useContext(AuthContext);
    const { activeStatus } = useContext(CallsContext);

    const [ticketsOpen, setTicketsOpen] = useState<TicketInterface[]>([]);
    const [ticketsPending, setTicketsPending] = useState<TicketInterface[]>([]);
    const [ticketsClosed, setTicketsClosed] = useState<TicketInterface[]>([]);
    
    // let ticketsOpen:TicketInterface[] = [{} as TicketInterface]; 
    // let ticketsPending:TicketInterface[] = [{} as TicketInterface];
    // let ticketsClosed:TicketInterface[] = [{} as TicketInterface]; 

    async function getTickets() {

        let ticketsResponseApi: TicketInterface[] = await getCalls(token);

        setTicketsOpen(ticketsResponseApi.filter(ticket => ticket.status == "open"));
        setTicketsClosed(ticketsResponseApi.filter(ticket => ticket.status == "closed"));
        setTicketsPending(ticketsResponseApi.filter(ticket => ticket.status == "pending"));
    }

    useEffect(() => {
        async function fetchTickets() {
            await getTickets();
        }
        fetchTickets()
    }, [])
    


    useEffect(() => {
    }, [activeStatus])
    return (
        <div className="min-h-screen bg-background-color">
            <div className="min-h-screen bg-transparent flex max-w-[1440px] mx-auto border-l-2 border-l-login-subtitle-gray border-opacity-20">
                <HeaderCalls />
                <ContentCalls 
                values={ activeStatus === "open" ? ticketsOpen : activeStatus === "close" ? ticketsClosed : ticketsPending }/>
            </div>
        </div>
    )
}

export default CallsContent