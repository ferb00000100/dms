import React from 'react';
import Navbar from "../NavBar";
import{ Col } from "reactstrap";

const Uploads = () => {

	return (
		<>
			<Navbar />
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<div className=" mt-3 alert alert-success">
					<button type="button" className="close" data-dismiss="alert">&times;</button>
					<h4 className="alert-heading">Upload your files to S3 Here!</h4>
					<p className="mb-0">Choose a file to upload to your AWS S3 bucket. Easy access to your AWS Console can be found <a href="https://aws.amazon.com/console/" className="alert-link">here</a>.</p>
				</div>
			</Col>
		</>
	)
}

export default Uploads;