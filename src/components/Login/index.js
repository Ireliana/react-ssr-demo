import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
	return (
		<div>
			<Helmet>
				<title>login page</title>
				<meta name="description" content="登陆页" />
			</Helmet>
			Login page
		</div>
	);
};

export default Login;
