import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import cors from "cors";

import AuthRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connetToMongoDB.js";
import { app, server } from "./socket/socket.js";

const port = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (req, res) => {
// 	res
// 		.status(200)
// 		.json({ Message: "Hello Buddy your server is functional ! 🎉🎉" });
// });
// app.use(cors({ origin: "localhost:3000" }));
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // to access cookies => (authenticating users)

app.use("/api/auth", AuthRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
	connectToMongoDB();
	console.log(`server is on port : ${port}`);
});
