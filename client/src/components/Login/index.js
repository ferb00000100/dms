import React from "react";
import NavBar from "../NavBar";
import {Col} from "reactstrap";

const Login = () => {

	const handleFormSubmit = () => {
		console.log("HELLO BITCHES!!")

	}

	return (
		<>
		<NavBar/>
			<Col sm="12" md={{ size: 8, offset: 2 }}>

			{/*<form action="/login" method="post">*/}
				<form>
			<div>
				<div>
					<label className="mt-4">Username:</label>
				</div>
				<div>
					<input className="mb-3" type="text" name="username"/>
				</div>
				<div>
					<label>Password:</label>
				</div>
				<div>
					<input type="password" name="password"/>
				</div>
				<div>
					<button className=" mt-4 btn-success text-light input-group-text" id="" onClick={handleFormSubmit}>Login</button>

				</div>
			</div>
		</form>
			</Col>
	</>
			)}

export default Login

