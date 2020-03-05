import React from 'react';
import Navbar from "../NavBar";
import{ Col } from "reactstrap";
import { Headers } from "../../styles"

const Uploads = () => {

	return (
		<>
			<Headers>
				<h1>DMS Uploads</h1>
			</Headers>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<Navbar />
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