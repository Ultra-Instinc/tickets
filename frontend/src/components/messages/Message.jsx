import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { motion } from "framer-motion";
import { extractTime } from "./../../utils/extractTime";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePicture = fromMe
		? authUser?.profilePic
		: selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500/30" : "bg-gray-500/30";
	const formattedTime = extractTime(message.createdAt);

	return (
		<motion.div
			initial={{ scaleX: 0 }}
			animate={{ scaleX: 1 }}
			transition={{
				duration: 0.3,
				type: "spring",
				stiffness: 1000,
				damping: 40,
			}}
			className={`chat ${chatClassName} `}>
			<div className='chat-image avatar'>
				<div className='size-10 rounded-full'>
					<img
						src={profilePicture}
						alt='chat avatar'
					/>
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor}`}>
				{message.message}
			</div>
			<div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
				{formattedTime}
			</div>
		</motion.div>
	);
};

export default Message;
