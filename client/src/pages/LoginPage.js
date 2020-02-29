import React from "react";
import Login from "../components/Login";
import Navbar from "../components/NavBar";
import {Col} from "reactstrap";


const LoginPage = () => {


	return (
<>
	<h1>Login</h1>
		<Col sm="12" md={{ size: 8, offset: 2 }}>
		<Login/>
		</Col>
</>
	)

}

export default LoginPage;