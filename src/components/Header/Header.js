import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiCloud66 } from "react-icons/si";

export default function Header() {
	return (
		<Container>
			<Wrapper>
				<Ava>
					<SiCloud66 size={"2.5rem"} />
					<Span></Span>
				</Ava>
				<Press>
					<Action to={"/test"}>
						<Seller>Become a seller</Seller>
					</Action>
					<Action to={"/login"}>
						<Seller>Sign In</Seller>
					</Action>
					<Action to={"/card"}>
						<Button>Join</Button>
					</Action>
				</Press>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	/* background-color: #e3e3e3; */
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	color: #fff;
	position: fixed;
	z-index: 1;
`;
const Wrapper = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Button = styled.button`
	width: 80px;
	height: 30px;
	background-color: transparent;
	color: #fff;
	font-size: 0.9rem;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: all 350ms;
	transform: scale(1);
	font-family: "poppins";
	border: 2px solid #fff;
	color: #fff;
	font-weight: 500;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
		background-color: transparent;
	}
`;

const Seller = styled.button`
	height: 30px;
	background-color: transparent;
	color: #fff;
	font-size: 1rem;
	outline: none;
	border: none;
	transition: all 500ms;
	transform: scale(1);
	font-family: "poppins";
	color: #fff;
	font-weight: 500;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;
const Ava = styled.div`
	display: flex;
	align-items: flex-end;
`;
const Press = styled.div`
	width: 320px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Span = styled.div`
	background-color: #1dbf73;
	width: 10px;
	height: 10px;
	border-radius: 50%;
`;
const Action = styled(Link)``;
