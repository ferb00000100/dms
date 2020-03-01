import React from "react";
import Main from "../components/Main";
import {Col} from "reactstrap";

function MainPage() {


	return (
		<>
			<h1>DMS Main</h1>
			<Col sm="12" md={{ size: 10, offset: 2 }}>
			<Main
			/>
			</Col>
		</>
	)

}

export default MainPage;