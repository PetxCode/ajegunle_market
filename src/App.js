import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

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
		<BrowserRouter>
			<Header bc={scroll ? "bc" : ""} />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
