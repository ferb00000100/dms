import React from "react";
import Main from "../components/Main";
import {Col} from "reactstrap";
import { Headers } from "../styles"
function MainPage() {


	return (
		<>
			<Headers>
				<h1>DMS Main</h1>
			</Headers>
			<Col sm="12" md={{ size: 10, offset: 2 }}>
			<Main
			/>
			</Col>
		</>
	)

}

export default MainPage;