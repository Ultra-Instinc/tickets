import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, ioServer } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: recieverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, recieverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, recieverId],
			});
		}
		const newMessage = new Message({
			senderId,
			recieverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
		// await conversation.save();    these 2 lines will run on after the other
		// await newMessage.save();      these 2 lines will run on after the other

		await Promise.all([conversation.save(), newMessage.save()]); // this will run in parallel

		// SOCKET IO functionality will go here
		const receiverSocketId = getReceiverSocketId(recieverId);
		if (receiverSocketId) {
			// io.to(<socket_io>).emit() used to send events for specific client
			ioServer.to(receiverSocketId).emit("newMessage", newMessage);
		}

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("error in send message controller :", error.message);
		res.status(500).json({ error: "Internal server error !" });
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // give me messages objects  not just a reference

		if (!conversation) return res.status(200).json([]);
		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("error in get messages controller :", error.message);
		res.status(500).json({ error: "Internal server error !" });
	}
};
