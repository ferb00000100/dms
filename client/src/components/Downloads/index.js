import React, {useEffect, useState} from 'react';
import{ Col } from "reactstrap";
import { Anchor } from "../../styles";
import s3Image from "./S3_icon.png";
import API from "../../utils/API";

const Downloads = props => {

	const [awsData, setAwsData] = useState({
		data: []
	});

	const { data } = awsData;

	const ID = data.accessID
	const SECRET = data.secretID
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

	useEffect(() => {
		getKeys("jmartin")
	}, []);

	const getFile = (prop,awsId,secret,bucket) => {
		const fileKey = prop.Name
		API.download(fileKey,awsId,secret,bucket)
			.then(res => {
				if (!res) return;

			})
			.catch (err => console.log("Error Getting Keys", err))
	}

	return (
		<>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
			<ul>
				<Anchor>
					<li type="button" onClick={() => getFile(props, ID, SECRET, BUCKET_NAME)}>{props.Name}
				</li>
					<a><img src={s3Image}/></a>
				</Anchor>
			</ul>
			</Col>
		</>
	)
}

export default Downloads;