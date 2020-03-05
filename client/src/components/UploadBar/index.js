import React, { useState } from "react";
import { Col } from "reactstrap";
import API from "../../utils/API";

const UploadBar = () => {

	const [file, setFile] = useState({
		fileName: ""
	});

	const { fileName } = file;

	const uploadFileMongo = (fileName) => {
		// The fileName comes across with "C:\fakepath\"  We need to strip this out of the file name
		const file = fileName.split("C:").join(',').split('\\').join(',').split(',').pop();
		API.addDocument(fileName)
			.then(res => {
				if (!res) return;
			})
			.catch(err => console.log("Error writing Document to Database", err))
		// console.log("file to Name is", file);
		// console.log("file to Upload is", fileName);
	}

	const handleInputChange = e => {
		const { name, value } = e.target;
		setFile({ ...fileName, [name]: value
		})
	};

	const handleFormSubmit = e => {
		console.log("This is the filename", fileName)
		uploadFileMongo(fileName);
	}

	return (
		<>
			<Col className="mt-3 mb-3"  md={{ size: 12, offset: -4}} >
				<div>
					<div className="input-group">
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
							<label className="custom-file-label" htmlFor="inputGroupFile02">Upload your first file</label>
						</div>
						<div className="input-group-append">
							<button className="input-group-text" id="" onClick={handleFormSubmit}>Upload</button>
						</div>
					</div>
				</div>
			</Col>

		</>
	)

}

export default UploadBar;