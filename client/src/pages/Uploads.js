import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import Uploads from "../components/Uploads"
import API from "../utils/API";


export const Upload = () => {

	const [file, setFile] = useState({
		fileName: ""
	});
	const [awsData, setAwsData] = useState({
		data: []
	});

	const { fileName } = file;
	const { data } = awsData;

	const ID=data.accessID
	const SECRET=data.secretID
	const BUCKET_NAME = "docusys";

	const getKeys = (userName) => {
		API.getUserKey(userName)
			.then(res => {
				if (!res) return;
				setAwsData({
					data: res.data[0]
				});
			})
			.catch(err => console.log("Error Getting Keys", err))
	}

	//	TODO if no user is any the database the page should still load. It will error if no keys are found
	useEffect(() => {
		getKeys("jmartin")
	}, []);

	const handleInputChange = e => {
		e.preventDefault();
		console.log("VALUE-->",e.target.value);
		const { name, value } = e.target;
		setFile({ ...fileName, [name]: value
		})
	};

	const handleFormSubmit = (awsId, secret, bucket) => {
		console.log("CLICKED-->");

		const file = fileName.split("C:").join(',').split('\\').join(',').split(',').pop();
		// console.log("This is the filename", file)
		API.upload(file, awsId, secret, bucket)

	}

	return (
		<>
			<Uploads />
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<div className="mt-3 form-group">
					<div className="input-group mb-3">
						<div className="custom-file">
							<input
								type="file"
								name="fileName"
								className="custom-file-input"
								id="inputGroupFile02"
								value={fileName}
								onChange={handleInputChange}
							/>
							{/*TODO Need File Name to appear in Browser once Selected*/}
							<label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
						</div>
						<div>
							<button className="input-group-text" id="" onClick={handleFormSubmit(ID, SECRET, BUCKET_NAME)}>Upload</button>
						</div>
					</div>
				</div>
			</Col>

		</>
	)

}

export default Upload;