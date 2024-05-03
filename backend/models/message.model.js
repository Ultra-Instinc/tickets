import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		recieverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	// createdAt, updatedAt (automatically created by Mongo) =>message.createdAt : 15:30:15.456
	{ timestamps: true }
);
const Message = mongoose.model("Message", messageSchema);
export default Message;
