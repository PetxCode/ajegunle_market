import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Build/GlobalState/AuthProvider";
import MyTest from "./Build/TestBuild/MyTest";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ContentDetail from "./components/Services/ContentDetail";
import Market from "./components/Services/Market";
import User from "./components/User/User";
import UserContent from "./components/User/UserContent";

const App = () => {
	const [scroll, setScroll] = useState(false);

	const getScroll = () => {
		const check = window.scrollY;
		if (check >= 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	window.addEventListener("scroll", getScroll);

	return (
		<AuthProvider>
			<BrowserRouter>
				<Header
				// bc={scroll ? "bc" : ""}
				/>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/card"} element={<Market />} />
					<Route path={"/detail"} element={<ContentDetail />} />
					<Route path={"/test"} element={<MyTest />} />
					<Route path={"/user"} element={<User />} />
					<Route path={"/usercontents"} element={<UserContent />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
