import React from "react";
import NavBarLogin from "../NavBarLogin";
import {Col} from "reactstrap";
import API from "../../utils/API";
import useSignUpForm  from "../Form";

const Login = () => {
	const login = () => {

		// console.log(inputs);
		API.login(inputs)

	}

	const { inputs, handleInputChange, handleSubmit } = useSignUpForm({userName:"", password:""}, login);

	return (
		<>
		<NavBarLogin/>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div>
						<div>
							<label className="mt-4">Username:</label>
						</div>
						<div>
							<input className="mb-3 input" type="text" name="userName" onChange={handleInputChange} value={inputs.userName} required />
						</div>
						<div>
							<label>Password:</label>
						</div>
						<div>
							<input className="mb-3 input" type="password" name="password" onChange={handleInputChange} value={inputs.password} required />
						</div>
						<div>
							<button className=" mt-4 btn-success text-light input-group-text" id="" onClick={handleSubmit}>Login</button>
						</div>
					</div>
				</form>
			</Col>
	</>
			)}

export default Login

