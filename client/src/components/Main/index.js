import React from 'react';
import NavBar from "../NavBar";
// import { Container } from 'reactstrap';
// import { JumboWrapper } from "../../styles";

const Main = props => {

	return (
		<>
			<NavBar />

			<div className="mt-2 jumbotron">
				<h1 className="display-4">Document Management System</h1>
				<p className="lead">Upload important documents to Amazon S3.</p>
				<hr className="my-4"></hr>
					<p>Store your documents and photos on an encrypted S3 bucket inside AWS</p>

					<p className="lead">
						<a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
					</p>
			</div>

		</>
	)
}

export default Main;