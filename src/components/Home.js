import React from "react";
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
		</div>
	);
};
export default Home;
