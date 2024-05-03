import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
				required: true,
			},
		],
	},
	// createdAt, updatedAt (automatically created by Mongo) =>message.createdAt : 15:30:15.456
	{ timestamps: true }
);
const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
