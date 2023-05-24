import express from "express";
import bodyParser from 'body-parser';
import { router as ticketRoutes } from "./routes/TicketRoutes"; 
import { router as loginRoutes } from "./routes/LoginRoutes"; 

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/calls", ticketRoutes)
app.use("/auth/", loginRoutes)


app.listen(3000, () => {
    console.log("Listening on port 3000");
})







