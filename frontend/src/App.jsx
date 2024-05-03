import { BrowserRouter as Router } from "react-router-dom";
import RoutesWithAnimation from "./components/animation/RoutesWithAnimation";

import { Toaster } from "react-hot-toast";
import Logo from "./components/navbar/Logo";
import UserIcon from "./components/navbar/UserIcon";
import { useAuthContext } from "./context/AuthContext";
export default function App() {
	const { authUser } = useAuthContext();
	console.log({ authUser: authUser });
	return (
		<div className='p-4 h-screen flex items-center justify-center overflow-hidden flex-col relative'>
			<Router>
				{authUser && (
					<nav className='top-0 absolute w-[90%] mx-auto flex justify-between'>
						<Logo />
						<UserIcon />
					</nav>
				)}
				<RoutesWithAnimation />
			</Router>
			<Toaster />
		</div>
	);
}
