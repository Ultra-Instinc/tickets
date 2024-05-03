import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";
import { AnimatePresence } from "framer-motion";
import { useAuthContext } from "../../context/AuthContext";
import Tickets from "../../pages/tickets/Tickets";

export default function RoutesWithAnimation() {
	const { authUser } = useAuthContext();
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path='/'
					element={authUser ? <Home /> : <Navigate to='/login' />}
				/>
				<Route
					path='/tickets'
					element={authUser ? <Tickets /> : <Navigate to='/login' />}
				/>
				<Route
					path='/login'
					element={authUser ? <Navigate to='/' /> : <Login />}
				/>
				<Route
					path='/signup'
					element={authUser ? <Navigate to='/' /> : <SignUp />}
				/>
			</Routes>
		</AnimatePresence>
	);
}
