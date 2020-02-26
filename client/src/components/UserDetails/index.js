import React from 'react';
import { DetailsWrapper } from "../../styles/";
import { Container, Col, Row } from "reactstrap";
import {Route} from "react-router-dom";
const UserDetails = props => {

	return (
		<>
			<Col md={6}>
				<DetailsWrapper>
					<h3>{props.firstName} {props.lastName}</h3>
					<p><strong>Username:</strong> {props.userName}</p>
					<p><strong>Documents:</strong> {props.documents}</p>
					</DetailsWrapper>
			</Col>
		</>
	)
}

export default UserDetails;