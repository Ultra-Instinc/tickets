import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import SingleMessageSkeleton from "../skeletons/SingleMessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

export default function Messages() {
	const { loading, messages } = useGetMessages();
	useListenMessages();
	const messageRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			messageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 50);
	}, [messages]);

	return (
		<div className='flex-1 px-4 overflow-y-auto'>
			{!loading &&
				messages?.length > 0 &&
				messages.map((message, ix) => (
					<div
						ref={messageRef}
						key={ix}
						className='pb-2'>
						<Message message={message} />
					</div>
				))}
			{loading &&
				[...Array(3)].map((_, index) => <SingleMessageSkeleton key={index} />)}
			{!loading && messages?.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
}
