import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
export default function Tickets() {
	const location = useLocation();
	const useParams = new URLSearchParams(location.search);
	const pageType = useParams.get("t");
	const moviesArr = [
		{
			key: 1,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 2,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 3,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 4,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 5,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 6,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 7,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 8,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 9,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
		{
			key: 10,
			title: "Avatar",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
		},
	];
	const consertArr = [
		{
			key: 1,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 2,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 3,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 4,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 5,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 6,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 7,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 8,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 9,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
		{
			key: 10,
			title: "Tamer Hosny",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://www.promotix.com/hs-fs/hubfs/backwoods_music_festival_2015_Andrew_dolan_photography.jpg?width=960&name=backwoods_music_festival_2015_Andrew_dolan_photography.jpg",
		},
	];
	const playArr = [
		{
			key: 1,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 2,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 3,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 4,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 5,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 6,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 7,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 8,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 9,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
		{
			key: 10,
			title: "Masrah Misr",
			release: "December 16, 2009",
			rating: 4.7,
			available_tickets: 51,
			image:
				"https://shahid.mbc.net/mediaObject/2020/Amr/JPEG/Final/masrah-masr_Thumbnail_clean/original/masrah-masr_Thumbnail_clean.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp",
		},
	];
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
	const targetArr =
		ticketsType === "Theater"
			? playArr
			: ticketsType === "Cinema"
			? moviesArr
			: ticketsType === "Concert"
			? consertArr
			: ticketsType === "Play"
			? playArr
			: "";
	return (
		<motion.div
			initial={{ x: "200%" }}
			animate={{ x: 0 }}
			className=' w-full h-[100vh] flex flex-col overflow-auto justify-start items-center gap-5'>
			{targetArr?.map((item, ix) => (
				<div
					key={ix}
					className='w-[90%] min-h-32 hover:min-h-64 flex rounded-xl group overflow-hidden cursor-pointer hover:opacity-95 transition-all duration-500 '>
					<div className='flex-[0.2] transition-all duration-300 '>
						<img
							src={item?.image}
							alt='spiderman'
							className='object-cover h-full w-full'
						/>
					</div>
					<div className='flex-[0.8] flex gap-5 bg-gray-900/60 text-white'>
						<div className='flex-1 flex items-start justify-center mx-5 flex-col '>
							<p className='font-semibold text-[2rem]'>{item?.title} </p>
							<p className='font-normal'>Released : {item?.release}</p>
							<p className='font-normal'>Rating : {item?.rating}</p>
							<p className='font-normal'>
								Available Tickets : {item?.available_tickets}
							</p>
						</div>
						<div className='flex-[0.5] flex flex-col items-start justify-center gap-5 h-full0'>
							<div className='bg-green-500 rounded-lg font-semibold mx-auto h-[70px] opacity-0 group-hover:opacity-100 w-[45%] min-w-32 flex items-center justify-center transition-all duration-300 active:scale-95'>
								Order Now!
							</div>
							<div className='bg-blue-500 rounded-lg font-semibold mx-auto h-[70px] opacity-0 group-hover:opacity-100 w-[45%] min-w-32 flex items-center justify-center transition-all duration-300 active:scale-95'>
								Add to WishList
							</div>
						</div>
					</div>
				</div>
			))}
		</motion.div>
	);
}
