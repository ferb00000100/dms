import React from "react";
import Login from "../components/Login";
import {Col} from "reactstrap";


const LoginPage = () => {


	return (
<>
	<h1>Welcome to the DMS Login Page</h1>
		<Col sm="12" md={{ size: 8, offset: 2 }}>
		<Login/>
		</Col>
</>
	)

}

export default LoginPage;