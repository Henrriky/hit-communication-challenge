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
    contact: Object,
    queue: Object,

}