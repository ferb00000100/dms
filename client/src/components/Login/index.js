import React from "react";
import NavBarLogin from "../NavBarLogin";
import {Col} from "reactstrap";

const Login = () => {

	return (
		<>
			<NavBarLogin />
				<Col sm="12" md={{ size: 8, offset: 2 }}>
					<h4 className="mt-3"> You must login to upload files </h4>
				</Col>
		</>
	)
}

export default Login

