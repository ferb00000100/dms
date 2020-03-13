import React from "react";
import { Col } from "reactstrap";
import API from "../utils/API";
import Uploads from "../components/Uploads";

export default class UploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			file: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
			event.preventDefault();
			const formData = new FormData();
			formData.append('myUpload',this.state.file);
			const config = {
				headers: {
					'content-type': 'multipart/form-data'
				}
			};

		this.state = {awsData: []};
		const userName = "jmartin";
		API.getUserKey(userName)
			.then(res => {
				if (!res) return;
				this.setState({awsData: res.data[0]})
				let data = [{ID: res.data[0].accessID, SECRET:res.data[0].secretID, BUCKET_NAME: "docusys"}];
				// API.upload(this.state.value, data);
				// console.log("formdata", formData);
				API.upload(this.state.file, data);
			})
			.catch(err => console.log("Error Getting Keys", err))
	}

	handleChange(event) {
		this.setState({file: event.target.files[0]});
	}

	render() {
		return (
			<>
				<Uploads />
				<Col sm="12" md={{size: 8, offset: 2}}>
					<div className="section is-fullheight">
						<Col md={{size: 12, offset: 0}} className="container">
							{/*<form onSubmit={this.handleSubmit}>*/}
							<form action="/api/upload" method="POST" enctype="multipart/form-data">
								<fieldset>
									<div className="form-group">
										<label htmlFor="exampleInputFile">Upload File</label>
										<input type="file" name="myUpload" className="form-control-file" id="exampleInputFile" onChange={this.handleChange} aria-describedby="fileHelp"></input>
										{/*<input type="file" name="myUpload" className="form-control-file" id="exampleInputFile" onChange={this.handleChange} aria-describedby="fileHelp"></input>*/}
									</div>

									<button type="submit" className="btn btn-success">Submit</button>
								</fieldset>
							</form>
						</Col>
					</div>
				</Col>
			</>

		)
	}
}
