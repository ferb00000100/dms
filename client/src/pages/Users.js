import React from "react";
import { Container, Row, Col } from "reactstrap";
import UserDetails from "../components/UserDetails";

function Users() {

	return (
		<>

			<Container>
				<Col md={12}>
					<Row>
					<UserDetails/>
					</Row>
				</Col>
			</Container>

		</>
	)

}

export default Users;