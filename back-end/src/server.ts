import express from "express";
import { router } from "./routes/TicketRoutes"; 

const app = express();

app.use("/calls", router)

app.listen(3000, () => {
    console.log("Listening on port 3000");
})







