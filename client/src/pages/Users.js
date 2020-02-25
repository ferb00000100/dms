import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import UserDetails from "../components/UserDetails";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";

function Users() {


return (
<>
	<Container>
		<Col md={12}>
			<Row>
				<UserDetails
				/>
			</Row>
		</Col>
	</Container>

</>
	)

}

export default Users;