import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-hot-toast";

export default function useSendMessage() {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(
				`/api/messages/send/${selectedConversation?._id}`,
				{
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({ message: message }),
				}
			);
			const data = await res.json();
			setMessages([...messages, data]);
			if (data.error) {
				throw new Error(data.error);
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, sendMessage };
}
