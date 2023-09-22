import jwt from 'jsonwebtoken';
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { router as ticketRoutes } from "./routes/TicketRoutes"; 
import { router as loginRoutes } from "./routes/LoginRoutes"; 
import crypto from 'crypto';

const app = express();

app.use(cors({
    origin: "*", 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/calls", ticketRoutes)
app.use("/auth/", loginRoutes)


app.listen(3333, () => {
    console.log("Listening on port 3333");
})







