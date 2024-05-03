import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { AnimatePresence, motion } from "framer-motion";

export default function MessageContainer() {
	const { selectedConversation, setSelectedConversation } = useConversation();
	useEffect(() => {
		// cleanup on unmount
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
	return (
		<div className='md:min-w-[450px] flex flex-col h-full'>
			<AnimatePresence mode='wait'>
				{!selectedConversation ? (
					<NoChatSelected />
				) : (
					<motion.div
						className='h-full flex flex-col'
						key='thereischat'
						initial={{ x: "100vw" }}
						animate={{ x: 0, transition: { duration: 0.5 } }}>
						{/* Header */}
						<div className='bg-slate-500 px-4 py-2 mb-2 min-h-[40px]'>
							<span className='label-text'>To:</span>{" "}
							<span className='text-gray-900 font-bold'>
								{selectedConversation?.fullName}
							</span>
						</div>
						<Messages />
						<MessageInput />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<motion.div
			key='thereischat2'
			initial={{ x: "100vw" }}
			animate={{ x: 0, transition: { duration: 0.2 } }}
			exit={{ scale: 0.95, transition: { duration: 0.2 } }}
			className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser ? authUser?.username : "Placeholder"} 🔥</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-4xl md:text-7xl text-center' />
			</div>
		</motion.div>
	);
};
