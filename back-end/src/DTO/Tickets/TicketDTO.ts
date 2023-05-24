import { Contact } from "./IContact";
import { Queue } from "./IQueue";

export interface TicketDTO {
    id: Number,
    status: String,
    unreadMessages: Number,
    lastMessage: String,
    isGroup: Boolean,
    statusChatEnd: String,
    userId: Number,
    contactId: Number,
    whatsappId: Number,
    queueId: Number,
    createdAt: String,
    updatedAt: String,
    contact: Contact,
    queue: Queue,

}