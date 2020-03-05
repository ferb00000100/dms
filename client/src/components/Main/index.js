import React from 'react';
import NavBar from "../NavBar";
import dmsFlow from "./dms_flow.png";
import {Col} from "reactstrap";

const Main = () => {

	return (
		<>
			<NavBar />
			<div className="mt-2 jumbotron">
				<h1 className="display-4">Document Management System</h1>
				<p className="lead">Upload important documents to Amazon S3.</p>
				<hr className="my-4"></hr>
					<p>Store your documents and photos on an encrypted S3 bucket inside AWS</p>
				<Col sm="12" md={{ size: 8, offset: 1 }}>
					<img src={dmsFlow} alt="dms flow">
					</img>
				</Col>
			</div>
		</>
	)
}

export default Main;