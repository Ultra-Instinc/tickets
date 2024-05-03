// initialize socket io
import { Server } from "socket.io";
// import built in node js http
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const ioServer = new Server(server, {
	cors: {
		origin: ["http://localhost:5173"],
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; //{ userId: socketId }

ioServer.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId !== undefined) userSocketMap[userId] = socket.id;

	//  io.emit() is user to send events to all connected clients
	ioServer.emit("getOnlineUsers", Object.keys(userSocketMap));
	console.log(userSocketMap);
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		ioServer.emit("getOnlineUsers", Object.keys(userSocketMap));
		console.log(userSocketMap);
	});
});
export { app, ioServer, server };
