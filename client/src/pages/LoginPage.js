import React from "react";
import Login from "../components/Login";
import {Col} from "reactstrap";
import { Headers } from "../styles"

const LoginPage = () => {

	return (
		<>
			<Headers>
			<h1>Welcome to DMS</h1>
			</Headers>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<Login />
			</Col>
		</>
	)

}

export default LoginPage;