import React, { useEffect } from "react";
import { useSocketContext } from "./../context/SocketContext";
import useConversation from "./../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
import { useAuthContext } from "../context/AuthContext";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();
	const { authUser } = useAuthContext();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			const sound = new Audio(notificationSound);
			if (newMessage.recieverId === authUser._id) {
				console.log({ newMessage: newMessage, authUser: authUser });
				sound.play();
				setMessages([...messages, newMessage]);
			}
		});

		return () => socket.off("newMessage");
	}, [socket, setMessages, messages]);
};

export default useListenMessages;
