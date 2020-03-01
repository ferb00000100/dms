import React from "react";
import NavBarSignUp from "../components/NavBarSignUp";
import {Col} from "reactstrap";
import useSignUpForm  from "../components/Form";
import API from "../utils/API";

//TODO RESET FORM ON SUBMIT
const Signup = () => {
	const signup = () => {

		API.saveUser(inputs)
			.then(res => {
				if (!res) return;
			})
			.catch(err => console.log("Database write error", err))

		alert(`User Created! 
			Name: ${inputs.firstName} ${inputs.lastName}
			Username: ${inputs.userName}`
			);
	}

	const { inputs, handleInputChange, handleSubmit } = useSignUpForm({firstName:"", lastName:"", userName:"", password:"", accessID:"", secretID:"" },signup);

	return (
		<>

			<h1>DMS Sign Up</h1>
			<NavBarSignUp />
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<div className="section is-fullheight">
					<div className="container">
						<div className="column is-4 is-offset-4">
							<div className="box">
								<form onSubmit={handleSubmit} autoComplete="off">
									<div className="field">
										<label className="label has-text-centered">First Name</label>
										<div className="control">
											<input className="input" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
										</div>
									</div>
									<div className="field">
										<label className="label has-text-centered">Last Name</label>
										<div className="control">
											<input className="input" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
										</div>
									</div>
									<div className="field">
										<label className="label has-text-centered">Username</label>
										<div className="control">
											<input className="input" type="text" name="userName" onChange={handleInputChange} value={inputs.userName} required/>
										</div>
									</div>
									<div className="field">
										<label className="label has-text-centered">Password</label>
										<div className="control">
											<input className="input" type="password" name="password" onChange={handleInputChange} value={inputs.password} required/>
										</div>
									</div>
									<div className="field">
										<label className="label has-text-centered">Access ID</label>
										<div className="control">
											<input className="input" type="password" name="accessID" onChange={handleInputChange} value={inputs.accessID} required/>
										</div>
									</div>
									<div className="field">
										<label className="label has-text-centered">Secret ID</label>
										<div className="control">
											<input className="input" type="password" name="secretID" onChange={handleInputChange} value={inputs.secretID} required/>
										</div>
									</div>
									<button className="mt-2 button is-block is-fullwidth is-success" type="submit">Add User</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				</Col>
			</>

				)
}

export default Signup