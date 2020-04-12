import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
	return (
		<div>
			Home components
			<button
				onClick={() => {
					console.log("click");
				}}
			>
				click me
			</button>
			<NavLink to="/login">to login page</NavLink>
		</div>
	);
};
export default Home;
