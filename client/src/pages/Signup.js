import React from "react";
import NavBarSignUp from "../components/NavBarSignUp";
import {Col, Row} from "reactstrap";
// import UploadBar from "../components/UploadBar"
import useSignUpForm  from "../components/Form";
import API from "../utils/API";
import { Headers } from "../styles"
// import UploadPage from "../pages/Uploads"


//TODO RESET FORM ON SUBMIT
const Signup = () => {
	const signup = () => {

		// const documents = inputs.documents.split("C:").join(',').split('\\').join(',').split(',').pop();

		//TODO How can I reuse the uploadFile function
		// UploadPage.uploadFile(documents);

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

	const { inputs, handleInputChange, handleSubmit } = useSignUpForm({firstName:"", lastName:"", userName:"", password:"", accessID:"", secretID:"", documents:"" },signup);

	return (
		<>
			<Headers>
				<h1>DMS Sign Up</h1>
			</Headers>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<NavBarSignUp/>
				<div className="section is-fullheight">
					<Col md={{ size: 12, offset: 0}} className="container">
						<div className="column is-4 is-offset-4">
							<div className="box">
							<form onSubmit={handleSubmit} autoComplete="off">
								<div className="mt-3 mb-3 input-group">
								<div className="custom-file">
									<input
										type="file"
										name="documents"
										className="custom-file-input"
										id="inputGroupFile02"
										value={inputs.documents}
										onChange={handleInputChange}
									/>
						{/*TODO Need File Name to appear in Browser once Selected*/}
									<label className="custom-file-label" htmlFor="inputGroupFile02">Upload your first file</label>
							</div>
						</div>
					<div className="field">
						<label className="label has-text-centered">First Name</label>
						<div className="control">
							<Row xs="12">
							<input className="ml-3 input" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
							</Row>
						</div>
					</div>
					<div className="mt-2 field">
						<label className="label has-text-centered">Last Name</label>
						<div className="control">
							<Row>
								<input className="ml-3 input" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
							</Row>
						</div>
					</div>
					<div className="mt-2 field">
						<label className="label has-text-centered">Username</label>
						<div className="control">
							<Row>
								<input className="ml-3 input" type="text" name="userName" onChange={handleInputChange} value={inputs.userName} required/>
							</Row>
						</div>
					</div>
					<div className="mt-2 field">
						<label className="label has-text-centered">Access ID</label>
						<div className="control">
							<Row>
								<input className="ml-3 input" type="password" name="accessID" onChange={handleInputChange} value={inputs.accessID} required/>
							</Row>
						</div>
					</div>
					<div className="mt-2 field">
						<label className="label has-text-centered">Secret ID</label>
						<div className="control">
							<Row>
								<input className="ml-3 input" type="password" name="secretID" onChange={handleInputChange} value={inputs.secretID} required/>
							</Row>
						</div>
					</div>
						<Row>
							<button className="ml-3 mt-3 button is-block is-fullwidth is-success" type="submit">Add User</button>
						</Row>
				</form>
				</div>
				</div>
			</Col>
		</div>
	</Col>
			</>

				)
}

export default Signup