import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Home = () => {
	const dot = useRef();
	const dot1 = useRef();
	const dot2 = useRef();
	const dot3 = useRef();

	const dotColor = ["gray", "white", "white", "white"];
	const dotColor1 = ["white", "gray", "white", "white"];
	const dotColor2 = ["white", "white", "gray", "white"];
	const dotColor3 = ["white", "white", "white", "gray"];

	const slider = [
		{
			id: 1,
			name: "Peter",
			title: "Developer",
			image: "TD",
		},
		{
			id: 2,
			name: "Peter2",
			title: "Developer2",
			image: "T",
		},
		{
			id: 3,
			name: "Peter3",
			title: "Developer3",
			image: "D",
		},
		{
			id: 4,
			name: "Peter4",
			title: "Developer3",
			image: "E",
		},
	];

	const [count, setCount] = useState(0);

	const addCount = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setInterval(() => {
			setCount((el) => el + 1);
		}, 3000);
	}, []);

	useEffect(() => {
		dot.current.style.backgroundColor = dotColor[count % dotColor.length];
		dot.current.style.transition = "all 350ms";

		dot1.current.style.backgroundColor = dotColor1[count % dotColor1.length];
		dot1.current.style.transition = "all 350ms";

		dot2.current.style.backgroundColor = dotColor2[count % dotColor2.length];
		dot2.current.style.transition = "all 350ms";

		dot3.current.style.backgroundColor = dotColor3[count % dotColor3.length];
		dot3.current.style.transition = "all 350ms";
	}, [count]);

	return (
		<Container>
			<div>{count}</div>
			<div>{slider[count % slider.length].name}</div>
			<div>{slider[count % slider.length].title}</div>
			<div>{slider[count % slider.length].image}</div>

			<Div>
				<Dot ref={dot} />
				<Dot ref={dot1} />
				<Dot ref={dot2} />
				<Dot ref={dot3} />
			</Div>
		</Container>
	);
};

export default Home;

const Div = styled.div`
	margin-top: 100px;
	display: flex;
`;

const Dot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: white;
	margin: 0 5px;
`;

const Container = styled.div`
	width: 100%;
	height: 150vh;
	background-color: blue;
	padding-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	color: white;
	flex-direction: column;
`;
