import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
export default function Tickets() {
	const location = useLocation();
	const useParams = new URLSearchParams(location.search);
	const pageType = useParams.get("t");
	const ticketsType =
		pageType === "Th"
			? "Theater"
			: pageType === "Ci"
			? "Cinema"
			: pageType === "Pl"
			? "Play"
			: pageType === "Co"
			? "Concert"
			: "";

	console.log(ticketsType);

	return (
		<motion.div
			initial={{ x: "200%" }}
			animate={{ x: 0 }}
			className='text-[100px] font-semibold'>
			{ticketsType}Tickets
		</motion.div>
	);
}
