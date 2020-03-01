import React from "react";
import { Row, Col } from "reactstrap";
import UserDetails from "../components/UserDetails";
import Navbar from "../components/NavBar";

function Users() {

	return (
		<>
			<Navbar />
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<Row>
				<UserDetails/>
				</Row>
			</Col>
		</>
	)

}

export default Users;