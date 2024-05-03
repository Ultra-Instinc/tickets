import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 form-control overflow-y-auto h-full'>
			{loading ? (
				<div className='w-full h-full flex items-center justify-center'>
					<span className='loading'></span>
				</div>
			) : (
				<>
					{conversations.map((conversation, idx) => {
						return (
							<Conversation
								key={conversation._id}
								conversation={conversation}
								lastIdx={idx === conversations.length - 1}
								emoji={getRandomEmoji()}
							/>
						);
					})}
				</>
			)}
		</div>
	);
};

export default Conversations;
