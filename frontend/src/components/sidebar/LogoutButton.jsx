import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

export default function LogoutButton() {
	const { loading, logout } = useLogout();
	return (
		<div
			onClick={logout}
			className='mt-auto'>
			{!loading ? (
				<BiLogOut className='size-6 text-white cursor-pointer' />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
}
